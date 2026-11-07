#!/usr/bin/env python3
"""dark-landing の規約違反を検出する。使い方: lint.py <src ディレクトリ>

検出: 直書き色 / 影 / 太字 700 以上 / グラデーション装飾 / 仮ロゴ画像。
終了コード: 違反があれば 1。
"""
import re
import sys
from pathlib import Path

RULES = [
    (r"#[0-9a-fA-F]{3,8}\b", "直書きの色 (#hex)。意味トークンを使う"),
    (r"\b(?:bg|text|border|fill|stroke)-(?:gray|slate|zinc|neutral|stone|black|white)(?:-\d+)?\b",
     "Tailwind の素の色。--background / --foreground 系を使う"),
    (r"\bshadow-(?:sm|md|lg|xl|2xl)\b", "影は使わない。罫線で区切る"),
    (r"\bfont-(?:bold|extrabold|black|semibold)\b", "太さは 400 / 500 のみ"),
    (r"\bfrom-\w+.*\bto-\w+|\bblur-(?:2xl|3xl)\b", "装飾グラデ・グローは使わない（フェード用の背景色→transparent は可）"),
    (r"(?:placeholder|lorem|via\.placeholder|picsum)", "仮の画像・文言"),
]
EXT = {".tsx", ".ts", ".jsx", ".js", ".css"}
SKIP = {"node_modules", ".next", "dist", "build"}
ALLOW = re.compile(r"from-background\s+to-transparent|lint-ok")


def main() -> int:
    if len(sys.argv) != 2:
        print(__doc__)
        return 2
    root = Path(sys.argv[1])
    bad = 0
    for p in root.rglob("*"):
        if p.suffix not in EXT or SKIP & set(p.parts) or p.name == "tokens.css":
            continue
        for n, line in enumerate(p.read_text(errors="ignore").splitlines(), 1):
            if ALLOW.search(line):
                continue
            for pat, msg in RULES:
                if re.search(pat, line):
                    print(f"{p}:{n}: {msg}\n    {line.strip()[:120]}")
                    bad += 1
    print(f"\n違反 {bad} 件" if bad else "違反なし")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
