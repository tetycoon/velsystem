import { getPayload } from 'payload'
import config from '../../../payload.config.mjs'
import ShopHeroCarousel from "../../../components/ShopHeroCarousel";
import ShopGrid from "../../../components/ShopGrid";

export const metadata = {
  alternates: { canonical: "/shop/" },
  title: "Shop | Vel Systems",
  description: "Buy IT hardware and security products online from Vel Systems."
};

// Always fetch fresh — staff can add/change products in the admin panel and
// expect the shop to reflect it, not a cached build-time snapshot.
export const dynamic = 'force-dynamic'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://velsystem.vercel.app";

const CATEGORY_LABELS = {
  solar: "Solar",
  "security-systems": "Security Systems",
  "it-hardware": "IT Hardware",
  accessories: "Accessories",
};

async function getProducts() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'products',
    where: { inStock: { equals: true } },
    sort: '-featured',
    limit: 100,
    depth: 0,
  })
  return docs
}

// One Product entry per item, so real products in the live catalog can show
// up with price/availability in Google search results. Built directly from
// the same data the page renders, so it can never drift out of sync with
// what's actually in stock.
function ProductListSchema({ products }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        category: CATEGORY_LABELS[p.category] || p.category,
        ...(p.image && { image: `${BASE_URL}${p.image}` }),
        ...(p.description && { description: p.description }),
        ...(!p.quoteOnly && p.price != null && {
          offers: {
            "@type": "Offer",
            price: Number(p.price),
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: `${BASE_URL}/shop/`
          }
        })
      }
    }))
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <>
      <ProductListSchema products={products} />
      <ShopHeroCarousel />
      <section className="container content-section">
        <ShopGrid products={products} />
      </section>
    </>
  );
}
