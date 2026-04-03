# cards.witap.me — NFC Smart Business Cards Site

Next.js 14 site for Witap's NFC card product line. Luxury gold aesthetic, fully distinct from witap.me.

## Pages
| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, how it works, collections preview, ESG, corporate CTA |
| `/collections` | All 4 card types in detail |
| `/corporate` | Enterprise / bulk order page |
| `/contact` | Enquiry form + FAQ |
| `/terms` | Terms & Conditions |
| `/privacy` | Privacy Policy |

## Quick Start
```bash
npm install
npm run dev        # http://localhost:3001
npm run build      # production build
```

## Deploy to Vercel
1. Push to GitHub (separate repo from witap-main)
2. Import at vercel.com → Deploy
3. Add custom domain: `cards.witap.me`
   - In Vercel: Project Settings → Domains → Add `cards.witap.me`
   - In your DNS (wherever witap.me is registered): Add a CNAME record:
     - Name: `cards`
     - Value: `cname.vercel-dns.com`

## Setup Contact Form (Formspree)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a **second** form (separate from witap.me's form)
3. In `src/components/ContactForm.tsx` replace `YOUR_CARDS_FORM_ID`

## Update These Values
- **WhatsApp number**: `60115989301`
- **Sitemap base URL**: `src/app/sitemap.ts` → `https://cards.witap.me`

## SEO
- ✅ Unique title + description per page (NFC/card-focused keywords)
- ✅ Open Graph tags
- ✅ Auto-generated sitemap.xml
- ✅ robots.txt
- ✅ Semantic image alt text

## Cross-link to witap.me
Nav and footer both link back to `https://witap.me`. Update if main domain changes.
"# card.witap.me" 
