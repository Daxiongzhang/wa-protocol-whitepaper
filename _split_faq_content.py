#!/usr/bin/env python3
import os
import re

ROOT = "/Users/coin2/Desktop/tangzongweb/figma/WA资料库文件-v3"
SRC = os.path.join(ROOT, "src")
INPUT = os.path.join(SRC, "data", "faq-content.ts")
OUT_DIR = os.path.join(SRC, "data", "faq", "content")
LANGS = ["zh", "en", "id", "th", "vi", "ko", "ja"]


def main():
    with open(INPUT, 'r', encoding='utf-8') as f:
        src = f.read()

    os.makedirs(OUT_DIR, exist_ok=True)
    os.makedirs(os.path.join(SRC, "data", "faq"), exist_ok=True)

    # Extract each exported const <lang>FAQContent: FAQContent = { ... };
    for lang in LANGS:
        name = f"{lang}FAQContent"
        m = re.search(rf"export const {re.escape(name)}\s*:\s*FAQContent\s*=\s*\{{", src)
        if not m:
            raise RuntimeError(f"Cannot find export const {name}: FAQContent = {{")

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
                        end = i + 1
                        break
            i += 1
        else:
            raise RuntimeError(f"Unclosed object for {name}")

        obj = src[start:end]
        out_path = os.path.join(OUT_DIR, f"faq.{lang}.ts")
        with open(out_path, 'w', encoding='utf-8') as out:
            out.write("import type { FAQContent } from '../../../types/content.types';\n\n")
            out.write(f"export const faqContent_{lang}: FAQContent = {obj};\n")

    # types.ts: re-export FAQContent from central types
    types_out = os.path.join(SRC, "data", "faq", "types.ts")
    with open(types_out, 'w', encoding='utf-8') as out:
        out.write("export type { FAQContent } from '../../types/content.types';\n")
        out.write("export type { CategoryKey } from '../../types/content.types';\n")

    # loader.ts
    loader_out = os.path.join(SRC, "data", "faq", "loader.ts")
    with open(loader_out, 'w', encoding='utf-8') as out:
        out.write("import type { Language } from '../../App';\n")
        out.write("import type { FAQContent } from '../../types/content.types';\n\n")
        out.write("export async function loadFAQContent(language: Language): Promise<FAQContent> {\n")
        out.write("  try {\n")
        out.write("    switch (language) {\n")
        for lang in LANGS:
            out.write(f"      case '{lang}':\n        return (await import('./content/faq.{lang}')).faqContent_{lang};\n")
        out.write("      default:\n        return (await import('./content/faq.zh')).faqContent_zh;\n")
        out.write("    }\n")
        out.write("  } catch {\n")
        out.write("    return (await import('./content/faq.zh')).faqContent_zh;\n")
        out.write("  }\n")
        out.write("}\n")

    # index.ts
    index_out = os.path.join(SRC, "data", "faq", "index.ts")
    with open(index_out, 'w', encoding='utf-8') as out:
        out.write("export * from './loader';\n")
        out.write("export * from './types';\n")

    print("FAQ split completed.")


if __name__ == '__main__':
    main()
