import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corporate NFC Cards — Bulk Orders & White-Label Hosting',
  description: 'Witap corporate NFC cards for teams — centralized dashboard, bulk orders, custom branding, white-label hosting, and multiple profiles per card. Industry-first enterprise solution.',
  keywords: ['corporate NFC card', 'bulk business cards', 'white-label NFC', 'team business cards Malaysia', 'enterprise digital cards'],
}

const benefits = [
  {
    icon: '🖥️',
    title: 'Centralized Management',
    desc: 'Use our powerful admin dashboard to manage all employees\' business cards efficiently — update details, profiles, and branding from one place.',
  },
  {
    icon: '🔄',
    title: 'Versatile Profile Switching',
    desc: 'Employees can switch between multiple profiles for different roles or business lines — keeping everything organized and professional in one card.',
  },
  {
    icon: '🌿',
    title: 'Sustainable & ESG-Aligned',
    desc: 'Lead by example with eco-friendly NFC cards. Demonstrates your company\'s sustainability commitment at every networking touchpoint.',
  },
  {
    icon: '🏷️',
    title: 'White-Label Hosting',
    desc: 'Industry\'s first white-label NFC hosting solution. Host your team\'s digital cards under your own domain for full brand consistency and security.',
  },
  {
    icon: '👥',
    title: 'Seamless Team Integration',
    desc: 'From small teams to large enterprises — Witap supports bulk orders with custom branding to reflect your business identity on every card.',
  },
  {
    icon: '🔒',
    title: 'Enhanced Security',
    desc: 'Secure data-sharing technology eliminates traditional paper cards while ensuring sensitive contact data remains protected.',
  },
]

const steps = [
  { num: '01', title: 'Contact Us', desc: 'Reach out via the form below or WhatsApp with your team size and branding requirements.' },
  { num: '02', title: 'Share Your Brand Assets', desc: 'Send us your logo, colour scheme, and any design preferences. Our team handles the rest.' },
  { num: '03', title: 'Review & Approve', desc: 'We produce a design proof for your approval before any cards are manufactured.' },
  { num: '04', title: 'Cards Delivered', desc: 'Your branded cards are delivered, pre-configured, and ready for your team to activate.' },
]

export default function CorporatePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="orb" style={{ width: 600, height: 600, top: -100, right: -200, background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="label" style={{ display: 'inline-flex', marginBottom: '0.75rem' }}>Enterprise Solution</span>
            <h1 className="display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '0.5rem' }}>
              Witap for <span className="gradient-gold">Corporates</span>
            </h1>
            <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '1rem', marginTop: '1.25rem', maxWidth: 500 }}>
              Adopt Witap's NFC business cards to elevate your corporate networking, stay organized, and support sustainable practices — all with one simple solution.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-gold">Get a Corporate Quote</Link>
              <Link href="/collections" className="btn btn-outline-gold">View Collections</Link>
            </div>
          </div>
          <div className="card" style={{ overflow: 'hidden', borderRadius: 18 }}>
            <Image src="/images/corporate.png" alt="Witap corporate NFC card management — team dashboard" width={700} height={570} style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="label" style={{ justifyContent: 'center', display: 'inline-flex', marginBottom: '0.75rem' }}>Why Witap Corporate</span>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Key Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(b => (
              <div key={b.title} className="card" style={{ padding: '1.75rem' }}>
                <p style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{b.icon}</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{b.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.75 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="label" style={{ justifyContent: 'center', display: 'inline-flex', marginBottom: '0.75rem' }}>How It Works</span>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>From Order to Your Team's Hands</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map(s => (
              <div key={s.num} className="card" style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem' }}>
                <span className="display" style={{ fontSize: '2.5rem', color: 'rgba(201,168,76,0.2)', lineHeight: 1, flexShrink: 0 }}>{s.num}</span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.35rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.86rem', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/contact" className="btn btn-gold">Request a Corporate Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}
