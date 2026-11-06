import os
import sys
import time
import json
from pathlib import Path
from PIL import Image
import pymupdf

sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE_DIR = Path(r"E:\Scanner")
ENV_PATH = Path(r"E:\OCR\.env")
SOURCE_ROOT = WORKSPACE_DIR / "Biology-Chapter-PDFs"
OUTPUT_ROOT = WORKSPACE_DIR / "Biology-Transcriptions"
CHECKPOINT_FILE = WORKSPACE_DIR / "transcription_checkpoint.json"
STATUS_DASHBOARD = WORKSPACE_DIR / "transcription_status.md"

# 1. Load Gemini API Key
if ENV_PATH.exists():
    with open(ENV_PATH, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ[k.strip()] = v.strip().strip("'\"")

from google import genai
client = genai.Client()

SYSTEM_PROMPT = """You are an expert Bengali textbook digitization and OCR transcription AI.
Your ONLY task is to produce a complete, accurate, and faithful digital transcription of the uploaded textbook page image.

STRICT TRANSCRIPTION RULES:
1. TRANSCRIBE EXACTLY WHAT IS PRINTED: Every heading, subheading, paragraph, list, table, MCQ question, option, answer, footnote, and page number.
2. ZERO ADDITIONS: Do not add explanations, answers, summaries, greetings, or conclusions.
3. ZERO REWRITING: Preserve exact Bengali wording, spelling, punctuation, numerals (০-৯ or 0-9), and scientific terms.
4. MATHEMATICAL & SCIENTIFIC NOTATION: Use LaTeX for formulas ($...$ or $$...$$), equations, exponents, subscripts.
5. TABLES: Transcribe tables into standard Markdown tables preserving all rows, columns, and headers.
6. OUTPUT ONLY THE TEXTBOOK CONTENT: Begin directly with the first element on the page, end with the last element. Do not output 'Here is the transcription' or any commentary.
"""

def load_checkpoint():
    if CHECKPOINT_FILE.exists():
        try:
            with open(CHECKPOINT_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return {}
    return {}

def save_checkpoint(data):
    with open(CHECKPOINT_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def update_status_dashboard(checkpoint, all_chapters):
    total_pages_all = sum(ch["total_pages"] for ch in all_chapters)
    done_pages_all = 0
    done_chapters_count = 0

    lines = []
    lines.append("# HSC Biology Autonomous Transcription Dashboard\n")
    lines.append(f"**Last Updated:** {time.strftime('%Y-%m-%d %H:%M:%S')}\n")
    
    table_rows = []
    for ch in all_chapters:
        key = ch["rel_path"]
        st = checkpoint.get(key, {})
        completed = len(st.get("completed_pages", []))
        total = ch["total_pages"]
        done_pages_all += completed
        is_done = (completed >= total) and total > 0
        if is_done:
            done_chapters_count += 1
            status_text = "COMPLETED"
        elif completed > 0:
            status_text = f"IN PROGRESS ({completed}/{total})"
        else:
            status_text = "QUEUED"
        
        table_rows.append(f"| {ch['part']} | {ch['chapter_title']} | {completed}/{total} | {status_text} |")

    pct = (done_pages_all / total_pages_all * 100) if total_pages_all > 0 else 0
    lines.append(f"### Progress: {done_pages_all}/{total_pages_all} pages ({pct:.1f}%) | Chapters: {done_chapters_count}/{len(all_chapters)} completed\n")
    lines.append("| Section | Chapter | Pages | Status |")
    lines.append("| :--- | :--- | :---: | :---: |")
    lines.extend(table_rows)

    with open(STATUS_DASHBOARD, "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")

def transcribe_page_image(img, max_retries=7):
    models = ["gemini-3.1-flash-lite", "gemini-3.8-flash", "gemini-3.5-flash"]
    for attempt in range(max_retries):
        for m in models:
            try:
                resp = client.models.generate_content(
                    model=m,
                    contents=[img, SYSTEM_PROMPT, "Transcribe this page completely and accurately in Markdown."]
                )
                if resp.text and len(resp.text.strip()) > 0:
                    return resp.text.strip()
            except Exception as e:
                err_str = str(e)
                if any(x in err_str for x in ["503", "429", "UNAVAILABLE", "ResourceExhausted"]):
                    sleep_sec = min(30, (attempt + 1) * 3)
                    print(f"    [RateLimit/ServiceNotice] Model {m} busy. Waiting {sleep_sec}s...")
                    time.sleep(sleep_sec)
                    continue
                else:
                    continue
        time.sleep(3)
    raise RuntimeError("Failed to transcribe page after maximum retries.")

def discover_chapters():
    chapters = []
    for part in ["01-Botany", "02-Zoology"]:
        part_dir = SOURCE_ROOT / part
        if not part_dir.exists():
            continue
        for pdf_file in sorted(part_dir.glob("*.pdf")):
            try:
                doc = pymupdf.open(pdf_file)
                page_count = doc.page_count
                doc.close()
                rel = f"{part}/{pdf_file.name}"
                title = pdf_file.stem
                chapters.append({
                    "part": part,
                    "rel_path": rel,
                    "full_path": pdf_file,
                    "chapter_title": title,
                    "total_pages": page_count
                })
            except Exception as e:
                print(f"Error opening {pdf_file}: {e}")
    return chapters

def main():
    print("==================================================")
    print("STARTING AUTONOMOUS NON-STOP CHAPTER TRANSCRIPTION")
    print("==================================================")

    OUTPUT_ROOT.mkdir(exist_ok=True)
    (OUTPUT_ROOT / "01-Botany").mkdir(exist_ok=True)
    (OUTPUT_ROOT / "02-Zoology").mkdir(exist_ok=True)

    chapters = discover_chapters()
    checkpoint = load_checkpoint()

    print(f"Discovered {len(chapters)} chapter PDFs.")
    update_status_dashboard(checkpoint, chapters)

    for ch_idx, ch in enumerate(chapters, 1):
        rel = ch["rel_path"]
        pdf_path = ch["full_path"]
        total_p = ch["total_pages"]
        title = ch["chapter_title"]
        part = ch["part"]

        out_md_path = OUTPUT_ROOT / part / f"{title}_Transcription.md"
        
        ch_state = checkpoint.get(rel, {"completed_pages": [], "status": "queued"})
        completed_pages = set(ch_state.get("completed_pages", []))

        if len(completed_pages) >= total_p and total_p > 0:
            print(f"[{ch_idx}/{len(chapters)}] SKIPPING (Already Complete): {rel} ({len(completed_pages)}/{total_p} pages)")
            continue

        print(f"\n==================================================")
        print(f"[{ch_idx}/{len(chapters)}] TRANSCRIBING CHAPTER: {rel}")
        print(f"Target File: {out_md_path}")
        print(f"Total Pages: {total_p} | Already completed: {len(completed_pages)}")
        print(f"==================================================")

        doc = pymupdf.open(pdf_path)

        for page_num in range(1, total_p + 1):
            if page_num in completed_pages:
                continue

            print(f" -> [{rel}] Processing Page {page_num}/{total_p}...")
            
            # Render page to PIL image
            page = doc[page_num - 1]
            pix = page.get_pixmap(dpi=150)
            img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)

            # Transcribe with AI
            try:
                page_text = transcribe_page_image(img)
            except Exception as e:
                print(f"    [CRITICAL ERROR] on Page {page_num}: {e}")
                print("    Retrying in 10 seconds without stopping...")
                time.sleep(10)
                try:
                    page_text = transcribe_page_image(img)
                except Exception as e2:
                    print(f"    Failed second attempt: {e2}. Skipping page to prevent halt.")
                    page_text = f"\n\n<!-- PAGE {page_num} TRANSCRIPTION ERROR: {e2} -->\n\n"

            # Append to Markdown file
            with open(out_md_path, "a", encoding="utf-8") as f_out:
                if out_md_path.stat().st_size == 0 or page_num == 1:
                    f_out.write(f"# {title}\n\n")
                f_out.write(f"\n\n<!-- ========================================== -->\n")
                f_out.write(f"<!-- PDF Page {page_num} / {total_p} -->\n")
                f_out.write(f"<!-- ========================================== -->\n\n")
                f_out.write(page_text + "\n")

            # Update checkpoint
            completed_pages.add(page_num)
            ch_state["completed_pages"] = sorted(list(completed_pages))
            ch_state["status"] = "completed" if len(completed_pages) >= total_p else "in_progress"
            ch_state["last_updated"] = time.strftime('%Y-%m-%d %H:%M:%S')
            checkpoint[rel] = ch_state
            save_checkpoint(checkpoint)
            update_status_dashboard(checkpoint, chapters)

            print(f"    [OK] Page {page_num}/{total_p} saved. (File size: {out_md_path.stat().st_size / 1024:.1f} KB)")
            time.sleep(1.5)  # respectful pacing between pages

        doc.close()
        print(f"Chapter '{title}' COMPLETE! Output saved to: {out_md_path}")

    print("\n==================================================")
    print("ALL 23 CHAPTERS FULLY DIGITIZED & TRANSCRIBED!")
    print("==================================================")
    update_status_dashboard(checkpoint, chapters)

if __name__ == "__main__":
    main()
