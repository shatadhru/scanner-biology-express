import os
import sys
import zipfile
import json
import pymupdf

sys.stdout.reconfigure(encoding='utf-8')

SOURCE_PDF = "ভার্সিটি ক মাস্টার প্রশ্নব্যাংক জীববিজ্ঞান  (1).pdf"
OUTPUT_ROOT = "Biology-Chapter-PDFs"
BOTANY_DIR = os.path.join(OUTPUT_ROOT, "01-Botany")
ZOOLOGY_DIR = os.path.join(OUTPUT_ROOT, "02-Zoology")
ZIP_FILE = "Biology-Chapter-PDFs.zip"

CHAPTERS = [
    # PART 1: উদ্ভিদবিজ্ঞান (Botany)
    {
        "part": "01-Botany",
        "chapter_num": "01",
        "chapter_name": "কোষ ও এর গঠন",
        "filename": "01-কোষ ও এর গঠন.pdf",
        "start_page": 7,
        "end_page": 32,
        "expected_pages": 26,
    },
    {
        "part": "01-Botany",
        "chapter_num": "02",
        "chapter_name": "কোষ বিভাজন",
        "filename": "02-কোষ বিভাজন.pdf",
        "start_page": 33,
        "end_page": 44,
        "expected_pages": 12,
    },
    {
        "part": "01-Botany",
        "chapter_num": "03",
        "chapter_name": "কোষ রসায়ন",
        "filename": "03-কোষ রসায়ন.pdf",
        "start_page": 45,
        "end_page": 59,
        "expected_pages": 15,
    },
    {
        "part": "01-Botany",
        "chapter_num": "04",
        "chapter_name": "অণুজীব",
        "filename": "04-অণুজীব.pdf",
        "start_page": 60,
        "end_page": 80,
        "expected_pages": 21,
    },
    {
        "part": "01-Botany",
        "chapter_num": "05",
        "chapter_name": "শৈবাল ও ছত্রাক",
        "filename": "05-শৈবাল ও ছত্রাক.pdf",
        "start_page": 81,
        "end_page": 95,
        "expected_pages": 15,
    },
    {
        "part": "01-Botany",
        "chapter_num": "06",
        "chapter_name": "ব্রায়োফাইটা ও টেরিডোফাইটা",
        "filename": "06-ব্রায়োফাইটা ও টেরিডোফাইটা.pdf",
        "start_page": 96,
        "end_page": 102,
        "expected_pages": 7,
    },
    {
        "part": "01-Botany",
        "chapter_num": "07",
        "chapter_name": "নগ্নবীজী ও আবৃতবীজী উদ্ভিদ",
        "filename": "07-নগ্নবীজী ও আবৃতবীজী উদ্ভিদ.pdf",
        "start_page": 103,
        "end_page": 116,
        "expected_pages": 14,
    },
    {
        "part": "01-Botany",
        "chapter_num": "08",
        "chapter_name": "টিস্যু ও টিস্যুতন্ত্র",
        "filename": "08-টিস্যু ও টিস্যুতন্ত্র.pdf",
        "start_page": 117,
        "end_page": 130,
        "expected_pages": 14,
    },
    {
        "part": "01-Botany",
        "chapter_num": "09",
        "chapter_name": "উদ্ভিদ শারীরতত্ত্ব",
        "filename": "09-উদ্ভিদ শারীরতত্ত্ব.pdf",
        "start_page": 131,
        "end_page": 149,
        "expected_pages": 19,
    },
    {
        "part": "01-Botany",
        "chapter_num": "10",
        "chapter_name": "উদ্ভিদ প্রজনন",
        "filename": "10-উদ্ভিদ প্রজনন.pdf",
        "start_page": 150,
        "end_page": 158,
        "expected_pages": 9,
    },
    {
        "part": "01-Botany",
        "chapter_num": "11",
        "chapter_name": "জীবপ্রযুক্তি",
        "filename": "11-জীবপ্রযুক্তি.pdf",
        "start_page": 159,
        "end_page": 176,
        "expected_pages": 18,
    },
    {
        "part": "01-Botany",
        "chapter_num": "12",
        "chapter_name": "জীবের পরিবেশ, বিস্তার ও সংরক্ষণ",
        "filename": "12-জীবের পরিবেশ, বিস্তার ও সংরক্ষণ.pdf",
        "start_page": 177,
        "end_page": 186,
        "expected_pages": 10,
    },
    # PART 2: প্রাণিবিজ্ঞান (Zoology)
    {
        "part": "02-Zoology",
        "chapter_num": "01",
        "chapter_name": "প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাস",
        "filename": "01-প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাস.pdf",
        "start_page": 188,
        "end_page": 204,
        "expected_pages": 17,
    },
    {
        "part": "02-Zoology",
        "chapter_num": "02",
        "chapter_name": "প্রাণীর পরিচিতি",
        "filename": "02-প্রাণীর পরিচিতি.pdf",
        "start_page": 205,
        "end_page": 237,
        "expected_pages": 33,
    },
    {
        "part": "02-Zoology",
        "chapter_num": "03",
        "chapter_name": "মানব শারীরতত্ত্ব: পরিপাক ও শোষণ",
        "filename": "03-মানব শারীরতত্ত্ব-পরিপাক ও শোষণ.pdf",
        "start_page": 238,
        "end_page": 253,
        "expected_pages": 16,
    },
    {
        "part": "02-Zoology",
        "chapter_num": "04",
        "chapter_name": "মানব শারীরতত্ত্ব: রক্ত ও সংবহন",
        "filename": "04-মানব শারীরতত্ত্ব-রক্ত ও সংবহন.pdf",
        "start_page": 254,
        "end_page": 271,
        "expected_pages": 18,
    },
    {
        "part": "02-Zoology",
        "chapter_num": "05",
        "chapter_name": "মানব শারীরতত্ত্ব: শ্বসন ও শ্বাসক্রিয়া",
        "filename": "05-মানব শারীরতত্ত্ব-শ্বসন ও শ্বাসক্রিয়া.pdf",
        "start_page": 272,
        "end_page": 282,
        "expected_pages": 11,
    },
    {
        "part": "02-Zoology",
        "chapter_num": "06",
        "chapter_name": "মানব শারীরতত্ত্ব: বর্জ্য ও নিষ্কাশন",
        "filename": "06-মানব শারীরতত্ত্ব-বর্জ্য ও নিষ্কাশন.pdf",
        "start_page": 283,
        "end_page": 293,
        "expected_pages": 11,
    },
    {
        "part": "02-Zoology",
        "chapter_num": "07",
        "chapter_name": "মানব শারীরতত্ত্ব: চলন ও অঙ্গচালনা",
        "filename": "07-মানব শারীরতত্ত্ব-চলন ও অঙ্গচালনা.pdf",
        "start_page": 294,
        "end_page": 304,
        "expected_pages": 11,
    },
    {
        "part": "02-Zoology",
        "chapter_num": "08",
        "chapter_name": "মানব শারীরতত্ত্ব: সমন্বয় ও নিয়ন্ত্রণ",
        "filename": "08-মানব শারীরতত্ত্ব-সমন্বয় ও নিয়ন্ত্রণ.pdf",
        "start_page": 305,
        "end_page": 324,
        "expected_pages": 20,
    },
    {
        "part": "02-Zoology",
        "chapter_num": "09",
        "chapter_name": "মানব জীবনের ধারাবাহিকতা",
        "filename": "09-মানব জীবনের ধারাবাহিকতা.pdf",
        "start_page": 325,
        "end_page": 338,
        "expected_pages": 14,
    },
    {
        "part": "02-Zoology",
        "chapter_num": "10",
        "chapter_name": "মানবদেহের প্রতিরক্ষা (ইমিউনিটি)",
        "filename": "10-মানবদেহের প্রতিরক্ষা-ইমিউনিটি.pdf",
        "start_page": 339,
        "end_page": 349,
        "expected_pages": 11,
    },
    {
        "part": "02-Zoology",
        "chapter_num": "11",
        "chapter_name": "জিনতত্ত্ব ও বিবর্তন",
        "filename": "11-জিনতত্ত্ব ও বিবর্তন.pdf",
        "start_page": 350,
        "end_page": 367,
        "expected_pages": 18,
    },
    {
        "part": "02-Zoology",
        "chapter_num": "12",
        "chapter_name": "প্রাণীর আচরণ",
        "filename": "12-প্রাণীর আচরণ.pdf",
        "start_page": 368,
        "end_page": 375,
        "expected_pages": 8,
    },
]

