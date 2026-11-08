const { GoogleGenAI } = require('@google/genai');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

// Load environment variables
const envPath = path.join(__dirname, '..', '.env');
const ocrEnvPath = 'E:\\OCR\\.env';
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
} else if (fs.existsSync(ocrEnvPath)) {
  dotenv.config({ path: ocrEnvPath });
}

// Safe API key resolution: supports single GEMINI_API_KEY or comma-separated GEMINI_API_KEYS from .env
function getGeminiApiKeys() {
  const raw = process.env.GEMINI_API_KEYS || process.env.GEMINI_API_KEY || '';
  const keys = raw.split(',').map(k => k.trim()).filter(Boolean);
  return keys;
}

const MODELS = ['gemini-3.1-flash-lite', 'gemini-3.5-flash-lite', 'gemini-3.5-flash', 'gemini-3.8-flash'];

const SYSTEM_INSTRUCTION = `You are Shatadhru AI (শতদ্রু AI), the authoritative Bangladesh HSC Higher Mathematics & University/Engineering Admission Specialist, Researcher, and Question Bank Auditor.
Your task is to explain, prove, verify, audit, and auto-correct Higher Mathematics 1st and 2nd Paper problems with 100% mathematical precision and pedagogical clarity.

CRITICAL RULES:
1. Respond in natural, rigorous, high-yield Bengali tailored for HSC, Engineering (BUET, CKREUT) and Varsity (DU, RU, JU, GST) admission candidates.
2. Format ALL mathematical expressions, equations, formulas, matrices, integrals, limits, vectors, coordinates, and steps in standard LaTeX ($inline$ or $$display$$).
3. Always explain the core mathematical logic clearly:
   - Identify which standard theorem or identity is applied.
   - Show the primary shortcut or fast elimination trick where applicable.
   - Warn against common student traps (e.g. extraneous roots, division by zero, domain violations, angle quadrant errors, determinant sign changes).
4. For different personas:
   - "admission" (ভর্তি পরীক্ষা স্পেশাল): Focus on 30-second shortcut techniques, option elimination, and standard patterns.
   - "derivation" or "deep" (ধাপে ধাপে প্রমাণ ও বিস্তার): Detailed rigorous algebraic/calculus proof with all intermediate steps.
   - "10_year_kid" (সহজ উপমা): Intuitive geometric or physical intuition and real-world analogy.`;

