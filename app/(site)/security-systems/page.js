import { SECURITY_ITEMS } from "../../../data/content";
import { CategoryGrid } from "../../../components/Sections";
import SecurityHeroCarousel from "../../../components/SecurityHeroCarousel";

export const metadata = {
  alternates: { canonical: "/security-systems/" },
  title: "Security Systems | Vel Systems",
  description: "CCTV, access control, biometric systems, fire alarms, and more security solutions from Vel Systems."
};

export default function SecurityHubPage() {
  return (
    <>
      <SecurityHeroCarousel />
      <section className="container content-section">
        <CategoryGrid items={SECURITY_ITEMS} basePath="/security-systems/" />
      </section>
    </>
  );
}
