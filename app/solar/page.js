import { WhatsAppCta, GovernmentStrip } from "../../components/Sections";

export const metadata = {
  title: "Solar Energy Solutions | Vel Systems",
  description: "End-to-end solar power systems for homes, businesses, and industrial sites, backed by 25 years of service experience."
};

export default function SolarPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Solar Expertise</h1>
          <p>We design and install solar energy systems tailored to homeowners, business owners, and industrial operators, clean, efficient, and built for long-term value.</p>
          <WhatsAppCta label="Get a Free Solar Quote on WhatsApp" message="Hi Vel Systems, I'm interested in a solar quote for my property." />
        </div>
      </section>
      <section className="container content-section">
        <h2>Why Solar With Vel Systems</h2>
        <ul className="check-list">
          <li>25+ years of technical service experience in Chengalpattu and surrounding areas.</li>
          <li>End-to-end handling: site assessment, design, installation, and after-sale support.</li>
          <li>Scalable systems for homes, shops, offices, and industrial rooftops.</li>
        </ul>
        <p className="placeholder-note">Package tiers and installed project photos to be added once first solar projects/photos are supplied.</p>
      </section>
      <GovernmentStrip />
    </>
  );
}
