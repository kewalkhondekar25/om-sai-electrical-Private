'use client'

import { useState } from 'react'
import Link from 'next/link'

interface NavbarProps {
  activePage?: 'home' | 'projects'
}

export default function Navbar({ activePage = 'home' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="logo-pill">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-cropped.png"
              alt="Om Sai Electrical"
              style={{ height: 40, width: 'auto', maxWidth: 200, objectFit: 'contain', display: 'block' }}
            />
          </Link>

          <ul className="nav-links" style={{ fontFamily: 'var(--fd)' }}>
            <li><Link href="/" className={activePage === 'home' ? 'active' : ''}>Home</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/projects" className={activePage === 'projects' ? 'active' : ''}>Projects</Link></li>
            <li><Link href="/#industries">Industries</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>

          <div className="nav-right">
            <div className="abb-badge">
              <span className="abb-badge-label" style={{ fontFamily: 'var(--fd)' }}>Authorized</span>
              <span className="abb-badge-name" style={{ fontFamily: 'var(--fd)' }}>ABB</span>
              <span className="abb-badge-label" style={{ fontFamily: 'var(--fd)', marginTop: 1 }}>Partner</span>
            </div>
            <a href="mailto:omsaielectrical4685@gmail.com" className="btn-nav" style={{ fontFamily: 'var(--fd)' }}>
              Get in Touch
            </a>
          </div>

          <button className="hamburger" onClick={() => setIsOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${isOpen ? ' open' : ''}`} style={{ fontFamily: 'var(--fd)' }}>
        <button className="mob-close" onClick={() => setIsOpen(false)}>✕</button>
        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/#about" onClick={() => setIsOpen(false)}>About</Link>
        <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link href="/#industries" onClick={() => setIsOpen(false)}>Industries</Link>
        <Link href="/#contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </>
  )
}
