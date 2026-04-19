import Link from 'next/link'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
)

const PROJECTS = [
  {
    href: '/projects#soap-line',
    img: '/images/Soap%20line%20automation%20plant1.jpg',
    alt: 'Soap Line Automation',
    badge: 'FMCG',
    title: 'Soap Line Automation',
    excerpt:
      'PLC-controlled mixing, extrusion, cutting, and packaging — HMI-monitored for consistent quality and improved production speed.',
    tags: ['ABB PLC', 'VFD', 'HMI', 'Batch Control'],
  },
  {
    href: '/projects#pharma-water',
    img: '/images/Pharma%20company%20water%20distributor%20panel.jpg',
    alt: 'Pharma Water Distribution',
    badge: 'Pharmaceutical',
    title: 'Pharma Water Distribution System',
    excerpt:
      'GMP-compliant PW & WFI distribution system with automated flow control, real-time monitoring, and HMI-based operation.',
    tags: ['GMP', 'PLC', 'WFI System', 'HMI'],
  },
  {
    href: '/projects#vfd-panels',
    img: '/images/AC%20drum%20manufacturing%20system%20machine%20and%20automation.jpg',
    alt: 'VFD Control Panels',
    badge: 'Manufacturing',
    title: 'VFD Control Panels',
    excerpt:
      'High-performance ABB VFD panels for motor speed control and energy optimization — variable speed, overload protection, HMI monitoring.',
    tags: ['ABB VFD', 'PLC', 'Energy Saving'],
  },
]

export default function FeaturedProjects() {
  return (
    <section className="section" style={{ background: 'var(--cl)' }}>
      <div className="section-inner">
        <div className="proj-header">
          <div className="fade-up">
            <div className="s-tag" style={{ fontFamily: 'var(--fd)' }}>Our Work</div>
            <h2 className="s-title" style={{ fontFamily: 'var(--fd)', marginBottom: 0 }}>
              Featured <em style={{ fontStyle: 'normal', color: 'var(--t)' }}>Projects</em>
            </h2>
          </div>
          <Link href="/projects" className="btn-ghost fade-up" style={{ fontFamily: 'var(--fd)', flexShrink: 0 }}>
            View All Projects
            <ArrowIcon />
          </Link>
        </div>

        <div className="proj-grid stagger">
          {PROJECTS.map((p) => (
            <Link key={p.href} href={p.href} className="pcard fade-up">
              <div className="pcard-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.alt} />
                <div className="pcard-img-overlay" />
                <div className="pcard-badge" style={{ fontFamily: 'var(--fd)' }}>{p.badge}</div>
              </div>
              <div className="pcard-body">
                <div className="pcard-title" style={{ fontFamily: 'var(--fd)' }}>{p.title}</div>
                <p className="pcard-excerpt">{p.excerpt}</p>
                <div className="ptags">
                  {p.tags.map((t) => (
                    <span key={t} className="ptag" style={{ fontFamily: 'var(--fd)' }}>{t}</span>
                  ))}
                </div>
                <div className="pcard-footer">
                  <span style={{ fontFamily: 'var(--fd)' }}>View Project</span>
                  <ArrowIcon />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
