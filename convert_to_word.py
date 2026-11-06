import sys
import re
from pathlib import Path
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

def clean_math(text):
    # LaTeX cleanup
    # \text{...} -> ...
    text = re.sub(r'\\text\{([^}]+)\}', r'\1', text)
    # \mu
    text = text.replace(r'\mu', 'μ')
    # \AA
    text = text.replace(r'\AA', 'Å')
    text = text.replace(r'\times', '×')
    text = text.replace(r'\rightarrow', '→')
    text = text.replace(r'\equiv', '≡')
    # superscripts
    sup_map = {'0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻', '+': '⁺'}
    def replace_sup(m):
        val = m.group(1)
        return ''.join(sup_map.get(c, c) for c in val)
    text = re.sub(r'\^\{([^}]+)\}', replace_sup, text)
    text = re.sub(r'\^([0-9\+\-])', replace_sup, text)
    # remove $ ... $
    text = re.sub(r'\$([^$]+)\$', r'\1', text)
    text = text.replace('$', '')
    # replace multiple spaces
    text = re.sub(r'[ \t]+', ' ', text)
    return text.strip()

def set_cell_background(cell, fill_hex):
    shading_elm = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
    cell._tc.get_or_add_tcPr().append(shading_elm)

def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = OxmlElement('w:tcMar')
    for m, val in [('w:top', top), ('w:bottom', bottom), ('w:left', left), ('w:right', right)]:
        node = OxmlElement(m)
        node.set(qn('w:w'), str(val))
        node.set(qn('w:type'), 'dxa')
        tcMar.append(node)
    tcPr.append(tcMar)

def set_table_borders(table, color="D3D3D3"):
    tblPr = table._tbl.tblPr
    borders = parse_xml(
        f'<w:tblBorders {nsdecls("w")}>\n'
        f'  <w:top w:val="single" w:sz="4" w:space="0" w:color="{color}"/>\n'
        f'  <w:bottom w:val="single" w:sz="6" w:space="0" w:color="{color}"/>\n'
        f'  <w:left w:val="none"/>\n'
        f'  <w:right w:val="none"/>\n'
        f'  <w:insideH w:val="single" w:sz="4" w:space="0" w:color="{color}"/>\n'
        f'  <w:insideV w:val="none"/>\n'
        f'</w:tblBorders>'
    )
    tblPr.append(borders)

def apply_font_to_run(run, font_name="Kalpurush", size_pt=10.5, bold=False, italic=False, color_rgb=(0,0,0)):
    run.font.name = font_name
    run.font.size = Pt(size_pt)
    run.font.bold = bold
    run.font.italic = italic
    run.font.color.rgb = RGBColor(*color_rgb)
    
    rPr = run._r.get_or_add_rPr()
    rFonts = parse_xml(
        f'<w:rFonts {nsdecls("w")} '
        f'w:ascii="{font_name}" '
        f'w:hAnsi="{font_name}" '
        f'w:cs="{font_name}"/>'
    )
    rPr.append(rFonts)

def add_styled_paragraph(doc, text="", style='Normal', space_before=0, space_after=3, line_spacing=1.15, align=WD_ALIGN_PARAGRAPH.LEFT):
    p = doc.add_paragraph()
    p.alignment = align
    p.paragraph_format.space_before = Pt(space_before)
    p.paragraph_format.space_after = Pt(space_after)
    p.paragraph_format.line_spacing = line_spacing
    return p

def add_header_footer(doc, title="উদ্ভিদবিজ্ঞান ১ম পত্র | অধ্যায় ০১: কোষ ও এর গঠন"):
    section = doc.sections[0]
    section.different_first_page_header_footer = True
    
    # Header for regular pages
    header = section.header
    hp = header.paragraphs[0]
    hp.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    hrun = hp.add_run(title)
    apply_font_to_run(hrun, font_name="Kalpurush", size_pt=8.5, color_rgb=(120, 120, 120))
    hp.paragraph_format.space_after = Pt(4)
    
    # Footer for regular pages
    footer = section.footer
    fp = footer.paragraphs[0]
    fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    frun1 = fp.add_run("পৃষ্ঠা ")
    apply_font_to_run(frun1, font_name="Kalpurush", size_pt=8.5, color_rgb=(140, 140, 140))
    
    # Add page number XML field
    fld1 = parse_xml(r'<w:fldSimple %s w:instr="PAGE"/>' % nsdecls('w'))
    fp._p.append(fld1)
    
    frun2 = fp.add_run(" / ")
    apply_font_to_run(frun2, font_name="Kalpurush", size_pt=8.5, color_rgb=(140, 140, 140))
    
    fld2 = parse_xml(r'<w:fldSimple %s w:instr="NUMPAGES"/>' % nsdecls('w'))
    fp._p.append(fld2)

