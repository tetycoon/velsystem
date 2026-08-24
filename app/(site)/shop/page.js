import { getPayload } from 'payload'
import config from '../../../payload.config.mjs'
import ShopGrid from "../../../components/ShopGrid";

export const metadata = {
  title: "Shop | Vel Systems",
  description: "Buy IT hardware and security products online from Vel Systems."
};

// Always fetch fresh — staff can add/change products in the admin panel and
// expect the shop to reflect it, not a cached build-time snapshot.
export const dynamic = 'force-dynamic'

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

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Shop</h1>
          <p>Real products, real current prices, direct from Vel Systems. Message us on WhatsApp if you need something not listed below.</p>
        </div>
      </section>
      <section className="container content-section">
        <ShopGrid products={products} />
      </section>
    </>
  );
}
