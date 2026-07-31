import { TESTIMONIALS, HOME_QUOTES } from "../data/content";
import { WhatsAppCta, HomeStats, AudienceSwitch, PillarGrid, WhyChooseUs, HomeClients, TestimonialsSection, BlogTeaser, InstagramSection, GovernmentStrip } from "../components/Sections";

export const metadata = {
  title: "Vel Systems - Comprehensive Sales & Service for Solar, Security & IT",
  description: "Solar energy systems, CCTV & security solutions, IT hardware, and AMC contracts. 25+ years serving Chengalpattu and beyond."
};

export default function HomePage() {
  return (
    <>
      <section className="hero hero-solar hero-with-image hero-bold">
        <div className="container hero-inner-split">
          <div className="hero-inner reveal-left">
            <span className="eyebrow">25+ Years of Experience</span>
            <h1>Solar Power, Backed by 25 Years of Trust</h1>
            <p>{HOME_QUOTES.solarBlurb}</p>
            <WhatsAppCta label="Get a Free Solar Quote on WhatsApp" message="Hi Vel Systems, I'm interested in a solar quote for my property." extraClass="hero-cta" />
          </div>
          <img className="hero-photo reveal-right" src="/images/hero/hero-solar.jpg" alt="Rooftop solar installation at sunset" loading="eager" />
        </div>
      </section>
      <HomeStats />
      <section className="home-quote-strip">
        <div className="container quote-strip-inner">
          <figure className="quote-figure reveal-left">
            <img src="/images/hero/quote-service.jpg" alt="" loading="lazy" />
            <blockquote>&ldquo;{HOME_QUOTES.serviceQuote}&rdquo;</blockquote>
          </figure>
          <figure className="quote-figure reveal-right">
            <img src="/images/hero/quote-scale.jpg" alt="" loading="lazy" />
            <blockquote>&ldquo;{HOME_QUOTES.scaleQuote}&rdquo;</blockquote>
          </figure>
        </div>
      </section>
      <AudienceSwitch />
      <PillarGrid />
      <WhyChooseUs />
      <HomeClients />
      <TestimonialsSection list={TESTIMONIALS} />
      <BlogTeaser />
      <InstagramSection />
      <GovernmentStrip />
    </>
  );
}
