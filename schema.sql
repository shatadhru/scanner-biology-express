-- ====================================================================
-- Biology Question Practice System - Supabase PostgreSQL Schema
-- ====================================================================

-- 1. Original Questions Table (Authoritative & Immutable)
CREATE TABLE IF NOT EXISTS public.original_questions (
    id TEXT PRIMARY KEY,
    source_index INTEGER UNIQUE NOT NULL,
    original_number TEXT,
    subject TEXT NOT NULL,
    chapter TEXT NOT NULL,
    topic TEXT,
    question_type TEXT NOT NULL DEFAULT 'mcq',
    question_content TEXT NOT NULL,
    options JSONB DEFAULT '[]'::jsonb,
    answer_content TEXT,
    description_content TEXT,
    explanation_content TEXT,
    source_file TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_original_questions_source_index ON public.original_questions (source_index ASC);
CREATE INDEX IF NOT EXISTS idx_original_questions_chapter ON public.original_questions (chapter);
CREATE INDEX IF NOT EXISTS idx_original_questions_subject ON public.original_questions (subject);
CREATE INDEX IF NOT EXISTS idx_original_questions_type ON public.original_questions (question_type);

-- 2. AI Generated Questions Table (Isolated from Original Questions)
CREATE TABLE IF NOT EXISTS public.ai_questions (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    original_question_id TEXT REFERENCES public.original_questions(id) ON DELETE CASCADE,
    question_type TEXT NOT NULL DEFAULT 'mcq',
    question_content TEXT NOT NULL,
    options JSONB DEFAULT '[]'::jsonb,
    answer_content TEXT,
    explanation_content TEXT,
    generation_model TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ai_questions_orig_id ON public.ai_questions (original_question_id);
CREATE INDEX IF NOT EXISTS idx_ai_questions_user_id ON public.ai_questions (user_id);

-- 3. Practice Sessions Table
CREATE TABLE IF NOT EXISTS public.practice_sessions (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    practice_date DATE DEFAULT CURRENT_DATE,
    duration_seconds INTEGER NOT NULL DEFAULT 3600,
    started_at TIMESTAMPTZ DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    paused_at TIMESTAMPTZ,
    status TEXT NOT NULL DEFAULT 'in_progress', -- 'in_progress', 'paused', 'completed', 'ended'
    total_questions INTEGER NOT NULL,
    completed_questions INTEGER DEFAULT 0,
    remaining_questions INTEGER NOT NULL,
    mode TEXT DEFAULT 'original', -- 'original', 'mistakes_first'
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_practice_sessions_user_id ON public.practice_sessions (user_id);
CREATE INDEX IF NOT EXISTS idx_practice_sessions_date ON public.practice_sessions (practice_date);

-- 4. Practice Answers Table (User's Answers during session)
CREATE TABLE IF NOT EXISTS public.practice_answers (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    session_id TEXT REFERENCES public.practice_sessions(id) ON DELETE CASCADE,
    original_question_id TEXT REFERENCES public.original_questions(id) ON DELETE CASCADE,
    selected_answer TEXT,
    is_correct BOOLEAN,
    answer_revealed BOOLEAN DEFAULT FALSE,
    completed BOOLEAN DEFAULT FALSE,
    marked_for_review BOOLEAN DEFAULT FALSE,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_practice_answers_session ON public.practice_answers (session_id);
CREATE INDEX IF NOT EXISTS idx_practice_answers_user_id ON public.practice_answers (user_id);
CREATE INDEX IF NOT EXISTS idx_practice_answers_question ON public.practice_answers (original_question_id);

-- 5. User Mistakes Tracking Table (Supports adaptive "Mistakes First" practice)
CREATE TABLE IF NOT EXISTS public.user_mistakes (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    original_question_id TEXT REFERENCES public.original_questions(id) ON DELETE CASCADE,
    mistake_count INTEGER DEFAULT 1,
    last_mistake_at TIMESTAMPTZ DEFAULT NOW(),
    last_correct_at TIMESTAMPTZ,
    UNIQUE(user_id, original_question_id)
);

CREATE INDEX IF NOT EXISTS idx_user_mistakes_user_id ON public.user_mistakes (user_id);
CREATE INDEX IF NOT EXISTS idx_user_mistakes_count ON public.user_mistakes (mistake_count DESC);

-- ====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================================

-- Enable RLS on all tables
ALTER TABLE public.original_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.practice_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.practice_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_mistakes ENABLE ROW LEVEL SECURITY;

-- Policy 1: original_questions
-- Everyone (anonymous & authenticated) can READ original questions in exact source order
CREATE POLICY "Allow public read access to original_questions"
    ON public.original_questions
    FOR SELECT
    USING (true);

-- Only service role can modify original questions (Immutability guarantee)
CREATE POLICY "Allow service role full access to original_questions"
    ON public.original_questions
    FOR ALL
    USING (auth.jwt() ->> 'role' = 'service_role' OR current_user = 'postgres');

-- Policy 2: ai_questions
CREATE POLICY "Allow read own or public ai_questions"
    ON public.ai_questions
    FOR SELECT
    USING (true);

CREATE POLICY "Allow insert ai_questions"
    ON public.ai_questions
    FOR INSERT
    WITH CHECK (true);

-- Policy 3: practice_sessions
CREATE POLICY "Allow select practice_sessions"
    ON public.practice_sessions
    FOR SELECT
    USING (auth.uid()::text = user_id OR user_id IS NULL OR user_id = 'guest');

CREATE POLICY "Allow insert practice_sessions"
    ON public.practice_sessions
    FOR INSERT
    WITH CHECK (auth.uid()::text = user_id OR user_id IS NULL OR user_id = 'guest');

CREATE POLICY "Allow update practice_sessions"
    ON public.practice_sessions
    FOR UPDATE
    USING (auth.uid()::text = user_id OR user_id IS NULL OR user_id = 'guest');

-- Policy 4: practice_answers
CREATE POLICY "Allow select practice_answers"
    ON public.practice_answers
    FOR SELECT
    USING (auth.uid()::text = user_id OR user_id IS NULL OR user_id = 'guest');

CREATE POLICY "Allow insert practice_answers"
    ON public.practice_answers
    FOR INSERT
    WITH CHECK (auth.uid()::text = user_id OR user_id IS NULL OR user_id = 'guest');

CREATE POLICY "Allow update practice_answers"
    ON public.practice_answers
    FOR UPDATE
    USING (auth.uid()::text = user_id OR user_id IS NULL OR user_id = 'guest');

-- Policy 5: user_mistakes
CREATE POLICY "Allow select user_mistakes"
    ON public.user_mistakes
    FOR SELECT
    USING (auth.uid()::text = user_id OR user_id IS NULL OR user_id = 'guest');

CREATE POLICY "Allow insert/update user_mistakes"
    ON public.user_mistakes
    FOR ALL
    USING (auth.uid()::text = user_id OR user_id IS NULL OR user_id = 'guest');
