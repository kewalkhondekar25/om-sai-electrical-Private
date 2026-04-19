import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google'
import './globals.css'

const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--fd',
})

const body = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--fb',
})

export const metadata: Metadata = {
  title: 'Om Sai Electrical — ABB Authorized Industrial Automation Partner | Mumbai',
  description:
    'Om Sai Electrical is an ISO 9001:2015 certified ABB Authorized Channel Partner delivering VFDs, PLCs, SCADA, and custom control panel solutions for industrial automation across India.',
  keywords:
    'industrial automation, ABB authorized partner, VFD, PLC, SCADA, control panels, Mumbai, Kalyan',
  openGraph: {
    title: 'Om Sai Electrical — Industrial Automation Specialists',
    description:
      '20+ years of industrial automation expertise. ABB Authorized Channel Partner for VFDs, PLCs, and custom control panels.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`} style={{ fontFamily: 'var(--fb)' }}>
        {children}
      </body>
    </html>
  )
}
