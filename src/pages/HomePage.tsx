import { LanguageToggle } from '../components/LanguageToggle'
import { ChecklistSection, Field } from '../components/ChecklistSection'
import { YesNoSelect } from '../components/YesNoSelect'
import { useLanguage } from '../contexts/LanguageContext'
import { useTravelChecklist } from '../hooks/useTravelChecklist'
import { cities } from '../data/cities'
import { t } from '../i18n/ui'
import {
  EURAIL_APP_URL,
  MAX_TRAVELERS,
  type FlightInfo,
  type TravelerInfo,
} from '../types/checklist'

function cityLabel(ko: string, en: string, native: string): string {
  const parts: string[] = []
  for (const part of [ko, en, native]) {
    if (part && !parts.includes(part)) parts.push(part)
  }
  return parts.join(' · ')
}

function FlightFields({
  value,
  onChange,
}: {
  value: FlightInfo
  onChange: (patch: Partial<FlightInfo>) => void
}) {
  const { lang } = useLanguage()

  return (
    <div className="checklist-grid">
      <Field label={t('flightDate', lang)}>
        <input
          type="date"
          className="checklist-input"
          value={value.date}
          onChange={(e) => onChange({ date: e.target.value })}
        />
      </Field>
      <Field label={t('airport', lang)}>
        <input
          className="checklist-input"
          value={value.airport}
          onChange={(e) => onChange({ airport: e.target.value })}
          placeholder={lang === 'ko' ? '예: ICN, AMS' : 'e.g. ICN, AMS'}
        />
      </Field>
      <Field label={t('terminal', lang)}>
        <input
          className="checklist-input"
          value={value.terminal}
          onChange={(e) => onChange({ terminal: e.target.value })}
          placeholder={lang === 'ko' ? '예: T1, T2' : 'e.g. T1, T2'}
        />
      </Field>
      <Field label={t('airline', lang)}>
        <input
          className="checklist-input"
          value={value.airline}
          onChange={(e) => onChange({ airline: e.target.value })}
        />
      </Field>
      <Field label={t('flightNumber', lang)}>
        <input
          className="checklist-input"
          value={value.flightNumber}
          onChange={(e) => onChange({ flightNumber: e.target.value })}
          placeholder={lang === 'ko' ? '예: KE925' : 'e.g. KE925'}
        />
      </Field>
      <Field label={t('boardingTime', lang)}>
        <input
          type="time"
          className="checklist-input"
          value={value.boardingTime}
          onChange={(e) => onChange({ boardingTime: e.target.value })}
        />
      </Field>
    </div>
  )
}

function TravelerBlock({
  traveler,
  index,
  onName,
  onPassport,
  onEurail,
  onFlight,
}: {
  traveler: TravelerInfo
  index: number
  onName: (name: string) => void
  onPassport: (patch: Partial<TravelerInfo['passport']>) => void
  onEurail: (patch: Partial<TravelerInfo['eurail']>) => void
  onFlight: (key: 'outbound' | 'inbound', patch: Partial<FlightInfo>) => void
}) {
  const { lang } = useLanguage()
  const title = `${t('traveler', lang)} ${index + 1}`

  return (
    <ChecklistSection
      step={index + 2}
      title={title}
      collapsible
      defaultOpen={false}
      summary={traveler.name || undefined}
    >
      <div className="checklist-grid">
        <Field label={t('travelerName', lang)}>
          <input
            className="checklist-input"
            value={traveler.name}
            onChange={(e) => onName(e.target.value)}
            placeholder={lang === 'ko' ? '이름 (선택)' : 'Name (optional)'}
          />
        </Field>
      </div>

      <div className="traveler-subblock">
        <h3 className="traveler-subtitle">{t('passportInfo', lang)}</h3>
        <div className="checklist-grid">
          <Field label={t('prepared', lang)}>
            <YesNoSelect
              value={traveler.passport.ready}
              onChange={(ready) => onPassport({ ready })}
            />
          </Field>
          <Field label={t('passportNumber', lang)}>
            <input
              className="checklist-input"
              value={traveler.passport.number}
              onChange={(e) => onPassport({ number: e.target.value })}
              autoComplete="off"
            />
          </Field>
          <Field label={t('passportExpiry', lang)}>
            <input
              type="date"
              className="checklist-input"
              value={traveler.passport.expiry}
              onChange={(e) => onPassport({ expiry: e.target.value })}
            />
          </Field>
          <Field label={t('notes', lang)}>
            <input
              className="checklist-input"
              value={traveler.passport.notes}
              onChange={(e) => onPassport({ notes: e.target.value })}
            />
          </Field>
        </div>
      </div>

      <div className="traveler-subblock">
        <h3 className="traveler-subtitle">{t('eurailInfo', lang)}</h3>
        <div className="checklist-grid">
          <Field label={t('eurailReserved', lang)}>
            <YesNoSelect
              value={traveler.eurail.reserved}
              onChange={(reserved) => onEurail({ reserved })}
            />
          </Field>
          <Field label={t('notes', lang)}>
            <input
              className="checklist-input"
              value={traveler.eurail.notes}
              onChange={(e) => onEurail({ notes: e.target.value })}
            />
          </Field>
        </div>
        <a
          className="checklist-shortcut"
          href={EURAIL_APP_URL}
          target="_blank"
          rel="noreferrer"
        >
          {t('openEurailApp', lang)}
        </a>
      </div>

      <div className="traveler-subblock">
        <h3 className="traveler-subtitle">{t('outboundFlight', lang)}</h3>
        <FlightFields
          value={traveler.outbound}
          onChange={(patch) => onFlight('outbound', patch)}
        />
      </div>

      <div className="traveler-subblock">
        <h3 className="traveler-subtitle">{t('inboundFlight', lang)}</h3>
        <FlightFields
          value={traveler.inbound}
          onChange={(patch) => onFlight('inbound', patch)}
        />
      </div>
    </ChecklistSection>
  )
}

