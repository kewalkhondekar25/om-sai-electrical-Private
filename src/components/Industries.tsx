const INDUSTRIES = [
  'Food & Beverage',
  'Water & Wastewater',
  'Chemical Processing',
  'Packaging Systems',
  'Pharmaceuticals',
  'Marine & Offshore',
  'Cranes & Hoists',
  'Metals & Mining',
  'Textile Manufacturing',
  'HVACR Solutions',
  'Rubber & Plastics',
  'Infrastructure',
]

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
)

export default function Industries() {
  return (
    <section className="section light" id="industries">
      <div className="section-inner">
        <div className="ind-grid">
          <div className="fade-up">
            <div className="s-tag" style={{ fontFamily: 'var(--fd)' }}>Sectors We Power</div>
            <h2 className="s-title" style={{ fontFamily: 'var(--fd)' }}>
              Industries We <span style={{ color: 'var(--td)' }}>Serve</span>
            </h2>
            <p className="s-sub" style={{ marginBottom: 36 }}>
              From pharmaceuticals to heavy manufacturing, our automation solutions power diverse sectors
              with precision and reliability.
            </p>
            <div className="ind-list">
              {INDUSTRIES.map((ind) => (
                <div key={ind} className="ind-item" style={{ fontFamily: 'var(--fd)' }}>
                  <ArrowIcon />
                  {ind}
                </div>
              ))}
            </div>
          </div>

          <div className="ind-visual fade-right">
            <div className="ind-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/cement-spreader-2.jpg" alt="Cement Spreader Automation" />
              <div className="ind-img-grad" />
              <div className="ind-caption">
                <p>
                  Powering diverse sectors with{' '}
                  <em>precision automation.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
