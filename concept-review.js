/**
 * Shatadhru AI — Concept Review System
 * Dedicated Chapter-wise Higher Mathematics Concept Learning & Revision Engine
 */

(function () {
  'use strict';

  // Application State
  const state = {
    chapters: [],
    activePaper: 'all',
    activeChapterId: null,
    activeConceptId: null,
    reviewedConcepts: new Set(),
    chapterChatHistory: {},
    theme: 'dark',
    searchQuery: '',
    isChapterChatLoading: false,
    isCommonChatLoading: false,
    isSuggestionsLoading: false
  };

  // DOM Elements Cache
  const el = {};

  function initElements() {
    el.sidebar = document.getElementById('app-sidebar');
    el.sidebarBackdrop = document.getElementById('sidebar-backdrop');
    el.btnToggleSidebar = document.getElementById('btn-toggle-sidebar');
    el.chaptersNavList = document.getElementById('chapters-nav-list');
    el.paperTabs = document.querySelectorAll('.paper-tab-btn');

    // Mobile Chapter Selector & Drawer
    el.mobileBarChapterTitle = document.getElementById('mobile-bar-chapter-title');
    el.btnMobileChapterSelector = document.getElementById('btn-mobile-chapter-selector');
    el.mobileBottomDrawer = document.getElementById('mobile-bottom-drawer');
    el.mobileBottomDrawerBackdrop = document.getElementById('mobile-bottom-drawer-backdrop');
    el.btnCloseMobileDrawer = document.getElementById('btn-close-mobile-drawer');
    el.mobileDrawerBody = document.getElementById('mobile-drawer-body');
    el.mobilePaperTabs = document.querySelectorAll('.mobile-paper-tab-btn');

    // Mobile Bottom Action Bar
    el.btnMobileNavChapters = document.getElementById('btn-mobile-nav-chapters');
    el.btnMobileNavPractice = document.getElementById('btn-mobile-nav-practice');
    el.btnMobileNavAi = document.getElementById('btn-mobile-nav-ai');
    el.btnMobileNavCommon = document.getElementById('btn-mobile-nav-common');

    el.searchInput = document.getElementById('global-search-input');
    el.btnClearSearch = document.getElementById('btn-clear-search');
    el.searchResultsPanel = document.getElementById('search-results-panel');
    el.searchResultsList = document.getElementById('search-results-list');
    el.btnCloseSearchResults = document.getElementById('btn-close-search-results');

    el.headerProgressText = document.getElementById('header-progress-text');
    el.headerProgressBar = document.getElementById('header-progress-bar');
    el.btnThemeToggle = document.getElementById('btn-theme-toggle');
    el.themeIconSun = document.getElementById('theme-icon-sun');
    el.themeIconMoon = document.getElementById('theme-icon-moon');

    el.conceptViewport = document.getElementById('concept-viewport');
    el.crumbPaper = document.getElementById('crumb-paper');
    el.crumbChapter = document.getElementById('crumb-chapter');
    el.crumbTopic = document.getElementById('crumb-topic');
    el.conceptTitle = document.getElementById('active-concept-title');
    el.conceptSummary = document.getElementById('active-concept-summary');
    el.btnMarkReviewed = document.getElementById('btn-mark-reviewed');
    el.markReviewedLabel = document.getElementById('mark-reviewed-label');
    el.btnScrollToPractice = document.getElementById('btn-scroll-to-practice');
    el.btnScrollToAi = document.getElementById('btn-scroll-to-ai');

    // Section A to H elements
    el.introWhat = document.getElementById('intro-what');
    el.introWhy = document.getElementById('intro-why');
    el.introWhere = document.getElementById('intro-where');
    el.introPrereq = document.getElementById('intro-prereq');
    el.easyExplanation = document.getElementById('easy-explanation-content');
    el.formulasList = document.getElementById('formulas-list-container');
    el.analysisConditions = document.getElementById('analysis-conditions');
    el.analysisVariations = document.getElementById('analysis-variations');
    el.analysisRelationships = document.getElementById('analysis-relationships');
    el.analysisTransformations = document.getElementById('analysis-transformations');
    el.analysisMisunderstandings = document.getElementById('analysis-misunderstandings');
    el.patternsList = document.getElementById('patterns-list-container');

    el.easyExampleProblem = document.getElementById('easy-example-problem');
    el.easyExampleSteps = document.getElementById('easy-example-steps');
    el.easyExampleAnswer = document.getElementById('easy-example-answer');

    el.examExampleTag = document.getElementById('exam-example-tag');
    el.examExampleProblem = document.getElementById('exam-example-problem');
    el.examExampleRecognition = document.getElementById('exam-example-recognition');
    el.examExampleWhy = document.getElementById('exam-example-why');
    el.examExampleSolution = document.getElementById('exam-example-solution');
    el.examExampleTrick = document.getElementById('exam-example-trick');

    el.revFormulas = document.getElementById('rev-formulas');
    el.revConditions = document.getElementById('rev-conditions');
    el.revObservations = document.getElementById('rev-observations');
    el.revMistakes = document.getElementById('rev-mistakes');
    el.revSummaryText = document.getElementById('rev-summary-text');

    // Section 3: Question Types
    el.questionTypesContainer = document.getElementById('question-types-container');

    // Section 5: AI Research
    el.aiContextPill = document.getElementById('ai-active-context-pill');
    el.tabBtnSuggestions = document.getElementById('tab-btn-suggestions');
    el.tabBtnAsk = document.getElementById('tab-btn-ask');
    el.tabPaneSuggestions = document.getElementById('tab-suggestions');
    el.tabPaneAsk = document.getElementById('tab-ask');
    el.aiSuggestionsGrid = document.getElementById('ai-suggestions-grid');
    el.btnRefreshAiSuggestions = document.getElementById('btn-refresh-ai-suggestions');
    el.chapterChatThread = document.getElementById('chapter-chat-thread');
    el.chapterChatForm = document.getElementById('chapter-chat-form');
    el.chapterChatInput = document.getElementById('chapter-chat-input');
    el.btnChapterChatSubmit = document.getElementById('btn-chapter-chat-submit');
    el.btnClearChapterChat = document.getElementById('btn-clear-chapter-chat');

    // Section 6: Common AI Chat Drawer
    el.btnOpenCommonChat = document.getElementById('btn-open-common-chat');
    el.commonChatDrawer = document.getElementById('common-chat-drawer');
    el.commonChatBackdrop = document.getElementById('common-chat-backdrop');
    el.btnCloseCommonChat = document.getElementById('btn-close-common-chat');
    el.commonChatThread = document.getElementById('common-chat-thread');
    el.commonChatForm = document.getElementById('common-chat-form');
    el.commonChatInput = document.getElementById('common-chat-input');
    el.btnCommonChatSubmit = document.getElementById('btn-common-chat-submit');
    el.btnClearCommonChat = document.getElementById('btn-clear-common-chat');
  }

  // Bengali Number Formatter
  function toBnNum(num) {
    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return String(num).replace(/[0-9]/g, d => bnDigits[d]);
  }

  // Load Saved State
  function loadPersistedState() {
    try {
      const saved = localStorage.getItem('shatadhru_reviewed_concepts');
      if (saved) {
        state.reviewedConcepts = new Set(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Could not load reviewed concepts from localStorage', e);
    }

    const savedTheme = localStorage.getItem('shatadhru_theme') || 'dark';
    applyTheme(savedTheme);
  }

  function savePersistedState() {
    try {
      localStorage.setItem('shatadhru_reviewed_concepts', JSON.stringify(Array.from(state.reviewedConcepts)));
    } catch (e) {
      console.warn('Could not save reviewed concepts', e);
    }
  }

  // Theme Management
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('shatadhru_theme', theme);

    if (theme === 'light') {
      if (el.themeIconSun) el.themeIconSun.style.display = 'none';
      if (el.themeIconMoon) el.themeIconMoon.style.display = 'block';
    } else {
      if (el.themeIconSun) el.themeIconSun.style.display = 'block';
      if (el.themeIconMoon) el.themeIconMoon.style.display = 'none';
    }
  }

  // KaTeX Auto-rendering Helper
  function renderMath(targetElement) {
    if (!targetElement || typeof renderMathInElement !== 'function') return;
    try {
      renderMathInElement(targetElement, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    } catch (err) {
      console.warn('KaTeX rendering error:', err);
    }
  }

  // Initialize Data from MATH_CONCEPT_DATA
  function initData() {
    if (window.MATH_CONCEPT_DATA && Array.isArray(window.MATH_CONCEPT_DATA.chapters)) {
      state.chapters = window.MATH_CONCEPT_DATA.chapters;
    } else {
      console.error('MATH_CONCEPT_DATA is not loaded.');
      return;
    }

    // Default to first chapter and first concept
    if (state.chapters.length > 0) {
      const firstChap = state.chapters[0];
      state.activeChapterId = firstChap.id;
      if (firstChap.concepts && firstChap.concepts.length > 0) {
        state.activeConceptId = firstChap.concepts[0].id;
      }
    }

    // Check URL Hash for deep linking e.g. #c-matrix-02
    if (window.location.hash) {
      const hashId = window.location.hash.replace(/^#/, '');
      state.chapters.forEach(ch => {
        const found = ch.concepts.find(c => c.id === hashId);
        if (found) {
          state.activeChapterId = ch.id;
          state.activeConceptId = found.id;
        }
      });
    }
  }

  // Progress Calculation
  function updateProgressDisplay() {
    let totalConcepts = 0;
    state.chapters.forEach(ch => {
      totalConcepts += (ch.concepts || []).length;
    });

    const reviewedCount = state.reviewedConcepts.size;
    const percent = totalConcepts > 0 ? Math.round((reviewedCount / totalConcepts) * 100) : 0;

    if (el.headerProgressText) {
      el.headerProgressText.textContent = `${toBnNum(reviewedCount)} / ${toBnNum(totalConcepts)}`;
    }
    if (el.headerProgressBar) {
      el.headerProgressBar.style.width = `${percent}%`;
    }

    // Update active concept button state
    if (el.btnMarkReviewed && state.activeConceptId) {
      const isDone = state.reviewedConcepts.has(state.activeConceptId);
      if (isDone) {
        el.btnMarkReviewed.classList.add('active');
        el.markReviewedLabel.textContent = 'রিভিউ সম্পন্ন হয়েছে';
      } else {
        el.btnMarkReviewed.classList.remove('active');
        el.markReviewedLabel.textContent = 'রিভিউ সম্পন্ন হিসেবে চিহ্নিত করুন';
      }
    }
  }

  // Render Sidebar Chapters List
  function renderSidebar() {
    if (!el.chaptersNavList) return;

    const filtered = state.chapters.filter(ch => {
      if (state.activePaper === 'all') return true;
      return ch.paper === state.activePaper;
    });

    if (filtered.length === 0) {
      const emptyMsg = `<div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">কোনো অধ্যায় পাওয়া যায়নি।</div>`;
      el.chaptersNavList.innerHTML = emptyMsg;
      if (el.mobileDrawerBody) el.mobileDrawerBody.innerHTML = emptyMsg;
      return;
    }

    let html = '';
    filtered.forEach(ch => {
      const isExpanded = ch.id === state.activeChapterId;
      const numBn = toBnNum(ch.chapterNum);
      const qCountBn = toBnNum(ch.questionCount || 0);

      // Chapter-level review progress calculation
      const totalConcepts = (ch.concepts || []).length;
      const completedCount = (ch.concepts || []).filter(c => state.reviewedConcepts.has(c.id)).length;
      const isAllReviewed = totalConcepts > 0 && completedCount === totalConcepts;

      html += `
        <div class="chapter-nav-item ${isExpanded ? 'active expanded' : ''}" data-chap-id="${ch.id}">
          <div class="chapter-nav-header" data-action="toggle-chapter" data-chap-id="${ch.id}">
            <div class="chapter-header-left">
              <span class="chapter-num-badge">${numBn}</span>
              <span class="chapter-name">${ch.nameBn}</span>
            </div>
            <div class="chapter-header-right">
              ${completedCount > 0 ? `<span class="chapter-stat-badge" style="background: ${isAllReviewed ? 'var(--color-success-subtle)' : 'var(--color-primary-subtle)'}; color: ${isAllReviewed ? 'var(--color-success)' : 'var(--color-primary)'};">${toBnNum(completedCount)}/${toBnNum(totalConcepts)} রিভিউ</span>` : `<span class="chapter-stat-badge">${qCountBn} প্রশ্ন</span>`}
              <span class="chapter-toggle-icon">▼</span>
            </div>
          </div>
          <div class="chapter-concepts-sublist">
      `;

      ch.concepts.forEach(c => {
        const isActive = c.id === state.activeConceptId;
        const isReviewed = state.reviewedConcepts.has(c.id);

        html += `
          <div class="concept-subitem ${isActive ? 'active' : ''}" data-action="select-concept" data-chap-id="${ch.id}" data-concept-id="${c.id}">
            <span>${c.title}</span>
            ${isReviewed ? '<span class="concept-check-icon" title="রিভিউ সম্পন্ন"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg></span>' : ''}
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });

    el.chaptersNavList.innerHTML = html;
    if (el.mobileDrawerBody) {
      el.mobileDrawerBody.innerHTML = html;
    }

    // Update compact mobile bar title
    const activeChap = state.chapters.find(ch => ch.id === state.activeChapterId);
    if (activeChap && el.mobileBarChapterTitle) {
      el.mobileBarChapterTitle.textContent = `অধ্যায় ${toBnNum(activeChap.chapterNum)}: ${activeChap.nameBn}`;
    }
  }

  // Load and Render Active Concept
  function renderActiveConcept() {
    const chapter = state.chapters.find(ch => ch.id === state.activeChapterId);
    if (!chapter) return;

    let concept = (chapter.concepts || []).find(c => c.id === state.activeConceptId);
    if (!concept && chapter.concepts.length > 0) {
      concept = chapter.concepts[0];
      state.activeConceptId = concept.id;
    }
    if (!concept) return;

    // Update Breadcrumbs & Titles
    if (el.crumbPaper) el.crumbPaper.textContent = `উচ্চতর গণিত ${chapter.paperBn}`;
    if (el.crumbChapter) el.crumbChapter.textContent = `অধ্যায় ${toBnNum(chapter.chapterNum)}: ${chapter.nameBn}`;
    if (el.crumbTopic) el.crumbTopic.textContent = `টপিক: ${concept.topic}`;
    if (el.conceptTitle) el.conceptTitle.textContent = concept.title;
    if (el.conceptSummary) el.conceptSummary.textContent = concept.summary;
    if (el.aiContextPill) el.aiContextPill.textContent = `${chapter.nameBn} · ${concept.topic}`;

    // Section A: Introduction
    if (el.introWhat) el.introWhat.textContent = concept.intro.what || '';
    if (el.introWhy) el.introWhy.textContent = concept.intro.whyImportant || '';
    if (el.introWhere) el.introWhere.textContent = concept.intro.whereUsed || '';
    if (el.introPrereq) el.introPrereq.textContent = concept.intro.prerequisites || '';

    // Section B: Easy Explanation
    if (el.easyExplanation) {
      el.easyExplanation.innerHTML = (concept.easyExplanation || []).map(p => `<p>${p}</p>`).join('');
    }

    // Section C: Important Formulas
    if (el.formulasList) {
      el.formulasList.innerHTML = (concept.formulas || []).map(f => `
        <div class="formula-card">
          <div class="formula-header">
            <span class="formula-name">${f.name}</span>
          </div>
          <div class="formula-latex-display">$$${f.latex}$$</div>
          <div class="formula-details-grid">
            <div class="formula-detail-item"><strong>অর্থ:</strong> ${f.meaning || ''}</div>
            <div class="formula-detail-item"><strong>কখন ব্যবহার করবেন:</strong> ${f.whenToUse || ''}</div>
            <div class="formula-detail-item"><strong>শর্ত:</strong> ${f.conditions || ''}</div>
            <div class="formula-detail-item"><strong>চলক:</strong> ${f.variables || ''}</div>
            <div class="formula-detail-item mistake"><strong>সাধারণ ভুল:</strong> ${f.commonMistakes || ''}</div>
          </div>
        </div>
      `).join('');
    }

    // Section D: Concept Analysis
    if (el.analysisConditions) el.analysisConditions.textContent = concept.analysis.conditions || '';
    if (el.analysisVariations) el.analysisVariations.textContent = concept.analysis.variations || '';
    if (el.analysisRelationships) el.analysisRelationships.textContent = concept.analysis.relationships || '';
    if (el.analysisTransformations) el.analysisTransformations.textContent = concept.analysis.transformations || '';
    if (el.analysisMisunderstandings) el.analysisMisunderstandings.textContent = concept.analysis.misunderstandings || '';

    // Section E: Question Patterns
    if (el.patternsList) {
      el.patternsList.innerHTML = (concept.questionPatterns || []).map(pat => `
        <div class="pattern-card">
          <div class="pattern-title">${pat.typeTitle}</div>
          <div class="pattern-body">
            <div class="pattern-row"><strong>চেনার উপায়:</strong> ${pat.recognition}</div>
            <div class="pattern-row"><strong>প্রয়োজনীয় সূত্র/ধারণা:</strong> ${pat.requiredConcept}</div>
            <div class="pattern-row"><strong>সমাধান কৌশল:</strong> ${pat.strategy}</div>
            ${pat.keySteps && pat.keySteps.length > 0 ? `
              <div class="pattern-row">
                <strong>মূল ধাপসমূহ:</strong>
                <ol class="pattern-steps-list">
                  ${pat.keySteps.map(s => `<li>${s}</li>`).join('')}
                </ol>
              </div>
            ` : ''}
            <div class="pattern-row text-warning"><strong>সাধারণ ফাঁদ (Common Traps):</strong> ${pat.commonTraps}</div>
          </div>
        </div>
      `).join('');
    }

    // Section F: Easy Example
    if (concept.easyExample) {
      if (el.easyExampleProblem) el.easyExampleProblem.innerHTML = concept.easyExample.problem || '';
      if (el.easyExampleSteps) {
        el.easyExampleSteps.innerHTML = (concept.easyExample.solutionSteps || []).map((st, i) => `<p>ধাপ ${toBnNum(i + 1)}: ${st}</p>`).join('');
      }
      if (el.easyExampleAnswer) el.easyExampleAnswer.innerHTML = `সঠিক উত্তর: ${concept.easyExample.answer || ''}`;
    }

    // Section G: Exam-level Example
    if (concept.examExample) {
      if (el.examExampleTag) el.examExampleTag.textContent = concept.examExample.examTag || 'Admission Standard';
      if (el.examExampleProblem) el.examExampleProblem.innerHTML = concept.examExample.problem || '';
      if (el.examExampleRecognition) el.examExampleRecognition.textContent = concept.examExample.recognitionApproach || '';
      if (el.examExampleWhy) el.examExampleWhy.textContent = concept.examExample.whyItWorks || '';
      if (el.examExampleSolution) el.examExampleSolution.innerHTML = (concept.examExample.stepByStepSolution || '').replace(/\n/g, '<br>');
      if (el.examExampleTrick) el.examExampleTrick.textContent = concept.examExample.calcAvoidanceTrick || '';
    }

    // Section H: Quick Revision
    if (concept.quickRevision) {
      const qk = concept.quickRevision;
      if (el.revFormulas) el.revFormulas.innerHTML = (qk.essentialFormulas || []).map(f => `<li>$${f}$</li>`).join('');
      if (el.revConditions) el.revConditions.innerHTML = (qk.importantConditions || []).map(c => `<li>${c}</li>`).join('');
      if (el.revObservations) el.revObservations.innerHTML = (qk.keyObservations || []).map(o => `<li>${o}</li>`).join('');
      if (el.revMistakes) el.revMistakes.innerHTML = (qk.commonMistakes || []).map(m => `<li>${m}</li>`).join('');
      if (el.revSummaryText) el.revSummaryText.textContent = qk.summary || '';
    }

    // Section 3: Question-Type-wise Revision System
    renderQuestionTypes(chapter);

    // Section 5: Shatadhru AI Research Tab 1 (Suggestions) & Tab 2 (Chat)
    renderAiSuggestions(chapter);
    renderChapterChat(chapter);

    // Render KaTeX for all math formulas in viewport
    renderMath(el.conceptViewport);

    // Update Progress Meter
    updateProgressDisplay();
  }

  // Render or restore chapter-scoped chat history
  function renderChapterChat(chapter) {
    if (!el.chapterChatThread || !chapter) return;
    if (state.chapterChatHistory[chapter.id]) {
      el.chapterChatThread.innerHTML = state.chapterChatHistory[chapter.id];
      renderMath(el.chapterChatThread);
    } else {
      el.chapterChatThread.innerHTML = `
        <div class="chat-msg ai-msg">
          <div class="msg-author">শতদ্রু AI (রিসার্চ সহায়ক):</div>
          <div class="msg-text">
            নমস্কার! আমি শতদ্রু AI। বর্তমানে নির্বাচিত অধ্যায় <strong>"${chapter.nameBn}"</strong>-এর যেকোনো জটিল প্রমাণ, সমীকরণের শর্ত বা বিকল্প সমাধানের প্রশ্ন থাকলে নিচে লিখুন।
          </div>
        </div>
      `;
    }
  }

  // Render Section 3: Question-Type-wise Revision
  function renderQuestionTypes(chapter) {
    if (!el.questionTypesContainer) return;

    const qtypes = chapter.questionTypes || [];
    if (qtypes.length === 0) {
      el.questionTypesContainer.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">এই অধ্যায়ের প্রশ্ন টাইপ লোড করা হচ্ছে...</div>`;
      return;
    }

    let html = '';
    qtypes.forEach((qt, qIdx) => {
      const repList = qt.representativeQuestions || [];
      const mixedList = qt.mixedQuestions || [];

      html += `
        <div class="qtype-card" data-qtype-id="${qt.typeId}">
          <div class="qtype-header">
            <div class="qtype-title-wrap">
              <span class="qtype-badge">${qt.typeId}</span>
              <h3 class="qtype-title">${qt.title}</h3>
            </div>
            <span class="q-meta-tag">${toBnNum(repList.length)}টি প্রতিনিধি প্রশ্ন</span>
          </div>

          <div class="qtype-strategy">
            <div class="qtype-strategy-lbl">টাইপ সমাধান কৌশল:</div>
            <div>${qt.solvingStrategy}</div>
          </div>

          <div class="qtype-questions-list">
      `;

      // Render Representative Questions
      repList.forEach((q, idx) => {
        html += renderSingleQuestionCard(q, idx + 1, false);
      });

      // Render Mixed Multi-concept Question
      mixedList.forEach(mq => {
        html += renderSingleQuestionCard(mq, 'মিক্সড', true);
      });

      html += `
          </div>
        </div>
      `;
    });

    el.questionTypesContainer.innerHTML = html;
  }

  // Render single question card with interactive option buttons
  function renderSingleQuestionCard(q, label, isMixed) {
    const options = q.options || [];
    const qId = q.id;

    return `
      <div class="practice-q-card" id="card-${qId}">
        <div class="practice-q-header">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span class="q-meta-tag">প্রশ্ন ${typeof label === 'number' ? toBnNum(label) : label}</span>
            ${isMixed ? '<span class="q-badge-mixed">মাল্টি-কনসেপ্ট মিক্সড প্রশ্ন</span>' : ''}
          </div>
          <span class="q-meta-tag">${q.university || 'Admission'} '${q.year || ''}</span>
        </div>

        <div class="practice-q-content">
          ${q.question}
        </div>

        <div class="practice-options-grid" data-question-id="${qId}" data-correct-answer="${q.answer || 'a'}">
          ${options.map(opt => `
            <button class="option-btn" data-action="pick-option" data-option-label="${opt.label}">
              <span class="option-label">${opt.label.toUpperCase()}</span>
              <span>${opt.content}</span>
            </button>
          `).join('')}
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center;">
          <button class="btn-toggle-solution" data-action="toggle-solution" data-target="sol-${qId}">
            সমাধান ও ব্যাখ্যা দেখুন
          </button>
        </div>

        <div id="sol-${qId}" class="practice-solution-box">
          <div style="font-weight: 700; color: var(--color-primary); margin-bottom: 0.35rem;">
            সঠিক উত্তর: (${(q.answer || '').toUpperCase()})
          </div>
          <div class="solution-text">
            ${(q.explanation || 'কোনো ব্যাখ্যা দেওয়া নেই।').replace(/\n/g, '<br>')}
          </div>
        </div>
      </div>
    `;
  }

  // Render Section 5: Shatadhru AI Suggestions (Tab 1)
  function renderAiSuggestions(chapter) {
    if (!el.aiSuggestionsGrid) return;

    const list = chapter.aiSuggestions || [];
    if (list.length === 0) {
      el.aiSuggestionsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">এই অধ্যায়ের সাজেশন লোড করা হচ্ছে...</div>`;
      return;
    }

    el.aiSuggestionsGrid.innerHTML = list.map(item => `
      <div class="ai-suggestion-card">
        <div>
          <h4 class="suggestion-card-title">${item.title}</h4>
          <p class="suggestion-card-desc">${item.description}</p>
        </div>
        <button class="btn btn-subtle-accent btn-ask-suggestion" data-action="ask-suggestion" data-query="${encodeURIComponent(item.promptQuery)}">
          <span>AI-কে জিজ্ঞাসা করুন</span>
          <span>→</span>
        </button>
      </div>
    `).join('');
  }

  // Dynamic AI Suggestions Fetcher (Calls concept_suggestions on Gemini)
  async function fetchDynamicSuggestions() {
    const chapter = state.chapters.find(c => c.id === state.activeChapterId);
    if (!chapter) return;
    const concept = (chapter.concepts || []).find(c => c.id === state.activeConceptId) || (chapter.concepts && chapter.concepts[0]);

    if (state.isSuggestionsLoading) return;
    state.isSuggestionsLoading = true;

    if (el.btnRefreshAiSuggestions) {
      el.btnRefreshAiSuggestions.disabled = true;
      el.btnRefreshAiSuggestions.innerHTML = `<span>আইডিয়া খুঁজছে...</span>`;
    }

    try {
      const res = await fetch('/api/math-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'concept_suggestions',
          chapter: chapter.nameBn,
          paper: chapter.paperBn,
          conceptTitle: concept ? concept.title : chapter.nameBn,
          topicSummary: concept ? concept.topic : ''
        })
      });
      const data = await res.json();
      if (data && Array.isArray(data.suggestions) && data.suggestions.length > 0) {
        const existingTitles = new Set((chapter.aiSuggestions || []).map(s => s.title));
        const newOnes = data.suggestions.filter(s => !existingTitles.has(s.title));
        chapter.aiSuggestions = [...newOnes, ...(chapter.aiSuggestions || [])];
        renderAiSuggestions(chapter);
      }
    } catch (err) {
      console.warn('Failed to fetch dynamic suggestions:', err);
    } finally {
      state.isSuggestionsLoading = false;
      if (el.btnRefreshAiSuggestions) {
        el.btnRefreshAiSuggestions.disabled = false;
        el.btnRefreshAiSuggestions.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6"></path><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
          <span>নতুন আইডিয়া খুঁজুন</span>
        `;
      }
    }
  }

  // Interactive Question Option Selection Handler
  function handleOptionPick(btn) {
    const grid = btn.closest('.practice-options-grid');
    if (!grid || grid.classList.contains('answered')) return;

    grid.classList.add('answered');
    const correctAns = (grid.getAttribute('data-correct-answer') || '').trim().toLowerCase();
    const pickedLabel = (btn.getAttribute('data-option-label') || '').trim().toLowerCase();

    // Disable all options in grid
    const allBtns = grid.querySelectorAll('.option-btn');
    allBtns.forEach(b => {
      const bLabel = (b.getAttribute('data-option-label') || '').trim().toLowerCase();
      if (bLabel === correctAns) {
        b.classList.add('actual-answer');
      }
    });

    if (pickedLabel === correctAns) {
      btn.classList.add('selected-correct');
    } else {
      btn.classList.add('selected-wrong');
    }

    // Auto-open solution box on answering
    const qId = grid.getAttribute('data-question-id');
    const solBox = document.getElementById(`sol-${qId}`);
    if (solBox) {
      solBox.classList.add('visible');
      renderMath(solBox);
    }
  }

  // Handle Asking Shatadhru AI (Chapter Specific or Common)
  async function askShatadhruAi({ action, query, threadEl, inputEl, submitBtn }) {
    if (!query || !query.trim()) return;

    const isChapter = action === 'chapter_research_chat' || action === 'concept_research_chat';
    if (isChapter && state.isChapterChatLoading) return;
    if (!isChapter && state.isCommonChatLoading) return;

    if (isChapter) state.isChapterChatLoading = true;
    else state.isCommonChatLoading = true;

    const userQuery = query.trim();
    if (inputEl) inputEl.value = '';

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.dataset.originalHtml = submitBtn.innerHTML;
      submitBtn.innerHTML = `<span>বিশ্লেষণ চলছে...</span>`;
    }

    // Append user message to thread
    const userMsgHtml = `
      <div class="chat-msg user-msg">
        <div class="msg-author">আপনি:</div>
        <div class="msg-text">${userQuery.replace(/\n/g, '<br>')}</div>
      </div>
    `;
    threadEl.insertAdjacentHTML('beforeend', userMsgHtml);

    // Append loading placeholder
    const loadingId = `ai-load-${Date.now()}`;
    const loadingHtml = `
      <div class="chat-msg ai-msg" id="${loadingId}">
        <div class="msg-author">শতদ্রু AI (বিশ্লেষণ চলছে...):</div>
        <div class="msg-text" style="color: var(--text-subtle);">
          গাণিতিক যুক্তি ও সূত্র যাচাই হচ্ছে...
        </div>
      </div>
    `;
    threadEl.insertAdjacentHTML('beforeend', loadingHtml);
    threadEl.scrollTop = threadEl.scrollHeight;

    const activeChap = state.chapters.find(c => c.id === state.activeChapterId) || {};
    const activeConc = (activeChap.concepts || []).find(c => c.id === state.activeConceptId) || {};

    const payload = {
      action: action,
      studentQuery: userQuery,
      chapter: isChapter ? (activeChap.nameBn || 'Higher Math') : 'General',
      paper: isChapter ? (activeChap.paperBn || '1st Paper') : 'Higher Math',
      topicSummary: isChapter ? (activeConc.topic || '') : '',
      conceptTitle: isChapter ? (activeConc.title || '') : '',
      conceptFormula: isChapter ? (activeConc.formulas || []).map(f => f.latex).join('; ') : ''
    };

    try {
      const res = await fetch('/api/math-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      const loadNode = document.getElementById(loadingId);
      if (!loadNode) return;

      if (!res.ok || data.error) {
        loadNode.querySelector('.msg-text').innerHTML = `
          <span style="color: var(--color-danger);">
            দুঃখিত, অনুরোধটি সম্পন্ন করা যায়নি। (${data.error || 'Server Error'})
          </span>
        `;
        return;
      }

      const replyRaw = data.text || data.explanation || 'কোনো উত্তর পাওয়া যায়নি।';
      const parsedMarkdown = typeof marked !== 'undefined' ? marked.parse(replyRaw) : replyRaw.replace(/\n/g, '<br>');

      loadNode.querySelector('.msg-author').textContent = 'শতদ্রু AI:';
      loadNode.querySelector('.msg-text').innerHTML = parsedMarkdown;
      renderMath(loadNode);
      threadEl.scrollTop = threadEl.scrollHeight;

    } catch (err) {
      console.error('Error contacting /api/math-ai:', err);
      const loadNode = document.getElementById(loadingId);
      if (loadNode) {
        loadNode.querySelector('.msg-text').innerHTML = `
          <span style="color: var(--color-danger);">
            নেটওয়ার্ক সংযোগ ত্রুটি হয়েছে। দয়া করে পুনরায় চেষ্টা করুন।
          </span>
        `;
      }
    } finally {
      if (isChapter) {
        state.isChapterChatLoading = false;
        if (state.activeChapterId) {
          state.chapterChatHistory[state.activeChapterId] = threadEl.innerHTML;
        }
      } else {
        state.isCommonChatLoading = false;
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        if (submitBtn.dataset.originalHtml) {
          submitBtn.innerHTML = submitBtn.dataset.originalHtml;
        }
      }
    }
  }

  // Live Search Implementation
  function handleSearch(query) {
    state.searchQuery = (query || '').trim().toLowerCase();
    if (!state.searchQuery) {
      if (el.searchResultsPanel) el.searchResultsPanel.style.display = 'none';
      if (el.btnClearSearch) el.btnClearSearch.style.display = 'none';
      return;
    }

    if (el.btnClearSearch) el.btnClearSearch.style.display = 'block';

    const matches = [];
    state.chapters.forEach(ch => {
      // Check chapter name
      if (ch.nameBn.toLowerCase().includes(state.searchQuery) || ch.nameEn.toLowerCase().includes(state.searchQuery)) {
        matches.push({
          type: 'অধ্যায়',
          chapId: ch.id,
          conceptId: ch.concepts[0]?.id,
          title: ch.nameBn,
          meta: `উচ্চতর গণিত ${ch.paperBn}`,
          snippet: ch.summary
        });
      }

      // Check concepts
      (ch.concepts || []).forEach(c => {
        const titleMatch = c.title.toLowerCase().includes(state.searchQuery);
        const topicMatch = c.topic.toLowerCase().includes(state.searchQuery);
        const formulaMatch = (c.formulas || []).some(f => f.name.toLowerCase().includes(state.searchQuery) || f.latex.toLowerCase().includes(state.searchQuery));
        const whatMatch = (c.intro?.what || '').toLowerCase().includes(state.searchQuery);

        if (titleMatch || topicMatch || formulaMatch || whatMatch) {
          matches.push({
            type: 'কনসেপ্ট',
            chapId: ch.id,
            conceptId: c.id,
            title: c.title,
            meta: `${ch.nameBn} · ${c.topic}`,
            snippet: c.summary || c.intro?.what || ''
          });
        }
      });
    });

    if (el.searchResultsPanel && el.searchResultsList) {
      el.searchResultsPanel.style.display = 'block';
      if (matches.length === 0) {
        el.searchResultsList.innerHTML = `
          <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
            "${query}" সম্পর্কিত কোনো কনসেপ্ট পাওয়া যায়নি।
          </div>
        `;
      } else {
        el.searchResultsList.innerHTML = matches.map(m => `
          <div class="search-result-item" data-action="open-search-result" data-chap-id="${m.chapId}" data-concept-id="${m.conceptId}">
            <div class="search-res-title">[${m.type}] ${m.title}</div>
            <div class="search-res-meta">${m.meta}</div>
            <div class="search-res-snippet">${m.snippet}</div>
          </div>
        `).join('');
      }
    }
  }

  // Event Listeners Binding
  function bindEvents() {
    // Helper to sync body scroll lock across open panels
    function syncBodyLock() {
      const isSidebarOpen = el.sidebar && el.sidebar.classList.contains('open');
      const isMobileDrawerOpen = el.mobileBottomDrawer && el.mobileBottomDrawer.style.display === 'flex';
      const isCommonChatOpen = el.commonChatDrawer && el.commonChatDrawer.style.display === 'flex';
      if (isSidebarOpen || isMobileDrawerOpen || isCommonChatOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }

    // Mobile Sidebar Toggle
    if (el.btnToggleSidebar) {
      el.btnToggleSidebar.addEventListener('click', () => {
        el.sidebar.classList.toggle('open');
        el.sidebarBackdrop.classList.toggle('active');
        syncBodyLock();
      });
    }

    if (el.sidebarBackdrop) {
      el.sidebarBackdrop.addEventListener('click', () => {
        el.sidebar.classList.remove('open');
        el.sidebarBackdrop.classList.remove('active');
        syncBodyLock();
      });
    }

    // Mobile Bottom Drawer Functions
    function openMobileDrawer() {
      if (el.mobileBottomDrawer) el.mobileBottomDrawer.style.display = 'flex';
      if (el.mobileBottomDrawerBackdrop) el.mobileBottomDrawerBackdrop.style.display = 'block';
      syncBodyLock();
    }

    function closeMobileDrawer() {
      if (el.mobileBottomDrawer) el.mobileBottomDrawer.style.display = 'none';
      if (el.mobileBottomDrawerBackdrop) el.mobileBottomDrawerBackdrop.style.display = 'none';
      syncBodyLock();
    }

    if (el.btnMobileChapterSelector) {
      el.btnMobileChapterSelector.addEventListener('click', openMobileDrawer);
    }
    if (el.btnCloseMobileDrawer) {
      el.btnCloseMobileDrawer.addEventListener('click', closeMobileDrawer);
    }
    if (el.mobileBottomDrawerBackdrop) {
      el.mobileBottomDrawerBackdrop.addEventListener('click', closeMobileDrawer);
    }

    // Mobile Bottom Navigation Bar (Requirement 4)
    if (el.btnMobileNavChapters) {
      el.btnMobileNavChapters.addEventListener('click', () => {
        openMobileDrawer();
      });
    }
    if (el.btnMobileNavPractice) {
      el.btnMobileNavPractice.addEventListener('click', () => {
        closeMobileDrawer();
        const sec = document.getElementById('sec-practice-system');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      });
    }
    if (el.btnMobileNavAi) {
      el.btnMobileNavAi.addEventListener('click', () => {
        closeMobileDrawer();
        const sec = document.getElementById('sec-ai-research');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      });
    }
    if (el.btnMobileNavCommon) {
      el.btnMobileNavCommon.addEventListener('click', () => {
        closeMobileDrawer();
        if (el.btnOpenCommonChat) el.btnOpenCommonChat.click();
      });
    }

    // Paper Filter Switcher (Desktop & Mobile Drawer Sync)
    function switchPaperFilter(paperKey) {
      state.activePaper = paperKey;
      el.paperTabs.forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-paper') === paperKey);
      });
      if (el.mobilePaperTabs) {
        el.mobilePaperTabs.forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-paper') === paperKey);
        });
      }

      // If active chapter doesn't belong to the newly selected paper, switch to the first chapter of that paper
      if (paperKey !== 'all') {
        const currentChap = state.chapters.find(c => c.id === state.activeChapterId);
        if (!currentChap || currentChap.paper !== paperKey) {
          const firstInPaper = state.chapters.find(c => c.paper === paperKey);
          if (firstInPaper) {
            state.activeChapterId = firstInPaper.id;
            state.activeConceptId = firstInPaper.concepts && firstInPaper.concepts[0] ? firstInPaper.concepts[0].id : null;
            if (state.activeConceptId) window.location.hash = state.activeConceptId;
            renderActiveConcept();
          }
        }
      }

      renderSidebar();
    }

    el.paperTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        switchPaperFilter(btn.getAttribute('data-paper'));
      });
    });

    if (el.mobilePaperTabs) {
      el.mobilePaperTabs.forEach(btn => {
        btn.addEventListener('click', () => {
          switchPaperFilter(btn.getAttribute('data-paper'));
        });
      });
    }

    // Theme Toggle
    if (el.btnThemeToggle) {
      el.btnThemeToggle.addEventListener('click', () => {
        const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
      });
    }

    // Generic Chapter Nav List Click Handler
    function handleNavListClick(e, isMobile) {
      const header = e.target.closest('[data-action="toggle-chapter"]');
      if (header) {
        const chapId = header.getAttribute('data-chap-id');
        const targetChap = state.chapters.find(c => c.id === chapId);
        if (targetChap) {
          if (state.activeChapterId !== chapId) {
            state.activeChapterId = chapId;
            state.activeConceptId = targetChap.concepts && targetChap.concepts[0] ? targetChap.concepts[0].id : null;
            if (state.activeConceptId) window.location.hash = state.activeConceptId;
            renderSidebar();
            renderActiveConcept();
          } else {
            const chapItem = header.closest('.chapter-nav-item');
            if (chapItem) chapItem.classList.toggle('expanded');
          }
        }
        return;
      }

      const subItem = e.target.closest('[data-action="select-concept"]');
      if (subItem) {
        const chapId = subItem.getAttribute('data-chap-id');
        const conceptId = subItem.getAttribute('data-concept-id');
        state.activeChapterId = chapId;
        state.activeConceptId = conceptId;
        window.location.hash = conceptId;

        renderSidebar();
        renderActiveConcept();

        // Close mobile drawers if open
        if (el.sidebar) el.sidebar.classList.remove('open');
        if (el.sidebarBackdrop) el.sidebarBackdrop.classList.remove('active');
        closeMobileDrawer();

        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    // Sidebar Accordion & Concept Selection
    if (el.chaptersNavList) {
      el.chaptersNavList.addEventListener('click', e => handleNavListClick(e, false));
    }
    if (el.mobileDrawerBody) {
      el.mobileDrawerBody.addEventListener('click', e => handleNavListClick(e, true));
    }

    // Mark Reviewed Button Toggle
    if (el.btnMarkReviewed) {
      el.btnMarkReviewed.addEventListener('click', () => {
        if (!state.activeConceptId) return;
        if (state.reviewedConcepts.has(state.activeConceptId)) {
          state.reviewedConcepts.delete(state.activeConceptId);
        } else {
          state.reviewedConcepts.add(state.activeConceptId);
        }
        savePersistedState();
        updateProgressDisplay();
        renderSidebar();
      });
    }

    // Scroll to Practice
    if (el.btnScrollToPractice) {
      el.btnScrollToPractice.addEventListener('click', () => {
        const sec = document.getElementById('sec-practice-system');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Scroll to AI Research
    if (el.btnScrollToAi) {
      el.btnScrollToAi.addEventListener('click', () => {
        const sec = document.getElementById('sec-ai-research');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Search Input Events
    if (el.searchInput) {
      el.searchInput.addEventListener('input', e => {
        handleSearch(e.target.value);
      });
    }

    if (el.btnClearSearch) {
      el.btnClearSearch.addEventListener('click', () => {
        el.searchInput.value = '';
        handleSearch('');
      });
    }

    if (el.btnCloseSearchResults) {
      el.btnCloseSearchResults.addEventListener('click', () => {
        if (el.searchResultsPanel) el.searchResultsPanel.style.display = 'none';
      });
    }

    if (el.searchResultsList) {
      el.searchResultsList.addEventListener('click', e => {
        const item = e.target.closest('[data-action="open-search-result"]');
        if (item) {
          const chapId = item.getAttribute('data-chap-id');
          const conceptId = item.getAttribute('data-concept-id');
          state.activeChapterId = chapId;
          state.activeConceptId = conceptId;
          window.location.hash = conceptId;

          if (el.searchResultsPanel) el.searchResultsPanel.style.display = 'none';
          if (el.searchInput) el.searchInput.value = '';
          if (el.btnClearSearch) el.btnClearSearch.style.display = 'none';

          renderSidebar();
          renderActiveConcept();
          closeMobileDrawer();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    // Section 3: Interactive Question Answering & Solution Toggle
    if (el.questionTypesContainer) {
      el.questionTypesContainer.addEventListener('click', e => {
        const optBtn = e.target.closest('[data-action="pick-option"]');
        if (optBtn) {
          handleOptionPick(optBtn);
          return;
        }

        const solBtn = e.target.closest('[data-action="toggle-solution"]');
        if (solBtn) {
          const targetId = solBtn.getAttribute('data-target');
          const targetBox = document.getElementById(targetId);
          if (targetBox) {
            targetBox.classList.toggle('visible');
            renderMath(targetBox);
          }
        }
      });
    }

    // Section 5: Shatadhru AI Tabs Switching
    if (el.tabBtnSuggestions && el.tabBtnAsk) {
      el.tabBtnSuggestions.addEventListener('click', () => {
        el.tabBtnSuggestions.classList.add('active');
        el.tabBtnAsk.classList.remove('active');
        el.tabPaneSuggestions.classList.add('active');
        el.tabPaneAsk.classList.remove('active');
      });

      el.tabBtnAsk.addEventListener('click', () => {
        el.tabBtnAsk.classList.add('active');
        el.tabBtnSuggestions.classList.remove('active');
        el.tabPaneAsk.classList.add('active');
        el.tabPaneSuggestions.classList.remove('active');
      });
    }

    // Dynamic AI Suggestions Refresh Button
    if (el.btnRefreshAiSuggestions) {
      el.btnRefreshAiSuggestions.addEventListener('click', () => {
        fetchDynamicSuggestions();
      });
    }

    // Click Suggestion Card to Ask AI
    if (el.aiSuggestionsGrid) {
      el.aiSuggestionsGrid.addEventListener('click', e => {
        const btn = e.target.closest('[data-action="ask-suggestion"]');
        if (btn) {
          const query = decodeURIComponent(btn.getAttribute('data-query') || '');
          el.tabBtnAsk.click();
          askShatadhruAi({
            action: 'chapter_research_chat',
            query: query,
            threadEl: el.chapterChatThread,
            inputEl: el.chapterChatInput,
            submitBtn: el.btnChapterChatSubmit
          });
        }
      });
    }

    // Chapter Specific Chat Submit
    if (el.chapterChatForm) {
      el.chapterChatForm.addEventListener('submit', e => {
        e.preventDefault();
        const query = el.chapterChatInput ? el.chapterChatInput.value : '';
        askShatadhruAi({
          action: 'chapter_research_chat',
          query: query,
          threadEl: el.chapterChatThread,
          inputEl: el.chapterChatInput,
          submitBtn: el.btnChapterChatSubmit
        });
      });
    }

    // Clear Chapter Chat
    if (el.btnClearChapterChat) {
      el.btnClearChapterChat.addEventListener('click', () => {
        const chap = state.chapters.find(c => c.id === state.activeChapterId);
        if (chap) {
          state.chapterChatHistory[chap.id] = null;
          renderChapterChat(chap);
        }
      });
    }

    // Quick Prompt Chips in Chapter Chat
    document.querySelectorAll('.quick-chip-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const chipText = btn.getAttribute('data-chip');
        if (chipText && el.chapterChatInput) {
          el.chapterChatInput.value = chipText;
          askShatadhruAi({
            action: 'chapter_research_chat',
            query: chipText,
            threadEl: el.chapterChatThread,
            inputEl: el.chapterChatInput,
            submitBtn: el.btnChapterChatSubmit
          });
        }
      });
    });

    // Section 6: Common AI Chat Open / Close
    function openCommonChat() {
      if (el.commonChatDrawer) el.commonChatDrawer.style.display = 'flex';
      if (el.commonChatBackdrop) el.commonChatBackdrop.style.display = 'block';
      syncBodyLock();
    }

    function closeCommonChat() {
      if (el.commonChatDrawer) el.commonChatDrawer.style.display = 'none';
      if (el.commonChatBackdrop) el.commonChatBackdrop.style.display = 'none';
      syncBodyLock();
    }

    if (el.btnOpenCommonChat) {
      el.btnOpenCommonChat.addEventListener('click', openCommonChat);
    }

    if (el.btnCloseCommonChat) {
      el.btnCloseCommonChat.addEventListener('click', closeCommonChat);
    }

    if (el.commonChatBackdrop) {
      el.commonChatBackdrop.addEventListener('click', closeCommonChat);
    }

    // Common Chat Submit
    if (el.commonChatForm) {
      el.commonChatForm.addEventListener('submit', e => {
        e.preventDefault();
        const query = el.commonChatInput ? el.commonChatInput.value : '';
        askShatadhruAi({
          action: 'common_ai_chat',
          query: query,
          threadEl: el.commonChatThread,
          inputEl: el.commonChatInput,
          submitBtn: el.btnCommonChatSubmit
        });
      });
    }

    // Clear Common Chat
    if (el.btnClearCommonChat) {
      el.btnClearCommonChat.addEventListener('click', () => {
        if (el.commonChatThread) {
          el.commonChatThread.innerHTML = `
            <div class="chat-msg ai-msg">
              <div class="msg-author">শতদ্রু AI (সার্বজনীন গণিত সহায়ক):</div>
              <div class="msg-text">
                স্বাগতম! এটি শতদ্রু AI এর সার্বজনীন গণিত চ্যাট। উচ্চতর গণিত ১ম ও ২য় পত্রের যেকোনো অধ্যায়, ক্রস-চ্যাপ্টার সংযোগ, জ্যামিতিক প্রমাণ বা ভর্তি পরীক্ষার প্রশ্ন সম্পর্কে যেকোনো জিজ্ঞাসা করতে পারেন।
              </div>
            </div>
          `;
        }
      });
    }

    // Quick Common Prompts Chips
    document.querySelectorAll('.quick-common-chip-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const chipText = btn.getAttribute('data-chip');
        if (chipText && el.commonChatInput) {
          el.commonChatInput.value = chipText;
          askShatadhruAi({
            action: 'common_ai_chat',
            query: chipText,
            threadEl: el.commonChatThread,
            inputEl: el.commonChatInput,
            submitBtn: el.btnCommonChatSubmit
          });
        }
      });
    });

    // Global Escape Key Handler to Close All Drawers and Sidebars
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMobileDrawer();
        closeCommonChat();
        if (el.sidebar && el.sidebar.classList.contains('open')) {
          el.sidebar.classList.remove('open');
          if (el.sidebarBackdrop) el.sidebarBackdrop.classList.remove('active');
        }
        syncBodyLock();
      }
    });

    // Sections sub-nav & Mobile Bottom Bar active highlighter on scroll
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('.learning-section');
      const navLinks = document.querySelectorAll('.sec-nav-link');
      let currentId = '';

      sections.forEach(sec => {
        const top = sec.offsetTop - 140;
        if (window.scrollY >= top) {
          currentId = sec.getAttribute('id');
        }
      });

      if (currentId) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }

      // Mobile Bottom Bar Active Highlighter
      const practiceSec = document.getElementById('sec-practice-system');
      const aiSec = document.getElementById('sec-ai-research');

      let activeBottomBtn = el.btnMobileNavChapters;
      if (aiSec && window.scrollY >= (aiSec.offsetTop - 220)) {
        activeBottomBtn = el.btnMobileNavAi;
      } else if (practiceSec && window.scrollY >= (practiceSec.offsetTop - 220)) {
        activeBottomBtn = el.btnMobileNavPractice;
      } else {
        activeBottomBtn = el.btnMobileNavChapters;
      }

      [el.btnMobileNavChapters, el.btnMobileNavPractice, el.btnMobileNavAi].forEach(btn => {
        if (btn) btn.classList.toggle('active', btn === activeBottomBtn);
      });
    }, { passive: true });
  }

  // Initialization
  document.addEventListener('DOMContentLoaded', () => {
    initElements();
    loadPersistedState();
    initData();
    renderSidebar();
    renderActiveConcept();
    bindEvents();
    console.log('Shatadhru AI Concept Review Engine initialized.');
  });

})();
