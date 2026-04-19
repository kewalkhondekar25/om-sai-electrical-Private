'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const SLIDES = [
  {
    img: '/images/AC%20drum%20manufacturing%20system%20machine%20and%20automation.jpg',
    alt: 'AC Drum Automation',
    title: 'Industrial<br/><em>Automation</em><br/>Redefined.',
    sub: "20+ years of expertise delivering VFDs, PLCs, SCADA systems, and custom control panels for India's most demanding industries.",
  },
  {
    img: '/images/Pharma%20company%20water%20distributor%20panel.jpg',
    alt: 'Pharma Panel',
    title: 'Precision <em>Control</em><br/>Systems Built<br/>to Last.',
    sub: 'From pharmaceutical GMP panels to food-grade automation — engineered for reliability, compliance and long-term performance.',
  },
  {
    img: '/images/Soap%20line%20automation%20plant1.jpg',
    alt: 'Soap Line Automation',
    title: '<em>End-to-End</em><br/>Automation<br/>Solutions.',
    sub: 'Concept to commissioning — we design, build, program, and commission complete automation systems.',
  },
  {
    img: '/images/BA%20gallery%20fire%20training%20system.jpg',
    alt: 'Fire Training System',
    title: 'Custom <em>Control</em><br/>Panels for<br/>Every Industry.',
    sub: 'Bespoke ABB-powered panels crafted in our 10,000 sq. ft. MIDC facility with full in-house fabrication.',
  },
]

export default function Hero() {
  const [cur, setCur] = useState(0)
  const [titleHtml, setTitleHtml] = useState(SLIDES[0].title)
  const [subText, setSubText] = useState(SLIDES[0].sub)
  const [titleVisible, setTitleVisible] = useState(true)
  const imgRefs = useRef<(HTMLImageElement | null)[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  function goSlide(n: number) {
    const next = (n + SLIDES.length) % SLIDES.length
    // Reset Ken Burns on the next slide's image
    const img = imgRefs.current[next]
    if (img) {
      img.style.animation = 'none'
      void img.offsetWidth // reflow
      img.style.animation = ''
    }
    setCur(next)
    setTitleVisible(false)
    setTimeout(() => {
      setTitleHtml(SLIDES[next].title)
      setSubText(SLIDES[next].sub)
      setTitleVisible(true)
    }, 300)
  }

  function startTimer() {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCur((prev) => {
        const next = (prev + 1) % SLIDES.length
        goSlide(next)
        return prev // goSlide handles the update
      })
    }, 5500)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="hero">
      <div className="hero-slides">
        {SLIDES.map((slide, i) => (
          <div key={i} className={`hero-slide${i === cur ? ' active' : ''}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={(el) => { imgRefs.current[i] = el }}
              src={slide.img}
              alt={slide.alt}
            />
          </div>
        ))}
      </div>
      <div className="hero-grad" />
      <div className="hero-grad2" />
      <div className="hero-dot-grid" />

      <div className="hero-content">
        <div className="hero-eyebrow" style={{ fontFamily: 'var(--fd)' }}>
          <span className="eyebrow-dot" />
          ABB Authorized Channel Partner
        </div>
        <h1
          className="hero-title"
          style={{
            fontFamily: 'var(--fd)',
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'none' : 'translateY(14px)',
          }}
          dangerouslySetInnerHTML={{ __html: titleHtml }}
        />
        <p
          className="hero-sub"
          style={{ opacity: titleVisible ? 1 : 0 }}
        >
          {subText}
        </p>
        <div className="hero-btns">
          <Link href="/projects" className="btn-primary" style={{ fontFamily: 'var(--fd)' }}>
            View Our Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <Link href="/#about" className="btn-ghost" style={{ fontFamily: 'var(--fd)' }}>
            Our Story
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="hero-dots">
        {SLIDES.map((_, i) => (
          <div
            key={i}
            className={`hdot${i === cur ? ' active' : ''}`}
            onClick={() => { goSlide(i); startTimer() }}
          />
        ))}
      </div>

      <div className="hero-scroll-hint" style={{ fontFamily: 'var(--fd)' }}>
        <div className="scroll-line" />
        Scroll
      </div>
    </section>
  )
}
