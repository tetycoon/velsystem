# Vel Systems Website

Real React/Next.js codebase (App Router, JavaScript). Phase 1 build covering the
full site: homepage, Solar, Security Systems, IT Hardware, AMC Contracts,
Government & Institutions, Shop + cart, About, Customers, Rental, Blog, Contact.

## Run locally

```bash
npm install
npm run dev
```

## What's placeholder right now

- `data/content.js` -> `SHOP_PRODUCTS`: sample items, swap for the real top 10-15
  products and prices before launch.
- `data/content.js` -> `TESTIMONIALS`: intentionally empty, no invented client
  quotes. Add real `{ quote, name, company }` objects once collected.
- Instagram section links out to the handle for now, live embed needs API access.
- `app/api/chatbot/route.js`: keyword FAQ matcher, not a real LLM yet. Answers
  honestly from a small real FAQ set, routes to WhatsApp for anything else.
- `app/api/enquiry/route.js`: writes to `data/enquiries.json` for now, swap for
  a real database (AWS RDS) once provisioned.

## Deploy

Standard Next.js app. Works on AWS Amplify Hosting, EC2 (`npm run build && npm start`
behind Nginx/pm2), or Elastic Beanstalk.
