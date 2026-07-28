import { TESTIMONIALS, HOME_QUOTES } from "../data/content";
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
          <p>{HOME_QUOTES.solarBlurb}</p>
          <WhatsAppCta label="Get a Free Solar Quote on WhatsApp" message="Hi Vel Systems, I'm interested in a solar quote for my property." extraClass="hero-cta" />
          <p className="hero-note">Placeholder hero image slot — replace with a real installed solar project photo.</p>
        </div>
      </section>
      <TrustBar />
      <section className="home-quote-strip">
        <div className="container quote-strip-inner">
          <blockquote>&ldquo;{HOME_QUOTES.serviceQuote}&rdquo;</blockquote>
          <blockquote>&ldquo;{HOME_QUOTES.scaleQuote}&rdquo;</blockquote>
        </div>
      </section>
      <AudienceSwitch />
      <PillarGrid />
      <TestimonialsSection list={TESTIMONIALS} />
      <InstagramSection />
      <GovernmentStrip />
    </>
  );
}
