import CartView from "../../../components/CartView";
import { WhatsAppCta } from "../../../components/Sections";

export const metadata = { title: "Your Cart | Vel Systems", description: "Review your cart and checkout with Vel Systems." };

export default function CartPage() {
  return (
    <>
      <section className="page-hero"><div className="container"><h1>Your Cart</h1></div></section>
      <section className="container content-section">
        <CartView />
      </section>
    </>
  );
}
