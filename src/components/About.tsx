export default function About() {
  return (
    <section className="section light" id="about">
      <div className="section-inner">
        <div className="about-grid">
          <div className="fade-up">
            <div className="s-tag" style={{ fontFamily: 'var(--fd)' }}>Who We Are</div>
            <h2 className="s-title" style={{ fontFamily: 'var(--fd)' }}>
              Engineering the Future of{' '}
              <span style={{ color: 'var(--td)' }}>Automation</span>
            </h2>
            <div className="about-text">
              <p>
                Welcome to <strong>Om Sai Electrical</strong>, an ISO 9001:2015 certified company and your
                trusted partner in industrial automation with nearly <strong>20 years of expertise</strong>.
                As an authorized channel partner of ABB, we provide top-tier solutions in VFDs, PLCs,
                servo drives, and switchgears.
              </p>
              <p>
                We specialize in <strong>custom automation panels</strong> and comprehensive PLC &amp; SCADA
                services — helping businesses across India enhance efficiency, reduce downtime, and achieve
                precision control.
              </p>
              <p>
                With a <strong>10,000 sq. ft. facility</strong> in MIDC featuring in-house MS &amp; SS
                fabrication, we deliver complete automation from concept to commissioning.
              </p>
            </div>
            <div className="stats-row stagger">
              <div className="stat-card fade-up">
                <div className="stat-n" style={{ fontFamily: 'var(--fd)' }}>20+</div>
                <div className="stat-l">Years Experience</div>
              </div>
              <div className="stat-card fade-up">
                <div className="stat-n" style={{ fontFamily: 'var(--fd)' }}>100+</div>
                <div className="stat-l">Projects Done</div>
              </div>
              <div className="stat-card fade-up">
                <div className="stat-n" style={{ fontFamily: 'var(--fd)' }}>50+</div>
                <div className="stat-l">Enterprise Clients</div>
              </div>
            </div>
          </div>

          <div className="about-visual fade-right">
            <div className="about-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Pharma%20company%20water%20distributor%20panel2.jpg"
                alt="Pharma Control Panel Interior"
              />
              <div className="about-img-grad" />
              <div className="hmi-card">
                <div className="hmi-header">
                  <div className="hmi-live">
                    <span className="hmi-live-dot" />
                    System Active
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <div className="hmi-metrics">
                  <div>
                    <div className="hm-lbl">Uptime</div>
                    <div className="hm-val">99.9%</div>
                  </div>
                  <div>
                    <div className="hm-lbl">Load</div>
                    <div className="hm-val">42%</div>
                  </div>
                  <div>
                    <div className="hm-lbl">Status</div>
                    <div className="hm-val ok">Optimal</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-glow" />
          </div>
        </div>
      </div>
    </section>
  )
}
