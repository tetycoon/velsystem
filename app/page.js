import { TESTIMONIALS } from "../data/content";
import { WhatsAppCta, TrustBar, AudienceSwitch, PillarGrid, TestimonialsSection, InstagramSection, GovernmentStrip } from "../components/Sections";

export const metadata = {
  title: "Vel Systems - Comprehensive Sales & Service for Solar, Security & IT",
  description: "Solar energy systems, CCTV & security solutions, IT hardware, and AMC contracts. 25+ years serving Chengalpattu and beyond."
};

export default function HomePage() {
  return (
    <>
      <section className="hero hero-solar">
        <div className="container hero-inner">
          <span className="eyebrow">25+ Years of Experience</span>
          <h1>Solar Power, Backed by 25 Years of Trust</h1>
          <p>End-to-end solar energy solutions for homes, businesses, and industrial sites, from the same team that has kept Chengalpattu running on reliable tech and security since 2002.</p>
          <WhatsAppCta label="Get a Free Solar Quote on WhatsApp" message="Hi Vel Systems, I'm interested in a solar quote for my property." extraClass="hero-cta" />
          <p className="hero-note">Placeholder hero image slot — replace with a real installed solar project photo.</p>
        </div>
      </section>
      <TrustBar />
      <AudienceSwitch />
      <PillarGrid />
      <TestimonialsSection list={TESTIMONIALS} />
      <InstagramSection />
      <GovernmentStrip />
    </>
  );
}
