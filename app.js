/**
 * Biology Question Practice System - Mobile-First Learning Engine
 * Vanilla JavaScript (Zero unnecessary frameworks, lightweight & high performance)
 * Features:
 *  - Authoritative 3,874 Questions (Botany & Zoology)
 *  - Medical & University Admission Standard Focus (Abul Hasan & Gazi Azmal)
 *  - On Review Click: AI Checks Question & Answer Validity & Auto-Corrects Errors
 *  - Persistent Auto-Correction & Supabase Cloud Sync
 *  - Multi-dimensional Filtering: Chapter, University/Exam, and Year/Session
 *  - AI Explanation Personas: 10-Year-Old Kid, Admission Exam Special, Deep Molecular Concept
 *  - Key Biological Terms Extraction & Step-by-Step Breakdown
 *  - Topic-Based Admission Exam Suggestion & Analysis (.md) Generator with Copy & Download
 *  - Instant Right/Wrong Feedback on Option Click
 *  - KaTeX LaTeX Rendering for Math & Chemical Formulas ($CO_2$, $H_2O$, etc.)
 *  - Inline Custom AI Inquiry Field ("ai ques feuid") per question
 *  - Instant / Queued Save to Supabase (ai_questions table)
 *  - "Show Previous Explanations" (পূর্বের AI ব্যাখ্যা দেখুন) Toggle & History
 *  - Keyboard Shortcut [S] to Show Answer Instantly
 *  - Frictionless Practice Canvas (No Auth Gate)
 *  - Question Mode & Page Mode (5, 10, 15, 20 q/page)
 *  - Mistakes First Adaptive Queue
 */

