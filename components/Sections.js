import Link from "next/link";
import { BRAND, waLink, THIRD_PARTY_RATING } from "../data/content";

export function WhatsAppCta({ label, message, extraClass = "" }) {
  return (
    <a className={`btn btn-whatsapp ${extraClass}`} href={waLink(message)} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

export function TrustBar() {
  const items = [
    ["25+", "Years of Experience"],
    ["20,000+", "Customers Served"],
    ["500+", "Corporate Clients"],
    ["GeM", "Registered Supplier"],
    ["ISO", "Certified"]
  ];
  return (
    <section className="trust-bar">
      <div className="container trust-grid">
        {items.map(([num, label], i) => (
          <div className="reveal-scale" style={{ "--delay": `${i * 80}ms` }} key={label}>
            <strong>{num}</strong><span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const PILLARS = [
  { name: "Solar", href: "/solar/", desc: "End-to-end solar energy systems for home, business, and industrial use." },
  { name: "Security Systems", href: "/security-systems/", desc: "CCTV, access control, biometric, fire alarm, and more." },
  { name: "IT Hardware", href: "/it-hardware/", desc: "Desktops, laptops, servers, networking, and IT peripherals." },
  { name: "AMC Contracts", href: "/amc/", desc: "Comprehensive and non-comprehensive maintenance contracts." },
  { name: "Shop", href: "/shop/", desc: "Buy select products online with direct WhatsApp support." }
];

export function PillarGrid() {
  return (
    <section className="pillars">
      <div className="container">
        <h2 className="section-title reveal">What We Do</h2>
        <div className="pillar-grid">
          {PILLARS.map((p, i) => (
            <Link className="pillar-card reveal hover-lift" style={{ "--delay": `${i * 70}ms` }} href={p.href} key={p.href}>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <span className="pillar-link">Explore &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const AUDIENCES = [
  { name: "For Home & Retail", href: "/shop/", desc: "Shop products directly or message us for a personal recommendation." },
  { name: "For Business & Institutions", href: "/amc/", desc: "AMC contracts, bulk IT hardware, and security systems for your organization." },
  { name: "For Government & Tenders", href: "/government/", desc: "GeM registered, tender-ready, with a proven supply record." }
];

export function AudienceSwitch() {
  return (
    <section className="audience-switch">
      <div className="container audience-grid">
        {AUDIENCES.map((c, i) => (
          <Link className="audience-card reveal hover-lift" style={{ "--delay": `${i * 70}ms` }} href={c.href} key={c.href}>
            <h3>{c.name}</h3>
            <p>{c.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function TestimonialsSection({ list }) {
  if (!list || list.length === 0) {
    return (
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title reveal">Customer Satisfaction Is Our Breath</h2>
          <p className="testimonials-empty reveal">
            Real client testimonials are being collected and will appear here shortly.
            If you're a Vel Systems customer and want to be featured, message us on WhatsApp.
          </p>
        </div>
      </section>
    );
  }
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title reveal">What Our Customers Say</h2>
        <div className="testimonial-grid">
          {list.map((t, i) => (
            <div className={`testimonial-card hover-lift ${i % 2 === 0 ? "reveal-left" : "reveal-right"}`} style={{ "--delay": `${i * 90}ms` }} key={i}>
              {t.image && <img className="testimonial-photo" src={t.image} alt="" loading="lazy" />}
              <p>&ldquo;{t.quote}&rdquo;</p>
              <strong>{t.name}</strong>
              <span>{t.company}</span>
            </div>
          ))}
        </div>
        {THIRD_PARTY_RATING && (
          <a
            className="rating-badge reveal"
            href={THIRD_PARTY_RATING.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>{THIRD_PARTY_RATING.rating}&#9733;</strong>
            <span>{THIRD_PARTY_RATING.reviewCount.toLocaleString("en-IN")}+ ratings on {THIRD_PARTY_RATING.source}</span>
          </a>
        )}
      </div>
    </section>
  );
}

export function InstagramSection() {
  return (
    <section className="instagram-section">
      <div className="container reveal">
        <h2 className="section-title">Follow Us on Instagram</h2>
        <p>Live feed connects once Instagram API access is configured. In the meantime, follow us directly.</p>
        <a className="btn btn-outline" href={BRAND.instagram} target="_blank" rel="noopener noreferrer">@velsystems.in</a>
      </div>
    </section>
  );
}

export function GovernmentStrip() {
  return (
    <section className="gov-strip">
      <div className="container gov-strip-inner reveal">
        <div>
          <h2>Government, PSU &amp; Institution Supply</h2>
          <p>GeM registered. Experience supplying schools, colleges, government offices, and corporate campuses, with AMC support after the sale.</p>
        </div>
        <WhatsAppCta
          label="Request a Quotation for Tender"
          message="Hi Vel Systems, I would like to request a quotation for a government/institutional tender."
          extraClass="gov-cta"
        />
      </div>
    </section>
  );
}

export function CategoryGrid({ items, basePath }) {
  return (
    <div className="category-grid">
      {items.map((item, i) => (
        <Link className="product-card reveal hover-lift" style={{ "--delay": `${(i % 4) * 60}ms` }} href={`${basePath}${item.slug}/`} key={item.slug}>
          {item.icon && <img className="category-card-icon" src={item.icon} alt="" loading="lazy" />}
          <h3>{item.name}</h3>
          <p>{item.tagline}</p>
        </Link>
      ))}
    </div>
  );
}
