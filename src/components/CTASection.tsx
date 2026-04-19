export default function CTASection() {
  return (
    <div className="cta-wrap" id="contact">
      <div className="cta-card">
        <div className="cta-inner">
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 className="cta-title" style={{ fontFamily: 'var(--fd)' }}>
              Ready to upgrade your systems?
            </h3>
            <p className="cta-sub">
              Connect with our engineering team for a free consultation and project assessment.
            </p>
          </div>
          <div className="cta-btns">
            <a href="mailto:omsaielectrical4685@gmail.com" className="btn-primary" style={{ fontFamily: 'var(--fd)' }}>
              Contact Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="tel:+919867977353" className="btn-secondary" style={{ fontFamily: 'var(--fd)' }}>
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
