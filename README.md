# PORTMATRIX Logistics — Website (Homepage)

A production-ready **Next.js 14 (App Router)** homepage for PORTMATRIX Logistics Pvt. Ltd.,
built with **Tailwind CSS**, **Framer Motion** animations, and **lucide-react** icons.
Fully mobile responsive, with reduced-motion and keyboard-focus support.

> **Excellence in Compliance** — Govt. Licensed Customs Broker, Chennai.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open the site
#    http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

> No internet right now? Open **`preview.html`** directly in any browser to
> see the full homepage instantly (no build step required).

---

## What's inside

| Section | Component | Highlight |
|---|---|---|
| Sticky header + mobile drawer | `Header.jsx` | Animated slide-in nav on mobile |
| Hero | `Hero.jsx` | Animated headline + the signature widget |
| **Clearance Tracker** | `ClearanceTracker.jsx` | Interactive Import / Export / China pipeline |
| Trust bar | `TrustBar.jsx` | Animated counters + credential marquee |
| Core services | `Services.jsx` | 6 hover-animated service cards |
| China sourcing | `ChinaSourcing.jsx` | Dark feature band, 30–40% savings story |
| Process timeline | `ProcessTimeline.jsx` | Toggle between import & export flows |
| Why us | `WhyChooseUs.jsx` | Strengths, MD credibility, EXIM intelligence |
| Contact / quote | `ContactCTA.jsx` | Styled request-a-quote form |
| Footer | `Footer.jsx` | Full sitemap + contact |

## Brand tokens (from the logo)

| Token | Value |
|---|---|
| Navy | `#2E3192` |
| Red | `#ED1B24` |
| Ink (text) | `#0D102E` |
| Paper (bg) | `#F6F7FC` |

Fonts: **Space Grotesk** (display), **Inter** (body), **Space Mono** (codes/data).

## Notes for going live

- The quote form in `ContactCTA.jsx` is front-end only. Wire `submit()` to your
  CRM, an email API (e.g. Resend), or a serverless route.
- Replace icon-based service visuals with real photography when ready
  (drop images into `/public` and use `next/image`).
- Add remaining pages (Services, About, China, Contact) under `app/` — the
  homepage already links to them via anchors.
