# Vel Systems Website — Next.js Build (Phase 1)

Real React/Next.js codebase (App Router, JavaScript, no TypeScript/ESLint/Tailwind
toolchain, those were dropped only to keep the install light — add them back any
time on a normal connection, nothing here depends on their absence).

Covers the full Phase 1 sitemap from the implementation plan: homepage, Solar,
Security Systems hub + 13 detail pages, IT Hardware hub + 16 detail pages, AMC,
Government & Institutions, Shop + cart, About, Customers, Rental, Blog, Contact.
Plus a working enquiry API and a keyword-based chatbot, both marked for a Phase 2
AI upgrade.

## Running it

```bash
npm install
npm run build
npm start        # production server on http://localhost:3000
# or during development:
npm run dev
```

## Structure

```
app/                  -- App Router pages, one folder per route
  api/enquiry/route.js     -- POST handler, appends to data/enquiries.json
  api/chatbot/route.js     -- POST handler, keyword FAQ matcher
  [route folders]/page.js  -- one per page in the sitemap
  security-systems/[slug]/page.js  -- dynamic, one per security product
  it-hardware/[slug]/page.js       -- dynamic, one per IT product
  layout.js             -- root layout: Header + Footer wrap every page
  globals.css           -- all site styling, brand colors in :root
components/            -- Header, Footer, Chatbot, Sections (trust bar, pillar
                           grid, audience switch, testimonials, etc.), ShopGrid,
                           CartView, EnquiryForm
data/content.js        -- every bit of real content: nav, products, security/IT
                           item copy, FAQ knowledge base, brand info
lib/cart.js             -- localStorage cart helpers (client-only, real deployed
                           site, not a Claude artifact, so localStorage is fine)
```

## What's real vs. placeholder

Same honesty rules as the plan doc:

- **Shop products** in `data/content.js` (`SHOP_PRODUCTS`) are real products and
  current prices pulled from the old site.
- **Testimonials** (`TESTIMONIALS`) has one real quote so far. No invented ones,
  add more as `{ quote, name, company }` objects as they're collected.
- **Blog posts** (`BLOG_POSTS`) are real titles pulled from the old site, but
  full post bodies haven't been migrated yet.
- **Instagram** links to `@velsystems.in` for now, live embed needs API access
  not yet set up.
- **Chatbot** (`app/api/chatbot/route.js`) answers from a small real FAQ list and
  says "ask on WhatsApp" for anything outside it, on purpose, so it never guesses
  at a customer.
- Site is currently served from `velsystem.vercel.app`. The real `velsystems.in`
  domain isn't pointed at this deployment yet.

## Enquiry form email setup (required for the contact form to deliver)

`app/api/enquiry/route.js` emails every submission via [Resend](https://resend.com)
instead of relying on file storage — Vercel's filesystem outside `/tmp` is
read-only, and `/tmp` itself is wiped on every cold start and deploy, so the old
file-only approach was silently losing real customer enquiries in production.

Set these in Vercel (Project Settings -> Environment Variables):

- `RESEND_API_KEY` — from resend.com, free tier (100 emails/day, no card).
- `ENQUIRY_NOTIFY_EMAIL` — optional, defaults to `sales@velsystems.in`.
- `RESEND_FROM` — optional, defaults to `Vel Systems Website <onboarding@resend.dev>`.
  That sandbox sender works with zero setup, but Resend may restrict delivery to
  only the email the Resend account was signed up with until a sending domain is
  verified. Once `velsystems.in` is verified in Resend, switch this to something
  like `Vel Systems Website <enquiries@velsystems.in>` for unrestricted delivery.

Without `RESEND_API_KEY` set, the route falls back to writing
`data/enquiries.json` locally — fine for dev, not durable on Vercel.

## Deploy

Deployed via Vercel, connected to GitHub `tetycoon/velsystem`, auto-deploys on
every push to `main`.

## Note on this build

The npm registry through the environment this was built in was slow enough that
the full toolchain (TypeScript, ESLint, Tailwind) kept timing out mid-install.
Dropped them to get a working app rather than fight the network. Functionally
this changes nothing, still real React components, real Next.js routing, real
API routes. If your dev team wants TypeScript/ESLint/Tailwind added back, that's
a same-day addition on a normal connection, not a rebuild.
