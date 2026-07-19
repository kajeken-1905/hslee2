import { useId, useState, type ReactNode } from 'react'

export function ChecklistSection({
  step,
  title,
  children,
  collapsible = false,
  defaultOpen = true,
  summary,
}: {
  step: number
  title: string
  children: ReactNode
  /** When true, body is hidden until the header is clicked */
  collapsible?: boolean
  defaultOpen?: boolean
  /** Extra text shown in the header when collapsed (e.g. traveler name) */
  summary?: string
}) {
  const [open, setOpen] = useState(defaultOpen)
  const bodyId = useId()

  if (!collapsible) {
    return (
      <section className="checklist-section">
        <header className="checklist-section-head">
          <span className="checklist-step">{step}</span>
          <h2>{title}</h2>
        </header>
        <div className="checklist-section-body">{children}</div>
      </section>
    )
  }

  return (
    <section className={`checklist-section checklist-section--fold${open ? ' is-open' : ''}`}>
      <button
        type="button"
        className="checklist-section-toggle"
        aria-expanded={open}
        aria-controls={bodyId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="checklist-step">{step}</span>
        <span className="checklist-section-toggle-text">
          <span className="checklist-section-toggle-title">{title}</span>
          {!open && summary ? (
            <span className="checklist-section-toggle-summary">{summary}</span>
          ) : null}
        </span>
        <span className="checklist-section-chevron" aria-hidden>
          {open ? '▴' : '▾'}
        </span>
      </button>
      {open ? (
        <div id={bodyId} className="checklist-section-body">
          {children}
        </div>
      ) : null}
    </section>
  )
}

export function Field({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <label className="checklist-field">
      <span className="checklist-field-label">{label}</span>
      {children}
    </label>
  )
}
