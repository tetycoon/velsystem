import { WhatsAppCta } from "../../components/Sections";

export const metadata = { title: "Rental | Vel Systems", description: "Equipment rental services from Vel Systems." };

export default function RentalPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Rental</h1>
          <p>Short and long-term rental options for select IT and event equipment.</p>
          <WhatsAppCta label="Enquire About Rental" message="Hi Vel Systems, I would like to enquire about equipment rental." />
        </div>
      </section>
      <section className="container content-section">
        <p className="placeholder-note">Full rental equipment list to be added once supplied by Vel Systems.</p>
      </section>
    </>
  );
}
