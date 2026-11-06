const { GoogleGenAI } = require('@google/genai');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

// Load environment variables if local
const envPath = path.join(__dirname, '..', '.env');
const ocrEnvPath = 'E:\\OCR\\.env';
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
} else if (fs.existsSync(ocrEnvPath)) {
  dotenv.config({ path: ocrEnvPath });
}

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
// Put gemini-3.1-flash-lite first for rapid high availability, with fallbacks
const MODELS = ['gemini-3.1-flash-lite', 'gemini-3.5-flash', 'gemini-3.8-flash'];

const SYSTEM_INSTRUCTION = `You are Shatadhru AI (শতদ্রু AI), the authoritative Medical & University Admission Biology Specialist, Researcher, and Question Bank Auditor based on Dr. Mohammad Abul Hasan (Botany) and Prof. Gazi Azmal (Zoology) standard textbooks.
Your task is to explain, research, and audit competitive admission questions accurately, colorfully, and pedagogically.

RULES:
1. Respond in natural, rigorous, high-yield Bengali tailored for medical and varsity admission aspirants.
2. Always structure answers with clear bold headings and distinct empty lines (double newlines) between sections.
3. Preserve and format biochemical reactions, chemical formulas ($CO_2$, $H_2O$, $C_6H_{12}O_6$), and equations using standard LaTeX ($$display$$ or $inline$).
4. Reference standard textbook authorities: ড. মোহাম্মদ আবুল হাসান ও প্রফেসর গাজী আজমল।
5. Highlight memory mnemonics, admission trends, and negative-marking trap warnings clearly.`;

