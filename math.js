/**
 * Higher Mathematics Question Practice System - Mobile-First Learning Engine
 * Shatadhru AI (শতদ্রু AI) - University & Engineering Admission Standard
 * Vanilla JavaScript (Zero framework overhead, high performance, robust KaTeX math rendering)
 */

(function () {
  'use strict';

  // --- Storage Keys ---
  const PREFS_STORAGE_KEY = 'math_user_prefs_v1';
  const SESSION_STORAGE_KEY = 'math_session_state_v1';
  const MISTAKES_STORAGE_KEY = 'math_user_mistakes_v1';
  const AI_CACHE_KEY = 'math_ai_explanations_cache_v1';
  const CORRECTIONS_STORAGE_KEY = 'math_user_corrections_v1';

  // --- Endpoints ---
  const DATA_ENDPOINT = '/data/math-questions.json';
  const API_MATH_AI_ENDPOINT = '/api/math-ai';

  // --- Default User Preferences ---
  let userPrefs = {
    viewMode: 'question',          // 'question', 'page', 'scroll'
    questionsPerPage: 5,           // 5, 10, 20, 50
    theme: 'light',                // 'light', 'dark', 'system'
    fontSize: 16,                  // 14, 16, 18, 20
    lineHeight: 1.6,               // 1.4, 1.6, 1.8
    spacing: 'comfortable',        // 'compact', 'comfortable', 'spacious'
    practiceMode: 'original',      // 'original', 'mistakes_first'
    shuffleOptions: false,
    paperFilter: 'all',            // 'all', 'First-Paper', 'Second-Paper'
    chapterFilter: 'all',
    uniFilter: 'all',              // 'all', 'BUET', 'DU', 'RU', 'CU', 'JU', 'GST', etc.
    yearFilter: 'all',             // 'all', '25-26', '24-25', etc.
    aiPersona: 'admission',        // 'admission', 'deep', '10_year_kid'
    durationSeconds: 3600
  };

  // --- Session State ---
  let allQuestions = [];
  let activeQuestions = [];
  let currentIndex = 0;

  let sessionState = {
    sessionId: null,
    durationSeconds: 3600,
    remainingSeconds: 3600,
    isRunning: false,
    answers: {} // { [qId]: { selected, isCorrect, revealed, markedReview } }
  };

  let userMistakes = {};          // { [qId]: count }
  let userCorrections = {};       // { [qId]: { correctedQuestion, correctedOptions, correctedAnswer, reviewSummary, appliedAt } }
  let aiExplanationsCache = {};   // { [qId_persona]: text }
  let timerInterval = null;
  let isAiRequestPending = {};
  let currentSuggestionMarkdown = '';

  // --- DOM Elements ---
  const elViewport = document.getElementById('questions-viewport');
  const elChapterIndicator = document.getElementById('active-chapter-indicator');
  const elTimerDisplay = document.getElementById('timer-display');
  const btnQuickSession = document.getElementById('btn-quick-session');
  const btnToggleScrollMode = document.getElementById('btn-toggle-scroll-mode');
  const elScrollToggleIcon = document.getElementById('scroll-toggle-icon');
  const elScrollToggleText = document.getElementById('scroll-toggle-text');
  const btnOpenCustomization = document.getElementById('btn-open-customization');

  const elProgressSummary = document.getElementById('progress-summary');
  const elMistakesCountDisplay = document.getElementById('mistakes-count-display');
  const elPaceDisplay = document.getElementById('pace-display');
  const elProgressBarFill = document.getElementById('progress-bar-fill');

  const btnNavPrev = document.getElementById('btn-nav-prev');
  const btnNavNext = document.getElementById('btn-nav-next');
  const elNavPositionIndicator = document.getElementById('nav-position-indicator');
  const btnToggleGrid = document.getElementById('btn-toggle-grid');

  // Drawer Elements
  const elDrawerBackdrop = document.getElementById('drawer-backdrop');
  const elDrawer = document.getElementById('customization-drawer');
  const btnCloseDrawer = document.getElementById('btn-close-drawer');
  const elPageModeSettingsBlock = document.getElementById('page-mode-settings-block');

  const elPaperSelectorSegment = document.getElementById('paper-selector-segment');
  const elDrawerChapterSelect = document.getElementById('drawer-chapter-select');
  const elDrawerUniSelect = document.getElementById('drawer-uni-select');
  const elDrawerYearSelect = document.getElementById('drawer-year-select');
  const elDrawerAiPersonaSelect = document.getElementById('drawer-ai-persona-select');
  const btnGenerateSuggestions = document.getElementById('btn-generate-suggestions');
  const elDrawerDurationSelect = document.getElementById('drawer-duration-select');
  const drawerShuffleToggle = document.getElementById('drawer-shuffle-options-toggle');
  const btnDrawerRestart = document.getElementById('btn-drawer-restart');
  const btnDrawerEnd = document.getElementById('btn-drawer-end');

  // Palette Elements
  const elPaletteBackdrop = document.getElementById('palette-backdrop');
  const elPaletteModal = document.getElementById('question-palette-modal');
  const elPaletteGrid = document.getElementById('palette-grid');
  const btnClosePalette = document.getElementById('btn-close-palette');

  // Suggestion Modal Elements
  const elSuggestionBackdrop = document.getElementById('suggestion-backdrop');
  const elSuggestionModal = document.getElementById('suggestion-modal');
  const elSuggestionTitle = document.getElementById('suggestion-title');
  const elSuggestionBody = document.getElementById('suggestion-body');
  const btnCopySuggestion = document.getElementById('btn-copy-suggestion');
  const btnDownloadSuggestion = document.getElementById('btn-download-suggestion');
  const btnCloseSuggestion = document.getElementById('btn-close-suggestion');
  const elSuggestionChatThread = document.getElementById('suggestion-chat-thread');
  const inputSuggestionQuery = document.getElementById('input-suggestion-query');
  const btnSubmitSuggestionQuery = document.getElementById('btn-submit-suggestion-query');

  // --- KaTeX Auto-Render Helper ---
  function renderMath(targetElement) {
    if (!targetElement) return;
    if (window.renderMathInElement) {
      try {
        renderMathInElement(targetElement, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true }
          ],
          throwOnError: false,
          errorColor: '#ef4444'
        });
      } catch (err) {
        console.warn('KaTeX auto-render notice:', err);
      }
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- Initialize Application ---
  async function init() {
    loadPreferences();
    loadSessionState();
    loadCorrections();
    applyAppearanceSettings();
    attachGlobalListeners();

    try {
      const resp = await fetch(DATA_ENDPOINT);
      if (!resp.ok) throw new Error(`HTTP Error: ${resp.status}`);
      const dataset = await resp.json();
      allQuestions = dataset.questions || [];
      console.log(`[Math Practice] Loaded ${allQuestions.length} questions successfully.`);

      applyLoadedCorrectionsToQuestions();
      populateFilterDropdowns();
      applyFiltersAndQueue();
      renderCurrentView();
    } catch (err) {
      console.error('Failed to load math questions:', err);
      elViewport.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--color-danger);">
          <h3>প্রশ্নব্যাংক লোড করতে সমস্যা হয়েছে!</h3>
          <p>${err.message}</p>
          <button class="btn btn-primary" onclick="location.reload()" style="margin-top: 1rem;">পুনরায় চেষ্টা করুন</button>
        </div>
      `;
    }
  }

  // --- Preferences & LocalStorage ---
  function loadPreferences() {
    try {
      const raw = localStorage.getItem(PREFS_STORAGE_KEY);
      if (raw) userPrefs = Object.assign(userPrefs, JSON.parse(raw));
      
      const rawMistakes = localStorage.getItem(MISTAKES_STORAGE_KEY);
      if (rawMistakes) userMistakes = JSON.parse(rawMistakes);
      
      const rawAi = localStorage.getItem(AI_CACHE_KEY);
      if (rawAi) aiExplanationsCache = JSON.parse(rawAi);
    } catch (e) {
      console.warn('Error reading preferences from localStorage:', e);
    }
  }

  function savePreferences() {
    try {
      localStorage.setItem(PREFS_STORAGE_KEY, JSON.stringify(userPrefs));
    } catch (e) {
      console.warn('Error saving preferences:', e);
    }
  }

  function loadSessionState() {
    try {
      const raw = localStorage.getItem(SESSION_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        sessionState = Object.assign(sessionState, parsed);
        sessionState.remainingSeconds = sessionState.durationSeconds;
        sessionState.isRunning = false;
      }
    } catch (e) {
      console.warn('Error loading session state:', e);
    }
  }

  function saveSessionState() {
    try {
      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionState));
    } catch (e) {
      console.warn('Error saving session state:', e);
    }
  }

  function loadCorrections() {
    try {
      const saved = localStorage.getItem(CORRECTIONS_STORAGE_KEY);
      if (saved) userCorrections = JSON.parse(saved);
    } catch (e) {
      console.warn('Error reading corrections from localStorage:', e);
    }
  }

  function saveCorrections() {
    try {
      localStorage.setItem(CORRECTIONS_STORAGE_KEY, JSON.stringify(userCorrections));
    } catch (e) {
      console.warn('Error saving corrections:', e);
    }
  }

  function applyLoadedCorrectionsToQuestions() {
    if (!allQuestions || !allQuestions.length) return;
    let count = 0;
    allQuestions.forEach(q => {
      const corr = userCorrections[q.id];
      if (corr) {
        if (corr.correctedQuestion && corr.correctedQuestion.trim()) {
          q.question.content = corr.correctedQuestion.trim();
        }
        if (corr.correctedOptions && Array.isArray(corr.correctedOptions) && corr.correctedOptions.length > 0) {
          q.options = corr.correctedOptions;
        }
        if (corr.correctedAnswer && corr.correctedAnswer.trim()) {
          q.answer = corr.correctedAnswer.trim().toLowerCase();
        }
        q.isCorrected = true;
        q.reviewSummary = corr.reviewSummary || '';
        count++;
      }
    });
    if (count > 0) {
      console.log(`[Math Corrections] Applied ${count} user corrections from localStorage.`);
    }
  }



  function applyAppearanceSettings() {
    document.documentElement.style.setProperty('--user-font-size', `${userPrefs.fontSize || 16}px`);
    document.documentElement.style.setProperty('--user-line-height', `${userPrefs.lineHeight || 1.6}`);

    const spacingMap = { compact: '10px', comfortable: '16px', spacious: '24px' };
    document.documentElement.style.setProperty('--user-spacing', spacingMap[userPrefs.spacing] || '16px');

    let resolvedTheme = userPrefs.theme || 'light';
    if (resolvedTheme === 'system') {
      resolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', resolvedTheme);

    syncDrawerControls();
  }

  function syncDrawerControls() {
    // Mode
    document.querySelectorAll('.segmented-control button[data-mode]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === userPrefs.viewMode);
    });

    if (elPageModeSettingsBlock) {
      elPageModeSettingsBlock.style.display = userPrefs.viewMode === 'page' ? 'block' : 'none';
    }

    // Per Page
    document.querySelectorAll('#per-page-chips button').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.dataset.perPage, 10) === userPrefs.questionsPerPage);
    });

    // Theme
    document.querySelectorAll('#theme-chips button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === userPrefs.theme);
    });

    // Font size
    document.querySelectorAll('#font-size-chips button').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.dataset.size, 10) === userPrefs.fontSize);
    });

    // Line height
    document.querySelectorAll('#line-height-chips button').forEach(btn => {
      btn.classList.toggle('active', parseFloat(btn.dataset.lh) === userPrefs.lineHeight);
    });

    // Spacing
    document.querySelectorAll('#spacing-chips button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.spacing === userPrefs.spacing);
    });

    // Paper selector
    if (elPaperSelectorSegment) {
      elPaperSelectorSegment.querySelectorAll('button[data-paper]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.paper === userPrefs.paperFilter);
      });
    }

    // Sequence
    document.querySelectorAll('.segmented-control button[data-seq]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.seq === userPrefs.practiceMode);
    });

    if (drawerShuffleToggle) {
      drawerShuffleToggle.checked = !!userPrefs.shuffleOptions;
    }

    if (elDrawerChapterSelect) {
      elDrawerChapterSelect.value = userPrefs.chapterFilter || 'all';
    }
    if (elDrawerUniSelect) {
      elDrawerUniSelect.value = userPrefs.uniFilter || 'all';
    }
    if (elDrawerYearSelect) {
      elDrawerYearSelect.value = userPrefs.yearFilter || 'all';
    }
    if (elDrawerAiPersonaSelect) {
      elDrawerAiPersonaSelect.value = userPrefs.aiPersona || 'admission';
    }
    if (elDrawerDurationSelect) {
      elDrawerDurationSelect.value = String(userPrefs.durationSeconds || 3600);
    }
  }

  function openDrawer() {
    syncDrawerControls();
    if (elDrawerBackdrop) {
      elDrawerBackdrop.style.display = 'block';
      elDrawerBackdrop.classList.add('active');
    }
    if (elDrawer) {
      elDrawer.style.display = 'flex';
      requestAnimationFrame(() => elDrawer.classList.add('active'));
    }
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (elDrawer) {
      elDrawer.classList.remove('active');
      setTimeout(() => {
        if (!elDrawer.classList.contains('active')) {
          elDrawer.style.display = 'none';
        }
      }, 250);
    }
    if (elDrawerBackdrop) {
      elDrawerBackdrop.classList.remove('active');
      setTimeout(() => {
        if (!elDrawerBackdrop.classList.contains('active')) {
          elDrawerBackdrop.style.display = 'none';
        }
      }, 250);
    }
    document.body.style.overflow = '';
  }

  function openPalette() {
    renderPaletteGrid();
    if (elPaletteBackdrop) {
      elPaletteBackdrop.style.display = 'block';
      elPaletteBackdrop.classList.add('active');
    }
    if (elPaletteModal) {
      elPaletteModal.style.display = 'flex';
      requestAnimationFrame(() => elPaletteModal.classList.add('active'));
    }
    document.body.style.overflow = 'hidden';
  }

  function closePalette() {
    if (elPaletteModal) {
      elPaletteModal.classList.remove('active');
      setTimeout(() => {
        if (!elPaletteModal.classList.contains('active')) {
          elPaletteModal.style.display = 'none';
        }
      }, 250);
    }
    if (elPaletteBackdrop) {
      elPaletteBackdrop.classList.remove('active');
      setTimeout(() => {
        if (!elPaletteBackdrop.classList.contains('active')) {
          elPaletteBackdrop.style.display = 'none';
        }
      }, 250);
    }
    document.body.style.overflow = '';
  }

  function renderPaletteGrid() {
    if (!elPaletteGrid) return;
    elPaletteGrid.innerHTML = '';

    activeQuestions.forEach((q, idx) => {
      const item = document.createElement('div');
      item.className = 'palette-item';
      item.textContent = idx + 1;

      const qState = sessionState.answers[q.id];
      if (idx === currentIndex) {
        item.classList.add('current');
      } else if (qState && qState.revealed) {
        if (qState.isCorrect) item.classList.add('answered');
        else item.classList.add('mistake');
      } else if (qState && qState.markedReview) {
        item.classList.add('review');
      }

      item.addEventListener('click', () => {
        currentIndex = idx;
        closePalette();
        if (userPrefs.viewMode === 'scroll') {
          const targetCard = document.getElementById(`q-card-${q.id}`);
          if (targetCard) {
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          } else {
            renderCurrentView();
          }
        } else {
          renderCurrentView();
        }
      });

      elPaletteGrid.appendChild(item);
    });
  }

  function openSuggestionModal() {
    if (elSuggestionBackdrop) {
      elSuggestionBackdrop.style.display = 'block';
      elSuggestionBackdrop.classList.add('active');
    }
    if (elSuggestionModal) {
      elSuggestionModal.style.display = 'flex';
      requestAnimationFrame(() => elSuggestionModal.classList.add('active'));
    }
    document.body.style.overflow = 'hidden';
  }

  function closeSuggestionModal() {
    if (elSuggestionModal) {
      elSuggestionModal.classList.remove('active');
      setTimeout(() => {
        if (!elSuggestionModal.classList.contains('active')) {
          elSuggestionModal.style.display = 'none';
        }
      }, 250);
    }
    if (elSuggestionBackdrop) {
      elSuggestionBackdrop.classList.remove('active');
      setTimeout(() => {
        if (!elSuggestionBackdrop.classList.contains('active')) {
          elSuggestionBackdrop.style.display = 'none';
        }
      }, 250);
    }
    document.body.style.overflow = '';
  }


  // --- Filters & Question Queue ---
  function populateFilterDropdowns() {
    // Chapters
    const chaptersSet = new Set();
    const uniSet = new Set();
    const yearSet = new Set();

    allQuestions.forEach(q => {
      if (q.chapter) chaptersSet.add(q.chapter);
      if (q.university && q.university !== 'General') uniSet.add(q.university);
      if (q.year && q.year !== 'Practice') yearSet.add(q.year);
    });

    if (elDrawerChapterSelect) {
      elDrawerChapterSelect.innerHTML = '<option value="all">সকল অধ্যায় (All Chapters)</option>';
      Array.from(chaptersSet).sort().forEach(ch => {
        const opt = document.createElement('option');
        opt.value = ch;
        opt.textContent = ch;
        if (userPrefs.chapterFilter === ch) opt.selected = true;
        elDrawerChapterSelect.appendChild(opt);
      });
    }

    if (elDrawerUniSelect) {
      elDrawerUniSelect.innerHTML = '<option value="all">সকল বিশ্ববিদ্যালয় ও ইঞ্জিনিয়ারিং (All)</option>';
      Array.from(uniSet).sort().forEach(uni => {
        const opt = document.createElement('option');
        opt.value = uni;
        opt.textContent = uni;
        if (userPrefs.uniFilter === uni) opt.selected = true;
        elDrawerUniSelect.appendChild(opt);
      });
    }

    if (elDrawerYearSelect) {
      elDrawerYearSelect.innerHTML = '<option value="all">সকল শিক্ষাবর্ষ (All Years)</option>';
      Array.from(yearSet).sort().reverse().forEach(yr => {
        const opt = document.createElement('option');
        opt.value = yr;
        opt.textContent = `২০${yr} সেশন`;
        if (userPrefs.yearFilter === yr) opt.selected = true;
        elDrawerYearSelect.appendChild(opt);
      });
    }
  }

  function applyFiltersAndQueue() {
    let list = allQuestions.slice();

    // 1. Paper Filter
    if (userPrefs.paperFilter && userPrefs.paperFilter !== 'all') {
      list = list.filter(q => q.paper === userPrefs.paperFilter);
    }

    // 2. Chapter Filter
    if (userPrefs.chapterFilter && userPrefs.chapterFilter !== 'all') {
      list = list.filter(q => q.chapter === userPrefs.chapterFilter);
    }

    // 3. University Filter
    if (userPrefs.uniFilter && userPrefs.uniFilter !== 'all') {
      list = list.filter(q => q.university === userPrefs.uniFilter);
    }

    // 4. Year Filter
    if (userPrefs.yearFilter && userPrefs.yearFilter !== 'all') {
      list = list.filter(q => q.year === userPrefs.yearFilter);
    }

    // 5. Practice Mode (Mistakes first)
    if (userPrefs.practiceMode === 'mistakes_first') {
      list.sort((a, b) => (userMistakes[b.id] || 0) - (userMistakes[a.id] || 0));
    }

    activeQuestions = list;
    if (currentIndex >= activeQuestions.length) {
      currentIndex = 0;
    }

    // Update Header Indicator
    let chText = 'All Chapters (সকল অধ্যায় - ৩৭৬৬ প্রশ্ন)';
    if (userPrefs.chapterFilter !== 'all') {
      chText = `${userPrefs.chapterFilter} (${activeQuestions.length} প্রশ্ন)`;
    } else if (userPrefs.paperFilter !== 'all') {
      chText = userPrefs.paperFilter === 'First-Paper' ? `১ম পত্র (${activeQuestions.length} প্রশ্ন)` : `২য় পত্র (${activeQuestions.length} প্রশ্ন)`;
    }
    if (elChapterIndicator) {
      elChapterIndicator.innerText = chText;
    }

    updateMetrics();
  }

  // --- View Rendering (Question / Page / Scroll Mode) ---
  function renderCurrentView() {
    elViewport.innerHTML = '';

    if (!activeQuestions.length) {
      elViewport.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <h3>কোনো প্রশ্ন পাওয়া যায়নি!</h3>
          <p>দয়া করে ফিল্টার পরিবর্তন করে পুনরায় চেষ্টা করুন।</p>
        </div>
      `;
      return;
    }

    if (userPrefs.viewMode === 'question') {
      renderSingleQuestionMode();
    } else if (userPrefs.viewMode === 'page') {
      renderPageMode();
    } else {
      renderScrollMode();
    }

    renderMath(elViewport);
    updateNavigationControls();
    updateMetrics();
  }

  function renderSingleQuestionMode() {
    const q = activeQuestions[currentIndex];
    if (!q) return;
    const card = createQuestionCard(q, currentIndex);
    elViewport.appendChild(card);
  }

  function renderPageMode() {
    const perPage = userPrefs.questionsPerPage || 5;
    const start = Math.floor(currentIndex / perPage) * perPage;
    const end = Math.min(start + perPage, activeQuestions.length);

    for (let i = start; i < end; i++) {
      const q = activeQuestions[i];
      const card = createQuestionCard(q, i);
      elViewport.appendChild(card);
    }
  }

  function renderScrollMode() {
    const limit = Math.min(activeQuestions.length, 50);
    for (let i = 0; i < limit; i++) {
      const q = activeQuestions[i];
      const card = createQuestionCard(q, i);
      elViewport.appendChild(card);
    }
  }

  // ==========================================================================
  // Question Card Builder (Identical to Biology UI & System)
  // ==========================================================================
  function createQuestionCard(q, index) {
    const card = document.createElement('article');
    card.className = 'question-card';
    card.id = `q-card-${q.id}`;
    card.dataset.qid = q.id;
    card.dataset.index = index;

    const answerRecord = sessionState.answers[q.id] || {};
    const isMarkedReview = !!answerRecord.markedReview;

    // Header Tags
    const paperLabel = q.paper === 'First-Paper' ? '১ম পত্র' : '২য় পত্র';
    const examBadge = (q.university && q.university !== 'General') ? `[${q.university} '${q.year || 'Exam'}]` : '';

    const header = document.createElement('div');
    header.className = 'question-header';
    header.innerHTML = `
      <div class="question-tags">
        <span class="tag tag-num">Q${index + 1}</span>
        <span class="tag tag-paper">${paperLabel}</span>
        <span class="tag tag-chapter">${q.chapter || ''}</span>
        ${examBadge ? `<span class="tag tag-exam">${examBadge}</span>` : ''}
      </div>
    `;
    card.appendChild(header);

    // Question Content
    const qContent = document.createElement('div');
    qContent.className = 'question-content';
    qContent.innerHTML = q.question.content;
    card.appendChild(qContent);

    // Options or Written Box
    if (q.options && q.options.length) {
      // Filter out any leaked solutions or watermark entries
      let opts = q.options.filter(o => {
        if (!o || !o.label) return false;
        const c = o.content || '';
        if (/Sol\^?n|Sol:|Sol"|\\text\{Sol|## 📄 পৃষ্ঠা|PDF Page|উদ্ভাস/i.test(c)) return false;
        return true;
      });
      if (userPrefs.shuffleOptions && !answerRecord.selected) {
        opts.sort(() => 0.5 - Math.random());
      }

      const optionsList = document.createElement('div');
      optionsList.className = 'options-list';

      opts.forEach(opt => {
        let optStateClass = '';
        if (answerRecord.selected) {
          if (opt.label.toLowerCase() === q.answer.toLowerCase()) {
            optStateClass = answerRecord.isCorrect ? 'selected-correct' : 'reveal-correct';
          } else if (opt.label.toLowerCase() === answerRecord.selected.toLowerCase()) {
            optStateClass = 'selected-wrong';
          }
        }

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `option-btn ${optStateClass}`;
        btn.dataset.qid = q.id;
        btn.dataset.opt = opt.label;
        btn.innerHTML = `
          <span class="option-badge">${opt.label.toUpperCase()}</span>
          <span class="option-text">${opt.content}</span>
        `;
        btn.addEventListener('click', () => handleOptionSelect(q, opt.label, card));
        optionsList.appendChild(btn);
      });

      card.appendChild(optionsList);
    }

    // Action Strip (Exact Biology Strip)
    const actionStrip = document.createElement('div');
    actionStrip.className = 'q-action-strip';

    const btnShow = document.createElement('button');
    btnShow.type = 'button';
    btnShow.className = 'btn btn-sm btn-secondary btn-show-answer';
    btnShow.innerHTML = `Show Answer <span class="shortcut-tag">[S]</span>`;
    btnShow.addEventListener('click', () => handleShowAnswer(q, card));

    const btnReview = document.createElement('button');
    btnReview.type = 'button';
    btnReview.className = `btn btn-sm btn-outline btn-review-action ${isMarkedReview ? 'active' : ''}`;
    btnReview.textContent = isMarkedReview ? 'Reviewed' : 'Review [AI যাচাই]';
    btnReview.addEventListener('click', () => handleToggleReview(q, btnReview, card));

    const btnExplain = document.createElement('button');
    btnExplain.type = 'button';
    btnExplain.className = 'btn btn-sm btn-secondary btn-ai-explain-action';
    btnExplain.textContent = 'AI Explanation';
    btnExplain.addEventListener('click', () => handleToggleInlineAi(q, card));

    actionStrip.appendChild(btnShow);
    actionStrip.appendChild(btnReview);
    actionStrip.appendChild(btnExplain);
    card.appendChild(actionStrip);

    // Revealed Box (Answer + Book Solution)
    if (answerRecord.revealed) {
      card.appendChild(buildRevealedBoxElement(q));
    }

    // Interactive AI Panel (Personas + Slot + Custom Ask + Previous Explanations)
    const aiPanel = buildAiInteractivePanel(q);
    card.appendChild(aiPanel);

    return card;
  }

  // --- Revealed Box Element ---
  function buildRevealedBoxElement(q) {
    const box = document.createElement('div');
    box.className = 'q-revealed-box';
    box.id = `revealed-box-${q.id}`;

    let ansHtml = '';
    const ansKey = (q.answer || '').trim().toLowerCase();
    const matchOpt = (q.options || []).find(o => o.label.toLowerCase() === ansKey);

    if (matchOpt) {
      ansHtml = `<strong>(${ansKey.toUpperCase()})</strong> <span class="math-ans-content">${matchOpt.content}</span>`;
    } else {
      ansHtml = `<strong>(${ansKey.toUpperCase()})</strong>`;
    }

    const ansLine = document.createElement('div');
    ansLine.className = 'revealed-ans-line';
    ansLine.innerHTML = `Correct Answer: <span>${ansHtml}</span>`;
    box.appendChild(ansLine);

    const solText = (q.solution && q.solution.content) || q.explanation || '';
    if (solText.trim()) {
      const expLine = document.createElement('div');
      expLine.className = 'revealed-exp-line';
      expLine.innerHTML = `<strong>বইয়ের সমাধান:</strong>\n${solText}`;
      box.appendChild(expLine);
    }

    setTimeout(() => renderMath(box), 0);
    return box;
  }

  // --- Interactive AI Panel Builder (Exact Biology UI) ---
  function buildAiInteractivePanel(q) {
    const panel = document.createElement('div');
    panel.className = 'ai-inline-container';
    panel.id = `ai-box-${q.id}`;

    // 1. Quick Persona Selector Strip
    const personaStrip = document.createElement('div');
    personaStrip.className = 'persona-selector-strip';
    personaStrip.innerHTML = `
      <span class="persona-label">ব্যাখ্যা পার্সোনা:</span>
      <button type="button" class="persona-pill ${userPrefs.aiPersona === 'admission' ? 'active' : ''}" data-p="admission">ভর্তি স্পেশাল (Admission)</button>
      <button type="button" class="persona-pill ${userPrefs.aiPersona === '10_year_kid' ? 'active' : ''}" data-p="10_year_kid">১০ বছরের শিশু (Kid)</button>
      <button type="button" class="persona-pill ${userPrefs.aiPersona === 'deep' ? 'active' : ''}" data-p="deep">গভীর ধারণা (Deep)</button>
    `;

    personaStrip.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const p = btn.dataset.p;
        userPrefs.aiPersona = p;
        savePreferences();
        personaStrip.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cardDom = document.getElementById(`q-card-${q.id}`);
        if (cardDom) {
          handleToggleInlineAi(q, cardDom, p);
        }
      });
    });
    panel.appendChild(personaStrip);

    // 2. Conceptual Explanation Slot
    const expContainer = document.createElement('div');
    expContainer.className = 'ai-explanation-slot';
    const cacheKey = `${q.id}_${userPrefs.aiPersona}`;
    if (aiExplanationsCache[cacheKey]) {
      const text = aiExplanationsCache[cacheKey];
      expContainer.appendChild(buildAiExplanationElement(q, text, userPrefs.aiPersona));
    }
    panel.appendChild(expContainer);

    // 3. Custom Question Input Field ("ai ques feuid")
    const customSection = document.createElement('div');
    customSection.className = 'ai-custom-section';

    const inputRow = document.createElement('div');
    inputRow.className = 'ai-custom-input-row';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'ai-custom-input';
    input.placeholder = 'এই প্রশ্নটি নিয়ে AI-কে কিছু জিজ্ঞাসা করুন... (Ask AI about this question)';

    const btnAsk = document.createElement('button');
    btnAsk.type = 'button';
    btnAsk.className = 'btn btn-sm btn-primary';
    btnAsk.textContent = 'Ask';

    const customRespBox = document.createElement('div');
    customRespBox.className = 'ai-custom-response-box';
    customRespBox.style.display = 'none';

    const triggerAsk = () => {
      const query = (input.value || '').trim();
      if (!query) return;
      handleCustomAiInquiry(q, query, customRespBox, btnAsk);
      input.value = '';
    };

    btnAsk.addEventListener('click', triggerAsk);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        triggerAsk();
      }
    });

    inputRow.appendChild(input);
    inputRow.appendChild(btnAsk);
    customSection.appendChild(inputRow);
    customSection.appendChild(customRespBox);
    panel.appendChild(customSection);

    // 4. "Show Previous Explanations" (পূর্বের AI ব্যাখ্যা দেখুন) Toggle & Container
    const histToggleRow = document.createElement('div');
    histToggleRow.className = 'ai-history-toggle-row';

    const btnToggleHist = document.createElement('button');
    btnToggleHist.type = 'button';
    btnToggleHist.className = 'btn-text-link';
    btnToggleHist.style.fontSize = '12px';
    btnToggleHist.textContent = 'Show Previous AI Explanations (পূর্বের AI ব্যাখ্যা দেখুন)';

    const histContainer = document.createElement('div');
    histContainer.className = 'ai-history-container';
    histContainer.style.display = 'none';

    btnToggleHist.addEventListener('click', async () => {
      if (histContainer.style.display === 'none') {
        histContainer.style.display = 'flex';
        btnToggleHist.textContent = 'Hide Previous Explanations (পূর্বের ব্যাখ্যা লুকান)';
        await loadAndRenderAiHistory(q.id, histContainer);
      } else {
        histContainer.style.display = 'none';
        btnToggleHist.textContent = 'Show Previous AI Explanations (পূর্বের AI ব্যাখ্যা দেখুন)';
      }
    });

    histToggleRow.appendChild(btnToggleHist);
    panel.appendChild(histToggleRow);
    panel.appendChild(histContainer);

    return panel;
  }

  function getPersonaLabel(p) {
    if (p === '10_year_kid') return '১০ বছরের শিশুর মতো সহজ উপমা';
    if (p === 'deep' || p === 'derivation') return 'গভীর তাত্ত্বিক বিশ্লেষণ ও প্রমাণ';
    return 'ইঞ্জিনিয়ারিং ও ভার্সিটি ভর্তি স্পেশাল';
  }

  function formatAiExplanation(rawText) {
    if (!rawText) return '';
    let text = rawText.trim();

    // 1. Convert bold **text** to <strong>text</strong>
    text = text.replace(/\*\*([^\*\n]+?)\*\*/g, '<strong>$1</strong>');

    // 2. Split into blocks/paragraphs by double newlines
    const blocks = text.split(/\n\n+/);
    const htmlBlocks = blocks.map(block => {
      const trimmed = block.trim();
      if (!trimmed) return '';

      const lines = trimmed.split('\n').map(l => l.trim()).filter(Boolean);
      // Check if it's a list of bullets
      const isList = lines.length > 1 && lines.every(l => l.match(/^[-•*]|\(\w+\)|\d+\./));
      if (isList) {
        const listItems = lines.map(line => {
          const cleanLine = line.replace(/^[-•*]\s*/, '').trim();
          return `<div class="ai-bullet-item"><span class="bullet-dot">•</span><span>${cleanLine}</span></div>`;
        }).join('');
        return `<div class="ai-list-group">${listItems}</div>`;
      }

      // Check if block is a standalone heading like <strong>মূল সূত্র:</strong>
      if (trimmed.startsWith('<strong>') && (trimmed.endsWith(':</strong>') || trimmed.endsWith(':'))) {
        return `<div class="ai-heading">${trimmed}</div>`;
      }

      // Standard paragraph with linebreaks preserved
      const paraContent = trimmed.replace(/\n/g, '<br>');
      return `<p class="ai-para">${paraContent}</p>`;
    });

    return htmlBlocks.filter(Boolean).join('');
  }

  function buildAiExplanationElement(q, text, persona) {
    const box = document.createElement('div');
    box.className = 'ai-inline-box';

    const pLabel = getPersonaLabel(persona || userPrefs.aiPersona);

    const header = document.createElement('div');
    header.className = 'ai-box-header';
    header.innerHTML = `
      <span>Shatadhru AI (শতদ্রু AI) ব্যাখ্যা (${pLabel})</span>
      <button type="button" class="btn-text-link" style="color: var(--text-muted); font-size: 11px;">Hide</button>
    `;
    header.querySelector('button').addEventListener('click', () => {
      box.style.display = 'none';
    });

    const body = document.createElement('div');
    body.className = 'ai-clean-text';
    body.innerHTML = formatAiExplanation(text);

    box.appendChild(header);
    box.appendChild(body);

    setTimeout(() => renderMath(box), 0);
    return box;
  }

  // --- Show Answer Handler ---
  function handleShowAnswer(q, cardDom) {
    if (!sessionState.answers[q.id]) sessionState.answers[q.id] = {};
    sessionState.answers[q.id].revealed = true;
    saveSessionState();

    const targetCard = cardDom || document.getElementById(`q-card-${q.id}`);
    if (targetCard) {
      let revBox = targetCard.querySelector(`#revealed-box-${q.id}`);
      if (!revBox) {
        revBox = buildRevealedBoxElement(q);
        const actionStrip = targetCard.querySelector('.q-action-strip');
        if (actionStrip && actionStrip.nextSibling) {
          targetCard.insertBefore(revBox, actionStrip.nextSibling);
        } else {
          targetCard.appendChild(revBox);
        }
      } else {
        revBox.style.display = 'block';
      }

      // Reveal correct option in UI
      targetCard.querySelectorAll('.option-btn').forEach(btn => {
        if (btn.dataset.opt.toLowerCase() === q.answer.toLowerCase()) {
          btn.classList.add('reveal-correct');
        }
      });
    }

    updateMetrics();
  }

  // --- Option Selection Handler ---
  function handleOptionSelect(q, selectedOpt, card) {
    let ans = sessionState.answers[q.id];
    if (ans && ans.selected) return; // already answered

    const isCorrect = selectedOpt.toLowerCase() === q.answer.toLowerCase();
    ans = {
      selected: selectedOpt,
      isCorrect: isCorrect,
      revealed: true
    };
    sessionState.answers[q.id] = ans;

    if (!isCorrect) {
      userMistakes[q.id] = (userMistakes[q.id] || 0) + 1;
      try {
        localStorage.setItem(MISTAKES_STORAGE_KEY, JSON.stringify(userMistakes));
      } catch (e) {}
    }

    saveSessionState();

    // Update Option Button States
    card.querySelectorAll('.option-btn').forEach(btn => {
      const opt = btn.dataset.opt;
      if (opt.toLowerCase() === q.answer.toLowerCase()) {
        btn.classList.add(isCorrect ? 'selected-correct' : 'reveal-correct');
      } else if (opt.toLowerCase() === selectedOpt.toLowerCase()) {
        btn.classList.add('selected-wrong');
      }
    });

    // Reveal Box
    let revBox = card.querySelector(`#revealed-box-${q.id}`);
    if (!revBox) {
      revBox = buildRevealedBoxElement(q);
      const actionStrip = card.querySelector('.q-action-strip');
      if (actionStrip && actionStrip.nextSibling) {
        card.insertBefore(revBox, actionStrip.nextSibling);
      } else {
        card.appendChild(revBox);
      }
    } else {
      revBox.style.display = 'block';
    }

    updateMetrics();

    // Auto-advance in single question mode after brief pause if correct
    if (userPrefs.viewMode === 'question' && isCorrect && currentIndex < activeQuestions.length - 1) {
      setTimeout(() => {
        currentIndex++;
        renderCurrentView();
      }, 750);
    }
  }

  
  // --- Review Toggle & AI Verification Audit (Biology Architecture) ---
  async function handleToggleReview(q, btn, cardDom) {
    if (!sessionState.answers[q.id]) sessionState.answers[q.id] = {};
    const qState = sessionState.answers[q.id];
    qState.markedReview = true;
    if (btn) {
      btn.textContent = 'Reviewing (যাচাই চলছে...)';
      btn.classList.add('active');
    }
    saveSessionState();
    updateMetrics();

    // Trigger Admission-Grade AI Math Audit & Auto-Correction
    await handleAiReviewAndCorrection(q, cardDom);
    if (btn) btn.textContent = 'Reviewed (যাচাইকৃত)';
  }

  async function handleAiReviewAndCorrection(q, cardDom) {
    let auditPanel = cardDom.querySelector(`#ai-audit-box-${q.id}`);
    if (!auditPanel) {
      auditPanel = document.createElement('div');
      auditPanel.className = 'ai-audit-panel';
      auditPanel.id = `ai-audit-box-${q.id}`;
      const actionStrip = cardDom.querySelector('.q-action-strip');
      if (actionStrip && actionStrip.nextSibling) {
        cardDom.insertBefore(auditPanel, actionStrip.nextSibling);
      } else {
        cardDom.appendChild(auditPanel);
      }
    }

    auditPanel.style.display = 'flex';
    auditPanel.innerHTML = `
      <div class="ai-loading-state" style="justify-content: center; padding: 16px;">
        <span class="ai-pulse-dot"></span>
        <span>শতদ্রু AI ভর্তি প্রশ্ন ও গাণিতিক নির্ভুলতা যাচাই করছে... (Auditing math problem)...</span>
      </div>
    `;

    try {
      const payload = {
        action: 'review_question',
        originalQuestion: {
          id: q.id,
          content: q.question.content,
          options: q.options,
          chapter: q.chapter,
          topic: q.topic,
          answer: q.answer
        }
      };

      const resp = await fetch(API_MATH_AI_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const resData = await resp.json();
      if (!resData.success || !resData.data) {
        throw new Error(resData.error || 'Failed to review question.');
      }

      const audit = resData.data;
      const detectedAns = (audit.correctedAnswer || audit.actualAnswer || '').trim().toLowerCase();
      const currentAns = (q.answer || '').trim().toLowerCase();
      const isNaResolved = Boolean(audit.resolvedFromNA) || !currentAns || currentAns === '(n/a)' || currentAns === 'n/a';
      const isAnswerWrong = Boolean(detectedAns) && detectedAns !== currentAns;
      const isValid = audit.isValid && !isAnswerWrong && !isNaResolved;

      // Auto-save correction if answer was N/A or wrong
      if (isNaResolved || isAnswerWrong) {
        applyCorrectionToQuestion(q, audit, cardDom, { autoSaved: true });
      }

      auditPanel.className = `ai-audit-panel ${isValid && !isNaResolved ? 'audit-valid' : (isNaResolved ? 'audit-valid' : 'audit-invalid')}`;
      auditPanel.innerHTML = '';

      // Header
      const header = document.createElement('div');
      header.className = 'audit-header';

      let statusBadgeHtml = '';
      if (isNaResolved) {
        statusBadgeHtml = `<span class="audit-status-badge valid">✓ উত্তর স্বয়ংক্রিয়ভাবে সংরক্ষিত (Auto-Saved)</span>`;
      } else if (isValid) {
        statusBadgeHtml = `<span class="audit-status-badge valid">সঠিক ভর্তি প্রশ্ন (Verified Valid)</span>`;
      } else {
        statusBadgeHtml = `<span class="audit-status-badge invalid">ভুল উত্তর সংশোধিত (Answer Auto-Corrected)</span>`;
      }

      header.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          ${statusBadgeHtml}
          <span class="audit-meta-text">রেফারেন্স: বুয়েট/ঢাবি মাস্টার প্রশ্নব্যাংক ও এনসিটিবি টেক্সটবুক</span>
        </div>
        <button type="button" class="btn-text-link" style="color: var(--text-muted); font-size: 11px;">Hide</button>
      `;
      header.querySelector('button').addEventListener('click', () => {
        auditPanel.style.display = 'none';
      });
      auditPanel.appendChild(header);

      // Scientific / Mathematical Derivation Summary
      const summary = document.createElement('div');
      summary.className = 'audit-summary';
      const summaryContent = audit.reviewSummary || '';
      summary.innerHTML = window.marked ? marked.parse(summaryContent) : formatAiExplanation(summaryContent);
      auditPanel.appendChild(summary);

      // Matched option content text
      const matchOpt = (q.options || []).find(o => o.label.toLowerCase() === detectedAns);
      const matchedOptText = matchOpt ? matchOpt.content : '';

      // ==========================================================
      // ACCEPT OPTION & AUTO-SAVE BANNER
      // ==========================================================
      if (isNaResolved) {
        const autoSaveCard = document.createElement('div');
        autoSaveCard.className = 'audit-autosave-box';
        autoSaveCard.innerHTML = `
          <div class="audit-autosave-title">
            <span class="audit-check-circle">✓</span>
            <div>
              <strong>সঠিক উত্তর স্বয়ংক্রিয়ভাবে সংরক্ষিত হয়েছে (Auto-Saved)!</strong>
              <div class="audit-autosave-sub">
                পাঠ্যবই ও গাণিতিক প্রমাণের নির্ভরযোগ্য ভিত্তি অনুযায়ী সঠিক উত্তর: <strong class="text-success">(${detectedAns.toUpperCase()}) ${escapeHtml(matchedOptText)}</strong>
              </div>
            </div>
          </div>
          <div class="audit-accept-row">
            <button type="button" class="btn-accept-confirmed" disabled>
              ✓ গৃহীত ও সংরক্ষিত (Accepted)
            </button>
            <div class="manual-override-group">
              <span class="manual-override-label">অন্য অপশন গ্রহণ করতে চান?</span>
              <div class="pill-group" id="pills-${q.id}">
                <button type="button" class="btn-pill-opt ${detectedAns === 'a' ? 'active' : ''}" data-opt="a">A</button>
                <button type="button" class="btn-pill-opt ${detectedAns === 'b' ? 'active' : ''}" data-opt="b">B</button>
                <button type="button" class="btn-pill-opt ${detectedAns === 'c' ? 'active' : ''}" data-opt="c">C</button>
                <button type="button" class="btn-pill-opt ${detectedAns === 'd' ? 'active' : ''}" data-opt="d">D</button>
              </div>
            </div>
          </div>
        `;

        const pillGroup = autoSaveCard.querySelector(`#pills-${q.id}`);
        pillGroup.querySelectorAll('.btn-pill-opt').forEach(btn => {
          btn.addEventListener('click', () => {
            manuallyAcceptOptionAsCorrect(q, btn.dataset.opt, cardDom, audit, pillGroup);
          });
        });

        auditPanel.appendChild(autoSaveCard);
      } else if (isAnswerWrong) {
        const diffRow = document.createElement('div');
        diffRow.className = 'audit-answer-diff';
        diffRow.innerHTML = `
          <span class="diff-old">প্রশ্নব্যাংকের উত্তর: (${(audit.markedAnswer || currentAns).toUpperCase()}) ❌</span>
          <span class="diff-new">সঠিক ভর্তি উত্তর: (${detectedAns.toUpperCase()}) ✅ [Auto-Saved]</span>
        `;
        auditPanel.appendChild(diffRow);

        const acceptRow = document.createElement('div');
        acceptRow.className = 'audit-accept-row';
        acceptRow.style.marginTop = '8px';
        acceptRow.innerHTML = `
          <button type="button" class="btn-accept-confirmed" disabled>
            ✓ গৃহীত ও হালনাগাদকৃত (Accepted & Saved)
          </button>
          <div class="manual-override-group">
            <span class="manual-override-label">বিকল্প অপশন গ্রহণ:</span>
            <div class="pill-group" id="pills-${q.id}">
              <button type="button" class="btn-pill-opt ${detectedAns === 'a' ? 'active' : ''}" data-opt="a">A</button>
              <button type="button" class="btn-pill-opt ${detectedAns === 'b' ? 'active' : ''}" data-opt="b">B</button>
              <button type="button" class="btn-pill-opt ${detectedAns === 'c' ? 'active' : ''}" data-opt="c">C</button>
              <button type="button" class="btn-pill-opt ${detectedAns === 'd' ? 'active' : ''}" data-opt="d">D</button>
            </div>
          </div>
        `;

        const pillGroup = acceptRow.querySelector(`#pills-${q.id}`);
        pillGroup.querySelectorAll('.btn-pill-opt').forEach(btn => {
          btn.addEventListener('click', () => {
            manuallyAcceptOptionAsCorrect(q, btn.dataset.opt, cardDom, audit, pillGroup);
          });
        });

        auditPanel.appendChild(acceptRow);
      }

      // OCR / Typo Fix Diff Card
      if (audit.hasCorrection && audit.correctedQuestion && audit.correctedQuestion.trim() !== q.question.content.trim()) {
        const corrCard = document.createElement('div');
        corrCard.className = 'audit-diff-card';

        let optionsHtml = '';
        if (audit.correctedOptions && audit.correctedOptions.length > 0) {
          optionsHtml = `<div style="font-size: 12px; margin-top: 4px;">
            ${audit.correctedOptions.map(o => `(${o.label.toUpperCase()}) ${escapeHtml(o.content)}`).join(' &nbsp;|&nbsp; ')}
          </div>`;
        }

        corrCard.innerHTML = `
          <div><strong>সংশোধিত প্রশ্ন (LaTeX/OCR ফিক্স):</strong> ${escapeHtml(audit.correctedQuestion)}</div>
          ${optionsHtml}
          <div style="margin-top: 4px;"><strong>সঠিক উত্তর:</strong> <span style="color: var(--color-success); font-weight: 700;">(${detectedAns.toUpperCase()})</span></div>
        `;

        const btnApply = document.createElement('button');
        btnApply.className = 'btn-apply-correction';
        btnApply.textContent = 'Apply Question Text Fix (প্রশ্ন টেক্সট সংশোধন প্রয়োগ)';
        btnApply.addEventListener('click', () => {
          applyCorrectionToQuestion(q, audit, cardDom, { updateText: true });
          btnApply.textContent = '✓ সংশোধন প্রয়োগ সম্পন্ন';
          btnApply.disabled = true;
        });

        corrCard.appendChild(btnApply);
        auditPanel.appendChild(corrCard);
      }

      // Admission Mnemonic / Tip
      if (audit.admissionTip) {
        const tipBox = document.createElement('div');
        tipBox.className = 'audit-tip-box';
        tipBox.innerHTML = `<strong>ভর্তি টিপস / ক্যালকুলেশন শর্টকাট:</strong> ${escapeHtml(audit.admissionTip)}`;
        auditPanel.appendChild(tipBox);
      }

      renderMath(auditPanel);
      saveAiQuestionToLocalHistory(q.id, 'Question Audit & Verification', audit.reviewSummary || '', 'Shatadhru AI');

    } catch (err) {
      auditPanel.innerHTML = `<div style="color: var(--color-danger); font-size: 12px;">যাচাইকরণে ত্রুটি: ${err.message}</div>`;
    }
  }

  function manuallyAcceptOptionAsCorrect(q, chosenOptionLetter, cardDom, audit, pillGroupDom) {
    const chosenOpt = (chosenOptionLetter || '').trim().toLowerCase();
    if (!['a', 'b', 'c', 'd'].includes(chosenOpt)) return;

    const updatedAudit = Object.assign({}, audit || {}, {
      correctedAnswer: chosenOpt,
      actualAnswer: chosenOpt,
      reviewSummary: (audit?.reviewSummary || '') + ` [ম্যানুয়ালি শিক্ষার্থী কর্তৃক (${chosenOpt.toUpperCase()}) সঠিক উত্তর হিসেবে গৃহীত]`
    });

    applyCorrectionToQuestion(q, updatedAudit, cardDom, { manual: true });

    if (pillGroupDom) {
      pillGroupDom.querySelectorAll('.btn-pill-opt').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.opt === chosenOpt);
      });
    }

    const subText = cardDom.querySelector('.audit-autosave-sub');
    if (subText) {
      const matchOpt = (q.options || []).find(o => o.label.toLowerCase() === chosenOpt);
      const text = matchOpt ? matchOpt.content : '';
      subText.innerHTML = `ম্যানুয়ালি নির্ধারিত সঠিক উত্তর: <strong class="text-success">(${chosenOpt.toUpperCase()}) ${escapeHtml(text)}</strong>`;
    }
  }

  function applyCorrectionToQuestion(q, audit, cardDom, opts = {}) {
    const newAnswer = (audit.correctedAnswer || audit.actualAnswer || '').trim().toLowerCase();

    if (opts.updateText && audit.correctedQuestion && audit.correctedQuestion.trim()) {
      q.question.content = audit.correctedQuestion.trim();
    }
    if (opts.updateText && audit.correctedOptions && Array.isArray(audit.correctedOptions) && audit.correctedOptions.length > 0) {
      q.options = audit.correctedOptions;
    }
    if (newAnswer) {
      q.answer = newAnswer;
    }
    q.isCorrected = true;

    // Save into persistent corrections state
    userCorrections[q.id] = {
      correctedQuestion: q.question.content,
      correctedOptions: q.options,
      correctedAnswer: q.answer,
      reviewSummary: audit.reviewSummary,
      appliedAt: new Date().toISOString()
    };
    saveCorrections();

    // Re-evaluate session state if user had already selected an answer
    const qState = sessionState.answers[q.id];
    if (qState && qState.selected) {
      const wasCorrectBefore = qState.isCorrect;
      const isNowCorrect = qState.selected.toLowerCase() === newAnswer;
      qState.isCorrect = isNowCorrect;

      if (!wasCorrectBefore && isNowCorrect) {
        if (userMistakes[q.id] && userMistakes[q.id] > 0) {
          userMistakes[q.id] = Math.max(0, userMistakes[q.id] - 1);
          try { localStorage.setItem(MISTAKES_STORAGE_KEY, JSON.stringify(userMistakes)); } catch(e){}
        }
      } else if (wasCorrectBefore && !isNowCorrect) {
        userMistakes[q.id] = (userMistakes[q.id] || 0) + 1;
        try { localStorage.setItem(MISTAKES_STORAGE_KEY, JSON.stringify(userMistakes)); } catch(e){}
      }
      saveSessionState();
      updateMetrics();
    }

    // Live update question card DOM smoothly (without full page re-rendering)
    if (cardDom) {
      // 1. Question content
      if (opts.updateText && audit.correctedQuestion) {
        const qContent = cardDom.querySelector('.question-content');
        if (qContent) {
          qContent.innerHTML = audit.correctedQuestion;
          renderMath(qContent);
        }
      }

      // 2. Tag badge
      const tagsContainer = cardDom.querySelector('.question-tags');
      if (tagsContainer) {
        let tagCorr = tagsContainer.querySelector('.tag-corrected');
        if (!tagCorr) {
          tagCorr = document.createElement('span');
          tagCorr.className = 'tag tag-corrected';
          tagsContainer.appendChild(tagCorr);
        }
        tagCorr.textContent = `সঠিক উত্তর: ${newAnswer.toUpperCase()} (AI সেভকৃত)`;
      }

      // 3. Option buttons styling
      const optBtns = cardDom.querySelectorAll('.option-btn');
      optBtns.forEach(btn => {
        const optLetter = (btn.dataset.opt || '').toLowerCase();
        if (qState && (qState.revealed || qState.selected)) {
          btn.classList.remove('selected-correct', 'reveal-correct', 'selected-wrong');
          if (optLetter === newAnswer) {
            btn.classList.add(qState.selected === optLetter ? 'selected-correct' : 'reveal-correct');
          } else if (qState.selected === optLetter && optLetter !== newAnswer) {
            btn.classList.add('selected-wrong');
          }
        }
      });

      // 4. Revealed Box if present
      const revealedBox = cardDom.querySelector('.q-revealed-box');
      if (revealedBox) {
        const matchOpt = (q.options || []).find(o => o.label.toLowerCase() === newAnswer);
        const ansContentText = matchOpt ? matchOpt.content : '';
        const ansLine = revealedBox.querySelector('.revealed-ans-line');
        if (ansLine) {
          ansLine.innerHTML = `Correct Answer: <span><strong>(${newAnswer.toUpperCase()})</strong> <span class="math-ans-content">${ansContentText}</span> <span class="tag tag-corrected" style="font-size: 10px; margin-left: 6px;">AI সেভকৃত</span></span>`;
          renderMath(ansLine);
        }
      }
    }
  }

