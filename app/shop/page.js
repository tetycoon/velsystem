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
          <p>A starting catalog. Full range and live pricing coming as we finalize the product list with Vel Systems.</p>
          <p className="placeholder-note">Sample listing shown below — swap for the real top 10-15 products and prices before launch.</p>
        </div>
      </section>
      <section className="container content-section">
        <ShopGrid />
      </section>
    </>
  );
}
