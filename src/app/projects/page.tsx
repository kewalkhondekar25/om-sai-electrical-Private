'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import TopBar from '../../components/TopBar'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ScrollAnimations from '../../components/ScrollAnimations'

interface ProjectMeta { l: string; v: string }

interface Project {
  id: string
  title: string
  cat: string
  catLabel: string
  images: string[]
  excerpt: string
  desc: string
  meta: ProjectMeta[]
  tags: string[]
}

const PROJECTS: Project[] = [
  {
    id: 'soap-line',
    title: 'Soap Line Automation',
    cat: 'fmcg',
    catLabel: 'FMCG Automation',
    images: [
      '/images/Soap%20line%20automation%20plant1.jpg',
      '/images/Soap%20line%20automation%20plant2.jpg',
      '/images/Soap%20line%20automation%20plant3.jpg',
    ],
    excerpt:
      'Advanced soap line automation for streamlined manufacturing — PLC-controlled mixing, extrusion, cutting, and packaging with HMI monitoring.',
    desc: 'We provide advanced soap line automation solutions designed to streamline soap manufacturing processes with high efficiency and precision. Our systems are integrated with PLC automation panels to control mixing, extrusion, cutting, and packaging operations seamlessly. With HMI-based monitoring and control, our automation solutions ensure consistent product quality, reduced manual intervention, and improved production speed. Custom soap manufacturing automation systems tailored to meet the needs of small to large-scale industries.',
    meta: [
      { l: 'Sector', v: 'FMCG' },
      { l: 'Technology', v: 'ABB PLC + VFD' },
      { l: 'Scope', v: 'Full Line' },
    ],
    tags: ['ABB PLC', 'VFD', 'HMI Touchscreen', 'SCADA', 'Batch Control', 'Packaging Automation'],
  },
  {
    id: 'pharma-water',
    title: 'Pharma Water Distribution System',
    cat: 'pharmaceutical',
    catLabel: 'Pharmaceutical',
    images: [
      '/images/Pharma%20company%20water%20distributor%20panel.jpg',
      '/images/Pharma%20company%20water%20distributor%20panel2.jpg',
    ],
    excerpt:
      'Advanced pharma water distribution system meeting strict pharmaceutical standards for purity, hygiene, and reliability — PW, WFI and purified water loops.',
    desc: 'We provide advanced pharma water distribution systems designed to meet strict pharmaceutical industry standards for purity, hygiene, and reliability. Our systems are integrated with PLC automation panels to ensure precise control, continuous monitoring, and consistent water quality. Our solutions support PW, WFI, and purified water distribution, featuring automated flow control, real-time monitoring, and HMI-based operation. Custom-built water distribution systems for pharmaceutical and biotech industries across India.',
    meta: [
      { l: 'Sector', v: 'Pharma / Biotech' },
      { l: 'Standard', v: 'GMP Compliant' },
      { l: 'Water Types', v: 'PW · WFI' },
    ],
    tags: ['GMP Compliant', 'PLC Automation', 'HMI Control', 'Real-Time Monitoring', 'Flow Control', 'WFI System'],
  },
  {
    id: 'vfd-panels',
    title: 'VFD Control Panels',
    cat: 'manufacturing',
    catLabel: 'Manufacturing',
    images: [
      '/images/AC%20drum%20manufacturing%20system%20machine%20and%20automation.jpg',
      '/images/AC%20drum%20manufacturing%20system%20machine%20and%20automation2.jpg',
      '/images/AC%20drum%20manufacturing%20system%20machine%20and%20automation3.jpg',
    ],
    excerpt:
      'High-performance VFD control panels for efficient motor speed control and energy optimization — variable speed control, overload protection, and HMI monitoring.',
    desc: 'We provide high-performance VFD control panels designed for efficient motor speed control and energy optimization across industrial applications. Our panels are integrated with advanced PLC automation systems to ensure precise control, smooth operation, and reduced power consumption. With features like variable speed control, overload protection, and HMI-based monitoring, our solutions improve equipment lifespan and operational efficiency. Custom-built VFD panels tailored to meet the needs of various industries across India.',
    meta: [
      { l: 'Sector', v: 'Industrial' },
      { l: 'Technology', v: 'ABB VFD + PLC' },
      { l: 'Feature', v: 'Energy Optimized' },
    ],
    tags: ['ABB VFD', 'PLC Automation', 'HMI Monitoring', 'Overload Protection', 'Energy Efficiency', 'Custom Panel'],
  },
  {
    id: 'ba-fire',
    title: 'BA Gallery Fire Training System',
    cat: 'safety',
    catLabel: 'Safety Systems',
    images: [
      '/images/BA%20gallery%20fire%20training%20system.jpg',
      '/images/BA%20gallery%20fire%20training%20system2.jpg',
    ],
    excerpt:
      'Advanced fire training systems for safe, realistic emergency response training — PLC-automated flame control, safety interlocks, and HMI-based monitoring.',
    desc: 'We provide advanced fire training systems designed for safe, realistic, and effective emergency response training. Our systems are integrated with PLC automation panels to simulate real-life fire scenarios with precision and control. Our solutions include automated flame control, safety interlocks, and HMI-based monitoring systems, ensuring a secure and user-friendly training environment. Custom fire training setups for industrial safety, educational institutes, and emergency response teams across India.',
    meta: [
      { l: 'Sector', v: 'Safety & Training' },
      { l: 'Safety', v: 'SIL Interlocked' },
      { l: 'Control', v: 'PLC + HMI' },
    ],
    tags: ['PLC Automation', 'Safety Interlocks', 'HMI Monitoring', 'Flame Control', 'Emergency Training', 'Custom Setup'],
  },
  {
    id: 'perfume-tank',
    title: 'Perfume Tank System',
    cat: 'process',
    catLabel: 'Process Control',
    images: ['/images/Perfume%20tank%20systems2.jpg'],
    excerpt:
      'High-quality perfume tank systems for efficient storage, mixing, and handling of fragrances — PLC-integrated with automated mixing, level monitoring, and HMI control.',
    desc: 'We offer high-quality perfume tank systems designed for efficient storage, mixing, and handling of fragrances. Our systems are integrated with advanced PLC automation panels to ensure precise control, consistency, and safe operations in perfume and cosmetic manufacturing. With features like automated mixing, level monitoring, and HMI-based control, our solutions improve productivity while maintaining product quality. Custom-built perfume tank systems tailored to meet the needs of fragrance and cosmetic industries across India.',
    meta: [
      { l: 'Sector', v: 'Fragrance / FMCG' },
      { l: 'Compliance', v: 'ATEX Zone 2' },
      { l: 'Control', v: 'Batch + HMI' },
    ],
    tags: ['PLC Automation', 'HMI Control', 'Automated Mixing', 'Level Monitoring', 'Batch Processing', 'ATEX Compliant'],
  },
  {
    id: 'cement-spreader',
    title: 'Cement Spreader System',
    cat: 'infrastructure',
    catLabel: 'Infrastructure',
    images: ['/images/cement-spreader-1.jpg', '/images/cement-spreader-2.jpg'],
    excerpt:
      'High-performance cement spreader systems for accurate, uniform material distribution — PLC-automated flow control, speed regulation, and HMI monitoring.',
    desc: 'We offer high-performance cement spreader systems designed for accurate and uniform material distribution in construction and industrial applications. Our systems are integrated with advanced PLC automation panels to ensure precise control, efficient operation, and minimal material wastage. With features like automated flow control, speed regulation, and HMI-based monitoring, our solutions enhance productivity and ensure consistent spreading quality. Custom cement spreading systems tailored to meet diverse project requirements across India.',
    meta: [
      { l: 'Sector', v: 'Infrastructure' },
      { l: 'Enclosure', v: 'IP66 Outdoor' },
      { l: 'Control', v: 'VFD + Remote' },
    ],
    tags: ['ABB VFD', 'PLC Automation', 'HMI Control', 'IP66 Panel', 'Speed Regulation', 'Remote Operation'],
  },
]

