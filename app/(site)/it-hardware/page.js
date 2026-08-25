import { IT_ITEMS } from "../../../data/content";
import { CategoryGrid } from "../../../components/Sections";
import ITHeroCarousel from "../../../components/ITHeroCarousel";

export const metadata = {
  alternates: { canonical: "/it-hardware/" },
  title: "IT Hardware & Solutions | Vel Systems",
  description: "Desktops, laptops, servers, networking, UPS, and IT peripherals from Vel Systems."
};

export default function ITHubPage() {
  return (
    <>
      <ITHeroCarousel />
      <section className="container content-section">
        <CategoryGrid items={IT_ITEMS} basePath="/it-hardware/" />
      </section>
    </>
  );
}
