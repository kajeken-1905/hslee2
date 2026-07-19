/** Pick the best available voice for a list of BCP-47 language codes. */
export function pickVoice(speechLangs: string[]): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null
  const voices = window.speechSynthesis.getVoices()
  if (!voices.length) return null

  for (const code of speechLangs) {
    const lower = code.toLowerCase()
    const exact = voices.find((v) => v.lang.toLowerCase() === lower)
    if (exact) return exact
    const prefix = lower.split('-')[0]
    const byPrefix = voices.find((v) => v.lang.toLowerCase().startsWith(prefix))
    if (byPrefix) return byPrefix
  }
  return null
}

export function speakText(text: string, speechLangs: string[]): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) return

  const utter = new SpeechSynthesisUtterance(text)
  utter.lang = speechLangs[0] ?? 'en'
  const voice = pickVoice(speechLangs)
  if (voice) {
    utter.voice = voice
    utter.lang = voice.lang
  }
  utter.rate = 0.95

  window.speechSynthesis.cancel()
  // Some browsers need voices to load asynchronously
  const voices = window.speechSynthesis.getVoices()
  if (!voices.length) {
    window.speechSynthesis.addEventListener(
      'voiceschanged',
      () => {
        const v = pickVoice(speechLangs)
        if (v) {
          utter.voice = v
          utter.lang = v.lang
        }
        window.speechSynthesis.cancel()
        window.speechSynthesis.speak(utter)
      },
      { once: true },
    )
  }
  window.speechSynthesis.speak(utter)
}
