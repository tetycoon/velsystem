import { IT_ITEMS } from "../../../data/content";
import { CategoryGrid } from "../../../components/Sections";

export const metadata = {
  title: "IT Hardware & Solutions | Vel Systems",
  description: "Desktops, laptops, servers, networking, UPS, and IT peripherals from Vel Systems."
};

export default function ITHubPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>IT Hardware &amp; Solutions</h1>
          <p>Sales and service across the full range of business and home IT hardware.</p>
        </div>
      </section>
      <section className="container content-section">
        <CategoryGrid items={IT_ITEMS} basePath="/it-hardware/" />
      </section>
    </>
  );
}
