// One-time script to load the 12 real products (previously hardcoded in
// data/content.js's SHOP_PRODUCTS) into the live Products collection.
// Run this ONCE after the new migration has been applied.
//
// Usage (from the project root):
//
//   set PAYLOAD_CONFIG_PATH=%cd%\payload.config.mjs
//   node seed-products.mjs
//
// Safe to re-run: it skips any product whose slug already exists.

import fs from 'node:fs'
import path from 'node:path'

// Plain node doesn't auto-load .env the way `next build` and the payload CLI
// do, so load it by hand here - no extra dependency needed. Always overwrite
// process.env with the .env value (not just "if unset"), in case the shell
// session already has a stale/blank value for the same key from earlier.
function loadEnvFile() {
  const envPath = path.resolve('.env')
  if (!fs.existsSync(envPath)) {
    console.error(`No .env file found at ${envPath}`)
    return
  }
  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/)
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    const key = trimmed.slice(0, eq).trim()
    let value = trimmed.slice(eq + 1).trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    process.env[key] = value
  }
}
loadEnvFile()

console.log('DATABASE_URL loaded:', process.env.DATABASE_URL ? `yes (${process.env.DATABASE_URL.length} chars)` : 'NO')
console.log('PAYLOAD_SECRET loaded:', process.env.PAYLOAD_SECRET ? `yes (${process.env.PAYLOAD_SECRET.length} chars)` : 'NO')

const { getPayload } = await import('payload')
const config = (await import('./payload.config.mjs')).default

const CATEGORY_MAP = {
  'IT Hardware': 'it-hardware',
  'Accessories': 'accessories',
  'Solar': 'solar',
  'Security Systems': 'security-systems',
}

const PRODUCTS = [
  { slug: "honeywell-gl650-barcode-scanner", name: "IMPACT by Honeywell GL650 2D Hands-Free Barcode Scanner", price: 7552, category: "IT Hardware", image: "/images/products/honeywell-gl650-barcode-scanner.jpg" },
  { slug: "cp-plus-wifi-router", name: "CP PLUS CP-GR-DE412 WiFi Router", price: 2150, category: "IT Hardware", image: "/images/products/cp-plus-wifi-router.jpg" },
  { slug: "tplink-archer-c24-router", name: "TP-Link Archer C24 AC750 Mbps Dual-Band WiFi Router", price: 2400, category: "IT Hardware", image: "/images/products/tplink-archer-c24-router.jpg" },
  { slug: "honeywell-ihs520bt-barcode-scanner", name: "IMPACT by Honeywell IHS520BT 2D Barcode Scanner", price: 6500, category: "IT Hardware", image: "/images/products/honeywell-ihs520bt-barcode-scanner.jpg" },
  { slug: "epson-003-ink-set", name: "Epson 003 Ink 65ml Tri-Colour Bottle Set (Pack of 4)", price: 2200, category: "IT Hardware", image: "/images/products/epson-003-ink-set.jpg" },
  { slug: "hp-dhs5100-speaker", name: "HP Multimedia Speaker DHS-5100", price: 1950, category: "Accessories", image: "/images/products/hp-dhs5100-speaker.jpg" },
  { slug: "hp-h150-earbuds", name: "HP H150 Wireless Earbuds", price: 1596, category: "Accessories", image: "/images/products/hp-h150-earbuds.jpg" },
  { slug: "lenovo-bluetooth-headphone", name: "Lenovo In-Ear Metal Finish Bluetooth Headphone (Black)", price: 1700, category: "Accessories", image: "/images/products/lenovo-bluetooth-headphone.jpg" },
  { slug: "consistent-h81-motherboard", name: "Consistent Desktop H81 Motherboard", price: 2500, category: "IT Hardware", image: "/images/products/consistent-h81-motherboard.jpg" },
  { slug: "consistent-cmb-h61-motherboard", name: "Consistent DDR3 Motherboard CMB-H61", price: 1700, category: "IT Hardware", image: "/images/products/consistent-cmb-h61-motherboard.jpg" },
  { slug: "motherboard-1155-ddr3", name: "Motherboard 1155-pin DDR3", price: 1690, category: "IT Hardware", image: "/images/products/motherboard-1155-ddr3.jpg" },
  { slug: "consistent-cmb-g41-motherboard", name: "Consistent Motherboard CMB-G41 DDR3", price: 1850, category: "IT Hardware", image: "/images/products/consistent-cmb-g41-motherboard.jpg" },
]

async function run() {
  const payload = await getPayload({ config })

  for (const p of PRODUCTS) {
    const existing = await payload.find({
      collection: 'products',
      where: { slug: { equals: p.slug } },
      limit: 1,
    })
    if (existing.docs.length > 0) {
      console.log(`skip (already exists): ${p.slug}`)
      continue
    }
    await payload.create({
      collection: 'products',
      data: {
        name: p.name,
        slug: p.slug,
        category: CATEGORY_MAP[p.category] || 'it-hardware',
        price: p.price,
        quoteOnly: false,
        image: p.image,
        inStock: true,
        featured: false,
      },
    })
    console.log(`created: ${p.slug}`)
  }

  console.log('Done.')
  process.exit(0)
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
