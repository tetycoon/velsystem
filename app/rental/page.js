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
        <p>Laptop rentals specifically include touchscreen laptops with dedicated graphics, M.2 SSD storage, FHD displays, and fast delivery and setup.</p>
      </section>
    </>
  );
}
