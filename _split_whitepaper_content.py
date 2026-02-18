#!/usr/bin/env python3
import os
import re
from typing import Dict, Tuple

ROOT = "/Users/coin2/Desktop/tangzongweb/figma/WA资料库文件-v3"
SRC = os.path.join(ROOT, "src")
INPUT = os.path.join(SRC, "data", "whitepaper-content.ts")
OUT_DIR = os.path.join(SRC, "data", "whitepaper", "content")

LANGS = ["en", "zh", "id", "th", "vi", "ko", "ja"]


def find_export_object(src: str, export_name: str) -> Tuple[int, int]:
    m = re.search(rf"export const {re.escape(export_name)}\s*:\s*[^=]*=\s*\{{", src)
    if not m:
        raise RuntimeError(f"Cannot find export const {export_name} = {{")
    start = m.end() - 1  # at '{'
    i = start
    depth = 0
    in_str = None
    esc = False
    while i < len(src):
        ch = src[i]
        if in_str:
            if esc:
                esc = False
            elif ch == "\\":
                esc = True
            elif ch == in_str:
                in_str = None
        else:
            if ch in ("'", '"', '`'):
                in_str = ch
            elif ch == '{':
                depth += 1
            elif ch == '}':
                depth -= 1
                if depth == 0:
                    return start, i + 1
        i += 1
    raise RuntimeError(f"Unclosed object for {export_name}")


def extract_top_level_props(obj_src: str) -> Dict[str, str]:
    # obj_src includes outer braces
    # We'll scan for top-level <key>: <value> pairs.
    i = 1  # after '{'
    depth = 0
    in_str = None
    esc = False
    key = None
    props: Dict[str, str] = {}
    token_start = None

    def skip_ws(idx: int) -> int:
        while idx < len(obj_src) and obj_src[idx].isspace():
            idx += 1
        return idx

    while i < len(obj_src) - 1:
        ch = obj_src[i]
        if in_str:
            if esc:
                esc = False
            elif ch == "\\":
                esc = True
            elif ch == in_str:
                in_str = None
            i += 1
            continue

        if ch in ("'", '"', '`'):
            in_str = ch
            i += 1
            continue

        if ch == '{' or ch == '[' or ch == '(':
            depth += 1
            i += 1
            continue

        if ch == '}' or ch == ']' or ch == ')':
            depth -= 1
            i += 1
            continue

        if depth == 0:
            # parse key
            i = skip_ws(i)
            # allow identifier keys only
            m = re.match(r"([a-zA-Z_][a-zA-Z0-9_]*)\s*:", obj_src[i:])
            if not m:
                i += 1
                continue
            key = m.group(1)
            i += m.end(0)
            i = skip_ws(i)
            token_start = i

            # find end of value at top-level comma
            j = i
            sub_depth = 0
            sub_in_str = None
            sub_esc = False
            while j < len(obj_src) - 1:
                c = obj_src[j]
                if sub_in_str:
                    if sub_esc:
                        sub_esc = False
                    elif c == "\\":
                        sub_esc = True
                    elif c == sub_in_str:
                        sub_in_str = None
                    j += 1
                    continue
                if c in ("'", '"', '`'):
                    sub_in_str = c
                    j += 1
                    continue
                if c in '{[(':
                    sub_depth += 1
                    j += 1
                    continue
                if c in ')]}':
                    sub_depth -= 1
                    j += 1
                    continue
                if sub_depth == 0 and c == ',':
                    break
                j += 1

            value = obj_src[token_start:j].rstrip()
            props[key] = value
            i = j + 1
            continue

        i += 1

    return props


def main():
    with open(INPUT, 'r', encoding='utf-8') as f:
        src = f.read()

    # Extract whitepaperTranslations object literal text (including braces)
    t_start, t_end = find_export_object(src, "whitepaperTranslations")
    translations_src = src[t_start:t_end]

    # Extract whitepaperContent object literal
    c_start, c_end = find_export_object(src, "whitepaperContent")
    content_src = src[c_start:c_end]

    translations_props = extract_top_level_props(translations_src)
    content_props = extract_top_level_props(content_src)

    os.makedirs(OUT_DIR, exist_ok=True)

    # Write per-language content files
    for lang in LANGS:
        if lang not in content_props:
            raise RuntimeError(f"Missing content for lang {lang}")
        lang_obj = content_props[lang]
        out_path = os.path.join(OUT_DIR, f"whitepaper-content.{lang}.ts")
        with open(out_path, 'w', encoding='utf-8') as out:
            out.write("import type { WhitepaperContent } from '../types';\n\n")
            out.write(f"export const whitepaperContent_{lang}: WhitepaperContent = {lang_obj};\n")

    # Write translations file (single module)
    translations_out = os.path.join(SRC, "data", "whitepaper", "whitepaper-translations.ts")
    os.makedirs(os.path.dirname(translations_out), exist_ok=True)
    with open(translations_out, 'w', encoding='utf-8') as out:
        out.write("import type { Language } from '../../App';\n")
        out.write("import type { WhitepaperTranslation } from './types';\n\n")
        out.write("export const whitepaperTranslations: Record<Language, WhitepaperTranslation> = {")
        for lang in LANGS:
            if lang not in translations_props:
                raise RuntimeError(f"Missing translations for lang {lang}")
            out.write(f"\n  {lang}: {translations_props[lang].rstrip()},")
        out.write("\n};\n")

    # Write loader
    loader_out = os.path.join(SRC, "data", "whitepaper", "loader.ts")
    with open(loader_out, 'w', encoding='utf-8') as out:
        out.write("import type { Language } from '../../App';\n")
        out.write("import type { WhitepaperContent } from './types';\n\n")
        out.write("export async function loadWhitepaperContent(language: Language): Promise<WhitepaperContent> {\n")
        out.write("  try {\n")
        out.write("    switch (language) {\n")
        for lang in LANGS:
            out.write(f"      case '{lang}':\n        return (await import('./content/whitepaper-content.{lang}')).whitepaperContent_{lang};\n")
        out.write("      default:\n        return (await import('./content/whitepaper-content.en')).whitepaperContent_en;\n")
        out.write("    }\n")
        out.write("  } catch {\n")
        out.write("    return (await import('./content/whitepaper-content.en')).whitepaperContent_en;\n")
        out.write("  }\n")
        out.write("}\n")

    print("Split completed.")


if __name__ == '__main__':
    main()