// --- Inline AI Explanation Toggle ---
  async function handleToggleInlineAi(q, cardDom, forcedPersona) {
    const aiBox = cardDom.querySelector(`#ai-box-${q.id}`);
    if (!aiBox) return;

    const expSlot = aiBox.querySelector('.ai-explanation-slot') || aiBox;
    const personaToUse = forcedPersona || userPrefs.aiPersona || 'admission';
    const cacheKey = `${q.id}_${personaToUse}`;

    expSlot.style.display = 'block';

    // 1. Check local cache
    if (aiExplanationsCache[cacheKey]) {
      expSlot.innerHTML = '';
      expSlot.appendChild(buildAiExplanationElement(q, aiExplanationsCache[cacheKey], personaToUse));
      renderMath(expSlot);
      return;
    }

    // 2. Prevent duplicate concurrent requests
    if (isAiRequestPending[q.id]) return;
    isAiRequestPending[q.id] = true;

    // 3. Render loading state
    expSlot.innerHTML = `
      <div class="ai-loading-state">
        <span class="ai-pulse-dot"></span>
        <span>শতদ্রু AI বিশ্লেষণ করছে ও শর্টকাট প্রস্তুত করছে... (Analyzing math problem)...</span>
      </div>
    `;

    try {
      const resp = await fetch(API_MATH_AI_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'explain',
          originalQuestion: q,
          persona: personaToUse
        })
      });

      if (!resp.ok) throw new Error(`HTTP Error: ${resp.status}`);
      const data = await resp.json();
      const explanationText = data.text || data.explanation || 'কোনো ব্যাখ্যা পাওয়া যায়নি।';

      aiExplanationsCache[cacheKey] = explanationText;
      try {
        localStorage.setItem(AI_CACHE_KEY, JSON.stringify(aiExplanationsCache));
      } catch (e) {}

      expSlot.innerHTML = '';
      expSlot.appendChild(buildAiExplanationElement(q, explanationText, personaToUse));
      renderMath(expSlot);

      saveAiQuestionToLocalHistory(q.id, 'Conceptual Explanation', explanationText, 'Shatadhru AI');
    } catch (err) {
      expSlot.innerHTML = `
        <div style="color: var(--color-danger); font-size: 12px; padding: 8px 0;">
          AI ব্যাখ্যা লোড করা সম্ভব হয়নি: ${err.message}
        </div>
      `;
    } finally {
      delete isAiRequestPending[q.id];
    }
  }

  // --- Custom AI Inquiry Handler ("ai ques feuid") ---
  async function handleCustomAiInquiry(q, queryText, respBoxDom, btnDom) {
    if (!queryText || !respBoxDom) return;

    btnDom.disabled = true;
    respBoxDom.style.display = 'block';
    respBoxDom.innerHTML = `
      <div class="ai-loading-state">
        <span class="ai-pulse-dot"></span>
        <span>AI প্রশ্নের উত্তর তৈরি করছে... (Solving inquiry)...</span>
      </div>
    `;

    try {
      const resp = await fetch(API_MATH_AI_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'explain',
          originalQuestion: q,
          studentQuery: queryText,
          persona: userPrefs.aiPersona
        })
      });

      if (!resp.ok) throw new Error(`HTTP Error: ${resp.status}`);
      const data = await resp.json();
      const replyText = data.text || 'কোনো উত্তর দেওয়া যায়নি।';

      respBoxDom.innerHTML = `
        <div style="margin-bottom: 6px; font-weight: 700; color: var(--color-primary); font-size: 12px;">
          Q: ${escapeHtml(queryText)}
        </div>
        <div class="ai-clean-text">${formatAiExplanation(replyText)}</div>
      `;
      renderMath(respBoxDom);

      saveAiQuestionToLocalHistory(q.id, queryText, replyText, 'Shatadhru AI');
    } catch (err) {
      respBoxDom.innerHTML = `
        <div style="color: var(--color-danger); font-size: 12px;">
          উত্তর পেতে সমস্যা হয়েছে: ${err.message}
        </div>
      `;
    } finally {
      btnDom.disabled = false;
    }
  }

  // --- AI History Loader & Local Storage Persistence ---
  function saveAiQuestionToLocalHistory(questionId, queryText, explanationText, model) {
    const histKey = `math_ai_hist_${questionId}`;
    try {
      const history = JSON.parse(localStorage.getItem(histKey) || '[]');
      history.unshift({
        id: `ai_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        query: queryText,
        text: explanationText,
        model: model || 'Shatadhru AI',
        time: new Date().toISOString()
      });
      localStorage.setItem(histKey, JSON.stringify(history.slice(0, 10)));
    } catch (e) {}
  }

  async function loadAndRenderAiHistory(questionId, containerDom) {
    containerDom.innerHTML = `
      <div class="ai-loading-state">
        <span class="ai-pulse-dot"></span>
        <span>পূর্বের ব্যাখ্যা লোড হচ্ছে... (Loading previous explanations)...</span>
      </div>
    `;

    const histKey = `math_ai_hist_${questionId}`;
    let historyRecords = [];
    try {
      historyRecords = JSON.parse(localStorage.getItem(histKey) || '[]');
    } catch (e) {}

    if (historyRecords.length === 0) {
      containerDom.innerHTML = '<div style="font-size: 12px; color: var(--text-muted); padding: 8px 0;">এই প্রশ্নের জন্য পূর্বে কোনো AI ব্যাখ্যা সংরক্ষিত নেই।</div>';
      return;
    }

    containerDom.innerHTML = '';
    historyRecords.forEach(rec => {
      const item = document.createElement('div');
      item.className = 'ai-history-item';

      const d = rec.time ? new Date(rec.time).toLocaleString('bn-BD', { dateStyle: 'short', timeStyle: 'short' }) : 'Recent';
      const promptLabel = rec.query && rec.query !== 'Conceptual Explanation'
        ? `Inquiry: ${escapeHtml(rec.query)}`
        : 'মূল ধারণাগত ব্যাখ্যা (Conceptual Explanation)';

      item.innerHTML = `
        <div class="ai-history-meta">
          <span class="ai-history-query-badge">${promptLabel}</span>
          <span>${escapeHtml(rec.model || 'Shatadhru AI')} • ${d}</span>
        </div>
        <div class="ai-clean-text">${formatAiExplanation(rec.text || '')}</div>
      `;

      containerDom.appendChild(item);
    });

    renderMath(containerDom);
  }

  // --- Metrics & Navigation Controls ---
  function updateMetrics() {
    const total = activeQuestions.length;
    const answeredInActive = activeQuestions.filter(q => sessionState.answers[q.id]?.selected).length;
    const mistakesCount = Object.keys(userMistakes).length;

    if (elProgressSummary) {
      elProgressSummary.innerText = `${answeredInActive} / ${total}`;
    }
    if (elMistakesCountDisplay) {
      elMistakesCountDisplay.innerText = mistakesCount;
    }
    if (elProgressBarFill) {
      const pct = total ? (answeredInActive / total) * 100 : 0;
      elProgressBarFill.style.width = `${pct}%`;
    }

    if (elNavPositionIndicator) {
      if (userPrefs.viewMode === 'question') {
        elNavPositionIndicator.innerText = `${currentIndex + 1} / ${total || 1}`;
      } else if (userPrefs.viewMode === 'page') {
        const perPage = userPrefs.questionsPerPage || 5;
        const curPage = Math.floor(currentIndex / perPage) + 1;
        const totalPages = Math.ceil(total / perPage) || 1;
        elNavPositionIndicator.innerText = `পৃষ্ঠা ${curPage} / ${totalPages}`;
      } else {
        elNavPositionIndicator.innerText = `সব স্ক্রল (${total})`;
      }
    }
  }

  function updateNavigationControls() {
    if (!btnNavPrev || !btnNavNext) return;
    const total = activeQuestions.length;

    if (userPrefs.viewMode === 'question') {
      btnNavPrev.disabled = currentIndex === 0;
      btnNavNext.disabled = currentIndex >= total - 1;
    } else if (userPrefs.viewMode === 'page') {
      const perPage = userPrefs.questionsPerPage || 5;
      btnNavPrev.disabled = currentIndex < perPage;
      btnNavNext.disabled = currentIndex + perPage >= total;
    } else {
      btnNavPrev.disabled = true;
      btnNavNext.disabled = true;
    }
  }

  // --- Global Event Listeners & Modals ---
    function attachGlobalListeners() {
    // 1. Navigation Buttons
    if (btnNavPrev) {
      btnNavPrev.addEventListener('click', () => {
        if (userPrefs.viewMode === 'question') {
          if (currentIndex > 0) {
            currentIndex--;
            renderCurrentView();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        } else if (userPrefs.viewMode === 'page') {
          const perPage = userPrefs.questionsPerPage || 5;
          if (currentIndex >= perPage) {
            currentIndex -= perPage;
            renderCurrentView();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      });
    }

    if (btnNavNext) {
      btnNavNext.addEventListener('click', () => {
        if (userPrefs.viewMode === 'question') {
          if (currentIndex < activeQuestions.length - 1) {
            currentIndex++;
            renderCurrentView();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        } else if (userPrefs.viewMode === 'page') {
          const perPage = userPrefs.questionsPerPage || 5;
          if (currentIndex + perPage < activeQuestions.length) {
            currentIndex += perPage;
            renderCurrentView();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      });
    }

    // 2. View Mode Toggle Button (Header Scroll Button)
    if (btnToggleScrollMode) {
      btnToggleScrollMode.addEventListener('click', () => {
        if (userPrefs.viewMode === 'question') {
          userPrefs.viewMode = 'scroll';
          if (elScrollToggleIcon) elScrollToggleIcon.textContent = '📄';
          if (elScrollToggleText) elScrollToggleText.textContent = 'একক প্রশ্ন';
        } else {
          userPrefs.viewMode = 'question';
          if (elScrollToggleIcon) elScrollToggleIcon.textContent = '📜';
          if (elScrollToggleText) elScrollToggleText.textContent = 'সব স্ক্রল';
        }
        savePreferences();
        applyAppearanceSettings();
        renderCurrentView();
      });
    }

    // 3. Quick Session Start/Pause Timer
    if (btnQuickSession) {
      btnQuickSession.addEventListener('click', () => {
        if (sessionState.isRunning) {
          clearInterval(timerInterval);
          sessionState.isRunning = false;
          btnQuickSession.innerText = 'Resume';
        } else {
          sessionState.isRunning = true;
          btnQuickSession.innerText = 'Pause';
          timerInterval = setInterval(() => {
            if (sessionState.remainingSeconds > 0) {
              sessionState.remainingSeconds--;
              const mins = Math.floor(sessionState.remainingSeconds / 60);
              const secs = sessionState.remainingSeconds % 60;
              if (elTimerDisplay) {
                elTimerDisplay.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
              }
            } else {
              clearInterval(timerInterval);
              sessionState.isRunning = false;
              alert('পরীক্ষার সময় সমাপ্ত!');
            }
          }, 1000);
        }
      });
    }

    // 4. Customization Drawer Open/Close
    if (btnOpenCustomization) {
      btnOpenCustomization.addEventListener('click', openDrawer);
    }
    const btnOpenDrawerAlt = document.getElementById('btn-open-drawer');
    if (btnOpenDrawerAlt) {
      btnOpenDrawerAlt.addEventListener('click', openDrawer);
    }

    if (btnCloseDrawer) {
      btnCloseDrawer.addEventListener('click', closeDrawer);
    }
    if (elDrawerBackdrop) {
      elDrawerBackdrop.addEventListener('click', closeDrawer);
    }

    // Drawer View Mode buttons
    document.querySelectorAll('.segmented-control button[data-mode]').forEach(btn => {
      btn.addEventListener('click', () => {
        userPrefs.viewMode = btn.dataset.mode;
        savePreferences();
        applyAppearanceSettings();
        renderCurrentView();
      });
    });

    // Drawer Per-Page Chips
    document.querySelectorAll('#per-page-chips button').forEach(btn => {
      btn.addEventListener('click', () => {
        userPrefs.questionsPerPage = parseInt(btn.dataset.perPage, 10);
        savePreferences();
        applyAppearanceSettings();
        renderCurrentView();
      });
    });

    // Drawer Theme Chips
    document.querySelectorAll('#theme-chips button').forEach(btn => {
      btn.addEventListener('click', () => {
        userPrefs.theme = btn.dataset.theme;
        savePreferences();
        applyAppearanceSettings();
      });
    });

    // Drawer Font Size Chips
    document.querySelectorAll('#font-size-chips button').forEach(btn => {
      btn.addEventListener('click', () => {
        userPrefs.fontSize = parseInt(btn.dataset.size, 10);
        savePreferences();
        applyAppearanceSettings();
      });
    });

    // Drawer Line Height Chips
    document.querySelectorAll('#line-height-chips button').forEach(btn => {
      btn.addEventListener('click', () => {
        userPrefs.lineHeight = parseFloat(btn.dataset.lh);
        savePreferences();
        applyAppearanceSettings();
      });
    });

    // Drawer Spacing Chips
    document.querySelectorAll('#spacing-chips button').forEach(btn => {
      btn.addEventListener('click', () => {
        userPrefs.spacing = btn.dataset.spacing;
        savePreferences();
        applyAppearanceSettings();
      });
    });

    // Drawer Paper Selector
    if (elPaperSelectorSegment) {
      elPaperSelectorSegment.querySelectorAll('button[data-paper]').forEach(btn => {
        btn.addEventListener('click', () => {
          userPrefs.paperFilter = btn.dataset.paper;
          savePreferences();
          syncDrawerControls();
          applyFiltersAndQueue();
          renderCurrentView();
        });
      });
    }

    // Drawer Practice Sequence
    document.querySelectorAll('.segmented-control button[data-seq]').forEach(btn => {
      btn.addEventListener('click', () => {
        userPrefs.practiceMode = btn.dataset.seq;
        savePreferences();
        syncDrawerControls();
        applyFiltersAndQueue();
        renderCurrentView();
      });
    });

    // Drawer Shuffle Toggle
    if (drawerShuffleToggle) {
      drawerShuffleToggle.addEventListener('change', () => {
        userPrefs.shuffleOptions = drawerShuffleToggle.checked;
        savePreferences();
        renderCurrentView();
      });
    }

    // Drawer Filters
    if (elDrawerChapterSelect) {
      elDrawerChapterSelect.addEventListener('change', (e) => {
        userPrefs.chapterFilter = e.target.value;
        savePreferences();
        applyFiltersAndQueue();
        renderCurrentView();
      });
    }

    if (elDrawerUniSelect) {
      elDrawerUniSelect.addEventListener('change', (e) => {
        userPrefs.uniFilter = e.target.value;
        savePreferences();
        applyFiltersAndQueue();
        renderCurrentView();
      });
    }

    if (elDrawerYearSelect) {
      elDrawerYearSelect.addEventListener('change', (e) => {
        userPrefs.yearFilter = e.target.value;
        savePreferences();
        applyFiltersAndQueue();
        renderCurrentView();
      });
    }

    // Drawer AI Persona Select
    if (elDrawerAiPersonaSelect) {
      elDrawerAiPersonaSelect.addEventListener('change', (e) => {
        userPrefs.aiPersona = e.target.value;
        savePreferences();
      });
    }

    // Drawer Timer Duration Select
    if (elDrawerDurationSelect) {
      elDrawerDurationSelect.addEventListener('change', (e) => {
        userPrefs.durationSeconds = parseInt(e.target.value, 10) || 3600;
        savePreferences();
        if (!sessionState.isRunning) {
          sessionState.remainingSeconds = userPrefs.durationSeconds;
          const mins = Math.floor(sessionState.remainingSeconds / 60);
          const secs = sessionState.remainingSeconds % 60;
          if (elTimerDisplay) {
            elTimerDisplay.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
          }
        }
      });
    }

    // Drawer Restart Session Button
    if (btnDrawerRestart) {
      btnDrawerRestart.addEventListener('click', () => {
        if (confirm('Restart current practice session? (বর্তমান প্র্যাকটিস সেশন রিসেট করতে চান?)')) {
          clearInterval(timerInterval);
          sessionState.sessionId = `session_${Date.now()}`;
          sessionState.durationSeconds = userPrefs.durationSeconds || 3600;
          sessionState.remainingSeconds = sessionState.durationSeconds;
          sessionState.isRunning = false;
          sessionState.answers = {};
          currentIndex = 0;
          applyFiltersAndQueue();
          saveSessionState();
          renderCurrentView();
          updateMetrics();
          closeDrawer();
        }
      });
    }

    // Drawer End Session Button
    if (btnDrawerEnd) {
      btnDrawerEnd.addEventListener('click', () => {
        if (confirm('End practice session and review results? (পরীক্ষা সমাপ্ত করে ফলাফল দেখতে চান?)')) {
          clearInterval(timerInterval);
          sessionState.isRunning = false;
          saveSessionState();
          closeDrawer();
          
          let totalAnswered = 0;
          let totalCorrect = 0;
          Object.values(sessionState.answers).forEach(a => {
            if (a.selected) {
              totalAnswered++;
              if (a.isCorrect) totalCorrect++;
            }
          });
          const score = totalAnswered > 0 ? ((totalCorrect / totalAnswered) * 100).toFixed(1) : 0;
          alert(`সেশন ফলাফল:\nমোট উত্তর: ${totalAnswered} টি\nসঠিক: ${totalCorrect} টি\nভুল: ${totalAnswered - totalCorrect} টি\nনির্ভুলতা: ${score}%`);
        }
      });
    }

    // 5. Question Palette Grid Modal
    if (btnToggleGrid) {
      btnToggleGrid.addEventListener('click', openPalette);
    }
    if (btnClosePalette) {
      btnClosePalette.addEventListener('click', closePalette);
    }
    if (elPaletteBackdrop) {
      elPaletteBackdrop.addEventListener('click', closePalette);
    }

    // 6. Suggestion Generation Modal
    if (btnGenerateSuggestions) {
      btnGenerateSuggestions.addEventListener('click', async () => {
        openSuggestionModal();
        elSuggestionTitle.innerText = `অটোম্যাটিক সাজেশন: ${userPrefs.chapterFilter || 'উচ্চতর গণিত'}`;
        elSuggestionBody.innerHTML = `
          <div class="ai-loading-state">
            <span class="ai-pulse-dot"></span>
            <span>শতদ্রু AI বিগত ২০ বছরের ভর্তি পরীক্ষার প্রশ্ন ও সূত্র বিশ্লেষণ করে কম্প্রিহেনসিভ সাজেশন তৈরি করছে...</span>
          </div>
        `;

        try {
          const resp = await fetch(API_MATH_AI_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              action: 'chapter_suggestions',
              chapter: userPrefs.chapterFilter,
              paper: userPrefs.paperFilter
            })
          });

          if (!resp.ok) throw new Error(`HTTP Error: ${resp.status}`);
          const data = await resp.json();
          currentSuggestionMarkdown = data.text || '# সাজেশন তৈরি করা যায়নি।';

          if (window.marked) {
            elSuggestionBody.innerHTML = marked.parse(currentSuggestionMarkdown);
          } else {
            elSuggestionBody.innerText = currentSuggestionMarkdown;
          }
          renderMath(elSuggestionBody);
        } catch (err) {
          elSuggestionBody.innerHTML = `<span style="color: var(--color-danger);">সাজেশন তৈরিতে সমস্যা: ${err.message}</span>`;
        }
      });
    }

    if (btnCloseSuggestion) {
      btnCloseSuggestion.addEventListener('click', closeSuggestionModal);
    }
    if (elSuggestionBackdrop) {
      elSuggestionBackdrop.addEventListener('click', closeSuggestionModal);
    }

    if (btnCopySuggestion) {
      btnCopySuggestion.addEventListener('click', () => {
        navigator.clipboard.writeText(currentSuggestionMarkdown).then(() => {
          btnCopySuggestion.innerText = 'কপি হয়েছে!';
          setTimeout(() => { btnCopySuggestion.innerText = 'কপি করুন'; }, 1500);
        });
      });
    }

    if (btnDownloadSuggestion) {
      btnDownloadSuggestion.addEventListener('click', () => {
        const blob = new Blob([currentSuggestionMarkdown], { type: 'text/markdown;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Math_Suggestions_${userPrefs.chapterFilter || 'HigherMath'}.md`;
        a.click();
        URL.revokeObjectURL(url);
      });
    }

    // Suggestion Chat
    if (btnSubmitSuggestionQuery && inputSuggestionQuery && elSuggestionChatThread) {
      const handleSuggestionChat = async () => {
        const qText = inputSuggestionQuery.value.trim();
        if (!qText) return;

        elSuggestionChatThread.innerHTML += `
          <div class="chat-message user-message">
            <strong>আপনি:</strong> ${escapeHtml(qText)}
          </div>
          <div id="ai-chat-pending" class="chat-message ai-message" style="color: var(--color-primary);">
            শতদ্রু AI চিন্তা করছে...
          </div>
        `;
        inputSuggestionQuery.value = '';
        elSuggestionChatThread.scrollTop = elSuggestionChatThread.scrollHeight;

        try {
          const resp = await fetch(API_MATH_AI_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              action: 'suggestion_chat',
              studentQuery: qText,
              chapter: userPrefs.chapterFilter
            })
          });

          const pendingEl = document.getElementById('ai-chat-pending');
          if (resp.ok) {
            const data = await resp.json();
            const rep = data.text || 'কোনো উত্তর দেওয়া যায়নি।';
            if (pendingEl) {
              pendingEl.removeAttribute('id');
              pendingEl.style.color = '';
              pendingEl.innerHTML = `<strong>শতদ্রু AI:</strong> ` + (window.marked ? marked.parse(rep) : rep);
              renderMath(pendingEl);
            }
          } else {
            if (pendingEl) pendingEl.innerHTML = `<span style="color: var(--color-danger);">ত্রুটি হয়েছে।</span>`;
          }
          elSuggestionChatThread.scrollTop = elSuggestionChatThread.scrollHeight;
        } catch (e) {
          console.error(e);
        }
      };

      btnSubmitSuggestionQuery.addEventListener('click', handleSuggestionChat);
      inputSuggestionQuery.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleSuggestionChat();
      });
    }

    // 7. Keyboard Shortcuts ([S] for Show Answer, Arrow keys, Escape)
    document.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

      if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') {
        if (currentIndex > 0) {
          currentIndex--;
          renderCurrentView();
        }
      } else if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') {
        if (currentIndex < activeQuestions.length - 1) {
          currentIndex++;
          renderCurrentView();
        }
      } else if (e.key.toLowerCase() === 's') {
        // [S] to Show Answer Instantly
        const q = activeQuestions[currentIndex];
        if (q) {
          handleShowAnswer(q);
        }
      } else if (e.key === 'Escape') {
        closeDrawer();
        closePalette();
        closeSuggestionModal();
      }
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
