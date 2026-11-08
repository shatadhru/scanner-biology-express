const fs = require('fs');
const path = require('path');

const chP1a = require('./data/chapters-p1.js');
const chP1b = require('./data/chapters-p1b.js');
const chP2a = require('./data/chapters-p2a.js');
const chP2b = require('./data/chapters-p2b.js');

const allChapters = [...chP1a, ...chP1b, ...chP2a, ...chP2b];

console.log(`Loaded ${allChapters.length} chapters.`);

const questionsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'math-questions.json'), 'utf8'));
const questionsByChapter = {};
questionsData.questions.forEach(q => {
  if (!questionsByChapter[q.chapter]) questionsByChapter[q.chapter] = [];
  questionsByChapter[q.chapter].push(q);
});

function fixMathDollars(str) {
  if (!str || typeof str !== 'string') return '';
  const lines = str.split('\n');
  const fixedLines = lines.map(line => {
    const count = (line.match(/(?<!\\)\$/g) || []).length;
    if (count % 2 !== 0) {
      return line.trimEnd() + '$';
    }
    return line;
  });
  let res = fixedLines.join('\n');
  const totalCount = (res.match(/(?<!\\)\$/g) || []).length;
  if (totalCount % 2 !== 0) {
    res = res.trimEnd() + '$';
  }
  return res;
}

// Clean and bind questions for each chapter
allChapters.forEach(chap => {
  const qList = questionsByChapter[chap.rawName] || questionsByChapter[chap.nameBn] || [];
  chap.questionCount = qList.length;

  chap.questionTypes.forEach((qt, idx) => {
    const sIdx = qt.startIndex !== undefined ? qt.startIndex : idx * 5;
    const cnt = qt.count || 3;
    const repQuestions = qList.slice(sIdx, sIdx + cnt).map(q => ({
      id: q.id,
      question: fixMathDollars(q.question.content),
      options: (q.options || []).map(opt => ({
        ...opt,
        content: fixMathDollars(opt.content)
      })),
      answer: q.answer,
      explanation: fixMathDollars(q.explanation || (q.solution && q.solution.content) || ''),
      university: q.university || 'Admission',
      year: q.year || '',
      topic: q.topic || ''
    }));

    qt.representativeQuestions = repQuestions;
    
    // Pick 1 mixed question
    const mixedQ = qList[sIdx + cnt] ? [{
      id: qList[sIdx + cnt].id,
      question: fixMathDollars(qList[sIdx + cnt].question.content),
      options: (qList[sIdx + cnt].options || []).map(opt => ({
        ...opt,
        content: fixMathDollars(opt.content)
      })),
      answer: qList[sIdx + cnt].answer,
      explanation: fixMathDollars(qList[sIdx + cnt].explanation || (qList[sIdx + cnt].solution && qList[sIdx + cnt].solution.content) || ''),
      university: qList[sIdx + cnt].university || 'Admission',
      year: qList[sIdx + cnt].year || '',
      topic: qList[sIdx + cnt].topic || '',
      isMixed: true
    }] : [];
    qt.mixedQuestions = mixedQ;
  });
});

const outputContent = `// Auto-generated Math Concept Review Database
// Contains comprehensive concept notes, formulas, question patterns & representative questions for all 20 HSC Higher Math chapters.

const MATH_CONCEPT_DATA = {
  version: "2.0.0",
  lastUpdated: "${new Date().toISOString()}",
  totalChapters: ${allChapters.length},
  chapters: ${JSON.stringify(allChapters, null, 2)}
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MATH_CONCEPT_DATA;
}
if (typeof window !== 'undefined') {
  window.MATH_CONCEPT_DATA = MATH_CONCEPT_DATA;
}
`;

fs.writeFileSync(path.join(__dirname, 'concept-data.js'), outputContent, 'utf8');
console.log('Successfully written concept-data.js!');
console.log('Total chapters processed:', allChapters.length);
