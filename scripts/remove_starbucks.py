#!/usr/bin/env python3
"""Remove Starbucks place entries from data files (object blocks and place() lines)."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "src" / "data"

OBJECT_FILES = [
    "places-part1.ts",
    "places-part2.ts",
    "places-part3.ts",
    "places-part4.ts",
]

LINE_FILES = [
    "places-uk-extra.ts",
    "places-nl-extra.ts",
    "places-lu-extra.ts",
    "places-be-extra.ts",
    "places-no-extra.ts",
    "places-fi-extra.ts",
    "places-se-extra.ts",
    "places-dk-extra.ts",
]


def strip_object_starbucks(text: str) -> str:
    # Remove objects whose category is starbucks (including trailing commas/newlines)
    pattern = re.compile(
        r"\n?\s*\{\s*\n(?:[^{}]|\n)*?category:\s*'starbucks',(?:[^{}]|\n)*?\},?",
        re.MULTILINE,
    )
    cleaned = pattern.sub("\n", text)
    cleaned = re.sub(r"\n{3,}", "\n\n", cleaned)
    return cleaned


def strip_line_starbucks(text: str) -> str:
    lines = []
    for line in text.splitlines(keepends=True):
        if "'starbucks'" in line or '"starbucks"' in line:
            continue
        lines.append(line)
    return "".join(lines)


def main() -> None:
    for name in OBJECT_FILES:
        path = ROOT / name
        before = path.read_text(encoding="utf-8")
        after = strip_object_starbucks(before)
        path.write_text(after, encoding="utf-8")
        removed = before.count("category: 'starbucks'") - after.count("category: 'starbucks'")
        print(f"{name}: removed ~{removed} object entries")

    for name in LINE_FILES:
        path = ROOT / name
        before = path.read_text(encoding="utf-8")
        after = strip_line_starbucks(before)
        path.write_text(after, encoding="utf-8")
        removed = before.count("'starbucks'") - after.count("'starbucks'")
        print(f"{name}: removed {removed} place() lines")


if __name__ == "__main__":
    main()