export function HomePage() {
  const { lang } = useLanguage()
  const {
    data,
    setTravelerCount,
    updateTraveler,
    updatePassport,
    updateEurail,
    updateFlight,
    updateCity,
    addCity,
    removeCity,
    reset,
  } = useTravelChecklist()

  const cityOptions = cities.map((c) => ({
    id: c.id,
    label: cityLabel(c.name.ko, c.name.en, c.nativeName),
  }))

  const cityStartStep = 2 + data.travelers.length

  return (
    <>
      <header className="top-bar">
        <div>
          <h1>{t('appTitle', lang)}</h1>
          <p>{t('checklistSubtitle', lang)}</p>
        </div>
        <LanguageToggle />
      </header>

      <p className="phase-note">{t('checklistHint', lang)}</p>

      <div className="checklist">
        <ChecklistSection step={1} title={t('travelerCount', lang)}>
          <Field label={t('partySize', lang)}>
            <select
              className="checklist-select"
              value={data.travelerCount}
              onChange={(e) => setTravelerCount(Number(e.target.value))}
            >
              {Array.from({ length: MAX_TRAVELERS }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n}
                  {lang === 'ko' ? '명' : n === 1 ? ' person' : ' people'}
                </option>
              ))}
            </select>
          </Field>
          <p className="checklist-help">{t('travelerCountHint', lang)}</p>
        </ChecklistSection>

        {data.travelers.map((traveler, index) => (
          <TravelerBlock
            key={traveler.id}
            traveler={traveler}
            index={index}
            onName={(name) => updateTraveler(traveler.id, { name })}
            onPassport={(patch) => updatePassport(traveler.id, patch)}
            onEurail={(patch) => updateEurail(traveler.id, patch)}
            onFlight={(key, patch) => updateFlight(traveler.id, key, patch)}
          />
        ))}

        {data.cities.map((trip, index) => (
          <ChecklistSection
            key={trip.id}
            step={cityStartStep + index}
            title={`${t('travelCity', lang)} ${index + 1}`}
          >
            <div className="checklist-grid">
              <Field label={t('city', lang)}>
                <select
                  className="checklist-select"
                  value={trip.cityId}
                  onChange={(e) => {
                    const cityId = e.target.value
                    const found = cities.find((c) => c.id === cityId)
                    updateCity(trip.id, {
                      cityId,
                      cityName: found ? found.name[lang] : '',
                    })
                  }}
                >
                  <option value="">{t('selectCity', lang)}</option>
                  {cityOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label={t('fromDate', lang)}>
                <input
                  type="date"
                  className="checklist-input"
                  value={trip.fromDate}
                  onChange={(e) => updateCity(trip.id, { fromDate: e.target.value })}
                />
              </Field>
              <Field label={t('toDate', lang)}>
                <input
                  type="date"
                  className="checklist-input"
                  value={trip.toDate}
                  onChange={(e) => updateCity(trip.id, { toDate: e.target.value })}
                />
              </Field>
              <Field label={t('lodging', lang)}>
                <input
                  className="checklist-input"
                  value={trip.lodging}
                  onChange={(e) => updateCity(trip.id, { lodging: e.target.value })}
                  placeholder={lang === 'ko' ? '호텔 / 에어비앤비' : 'Hotel / Airbnb'}
                />
              </Field>
              <Field label={t('cityTransport', lang)}>
                <input
                  className="checklist-input"
                  value={trip.transport}
                  onChange={(e) => updateCity(trip.id, { transport: e.target.value })}
                  placeholder={
                    lang === 'ko' ? '기차 / 항공 / 버스' : 'Train / flight / bus'
                  }
                />
              </Field>
            </div>
            {data.cities.length > 1 ? (
              <button
                type="button"
                className="checklist-remove"
                onClick={() => removeCity(trip.id)}
              >
                {t('removeCity', lang)}
              </button>
            ) : null}
          </ChecklistSection>
        ))}

        <div className="checklist-actions">
          <button
            type="button"
            className="checklist-add"
            onClick={addCity}
            disabled={data.cities.length >= 10}
          >
            + {t('addCity', lang)}
          </button>
          <button type="button" className="checklist-reset" onClick={reset}>
            {t('resetChecklist', lang)}
          </button>
        </div>
      </div>
    </>
  )
}
