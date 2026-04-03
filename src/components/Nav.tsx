'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { label: 'Collections', href: '/collections' },
  { label: 'Corporate', href: '/corporate' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,8,0.93)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <div style={{ width: 30, height: 30, background: 'linear-gradient(135deg, #e8c97a, #c9a84c)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#0a0a08" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: '#f0e8d2', letterSpacing: '0.02em' }}>
              witap <span style={{ color: 'var(--gold)' }}>cards</span>
            </span>
            <span style={{ fontSize: '0.6rem', color: 'rgba(240,232,210,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>NFC Smart Cards</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => <Link key={l.href} href={l.href} className="nav-item">{l.label}</Link>)}
          <a href="https://witap.me" target="_blank" rel="noopener noreferrer" className="nav-item" style={{ color: 'rgba(240,232,210,0.35)' }}>
            Automation ↗
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact" className="btn btn-gold" style={{ padding: '0.55rem 1.3rem', fontSize: '0.75rem' }}>
            Inquire Now
          </Link>
        </div>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2"
          style={{ color: '#f0e8d2', background: 'none', border: 'none', cursor: 'pointer' }}>
          <div style={{ width: 22, display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span style={{ display: 'block', height: 1, background: 'currentColor', transition: 'all 0.25s', transform: open ? 'translateY(6px) rotate(45deg)' : '' }} />
            <span style={{ display: 'block', height: 1, background: 'currentColor', opacity: open ? 0 : 1, transition: 'all 0.25s' }} />
            <span style={{ display: 'block', height: 1, background: 'currentColor', transition: 'all 0.25s', transform: open ? 'translateY(-6px) rotate(-45deg)' : '' }} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden" style={{ background: 'rgba(10,10,8,0.98)', borderTop: '1px solid var(--border)', padding: '1.5rem 1.5rem 2rem' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {links.map(l => (
              <Link key={l.href} href={l.href} className="nav-item"
                style={{ fontSize: '0.95rem', color: '#f0e8d2', padding: '0.6rem 0', borderBottom: '1px solid var(--border)', letterSpacing: '0.06em' }}
                onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-gold" style={{ marginTop: '0.75rem', justifyContent: 'center' }} onClick={() => setOpen(false)}>
              Inquire Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