def main():
    print("==================================================")
    print("HSC BIOLOGY TEXTBOOK PDF SPLITTING AUTOMATION")
    print("==================================================")

    # 1. Locate and validate source PDF
    if not os.path.exists(SOURCE_PDF):
        print(f"CRITICAL ERROR: Source PDF '{SOURCE_PDF}' not found!")
        sys.exit(1)

    print(f"Source PDF located: {SOURCE_PDF}")
    src_doc = pymupdf.open(SOURCE_PDF)
    total_pages = src_doc.page_count
    print(f"Total pages in source PDF: {total_pages}")

    # Validate against 375 pages requirement
    if total_pages < 375:
        print(f"WARNING / ERROR CONDITION TRIGGERED:")
        print(f" - Original PDF has {total_pages} pages, which is FEWER than the 375 pages requested.")
        print(f" - Range validation: Zoology Chapter 12 requires pages 368-375.")
    else:
        print("Total page count satisfies >= 375 pages requirement.")

    # 2. Create output directories
    os.makedirs(BOTANY_DIR, exist_ok=True)
    os.makedirs(ZOOLOGY_DIR, exist_ok=True)
    print(f"Output directories ensured:\n - {BOTANY_DIR}\n - {ZOOLOGY_DIR}")

    results = []
    errors = []

    # 3. Process each chapter
    for ch in CHAPTERS:
        part_name = ch["part"]
        ch_num = ch["chapter_num"]
        ch_name = ch["chapter_name"]
        filename = ch["filename"]
        start_p = ch["start_page"]
        end_p = ch["end_page"]
        expected_p = ch["expected_pages"]
        expected_calc = end_p - start_p + 1

        assert expected_p == expected_calc, f"Mapping mismatch: {expected_p} != {expected_calc}"

        out_dir = BOTANY_DIR if "Botany" in part_name else ZOOLOGY_DIR
        out_filepath = os.path.join(out_dir, filename)

        print(f"\n--- Processing [{part_name}] Chapter {ch_num}: {ch_name} ---")
        print(f"    Source PDF page range: {start_p}–{end_p} (Inclusive)")
        print(f"    Expected pages: {expected_p}")
        print(f"    Target file: {out_filepath}")

        # Check range validity against actual PDF page count
        if start_p > total_pages or end_p > total_pages:
            err_msg = (
                f"Page range invalid! Chapter '{ch_name}' requested PDF pages {start_p}–{end_p}, "
                f"but source PDF has only {total_pages} pages. Exceeds available pages by {end_p - total_pages} page(s)."
            )
            print(f"    [ERROR] {err_msg}")
            errors.append({
                "chapter": f"{part_name} - Chapter {ch_num}: {ch_name}",
                "requested_range": f"{start_p}–{end_p}",
                "error": err_msg
            })
            results.append({
                "part": part_name,
                "chapter_num": ch_num,
                "chapter_name": ch_name,
                "filename": filename,
                "filepath": out_filepath,
                "start_page": start_p,
                "end_page": end_p,
                "expected_pages": expected_p,
                "created": False,
                "verified_pages": 0,
                "status": "FAILED: OUT_OF_BOUNDS",
                "error": err_msg
            })
            continue

        # Convert to 0-based indexing
        # start_index = start_p - 1
        # end_index = end_p - 1 (for insert_pdf to_page is inclusive)
        start_idx = start_p - 1
        end_idx = end_p - 1

        try:
            # Create new empty PDF
            out_doc = pymupdf.open()
            # Copy specified original PDF pages directly
            out_doc.insert_pdf(src_doc, from_page=start_idx, to_page=end_idx)
            
            # Save using specified chapter name
            out_doc.save(out_filepath)
            out_doc.close()

            # Immediate Validation
            if not os.path.exists(out_filepath):
                raise FileNotFoundError(f"File was not created: {out_filepath}")

            verify_doc = pymupdf.open(out_filepath)
            actual_pages = verify_doc.page_count
            verify_doc.close()

            if actual_pages != expected_p:
                raise ValueError(f"Page count mismatch! Expected {expected_p}, got {actual_pages}")

            print(f"    [SUCCESS] Extracted {actual_pages} pages successfully. Verified.")
            results.append({
                "part": part_name,
                "chapter_num": ch_num,
                "chapter_name": ch_name,
                "filename": filename,
                "filepath": out_filepath,
                "start_page": start_p,
                "end_page": end_p,
                "expected_pages": expected_p,
                "created": True,
                "verified_pages": actual_pages,
                "status": "VERIFIED_OK",
                "error": None
            })

        except Exception as e:
            err_msg = f"Failed to extract/save chapter '{ch_name}': {str(e)}"
            print(f"    [ERROR] {err_msg}")
            errors.append({
                "chapter": f"{part_name} - Chapter {ch_num}: {ch_name}",
                "requested_range": f"{start_p}–{end_p}",
                "error": err_msg
            })
            results.append({
                "part": part_name,
                "chapter_num": ch_num,
                "chapter_name": ch_name,
                "filename": filename,
                "filepath": out_filepath,
                "start_page": start_p,
                "end_page": end_p,
                "expected_pages": expected_p,
                "created": False,
                "verified_pages": 0,
                "status": f"ERROR: {str(e)}",
                "error": err_msg
            })

    src_doc.close()

    # 4. Create ZIP archive
    print("\n==================================================")
    print("CREATING ZIP ARCHIVE")
    print("==================================================")
    zip_count = 0
    with zipfile.ZipFile(ZIP_FILE, 'w', compression=zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(OUTPUT_ROOT):
            for file in files:
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, start=os.path.dirname(OUTPUT_ROOT))
                zipf.write(full_path, arcname=rel_path)
                zip_count += 1
                print(f" - Added to ZIP: {rel_path}")

    zip_size_mb = os.path.getsize(ZIP_FILE) / (1024 * 1024)
    print(f"ZIP created: {ZIP_FILE} ({zip_size_mb:.2f} MB, {zip_count} files)")

    # 5. Summary Report
    successful_chapters = [r for r in results if r["created"]]
    total_extracted_pages = sum(r["verified_pages"] for r in successful_chapters)

    print("\n==================================================")
    print("FINAL SUMMARY REPORT")
    print("==================================================")
    print(f"Total Chapters defined in mapping: {len(CHAPTERS)}")
    print(f"Successfully created & verified chapters: {len(successful_chapters)}")
    print(f"Failed chapters: {len(errors)}")
    print(f"Total pages extracted: {total_extracted_pages} (Expected full mapping: 396)")
    print(f"Source PDF total pages: {total_pages}")

    # Save manifest
    manifest = {
        "source_pdf": SOURCE_PDF,
        "source_total_pages": total_pages,
        "total_extracted_pages": total_extracted_pages,
        "expected_total_pages": 396,
        "successful_chapters_count": len(successful_chapters),
        "failed_chapters_count": len(errors),
        "zip_file": ZIP_FILE,
        "zip_size_mb": round(zip_size_mb, 2),
        "chapters": results,
        "errors": errors
    }

    with open("processing_manifest.json", "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)

    print("Manifest saved to processing_manifest.json")

if __name__ == "__main__":
    main()
