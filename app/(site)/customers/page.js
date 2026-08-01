import { TESTIMONIALS, CLIENT_LOGOS, ADDITIONAL_CLIENTS } from "../../../data/content";
import { TestimonialsSection } from "../../../components/Sections";

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
        <h2>Some of the Businesses We Work With</h2>
        <div className="client-logo-grid">
          {CLIENT_LOGOS.map(c => (
            <div className="client-logo-tile" key={c.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.image} alt={c.name} loading="lazy" />
              <span>{c.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="container content-section">
        <h2>And Many More Across Chengalpattu &amp; Beyond</h2>
        <p>From our company profile: factories, schools, hospitals, and businesses that trust Vel Systems for IT, security, and solar.</p>
        <div className="trusted-by-list">
          {ADDITIONAL_CLIENTS.map(name => <span className="trusted-by-item" key={name}>{name}</span>)}
        </div>
      </section>
      <section className="container content-section">
        <TestimonialsSection list={TESTIMONIALS} />
      </section>
    </>
  );
}
