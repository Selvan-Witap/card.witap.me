import type { Metadata } from 'next'
import Link from 'next/link'
import CardsContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact & FAQ',
  description: 'Get in touch with Witap Cards — inquire about NFC card collections, corporate orders, or bespoke design. Based in Subang Jaya, Malaysia.',
}

const faqs = [
  { q: 'How does the Witap card work?', a: 'Witap Cards leverage NFC (Near Field Communication) and QR code technology to effortlessly share your Witap profile. Tap the card on any NFC phone, or scan the QR code.' },
  { q: 'Is the card compatible with all mobile devices?', a: 'Yes. Via NFC tap (like a contactless bank card) or QR code — ensuring compatibility with every smartphone on the market.' },
  { q: 'Do I need to download an app?', a: 'No app download required. Your profile opens directly in the browser for anyone who taps or scans your card.' },
  { q: 'Is my data secure?', a: 'Absolutely. Your information is securely stored with a certified cloud provider, backed by robust infrastructure.' },
  { q: 'Can I custom design my card?', a: 'Yes. Share your logo and colour scheme and our design team will handle everything else.' },
  { q: 'Do you offer a white-label solution?', a: 'Yes — the industry\'s first white-label NFC card hosting. Your cards can be hosted under your own domain.' },
  { q: 'How can people save my contact?', a: 'Your Witap Profile includes a "Save Contact" button — they tap it and your contact is saved directly to their phone.' },
  { q: 'Do you offer a referral programme?', a: 'Yes! We offer 15% commission for successful referrals. You must be an existing Witap client to receive your referral code.' },
]

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="orb" style={{ width: 500, height: 500, top: -100, left: -100, background: 'radial-gradient(circle, rgba(201,168,76,0.09) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="label" style={{ justifyContent: 'center', display: 'inline-flex', marginBottom: '0.75rem' }}>Reach Out</span>
            <h1 className="display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '0.5rem' }}>Get Your Witap Card</h1>
            <p style={{ color: 'var(--muted)', marginTop: '1rem', maxWidth: 460, margin: '1rem auto 0', lineHeight: 1.8 }}>
              Ready to upgrade your networking? Fill in the form and we'll get back to you within 1 business day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="card" style={{ padding: '1.25rem' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.4rem' }}>📍 Address</p>
                <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.75 }}>
                  F-SG-01, Sunway Geo Avenue<br />
                  Jalan Lagoon Selatan<br />
                  47500 Subang Jaya, Selangor
                </p>
              </div>
              <div className="card" style={{ padding: '1.25rem' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.4rem' }}>📱 WhatsApp</p>
                <a href="https://wa.me/60115989301" style={{ color: 'var(--gold)', fontSize: '0.9rem', textDecoration: 'none' }}>+6011-5989-3012</a>
                <p style={{ color: 'var(--muted)', fontSize: '0.78rem', marginTop: '0.25rem' }}>Fastest way to reach us</p>
              </div>
              <div className="card" style={{ padding: '1.25rem' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.5rem' }}>💼 Corporate Enquiries</p>
                <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>Bulk orders, white-label hosting, and custom corporate plans.</p>
                <Link href="/corporate" className="btn btn-outline-gold" style={{ fontSize: '0.75rem', padding: '0.55rem 1rem' }}>
                  View Corporate Plans
                </Link>
              </div>
            </div>
            <div style={{ gridColumn: 'span 3' }}>
              <CardsContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }} className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="label" style={{ justifyContent: 'center', display: 'inline-flex', marginBottom: '0.75rem' }}>FAQ</span>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Common Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map(f => (
              <div key={f.q} className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.5rem' }}>{f.q}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.75 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
