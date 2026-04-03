'use client'
import { useState } from 'react'

const interests = [
  'Biodegradable Card', 'LED Card', 'Metal Card', '24K Gold Card',
  'Corporate / Bulk Order', 'White-Label Hosting', 'General Enquiry',
]

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [form, setForm] = useState({ name:'', email:'', phone:'', company:'', interest:'', quantity:'', message:'' })
  const set = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const r = await fetch('https://formspree.io/f/maqlpjnp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(r.ok ? 'success' : 'error')
      if (r.ok) setForm({ name:'', email:'', phone:'', company:'', interest:'', quantity:'', message:'' })
    } catch { setStatus('error') }
  }

  if (status === 'success') return (
    <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
      <p style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✨</p>
      <h3 className="display" style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>Enquiry Received!</h3>
      <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>We'll be in touch within 1 business day. For a faster response, WhatsApp us directly.</p>
      <a href="https://wa.me/60115989301?text=Hi!%20I%20just%20submitted%20an%20enquiry%20about%20Witap%20cards." target="_blank" rel="noopener noreferrer" className="btn btn-gold">
        WhatsApp Us
      </a>
    </div>
  )

  return (
    <div className="card" style={{ padding: '2.5rem' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.4rem', marginBottom: '0.4rem' }}>Send an Enquiry</h2>
      <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '2rem' }}>We respond within 1 business day.</p>
      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,232,210,0.35)', marginBottom: '0.35rem' }}>Full Name *</label>
            <input name="name" required value={form.name} onChange={set} placeholder="Ahmad bin Abdullah" className="input" />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,232,210,0.35)', marginBottom: '0.35rem' }}>Email *</label>
            <input type="email" name="email" required value={form.email} onChange={set} placeholder="you@company.com" className="input" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,232,210,0.35)', marginBottom: '0.35rem' }}>Phone / WhatsApp</label>
            <input name="phone" value={form.phone} onChange={set} placeholder="+60 12-345 6789" className="input" />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,232,210,0.35)', marginBottom: '0.35rem' }}>Company</label>
            <input name="company" value={form.company} onChange={set} placeholder="Acme Sdn Bhd" className="input" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,232,210,0.35)', marginBottom: '0.35rem' }}>I'm Interested In</label>
            <select name="interest" value={form.interest} onChange={set} className="input">
              <option value="">Select...</option>
              {interests.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,232,210,0.35)', marginBottom: '0.35rem' }}>Quantity (if known)</label>
            <input name="quantity" value={form.quantity} onChange={set} placeholder="e.g. 50 cards" className="input" />
          </div>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,232,210,0.35)', marginBottom: '0.35rem' }}>Message *</label>
          <textarea name="message" required rows={4} value={form.message} onChange={set}
            placeholder="Tell us about your requirements — card type, design preferences, timeline..."
            className="input" style={{ resize: 'vertical' }} />
        </div>
        {status === 'error' && <p style={{ color: '#f87171', fontSize: '0.85rem' }}>Something went wrong. Please try WhatsApp.</p>}
        <button type="submit" disabled={status === 'loading'} className="btn btn-gold" style={{ opacity: status === 'loading' ? 0.7 : 1, justifyContent: 'center' }}>
          {status === 'loading' ? 'Sending…' : 'Send Enquiry'}
        </button>
      </form>
    </div>
  )
}