def is_noise_line(line):
    s = line.strip()
    if not s:
        return True
    if s.startswith('<!--') and s.endswith('-->'):
        return True
    if s == '---':
        return True
    if re.match(r'^(উদ্ভাস একাডেমিক|পরিবর্তনের প্রত্যয়ে|ভার্সিটি [‘\']ক[’\'] মাস্টার|উদ্ভিদবিজ্ঞান: অধ্যায়)', s):
        return True
    # Standalone Bengali or English page numbers
    if re.match(r'^[০১২৩৪৫৬৭৮৯0-9]{1,3}$', s):
        return True
    return False

def parse_markdown_to_docx(md_path, docx_path):
    with open(md_path, 'r', encoding='utf-8') as f:
        raw_lines = f.readlines()
    
    doc = docx.Document()
    
    # Set Margins
    for sec in doc.sections:
        sec.top_margin = Inches(0.75)
        sec.bottom_margin = Inches(0.75)
        sec.left_margin = Inches(0.75)
        sec.right_margin = Inches(0.75)
    
    add_header_footer(doc)
    
    # Title Banner
    title_p = add_styled_paragraph(doc, space_before=10, space_after=2, align=WD_ALIGN_PARAGRAPH.CENTER)
    trun = title_p.add_run("ভার্সিটি 'ক' মাস্টার প্রশ্নব্যাংক")
    apply_font_to_run(trun, font_name="Kalpurush", size_pt=13, bold=True, color_rgb=(100, 110, 120))
    
    h1_p = add_styled_paragraph(doc, space_before=2, space_after=4, align=WD_ALIGN_PARAGRAPH.CENTER)
    h1_run = h1_p.add_run("উদ্ভিদবিজ্ঞান ১ম পত্র: অধ্যায় ০১")
    apply_font_to_run(h1_run, font_name="Kalpurush", size_pt=18, bold=True, color_rgb=(20, 50, 90))
    
    h2_p = add_styled_paragraph(doc, space_before=0, space_after=14, align=WD_ALIGN_PARAGRAPH.CENTER)
    h2_run = h2_p.add_run("কোষ ও এর গঠন (Cell and its Structure)")
    apply_font_to_run(h2_run, font_name="Kalpurush", size_pt=16, bold=True, color_rgb=(30, 90, 160))
    
    # Divider line
    div_p = add_styled_paragraph(doc, space_before=0, space_after=12, align=WD_ALIGN_PARAGRAPH.CENTER)
    drun = div_p.add_run("━" * 50)
    apply_font_to_run(drun, font_name="Kalpurush", size_pt=10, color_rgb=(200, 210, 220))
    
    lines = [l.strip() for l in raw_lines]
    i = 0
    total = len(lines)
    
    in_table = False
    table_rows = []
    
    def flush_table(rows):
        if not rows:
            return
        # clean header / separator
        parsed = []
        for r in rows:
            cells = [clean_math(c.strip()) for c in r.strip('|').split('|')]
            # check if it's separator row like :---: | :---
            if all(re.match(r'^:?-+:?$', c) for c in cells if c):
                continue
            parsed.append(cells)
        if not parsed:
            return
        
        ncols = max(len(r) for r in parsed)
        tbl = doc.add_table(rows=len(parsed), cols=ncols)
        tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
        set_table_borders(tbl, color="D0D7DE")
        
        for r_idx, row in enumerate(parsed):
            is_header = (r_idx == 0)
            for c_idx in range(ncols):
                cell_text = row[c_idx] if c_idx < len(row) else ""
                cell = tbl.cell(r_idx, c_idx)
                cell.vertical_alignment = WD_ALIGN_VERTICAL.CENTER
                set_cell_margins(cell, top=80, bottom=80, left=120, right=120)
                
                # replace <br> with newline
                cell_text = cell_text.replace('<br>', '\n').replace('<br/>', '\n')
                
                if is_header:
                    set_cell_background(cell, "1A365D")
                else:
                    bg = "F8FAFC" if (r_idx % 2 == 1) else "FFFFFF"
                    set_cell_background(cell, bg)
                
                cp = cell.paragraphs[0]
                cp.paragraph_format.space_before = Pt(2)
                cp.paragraph_format.space_after = Pt(2)
                cp.paragraph_format.line_spacing = 1.15
                cp.alignment = WD_ALIGN_PARAGRAPH.CENTER if is_header or len(cell_text) < 15 else WD_ALIGN_PARAGRAPH.LEFT
                
                c_run = cp.add_run(cell_text)
                if is_header:
                    apply_font_to_run(c_run, font_name="Kalpurush", size_pt=9.5, bold=True, color_rgb=(255, 255, 255))
                else:
                    apply_font_to_run(c_run, font_name="Kalpurush", size_pt=9.5, color_rgb=(40, 40, 40))
        
        # spacing after table
        sp = doc.add_paragraph()
        sp.paragraph_format.space_before = Pt(0)
        sp.paragraph_format.space_after = Pt(6)

    while i < total:
        line = lines[i]
        
        # Check noise lines
        if is_noise_line(line):
            i += 1
            continue
            
        # Table detection
        if line.startswith('|') and line.endswith('|'):
            table_rows.append(line)
            i += 1
            while i < total and (lines[i].startswith('|') and lines[i].endswith('|') or not lines[i].strip()):
                if lines[i].strip():
                    table_rows.append(lines[i].strip())
                i += 1
            flush_table(table_rows)
            table_rows = []
            continue
            
        cleaned = clean_math(line)
        
        # Headings
        if line.startswith('# অধ্যায় ০১') or line.startswith('## কোষ ও এর গঠন'):
            # Already rendered banner
            i += 1
            continue
            
        if line.startswith('## '):
            h_text = clean_math(line[3:])
            p = add_styled_paragraph(doc, space_before=14, space_after=4)
            run = p.add_run(h_text)
            apply_font_to_run(run, font_name="Kalpurush", size_pt=13.5, bold=True, color_rgb=(15, 60, 115))
            i += 1
            continue
            
        if line.startswith('### '):
            h_text = clean_math(line[4:])
            p = add_styled_paragraph(doc, space_before=10, space_after=3)
            run = p.add_run(h_text)
            apply_font_to_run(run, font_name="Kalpurush", size_pt=11.5, bold=True, color_rgb=(28, 90, 150))
            i += 1
            continue
            
        if line.startswith('#### '):
            h_text = clean_math(line[5:])
            p = add_styled_paragraph(doc, space_before=6, space_after=2)
            run = p.add_run(h_text)
            apply_font_to_run(run, font_name="Kalpurush", size_pt=10.5, bold=True, color_rgb=(50, 50, 50))
            i += 1
            continue
            
        # Blockquote / Note
        if line.startswith('> '):
            b_text = clean_math(line[2:])
            p = add_styled_paragraph(doc, space_before=3, space_after=4)
            p.paragraph_format.left_indent = Inches(0.2)
            run = p.add_run("❝ " + b_text)
            apply_font_to_run(run, font_name="Kalpurush", size_pt=10, italic=True, color_rgb=(90, 90, 90))
            i += 1
            continue
            
        # Question line (e.g. "01. De Historia Plantarum ... [JnU'25-26]" or "**০১.** ...")
        q_match = re.match(r'^(\*{0,2}(\d+|[০১১২৩৪৫৬৭৮৯]+)\.\*{0,2}\s*)(.*)', cleaned)
        if q_match:
            q_num = q_match.group(1).replace('*', '')
            q_body = q_match.group(3)
            
            p = add_styled_paragraph(doc, space_before=6, space_after=2)
            num_run = p.add_run(q_num + " ")
            apply_font_to_run(num_run, font_name="Kalpurush", size_pt=10.5, bold=True, color_rgb=(15, 60, 120))
            
            # Check for university tag in [ ... ]
            tag_match = re.search(r'(\[.*?\])', q_body)
            if tag_match:
                tag = tag_match.group(1)
                body_before = q_body[:tag_match.start()]
                body_after = q_body[tag_match.end():]
                
                r1 = p.add_run(body_before)
                apply_font_to_run(r1, font_name="Kalpurush", size_pt=10.5, bold=True, color_rgb=(30, 30, 30))
                
                r_tag = p.add_run(tag)
                apply_font_to_run(r_tag, font_name="Kalpurush", size_pt=9.5, bold=True, color_rgb=(190, 45, 45))
                
                if body_after:
                    r2 = p.add_run(body_after)
                    apply_font_to_run(r2, font_name="Kalpurush", size_pt=10.5, bold=True, color_rgb=(30, 30, 30))
            else:
                r = p.add_run(q_body)
                apply_font_to_run(r, font_name="Kalpurush", size_pt=10.5, bold=True, color_rgb=(30, 30, 30))
            i += 1
            continue
            
        # Answer line: **(a)** or (a) or উত্তর:
        ans_match = re.match(r'^(\*{0,2}\([a-d]\)\*{0,2}|\bউত্তর:?.*)$', cleaned)
        if ans_match or (re.match(r'^\([a-d]\)$', cleaned)):
            ans_text = cleaned.replace('*', '').strip()
            p = add_styled_paragraph(doc, space_before=1, space_after=2)
            p.paragraph_format.left_indent = Inches(0.2)
            lbl = p.add_run("✓ সঠিক উত্তর: ")
            apply_font_to_run(lbl, font_name="Kalpurush", size_pt=10, bold=True, color_rgb=(34, 139, 34))
            val = p.add_run(ans_text)
            apply_font_to_run(val, font_name="Kalpurush", size_pt=10, bold=True, color_rgb=(34, 139, 34))
            i += 1
            continue
            
        # Explanation line: **ব্যাখ্যা:** or ব্যাখ্যা:
        exp_match = re.match(r'^(\*{0,2}ব্যাখ্যা:?\*{0,2}\s*)(.*)', cleaned)
        if exp_match:
            exp_lbl = exp_match.group(1).replace('*', '')
            exp_body = exp_match.group(2)
            p = add_styled_paragraph(doc, space_before=2, space_after=4)
            p.paragraph_format.left_indent = Inches(0.2)
            lbl = p.add_run(exp_lbl + " ")
            apply_font_to_run(lbl, font_name="Kalpurush", size_pt=9.5, bold=True, color_rgb=(100, 110, 120))
            val = p.add_run(exp_body)
            apply_font_to_run(val, font_name="Kalpurush", size_pt=9.5, italic=True, color_rgb=(70, 70, 70))
            i += 1
            continue
            
        # Options line: (a) ... (b) ... or single (a)
        if re.search(r'\([a-d]\)', cleaned):
            p = add_styled_paragraph(doc, space_before=1, space_after=1)
            p.paragraph_format.left_indent = Inches(0.2)
            run = p.add_run(cleaned)
            apply_font_to_run(run, font_name="Kalpurush", size_pt=10, color_rgb=(40, 40, 40))
            i += 1
            continue
            
        # Bullet list item: * or - or ❖
        bullet_match = re.match(r'^(\*|-|❖)\s+(.*)', line)
        if bullet_match:
            b_sym = bullet_match.group(1)
            b_text = clean_math(bullet_match.group(2))
            p = add_styled_paragraph(doc, space_before=1, space_after=2)
            p.paragraph_format.left_indent = Inches(0.2)
            dot_run = p.add_run("• " if b_sym in ['*', '-'] else "❖ ")
            apply_font_to_run(dot_run, font_name="Kalpurush", size_pt=10, bold=True, color_rgb=(20, 80, 140))
            
            # format bold inside text
            # split by **
            parts = re.split(r'(\*\*.*?\*\*)', b_text)
            for part in parts:
                if part.startswith('**') and part.endswith('**'):
                    run = p.add_run(part[2:-2])
                    apply_font_to_run(run, font_name="Kalpurush", size_pt=10, bold=True, color_rgb=(30, 30, 30))
                else:
                    run = p.add_run(part)
                    apply_font_to_run(run, font_name="Kalpurush", size_pt=10, color_rgb=(40, 40, 40))
            i += 1
            continue
            
        # Normal text paragraph
        p = add_styled_paragraph(doc, space_before=1, space_after=3)
        parts = re.split(r'(\*\*.*?\*\*)', cleaned)
        for part in parts:
            if part.startswith('**') and part.endswith('**'):
                run = p.add_run(part[2:-2])
                apply_font_to_run(run, font_name="Kalpurush", size_pt=10, bold=True, color_rgb=(30, 30, 30))
            else:
                run = p.add_run(part)
                apply_font_to_run(run, font_name="Kalpurush", size_pt=10, color_rgb=(40, 40, 40))
        i += 1

    doc.save(docx_path)
    print(f"Successfully generated: {docx_path}")

if __name__ == '__main__':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass
    src = Path(r"Biology-Transcriptions\01-Botany\01-কোষ ও এর গঠন_Transcription.md")
    dst = Path(r"Biology_1st_Paper_Chapter_01_কোষ_ও_এর_গঠন.docx")
    parse_markdown_to_docx(src, dst)
