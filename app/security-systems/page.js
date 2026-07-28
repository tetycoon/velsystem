import { SECURITY_ITEMS } from "../../data/content";
import { CategoryGrid } from "../../components/Sections";

export const metadata = {
  title: "Security Systems | Vel Systems",
  description: "CCTV, access control, biometric systems, fire alarms, and more security solutions from Vel Systems."
};

export default function SecurityHubPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Security Systems</h1>
          <p>Complete security solutions for homes, offices, institutions, and industrial sites.</p>
        </div>
      </section>
      <section className="container content-section">
        <CategoryGrid items={SECURITY_ITEMS} basePath="/security-systems/" />
      </section>
    </>
  );
}