(function () {
  'use strict';

  // --- Storage Keys ---
  const PREFS_STORAGE_KEY = 'biology_user_prefs_v1';
  const SESSION_STORAGE_KEY = 'biology_session_state_v1';
  const MISTAKES_STORAGE_KEY = 'biology_user_mistakes_v1';
  const AI_CACHE_KEY = 'biology_ai_explanations_cache_v1';
  const AI_SYNC_QUEUE_KEY = 'biology_ai_sync_queue_v1';
  const CORRECTIONS_STORAGE_KEY = 'biology_user_corrections_v1';

  // --- Endpoints ---
  const API_CONFIG_ENDPOINT = '/api/config';
  const API_AI_ENDPOINT = '/api/biology-ai';
  const API_SYNC_ENDPOINT = '/api/sync';

  // --- Authentication State ---
  let currentUserId = 'student';
  let currentUserProfile = null;
  let isGuestMode = false;

  // --- Default User Preferences ---
  let userPrefs = {
    viewMode: 'question',          // 'question' or 'page'
    questionsPerPage: 5,           // 5, 10, 15, 20
    theme: 'light',                // 'light', 'dark', 'system'
    fontSize: 16,                  // 14, 16, 18, 20
    lineHeight: 1.6,               // 1.4, 1.6, 1.8
    spacing: 'comfortable',        // 'compact', 'comfortable', 'spacious'
    practiceMode: 'original',      // 'original', 'mistakes_first'
    shuffleOptions: false,
    chapterFilter: 'all',
    uniFilter: 'all',              // 'all', 'DU', 'RU', 'CU', 'JU', 'JnU', 'GST', 'Agri', etc.
    yearFilter: 'all',             // 'all', '24-25', '23-24', etc.
    aiPersona: 'admission',        // 'admission', '10_year_kid', 'deep'
    durationSeconds: 3600
  };

  // --- Session State ---
  let allQuestions = [];
  let activeQuestions = [];
  let currentIndex = 0;

  let sessionState = {
    sessionId: null,
    practiceDate: new Date().toISOString().split('T')[0],
    durationSeconds: 3600,
    remainingSeconds: 3600,
    isRunning: false,
    isPaused: false,
    isCompleted: false,
    startTime: null,
    lastTickTime: null,
    answers: {} // { [qId]: { selected, isCorrect, revealed, notes, markedReview } }
  };

  let userMistakes = {};          // { [qId]: count }
  let userCorrections = {};       // { [qId]: correctionData }
  let aiExplanationsCache = {};   // { [qId_persona]: text }
  let timerInterval = null;
  let isAiRequestPending = {};    // { [qId]: boolean }
  let isAuditPending = {};        // { [qId]: boolean }
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

  // --- KaTeX Safe Renderer Helper ---
  function renderKaTeX(domElement) {
    if (!domElement) return;
    if (typeof window.renderMathInElement === 'function') {
      try {
        window.renderMathInElement(domElement, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true }
          ],
          throwOnError: false
        });
      } catch (err) {
        console.warn('KaTeX render warning:', err.message);
      }
    }
  }

  // --- Application Initializer ---
  async function init() {
    loadPreferences();
    applyPreferencesToDOM();
    loadSession();
    loadMistakes();
    loadCorrections();
    loadAiCache();

    try {
      elViewport.innerHTML = '<div style="text-align: center; padding: 40px 14px; color: var(--text-muted);">Loading authoritative Biology Question Bank (3,874 questions)...</div>';
      
      const resp = await fetch('/data/biology-questions.json');
      if (!resp.ok) throw new Error(`HTTP Error: ${resp.status}`);
      const dataset = await resp.json();
      allQuestions = dataset.questions || [];

      // Apply any persistent corrections
      applyLoadedCorrectionsToQuestions();

      // Sync mistakes and process pending queue
      syncMistakesWithCloud();
      syncCorrectionsWithCloud();
      flushAiSyncQueue();

      // Build active list based on chapter, university, and year
      rebuildActiveQuestionsList();

      // Render View
      renderView();
      updateMetrics();
      setupEventListeners();

      if (sessionState.isRunning && !sessionState.isPaused && !sessionState.isCompleted) {
        resumeTimer();
      }
    } catch (err) {
      console.error('Initialization error:', err);
      elViewport.innerHTML = `<div style="padding: 24px; color: var(--color-danger); text-align: center;">Error loading question bank: ${err.message}. Please verify data/biology-questions.json.</div>`;
    }
  }

  // --- Active Questions List Algorithm (Chapter + University + Year Filtering) ---
  function rebuildActiveQuestionsList() {
    let filtered = allQuestions;

    // 1. Chapter Filter
    if (userPrefs.chapterFilter && userPrefs.chapterFilter !== 'all') {
      filtered = filtered.filter(q => q.chapter === userPrefs.chapterFilter);
    }

    // 2. University / Exam Filter
    if (userPrefs.uniFilter && userPrefs.uniFilter !== 'all') {
      filtered = filtered.filter(q => (q.universities || []).includes(userPrefs.uniFilter));
    }

    // 3. Exam Session / Year Filter
    if (userPrefs.yearFilter && userPrefs.yearFilter !== 'all') {
      if (userPrefs.yearFilter === 'older') {
        filtered = filtered.filter(q => (q.years || []).some(y => {
          const num = parseInt(y.split('-')[0], 10);
          return !isNaN(num) && num <= 14;
        }));
      } else {
        filtered = filtered.filter(q => (q.years || []).includes(userPrefs.yearFilter));
      }
    }

    // Update indicator banner
    const parts = [];
    if (userPrefs.chapterFilter && userPrefs.chapterFilter !== 'all') {
      parts.push(userPrefs.chapterFilter);
    } else {
      parts.push('All Chapters');
    }
    if (userPrefs.uniFilter && userPrefs.uniFilter !== 'all') {
      parts.push(`Target: ${userPrefs.uniFilter}`);
    }
    if (userPrefs.yearFilter && userPrefs.yearFilter !== 'all') {
      parts.push(`Session: ${userPrefs.yearFilter}`);
    }
    elChapterIndicator.textContent = parts.join(' • ');

    // Practice Sequence: Mistakes First vs Original Sequence
    if (userPrefs.practiceMode === 'mistakes_first') {
      const mistakeList = [];
      const regularList = [];

      filtered.forEach(q => {
        const count = userMistakes[q.id] || 0;
        if (count > 0) {
          mistakeList.push({ question: q, mistakes: count });
        } else {
          regularList.push(q);
        }
      });

      // Sort mistake list descending by count, then preserve original sourceIndex
      mistakeList.sort((a, b) => b.mistakes - a.mistakes || a.question.sourceIndex - b.question.sourceIndex);
      activeQuestions = [...mistakeList.map(m => m.question), ...regularList];
    } else {
      // Original textbook order strictly preserved
      activeQuestions = [...filtered].sort((a, b) => a.sourceIndex - b.sourceIndex);
    }

    if (currentIndex >= activeQuestions.length) {
      currentIndex = 0;
    }

    updatePaceDisplay();
  }

  // --- Helper to check if a question's answer is missing or (N/A) ---
  function isQuestionAnswerNA(q) {
    if (!q || !q.answer || q.answer.content === undefined || q.answer.content === null) return true;
    const c = String(q.answer.content).trim().toLowerCase();
    return c === '' || c === '(n/a)' || c === 'n/a' || c === 'null' || c === 'undefined' || c === 'na';
  }

  let scrollLoadedCount = 0;
  const SCROLL_INITIAL_BATCH = 25;
  const SCROLL_CHUNK_SIZE = 25;

  // --- Main View Renderer (Question Mode vs Page Mode vs Scroll Mode) ---
  function renderView() {
    if (!activeQuestions || activeQuestions.length === 0) {
      elViewport.innerHTML = '<div style="padding: 40px 14px; text-align: center; color: var(--text-muted);">No questions found for the selected Chapter / University / Year filters.</div>';
      updateScrollToggleButton();
      return;
    }

    if (userPrefs.viewMode === 'scroll') {
      renderScrollMode();
    } else if (userPrefs.viewMode === 'page') {
      renderPageMode();
    } else {
      renderQuestionMode();
    }

    // Safely render KaTeX math on newly created elements
    renderKaTeX(elViewport);
    updateNavigationButtons();
    updateScrollToggleButton();
  }

  function updateScrollToggleButton() {
    if (!btnToggleScrollMode) return;
    const isScroll = userPrefs.viewMode === 'scroll';
    if (isScroll) {
      if (elScrollToggleIcon) elScrollToggleIcon.textContent = '🎯';
      if (elScrollToggleText) elScrollToggleText.textContent = 'একক প্রশ্ন';
      btnToggleScrollMode.title = 'একক প্রশ্ন মোডে ফিরে যান';
      btnToggleScrollMode.classList.add('active');
    } else {
      if (elScrollToggleIcon) elScrollToggleIcon.textContent = '📜';
      if (elScrollToggleText) elScrollToggleText.textContent = 'সব স্ক্রল';
      btnToggleScrollMode.title = 'এক পেজে সব প্রশ্ন স্ক্রল করুন';
      btnToggleScrollMode.classList.remove('active');
    }
  }

  // --- Unified Question Card Builder ---
  function buildQuestionCardElement(q, globalIdx, total) {
    const qState = sessionState.answers[q.id] || {};

    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = `q-card-${q.id}`;

    // Meta Line
    const metaLine = document.createElement('div');
    metaLine.className = 'q-meta-line';

    const tags = document.createElement('div');
    tags.className = 'q-tags';

    let uniTag = '';
    if (q.universities && q.universities.length > 0) {
      uniTag = `<span class="tag tag-chapter" style="background-color: var(--color-warning-bg); color: var(--color-warning);">${q.universities.join(', ')}</span>`;
    }

    let naTag = '';
    if (isQuestionAnswerNA(q)) {
      naTag = `<span class="tag tag-na-warning" title="উত্তর অনুপস্থিত — AI রিভিউ দিয়ে অটো-সেভ করুন">উত্তর: (N/A) [রিভিউ আবশ্যক]</span>`;
    }

    let correctedBadge = '';
    if (q.isCorrected) {
      correctedBadge = `<span class="tag tag-corrected">সঠিক উত্তর: ${(q.answer?.content || '').toUpperCase()} (AI সেভকৃত)</span>`;
    }

    tags.innerHTML = `
      <span class="tag tag-chapter">${q.chapter || ''}</span>
      ${uniTag}
      ${correctedBadge}
      ${naTag}
      <span class="tag tag-type">${(q.type || 'mcq').toUpperCase()}</span>
    `;

    const qNum = document.createElement('div');
    qNum.className = 'q-number-label';
    qNum.innerHTML = `Q <strong>${globalIdx + 1}</strong> <span style="font-size: 11px; font-weight: normal; color: var(--text-muted);">(No. ${q.originalNumber || ''})</span>`;

    metaLine.appendChild(tags);
    metaLine.appendChild(qNum);
    card.appendChild(metaLine);

    // Question Content
    const qContent = document.createElement('div');
    qContent.className = 'q-content';
    qContent.textContent = q.question.content || '';
    card.appendChild(qContent);

    // Options or Written Box
    if (q.type === 'mcq' && q.options && q.options.length > 0) {
      card.appendChild(buildOptionsElement(q, qState));
    } else {
      card.appendChild(buildWrittenBoxElement(q, qState));
    }

    // Actions
    const actionStrip = document.createElement('div');
    actionStrip.className = 'q-action-strip';

    const btnShow = document.createElement('button');
    btnShow.className = 'btn btn-sm btn-secondary';
    btnShow.innerHTML = `Show Answer <span class="shortcut-tag">[S]</span>`;
    btnShow.addEventListener('click', () => handleShowAnswer(q));

    const btnReview = document.createElement('button');
    btnReview.className = 'btn btn-sm btn-outline btn-review-action';
    btnReview.textContent = qState.markedReview ? 'Reviewed' : 'Review [AI যাচাই]';
    btnReview.addEventListener('click', () => handleToggleReview(q, btnReview, card));

    const btnExplain = document.createElement('button');
    btnExplain.className = 'btn btn-sm btn-secondary';
    btnExplain.textContent = 'AI Explanation';
    btnExplain.addEventListener('click', () => handleToggleInlineAi(q, card));

    actionStrip.appendChild(btnShow);
    actionStrip.appendChild(btnReview);
    actionStrip.appendChild(btnExplain);
    card.appendChild(actionStrip);

    // Revealed Box
    if (qState.revealed) {
      card.appendChild(buildRevealedBoxElement(q));
    }

    // Interactive AI Panel
    const aiPanel = buildAiInteractivePanel(q);
    card.appendChild(aiPanel);

    return card;
  }

  // --- Render Question Mode (Single Question) ---
  function renderQuestionMode() {
    const q = activeQuestions[currentIndex];
    const total = activeQuestions.length;
    elNavPositionIndicator.textContent = `${currentIndex + 1} / ${total}`;

    const card = buildQuestionCardElement(q, currentIndex, total);
    elViewport.innerHTML = '';
    elViewport.appendChild(card);
  }

  // --- Render Page Mode (Multiple Questions per Page) ---
  function renderPageMode() {
    const perPage = userPrefs.questionsPerPage || 5;
    const total = activeQuestions.length;
    const totalPages = Math.ceil(total / perPage);
    const currentPage = Math.floor(currentIndex / perPage);

    const startIdx = currentPage * perPage;
    const endIdx = Math.min(startIdx + perPage, total);
    const pageQuestions = activeQuestions.slice(startIdx, endIdx);

    elNavPositionIndicator.textContent = `Page ${currentPage + 1} / ${totalPages}`;

    const container = document.createElement('div');
    container.className = 'page-mode-container';

    // Page Header
    const pageHeader = document.createElement('div');
    pageHeader.className = 'page-mode-header';
    pageHeader.innerHTML = `
      <span>Page <strong>${currentPage + 1}</strong> of <strong>${totalPages}</strong></span>
      <span>Questions <strong>${startIdx + 1} - ${endIdx}</strong> of ${total}</span>
    `;
    container.appendChild(pageHeader);

    pageQuestions.forEach((q, idx) => {
      const globalIdx = startIdx + idx;
      container.appendChild(buildQuestionCardElement(q, globalIdx, total));
    });

    elViewport.innerHTML = '';
    elViewport.appendChild(container);
  }

  // --- Render Continuous Scroll Mode (All Questions on One Scrollable Page) ---
  function renderScrollMode() {
    const total = activeQuestions.length;
    scrollLoadedCount = 0;

    const initialCount = Math.min(SCROLL_INITIAL_BATCH, total);
    elNavPositionIndicator.textContent = `📜 Scroll: 1 - ${initialCount} of ${total}`;

    const container = document.createElement('div');
    container.className = 'scroll-mode-container';

    // Scroll Header Strip
    const scrollHeader = document.createElement('div');
    scrollHeader.className = 'scroll-mode-header';
    scrollHeader.innerHTML = `
      <div class="scroll-header-info">
        <span class="scroll-mode-badge">📜 সব প্রশ্ন স্ক্রল মোড</span>
        <span class="scroll-count-tag">মোট <strong>${total}</strong> টি প্রশ্ন</span>
      </div>
      <div class="scroll-header-actions">
        ${total > SCROLL_INITIAL_BATCH ? '<button type="button" class="btn btn-xs btn-outline" id="btn-load-all-scroll">⚡ সবগুলো একসাথে লোড করুন</button>' : ''}
        <button type="button" class="btn btn-xs btn-secondary" id="btn-scroll-to-top">↑ শীর্ষে যান</button>
      </div>
    `;
    container.appendChild(scrollHeader);

    // Cards Container
    const cardsBox = document.createElement('div');
    cardsBox.className = 'scroll-cards-container';
    cardsBox.id = 'scroll-cards-container';
    container.appendChild(cardsBox);

    // Sentinel / Loading Footer
    const sentinel = document.createElement('div');
    sentinel.className = 'scroll-sentinel';
    sentinel.id = 'scroll-sentinel';
    container.appendChild(sentinel);

    elViewport.innerHTML = '';
    elViewport.appendChild(container);

    // Load Initial Batch
    appendScrollChunk(initialCount);

    // Header buttons event handlers
    const btnLoadAll = scrollHeader.querySelector('#btn-load-all-scroll');
    if (btnLoadAll) {
      btnLoadAll.addEventListener('click', () => {
        btnLoadAll.disabled = true;
        btnLoadAll.textContent = 'লোড হচ্ছে...';
        appendScrollChunk(total - scrollLoadedCount);
        btnLoadAll.style.display = 'none';
      });
    }

    const btnTop = scrollHeader.querySelector('#btn-scroll-to-top');
    if (btnTop) {
      btnTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  function appendScrollChunk(count) {
    const total = activeQuestions.length;
    if (scrollLoadedCount >= total) {
      updateScrollSentinel();
      return;
    }

    const cardsBox = document.getElementById('scroll-cards-container');
    if (!cardsBox) return;

    const start = scrollLoadedCount;
    const end = Math.min(start + count, total);
    const chunk = activeQuestions.slice(start, end);

    const fragment = document.createDocumentFragment();
    chunk.forEach((q, idx) => {
      const globalIdx = start + idx;
      const card = buildQuestionCardElement(q, globalIdx, total);
      fragment.appendChild(card);
    });

    cardsBox.appendChild(fragment);
    scrollLoadedCount = end;

    // Render KaTeX for newly inserted cards
    renderKaTeX(cardsBox);

    updateScrollSentinel();
    elNavPositionIndicator.textContent = `📜 Scroll: 1 - ${scrollLoadedCount} of ${total}`;
  }

  function updateScrollSentinel() {
    const sentinel = document.getElementById('scroll-sentinel');
    if (!sentinel) return;

    const total = activeQuestions.length;
    if (scrollLoadedCount >= total) {
      sentinel.innerHTML = `
        <div class="scroll-end-banner">
          ✓ এই সেকশনের সকল <strong>${total}</strong> টি প্রশ্ন লোড হয়েছে।
          <button type="button" class="btn btn-xs btn-outline" style="margin-left: 8px;" id="btn-footer-scroll-top">↑ শীর্ষে ফিরুন</button>
        </div>
      `;
      const btnFtrTop = sentinel.querySelector('#btn-footer-scroll-top');
      if (btnFtrTop) {
        btnFtrTop.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
    } else {
      sentinel.innerHTML = `
        <div class="scroll-loading-more">
          <span class="ai-pulse-dot"></span>
          <span>নিচে স্ক্রল করুন, আরও প্রশ্ন আসছে... (${scrollLoadedCount} / ${total})</span>
          <button type="button" class="btn btn-xs btn-outline" id="btn-chunk-load-more" style="margin-left: 8px;">আরও ২৫টি লোড করুন</button>
        </div>
      `;
      const btnMore = sentinel.querySelector('#btn-chunk-load-more');
      if (btnMore) {
        btnMore.addEventListener('click', () => appendScrollChunk(SCROLL_CHUNK_SIZE));
      }
    }
  }

  function ensureScrollQuestionRendered(targetIdx) {
    if (targetIdx >= scrollLoadedCount) {
      appendScrollChunk((targetIdx - scrollLoadedCount) + 5);
    }
    setTimeout(() => {
      const q = activeQuestions[targetIdx];
      if (q) {
        const targetCard = document.getElementById(`q-card-${q.id}`);
        if (targetCard) {
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetCard.classList.add('pulse-focus');
          setTimeout(() => targetCard.classList.remove('pulse-focus'), 1500);
        }
      }
    }, 60);
  }

  // --- Element Builders ---

  /**
   * Builds the MCQ options list with INSTANT EVALUATION ON CLICK.
   */
  function buildOptionsElement(q, qState) {
    const optsBox = document.createElement('div');
    optsBox.className = 'q-options-list';

    let optionsToRender = [...q.options];
    if (userPrefs.shuffleOptions) {
      optionsToRender = getShuffledOptions(q);
    }

    const standardLetters = ['a', 'b', 'c', 'd'];
    const isNA = isQuestionAnswerNA(q);
    const correctLabel = isNA ? '' : (q.answer.content || '').trim().toLowerCase();

    optionsToRender.forEach((opt, idx) => {
      const optItem = document.createElement('div');
      optItem.className = 'opt-item';

      const originalLabel = (opt.label || standardLetters[idx]).toLowerCase();
      const isSelected = qState.selected === originalLabel;

      if (isSelected) optItem.classList.add('selected');

      // Instant evaluation classes
      if (qState.revealed && !isNA) {
        if (originalLabel === correctLabel) {
          optItem.classList.add('correct');
        } else if (isSelected && originalLabel !== correctLabel) {
          optItem.classList.add('incorrect');
        }
      }

      const badge = document.createElement('span');
      badge.className = 'opt-badge';
      badge.textContent = standardLetters[idx];

      const body = document.createElement('div');
      body.className = 'opt-body';
      body.textContent = opt.content || '';

      optItem.appendChild(badge);
      optItem.appendChild(body);

      // INSTANT EVALUATION ON CLICK
      optItem.addEventListener('click', () => {
        selectAndEvaluateOption(q, originalLabel);
      });

      optsBox.appendChild(optItem);
    });

    return optsBox;
  }

  function buildWrittenBoxElement(q, qState) {
    const box = document.createElement('div');
    box.className = 'written-area';

    const ta = document.createElement('textarea');
    ta.className = 'written-textarea';
    ta.placeholder = 'Think through or write your solution notes here...';
    ta.value = qState.notes || '';
    ta.addEventListener('input', () => {
      if (!sessionState.answers[q.id]) sessionState.answers[q.id] = {};
      sessionState.answers[q.id].notes = ta.value;
      saveSession();
    });

    box.appendChild(ta);
    return box;
  }

  function buildRevealedBoxElement(q) {
    const box = document.createElement('div');
    box.className = 'q-revealed-box';

    const isNA = isQuestionAnswerNA(q);
    let ansHtml = '';

    if (isNA) {
      ansHtml = `<span class="ans-badge-na">(N/A)</span> <span style="font-size: 11.5px; color: var(--text-muted); margin-left: 6px;">সঠিক উত্তর প্রশ্নব্যাংকে অনুপস্থিত</span>`;
    } else {
      const ansKey = (q.answer.content || '').trim().toLowerCase();
      if (q.type === 'mcq') {
        const matchOpt = (q.options || []).find(o => o.label.toLowerCase() === ansKey);
        if (matchOpt) {
          ansHtml = `<strong>(${ansKey.toUpperCase()})</strong> ${escapeHtml(matchOpt.content)}`;
        } else {
          ansHtml = `<strong>(${ansKey.toUpperCase()})</strong>`;
        }
      } else {
        ansHtml = escapeHtml(q.answer.content);
      }
      if (q.isCorrected) {
        ansHtml += ` <span class="tag tag-corrected" style="font-size: 10px; margin-left: 6px;">AI অটো-সেভকৃত</span>`;
      }
    }

    const ansLine = document.createElement('div');
    ansLine.className = 'revealed-ans-line';
    ansLine.innerHTML = `Correct Answer: <span>${ansHtml}</span>`;

    if (isNA) {
      const quickRevBtn = document.createElement('button');
      quickRevBtn.className = 'btn btn-xs btn-outline-warning btn-quick-resolve';
      quickRevBtn.innerHTML = `⚡ AI দিয়ে সঠিক উত্তর খুঁজুন ও অটো-সেভ করুন`;
      quickRevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cardDom = document.getElementById(`q-card-${q.id}`);
        const revBtn = cardDom ? cardDom.querySelector('.btn-review-action') : null;
        handleToggleReview(q, revBtn || quickRevBtn, cardDom || box.closest('.question-card'));
      });
      ansLine.appendChild(quickRevBtn);

      const naHint = document.createElement('div');
      naHint.className = 'revealed-na-hint';
      naHint.innerHTML = `⚠️ <em>এই প্রশ্নের উত্তর পূর্বে অনির্ধারিত ছিল। শতদ্রু AI রিভিউ এর মাধ্যমে ড. আবুল হাসান ও প্রফেসর গাজী আজমলের বই থেকে সঠিক উত্তরটি তাৎক্ষণিক অটো-সেভ হবে।</em>`;
      box.appendChild(naHint);
    }

    box.appendChild(ansLine);
    box.appendChild(ansLine);

    if (q.explanation && q.explanation.content && q.explanation.content.trim()) {
      const expLine = document.createElement('div');
      expLine.className = 'revealed-exp-line';
      expLine.textContent = q.explanation.content;
      box.appendChild(expLine);
    }

    return box;
  }

  /**
   * Builds the AI Interactive Panel for each question:
   * 1. Explanation Persona Quick Selector (Admission Exam, 10-Yr Kid, Deep Concept)
   * 2. Inline Conceptual Explanation Container with Key Term Breakdown
   * 3. Custom Question Input Field ("ai ques feuid")
   * 4. "Show Previous Explanations" (পূর্বের AI ব্যাখ্যা দেখুন) Toggle & List
   */
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

        // Trigger explanation in this persona
        const cardDom = document.getElementById(`q-card-${q.id}`);
        if (cardDom) {
          handleToggleInlineAi(q, cardDom, p);
        }
      });
    });
    panel.appendChild(personaStrip);

    // 2. Conceptual Explanation container
    const expContainer = document.createElement('div');
    expContainer.className = 'ai-explanation-slot';
    const cacheKey = `${q.id}_${userPrefs.aiPersona}`;
    if (aiExplanationsCache[cacheKey] || aiExplanationsCache[q.id]) {
      const text = aiExplanationsCache[cacheKey] || aiExplanationsCache[q.id];
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
    btnAsk.className = 'btn btn-sm btn-primary';
    btnAsk.textContent = 'Ask';

    const customRespBox = document.createElement('div');
    customRespBox.className = 'ai-custom-response-box';
    customRespBox.style.display = 'none';

    const triggerAsk = () => {
      const query = (input.value || '').trim();
      if (!query) return;
      handleCustomAiInquiry(q, query, customRespBox, btnAsk);
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
    if (p === 'deep') return 'গভীর তাত্ত্বিক বিশ্লেষণ';
    return 'মেডিকেল ও ভার্সিটি ভর্তি স্পেশাল';
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

      // Check if block is a standalone heading like <strong>মূল শব্দসমূহ:</strong>
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
      <button class="btn-text-link" style="color: var(--text-muted); font-size: 11px;">Hide</button>
    `;
    header.querySelector('button').addEventListener('click', () => {
      box.style.display = 'none';
    });

    const body = document.createElement('div');
    body.className = 'ai-clean-text';
    body.innerHTML = formatAiExplanation(text);

    box.appendChild(header);
    box.appendChild(body);

    // Render KaTeX math formulas in explanation
    setTimeout(() => renderKaTeX(box), 0);
    return box;
  }

  // --- Instant Evaluation Handler on Option Click ---
  function selectAndEvaluateOption(q, label) {
    if (!sessionState.isRunning) startSession();
    if (!sessionState.answers[q.id]) sessionState.answers[q.id] = {};
    const qState = sessionState.answers[q.id];

    qState.selected = label;
    qState.revealed = true; // INSTANT FEEDBACK

    const isNA = isQuestionAnswerNA(q);
    if (isNA) {
      qState.isPendingAudit = true;
      qState.isCorrect = null;
      saveSession();
      renderView();
      updateMetrics();
      return;
    }

    const correctAns = (q.answer.content || '').trim().toLowerCase();
    const isCorrect = label.trim().toLowerCase() === correctAns;
    qState.isCorrect = isCorrect;
    qState.isPendingAudit = false;

    if (!isCorrect) {
      userMistakes[q.id] = (userMistakes[q.id] || 0) + 1;
      syncMistakeRecord(q.id, false);
    } else {
      if (userMistakes[q.id] && userMistakes[q.id] > 0) {
        userMistakes[q.id] = Math.max(0, userMistakes[q.id] - 1);
      }
      syncMistakeRecord(q.id, true);
    }

    saveMistakes();
    saveSession();
    renderView();
    updateMetrics();
  }

  function handleShowAnswer(q) {
    if (!sessionState.answers[q.id]) sessionState.answers[q.id] = {};
    sessionState.answers[q.id].revealed = true;
    saveSession();
    renderView();
    updateMetrics();
  }

  // --- ON REVIEW CLICK: AI VALIDITY CHECK & AUTO-CORRECTION ---
  async function handleToggleReview(q, btn, cardDom) {
    if (!sessionState.answers[q.id]) sessionState.answers[q.id] = {};
    const qState = sessionState.answers[q.id];
    qState.markedReview = true;
    if (btn) btn.textContent = 'Reviewing (যাচাই চলছে...)';
    saveSession();
    updateMetrics();

    // Trigger Admission-Grade AI Question Audit & Auto-Correction
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
        <span>শতদ্রু AI পাঠ্যবই (আবুল হাসান ও গাজী আজমল) অনুযায়ী প্রশ্ন ও উত্তর নিরীক্ষা করছে...</span>
      </div>
    `;

    const wasNA = isQuestionAnswerNA(q);

    try {
      const payload = {
        action: 'review_question',
        originalQuestion: {
          id: q.id,
          content: q.question.content,
          options: q.options,
          chapter: q.chapter,
          topic: q.topic,
          answer: q.answer ? q.answer.content : ''
        }
      };

      const resp = await fetch(API_AI_ENDPOINT, {
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
      const isNaResolved = wasNA && Boolean(detectedAns);
      const isAnswerWrong = !wasNA && !audit.isAnswerCorrect && Boolean(detectedAns);
      const isValid = audit.isValid && !isAnswerWrong;

      // ==========================================================
      // AUTO-SAVE ON REVIEW CLICK (for N/A or wrong answers)
      // ==========================================================
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
          <span class="audit-meta-text">রেফারেন্স: ড. আবুল হাসান / প্রফেসর গাজী আজমল</span>
        </div>
        <button class="btn-text-link" style="color: var(--text-muted); font-size: 11px;">Hide</button>
      `;
      header.querySelector('button').addEventListener('click', () => {
        auditPanel.style.display = 'none';
      });
      auditPanel.appendChild(header);

      // Scientific Review Summary
      const summary = document.createElement('div');
      summary.className = 'audit-summary';
      summary.innerHTML = formatAiExplanation(audit.reviewSummary || '');
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
                পাঠ্যবইয়ের নির্ভরযোগ্য প্রমাণ অনুযায়ী সঠিক উত্তর: <strong class="text-success">(${detectedAns.toUpperCase()}) ${escapeHtml(matchedOptText)}</strong>
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
          <span class="diff-old">প্রশ্নব্যাংকের উত্তর: (${audit.markedAnswer}) ❌</span>
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

      // If question text or options had OCR errors
      if (audit.hasCorrection && audit.correctedQuestion && audit.correctedQuestion.trim() !== q.question.content.trim()) {
        const corrCard = document.createElement('div');
        corrCard.className = 'audit-diff-card';

        let optionsHtml = '';
        if (audit.correctedOptions && audit.correctedOptions.length > 0) {
          optionsHtml = `<div style="font-size: 12px; margin-top: 4px;">
            ${audit.correctedOptions.map(o => `(${o.label}) ${escapeHtml(o.content)}`).join(' &nbsp;|&nbsp; ')}
          </div>`;
        }

        corrCard.innerHTML = `
          <div><strong>সংশোধিত প্রশ্ন (OCR ফিক্স):</strong> ${escapeHtml(audit.correctedQuestion)}</div>
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

      // Admission Mnemonic / Trap Tip
      if (audit.admissionTip) {
        const tipBox = document.createElement('div');
        tipBox.className = 'audit-tip-box';
        tipBox.innerHTML = `<strong>ভর্তি টিপস / ফাঁদ সতর্কতা:</strong> ${escapeHtml(audit.admissionTip)}`;
        auditPanel.appendChild(tipBox);
      }

      renderKaTeX(auditPanel);

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
      q.answer.content = newAnswer;
    }
    q.isCorrected = true;

    // Save into user corrections persistent state
    userCorrections[q.id] = {
      correctedQuestion: q.question.content,
      correctedOptions: q.options,
      correctedAnswer: q.answer.content,
      reviewSummary: audit.reviewSummary,
      appliedAt: new Date().toISOString()
    };
    saveCorrections();

    // Sync to Supabase
    syncQuestionCorrection(q.id, audit);

    // Re-evaluate current question state if the user had already chosen an answer
    const qState = sessionState.answers[q.id];
    if (qState && qState.selected) {
      const wasCorrectBefore = qState.isCorrect;
      const isNowCorrect = qState.selected.toLowerCase() === newAnswer;
      qState.isCorrect = isNowCorrect;
      qState.isPendingAudit = false;

      if (!wasCorrectBefore && isNowCorrect) {
        if (userMistakes[q.id] && userMistakes[q.id] > 0) {
          userMistakes[q.id] = Math.max(0, userMistakes[q.id] - 1);
          saveMistakes();
        }
        syncMistakeRecord(q.id, true);
      } else if (wasCorrectBefore && !isNowCorrect) {
        userMistakes[q.id] = (userMistakes[q.id] || 0) + 1;
        saveMistakes();
        syncMistakeRecord(q.id, false);
      }
      saveSession();
      updateMetrics();
    }

    // Live update question card DOM smoothly (WITHOUT full-page re-rendering)
    if (cardDom) {
      // 1. Update Question Content
      const qContent = cardDom.querySelector('.q-content');
      if (qContent && opts.updateText && audit.correctedQuestion) {
        qContent.textContent = audit.correctedQuestion;
      }

      // 2. Update Tags: Remove (N/A) warning tag, add/update corrected tag
      const tagsContainer = cardDom.querySelector('.q-tags');
      if (tagsContainer) {
        const naTag = tagsContainer.querySelector('.tag-na-warning');
        if (naTag) naTag.remove();

        let tagCorr = tagsContainer.querySelector('.tag-corrected');
        if (!tagCorr) {
          tagCorr = document.createElement('span');
          tagCorr.className = 'tag tag-corrected';
          tagsContainer.appendChild(tagCorr);
        }
        tagCorr.textContent = `সঠিক উত্তর: ${newAnswer.toUpperCase()} (AI সেভকৃত)`;
      }

      // 3. Update Options styling live
      const optItems = cardDom.querySelectorAll('.opt-item');
      optItems.forEach(item => {
        const badge = item.querySelector('.opt-badge');
        const badgeLetter = badge ? badge.textContent.trim().toLowerCase() : '';

        if (qState && qState.revealed) {
          item.classList.remove('correct', 'incorrect');
          if (badgeLetter === newAnswer) {
            item.classList.add('correct');
          } else if (qState.selected === badgeLetter && badgeLetter !== newAnswer) {
            item.classList.add('incorrect');
          }
        }
      });

      // 4. Update Revealed Box if present
      const revealedBox = cardDom.querySelector('.q-revealed-box');
      if (revealedBox) {
        const matchOpt = (q.options || []).find(o => o.label.toLowerCase() === newAnswer);
        const ansContentText = matchOpt ? matchOpt.content : '';
        const ansLine = revealedBox.querySelector('.revealed-ans-line');
        if (ansLine) {
          ansLine.innerHTML = `Correct Answer: <span><strong>(${newAnswer.toUpperCase()})</strong> ${escapeHtml(ansContentText)}</span> <span class="tag tag-corrected" style="font-size: 10px; margin-left: 6px;">AI অটো-সেভকৃত</span>`;
        }
        const naHint = revealedBox.querySelector('.revealed-na-hint');
        if (naHint) naHint.remove();
        const quickRevBtn = revealedBox.querySelector('.btn-quick-resolve');
        if (quickRevBtn) quickRevBtn.remove();
      }
    }
  }

  // --- Inline Clean AI Explanation Handler with Persona ---
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
      renderKaTeX(expSlot);
      return;
    }

    // 2. Prevent duplicate concurrent requests
    if (isAiRequestPending[q.id]) return;
    isAiRequestPending[q.id] = true;

    // 3. Render clean loading state
    expSlot.innerHTML = `
      <div class="ai-loading-state">
        <span class="ai-pulse-dot"></span>
        <span>মূল শব্দ চিহ্নিত করে ব্যাখ্যা প্রস্তুত হচ্ছে... (${getPersonaLabel(personaToUse)})</span>
      </div>
    `;

    try {
      const payload = {
        action: 'explain',
        persona: personaToUse,
        originalQuestion: {
          id: q.id,
          content: q.question.content,
          options: q.options,
          chapter: q.chapter,
          topic: q.topic,
          answer: q.answer.content
        }
      };

      const resp = await fetch(API_AI_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const resData = await resp.json();
      isAiRequestPending[q.id] = false;

      if (!resData.success) {
        throw new Error(resData.error || 'Failed to generate explanation.');
      }

      const explanationText = resData.text || '';
      aiExplanationsCache[cacheKey] = explanationText;
      saveAiCache();

      // Cloud & Queue Sync
      saveAiQuestionToCloudAndLocal(q.id, `Persona: ${getPersonaLabel(personaToUse)}`, explanationText, resData.model);

      expSlot.innerHTML = '';
      expSlot.appendChild(buildAiExplanationElement(q, explanationText, personaToUse));
      renderKaTeX(expSlot);
    } catch (err) {
      isAiRequestPending[q.id] = false;
      expSlot.innerHTML = `<div style="color: var(--color-danger); font-size: 13px; padding: 10px 0;">Error: ${err.message}</div>`;
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
        <span>AI উত্তর প্রস্তুত করছে... (Processing question...)</span>
      </div>
    `;

    try {
      const payload = {
        action: 'ask',
        studentQuery: queryText,
        originalQuestion: {
          id: q.id,
          content: q.question.content,
          options: q.options,
          chapter: q.chapter,
          topic: q.topic,
          answer: q.answer.content
        }
      };

      const resp = await fetch(API_AI_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const resData = await resp.json();
      btnDom.disabled = false;

      if (!resData.success) {
        throw new Error(resData.error || 'Failed to get answer.');
      }

      const answerText = resData.text || '';

      // Render response
      respBoxDom.innerHTML = `
        <div style="font-weight: 700; color: var(--color-primary); margin-bottom: 6px; font-size: 12px;">
          Q: ${escapeHtml(queryText)}
        </div>
        <div class="ai-clean-text">${formatAiExplanation(answerText)}</div>
      `;

      // Render KaTeX LaTeX formulas
      renderKaTeX(respBoxDom);

      // Save to Supabase & Local History
      saveAiQuestionToCloudAndLocal(q.id, queryText, answerText, resData.model);

    } catch (err) {
      btnDom.disabled = false;
      respBoxDom.innerHTML = `<div style="color: var(--color-danger); font-size: 13px;">Error: ${err.message}</div>`;
    }
  }

  // --- Historical AI Explanations Loader ("Show Previous Explanations") ---
  async function loadAndRenderAiHistory(questionId, containerDom) {
    containerDom.innerHTML = `
      <div class="ai-loading-state">
        <span class="ai-pulse-dot"></span>
        <span>পূর্বের ব্যাখ্যা লোড হচ্ছে... (Loading previous explanations...)</span>
      </div>
    `;

    let historyRecords = [];

    // 1. Fetch from cloud
    try {
      const res = await fetch(API_SYNC_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'get_ai_questions',
          payload: { questionId }
        })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.questions && data.questions.length > 0) {
          historyRecords = data.questions;
        }
      }
    } catch (e) {}

    // 2. Fallback / Merge with local storage history
    const histKey = `biology_ai_hist_${questionId}`;
    try {
      const localHist = JSON.parse(localStorage.getItem(histKey) || '[]');
      if (localHist.length > 0) {
        const existingIds = new Set(historyRecords.map(r => r.id));
        localHist.forEach(item => {
          if (!existingIds.has(item.id)) {
            historyRecords.push(item);
          }
        });
      }
    } catch (e) {}

    if (historyRecords.length === 0) {
      containerDom.innerHTML = '<div style="font-size: 12px; color: var(--text-muted); padding: 8px 0;">এই প্রশ্নের জন্য পূর্বে কোনো AI ব্যাখ্যা সংরক্ষিত নেই।</div>';
      return;
    }

    containerDom.innerHTML = '';
    historyRecords.forEach(rec => {
      const item = document.createElement('div');
      item.className = 'ai-history-item';

      const d = rec.created_at ? new Date(rec.created_at).toLocaleString('bn-BD', { dateStyle: 'short', timeStyle: 'short' }) : 'Recent';
      const promptLabel = rec.question_content && rec.question_content !== 'Conceptual Explanation'
        ? `Inquiry: ${escapeHtml(rec.question_content)}`
        : 'মূল ধারণাগত ব্যাখ্যা (Conceptual Explanation)';

      item.innerHTML = `
        <div class="ai-history-meta">
          <span class="ai-history-query-badge">${promptLabel}</span>
          <span>${escapeHtml(rec.generation_model || 'Gemini')} • ${d}</span>
        </div>
        <div class="ai-clean-text">${escapeHtml(rec.explanation_content || '')}</div>
      `;

      containerDom.appendChild(item);
    });

    renderKaTeX(containerDom);
  }

  // --- Save / Queue AI Questions to Supabase ---
  async function saveAiQuestionToCloudAndLocal(questionId, queryText, explanationText, model) {
    const record = {
      id: `ai_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      user_id: currentUserId || 'student',
      original_question_id: questionId,
      question_type: queryText ? 'custom_inquiry' : 'concept_explanation',
      question_content: queryText || 'Conceptual Explanation',
      explanation_content: explanationText,
      generation_model: model || 'gemini-3.1-flash-lite',
      created_at: new Date().toISOString()
    };

    const histKey = `biology_ai_hist_${questionId}`;
    try {
      const existing = JSON.parse(localStorage.getItem(histKey) || '[]');
      existing.unshift(record);
      localStorage.setItem(histKey, JSON.stringify(existing.slice(0, 25)));
    } catch (e) {}

    enqueueAiQuestionSync(record);
  }

  function enqueueAiQuestionSync(record) {
    let queue = [];
    try {
      queue = JSON.parse(localStorage.getItem(AI_SYNC_QUEUE_KEY) || '[]');
    } catch (e) {}
    queue.push(record);
    localStorage.setItem(AI_SYNC_QUEUE_KEY, JSON.stringify(queue));

    flushAiSyncQueue();
  }

  async function flushAiSyncQueue() {
    let queue = [];
    try {
      queue = JSON.parse(localStorage.getItem(AI_SYNC_QUEUE_KEY) || '[]');
    } catch (e) { return; }

    if (!queue || queue.length === 0) return;

    const remaining = [];
    for (const record of queue) {
      try {
        const resp = await fetch(API_SYNC_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'save_ai_question',
            payload: { question: record }
          })
        });
        if (!resp.ok) remaining.push(record);
      } catch (err) {
        remaining.push(record);
      }
    }

    try {
      localStorage.setItem(AI_SYNC_QUEUE_KEY, JSON.stringify(remaining));
    } catch (e) {}
  }

  async function syncQuestionCorrection(questionId, auditData) {
    try {
      await fetch(API_SYNC_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'save_question_correction',
          payload: {
            userId: currentUserId,
            correction: {
              originalQuestionId: questionId,
              correctedQuestion: auditData.correctedQuestion,
              correctedOptions: auditData.correctedOptions,
              correctedAnswer: auditData.correctedAnswer || auditData.actualAnswer,
              reviewSummary: auditData.reviewSummary,
              model: 'gemini-3.1-flash-lite'
            }
          }
        })
      });
    } catch (e) {}
  }

  // --- Top-Tier Admission Exam Suggestion Generator (.md) ---
  async function generateChapterSuggestions() {
    closeDrawer();
    elSuggestionBackdrop.style.display = 'block';
    elSuggestionModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    const activeChapter = userPrefs.chapterFilter && userPrefs.chapterFilter !== 'all'
      ? userPrefs.chapterFilter
      : (activeQuestions[0]?.chapter || 'কোষ ও এর গঠন');

    const targetUni = userPrefs.uniFilter && userPrefs.uniFilter !== 'all'
      ? userPrefs.uniFilter
      : 'সকল বিশ্ববিদ্যালয় ও মেডিকেল';

    elSuggestionTitle.textContent = `ভর্তি স্পেশাল সাজেশন: ${activeChapter} (${targetUni})`;
    elSuggestionBody.innerHTML = `
      <div class="ai-loading-state" style="padding: 30px; text-align: center; justify-content: center;">
        <span class="ai-pulse-dot"></span>
        <span>বিগত ২০ বছরের বিশ্ববিদ্যালয় ও মেডিকেল ভর্তি প্রশ্ন বিশ্লেষণ করে টপ-টায়ার সাজেশন তৈরি হচ্ছে...</span>
      </div>
    `;

    // Calculate real chapter and topic statistics from 3,874 questions
    const topicSummary = {};
    allQuestions
      .filter(q => userPrefs.chapterFilter === 'all' || q.chapter === activeChapter)
      .forEach(q => {
        const t = q.topic || 'General Topic';
        if (!topicSummary[t]) {
          topicSummary[t] = { questionCount: 0, universities: {}, years: {} };
        }
        topicSummary[t].questionCount++;
        (q.universities || []).forEach(u => {
          topicSummary[t].universities[u] = (topicSummary[t].universities[u] || 0) + 1;
        });
        (q.years || []).forEach(y => {
          topicSummary[t].years[y] = (topicSummary[t].years[y] || 0) + 1;
        });
      });

    try {
      const resp = await fetch(API_AI_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'chapter_suggestions',
          chapter: activeChapter,
          universityFilter: userPrefs.uniFilter,
          topicSummary
        })
      });

      const resData = await resp.json();
      if (!resData.success) {
        throw new Error(resData.error || 'Failed to generate suggestion.');
      }

      currentSuggestionMarkdown = resData.markdown || resData.text || '';

      // Format markdown for viewer with tables, KaTeX, and blockquotes
      elSuggestionBody.innerHTML = renderMarkdownToHtml(currentSuggestionMarkdown);
      renderKaTeX(elSuggestionBody);

    } catch (err) {
      elSuggestionBody.innerHTML = `<div style="color: var(--color-danger); padding: 20px;">ত্রুটি: ${err.message}</div>`;
    }
  }

  function renderMarkdownToHtml(md) {
    if (!md) return '';
    let html = escapeHtml(md);

    // Markdown tables
    html = html.replace(/\|(.+)\|/gim, (match) => {
      const cells = match.split('|').filter(c => c.trim().length > 0);
      return '<tr>' + cells.map(c => `<td>${c.trim()}</td>`).join('') + '</tr>';
    });
    html = html.replace(/(<tr>.*<\/tr>)/gim, '<div style="overflow-x: auto; margin: 12px 0;"><table>$1</table></div>');

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Blockquotes
    html = html.replace(/^> (.*$)/gim, '<blockquote style="border-left: 3px solid var(--color-primary); padding-left: 10px; margin: 8px 0; color: var(--text-secondary);">$1</blockquote>');

    // Bold & Italic
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Unordered lists
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>');
    html = html.replace(/<\/ul>\s*<ul>/g, '');

    // Paragraphs
    html = html.replace(/\n\n/g, '<br><br>');
    return html;
  }

  function closeSuggestionModal() {
    elSuggestionModal.style.display = 'none';
    elSuggestionBackdrop.style.display = 'none';
    document.body.style.overflow = '';
  }

  function copySuggestion() {
    if (!currentSuggestionMarkdown) return;
    navigator.clipboard.writeText(currentSuggestionMarkdown).then(() => {
      alert('সাজেশন Markdown (.md) ক্লিপবোর্ডে কপি করা হয়েছে!');
    });
  }

  function downloadSuggestion() {
    if (!currentSuggestionMarkdown) return;
    const blob = new Blob([currentSuggestionMarkdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const chapterName = (userPrefs.chapterFilter || 'Biology_Chapter').replace(/[\s\/\\:*?"<>|]+/g, '_');
    const uniName = userPrefs.uniFilter !== 'all' ? `_${userPrefs.uniFilter}` : '';
    a.download = `Admission_Suggestion_${chapterName}${uniName}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // --- Shatadhru AI Suggestion Hub & Interactive Chat ---
  async function handleSuggestionChat() {
    const inputEl = document.getElementById('input-suggestion-query');
    const btnEl = document.getElementById('btn-submit-suggestion-query');
    const threadEl = document.getElementById('suggestion-chat-thread');
    if (!inputEl || !threadEl) return;

    const qText = (inputEl.value || '').trim();
    if (!qText) return;

    inputEl.value = '';
    if (btnEl) btnEl.disabled = true;

    // Append user query
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user-message';
    userMsg.innerHTML = `<strong>আপনি:</strong> ${escapeHtml(qText)}`;
    threadEl.appendChild(userMsg);
    threadEl.scrollTop = threadEl.scrollHeight;

    // Loading indicator
    const aiMsg = document.createElement('div');
    aiMsg.className = 'chat-message ai-message';
    aiMsg.innerHTML = `<strong>শতদ্রু AI:</strong> <span class="ai-pulse-dot"></span> <em>গবেষণা বিশ্লেষণ চলছে...</em>`;
    threadEl.appendChild(aiMsg);
    threadEl.scrollTop = threadEl.scrollHeight;

    const activeChapter = userPrefs.chapterFilter && userPrefs.chapterFilter !== 'all'
      ? userPrefs.chapterFilter
      : (activeQuestions[0]?.chapter || 'কোষ ও এর গঠন');

    try {
      const resp = await fetch(API_AI_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'suggestion_chat',
          query: qText,
          chapter: activeChapter,
          fileContext: currentSuggestionMarkdown || ''
        })
      });

      const resData = await resp.json();
      if (!resData.success) throw new Error(resData.error || 'Failed to get answer.');

      aiMsg.innerHTML = `<strong>শতদ্রু AI:</strong><br><div class="ai-clean-text">${formatAiExplanation(resData.text || '')}</div>`;
      renderKaTeX(aiMsg);
      threadEl.scrollTop = threadEl.scrollHeight;

    } catch (err) {
      aiMsg.innerHTML = `<strong>শতদ্রু AI:</strong> <span style="color: var(--color-danger);">ত্রুটি: ${err.message}</span>`;
    } finally {
      if (btnEl) btnEl.disabled = false;
    }
  }

  // --- Option Position Shuffling Algorithm ---
  function getShuffledOptions(q) {
    const list = [...q.options];
    const seed = (sessionState.sessionId || 'session') + q.id;
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = ((hash << 5) - hash) + seed.charCodeAt(i);
      hash |= 0;
    }
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.abs((hash + i * 31) % (i + 1));
      const temp = list[i];
      list[i] = list[j];
      list[j] = temp;
    }
    return list;
  }

  // --- Navigation Controls ---
  function navigateNext() {
    if (userPrefs.viewMode === 'scroll') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else if (userPrefs.viewMode === 'page') {
      const perPage = userPrefs.questionsPerPage || 5;
      const total = activeQuestions.length;
      const totalPages = Math.ceil(total / perPage);
      const currentPage = Math.floor(currentIndex / perPage);
      if (currentPage < totalPages - 1) {
        currentIndex = (currentPage + 1) * perPage;
        renderView();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      if (currentIndex < activeQuestions.length - 1) {
        currentIndex++;
        renderView();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }

  function navigatePrev() {
    if (userPrefs.viewMode === 'scroll') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (userPrefs.viewMode === 'page') {
      const perPage = userPrefs.questionsPerPage || 5;
      const currentPage = Math.floor(currentIndex / perPage);
      if (currentPage > 0) {
        currentIndex = (currentPage - 1) * perPage;
        renderView();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      if (currentIndex > 0) {
        currentIndex--;
        renderView();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }

  function updateNavigationButtons() {
    if (userPrefs.viewMode === 'scroll') {
      btnNavPrev.textContent = '↑ শীর্ষে (Top)';
      btnNavPrev.disabled = false;
      btnNavNext.textContent = '↓ শেষে (Bottom)';
      btnNavNext.disabled = false;
    } else if (userPrefs.viewMode === 'page') {
      btnNavPrev.textContent = 'Previous';
      btnNavNext.textContent = 'Next';
      const perPage = userPrefs.questionsPerPage || 5;
      const totalPages = Math.ceil(activeQuestions.length / perPage);
      const currentPage = Math.floor(currentIndex / perPage);
      btnNavPrev.disabled = currentPage === 0;
      btnNavNext.disabled = currentPage >= totalPages - 1;
    } else {
      btnNavPrev.textContent = 'Previous';
      btnNavNext.textContent = 'Next';
      btnNavPrev.disabled = currentIndex === 0;
      btnNavNext.disabled = currentIndex >= activeQuestions.length - 1;
    }
  }

  // --- Customization Drawer (Animated Bottom Sheet) ---
  function openDrawer() {
    elDrawerBackdrop.classList.add('active');
    elDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    elDrawer.classList.remove('open');
    elDrawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  // --- Question Palette Navigation Grid ---
  function openPalette() {
    renderPaletteGrid();
    elPaletteBackdrop.style.display = 'block';
    elPaletteModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closePalette() {
    elPaletteModal.style.display = 'none';
    elPaletteBackdrop.style.display = 'none';
    document.body.style.overflow = '';
  }

  function renderPaletteGrid() {
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
          ensureScrollQuestionRendered(idx);
        } else {
          renderView();
        }
      });

      elPaletteGrid.appendChild(item);
    });
  }

  // --- Timer & Session Handling ---
  function startSession() {
    if (sessionState.isRunning && !sessionState.isPaused) return;

    if (!sessionState.sessionId) {
      sessionState.sessionId = `session_${Date.now()}`;
      sessionState.durationSeconds = userPrefs.durationSeconds || 3600;
      sessionState.remainingSeconds = sessionState.durationSeconds;
    }

    sessionState.isRunning = true;
    sessionState.isPaused = false;
    sessionState.startTime = sessionState.startTime || Date.now();
    sessionState.lastTickTime = Date.now();

    btnQuickSession.textContent = 'Pause';
    btnQuickSession.classList.replace('btn-outline', 'btn-secondary');

    clearInterval(timerInterval);
    timerInterval = setInterval(handleTimerTick, 1000);
    saveSession();
    updateMetrics();
  }

  function pauseSession() {
    sessionState.isPaused = true;
    sessionState.isRunning = false;
    clearInterval(timerInterval);
    btnQuickSession.textContent = 'Resume';
    btnQuickSession.classList.replace('btn-secondary', 'btn-outline');
    saveSession();
  }

  function resumeTimer() {
    startSession();
  }

  function handleTimerTick() {
    const now = Date.now();
    const elapsed = Math.round((now - sessionState.lastTickTime) / 1000);
    sessionState.lastTickTime = now;

    if (elapsed > 0) {
      sessionState.remainingSeconds = Math.max(0, sessionState.remainingSeconds - elapsed);
      updateTimerDisplay();

      if (sessionState.remainingSeconds <= 0) {
        clearInterval(timerInterval);
        sessionState.isRunning = false;
        sessionState.isCompleted = true;
        alert('Practice session timer has concluded.');
        saveSession();
      }
    }
  }

  function updateTimerDisplay() {
    const total = Math.max(0, sessionState.remainingSeconds);
    const mins = Math.floor(total / 60);
    const secs = total % 60;
    elTimerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function updatePaceDisplay() {
    const totalQ = activeQuestions.length || 1;
    const dur = userPrefs.durationSeconds || 3600;
    const pace = Math.round(dur / totalQ);
    elPaceDisplay.textContent = `${pace} s/q`;
  }

  function updateMetrics() {
    updateTimerDisplay();
    updatePaceDisplay();

    const totalActive = activeQuestions.length || 1;
    const answeredCount = Object.keys(sessionState.answers).filter(k => sessionState.answers[k].revealed).length;

    elProgressSummary.textContent = `${answeredCount} / ${totalActive}`;
    elMistakesCountDisplay.textContent = Object.values(userMistakes).reduce((a, b) => a + (b > 0 ? 1 : 0), 0);

    const pct = Math.min(100, Math.round((answeredCount / totalActive) * 100));
    elProgressBarFill.style.width = `${pct}%`;
  }

  // --- Preferences & Theme Application ---
  function applyPreferencesToDOM() {
    document.documentElement.style.setProperty('--user-font-size', `${userPrefs.fontSize}px`);
    document.documentElement.style.setProperty('--user-line-height', `${userPrefs.lineHeight}`);

    const spacingMap = { compact: '10px', comfortable: '16px', spacious: '24px' };
    document.documentElement.style.setProperty('--user-spacing', spacingMap[userPrefs.spacing] || '16px');

    let resolvedTheme = userPrefs.theme;
    if (resolvedTheme === 'system') {
      resolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', resolvedTheme);

    syncDrawerControls();
  }

  function syncDrawerControls() {
    document.querySelectorAll('.segmented-control button[data-mode]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === userPrefs.viewMode);
    });

    elPageModeSettingsBlock.style.display = userPrefs.viewMode === 'page' ? 'block' : 'none';

    document.querySelectorAll('#per-page-chips button').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.dataset.perPage, 10) === userPrefs.questionsPerPage);
    });

    document.querySelectorAll('#theme-chips button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === userPrefs.theme);
    });

    document.querySelectorAll('#font-size-chips button').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.dataset.size, 10) === userPrefs.fontSize);
    });

    document.querySelectorAll('#line-height-chips button').forEach(btn => {
      btn.classList.toggle('active', parseFloat(btn.dataset.lh) === userPrefs.lineHeight);
    });

    document.querySelectorAll('#spacing-chips button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.spacing === userPrefs.spacing);
    });

    document.querySelectorAll('.segmented-control button[data-seq]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.seq === userPrefs.practiceMode);
    });

    drawerShuffleToggle.checked = !!userPrefs.shuffleOptions;
    elDrawerChapterSelect.value = userPrefs.chapterFilter || 'all';
    if (elDrawerUniSelect) elDrawerUniSelect.value = userPrefs.uniFilter || 'all';
    if (elDrawerYearSelect) elDrawerYearSelect.value = userPrefs.yearFilter || 'all';
    if (elDrawerAiPersonaSelect) elDrawerAiPersonaSelect.value = userPrefs.aiPersona || 'admission';
    elDrawerDurationSelect.value = userPrefs.durationSeconds || 3600;
  }

  // --- Local Persistence & Corrections Management ---
  function loadPreferences() {
    try {
      const saved = localStorage.getItem(PREFS_STORAGE_KEY);
      if (saved) userPrefs = { ...userPrefs, ...JSON.parse(saved) };
    } catch (e) { }
  }

  function savePreferences() {
    try {
      localStorage.setItem(PREFS_STORAGE_KEY, JSON.stringify(userPrefs));
    } catch (e) { }
  }

  function loadSession() {
    try {
      const saved = localStorage.getItem(SESSION_STORAGE_KEY);
      if (saved) sessionState = { ...sessionState, ...JSON.parse(saved) };
    } catch (e) { }
  }

  function saveSession() {
    try {
      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionState));
    } catch (e) { }
  }

  function loadMistakes() {
    try {
      const saved = localStorage.getItem(MISTAKES_STORAGE_KEY);
      if (saved) userMistakes = JSON.parse(saved);
    } catch (e) { }
  }

  function saveMistakes() {
    try {
      localStorage.setItem(MISTAKES_STORAGE_KEY, JSON.stringify(userMistakes));
    } catch (e) { }
  }

  function loadCorrections() {
    try {
      const saved = localStorage.getItem(CORRECTIONS_STORAGE_KEY);
      if (saved) userCorrections = JSON.parse(saved);
    } catch (e) { }
  }

  function saveCorrections() {
    try {
      localStorage.setItem(CORRECTIONS_STORAGE_KEY, JSON.stringify(userCorrections));
    } catch (e) { }
  }

  function applyLoadedCorrectionsToQuestions() {
    if (!userCorrections || Object.keys(userCorrections).length === 0) return;
    Object.keys(userCorrections).forEach(qId => {
      const corr = userCorrections[qId];
      const match = allQuestions.find(q => q.id === qId);
      if (match && corr) {
        if (corr.correctedQuestion) match.question.content = corr.correctedQuestion;
        if (corr.correctedOptions) match.options = corr.correctedOptions;
        if (corr.correctedAnswer) match.answer.content = corr.correctedAnswer;
        match.isCorrected = true;
      }
    });
  }

  function loadAiCache() {
    try {
      const saved = localStorage.getItem(AI_CACHE_KEY);
      if (saved) aiExplanationsCache = JSON.parse(saved);
    } catch (e) { }
  }

  function saveAiCache() {
    try {
      localStorage.setItem(AI_CACHE_KEY, JSON.stringify(aiExplanationsCache));
    } catch (e) { }
  }

  // --- Cloud Sync Helpers ---
  async function syncMistakeRecord(questionId, wasCorrect) {
    try {
      await fetch(API_SYNC_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'record_mistake',
          payload: { userId: currentUserId, questionId, wasCorrect }
        })
      });
    } catch (e) { }
  }

  async function syncMistakesWithCloud() {
    try {
      const res = await fetch(API_SYNC_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'get_mistakes', payload: { userId: currentUserId } })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.mistakes) {
          data.mistakes.forEach(m => {
            userMistakes[m.original_question_id] = m.mistake_count;
          });
          saveMistakes();
        }
      }
    } catch (e) { }
  }

  async function syncCorrectionsWithCloud() {
    try {
      const res = await fetch(API_SYNC_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'get_question_corrections', payload: { userId: currentUserId } })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.corrections && data.corrections.length > 0) {
          let hasUpdates = false;
          data.corrections.forEach(c => {
            const qId = c.original_question_id;
            if (qId && !userCorrections[qId]) {
              userCorrections[qId] = {
                correctedQuestion: c.question_content,
                correctedAnswer: c.answer_content,
                reviewSummary: c.explanation_content,
                correctedOptions: c.options,
                appliedAt: c.created_at
              };
              hasUpdates = true;
            }
          });
          if (hasUpdates) {
            saveCorrections();
            applyLoadedCorrectionsToQuestions();
            renderView();
          }
        }
      }
    } catch (e) { }
  }

  function escapeHtml(text) {
    if (!text) return '';
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- Setup Event Listeners ---
  function setupEventListeners() {
    btnQuickSession.addEventListener('click', () => {
      if (sessionState.isRunning && !sessionState.isPaused) {
        pauseSession();
      } else {
        startSession();
      }
    });

    btnNavNext.addEventListener('click', navigateNext);
    btnNavPrev.addEventListener('click', navigatePrev);

    btnOpenCustomization.addEventListener('click', openDrawer);
    btnCloseDrawer.addEventListener('click', closeDrawer);
    elDrawerBackdrop.addEventListener('click', closeDrawer);

    btnToggleGrid.addEventListener('click', openPalette);
    btnClosePalette.addEventListener('click', closePalette);
    elPaletteBackdrop.addEventListener('click', closePalette);

    // Quick Continuous Scroll Toggle Button in Header
    if (btnToggleScrollMode) {
      btnToggleScrollMode.addEventListener('click', () => {
        if (userPrefs.viewMode === 'scroll') {
          userPrefs.viewMode = userPrefs.lastNonScrollMode || 'question';
        } else {
          userPrefs.lastNonScrollMode = userPrefs.viewMode;
          userPrefs.viewMode = 'scroll';
        }
        savePreferences();
        applyPreferencesToDOM();
        renderView();
      });
    }

    // Window scroll event listener for continuous infinite scroll
    let scrollThrottleTimer = null;
    window.addEventListener('scroll', () => {
      if (userPrefs.viewMode !== 'scroll') return;
      if (scrollThrottleTimer) return;

      scrollThrottleTimer = setTimeout(() => {
        scrollThrottleTimer = null;
        if (scrollLoadedCount < activeQuestions.length) {
          const scrollBottom = window.innerHeight + window.scrollY;
          const pageHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
          if (pageHeight - scrollBottom < 850) {
            appendScrollChunk(SCROLL_CHUNK_SIZE);
          }
        }
      }, 90);
    }, { passive: true });

    // Suggestion modal buttons
    if (btnGenerateSuggestions) {
      btnGenerateSuggestions.addEventListener('click', generateChapterSuggestions);
    }
    if (btnCloseSuggestion) {
      btnCloseSuggestion.addEventListener('click', closeSuggestionModal);
    }
    if (elSuggestionBackdrop) {
      elSuggestionBackdrop.addEventListener('click', closeSuggestionModal);
    }
    if (btnCopySuggestion) {
      btnCopySuggestion.addEventListener('click', copySuggestion);
    }
    if (btnDownloadSuggestion) {
      btnDownloadSuggestion.addEventListener('click', downloadSuggestion);
    }

    // Shatadhru AI Suggestion Chat listeners
    const btnSubmitSug = document.getElementById('btn-submit-suggestion-query');
    const inputSug = document.getElementById('input-suggestion-query');
    if (btnSubmitSug && inputSug) {
      btnSubmitSug.addEventListener('click', handleSuggestionChat);
      inputSug.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSuggestionChat();
      });
    }

    // KEYBOARD SHORTCUTS ([S] for Show Answer, Arrows/N/P for Navigation)
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        if (userPrefs.viewMode === 'page') {
          const perPage = userPrefs.questionsPerPage || 5;
          const startIdx = Math.floor(currentIndex / perPage) * perPage;
          const endIdx = Math.min(startIdx + perPage, activeQuestions.length);
          for (let i = startIdx; i < endIdx; i++) {
            const q = activeQuestions[i];
            if (!sessionState.answers[q.id]?.revealed) {
              handleShowAnswer(q);
              break;
            }
          }
        } else {
          const q = activeQuestions[currentIndex];
          if (q) handleShowAnswer(q);
        }
      } else if (e.key === 'ArrowRight' || e.key === 'n' || e.key === 'N') {
        navigateNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'p' || e.key === 'P') {
        navigatePrev();
      } else if (e.key === 'Escape') {
        closeDrawer();
        closePalette();
        closeSuggestionModal();
      }
    });

    // Drawer Options Event Delegation
    document.querySelectorAll('.segmented-control button[data-mode]').forEach(btn => {
      btn.addEventListener('click', () => {
        userPrefs.viewMode = btn.dataset.mode;
        savePreferences();
        applyPreferencesToDOM();
        renderView();
      });
    });

    document.querySelectorAll('#per-page-chips button').forEach(btn => {
      btn.addEventListener('click', () => {
        userPrefs.questionsPerPage = parseInt(btn.dataset.perPage, 10);
        savePreferences();
        applyPreferencesToDOM();
        renderView();
      });
    });

    document.querySelectorAll('#theme-chips button').forEach(btn => {
      btn.addEventListener('click', () => {
        userPrefs.theme = btn.dataset.theme;
        savePreferences();
        applyPreferencesToDOM();
      });
    });

    document.querySelectorAll('#font-size-chips button').forEach(btn => {
      btn.addEventListener('click', () => {
        userPrefs.fontSize = parseInt(btn.dataset.size, 10);
        savePreferences();
        applyPreferencesToDOM();
      });
    });

    document.querySelectorAll('#line-height-chips button').forEach(btn => {
      btn.addEventListener('click', () => {
        userPrefs.lineHeight = parseFloat(btn.dataset.lh);
        savePreferences();
        applyPreferencesToDOM();
      });
    });

    document.querySelectorAll('#spacing-chips button').forEach(btn => {
      btn.addEventListener('click', () => {
        userPrefs.spacing = btn.dataset.spacing;
        savePreferences();
        applyPreferencesToDOM();
      });
    });

    document.querySelectorAll('.segmented-control button[data-seq]').forEach(btn => {
      btn.addEventListener('click', () => {
        userPrefs.practiceMode = btn.dataset.seq;
        savePreferences();
        applyPreferencesToDOM();
        rebuildActiveQuestionsList();
        renderView();
        updateMetrics();
      });
    });

    drawerShuffleToggle.addEventListener('change', () => {
      userPrefs.shuffleOptions = drawerShuffleToggle.checked;
      savePreferences();
      renderView();
    });

    elDrawerChapterSelect.addEventListener('change', () => {
      userPrefs.chapterFilter = elDrawerChapterSelect.value;
      savePreferences();
      rebuildActiveQuestionsList();
      currentIndex = 0;
      renderView();
      updateMetrics();
    });

    if (elDrawerUniSelect) {
      elDrawerUniSelect.addEventListener('change', () => {
        userPrefs.uniFilter = elDrawerUniSelect.value;
        savePreferences();
        rebuildActiveQuestionsList();
        currentIndex = 0;
        renderView();
        updateMetrics();
      });
    }

    if (elDrawerYearSelect) {
      elDrawerYearSelect.addEventListener('change', () => {
        userPrefs.yearFilter = elDrawerYearSelect.value;
        savePreferences();
        rebuildActiveQuestionsList();
        currentIndex = 0;
        renderView();
        updateMetrics();
      });
    }

    if (elDrawerAiPersonaSelect) {
      elDrawerAiPersonaSelect.addEventListener('change', () => {
        userPrefs.aiPersona = elDrawerAiPersonaSelect.value;
        savePreferences();
      });
    }

    elDrawerDurationSelect.addEventListener('change', () => {
      userPrefs.durationSeconds = parseInt(elDrawerDurationSelect.value, 10) || 3600;
      savePreferences();
      if (!sessionState.isRunning) {
        sessionState.remainingSeconds = userPrefs.durationSeconds;
        updateTimerDisplay();
      }
      updatePaceDisplay();
    });

    btnDrawerRestart.addEventListener('click', () => {
      if (confirm('Restart current practice session?')) {
        clearInterval(timerInterval);
        sessionState.sessionId = `session_${Date.now()}`;
        sessionState.durationSeconds = userPrefs.durationSeconds || 3600;
        sessionState.remainingSeconds = sessionState.durationSeconds;
        sessionState.isRunning = false;
        sessionState.isPaused = false;
        sessionState.answers = {};
        currentIndex = 0;
        rebuildActiveQuestionsList();
        saveSession();
        renderView();
        updateMetrics();
        closeDrawer();
      }
    });

    btnDrawerEnd.addEventListener('click', () => {
      if (confirm('End practice session?')) {
        clearInterval(timerInterval);
        sessionState.isRunning = false;
        sessionState.isCompleted = true;
        saveSession();
        updateMetrics();
        closeDrawer();
        alert('Practice session ended.');
      }
    });
  }

  // Boot on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
