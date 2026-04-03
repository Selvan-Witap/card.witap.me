import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Privacy Policy', description: 'Privacy Policy for Witap Tapnology Sdn Bhd.' }
export default function Privacy() {
  return (
    <section style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 1.5rem' }}>
        <span className="label" style={{ display: 'inline-flex', marginBottom: '1rem' }}>Legal</span>
        <h1 className="display" style={{ fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '0.5rem' }}>Privacy Policy</h1>
        <p style={{ color: 'rgba(240,232,210,0.35)', fontSize: '0.85rem', marginBottom: '3rem' }}>Effective date: 2022-07-11</p>
        <div style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p>Witap Tapnology Sdn Bhd operates <strong style={{ color: '#f0e8d2' }}>https://witap.me</strong>, <strong style={{ color: '#f0e8d2' }}>https://witap.id</strong>, and <strong style={{ color: '#f0e8d2' }}>https://cards.witap.me</strong>.</p>
          {[['1. Information We Collect','Name, email, phone, and company when you contact us or submit an enquiry.'],['2. How We Use Your Information','To respond to enquiries, provide services, and improve our products.'],['3. Data Security','Your data is stored with certified cloud providers with robust security.'],['4. Third-Party Services','We use Formspree for form submissions and Calendly for scheduling.'],['5. Contact','Questions? Reach us at +6011-5989-3012.']].map(([h,b]) => (
            <div key={h}><h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem', color: '#f0e8d2', marginBottom: '0.5rem' }}>{h}</h2><p>{b}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}
