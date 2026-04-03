import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div className="lg:col-span-1">
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', marginBottom: '1rem' }}>
              <div style={{ width: 28, height: 28, background: 'linear-gradient(135deg, #e8c97a, #c9a84c)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#0a0a08" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: '#f0e8d2' }}>
                witap <span style={{ color: 'var(--gold)' }}>cards</span>
              </span>
            </Link>
            <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.8, maxWidth: 230 }}>
              ESG-compliant NFC smart business cards. Sustainable, elegant, and effortlessly shareable.
            </p>
            <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <p style={{ color: 'rgba(240,232,210,0.3)', fontSize: '0.78rem' }}>F-SG-01, Sunway Geo Avenue</p>
              <p style={{ color: 'rgba(240,232,210,0.3)', fontSize: '0.78rem' }}>47500 Subang Jaya, Selangor</p>
              <a href="https://wa.me/60115989301" style={{ color: 'var(--gold)', fontSize: '0.78rem', textDecoration: 'none', marginTop: '0.25rem' }}>+6011-5989-3012</a>
            </div>
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#f0e8d2', marginBottom: '1rem' }}>Collections</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {['Biodegradable Card', 'LED Card', 'Metal Card', '24K Gold Card'].map(l => (
                <Link key={l} href="/collections" style={{ color: 'var(--muted)', fontSize: '0.85rem', textDecoration: 'none' }}>{l}</Link>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#f0e8d2', marginBottom: '1rem' }}>Company</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { label: 'Corporate Solutions', href: '/corporate' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Terms & Conditions', href: '/terms' },
                { label: 'Privacy Policy', href: '/privacy' },
              ].map(l => <Link key={l.href} href={l.href} style={{ color: 'var(--muted)', fontSize: '0.85rem', textDecoration: 'none' }}>{l.label}</Link>)}
            </div>
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#f0e8d2', marginBottom: '1rem' }}>Also From Witap</p>
            <a href="https://witap.me" target="_blank" rel="noopener noreferrer"
              style={{ display: 'block', background: 'rgba(201,168,76,0.06)', border: '1px solid var(--border)', borderRadius: 10, padding: '1rem', textDecoration: 'none' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'rgba(240,232,210,0.7)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>witap.me ↗</p>
              <p style={{ color: 'var(--muted)', fontSize: '0.78rem', lineHeight: 1.6 }}>AI & Industrial Automation Services</p>
            </a>
            <div style={{ marginTop: '1.25rem' }}>
              <Link href="/contact" className="btn btn-gold" style={{ fontSize: '0.75rem', padding: '0.6rem 1.2rem', width: '100%', justifyContent: 'center' }}>
                Get Your Card
              </Link>
            </div>
          </div>
        </div>

        <div className="rule" style={{ margin: '3rem 0 1.5rem' }} />
        <p style={{ color: 'rgba(240,232,210,0.2)', fontSize: '0.78rem' }}>
          © {new Date().getFullYear()} Witap Tapnology Sdn Bhd. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
