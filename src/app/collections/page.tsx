import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NFC Card Collections — Biodegradable, LED, Metal & Gold',
  description: 'Browse Witap\'s full NFC card range: eco-friendly Biodegradable cards, world\'s first LED card, premium Metal cards in 3 colours, and 24K Gold plated luxury cards.',
  keywords: ['NFC business card Malaysia', 'LED business card', 'metal business card', '24k gold business card', 'biodegradable business card', 'smart card'],
}

const cards = [
  {
    id: 'biodegradable',
    name: 'Biodegradable Card',
    tagline: 'The Sustainable Choice',
    price: 'Inquire for pricing',
    desc: 'Make a sustainable statement with Witap\'s Biodegradable Card. Crafted from eco-friendly PETG material, our cards are visually stunning and planet-friendly.',
    src: '/images/card-biodegradable.png',
    badge: '🌿 Eco Pick',
    badgeBg: 'rgba(45,106,79,0.2)',
    badgeColor: '#5ebd8e',
    variants: ['Available in White & Black'],
    highlights: ['PETG biodegradable material', 'ESG-aligned', 'NFC + QR enabled', 'Full digital profile', 'Save contact button'],
  },
  {
    id: 'led',
    name: 'LED Card',
    tagline: 'The World\'s First',
    price: 'Inquire for pricing',
    desc: 'Shine bright with Witap LED Card — the world\'s first LED-embedded NFC smart card. An unforgettable statement that illuminates your network like never before.',
    src: '/images/card-led.png',
    badge: '✨ World\'s First',
    badgeBg: 'rgba(201,168,76,0.15)',
    badgeColor: '#c9a84c',
    variants: ['Black + Red LED', 'Black + Green LED', 'White + Red LED', 'White + Green LED'],
    highlights: ['World\'s first LED NFC card', 'Rechargeable LED system', 'NFC + QR enabled', 'Available in 4 variants', 'Guaranteed conversation starter'],
  },
  {
    id: 'metal',
    name: 'Metal Card',
    tagline: 'Premium Collection',
    price: 'Inquire for pricing',
    desc: 'Unleash your style with Witap metal card collections. Blending substance and style in a card that commands respect the moment it\'s handed over.',
    src: '/images/card-metal.png',
    badge: '⬛ Premium',
    badgeBg: 'rgba(100,100,120,0.2)',
    badgeColor: '#a0a0c0',
    variants: ['Sleek Black', 'Captivating Blue', 'Sophisticated Purple'],
    highlights: ['Premium metal construction', 'Weighted, satisfying feel', '3 colour options', 'NFC + QR enabled', 'Scratch-resistant finish'],
  },
  {
    id: 'gold',
    name: '24K Gold Card',
    tagline: 'The Ultimate Statement',
    price: 'Inquire for pricing',
    desc: 'Unleash the power of opulence with Witap\'s 24K Gold plated Card. Crafted with meticulous precision and adorned in gold — it exudes prestige and elegance.',
    src: '/images/card-gold.jpeg',
    badge: '👑 Luxury',
    badgeBg: 'rgba(201,168,76,0.2)',
    badgeColor: '#c9a84c',
    variants: ['24K Gold plated'],
    highlights: ['24K gold plating', 'Meticulous craftsmanship', 'Premium gift packaging', 'NFC + QR enabled', 'Prestige networking'],
  },
]

const whatYouGet = [
  'Your Name & Job Title',
  'Company Name & Logo',
  'Business Address',
  'Business Email',
  'Mobile Number',
  'Business Bio',
  'YouTube Videos',
  'Photo Gallery',
  'Website Link',
  'Social Profiles (Facebook, Instagram, X, WeChat, LinkedIn, TikTok & more)',
  '"Save Contact" button',
  '"Exchange Contact" button',
]

export default function CollectionsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="orb" style={{ width: 500, height: 500, top: -150, right: -150, background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="label" style={{ justifyContent: 'center', display: 'inline-flex', marginBottom: '0.75rem' }}>Our Collections</span>
          <h1 className="display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginTop: '0.5rem' }}>
            Four Ways to <span className="gradient-gold">Make an Impression</span>
          </h1>
          <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '1.05rem', marginTop: '1.25rem', maxWidth: 520, margin: '1.25rem auto 0' }}>
            Every collection is NFC and QR enabled, fully customisable with your branding, and backed by our design team.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {cards.map((c, i) => (
            <div key={c.id} id={c.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ paddingTop: '2rem' }}>
              <div className={`order-2 ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                  <div className="card" style={{ overflow: 'hidden', borderRadius: 20, border: '1px solid rgba(201,168,76,0.15)' }}>
                    <Image src={c.src} alt={`${c.name} — Witap NFC smart business card`} width={600} height={600} style={{ width: '100%', height: 400, objectFit: 'cover' }} />
                  </div>
                  <span style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', padding: '0.35rem 0.9rem', borderRadius: 100, fontSize: '0.75rem', fontWeight: 600, background: c.badgeBg, color: c.badgeColor, border: `1px solid ${c.badgeColor}40` }}>
                    {c.badge}
                  </span>
                </div>
              </div>

              <div className={`order-1 ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <span className="label" style={{ display: 'inline-flex', marginBottom: '0.75rem' }}>{c.tagline}</span>
                <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.5rem' }}>{c.name}</h2>
                <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginTop: '1rem', fontSize: '0.95rem' }}>{c.desc}</p>

                {c.variants.length > 1 && (
                  <div style={{ marginTop: '1.5rem' }}>
                    <p style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,232,210,0.4)', marginBottom: '0.5rem' }}>Available Variants</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {c.variants.map(v => <span key={v} className="tag">{v}</span>)}
                    </div>
                  </div>
                )}

                <div style={{ marginTop: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {c.highlights.map(h => (
                    <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--muted)' }}>
                      <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="var(--gold)" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                      {h}
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="btn btn-gold" style={{ marginTop: '2rem' }}>
                  Inquire About the {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What your card shares */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }} className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="label" style={{ justifyContent: 'center', display: 'inline-flex', marginBottom: '0.75rem' }}>Your Digital Profile</span>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Everything on One Tap</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {whatYouGet.map(item => (
              <div key={item} className="card" style={{ padding: '0.85rem 1rem', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--muted)' }}>
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="var(--gold)" strokeWidth="2" style={{ flexShrink: 0 }}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                {item}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/contact" className="btn btn-gold">Get My Witap Card</Link>
          </div>
        </div>
      </section>
    </>
  )
}
