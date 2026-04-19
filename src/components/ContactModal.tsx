'use client'

import { useState, useEffect } from 'react'

interface Props {
  open: boolean
  onClose: () => void
}

export default function ContactModal({ open, onClose }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const mailto = `mailto:omsaielectrical4685@gmail.com?subject=Enquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setName('')
      setEmail('')
      setMessage('')
      onClose()
    }, 2000)
  }

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 500,
        background: 'rgba(0,0,0,.75)', backdropFilter: 'blur(8px)',
        display: open ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', padding: 24,
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div style={{
        background: 'var(--cl)', border: '1px solid var(--borderl)',
        borderRadius: 24, padding: '40px 36px', width: '100%', maxWidth: 460,
        position: 'relative',
      }}>
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 16, right: 16,
            background: 'rgba(255,255,255,.07)', border: '1px solid var(--border)',
            borderRadius: '50%', width: 32, height: 32, cursor: 'pointer',
            color: 'var(--wdim)', fontSize: 15, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}
        >✕</button>

        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            fontFamily: 'var(--fd)', fontSize: 11, fontWeight: 700,
            letterSpacing: '.14em', textTransform: 'uppercase',
            color: 'var(--t)', marginBottom: 10,
          }}>
            <span style={{ width: 16, height: 2, background: 'var(--t)', borderRadius: 1, display: 'inline-block' }} />
            Get in Touch
          </div>
          <h2 style={{
            fontFamily: 'var(--fd)', fontSize: 24, fontWeight: 800,
            color: 'var(--w)', letterSpacing: '-.03em', margin: 0,
          }}>
            Send us a message
          </h2>
        </div>

        {sent ? (
          <div style={{
            textAlign: 'center', padding: '32px 0',
            fontFamily: 'var(--fd)', color: 'var(--t)', fontSize: 16, fontWeight: 600,
          }}>
            ✓ Opening your email client…
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 12, color: 'var(--g2)', fontFamily: 'var(--fd)', fontWeight: 600, letterSpacing: '.04em' }}>
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                style={{
                  background: 'var(--cs)', border: '1px solid var(--border)',
                  borderRadius: 10, padding: '11px 14px', color: 'var(--w)',
                  fontSize: 14, fontFamily: 'var(--fb)', outline: 'none',
                  transition: 'border-color .2s',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(245,158,11,.4)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 12, color: 'var(--g2)', fontFamily: 'var(--fd)', fontWeight: 600, letterSpacing: '.04em' }}>
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                style={{
                  background: 'var(--cs)', border: '1px solid var(--border)',
                  borderRadius: 10, padding: '11px 14px', color: 'var(--w)',
                  fontSize: 14, fontFamily: 'var(--fb)', outline: 'none',
                  transition: 'border-color .2s',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(245,158,11,.4)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 12, color: 'var(--g2)', fontFamily: 'var(--fd)', fontWeight: 600, letterSpacing: '.04em' }}>
                Message
              </label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your project…"
                rows={4}
                style={{
                  background: 'var(--cs)', border: '1px solid var(--border)',
                  borderRadius: 10, padding: '11px 14px', color: 'var(--w)',
                  fontSize: 14, fontFamily: 'var(--fb)', outline: 'none',
                  resize: 'vertical', transition: 'border-color .2s',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(245,158,11,.4)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            <button
              type="submit"
              style={{
                marginTop: 4, background: 'var(--t)', color: '#000',
                fontFamily: 'var(--fd)', fontSize: 14, fontWeight: 700,
                padding: '13px 24px', borderRadius: 12, border: 'none',
                cursor: 'pointer', display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: 8, transition: 'all .2s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#FBBF24' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--t)' }}
            >
              Send Message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
