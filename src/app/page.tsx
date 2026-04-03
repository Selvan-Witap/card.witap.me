import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Witap Cards — ESG NFC Smart Business Cards',
  description: 'Make a lasting impression with Witap\'s sustainable NFC business cards. Biodegradable, LED, Metal, and 24K Gold collections. 25,000+ profiles created. One tap. Everything shared.',
}

const collections = [
  {
    name: 'Biodegradable',
    tagline: 'The Sustainable Choice',
    desc: 'Crafted from eco-friendly PETG material. Visually stunning, planet-friendly. Available in White & Black.',
    src: '/images/card-biodegradable.png',
    badge: '🌿 Eco Pick',
    badgeBg: 'rgba(45,106,79,0.2)',
    badgeColor: '#5ebd8e',
  },
  {
    name: 'LED Card',
    tagline: 'The World\'s First',
    desc: 'The world\'s first LED smart card. Black or White with Red or Green LED light. Unforgettable.',
    src: '/images/card-led.png',
    badge: '✨ World\'s First',
    badgeBg: 'rgba(201,168,76,0.15)',
    badgeColor: '#c9a84c',
  },
  {
    name: 'Metal Card',
    tagline: 'Premium Collection',
    desc: 'Sleek black, captivating blue, or sophisticated purple. Substance and style in one card.',
    src: '/images/card-metal.png',
    badge: '⬛ Premium',
    badgeBg: 'rgba(100,100,120,0.2)',
    badgeColor: '#a0a0c0',
  },
  {
    name: '24K Gold Card',
    tagline: 'The Ultimate Statement',
    desc: 'Meticulous precision. Adorned in 24K gold. Crafted for those who demand prestige.',
    src: '/images/card-gold.jpeg',
    badge: '👑 Luxury',
    badgeBg: 'rgba(201,168,76,0.15)',
    badgeColor: '#c9a84c',
  },
]

const stats = [
  { num: '25K+', label: 'Profiles Created' },
  { num: '1M+', label: 'Total Engagements' },
  { num: '500+', label: 'Trees Saved' },
  { num: '350Kg+', label: 'Paper Saved' },
]

const howItWorks = [
  { step: '01', title: 'Tap or Scan', desc: 'Tap any NFC device to share instantly, or let them scan the QR code — works on every smartphone.' },
  { step: '02', title: 'Profile Opens', desc: 'Your full digital profile opens in their browser — no app download required.' },
  { step: '03', title: 'They Save You', desc: 'They save your contact directly to their phone with one tap. You get their details too.' },
]

