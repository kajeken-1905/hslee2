/** Play a pre-recorded native TTS clip; fall back to speechSynthesis if needed. */

import { assetUrl } from './assetUrl'
import { speakText } from './speak'

let current: HTMLAudioElement | null = null

export function playPhraseAudio(
  countryId: string,
  phraseId: string,
  fallbackText: string,
  speechLangs: string[],
): void {
  if (typeof window === 'undefined') return

  window.speechSynthesis?.cancel()
  if (current) {
    current.pause()
    current = null
  }

  const src = assetUrl(`/phrases/${countryId}/${phraseId}.mp3`)
  const audio = new Audio(src)
  current = audio

  audio.addEventListener(
    'error',
    () => {
      if (current === audio) current = null
      speakText(fallbackText, speechLangs)
    },
    { once: true },
  )

  void audio.play().catch(() => {
    if (current === audio) current = null
    speakText(fallbackText, speechLangs)
  })
}
