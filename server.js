const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
const envPath = path.join(__dirname, '.env');
const ocrEnvPath = 'E:\\OCR\\.env';
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
} else if (fs.existsSync(ocrEnvPath)) {
  dotenv.config({ path: ocrEnvPath });
}

const biologyAiHandler = require('./api/biology-ai');
const mathAiHandler = require('./api/math-ai');
const syncHandler = require('./api/sync');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// 1. Navigation & Page Routes
// Home screen (Portal for Math and Biology)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

// Math Practice System
app.get('/math', (req, res) => {
  res.sendFile(path.join(__dirname, 'math.html'));
});

// Dedicated Concept Review System (Higher Mathematics)
app.get('/concept-review', (req, res) => {
  res.sendFile(path.join(__dirname, 'concept-review.html'));
});

// Biology Practice System
app.get('/biology', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Legacy written route for biology
app.get('/written', (req, res) => {
  res.sendFile(path.join(__dirname, 'written.html'));
});

// 2. API Routes
app.get('/api/config', (req, res) => {
  res.json({
    supabaseUrl: process.env.SUPABASE_URL || 'https://nxqqcycylvvotifmwdjf.supabase.co'
  });
});

app.get('/api/suggestions', (req, res) => {
  const suggestionsDir = path.join(__dirname, 'suggestions');
  if (!fs.existsSync(suggestionsDir)) {
    return res.json({ files: [] });
  }
  const files = fs.readdirSync(suggestionsDir).filter(f => f.endsWith('.md')).map(file => {
    const filePath = path.join(suggestionsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const firstLine = content.split('\n')[0].replace(/^#+\s*/, '') || file;
    return {
      fileName: file,
      title: firstLine,
      size: fs.statSync(filePath).size
    };
  });
  res.json({ files });
});

app.get('/api/suggestions/:fileName', (req, res) => {
  const safeName = path.basename(req.params.fileName);
  const filePath = path.join(__dirname, 'suggestions', safeName);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'Suggestion file not found' });
  }
  const content = fs.readFileSync(filePath, 'utf8');
  res.json({ fileName: safeName, content });
});

app.all('/api/biology-ai', async (req, res) => {
  try {
    delete require.cache[require.resolve('./api/biology-ai')];
    const dynamicBioAi = require('./api/biology-ai');
    await dynamicBioAi(req, res);
  } catch (err) {
    console.error('API Error in /api/biology-ai:', err);
    if (!res.headersSent) {
      res.status(500).json({ error: err.message || 'Internal AI Server Error' });
    }
  }
});

app.all('/api/math-ai', async (req, res) => {
  try {
    delete require.cache[require.resolve('./api/math-ai')];
    const dynamicMathAi = require('./api/math-ai');
    await dynamicMathAi(req, res);
  } catch (err) {
    console.error('API Error in /api/math-ai:', err);
    if (!res.headersSent) {
      res.status(500).json({ error: err.message || 'Internal Math AI Server Error' });
    }
  }
});

app.all('/api/sync', async (req, res) => {
  try {
    await syncHandler(req, res);
  } catch (err) {
    console.error('API Error in /api/sync:', err);
    if (!res.headersSent) {
      res.status(500).json({ error: err.message || 'Internal Sync Server Error' });
    }
  }
});

// 3. Static Assets Serving
app.use(express.static(path.join(__dirname), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.json')) {
      res.setHeader('Cache-Control', 'public, max-age=3600');
    }
  }
}));

// Fallback 404 handler
app.use((req, res) => {
  res.status(404).send('404 Not Found - University & Medical Biology Practice');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Express Unhandled Error:', err);
  res.status(500).json({ error: 'Server internal error', message: err.message });
});

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`Shatadhru AI Admission Practice Engine running at:`);
  console.log(`-> Portal Home:     http://localhost:${PORT}/`);
  console.log(`-> Math Practice:   http://localhost:${PORT}/math`);
  console.log(`-> Biology Practice:http://localhost:${PORT}/biology`);
  console.log(`-> Written Practice:http://localhost:${PORT}/written`);
  console.log(`Press Ctrl+C to stop.`);
  console.log(`====================================================`);
});
