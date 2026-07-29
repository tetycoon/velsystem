import { RENTAL_CATEGORIES } from "../../data/content";
import { WhatsAppCta } from "../../components/Sections";

export const metadata = { title: "Rental | Vel Systems", description: "Rent laptops, desktops, monitors, TVs, projectors, and printers from Vel Systems." };

export default function RentalPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Rental</h1>
          <p>&ldquo;We Are Here To Rent Your Favourite Products Today!&rdquo;</p>
          <WhatsAppCta label="Enquire About Rental" message="Hi Vel Systems, I would like to enquire about equipment rental." />
        </div>
      </section>
      <section className="container content-section">
        <p>Rentals available for laptops, desktops, monitors, TVs, projectors, and printers, positioned for events, projects, or short-term use without an ownership commitment.</p>
        <div className="category-grid">
          {RENTAL_CATEGORIES.map((c, i) => (
            <div className="product-card reveal hover-lift" style={{ "--delay": `${i * 60}ms` }} key={c.name}>
              <img className="category-card-icon" src={c.image} alt="" loading="lazy" />
              <h3>{c.name}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <p>Also available: monitor, TV, TV stand, speaker with mic, and projector screen rental. Message us on WhatsApp for pricing on any of these.</p>
      </section>
    </>
  );
}
