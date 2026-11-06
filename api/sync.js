const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '.env');
const ocrEnvPath = 'E:\\OCR\\.env';
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
} else if (fs.existsSync(ocrEnvPath)) {
  dotenv.config({ path: ocrEnvPath });
}

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://nxqqcycylvvotifmwdjf.supabase.co';
const SUPABASE_SECRET_KEY = process.env.SUPABASE_SECRET_KEY || '';

const supabase = createClient(SUPABASE_URL, SUPABASE_SECRET_KEY, {
  auth: { persistSession: false, autoRefreshToken: false }
});

module.exports = async function handler(req, res) {
  const sendJson = (status, data) => {
    if (typeof res.status === 'function') res.status(status);
    else res.statusCode = status;
    if (typeof res.json === 'function') res.json(data);
    else {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.end(JSON.stringify(data));
    }
  };

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    if (typeof res.status === 'function') return res.status(200).end();
    res.statusCode = 200;
    return res.end();
  }

  const { type, payload } = req.body || {};

  try {
    if (type === 'record_mistake') {
      const { userId, questionId, wasCorrect } = payload || {};
      if (!questionId) return sendJson(400, { error: 'Missing questionId' });

      const uid = userId || 'student';
      const id = `${uid}_${questionId}`;

      try {
        if (wasCorrect) {
          const { data: existing } = await supabase
            .from('user_mistakes')
            .select('mistake_count')
            .eq('id', id)
            .single();

          if (existing && existing.mistake_count > 0) {
            await supabase
              .from('user_mistakes')
              .update({
                mistake_count: Math.max(0, existing.mistake_count - 1),
                last_correct_at: new Date().toISOString()
              })
              .eq('id', id);
          }
        } else {
          const { data: existing } = await supabase
            .from('user_mistakes')
            .select('mistake_count')
            .eq('id', id)
            .single();

          const count = existing ? existing.mistake_count + 1 : 1;
          await supabase
            .from('user_mistakes')
            .upsert({
              id,
              user_id: uid,
              original_question_id: questionId,
              mistake_count: count,
              last_mistake_at: new Date().toISOString()
            });
        }
        return sendJson(200, { success: true });
      } catch (dbErr) {
        // Table not created yet or network issue
        return sendJson(200, { success: true, localOnly: true, notice: 'Supabase table pending schema migration' });
      }
    }

    if (type === 'get_mistakes') {
      const uid = payload?.userId || 'student';
      try {
        const { data, error } = await supabase
          .from('user_mistakes')
          .select('original_question_id, mistake_count')
          .eq('user_id', uid)
          .gt('mistake_count', 0)
          .order('mistake_count', { ascending: false });

        if (error) throw error;
        return sendJson(200, { success: true, mistakes: data || [] });
      } catch (dbErr) {
        return sendJson(200, { success: true, mistakes: [], notice: 'Database tables initializing' });
      }
    }

    if (type === 'save_session') {
      const { session } = payload || {};
      if (!session) return sendJson(400, { error: 'Missing session' });

      try {
        const { error } = await supabase
          .from('practice_sessions')
          .upsert(session);
        if (error) throw error;
        return sendJson(200, { success: true });
      } catch (dbErr) {
        return sendJson(200, { success: true, localOnly: true });
      }
    }

    if (type === 'save_ai_question') {
      const { question } = payload || {};
      if (!question) return sendJson(400, { error: 'Missing question' });

      try {
        const { error } = await supabase
          .from('ai_questions')
          .upsert(question);
        if (error) throw error;
        return sendJson(200, { success: true });
      } catch (dbErr) {
        return sendJson(200, { success: true, localOnly: true });
      }
    }

    if (type === 'get_ai_questions') {
      const { questionId, userId } = payload || {};
      if (!questionId) return sendJson(400, { error: 'Missing questionId' });

      try {
        let query = supabase
          .from('ai_questions')
          .select('*')
          .eq('original_question_id', questionId)
          .order('created_at', { ascending: false });

        if (userId && userId !== 'all') {
          query = query.eq('user_id', userId);
        }

        const { data, error } = await query;
        if (error) throw error;
        return sendJson(200, { success: true, questions: data || [] });
      } catch (dbErr) {
        return sendJson(200, { success: true, questions: [], localOnly: true, notice: dbErr.message });
      }
    }

    if (type === 'save_question_correction') {
      const { correction } = payload || {};
      if (!correction) return sendJson(400, { error: 'Missing correction data' });

      try {
        const record = {
          id: `corr_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
          user_id: payload.userId || 'student',
          original_question_id: correction.originalQuestionId,
          question_type: 'auto_correction',
          question_content: correction.correctedQuestion || '',
          answer_content: correction.correctedAnswer || '',
          explanation_content: correction.reviewSummary || '',
          options: correction.correctedOptions || [],
          generation_model: correction.model || 'gemini-3.1-flash-lite',
          created_at: new Date().toISOString()
        };

        const { error } = await supabase
          .from('ai_questions')
          .upsert(record);
        if (error) throw error;
        return sendJson(200, { success: true, record });
      } catch (dbErr) {
        return sendJson(200, { success: true, localOnly: true });
      }
    }

    if (type === 'get_question_corrections') {
      try {
        const { data, error } = await supabase
          .from('ai_questions')
          .select('*')
          .eq('question_type', 'auto_correction')
          .order('created_at', { ascending: false });
        if (error) throw error;
        return sendJson(200, { success: true, corrections: data || [] });
      } catch (dbErr) {
        return sendJson(200, { success: true, corrections: [], localOnly: true });
      }
    }

    if (type === 'save_written_evaluation') {
      const { evaluation, questionId, studentAnswer } = payload || {};
      if (!questionId) return sendJson(400, { error: 'Missing questionId' });

      try {
        const record = {
          id: `weval_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
          user_id: payload.userId || 'student',
          original_question_id: questionId,
          question_type: 'written_evaluation',
          question_content: studentAnswer || '',
          answer_content: JSON.stringify(evaluation || {}),
          explanation_content: evaluation?.evaluationSummary || '',
          generation_model: evaluation?.model || 'gemini-3.1-flash-lite',
          created_at: new Date().toISOString()
        };

        const { error } = await supabase
          .from('ai_questions')
          .upsert(record);
        if (error) throw error;
        return sendJson(200, { success: true, record });
      } catch (dbErr) {
        return sendJson(200, { success: true, localOnly: true });
      }
    }

    if (type === 'get_question_corrections') {
      try {
        const { data, error } = await supabase
          .from('ai_questions')
          .select('*')
          .eq('question_type', 'auto_correction')
          .order('created_at', { ascending: false });
        if (error) throw error;
        return sendJson(200, { success: true, corrections: data || [] });
      } catch (dbErr) {
        return sendJson(200, { success: true, corrections: [], localOnly: true });
      }
    }

    return sendJson(400, { error: 'Unknown sync type' });
  } catch (err) {
    console.error('Sync error:', err);
    return sendJson(500, { error: err.message });
  }
};
