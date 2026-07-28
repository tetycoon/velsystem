import { TESTIMONIALS } from "../../data/content";
import { TestimonialsSection } from "../../components/Sections";

export const metadata = {
  title: "Our Customers | Vel Systems",
  description: "20,000+ customers and 500+ corporate clients trust Vel Systems."
};

export default function CustomersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Customers</h1>
          <p>20,000+ customers and 500+ corporate partners have chosen Vel Systems.</p>
        </div>
      </section>
      <section className="container content-section">
        <TestimonialsSection list={TESTIMONIALS} />
        <p className="placeholder-note">Client logos and case snapshots to be added once supplied.</p>
      </section>
    </>
  );
}
