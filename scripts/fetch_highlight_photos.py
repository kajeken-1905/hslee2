#!/usr/bin/env python3
"""Download Openverse photos for every highlight in cities.ts."""

from __future__ import annotations

import json
import re
import ssl
import time
import urllib.error
import urllib.parse
import urllib.request
from io import BytesIO
from pathlib import Path

import certifi
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
LOG = ROOT / "scripts" / "highlight_fetch_log.txt"
STATE = ROOT / "scripts" / "highlight_fetch_ok.txt"
UA = "MyVacationPlan/1.0 (educational class project; contact: student@localhost)"
CTX = ssl.create_default_context(cafile=certifi.where())
SLEEP = 0.3


def log(msg: str) -> None:
    print(msg, flush=True)
    with LOG.open("a", encoding="utf-8") as f:
        f.write(msg + "\n")


def open_url(url: str, accept: str | None = None) -> bytes:
    headers = {"User-Agent": UA}
    if accept:
        headers["Accept"] = accept
    req = urllib.request.Request(url, headers=headers)
    last_err: Exception | None = None
    for attempt in range(6):
        try:
            with urllib.request.urlopen(req, timeout=45, context=CTX) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            last_err = e
            if e.code in (429, 503):
                wait = min(45, 3 * (2**attempt))
                log(f"  rate-limit wait {wait}s ({e.code})")
                time.sleep(wait)
                continue
            raise
        except Exception as e:
            last_err = e
            time.sleep(1.2 * (attempt + 1))
    assert last_err is not None
    raise last_err


def openverse_image(query: str, exclude: set[str]) -> str | None:
    qs = urllib.parse.urlencode(
        {
            "q": query,
            "page_size": "10",
            "license": "cc0,pdm,by,by-sa,by-nc,by-nd,by-nc-sa,by-nc-nd",
            "category": "photograph",
        }
    )
    data = json.loads(open_url("https://api.openverse.org/v1/images/?" + qs, "application/json").decode())
    for item in data.get("results") or []:
        src = item.get("url") or item.get("thumbnail")
        if src and src not in exclude:
            return src
    # fallback without category
    qs2 = urllib.parse.urlencode(
        {
            "q": query,
            "page_size": "10",
            "license": "cc0,pdm,by,by-sa,by-nc,by-nd,by-nc-sa,by-nc-nd",
        }
    )
    data = json.loads(open_url("https://api.openverse.org/v1/images/?" + qs2, "application/json").decode())
    for item in data.get("results") or []:
        src = item.get("url") or item.get("thumbnail")
        if src and src not in exclude:
            return src
    return None


def save_cover(url: str, out_path: Path) -> None:
    raw = open_url(url)
    img = Image.open(BytesIO(raw)).convert("RGB")
    w, h = img.size
    target = 1200 / 800
    if w / h > target:
        nw = int(h * target)
        left = max(0, (w - nw) // 2)
        img = img.crop((left, 0, min(w, left + nw), h))
    else:
        nh = int(w / target)
        top = max(0, (h - nh) // 2)
        img = img.crop((0, top, w, min(h, top + nh)))
    img = img.resize((1200, 800), Image.Resampling.LANCZOS)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(out_path, "JPEG", quality=85, optimize=True)


def parse_items() -> list[tuple[str, str, str, str]]:
    """Return (hid, city_en, highlight_en, image_path)."""
    text = (ROOT / "src/data/cities.ts").read_text(encoding="utf-8")
    items: list[tuple[str, str, str, str]] = []
    for cm in re.finditer(
        r'id: "([^"]+)",\n\s+countryId: "[^"]+",\n\s+signatureImage: "[^"]+",\n'
        r'\s+name: \{ ko: "[^"]*", en: "([^"]*)" \},[\s\S]*?highlights: \[([\s\S]*?)\],\n  \},',
        text,
    ):
        city_id, city_en, block = cm.group(1), cm.group(2), cm.group(3)
        for hm in re.finditer(
            r'id: "([^"]+)",\n\s+name: \{ ko: "[^"]*", en: "((?:\\.|[^"])*)" \},'
            r'[\s\S]*?image: "(/highlights/[^"]+)"',
            block,
        ):
            items.append((hm.group(1), city_en, hm.group(2), hm.group(3)))
    return items


def load_ok() -> set[str]:
    if not STATE.exists():
        return set()
    return {line.strip() for line in STATE.read_text().splitlines() if line.strip()}


def mark_ok(hid: str) -> None:
    with STATE.open("a", encoding="utf-8") as f:
        f.write(hid + "\n")


def main() -> None:
    LOG.write_text("", encoding="utf-8")
    items = parse_items()
    done = load_ok()
    log(f"items={len(items)} already_ok={len(done)}")

    success = 0
    fail: list[tuple[str, str, str]] = []
    used: set[str] = set()

    for hid, city_en, en, img_path in items:
        if hid in done:
            success += 1
            continue
        query = f"{en} {city_en}".strip()
        try:
            src = openverse_image(query, used)
            if not src:
                src = openverse_image(en, used)
            if not src:
                src = openverse_image(city_en, used)
        except Exception as e:
            fail.append((hid, en, f"search:{type(e).__name__}:{e}"))
            log(f"FAIL {hid} {en!r} search:{type(e).__name__}:{e}")
            time.sleep(SLEEP)
            continue

        out = ROOT / "public" / img_path.lstrip("/")
        if not src:
            fail.append((hid, en, "no image"))
            log(f"FAIL {hid} {en!r} no image q={query!r}")
            continue
        try:
            save_cover(src, out)
            used.add(src)
            mark_ok(hid)
            success += 1
            log(f"OK {success} {hid} <- {query!r}")
        except Exception as e:
            fail.append((hid, en, f"dl:{type(e).__name__}:{e}"))
            log(f"FAIL {hid} {en!r} dl:{type(e).__name__}:{e}")
            continue
        time.sleep(SLEEP)

    log(f"DONE success={success} fail={len(fail)}")
    for f in fail:
        log(f" fail {f}")


if __name__ == "__main__":
    main()
