# Removals Lisbon

Next.js 14 marketing site for **Removals Lisbon** — a bilingual (EN / PT) lead-gen site for a Lisbon-based removals, house moving, and junk-clearance company.

Live at: https://www.removalslisbon.com

---

## Stack

- **Next.js 14** (App Router, server components)
- **next-intl** for EN/PT internationalisation with locale-prefixed URLs (`/pt`, `/en`)
- **Tailwind CSS** for styling
- **Framer Motion** for scroll and page animations
- **lucide-react** for icons
- Custom inline SVG truck animation in the hero

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to `/pt` by default.

## Project Structure

```
app/
  [locale]/
    layout.js      # SEO metadata, fonts, JSON-LD, NextIntl provider
    page.js        # Homepage — assembles all sections
  layout.js        # Minimal root layout
  globals.css      # Tailwind + utility classes
  robots.js        # /robots.txt
  sitemap.js       # /sitemap.xml
components/
  Navbar.js        # Sticky nav + PT/EN toggle + mobile menu
  Hero.js          # Hero with headline, CTAs, stats, animation card
  TruckAnimation.js# Custom inline SVG — driving truck + floating boxes
  HowItWorks.js    # 4-step process
  Services.js      # 6-tile service grid with photos
  Testimonials.js  # 3 reviews with star ratings
  Areas.js         # Service areas (Lisbon / Greater Lisbon / Portugal)
  QuoteForm.js     # Main lead form
  CtaBanner.js     # Mid-page CTA
  Footer.js        # Links + contact info
messages/
  en.json          # English copy
  pt.json          # Portuguese copy (European PT)
i18n.js            # next-intl config
middleware.js      # Locale routing
```

## SEO

The site is built for local SEO dominance on Lisbon removal search terms.

- **Metadata** (title, description, keywords) is set per locale in `app/[locale]/layout.js` via `generateMetadata`.
- **Keywords** are defined in `messages/{locale}.json` under `meta.keywords`. Update these freely.
- **hreflang** tags are generated automatically (`en`, `pt`, `x-default`).
- **JSON-LD** structured data for `MovingCompany` schema is injected in every page `<head>`.
- **robots.txt** and **sitemap.xml** are auto-generated at `/robots.txt` and `/sitemap.xml`.
- **Open Graph** and Twitter Card metadata are set per locale.
- Place an `og-image.jpg` at `/public/og-image.jpg` (1200×630 recommended).

### To improve SEO further

1. **Service landing pages** — create `app/[locale]/servicos/[slug]/page.js` for each service. More pages → more keyword real estate.
2. **Local landing pages** — same for each neighbourhood (`/pt/mudancas/alfama`, `/pt/mudancas/cascais`, etc.)
3. **Submit sitemap** to Google Search Console once deployed.
4. **Google Business Profile** — claim one for the office location.
5. **Reviews** — swap the placeholder testimonials for real Google reviews once you have them.

## Wiring Up the Form

The form in `components/QuoteForm.js` currently just simulates a submission with a `setTimeout`. Pick one of these to make it live:

### Option A — Formspree (easiest, no backend)

1. Sign up at [formspree.io](https://formspree.io) and create a new form.
2. In `QuoteForm.js`, replace the `handleSubmit` function with:

```js
const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);
  try {
    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) setSubmitted(true);
  } finally {
    setSubmitting(false);
  }
};
```

### Option B — Resend + Next.js API route

Create `app/api/quote/route.js`, install `resend`, and POST the form payload to your own email. More setup but free tier is generous.

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no config needed.
4. Add your custom domain `www.removalslisbon.com` in Vercel's domain settings.

## Placeholders to Replace

Before launch, swap these for real values:

- [ ] Phone number: search `+351 XXX XXX XXX` across the project
- [ ] WhatsApp: `wa.me/351000000000` in `Footer.js`
- [ ] Email: `hello@removalslisbon.com` in `Footer.js`
- [ ] Testimonial photos/quotes in `messages/*.json`
- [ ] Service photos in `components/Services.js` (currently Unsplash — replace with real job photos)
- [ ] OG image at `public/og-image.jpg`
- [ ] Favicon at `public/favicon.ico`
- [ ] Form endpoint in `QuoteForm.js`
- [ ] JSON-LD phone / rating count in `app/[locale]/layout.js`
