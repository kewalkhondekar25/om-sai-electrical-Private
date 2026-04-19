import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-logo-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-cropped.png" alt="Om Sai Electrical" />
            </div>
            <p className="footer-about">
              Authorized ABB Channel Partner delivering premium automation solutions, VFDs, PLCs,
              and custom control panels for enterprise industries across India.
            </p>
            <div className="footer-cert" style={{ fontFamily: 'var(--fd)' }}>
              ISO 9001:2015 Certified
            </div>
          </div>

          <div>
            <div className="footer-heading" style={{ fontFamily: 'var(--fd)' }}>Quick Links</div>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#about">About Us</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/#industries">Industries</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-heading" style={{ fontFamily: 'var(--fd)' }}>Products</div>
            <ul className="footer-links">
              <li><a href="#">ABB Drives</a></li>
              <li><a href="#">ABB PLC</a></li>
              <li><a href="#">Soft Starters</a></li>
              <li><a href="#">Switchgears</a></li>
              <li><a href="#">Control Panels</a></li>
              <li><a href="#">SCADA Systems</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-heading" style={{ fontFamily: 'var(--fd)' }}>Contact</div>
            <ul className="footer-contact">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Ground Floor G-3, Krushna Kunj, Tata Power, Kalyan, Thane, Mumbai — 421306
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-5.99-5.99 19.79 19.79 0 01-3.07-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                +91 98679 77353
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                omsaielectrical4685@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Om Sai Electrical. All rights reserved.</p>
          <div className="footer-btm-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