function cleanGeminiText(text) {
  if (!text) return '';
  let cleaned = text;
  cleaned = cleaned.replace(/^[ \t]*[\*\-_=]{3,}[ \t]*$/gm, '');
  cleaned = cleaned.replace(/^[ \t]*#{1,6}[ \t]+([^\n:]+):?/gm, '**$1:**');
  cleaned = cleaned.replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
  return cleaned;
}

module.exports = async function handler(req, res) {
  const sendJson = (status, data) => {
    if (typeof res.status === 'function') {
      res.status(status);
    } else {
      res.statusCode = status;
    }
    if (typeof res.json === 'function') {
      res.json(data);
    } else {
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

  if (req.method !== 'POST') {
    return sendJson(405, { error: 'Method Not Allowed. Use POST.' });
  }

  try {
    const { 
      action, 
      originalQuestion, 
      studentQuery, 
      persona, 
      chapter, 
      paper, 
      topicSummary,
      conceptTitle,
      conceptFormula,
      contextData 
    } = req.body || {};

    const qContent = originalQuestion 
      ? (originalQuestion.content || (originalQuestion.question && originalQuestion.question.content) || (typeof originalQuestion.question === 'string' ? originalQuestion.question : '')) 
      : '';

    const allowedContextFreeActions = [
      'chapter_suggestions',
      'suggestion_chat',
      'chapter_research_chat',
      'concept_research_chat',
      'common_ai_chat',
      'concept_suggestions'
    ];

    if (!allowedContextFreeActions.includes(action) && !qContent) {
      return sendJson(400, { error: 'Missing original question context.' });
    }

    const apiKeys = getGeminiApiKeys();
    if (apiKeys.length === 0) {
      return sendJson(500, { error: 'Gemini API key is not configured in .env. Please configure GEMINI_API_KEY.' });
    }

    // Build context
    let contextStr = '';
    if (originalQuestion) {
      contextStr = `Question: ${qContent}
Paper: ${originalQuestion.paper || paper || ''}
Chapter: ${originalQuestion.chapter || chapter || ''}
Topic: ${originalQuestion.topic || ''}
`;
      if (originalQuestion.options && originalQuestion.options.length > 0) {
        contextStr += `Options:\n${originalQuestion.options.map(o => `(${o.label}) ${o.content}`).join('\n')}\n`;
      }
      if (originalQuestion.answer) {
        contextStr += `Declared Answer: (${originalQuestion.answer})\n`;
      }
      if (originalQuestion.explanation || (originalQuestion.solution && originalQuestion.solution.content)) {
        const sol = originalQuestion.explanation || originalQuestion.solution.content;
        contextStr += `Original Book Solution:\n${sol}\n`;
      }
    }

    let prompt = '';
    const selectedPersona = persona || 'admission';

    if (action === 'review_question' || action === 'audit') {
      const rawAns = (originalQuestion.answer || '').trim();
      const isMissingAnswer = !rawAns || rawAns.toLowerCase() === '(n/a)' || rawAns.toLowerCase() === 'n/a';

      prompt = `${contextStr}
Context: This is an authentic Bangladesh Higher Mathematics Question from Admission Exam Question Bank (HSC 1st/2nd Paper, Engineering & Varsity Admission).
Status of Answer in Question Bank: ${isMissingAnswer ? 'উত্তর অনুপস্থিত / (N/A) — পাঠ্যবই ও গাণিতিক নিয়ম অনুযায়ী ১০০% নির্ভুল সঠিক উত্তরটি শনাক্ত ও সমাধান করতে হবে।' : `প্রদত্ত উত্তর: "(${rawAns})"`}

Task: Act as an expert Admission Higher Mathematics Question Auditor & Validator (শতদ্রু AI).
1. Mathematical Validity: Is the problem mathematically sound, unambiguous, and solvable?
2. OCR Scan / Typo Verification: Are there any broken LaTeX expressions, OCR typos, corrupted matrix brackets, missing dollar signs, or garbled symbols in either the question text or any of the 4 options?
3. Answer Key Correctness & Resolution:
${isMissingAnswer 
  ? '   - CRITICAL: এই প্রশ্নের উত্তর ডাটাবেজে (N/A) বা খালি আছে! ৪টি অপশন (a, b, c, d) পুঙ্খানুপুঙ্খভাবে গাণিতিকভাবে সমাধান করে ১০০% নিশ্চিত সঠিক অপশনটি বেছে নাও। "actualAnswer" এবং "correctedAnswer" এ সেই অপশনের অক্ষরটি (a, b, c, or d) দাও। "markedAnswer" এ "(N/A)" দাও, "isAnswerCorrect": false, "hasCorrection": true এবং "resolvedFromNA": true দাও।' 
  : `   - Carefully calculate and solve the problem from scratch.
   - Is the given marked answer "(${rawAns})" 100% correct?
   - If incorrect, set "isAnswerCorrect": false, "hasCorrection": true, and put the verified correct option letter ('a', 'b', 'c', or 'd') in "actualAnswer" and "correctedAnswer".
   - If correct, set "isAnswerCorrect": true, and keep "actualAnswer": "${rawAns}".`}
4. Auto-Correction Payload:
   - Provide "correctedQuestion" with pristine, clean LaTeX math ($...$).
   - Provide "correctedOptions" containing exactly 4 options (a, b, c, d) with clean LaTeX math.
   - If no text corrections were needed, return the same text for question and options.
5. Review Summary & Admission Tip:
   - "reviewSummary": Rigorous step-by-step mathematical proof/derivation in Bengali with LaTeX formulas.
   - "admissionTip": Fast 30-second shortcut technique or pitfall alert for admission tests.

You MUST output ONLY a valid JSON object matching this schema:
{
  "isValid": true,
  "status": "valid",
  "reviewSummary": "ধাপে ধাপে গাণিতিক সমাধান ও বিশ্লেষণ...",
  "isAnswerCorrect": ${isMissingAnswer ? 'false' : 'true'},
  "resolvedFromNA": ${isMissingAnswer ? 'true' : 'false'},
  "markedAnswer": "${isMissingAnswer ? '(N/A)' : (rawAns || 'a')}",
  "actualAnswer": "${rawAns || 'a'}",
  "correctedAnswer": "${rawAns || 'a'}",
  "hasCorrection": ${isMissingAnswer ? 'true' : 'false'},
  "correctedQuestion": "${qContent.replace(/"/g, '\\"')}",
  "correctedOptions": [
    {"label": "a", "content": "Option A"},
    {"label": "b", "content": "Option B"},
    {"label": "c", "content": "Option C"},
    {"label": "d", "content": "Option D"}
  ],
  "admissionTip": "ভর্তি পরীক্ষা শর্টকাট কৌশল..."
}`;

    } else if (action === 'chapter_suggestions') {
      prompt = `Generate a high-yield, comprehensive Higher Mathematics Admission Suggestion & Formula Cheatsheet for Chapter: "${chapter || 'Higher Math'}" (${paper || '1st/2nd Paper'}).
Include:
1. # অধ্যায় সারসংক্ষেপ ও বিগত ২০ বছরের ভর্তি পরীক্ষার প্রবণতা (BUET, DU, RU, CU, GST)
2. ## অতি গুরুত্বপূর্ণ টপিক ও টাইপভিত্তিক বিশ্লেষণ (Top 5 Types)
3. ## অপরিহার্য সূত্র তালিকা (Essential KaTeX Formulas Cheatsheet)
4. ## শর্টকাট টেকনিক ও ট্রিকস (Fast Solving Tricks & Calculation Shortcuts)
5. ## সাধারণ ভুল ও সতর্কতা (Common Traps & Negative-Marking Pitfalls)
Format in rich, beautiful Markdown with KaTeX formulas.`;

    } else if (action === 'suggestion_chat') {
      prompt = `Student Inquiry regarding Chapter "${chapter || 'Higher Math'}":
Query: "${studentQuery || req.body.query || ''}"

Please answer with mathematical precision, providing step-by-step logic, relevant LaTeX formulas ($...$), and helpful exam strategies.`;

    } else if (action === 'chapter_research_chat' || action === 'concept_research_chat') {
      prompt = `Context for Shatadhru AI Math Research (শতদ্রু AI গণিত রিসার্চ চ্যাট):
Paper: ${paper || 'Higher Math'}
Chapter: ${chapter || 'Higher Math'}
Topic: ${topicSummary || ''}
Concept: ${conceptTitle || ''}
Key Concept Formulas & Rules: ${conceptFormula || contextData || ''}

Student's Specific Inquiry: "${studentQuery || req.body.query || ''}"

You are Shatadhru AI (শতদ্রু AI), the authoritative Bangladesh HSC Higher Mathematics & University/Engineering Admission Specialist and Researcher.
Follow these pedagogical guidelines:
1. Respond in simple, natural, rigorous Bengali.
2. Format ALL mathematical expressions, equations, formulas, vectors, coordinates, limits, integrals, and steps in standard KaTeX LaTeX ($inline$ or $$display$$).
3. If the student asks for a proof or derivation:
   - Clarify what needs to be proved.
   - Explain the core mathematical idea/intuition.
   - Provide the step-by-step rigorous proof with justification for each step.
   - Provide a simpler intuitive takeaway or geometric interpretation.
4. If the student asks about a concept or formula:
   - Explain WHY it works, not just WHAT it is.
   - Highlight validity conditions and common student misconceptions.
5. If the student asks about question patterns or problem solving:
   - Identify the question type.
   - Outline the solving strategy or 30-second shortcut.
   - Show the essential steps.
   - Highlight potential traps.`;

    } else if (action === 'common_ai_chat') {
      prompt = `Shatadhru AI Common Math Assistant (শতদ্রু AI সার্বজনীন গণিত চ্যাট):
Student's Inquiry: "${studentQuery || req.body.query || ''}"
Active View Context (if any): Paper: "${paper || 'Higher Math'}", Chapter: "${chapter || 'General'}"

Instructions:
1. You are Shatadhru AI (শতদ্রু AI) — Common AI Chat accessible globally for all mathematics questions across HSC 1st & 2nd Paper and admission tests.
2. Do NOT artificially constrain your answer to the currently open chapter if the student is asking about another topic or general mathematics.
3. If the question spans multiple chapters (e.g. Calculus + Trigonometry, Vectors + Coordinate Geometry, Complex Numbers + Geometry), identify the connecting principles clearly.
4. Explain step-by-step in natural, simple Bengali with pristine LaTeX formulas ($...$ and $$...$$).
5. Explain the underlying mathematical reasons, conditions, and practical examples.`;

    } else if (action === 'concept_suggestions') {
      prompt = `HSC Higher Mathematics
Chapter: "${chapter || 'Higher Math'}" (${paper || '1st/2nd Paper'})
Concept: "${conceptTitle || topicSummary || 'General'}"

Task: Generate 5 intelligent, context-aware learning and research suggestions for this chapter/concept.
Return ONLY a valid JSON array of 5 objects with keys:
- "title": Concise, intriguing Bengali title (e.g., "প্রমাণ: ...", "বিকল্প শর্টকাট: ...", "ভর্তি পরীক্ষার ফাঁদ: ...")
- "description": 1-2 sentence explanation of why this is important for deep understanding or admission tests.
- "promptQuery": The exact inquiry the student can ask Shatadhru AI.`;


    } else if (studentQuery) {
      prompt = `Mathematical Question Context:
${contextStr}

Student's Specific Inquiry: "${studentQuery}"
Persona: ${selectedPersona}

Provide a clear, helpful mathematical response answering the student's question directly with KaTeX formulas.`;

    } else {
      let personaInstruction = "ভর্তি পরীক্ষা স্পেশাল শর্টকাট ও অপশন এলিমিনেশন টেকনিক সহ";
      if (selectedPersona === 'derivation' || selectedPersona === 'deep') {
        personaInstruction = "ধাপে ধাপে বিস্তারিত প্রমাণ ও নিখুঁত গাণিতিক বিশ্লেষণ সহ";
      } else if (selectedPersona === '10_year_kid') {
        personaInstruction = "১০ বছরের শিশুর মতো অত্যন্ত সহজ উপমা ও জ্যামিতিক ধারণার মাধ্যমে";
      }

      prompt = `Mathematical Problem:
${contextStr}

Persona: ${selectedPersona} (${personaInstruction})

Provide:
1. **সঠিক উত্তর ও মূল ধারণা (Core Concept & Answer)**
2. **ধাপে ধাপে সমাধান (Step-by-Step Solution with KaTeX)**
3. **ভর্তি পরীক্ষা শর্টকাট / বিশেষ সতর্কতা (Admission Shortcut & Pitfall Alert)**`;
    }

    let lastError = null;
    let resultText = '';
    let usedModel = '';

    for (const key of apiKeys) {
      const ai = new GoogleGenAI({ apiKey: key });
      for (const model of MODELS) {
        try {
          const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
              systemInstruction: SYSTEM_INSTRUCTION,
              responseMimeType: (action === 'concept_suggestions' || action === 'review_question' || action === 'audit') ? 'application/json' : undefined,
              temperature: action === 'review_question' || action === 'audit' ? 0.2 : 0.3
            }
          });

          if (response && response.text) {
            resultText = response.text;
            usedModel = model;
            break;
          }
        } catch (err) {
          lastError = err;
          console.warn(`[Math-AI] Model ${model} failed:`, err.message);
        }
      }
      if (resultText) break;
    }

    if (!resultText) {
      throw lastError || new Error('All AI models and keys failed.');
    }

    // Handle review_question / audit structured response
    if (action === 'review_question' || action === 'audit') {
      try {
        let cleanJsonStr = resultText.trim();
        cleanJsonStr = cleanJsonStr.replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/i, '').trim();
        const jsonMatch = cleanJsonStr.match(/(\{[\s\S]*\})/);
        if (jsonMatch) cleanJsonStr = jsonMatch[1];
        const parsed = JSON.parse(cleanJsonStr);
        return sendJson(200, {
          success: true,
          action: 'review_question',
          model: usedModel,
          originalQuestionId: originalQuestion.id,
          data: parsed,
          text: parsed.reviewSummary,
          explanation: parsed.reviewSummary
        });
      } catch (e) {
        // Fallback if model returned plain markdown instead of pure JSON
        const cleanTxt = cleanGeminiText(resultText);
        return sendJson(200, {
          success: true,
          action: 'review_question',
          model: usedModel,
          originalQuestionId: originalQuestion.id,
          data: {
            isValid: true,
            status: 'valid',
            reviewSummary: cleanTxt,
            isAnswerCorrect: true,
            markedAnswer: originalQuestion.answer || 'a',
            actualAnswer: originalQuestion.answer || 'a',
            hasCorrection: false
          },
          text: cleanTxt,
          explanation: cleanTxt
        });
      }
    }

    if (action === 'concept_suggestions') {
      try {
        let cleanJsonStr = resultText.trim();
        cleanJsonStr = cleanJsonStr.replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/i, '').trim();
        const jsonMatch = cleanJsonStr.match(/(\[[\s\S]*\]|\{[\s\S]*\})/);
        if (jsonMatch) cleanJsonStr = jsonMatch[1];
        const parsed = JSON.parse(cleanJsonStr);
        return sendJson(200, {
          success: true,
          action: 'concept_suggestions',
          model: usedModel,
          suggestions: Array.isArray(parsed) ? parsed : (parsed.suggestions || [])
        });
      } catch (e) {
        return sendJson(200, {
          success: true,
          action: 'concept_suggestions',
          model: usedModel,
          suggestions: [
            {
              title: "মূল উপপাদ্য ও শর্তাবলির বিশ্লেষণ",
              description: "এই অধ্যায়ের মৌলিক সূত্রের গভীর গাণিতিক যুক্তি।",
              promptQuery: `${chapter || 'উচ্চতর গণিত'}-এর মূল উপপাদ্য ও শর্তাবলি সহজ বাংলায় প্রমাণসহ ব্যাখ্যা করো।`
            },
            {
              title: "ভর্তি পরীক্ষার স্পেশাল শর্টকাট কৌশল",
              description: "বুয়েট ও ঢাকা বিশ্ববিদ্যালয়ে দ্রুত অপশন বাদ দেওয়ার টেকনিক।",
              promptQuery: `${chapter || 'উচ্চতর গণিত'}-এর ভর্তি পরীক্ষার শীর্ষ ৩টি শর্টকাট কৌশল ও ফাঁদ বিশ্লেষণ করো।`
            }
          ]
        });
      }
    }

    const replyText = cleanGeminiText(resultText);
    return sendJson(200, {
      success: true,
      text: replyText,
      explanation: replyText,
      model: usedModel,
      persona: selectedPersona
    });

  } catch (error) {
    console.error('Math AI Error:', error);
    return sendJson(500, {
      error: 'Failed to process Math AI request.',
      details: error.message
    });
  }
};
