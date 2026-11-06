const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://nxqqcycylvvotifmwdjf.supabase.co';
const SUPABASE_SECRET_KEY = process.env.SUPABASE_SECRET_KEY || '';

const supabase = createClient(SUPABASE_URL, SUPABASE_SECRET_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false
  }
});

async function runImport() {
  console.log('--- BIOLOGY QUESTION BANK SUPABASE IMPORTER ---');
  console.log(`Connecting to: ${SUPABASE_URL}`);

  const dataFilePath = path.join(__dirname, 'data', 'biology-questions.json');
  if (!fs.existsSync(dataFilePath)) {
    console.error(`Error: Data file not found at ${dataFilePath}`);
    process.exit(1);
  }

  const raw = fs.readFileSync(dataFilePath, 'utf-8');
  const dataset = JSON.parse(raw);
  const questions = dataset.questions;
  console.log(`Loaded ${questions.length} questions from JSON.`);

  // Test connection and table existence
  const { error: testErr } = await supabase
    .from('original_questions')
    .select('id')
    .limit(1);

  if (testErr) {
    if (testErr.code === 'PGRST205' || testErr.message?.includes('schema cache')) {
      console.error('\n[IMPORTANT] The tables have not been created yet in Supabase!');
      console.error('Please open Supabase SQL Editor and run the "schema.sql" file:');
      console.error(`URL: https://supabase.com/dashboard/project/nxqqcycylvvotifmwdjf/sql/new\n`);
      process.exit(1);
    }
    console.error('Database connection test failed:', testErr);
    process.exit(1);
  }

  console.log('Database table `original_questions` found! Starting batch insert...\n');

  const BATCH_SIZE = 100;
  let insertedCount = 0;

  for (let i = 0; i < questions.length; i += BATCH_SIZE) {
    const chunk = questions.slice(i, i + BATCH_SIZE);
    const rows = chunk.map(q => ({
      id: q.id,
      source_index: q.sourceIndex,
      original_number: q.originalNumber || '',
      subject: q.subject || 'Biology',
      chapter: q.chapter || '',
      topic: q.topic || '',
      question_type: q.type || 'mcq',
      question_content: q.question.content || '',
      options: q.options || [],
      answer_content: q.answer.content || '',
      description_content: q.description.content || '',
      explanation_content: q.explanation.content || '',
      source_file: q.sourceMetadata?.sourceFile || ''
    }));

    const { error } = await supabase
      .from('original_questions')
      .upsert(rows, { onConflict: 'id' });

    if (error) {
      console.error(`\nError inserting batch ${i} to ${i + chunk.length}:`, error.message);
      process.exit(1);
    }

    insertedCount += chunk.length;
    process.stdout.write(`\rImported ${insertedCount}/${questions.length} questions (${Math.round((insertedCount / questions.length) * 100)}%)...`);
  }

  console.log('\n\n--- IMPORT COMPLETED SUCCESSFULLY ---');
  
  // Verify row count in DB
  const { count, error: countErr } = await supabase
    .from('original_questions')
    .select('*', { count: 'exact', head: true });

  if (countErr) {
    console.error('Could not verify count:', countErr.message);
  } else {
    console.log(`Verified total count in Supabase: ${count} questions.`);
    if (count === questions.length) {
      console.log('Data integrity check PASSED: 100% question count match!');
    }
  }
}

runImport().catch(err => {
  console.error('Unhandled error during import:', err);
  process.exit(1);
});
