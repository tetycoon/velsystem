import { TESTIMONIALS, HOME_QUOTES } from "../../data/content";
import { WhatsAppCta, HomeStats, AudienceSwitch, PillarGrid, WhyChooseUs, HomeClients, TestimonialsSection, BlogTeaser, InstagramSection, GovernmentStrip } from "../../components/Sections";

export const metadata = {
  alternates: { canonical: "/" },
  title: "Solar Panel Dealer in Chengalpattu | Vel Systems",
  description: "Solar panel dealer and installer in Chengalpattu, Tamil Nadu. Also CCTV & security systems, IT hardware, and AMC contracts. 25+ years of local service."
};

export default function HomePage() {
  return (
    <>
      <section className="hero hero-solar hero-with-image hero-bold">
        <div className="container hero-inner-split">
          <div className="hero-inner">
            <span className="eyebrow hero-anim" style={{ "--hero-delay": "0s" }}>25+ Years of Experience</span>
            <h1 className="hero-anim" style={{ "--hero-delay": "0.12s" }}>Solar Panel Dealer in Chengalpattu, Backed by 25 Years of Trust</h1>
            <p className="hero-anim" style={{ "--hero-delay": "0.24s" }}>{HOME_QUOTES.solarBlurb}</p>
            <div className="hero-anim" style={{ "--hero-delay": "0.36s" }}>
              <WhatsAppCta label="Get a Free Solar Quote on WhatsApp" message="Hi Vel Systems, I'm interested in a solar quote for my property." extraClass="hero-cta" />
            </div>
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
