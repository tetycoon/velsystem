import { SOLAR_TYPES, SOLAR_FINANCE, SOLAR_FAQ, TRUSTED_BY, TESTIMONIALS } from "../../../data/content";
import { WhatsAppCta, GovernmentStrip } from "../../../components/Sections";
import SolarHeroCarousel from "../../../components/SolarHeroCarousel";

// Mirrors the visible "Solar FAQ" section below word-for-word — required by
// Google's structured data guidelines, and it's what makes these questions
// eligible to show as an expandable FAQ rich result in search.
function SolarFAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SOLAR_FAQ.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export const metadata = {
  alternates: { canonical: "/solar/" },
  title: "Solar Panel Dealer & Installer in Chengalpattu, Tamil Nadu | Vel Systems",
  description: "Vel Systems is a solar panel dealer and installer serving Chengalpattu and Tamil Nadu, for homes, businesses, and industrial sites, backed by 25+ years."
};

export default function SolarPage() {
  const testimonial = TESTIMONIALS[0];
  return (
    <>
      <SolarFAQSchema />
      <SolarHeroCarousel />

      <section className="container content-section">
        <h2>Our Customized Solutions</h2>
        <div className="solar-types-grid">
          {SOLAR_TYPES.map((t, i) => (
            <div className="solar-type-card reveal hover-lift" style={{ "--delay": `${i * 60}ms` }} key={t.name}>
              {t.image && <img className="solar-type-photo" src={t.image} alt={t.name} loading="lazy" />}
              <h3>{t.name}</h3>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container content-section why-solar-split">
        <div className="reveal-left">
          <h2>Why Solar With Vel Systems</h2>
          <ul className="check-list">
            <li>Residential &amp; commercial solar panel installation</li>
            <li>On-grid, off-grid &amp; hybrid systems</li>
            <li>High-quality solar inverters &amp; batteries</li>
            <li>Expert guidance, hassle-free setup, and AMC support</li>
          </ul>
          <p>We use trusted brands and the latest technology to ensure maximum output and long-term reliability. From planning to installation and after-sales service, we provide end-to-end solar solutions.</p>
        </div>
        <img className="why-solar-photo reveal-right" src="/images/solar/solar-installation.jpg" alt="Vel Systems technician installing rooftop solar panels" loading="lazy" />
      </section>

      <section className="container content-section solar-finance">
        <h2>Subsidy + EMI = Hassle-Free Solar for All</h2>
        <div className="finance-grid">
          <div>
            <h3>Finance</h3>
            <p>Interest: {SOLAR_FINANCE.overview.interest}</p>
            <p>Loan Tenure: {SOLAR_FINANCE.overview.tenure}</p>
            <p>Loan Amount: {SOLAR_FINANCE.overview.amount}</p>
            <p>Finance By: {SOLAR_FINANCE.overview.financeBy}</p>
          </div>
          <div>
            <h3>Loan Types &amp; Interest Rates</h3>
            {SOLAR_FINANCE.loanTypes.map(l => (
              <p key={l.name}><strong>{l.name}:</strong> {l.rate}</p>
            ))}
          </div>
          <div>
            <h3>Subsidy for Residential Households</h3>
            {SOLAR_FINANCE.residentialSubsidy.map(line => <p key={line}>{line}</p>)}
          </div>
          <div>
            <h3>Subsidy for GHS / RWA Households</h3>
            <p>{SOLAR_FINANCE.ghsSubsidy}</p>
          </div>
        </div>
        <p className="placeholder-note">Financing partners and rates change. Reconfirm these figures with Vel Systems before publishing to a live audience.</p>
      </section>

      {testimonial && (
        <section className="container content-section">
          <div className="testimonial-card solar-testimonial reveal">
            {testimonial.image && <img className="testimonial-photo" src={testimonial.image} alt={testimonial.company} loading="lazy" />}
            <p>&ldquo;{testimonial.quote}&rdquo;</p>
            <strong>{testimonial.name}</strong>
            <span>{testimonial.company}</span>
          </div>
        </section>
      )}

      <section className="gov-strip">
        <div className="container gov-strip-inner">
          <div>
            <h2>Let the Sun Pay Your Bills</h2>
            <p>Cut down electricity expenses with our end-to-end solar installation services, backed by 25+ years of trust and 20,000+ happy clients.</p>
          </div>
          <WhatsAppCta label="Talk to Our Solar Experts Today" message="Hi Vel Systems, I'd like to talk to your solar experts." extraClass="gov-cta" />
        </div>
      </section>

      <section className="container content-section">
        <h2>Solar FAQ</h2>
        <div className="faq-list">
          {SOLAR_FAQ.map((f, i) => (
            <details className="faq-item" key={i}>
              <summary>{i + 1}. {f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="container content-section">
        <h2>Trusted By</h2>
        <div className="trusted-by-list">
          {TRUSTED_BY.map(name => <span className="trusted-by-item" key={name}>{name}</span>)}
        </div>
      </section>

      <GovernmentStrip />
    </>
  );
}