const esgPillars = [
  { icon: '🌍', title: 'Climate Action', desc: 'Every card replaces hundreds of paper cards — directly reducing waste.' },
  { icon: '⚙️', title: 'Industry Innovation', desc: 'NFC technology that modernizes how professionals connect.' },
  { icon: '♻️', title: 'Responsible Consumption', desc: 'PETG biodegradable materials that don\'t compromise quality.' },
  { icon: '🌿', title: 'Environmental Responsibility', desc: 'ESG-aligned for businesses with sustainability commitments.' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: '4rem' }}>
        <div className="orb" style={{ width: 700, height: 700, top: -200, right: -200, background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 65%)' }} />
        <div className="orb" style={{ width: 400, height: 400, bottom: 0, left: -150, background: 'radial-gradient(circle, rgba(45,106,79,0.08) 0%, transparent 65%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <span className="esg-badge">🌿 ESG Compliant</span>
              <span className="esg-badge">📲 NFC + QR</span>
              <span className="esg-badge">🌍 25K+ Profiles</span>
            </div>
            <h1 className="display" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', color: '#f0e8d2' }}>
              Your Card.{' '}
              <span className="gradient-gold">Elevated.</span>
            </h1>
            <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '1.05rem', marginTop: '1.5rem', maxWidth: 480 }}>
              One tap. Your name, title, company, socials, portfolio — everything. Witap NFC cards replace the forgettable paper card forever.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2.5rem' }}>
              <Link href="/collections" className="btn btn-gold">
                View Collections
              </Link>
              <Link href="/contact" className="btn btn-outline-gold">
                Inquire Now
              </Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '2.5rem', marginTop: '3rem', flexWrap: 'wrap', paddingTop: '2.5rem', borderTop: '1px solid var(--border)' }}>
              {stats.map(s => (
                <div key={s.label}>
                  <p className="stat-num" style={{ fontSize: '1.8rem' }}>{s.num}</p>
                  <p style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: 3, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div className="card" style={{ overflow: 'hidden', borderRadius: 20, border: '1px solid rgba(201,168,76,0.2)' }}>
              <Image src="/images/hero.png" alt="Witap NFC smart business card collections" width={720} height={700} style={{ width: '100%', height: 'auto' }} priority />
            </div>
            {/* Floating trust card */}
            <div className="card" style={{ position: 'absolute', bottom: -18, right: -18, padding: '1rem 1.25rem', borderRadius: 12, border: '1px solid rgba(201,168,76,0.25)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.4rem', color: 'var(--gold)' }}>No App</p>
              <p style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: 2 }}>Required. Ever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="label" style={{ justifyContent: 'center', display: 'inline-flex', marginBottom: '0.75rem' }}>Simple by Design</span>
            <h2 className="display" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map(h => (
              <div key={h.step} style={{ textAlign: 'center' }}>
                <p className="display" style={{ fontSize: '4rem', color: 'rgba(201,168,76,0.15)', lineHeight: 1, marginBottom: '1rem' }}>{h.step}</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 600, marginBottom: '0.5rem' }}>{h.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.75, maxWidth: 260, margin: '0 auto' }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLECTIONS PREVIEW ── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="label" style={{ display: 'inline-flex', marginBottom: '0.75rem' }}>Our Collections</span>
              <h2 className="display" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>Four Ways to Impress</h2>
            </div>
            <Link href="/collections" className="btn btn-outline-gold" style={{ padding: '0.65rem 1.4rem', fontSize: '0.78rem' }}>
              View All Cards
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map(c => (
              <div key={c.name} className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', background: '#0d0d0a' }}>
                  <Image src={c.src} alt={`${c.name} — Witap NFC smart business card`} width={600} height={400} style={{ width: '100%', height: 280, objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '1rem', right: '1rem', padding: '0.3rem 0.75rem', borderRadius: 100, fontSize: '0.72rem', fontWeight: 600, background: c.badgeBg, color: c.badgeColor, border: `1px solid ${c.badgeColor}40` }}>
                    {c.badge}
                  </span>
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <p style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.3rem' }}>{c.tagline}</p>
                  <h3 className="display" style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{c.name}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.7 }}>{c.desc}</p>
                  <Link href="/contact" className="btn btn-outline-gold" style={{ marginTop: '1.5rem', fontSize: '0.75rem', padding: '0.6rem 1.25rem' }}>
                    Inquire About This Card
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOMIZE ── */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="label" style={{ display: 'inline-flex', marginBottom: '0.75rem' }}>Bespoke Design</span>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>Designed for You.<br /><span className="gradient-gold">Made to Last.</span></h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginTop: '1.25rem', fontSize: '0.95rem', maxWidth: 460 }}>
              Share your logo and colour scheme. Our design team handles everything else — from layout to finish. Every card is built to represent your personal brand at its best.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '2rem' }}>
              {['Your logo & branding applied', 'Multiple finish options', 'No design skills needed', '15% referral commission available'].map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--muted)' }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="var(--gold)" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                  {f}
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn btn-gold" style={{ marginTop: '2rem' }}>Design My Card</Link>
          </div>
          <div className="card" style={{ overflow: 'hidden', borderRadius: 16 }}>
            <Image src="/images/customize.png" alt="Customize your Witap NFC card design — bespoke branding" width={700} height={500} style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>

      {/* ── ESG ── */}
      <section className="py-28 relative overflow-hidden">
        <div className="orb" style={{ width: 600, height: 600, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(45,106,79,0.08) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="label" style={{ justifyContent: 'center', display: 'inline-flex', marginBottom: '0.75rem' }}>Sustainability First</span>
            <h2 className="display" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>Our ESG Commitment</h2>
            <p style={{ color: 'var(--muted)', marginTop: '1rem', maxWidth: 500, margin: '1rem auto 0', lineHeight: 1.75 }}>
              Every Witap card is aligned with global sustainability goals — reducing paper waste while elevating how you connect.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {esgPillars.map(e => (
              <div key={e.title} className="card" style={{ padding: '1.75rem', textAlign: 'center' }}>
                <p style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{e.icon}</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>{e.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.83rem', lineHeight: 1.7 }}>{e.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem', borderRadius: 16, overflow: 'hidden' }} className="card">
            <Image src="/images/esg-icons.png" alt="Witap ESG compliance — climate action, innovation, responsible consumption" width={1200} height={400} style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>

      {/* ── CORPORATE CTA ── */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="card" style={{ overflow: 'hidden', borderRadius: 16 }}>
            <Image src="/images/corporate.png" alt="Witap NFC cards for corporate teams — centralized management" width={700} height={560} style={{ width: '100%', height: 'auto' }} />
          </div>
          <div>
            <span className="label" style={{ display: 'inline-flex', marginBottom: '0.75rem' }}>Enterprise</span>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>Witap for<br /><span className="gradient-gold">Corporates</span></h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginTop: '1.25rem', marginBottom: '2rem', fontSize: '0.95rem' }}>
              Manage your entire team's digital cards from one dashboard. Bulk orders, custom branding, white-label hosting, and multiple profile switching — built for organizations at scale.
            </p>
            {['Centralized admin dashboard', 'Bulk orders with custom branding', 'White-label hosting under your domain', 'Multiple profiles per card', 'Industry\'s first white-label NFC solution'].map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--muted)', marginBottom: '0.6rem' }}>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="var(--gold)" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                {f}
              </div>
            ))}
            <Link href="/corporate" className="btn btn-gold" style={{ marginTop: '2rem' }}>
              Explore Corporate Plans
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="orb" style={{ width: 600, height: 600, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <h2 className="display" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            Ready to make your<br /><span className="gradient-gold">first impression last?</span>
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '2.5rem', fontSize: '0.95rem' }}>
            Join 25,000+ professionals who've already upgraded their networking with Witap.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-gold">Get Your Witap Card</Link>
            <Link href="/collections" className="btn btn-outline-gold">Browse Collections</Link>
          </div>
        </div>
      </section>
    </>
  )
}