function cleanGeminiText(text) {
  if (!text) return '';
  let cleaned = text;
  // Remove markdown horizontal rules like ***, ---, ===
  cleaned = cleaned.replace(/^[ \t]*[\*\-_=]{3,}[ \t]*$/gm, '');
  // Convert markdown header hashes like ### Heading -> **Heading:**
  cleaned = cleaned.replace(/^[ \t]*#{1,6}[ \t]+([^\n:]+):?/gm, '**$1:**');
  // Ensure consistent paragraph gap and spacing
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

  // CORS headers
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
    const { action, originalQuestion, studentQuery, persona, chapter, subject, topicSummary } = req.body || {};

    const qContent = originalQuestion ? (originalQuestion.content || (originalQuestion.question && originalQuestion.question.content) || (typeof originalQuestion.question === 'string' ? originalQuestion.question : '')) : '';

    if (action !== 'chapter_suggestions' && action !== 'suggestion_chat' && !qContent) {
      return sendJson(400, { error: 'Missing original question context.' });
    }

    if (!GEMINI_API_KEY) {
      return sendJson(500, {
        error: 'Gemini API key is not configured on the server. Please check environment variables.'
      });
    }

    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

    // Minimal token-efficient context
    let contextStr = '';
    if (originalQuestion) {
      contextStr = `Question: ${qContent}
Chapter: ${originalQuestion.chapter || ''}
Topic: ${originalQuestion.topic || ''}
`;
      if (originalQuestion.options && originalQuestion.options.length > 0) {
        contextStr += `Options:\n${originalQuestion.options.map(o => `(${o.label}) ${o.content}`).join('\n')}\n`;
      }
      if (originalQuestion.answer) {
        contextStr += `Correct Answer: ${originalQuestion.answer}\n`;
      }
    }

    let personaGuidance = '';
    const p = (persona || 'admission').toLowerCase();
    if (p === 'kid' || p === '10_year_kid' || p === '10_years_kid') {
      personaGuidance = `Target Audience: 10-year-old curious child (১০ বছরের শিশুর মতো সহজ ও আকর্ষণীয় ভাষায়).
Instructions:
1. First, identify 2 to 3 main biological words from the question and explain what each one means in very simple, kid-friendly terms using everyday real-world metaphors (e.g. comparing mitochondria to tiny kitchen power plants or cell membranes to castle gates).
2. Then explain the answer using fun, imaginative analogies without dry confusing jargon.`;
    } else if (p === 'deep' || p === 'advanced') {
      personaGuidance = `Target Audience: Advanced Biology Student / Deep Concept Explorer (গভীর তাত্ত্বিক ধারণা ও আণবিক বিশ্লেষণ).
Instructions:
1. Break down the core scientific terms, etymology, and molecular mechanisms.
2. Explain the biochemical, physiological, or genetic principles underlying the question with biochemical pathways and formulas ($...$).`;
    } else {
      // Default: Admission (মেডিকেল ও ভার্সিটি ভর্তি স্পেশাল)
      personaGuidance = `Target Audience: University & Medical Admission Candidate (মেডিকেল ও বিশ্ববিদ্যালয় ভর্তি স্পেশাল - DU A-Unit, Medical MAT, Agri, GST).
Instructions:
1. Extract the core biological keywords and high-yield terms with their exact definitions from ড. আবুল হাসান ও প্রফেসর গাজী আজমল।
2. Provide admission memory tricks, mnemonics, exception cases, past question trends (DU/MAT), and highlight common negative-marking trap options.`;
    }

    let prompt = '';

    if (action === 'explain') {
      prompt = `${contextStr}
${personaGuidance}
Requirements:
- Structure the response with clear bold headings and distinct paragraph gaps:
  **মূল শব্দসমূহ (Key Terms):**
  - **[শব্দ ১]:** [সহজ ব্যাখ্যা]
  - **[শব্দ ২]:** [সহজ ব্যাখ্যা]

  **ধারণাগত ব্যাখ্যা (Conceptual Explanation):**
  [১-২ টি সহজবোধ্য অনুচ্ছেদ]

  **ভর্তি পরীক্ষার জন্য গুরুত্বপূর্ণ টিপস (Admission Tip):**
  [মনে রাখার কৌশল ও বিগত বছরের ভর্তি প্রবণতা]

- Always insert an empty line between headings and paragraphs.
- Preserve formulas using standard LaTeX like $CO_2$, $H_2O$, $70S$, $80S$.
- DO NOT use markdown headers (###) or decorative stars (***).`;
    } else if (action === 'review_question') {
      const rawAns = (originalQuestion.answer || '').trim();
      const isMissingAnswer = !rawAns || rawAns.toLowerCase() === '(n/a)' || rawAns.toLowerCase() === 'n/a';

      prompt = `${contextStr}
Context: This is a genuine University & Medical Admission Biology Question (মেডিকেল ও বিশ্ববিদ্যালয় ভর্তি পরীক্ষা প্রশ্নব্যাংক).
Authoritative Textbooks: ড. মোহাম্মদ আবুল হাসান (উদ্ভিদবিজ্ঞান) এবং প্রফেসর গাজী আজমল (প্রাণীবিজ্ঞান).

Status of Answer in Question Bank: ${isMissingAnswer ? 'উত্তর অনুপস্থিত / (N/A) — পাঠ্যবই অনুযায়ী ১০০% নির্ভুল সঠিক উত্তরটি শনাক্ত ও সমাধান করতে হবে।' : `প্রদত্ত উত্তর: "${rawAns}"`}

Task: Act as an expert Admission Biology Question Paper Auditor (শতদ্রু AI).
1. Scientific Validity: Is the question biologically and scientifically accurate according to admission syllabus?
2. OCR Scan / Typo Verification: Are there broken words, distorted Bengali fonts, typos, or missing sub/superscripts?
3. Answer Key Resolution & Correctness:
${isMissingAnswer 
  ? '   - CRITICAL: এই প্রশ্নের উত্তর ডাটাবেজে (N/A) বা খালি আছে! ড. আবুল হাসান (Botany) অথবা প্রফেসর গাজী আজমল (Zoology) বইয়ের আলোকে ৪টি অপশন (a, b, c, d) পুঙ্খানুপুঙ্খভাবে যাচাই করে ১০০% নিশ্চিত সঠিক অপশনটি বেছে নাও। "actualAnswer" এবং "correctedAnswer" এ সেই অপশনের অক্ষরটি (a, b, c, or d) দাও। "markedAnswer" এ "(N/A)" দাও, "isAnswerCorrect": false, "hasCorrection": true এবং "resolvedFromNA": true দাও।' 
  : `   - Is the given answer "${rawAns}" genuinely correct according to the authoritative textbooks? If wrong, set "isAnswerCorrect": false, "hasCorrection": true, and provide the correct option letter in "actualAnswer" and "correctedAnswer". If correct, set "isAnswerCorrect": true.`}
4. Auto-Correction: Provide the corrected and perfected version of the question, options, and verified answer.

You MUST output ONLY a valid JSON object matching this schema:
{
  "isValid": true,
  "status": "valid",
  "reviewSummary": "বিস্তারিত বৈজ্ঞানিক ব্যাখ্যা ও রেফারেন্স (Textbook proof referencing Abul Hasan or Gazi Azmal)",
  "isAnswerCorrect": ${isMissingAnswer ? 'false' : 'true'},
  "markedAnswer": "${isMissingAnswer ? '(N/A)' : rawAns}",
  "actualAnswer": "a",
  "hasCorrection": ${isMissingAnswer ? 'true' : 'false'},
  "resolvedFromNA": ${isMissingAnswer ? 'true' : 'false'},
  "correctedQuestion": "সংশোধিত নির্ভুল প্রশ্ন (বাংলায়)",
  "correctedOptions": [
    {"label": "a", "content": "Option text"},
    {"label": "b", "content": "Option text"},
    {"label": "c", "content": "Option text"},
    {"label": "d", "content": "Option text"}
  ],
  "correctedAnswer": "a",
  "admissionTip": "মেডিকেল ও ভার্সিটি ভর্তি পরীক্ষার জন্য বিশেষ সতর্কবার্তা ও মনে রাখার কৌশল"
}`;
    } else if (action === 'chapter_suggestions') {
      const uniTarget = req.body.universityFilter || 'All Universities';
      prompt = `Chapter: ${chapter || 'জীববিজ্ঞান অধ্যায়'}
Target Admission Arena: ${uniTarget === 'all' ? 'All Medical & University Admission Tests (DU, Medical/MAT, Agri, GST, RU, JU)' : uniTarget + ' Admission Focus'}
Topic Question Statistics & Frequency Data:
${JSON.stringify(topicSummary || {}, null, 2)}

Task: Write a top-tier, authoritative Medical & University Admission Suggestion and Trend Analysis Document in Bengali Markdown (.md).
Authoritative Textbook Reference: ড. মোহাম্মদ আবুল হাসান (উদ্ভিদবিজ্ঞান) এবং প্রফেসর গাজী আজমল (প্রাণীবিজ্ঞান).

Document Structure:
# 🎯 ভর্তি পরীক্ষা স্পেশাল অধ্যায়ভিত্তিক সাজেশন: ${chapter}
> **টার্গেট:** ${uniTarget === 'all' ? 'মেডিকেল ও ডেন্টাল (MAT/DAT), ঢাকা বিশ্ববিদ্যালয় (DU A-Unit), কৃষি গুচ্ছ (Agri), গুচ্ছ (GST) ও বিশ্ববিদ্যালয় ভর্তি' : uniTarget + ' ভর্তি পরীক্ষা'}

## ১. বিগত ২০ বছরের প্রশ্ন বিশ্লেষণ ও টপিক ওয়েটেজ (Topic Weightage & Frequency Table)
- Provide a clean Markdown table with columns: [টপিক | বিগত প্রশ্ন সংখ্যা | গুরুত্ব (Star) | প্রধান বিশ্ববিদ্যালয়ের নাম]
- Identify 3-Star (⭐⭐⭐), 2-Star (⭐⭐), and 1-Star (⭐) topics based on the frequency data.

## ২. থ্রি-স্টার (⭐⭐⭐) মোস্ট ইম্পর্ট্যান্ট টপিক ও নিশ্চিত কমন কনসেপ্ট
- Deep dive into the top 3 highest-yield topics with exact textbook definitions, scientific names, and chemical equations ($...$).

## ৩. বিশ্ববিদ্যালয়ভিত্তিক বিগত বছরের প্রশ্ন প্রবণতা (DU, Medical, GST, Agri Trends)
- What DU specifically loves to ask from this chapter.
- What Medical/MAT repeatedly tests (exceptions, numerical values, days/sizes).
- Agri & GST admission patterns.

## ৪. ভর্তি পরীক্ষার ফাঁদ ও কনফিউজিং কনসেপ্ট (Common Admission Traps & Exceptions)
- Highlight confusing terms where candidates lose negative marks (০.২৫ মার্কস কাটার ঝুঁকি).
- Clear comparison between easily confused terms.

## ৫. অবশ্যই মুখস্থযোগ্য ছক, চার্ট ও বৈজ্ঞানিক পরিভাষা (Must-Memorize Tables)
- Tabular quick-revision summary of critical classifications, enzyme actions, cell organelles, or hormones.

## ৬. হট সম্ভাব্য ভর্তি প্রশ্নাবলী ও উত্তর সংকেত (High-Yield Practice Questions)
- 5 to 8 top predicted admission questions with concise answers.

## ৭. পরীক্ষার আগের দিন ১ ঘণ্টার কুইক রিভিশন চেকলিস্ট (Last Minute 1-Hour Recall Checklist)
- Bulleted checklist of key memory points.

Format strictly as rich, production-grade GitHub Flavored Markdown (.md) with tables, bold headings, bullet points, and KaTeX LaTeX formulas ($...$).`;
    } else if (action === 'mcq') {
      prompt = `${contextStr}
Task: Generate 3 high-yield Multiple Choice Questions (MCQ) directly testing this biological concept in JSON format.
Output ONLY a valid JSON object matching this schema:
{
  "questions": [
    {
      "id": "ai-mcq-1",
      "type": "mcq",
      "question": "Question text in Bengali with LaTeX if needed",
      "options": [
        {"label": "a", "content": "Option text"},
        {"label": "b", "content": "Option text"},
        {"label": "c", "content": "Option text"},
        {"label": "d", "content": "Option text"}
      ],
      "answer": "a",
      "explanation": "Concise Bengali explanation without markdown headers"
    }
  ]
}`;
    } else if (action === 'short') {
      prompt = `${contextStr}
Task: Generate 3 short-answer/knowledge questions (জ্ঞান ও অনুধাবনমূলক প্রশ্ন) in JSON format.
Output ONLY a valid JSON object:
{
  "questions": [
    {
      "id": "ai-short-1",
      "type": "short",
      "question": "Question text",
      "answer": "Expected exact answer / key points",
      "explanation": "Concept background"
    }
  ]
}`;
    } else if (action === 'related') {
      prompt = `${contextStr}
Task: Provide 5 related high-yield Biology concept points and question variations in clean Bengali paragraphs without markdown headers.`;
    } else if (action === 'ask') {
      prompt = `${contextStr}
Student Inquiry: "${studentQuery || 'Please clarify this concept'}"
Task: Provide an accurate, pedagogical answer in natural Bengali paragraphs. Do not use decorative markdown headers or ***.`;
    } else if (action === 'evaluate_written') {
      const qText = originalQuestion.question ? (originalQuestion.question.content || originalQuestion.question) : (originalQuestion.content || '');
      const modelAns = (originalQuestion.answer && originalQuestion.answer.content) ? originalQuestion.answer.content : (originalQuestion.answer || '');
      const studentAns = req.body.studentAnswer || '';
      const maxMarks = req.body.maxMarks || 5;

      prompt = `Context: University & Medical Admission Biology Written Examination (মেডিকেল ও বিশ্ববিদ্যালয় ভর্তি লিখিত পরীক্ষা - DU A-Unit, MAT, Agri, GST).
Authoritative Textbooks: ড. মোহাম্মদ আবুল হাসান (উদ্ভিদবিজ্ঞান) এবং প্রফেসর গাজী আজমল (প্রাণীবিজ্ঞান).
Subject: ${subject || originalQuestion.subject || 'Biology'}
Chapter: ${chapter || originalQuestion.chapter || ''}

Question:
${qText}

Textbook Model Answer:
${modelAns}

Student's Submitted Written Answer:
${studentAns || '(No answer written / blank submission)'}

Max Marks: ${maxMarks}

Task: Act as an expert senior Admission Evaluator (প্রধান পরীক্ষক) for Dhaka University (DU A-Unit) and Medical Admission Written Test.
Strictly and pedagogically evaluate the student's answer against the standard textbook model answer.

You MUST output ONLY a valid JSON object matching this schema:
{
  "marksObtained": 4.0,
  "maxMarks": ${maxMarks},
  "scorePercentage": 80,
  "verdict": "চমৎকার (Excellent) / সন্তোষজনক (Good) / আরও উন্নতি প্রয়োজন (Needs Improvement)",
  "evaluationSummary": "সংক্ষিপ্ত মূল্যায়ন ও সার্বিক পর্যালোচনা (2-3 concise Bengali sentences on student answer quality)",
  "correctPoints": [
    "শিক্ষার্থীর সঠিকভাবে উপস্থাপিত পয়েন্ট বা সংজ্ঞা"
  ],
  "missingPoints": [
    "যেসব গুরুত্বপূর্ণ বৈজ্ঞানিক পরিভাষা, বৈশিষ্ট্য বা তথ্য বাদ পড়েছে (ড. আবুল হাসান / গাজী আজমল বই অনুসারে)"
  ],
  "scientificTerminologyFeedback": "বৈজ্ঞানিক নাম, বানান ও ল্যাটিন পরিভাষার যথার্থতা মূল্যায়ন",
  "admissionDeductions": "ভর্তি পরীক্ষায় নম্বর কাটা যাওয়ার কারণ (যদি থাকে, অন্যথায় 'কোনো নম্বর কর্তন হয়নি')",
  "improvementTips": "পূর্ণ নম্বর পাওয়ার জন্য যেভাবে আরও তথ্যবহুল, পয়েন্ট আকারে বা ছক/চিত্র আকারে উপস্থাপন করা উচিত ছিল",
  "highYieldKeyConcept": "এই প্রশ্নের মূল শিক্ষণীয় পয়েন্ট ও ভর্তি পরীক্ষার জন্য মনে রাখার টিপস"
}`;
    } else if (action === 'suggestion_chat') {
      const studentQuery = req.body.query || req.body.studentQuery || '';
      const chapterContext = req.body.chapter || 'All Chapters';
      const fileContext = req.body.fileContext || '';

      prompt = `Context: Shatadhru AI Admission Biology Research & Suggestions Hub.
Authoritative Textbooks: ড. মোহাম্মদ আবুল হাসান (উদ্ভিদবিজ্ঞান) এবং প্রফেসর গাজী আজমল (প্রাণীবিজ্ঞান).
Target: University & Medical Admission (DU, Medical/MAT, Agri, GST, RU, JU).
Chapter: ${chapterContext}

${fileContext ? `Research Suggestions File Content:\n${fileContext}\n` : ''}

Student Inquiry / Discussion:
"${studentQuery}"

Task: Act as Shatadhru AI (শতদ্রু AI), the senior Admission Biology Research Mentor.
Answer the student's question with authority, precision, and encouragement.

Requirements:
1. Always structure the response with clear bold headings (e.g. **মূল ধারণা (Core Concept):**, **বিক্রিয়া ও সমীকরণ (Biochemical Reaction):**, **বিগত বছরের প্রশ্ন বিশ্লেষণ (Past Trends):**, **মনে রাখার ট্রিকস (Memory Hack):**).
2. Insert empty lines between sections for comfortable reading.
3. If chemical/biochemical reactions are involved (গ্লাইকোলাইসিস, ক্রেবস চক্র, সালোকসংশ্লেষণ, পরিপাক), write the full chemical equations with display LaTeX $$...$$ highlighting reactants, products, enzymes, and ATP.
4. Highlight high-yield points, common trap questions, and mark deduction warnings.`;
    } else {
      return sendJson(400, { error: 'Unknown action specified.' });
    }

    let resultText = '';
    let usedModel = '';
    let lastError = null;

    for (const modelName of MODELS) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: prompt,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: action === 'mcq' || action === 'short' ? 0.2 : 0.3
          }
        });
        if (response && response.text) {
          resultText = response.text;
          usedModel = modelName;
          break;
        }
      } catch (err) {
        lastError = err;
        console.warn(`Model ${modelName} error:`, err.message);
      }
    }

    if (!resultText) {
      throw lastError || new Error('Failed to generate response from all available Gemini models.');
    }

    if (action === 'review_question' || action === 'mcq' || action === 'short' || action === 'evaluate_written') {
      try {
        let cleanJsonStr = resultText.trim();
        if (cleanJsonStr.startsWith('```json')) {
          cleanJsonStr = cleanJsonStr.replace(/^```json/, '').replace(/```$/, '').trim();
        } else if (cleanJsonStr.startsWith('```')) {
          cleanJsonStr = cleanJsonStr.replace(/^```/, '').replace(/```$/, '').trim();
        }
        const parsed = JSON.parse(cleanJsonStr);
        return sendJson(200, {
          success: true,
          action,
          model: usedModel,
          originalQuestionId: originalQuestion.id,
          data: parsed
        });
      } catch (e) {
        return sendJson(200, {
          success: true,
          action,
          model: usedModel,
          originalQuestionId: originalQuestion.id,
          text: cleanGeminiText(resultText)
        });
      }
    }

    if (action === 'chapter_suggestions') {
      return sendJson(200, {
        success: true,
        action,
        model: usedModel,
        chapter,
        markdown: resultText.trim(),
        text: resultText.trim()
      });
    }

    return sendJson(200, {
      success: true,
      action,
      model: usedModel,
      originalQuestionId: originalQuestion ? originalQuestion.id : null,
      text: cleanGeminiText(resultText)
    });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return sendJson(500, {
      error: error.message || 'Internal Server Error while communicating with Gemini API.'
    });
  }
};
