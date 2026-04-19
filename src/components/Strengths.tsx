const STRENGTHS = [
  '20+ Years of Expertise in industrial automation across diverse sectors.',
  'ABB Authorized Channel Partner for PLCs, VFDs, Servo Drives & Switchgears.',
  '10,000 sq. ft. MIDC facility with full in-house MS & SS fabrication capability.',
  'Skilled Technical Team ensuring reliable, high-performance automation systems.',
  'Seamless integration with existing workflows and legacy systems.',
  'Innovative, Future-Ready Solutions using the latest industry technologies.',
  'Commitment to Quality and long-term client support post-commissioning.',
]

const ZapIcon = () => (
  <svg className="str-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

export default function Strengths() {
  return (
    <section className="section" style={{ background: 'var(--c)' }}>
      <div className="section-inner">
        <div className="str-grid">
          <div className="str-img fade-left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Soap%20line%20automation%20plant2.jpg"
              alt="Engineering Team at Work"
            />
          </div>

          <div className="fade-right">
            <div className="s-tag" style={{ fontFamily: 'var(--fd)' }}>Why Choose Us</div>
            <h2 className="s-title" style={{ fontFamily: 'var(--fd)' }}>
              Our Key <em style={{ fontStyle: 'normal', color: 'var(--t)' }}>Strengths</em>
            </h2>
            <div className="str-list">
              {STRENGTHS.map((s) => (
                <div key={s} className="str-item">
                  <ZapIcon />
                  <span className="str-text">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
