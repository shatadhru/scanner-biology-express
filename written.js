/**
 * ============================================================================
 * Medical & University Admission Biology Written Practice (written.js)
 * High-Performance, Mobile-First, KaTeX & AI Evaluator Integrated
 * ============================================================================
 */

(function () {
  'use strict';

  // --- Constants & Config ---
  const API_BIOLOGY_AI = '/api/biology-ai';
  const API_SYNC = '/api/sync';
  const API_CONFIG = '/api/config';
  const DRAFT_STORAGE_PREFIX = 'written_draft_';
  const EVAL_STORAGE_PREFIX = 'written_eval_';

  // --- State Variables ---
  let allWrittenQuestions = [];
  let filteredQuestions = [];
  let currentUserId = 'student';
  let allAnswersRevealed = false;
  let practicedQuestionIds = new Set();
  let evaluatedQuestionIds = new Set();

  // Filter state
  let currentSubject = 'all';
  let currentChapter = 'all';
  let currentUni = 'all';
  let searchQuery = '';

  // --- DOM Elements ---
  const elViewport = document.getElementById('written-viewport');
  const elFilterPanel = document.getElementById('written-filter-panel');
  const elBtnToggleFilters = document.getElementById('btn-toggle-filters');
  const elBtnToggleAllAnswers = document.getElementById('btn-toggle-all-answers');
  const elFilterSubject = document.getElementById('filter-subject');
  const elFilterChapter = document.getElementById('filter-chapter');
  const elFilterUniversity = document.getElementById('filter-university');
  const elFilterSearch = document.getElementById('filter-search');
  const elActiveWrittenCount = document.getElementById('active-written-count');
  const elWrittenTotalCount = document.getElementById('written-total-count');
  const elWrittenPracticedCount = document.getElementById('written-practiced-count');
  const elWrittenEvaluatedCount = document.getElementById('written-evaluated-count');

  // --- KaTeX & Markdown Rendering Utilities ---

  function renderKaTeX(text) {
    if (!text) return '';
    if (!window.katex) return text;

    // Replace display math $$...$$
    let formatted = text.replace(/\$\$([\s\S]+?)\$\$/g, (match, math) => {
      try {
        return window.katex.renderToString(math.trim(), { displayMode: true, throwOnError: false });
      } catch (e) {
        return match;
      }
    });

    // Replace inline math $...$
    formatted = formatted.replace(/\$([^\$\n]+?)\$/g, (match, math) => {
      try {
        return window.katex.renderToString(math.trim(), { displayMode: false, throwOnError: false });
      } catch (e) {
        return match;
      }
    });

    return formatted;
  }

  function parseMarkdownToHtml(md) {
    if (!md) return '';
    let text = md;

    // 1. Process Markdown Tables
    const tableRegex = /((?:\|[^\n]+\|\r?\n)+)/g;
    text = text.replace(tableRegex, (match) => {
      const lines = match.trim().split('\n').map(l => l.trim()).filter(l => l);
      if (lines.length < 2) return match;

      let html = '<div class="table-responsive"><table>';
      let isHeader = true;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.match(/^\|(?:\s*:?-+:?\s*\|)+$/)) {
          isHeader = false;
          continue;
        }

        const cells = line.split('|').slice(1, -1);
        html += '<tr>';
        cells.forEach(c => {
          const content = c.trim().replace(/<br\s*\/?>/gi, '<br>');
          if (isHeader) {
            html += `<th>${content}</th>`;
          } else {
            html += `<td>${content}</td>`;
          }
        });
        html += '</tr>';
      }
      html += '</table></div>';
      return html;
    });

    // 2. Bold & Italic
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // 3. Line breaks & Paragraphs
    text = text.replace(/\n\n+/g, '</p><p>');
    text = text.replace(/\n/g, '<br>');
    text = `<p>${text}</p>`;

    // 4. Render KaTeX
    text = renderKaTeX(text);

    return text;
  }

  // --- Initialization ---

  document.addEventListener('DOMContentLoaded', async () => {
    setupEventListeners();
    await loadWrittenQuestions();
  });

  // --- Data Loading & Filtering ---

  async function loadWrittenQuestions() {
    try {
      const res = await fetch('/data/biology-questions.json');
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const data = await res.json();
      const rawQuestions = Array.isArray(data) ? data : (data.questions || []);

      // Filter only written questions (type === 'written')
      allWrittenQuestions = rawQuestions.filter(q => q.type === 'written');

      // Populate Chapters in Filter
      populateChapterDropdown();

      // Read saved drafts from localStorage
      loadSavedStats();

      // Apply initial filters
      applyFilters();

    } catch (err) {
      console.error('Error loading written questions:', err);
      elViewport.innerHTML = `<div style="text-align: center; padding: 40px; color: var(--color-danger);">
        Error loading questions: ${err.message}. Please refresh the page.
      </div>`;
    }
  }

  function populateChapterDropdown() {
    if (!elFilterChapter) return;
    const chapters = new Set();
    allWrittenQuestions.forEach(q => {
      if (q.chapter) chapters.add(q.chapter);
    });

    elFilterChapter.innerHTML = '<option value="all">সকল অধ্যায় (All Chapters)</option>';
    Array.from(chapters).sort().forEach(ch => {
      const opt = document.createElement('option');
      opt.value = ch;
      opt.textContent = ch;
      elFilterChapter.appendChild(opt);
    });
  }

  function setupEventListeners() {
    if (elBtnToggleFilters && elFilterPanel) {
      elBtnToggleFilters.addEventListener('click', () => {
        elFilterPanel.classList.toggle('collapsed');
      });
    }

    if (elBtnToggleAllAnswers) {
      elBtnToggleAllAnswers.addEventListener('click', () => {
        allAnswersRevealed = !allAnswersRevealed;
        elBtnToggleAllAnswers.textContent = allAnswersRevealed ? 'সকল উত্তর গোপন করুন' : 'সকল উত্তর উন্মুক্ত';
        document.querySelectorAll('.model-answer-container').forEach(el => {
          el.style.display = allAnswersRevealed ? 'block' : 'none';
        });
        document.querySelectorAll('.btn-model-toggle').forEach(btn => {
          btn.textContent = allAnswersRevealed ? 'মডেল উত্তর লুকান' : 'মডেল উত্তর দেখুন';
        });
      });
    }

    if (elFilterSubject) {
      elFilterSubject.addEventListener('change', () => {
        currentSubject = elFilterSubject.value;
        applyFilters();
      });
    }

    if (elFilterChapter) {
      elFilterChapter.addEventListener('change', () => {
        currentChapter = elFilterChapter.value;
        applyFilters();
      });
    }

    if (elFilterUniversity) {
      elFilterUniversity.addEventListener('change', () => {
        currentUni = elFilterUniversity.value;
        applyFilters();
      });
    }

    if (elFilterSearch) {
      let debounceTimer = null;
      elFilterSearch.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          searchQuery = (elFilterSearch.value || '').trim().toLowerCase();
          applyFilters();
        }, 250);
      });
    }
  }

  function applyFilters() {
    filteredQuestions = allWrittenQuestions.filter(q => {
      // Subject filter
      if (currentSubject !== 'all' && q.subject !== currentSubject) return false;

      // Chapter filter
      if (currentChapter !== 'all' && q.chapter !== currentChapter) return false;

      // University filter
      if (currentUni !== 'all') {
        const unis = q.universities || [];
        const inUnis = unis.some(u => u.toLowerCase().includes(currentUni.toLowerCase()));
        const inQ = (q.question?.content || '').toLowerCase().includes(currentUni.toLowerCase());
        const inA = (q.answer?.content || '').toLowerCase().includes(currentUni.toLowerCase());
        if (!inUnis && !inQ && !inA) return false;
      }

      // Search keyword filter
      if (searchQuery) {
        const qContent = (q.question?.content || '').toLowerCase();
        const aContent = (q.answer?.content || '').toLowerCase();
        const topic = (q.topic || '').toLowerCase();
        if (!qContent.includes(searchQuery) && !aContent.includes(searchQuery) && !topic.includes(searchQuery)) {
          return false;
        }
      }

      return true;
    });

    updateMetricsDisplay();
    renderWrittenQuestions();
  }

  function updateMetricsDisplay() {
    if (elActiveWrittenCount) elActiveWrittenCount.textContent = `${filteredQuestions.length} টি প্রশ্ন দৃশ্যমান`;
    if (elWrittenTotalCount) elWrittenTotalCount.textContent = allWrittenQuestions.length;
    if (elWrittenPracticedCount) elWrittenPracticedCount.textContent = practicedQuestionIds.size;
    if (elWrittenEvaluatedCount) elWrittenEvaluatedCount.textContent = evaluatedQuestionIds.size;
  }

  function loadSavedStats() {
    allWrittenQuestions.forEach(q => {
      if (localStorage.getItem(DRAFT_STORAGE_PREFIX + q.id)) {
        practicedQuestionIds.add(q.id);
      }
      if (localStorage.getItem(EVAL_STORAGE_PREFIX + q.id)) {
        evaluatedQuestionIds.add(q.id);
      }
    });
  }

  // --- Rendering Written Question Cards ---

  function renderWrittenQuestions() {
    if (!elViewport) return;

    if (filteredQuestions.length === 0) {
      elViewport.innerHTML = `<div style="text-align: center; padding: 48px 16px; color: var(--text-muted);">
        কোনো প্রশ্ন পাওয়া যায়নি। ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন।
      </div>`;
      return;
    }

    elViewport.innerHTML = '';
    const fragment = document.createDocumentFragment();

    filteredQuestions.forEach((q, idx) => {
      const card = createWrittenQuestionCard(q, idx + 1);
      fragment.appendChild(card);
    });

    elViewport.appendChild(fragment);
  }

  function createWrittenQuestionCard(q, displayIdx) {
    const card = document.createElement('article');
    card.className = 'written-card';
    card.id = `written-card-${q.id}`;

    const qContent = q.question?.content || 'প্রশ্ন বিবরণী অনুপস্থিত';
    const aContent = q.answer?.content || 'মডেল উত্তর এখনো সংরক্ষিত হয়নি';
    const universities = q.universities || [];
    const uniTag = universities.length ? universities.join(', ') : 'Admission Written';

    // Check saved draft & evaluation
    const savedDraft = localStorage.getItem(DRAFT_STORAGE_PREFIX + q.id) || '';
    const savedEvalJson = localStorage.getItem(EVAL_STORAGE_PREFIX + q.id);

    // 1. Header & Badges
    const header = document.createElement('div');
    header.className = 'written-header';
    header.innerHTML = `
      <div class="written-badge-wrap">
        <span class="written-num-badge">লিখিত #${displayIdx}</span>
        <span class="written-uni-badge">${uniTag}</span>
        <span class="tag tag-chapter">${q.chapter || 'অধ্যায়'}</span>
        <span class="tag tag-subject">${q.subject || 'Biology'}</span>
      </div>
      <div class="written-marks-badge" style="font-size: 11px; font-weight: 700; color: var(--text-muted);">
        পূর্ণমান: ৫
      </div>
    `;

    // 2. Question Text
    const qTextEl = document.createElement('div');
    qTextEl.className = 'written-q-text';
    qTextEl.innerHTML = parseMarkdownToHtml(qContent);

    // 3. Student Drafting Canvas
    const draftSection = document.createElement('div');
    draftSection.className = 'student-draft-section';

    const draftLabelRow = document.createElement('div');
    draftLabelRow.className = 'draft-label-row';
    draftLabelRow.innerHTML = `
      <span class="draft-label">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        আপনার উত্তর ড্রাফট করুন (Student Answer Practice)
      </span>
      <span class="draft-counter" id="counter-${q.id}">${savedDraft.length} অক্ষর</span>
    `;

    const textarea = document.createElement('textarea');
    textarea.className = 'written-textarea';
    textarea.id = `textarea-${q.id}`;
    textarea.placeholder = 'এখানে আপনার উত্তর পয়েন্ট আকারে বা পার্থক্য ছক আকারে লিখুন... (পরীক্ষার মতো অনুশীলন করুন)';
    textarea.value = savedDraft;

    textarea.addEventListener('input', () => {
      const val = textarea.value;
      const counterEl = document.getElementById(`counter-${q.id}`);
      if (counterEl) counterEl.textContent = `${val.length} অক্ষর`;

      if (val.trim()) {
        localStorage.setItem(DRAFT_STORAGE_PREFIX + q.id, val);
        practicedQuestionIds.add(q.id);
      } else {
        localStorage.removeItem(DRAFT_STORAGE_PREFIX + q.id);
        practicedQuestionIds.delete(q.id);
      }
      updateMetricsDisplay();
    });

    // 4. Action Buttons
    const draftActions = document.createElement('div');
    draftActions.className = 'draft-actions';

    const btnEval = document.createElement('button');
    btnEval.className = 'btn-ai-eval';
    btnEval.innerHTML = `
      <span class="ai-pulse-dot" style="display: none;"></span>
      <span>🤖 Shatadhru AI মূল্যায়ন নিন (DU/Medical Criteria)</span>
    `;

    const btnToggleModel = document.createElement('button');
    btnToggleModel.className = 'btn-model-toggle';
    btnToggleModel.textContent = allAnswersRevealed ? 'মডেল উত্তর লুকান' : 'মডেল উত্তর দেখুন';

    draftActions.appendChild(btnEval);
    draftActions.appendChild(btnToggleModel);

    draftSection.appendChild(draftLabelRow);
    draftSection.appendChild(textarea);
    draftSection.appendChild(draftActions);

    // 5. AI Evaluation Slot
    const evalSlot = document.createElement('div');
    evalSlot.id = `eval-slot-${q.id}`;

    if (savedEvalJson) {
      try {
        const parsed = JSON.parse(savedEvalJson);
        evalSlot.appendChild(renderEvaluationBox(parsed, q));
      } catch (e) {}
    }

    // 6. Textbook Model Answer Section
    const modelAnswerSection = document.createElement('div');
    modelAnswerSection.className = 'model-answer-container';
    modelAnswerSection.id = `model-ans-${q.id}`;
    modelAnswerSection.style.display = allAnswersRevealed ? 'block' : 'none';

    modelAnswerSection.innerHTML = `
      <div class="model-answer-title">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        বোর্ড প্রমিত মডেল উত্তর (ড. আবুল হাসান ও প্রফেসর গাজী আজমল পাঠ্যবই)
      </div>
      <div class="model-answer-body">
        ${parseMarkdownToHtml(aContent)}
      </div>
    `;

    // Event: Toggle Model Answer
    btnToggleModel.addEventListener('click', () => {
      const isVisible = modelAnswerSection.style.display === 'block';
      modelAnswerSection.style.display = isVisible ? 'none' : 'block';
      btnToggleModel.textContent = isVisible ? 'মডেল উত্তর দেখুন' : 'মডেল উত্তর লুকান';
    });

    // Event: AI Evaluation
    btnEval.addEventListener('click', async () => {
      const studentAns = textarea.value.trim();
      if (!studentAns) {
        alert('অনুগ্রহ করে প্রথমে কিছু উত্তর ড্রাফট করুন, এরপর AI মূল্যায়ন নিন।');
        textarea.focus();
        return;
      }

      btnEval.disabled = true;
      const dot = btnEval.querySelector('.ai-pulse-dot');
      if (dot) dot.style.display = 'inline-block';
      btnEval.querySelector('span:last-child').textContent = 'মূল্যায়ন চলছে...';

      try {
        const resp = await fetch(API_BIOLOGY_AI, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'evaluate_written',
            originalQuestion: q,
            studentAnswer: studentAns,
            chapter: q.chapter,
            subject: q.subject,
            maxMarks: 5
          })
        });

        if (!resp.ok) throw new Error(`AI Evaluation failed: ${resp.status}`);
        const result = await resp.json();

        const evalData = result.data || result;
        evalSlot.innerHTML = '';
        evalSlot.appendChild(renderEvaluationBox(evalData, q));

        // Save evaluation to localStorage & Supabase
        localStorage.setItem(EVAL_STORAGE_PREFIX + q.id, JSON.stringify(evalData));
        evaluatedQuestionIds.add(q.id);
        updateMetricsDisplay();

        syncEvaluationToSupabase(q.id, studentAns, evalData);

      } catch (err) {
        console.error('Eval error:', err);
        alert('AI মূল্যায়ন করতে সমস্যা হয়েছে: ' + err.message);
      } finally {
        btnEval.disabled = false;
        if (dot) dot.style.display = 'none';
        btnEval.querySelector('span:last-child').textContent = '🤖 পুনর্মূল্যায়ন নিন (Re-evaluate)';
      }
    });

    // Assemble Card
    card.appendChild(header);
    card.appendChild(qTextEl);
    card.appendChild(draftSection);
    card.appendChild(evalSlot);
    card.appendChild(modelAnswerSection);

    return card;
  }

  // --- Render AI Evaluation Result Box ---

  function renderEvaluationBox(data, q) {
    const box = document.createElement('div');
    box.className = 'ai-eval-container';

    const marksObtained = data.marksObtained != null ? data.marksObtained : (data.score || 0);
    const maxMarks = data.maxMarks || 5;
    const verdict = data.verdict || 'মূল্যায়ন সম্পন্ন';

    let correctListHtml = '';
    if (Array.isArray(data.correctPoints) && data.correctPoints.length) {
      correctListHtml = `
        <div class="eval-section-title" style="color: var(--color-success);">সঠিক পয়েন্টসমূহ (Correct Points):</div>
        <ul class="eval-list correct">
          ${data.correctPoints.map(p => `<li>${renderKaTeX(p)}</li>`).join('')}
        </ul>
      `;
    }

    let missingListHtml = '';
    if (Array.isArray(data.missingPoints) && data.missingPoints.length) {
      missingListHtml = `
        <div class="eval-section-title" style="color: var(--color-danger);">বাদ পড়া বৈজ্ঞানিক পরিভাষা ও পয়েন্ট (Missing Points):</div>
        <ul class="eval-list missing">
          ${data.missingPoints.map(p => `<li>${renderKaTeX(p)}</li>`).join('')}
        </ul>
      `;
    }

    box.innerHTML = `
      <div class="ai-eval-header">
        <div class="ai-eval-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          Shatadhru AI (শতদ্রু AI) মূল্যায়ন ও গ্রেডিং
        </div>
        <div class="eval-score-badge">
          ${marksObtained} / ${maxMarks} (${verdict})
        </div>
      </div>

      <div class="eval-summary-box">
        ${renderKaTeX(data.evaluationSummary || '')}
      </div>

      ${correctListHtml}
      ${missingListHtml}

      ${data.scientificTerminologyFeedback ? `
        <div class="eval-tip-box">
          <strong>বৈজ্ঞানিক পরিভাষা নিরীক্ষা:</strong> ${renderKaTeX(data.scientificTerminologyFeedback)}
        </div>
      ` : ''}

      ${data.improvementTips ? `
        <div class="eval-tip-box" style="border-left-color: var(--color-warning);">
          <strong>১০০% পূর্ণ নম্বর পাওয়ার পরামর্শ:</strong> ${renderKaTeX(data.improvementTips)}
        </div>
      ` : ''}

      ${data.highYieldKeyConcept ? `
        <div class="eval-tip-box" style="border-left-color: var(--color-primary); margin-top: 6px;">
          <strong>🎯 ভর্তি স্পেশাল হ্যাকস:</strong> ${renderKaTeX(data.highYieldKeyConcept)}
        </div>
      ` : ''}
    `;

    return box;
  }

  // --- Background Supabase Sync ---

  async function syncEvaluationToSupabase(questionId, studentAnswer, evaluation) {
    try {
      await fetch(API_SYNC, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'save_written_evaluation',
          payload: {
            userId: currentUserId,
            questionId,
            studentAnswer,
            evaluation
          }
        })
      });
    } catch (e) {
      console.warn('Background sync notice:', e.message);
    }
  }

})();
