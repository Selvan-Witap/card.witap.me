import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Terms & Conditions', description: 'Terms of Service for Witap Tapnology Sdn Bhd.' }
export default function Terms() {
  return (
    <section style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 1.5rem' }}>
        <span className="label" style={{ display: 'inline-flex', marginBottom: '1rem' }}>Legal</span>
        <h1 className="display" style={{ fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '0.5rem' }}>Terms & Conditions</h1>
        <p style={{ color: 'rgba(240,232,210,0.35)', fontSize: '0.85rem', marginBottom: '3rem' }}>Last updated: 2022-07-11</p>
        <div style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p>These Terms of Service govern your use of <strong style={{ color: '#f0e8d2' }}>https://witap.me</strong> and <strong style={{ color: '#f0e8d2' }}>https://witap.id</strong> operated by Witap Tapnology Sdn Bhd.</p>
          {[['1. Use of Service','You agree to use the Service only for lawful purposes.'],['2. Intellectual Property','All content remains the exclusive property of Witap Tapnology Sdn Bhd.'],['3. Limitation of Liability','Witap Tapnology shall not be liable for any indirect or consequential damages.'],['4. Governing Law','These Terms are governed by the laws of Malaysia.'],['5. Contact','Questions? Reach us at +6011-5989-3012.']].map(([h,b]) => (
            <div key={h}><h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem', color: '#f0e8d2', marginBottom: '0.5rem' }}>{h}</h2><p>{b}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}
