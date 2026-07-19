#!/usr/bin/env python3
"""Generate native neural TTS audio for country phrase lines (edge-tts)."""

from __future__ import annotations

import asyncio
from pathlib import Path

import edge_tts

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "phrases"

# One neural voice per country (native locale where possible)
VOICES: dict[str, str] = {
    "uk": "en-GB-SoniaNeural",
    "nl": "nl-NL-FennaNeural",
    "lu": "de-DE-KatjaNeural",  # no lb voice; Luxembourgish ≈ Moselle Franconian
    "be": "nl-BE-DenaNeural",
    "no": "nb-NO-PernilleNeural",
    "fi": "fi-FI-NooraNeural",
    "se": "sv-SE-SofieNeural",
    "dk": "da-DK-ChristelNeural",
}

PHRASES: dict[str, dict[str, str]] = {
    "uk": {
        "morning": "Good morning",
        "hello": "Hello",
        "excuse": "Excuse me",
        "thanks": "Thank you",
        "howMuch": "How much is it?",
    },
    "nl": {
        "morning": "Goedemorgen",
        "hello": "Hallo",
        "excuse": "Pardon",
        "thanks": "Dank u wel",
        "howMuch": "Hoeveel kost het?",
    },
    "lu": {
        "morning": "Gudde Moien",
        "hello": "Moien",
        "excuse": "Entschëllegt",
        "thanks": "Merci",
        "howMuch": "Wéi vill kascht dat?",
    },
    "be": {
        "morning": "Goedemorgen",
        "hello": "Hallo",
        "excuse": "Pardon",
        "thanks": "Dank u wel",
        "howMuch": "Hoeveel kost het?",
    },
    "no": {
        "morning": "God morgen",
        "hello": "Hei",
        "excuse": "Unnskyld",
        "thanks": "Takk",
        "howMuch": "Hvor mye koster det?",
    },
    "fi": {
        "morning": "Hyvää huomenta",
        "hello": "Hei",
        "excuse": "Anteeksi",
        "thanks": "Kiitos",
        "howMuch": "Paljonko tämä maksaa?",
    },
    "se": {
        "morning": "God morgon",
        "hello": "Hej",
        "excuse": "Ursäkta",
        "thanks": "Tack",
        "howMuch": "Hur mycket kostar det?",
    },
    "dk": {
        "morning": "Godmorgen",
        "hello": "Hej",
        "excuse": "Undskyld",
        "thanks": "Tak",
        "howMuch": "Hvor meget koster det?",
    },
}


async def synthesize(voice: str, text: str, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    communicate = edge_tts.Communicate(text, voice)
    await communicate.save(str(path))
    print(f"wrote {path.relative_to(ROOT)} ({voice})")


async def main() -> None:
    tasks = []
    for country, lines in PHRASES.items():
        voice = VOICES[country]
        for phrase_id, text in lines.items():
            out = OUT / country / f"{phrase_id}.mp3"
            tasks.append(synthesize(voice, text, out))
    # sequential to avoid rate limits
    for task in tasks:
        await task
        await asyncio.sleep(0.15)


if __name__ == "__main__":
    asyncio.run(main())
