# Mobile-First Biology Question Practice System
### উচ্চমাধ্যমিক ও বিশ্ববিদ্যালয় ভর্তি জীববিজ্ঞান প্রশ্নব্যাংক অনুশীলন, কাস্টমাইজেশন ও কৃত্রিম বুদ্ধিমত্তা সহকারী

A pixel-perfect, mobile-first, highly customizable, fast, and lightweight academic Biology Question Practice Application built with **HTML, CSS, and Vanilla JavaScript**, backed by **Supabase PostgreSQL**, **Google Gemini AI (Flash)**, and deployable to **Vercel**.

---

## 1. Mobile-First Architecture & Design

- **Optimized for Mobile Screens**:
  - Full support for 320px, 360px, 375px, 390px, 412px, 430px, 480px, tablets, and desktop displays.
  - Responsive viewport calculation using `100dvh` and safe-area insets (`env(safe-area-inset-bottom)`).
  - Touch targets minimum 44px × 44px for smooth mobile ergonomics.
  - Zero horizontal overflow, fluid typography, and sticky bottom navigation.
- **Two Question Viewing Modes**:
  - **Question Mode (একক প্রশ্ন মোড)**: Focus on 1 question at a time. Ideal for fast active recall, spaced repetition, and targeted drill.
  - **Page Mode (পৃষ্ঠা মোড)**: View multiple questions per page (5, 10, 15, or 20 questions) with pagination (`Page 2 of 15`). Ideal for textbook simulation and exam condition rehearsal.
  - **Seamless Switching**: Switching between Question Mode and Page Mode retains exact question position, selected answers, and cached explanations with zero reloads or API calls.
- **Animated Bottom Customization Drawer**:
  - Slide-up bottom sheet on mobile (`max-height: 88dvh`, rounded top corners, drag handle, body scroll lock, backdrop dismissal, escape key support).
  - Responsive modal panel on desktop view (`min-width: 768px`).
  - Floating Action Button (FAB) on mobile for instant settings access.

---

## 2. Personalization & Customization Settings

All settings apply immediately to the DOM and persist across sessions via `localStorage`:

| Setting Category | Options Available | Immediate Effect |
| :--- | :--- | :--- |
| **Viewing Mode** | `Question Mode` vs `Page Mode` | Switches between 1-question view and multi-question page view. |
| **Questions Per Page** | `5`, `10`, `15`, `20` questions | Controls page size when in Page Mode. |
| **Theme** | `Light`, `Dark`, `System Default` | Sets data-theme with contrast, dark background, and readable text. |
| **Question Text Size** | `14px`, `16px`, `18px`, `20px` | Updates `--user-font-size` on question and option text. |
| **Line Height** | `1.4 (Compact)`, `1.6 (Normal)`, `1.8 (Spacious)` | Updates `--user-line-height` for comfortable Bengali reading. |
| **Reading Spacing** | `Compact`, `Comfortable`, `Spacious` | Sets card padding and margin scales. |
| **Practice Sequence** | `Original Sequence` vs `Mistakes First` | Prioritizes questions with mistakes at the top of the queue. |
| **Option Positions** | `Vary Option Positions (অদল-বদল)` | Shuffles options dynamically per question to prevent position memorization. |
| **Chapter Filter** | All 23 Chapters (Botany & Zoology) | Filters active question pool while retaining source index ordering. |
| **Timer Duration** | `30m`, `45m`, `60m`, `90m`, `120m` | Adjusts countdown timer and average pace calculation. |

---

## 3. Gemini AI Clean Raw-Text Explanations

- **Clean Natural Bengali**:
  - No `***`, no `###`, no artificial bold headers (`**সঠিক উত্তর:**`, `**কারণ:**`), no decorative emojis.
  - Explanations are delivered as natural, readable paragraphs with standard paragraph breaks.
  - Mathematical and chemical formulas preserved in standard LaTeX ($CO_2$, $H_2O$, $1\text{ nm}$).
- **Inline Mobile-First Display**:
  - Renders directly below the question in both Question Mode and Page Mode.
  - Lightweight animated loading indicator (`ব্যাখ্যা তৈরি হচ্ছে...`).
- **Token Efficiency & Instant Caching**:
  - Explanations are cached locally in `localStorage` and synced with Supabase.
  - If a question already has a cached explanation, it opens instantly with **0 tokens** consumed.
  - Minimal context payload sent to the Gemini API (Question + Options + Answer only).

---

## 4. Running Locally

Start the local server:
```powershell
node server.js
```
Open your browser at:
```
http://localhost:3000
```

---

## 5. Keyboard Navigation Shortcuts

- **Right Arrow (`→`)**: Next Question (or Next Page in Page Mode)
- **Left Arrow (`←`)**: Previous Question (or Previous Page in Page Mode)
- **Escape (`Esc`)**: Close Customization Drawer or Question Grid
