import { AMC_PLANS } from "../../data/content";
import { WhatsAppCta } from "../../components/Sections";

export const metadata = {
  title: "AMC & Service Contracts | Vel Systems",
  description: "Comprehensive AMC, Non-Comprehensive ASC, and On-Call service contracts from Vel Systems."
};

export default function AmcPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>AMC &amp; Service Contracts</h1>
          <p>Keep your systems running with a maintenance plan that fits how you actually use them.</p>
        </div>
      </section>
      <section className="container content-section">
        <div className="amc-grid">
          {AMC_PLANS.map(p => (
            <div className="amc-card" key={p.name}>
              <h3>{p.name}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
        <WhatsAppCta label="Get an AMC Quote" message="Hi Vel Systems, I would like a quote for an AMC/ASC service contract." />
      </section>
    </>
  );
}
