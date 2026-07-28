import ShopGrid from "../../components/ShopGrid";

export const metadata = {
  title: "Shop | Vel Systems",
  description: "Buy IT hardware and security products online from Vel Systems."
};

export default function ShopPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Shop</h1>
          <p>Real products, real current prices, direct from Vel Systems. Message us on WhatsApp if you need something not listed below.</p>
        </div>
      </section>
      <section className="container content-section">
        <ShopGrid />
      </section>
    </>
  );
}
