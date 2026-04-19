const ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: 'ISO 9001:2015',
    sub: 'Certified Quality',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    label: 'ABB Partner',
    sub: 'Authorized Value Provider',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    label: '20+ Years',
    sub: 'Industry Expertise',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    label: '100+ Projects',
    sub: 'Successfully Delivered',
  },
]

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-inner">
        {ITEMS.map((item) => (
          <div key={item.label} className="trust-item">
            <div className="ticon">{item.icon}</div>
            <div>
              <div className="tlabel" style={{ fontFamily: 'var(--fd)' }}>{item.label}</div>
              <div className="tsub">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