const FILTERS = [
  { key: 'all', label: 'All Projects' },
  { key: 'manufacturing', label: 'Manufacturing' },
  { key: 'pharmaceutical', label: 'Pharmaceutical' },
  { key: 'fmcg', label: 'FMCG' },
  { key: 'safety', label: 'Safety Systems' },
  { key: 'process', label: 'Process Control' },
  { key: 'infrastructure', label: 'Infrastructure' },
]

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
)

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')
  const [modal, setModal] = useState<Project | null>(null)
  const [gIdx, setGIdx] = useState(0)
  const [imgVisible, setImgVisible] = useState(true)
  const imgRef = useRef<HTMLImageElement | null>(null)

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.cat === filter)

  const openModal = useCallback((id: string) => {
    const p = PROJECTS.find((x) => x.id === id)
    if (p) { setModal(p); setGIdx(0); document.body.style.overflow = 'hidden' }
  }, [])

  const closeModal = useCallback(() => {
    setModal(null)
    document.body.style.overflow = ''
  }, [])

  function gGo(i: number) {
    if (!modal) return
    const next = (i + modal.images.length) % modal.images.length
    setImgVisible(false)
    setTimeout(() => { setGIdx(next); setImgVisible(true) }, 170)
  }

  // Handle URL hash on load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash)
        if (el) el.scrollIntoView({ block: 'center' })
        const p = PROJECTS.find((x) => x.id === hash)
        if (p) openModal(hash)
      }, 600)
    }
  }, [openModal])

  // Close modal on Escape / arrow keys
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!modal) return
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowRight') gGo(gIdx + 1)
      if (e.key === 'ArrowLeft') gGo(gIdx - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal, gIdx])

  return (
    <>
      <ScrollAnimations />
      <TopBar />
      <Navbar activePage="projects" />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div className="breadcrumb" style={{ fontFamily: 'var(--fd)' }}>
            <Link href="/">Home</Link>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
            Projects
          </div>
          <div className="s-tag" style={{ fontFamily: 'var(--fd)' }}>Portfolio</div>
          <h1 className="page-title" style={{ fontFamily: 'var(--fd)' }}>
            Our <em>Projects</em>
          </h1>
          <p className="page-sub">
            From pharmaceutical GMP panels to full manufacturing-line automation — each project
            engineered with precision and built to last.
          </p>
          <div className="page-stats">
            <div className="pstat">
              <div className="pstat-n" style={{ fontFamily: 'var(--fd)' }}>100+</div>
              <div className="pstat-l" style={{ fontFamily: 'var(--fd)' }}>Projects Done</div>
            </div>
            <div className="pstat">
              <div className="pstat-n" style={{ fontFamily: 'var(--fd)' }}>6</div>
              <div className="pstat-l" style={{ fontFamily: 'var(--fd)' }}>Sectors Covered</div>
            </div>
            <div className="pstat">
              <div className="pstat-n" style={{ fontFamily: 'var(--fd)' }}>20+</div>
              <div className="pstat-l" style={{ fontFamily: 'var(--fd)' }}>Years Delivering</div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="filter-bar">
        <div className="filter-inner">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`fbtn${filter === f.key ? ' active' : ''}`}
              onClick={() => setFilter(f.key)}
              style={{ fontFamily: 'var(--fd)' }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* PROJECTS GRID */}
      <section className="proj-section">
        <div className="proj-inner">
          <div className="projects-grid">
            {filtered.map((p, i) => (
              <div
                key={p.id}
                id={p.id}
                className="pcard pcard-anim"
                style={{ animationDelay: `${i * 0.07}s` }}
                onClick={() => openModal(p.id)}
              >
                <div className="pcard-img" style={{ height: 236 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.images[0]} alt={p.title} loading="lazy" />
                  <div className="pcard-img-ov" />
                  <div className="pcard-badge" style={{ fontFamily: 'var(--fd)' }}>{p.catLabel}</div>
                  <div className="pcard-num" style={{ fontFamily: 'var(--fd)' }}>0{i + 1}</div>
                </div>
                <div className="pcard-body-sm">
                  <div className="pcard-title" style={{ fontFamily: 'var(--fd)' }}>{p.title}</div>
                  <p className="pcard-excerpt">{p.excerpt}</p>
                  <div className="ptags" style={{ marginBottom: 16 }}>
                    {p.tags.slice(0, 4).map((t) => (
                      <span key={t} className="ptag" style={{ fontFamily: 'var(--fd)' }}>{t}</span>
                    ))}
                  </div>
                  <div className="pcard-footer-sm">
                    <span style={{ fontFamily: 'var(--fd)' }}>View Details</span>
                    <ArrowIcon />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-wrap" style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="cta-card">
          <div className="cta-inner">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 className="cta-title" style={{ fontFamily: 'var(--fd)' }}>Have a project in mind?</h3>
              <p className="cta-sub">
                Tell us your requirements — our engineers will design the perfect automation solution.
              </p>
            </div>
            <div className="cta-btns">
              <a href="mailto:omsaielectrical4685@gmail.com" className="btn-primary" style={{ fontFamily: 'var(--fd)' }}>
                Start a Project
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="tel:+919867977353" className="btn-secondary" style={{ fontFamily: 'var(--fd)' }}>Call Us</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* MODAL */}
      <div
        className={`modal-overlay${modal ? ' open' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
      >
        {modal && (
          <div className="modal">
            <button className="modal-close" onClick={closeModal}>✕</button>

            {/* Gallery */}
            <div className="mgallery">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={imgRef}
                src={modal.images[gIdx]}
                alt={modal.title}
                style={{ opacity: imgVisible ? 1 : 0 }}
              />
              {modal.images.length > 1 && (
                <>
                  <div className="mgdots">
                    {modal.images.map((_, i) => (
                      <div
                        key={i}
                        className={`mgdot${i === gIdx ? ' active' : ''}`}
                        onClick={() => gGo(i)}
                      />
                    ))}
                  </div>
                  <div className="mgallery-nav">
                    <button className="mgbtn" onClick={() => gGo(gIdx - 1)}>‹</button>
                    <button className="mgbtn" onClick={() => gGo(gIdx + 1)}>›</button>
                  </div>
                </>
              )}
            </div>

            {/* Body */}
            <div className="modal-body">
              <div className="modal-cat" style={{ fontFamily: 'var(--fd)' }}>{modal.catLabel}</div>
              <h2 className="modal-title" style={{ fontFamily: 'var(--fd)' }}>{modal.title}</h2>
              <p className="modal-desc">{modal.desc}</p>
              <div className="modal-meta">
                {modal.meta.map((m) => (
                  <div key={m.l}>
                    <span className="mm-label" style={{ fontFamily: 'var(--fd)' }}>{m.l}</span>
                    <span className="mm-value" style={{ fontFamily: 'var(--fd)' }}>{m.v}</span>
                  </div>
                ))}
              </div>
              <div className="modal-tags">
                {modal.tags.map((t) => (
                  <span key={t} className="ptag" style={{ fontFamily: 'var(--fd)', fontSize: 12, padding: '5px 12px' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
