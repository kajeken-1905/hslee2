export type PhraseId =
  | 'morning'
  | 'hello'
  | 'excuse'
  | 'thanks'
  | 'howMuch'

export interface PhraseLine {
  id: PhraseId
  ko: string
  native: string
}

export interface CountryPhrases {
  languageLabel: { ko: string; en: string }
  /** BCP-47 codes to try for speechSynthesis (first match wins) */
  speechLangs: string[]
  lines: PhraseLine[]
}

const PHRASE_ORDER: PhraseId[] = ['morning', 'hello', 'excuse', 'thanks', 'howMuch']

const KO_LABELS: Record<PhraseId, string> = {
  morning: '아침 인사',
  hello: '인사',
  excuse: '실례합니다.',
  thanks: '감사합니다.',
  howMuch: '얼마예요?',
}

function lines(native: Record<PhraseId, string>): PhraseLine[] {
  return PHRASE_ORDER.map((id) => ({
    id,
    ko: KO_LABELS[id],
    native: native[id],
  }))
}

/** 국가별 간단 회화 (한글 + 현지 언어) */
export const countryPhrases: Record<string, CountryPhrases> = {
  uk: {
    languageLabel: { ko: '영어', en: 'English' },
    speechLangs: ['en-GB', 'en-US', 'en'],
    lines: lines({
      morning: 'Good morning',
      hello: 'Hello',
      excuse: 'Excuse me',
      thanks: 'Thank you',
      howMuch: 'How much is it?',
    }),
  },
  nl: {
    languageLabel: { ko: '네덜란드어', en: 'Dutch' },
    speechLangs: ['nl-NL', 'nl-BE', 'nl'],
    lines: lines({
      morning: 'Goedemorgen',
      hello: 'Hallo',
      excuse: 'Pardon',
      thanks: 'Dank u wel',
      howMuch: 'Hoeveel kost het?',
    }),
  },
  lu: {
    languageLabel: { ko: '룩셈부르크어', en: 'Luxembourgish' },
    // lb voices are rare — fall back to French / German
    speechLangs: ['lb', 'lb-LU', 'fr-FR', 'fr-LU', 'de-LU', 'de-DE'],
    lines: lines({
      morning: 'Gudde Moien',
      hello: 'Moien',
      excuse: 'Entschëllegt',
      thanks: 'Merci',
      howMuch: 'Wéi vill kascht dat?',
    }),
  },
  be: {
    languageLabel: { ko: '네덜란드어 (벨기에)', en: 'Dutch (Belgium)' },
    speechLangs: ['nl-BE', 'nl-NL', 'nl'],
    lines: lines({
      morning: 'Goedemorgen',
      hello: 'Hallo',
      excuse: 'Pardon',
      thanks: 'Dank u wel',
      howMuch: 'Hoeveel kost het?',
    }),
  },
  no: {
    languageLabel: { ko: '노르웨이어', en: 'Norwegian' },
    speechLangs: ['nb-NO', 'nn-NO', 'no', 'nb'],
    lines: lines({
      morning: 'God morgen',
      hello: 'Hei',
      excuse: 'Unnskyld',
      thanks: 'Takk',
      howMuch: 'Hvor mye koster det?',
    }),
  },
  fi: {
    languageLabel: { ko: '핀란드어', en: 'Finnish' },
    speechLangs: ['fi-FI', 'fi'],
    lines: lines({
      morning: 'Hyvää huomenta',
      hello: 'Hei',
      excuse: 'Anteeksi',
      thanks: 'Kiitos',
      howMuch: 'Paljonko tämä maksaa?',
    }),
  },
  se: {
    languageLabel: { ko: '스웨덴어', en: 'Swedish' },
    speechLangs: ['sv-SE', 'sv'],
    lines: lines({
      morning: 'God morgon',
      hello: 'Hej',
      excuse: 'Ursäkta',
      thanks: 'Tack',
      howMuch: 'Hur mycket kostar det?',
    }),
  },
  dk: {
    languageLabel: { ko: '덴마크어', en: 'Danish' },
    speechLangs: ['da-DK', 'da'],
    lines: lines({
      morning: 'Godmorgen',
      hello: 'Hej',
      excuse: 'Undskyld',
      thanks: 'Tak',
      howMuch: 'Hvor meget koster det?',
    }),
  },
}

export function getCountryPhrases(countryId: string): CountryPhrases | undefined {
  return countryPhrases[countryId]
}
