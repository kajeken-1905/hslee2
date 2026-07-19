#!/usr/bin/env python3
"""Remove Place objects with category: 'starbucks' from part*.ts files."""

from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "src" / "data"
FILES = ["places-part1.ts", "places-part2.ts", "places-part3.ts", "places-part4.ts"]


def remove_starbucks_objects(text: str) -> str:
    marker = "category: 'starbucks'"
    while True:
        idx = text.find(marker)
        if idx < 0:
            break
        # walk back to the opening brace of this object
        start = idx
        while start > 0 and text[start] != "{":
            start -= 1
        # include preceding comma/whitespace for cleaner joins
        trim = start
        while trim > 0 and text[trim - 1] in " \t\r\n,":
            trim -= 1
            if text[trim] == ",":
                break

        depth = 0
        end = start
        while end < len(text):
            ch = text[end]
            if ch == "{":
                depth += 1
            elif ch == "}":
                depth -= 1
                if depth == 0:
                    end += 1
                    break
            end += 1
        # consume trailing comma
        while end < len(text) and text[end] in " \t":
            end += 1
        if end < len(text) and text[end] == ",":
            end += 1
        while end < len(text) and text[end] in "\r\n":
            end += 1
            break

        text = text[:trim] + text[end:]
    return text


def main() -> None:
    marker = "category: 'starbucks'"
    for name in FILES:
        path = ROOT / name
        before = path.read_text(encoding="utf-8")
        after = remove_starbucks_objects(before)
        path.write_text(after, encoding="utf-8")
        print(f"{name}: {before.count(marker)} -> {after.count(marker)}")


if __name__ == "__main__":
    main()
