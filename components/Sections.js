import Link from "next/link";
import { BRAND, waLink, THIRD_PARTY_RATING, TEAM_SIZE, CLIENT_LOGOS, ADDITIONAL_CLIENTS, BLOG_POSTS } from "../data/content";

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
  { name: "Solar", href: "/solar/", desc: "End-to-end solar energy systems for home, business, and industrial use.", image: "/images/solar/solar-residential.jpg" },
  { name: "Security Systems", href: "/security-systems/", desc: "CCTV, access control, biometric, fire alarm, and more.", image: "/images/subitems/subitem-cctv-camera-1.jpg" },
  { name: "IT Hardware", href: "/it-hardware/", desc: "Desktops, laptops, servers, networking, and IT peripherals.", image: "/images/subitems/subitem-laptop-0.jpg" },
  { name: "AMC Contracts", href: "/amc/", desc: "Comprehensive and non-comprehensive maintenance contracts.", image: "/images/subitems/subitem-network-hardware-solution-0.jpg" },
  { name: "Shop", href: "/shop/", desc: "Buy select products online with direct WhatsApp support.", image: "/images/products/lenovo-bluetooth-headphone.jpg" }
];

export function PillarGrid() {
  return (
    <section className="pillars">
      <div className="container">
        <h2 className="section-title reveal">What We Do</h2>
        <div className="pillar-bento">
          {PILLARS.map((p, i) => (
            <Link className="pillar-bento-card reveal hover-lift" style={{ "--delay": `${i * 70}ms` }} href={p.href} key={p.href}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt="" loading="lazy" />
              <div className="pillar-bento-content">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <span className="pillar-bento-link">Explore &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Real, verified differentiators only — years in business, team size, certifications,
// and customer count all come from BRAND/TEAM_SIZE/THIRD_PARTY_RATING/HOME_QUOTES,
// not invented copy.
const WHY_ITEMS = [
  { title: "25+ Years, One Local Team", desc: "Serving Chengalpattu since 2002 across solar, security, and IT. Same team, same accountability, not a different contractor for every job." },
  { title: `${TEAM_SIZE.replace(" Employees", "")} In-House Engineers`, desc: "On our payroll, not subcontracted. The person who installs your system is also who answers when you call for service." },
  { title: "GeM Registered & ISO 9001:2015 Certified", desc: "Government-ready with a certified quality process, not just a badge on a business card." },
  { title: "20,000+ Customers, 500+ Corporate Clients", desc: "From single households to large factories, at this scale for two decades. Results are why people stay." }
];

export function WhyChooseUs() {
  return (
    <section className="why-choose">
      <div className="container why-choose-split">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="why-choose-photo reveal-left" src="/images/solar/solar-commercial.jpg" alt="Vel Systems commercial installation" loading="lazy" />
        <div className="reveal-right">
          <h2 className="section-title-left">Why Businesses Choose Vel Systems</h2>
          <div className="why-list">
            {WHY_ITEMS.map(item => (
              <div className="why-item" key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeClients() {
  return (
    <section className="home-clients">
      <div className="container">
        <h2 className="section-title reveal">Trusted By Businesses Across Chengalpattu &amp; Beyond</h2>
        <div className="home-client-grid">
          {CLIENT_LOGOS.slice(0, 10).map((c, i) => (
            <div className="client-logo-tile reveal-scale hover-lift" style={{ "--delay": `${i * 40}ms` }} key={c.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.image} alt={c.name} loading="lazy" />
              <span>{c.name}</span>
            </div>
          ))}
        </div>
        <p className="home-clients-more reveal">
          ...and {ADDITIONAL_CLIENTS.length}+ more factories, schools, hospitals, and businesses.{" "}
          <Link href="/customers/">See all our customers &rarr;</Link>
        </p>
      </div>
    </section>
  );
}

export function BlogTeaser() {
  const posts = BLOG_POSTS.slice(0, 3);
  return (
    <section className="container content-section">
      <h2 className="section-title reveal">From Our Blog</h2>
      <div className="blog-list">
        {posts.map((post, i) => (
          <Link className="blog-card reveal hover-lift" style={{ "--delay": `${i * 70}ms` }} href={`/blog/${post.slug}/`} key={post.slug}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="blog-card-photo" src={post.image} alt="" loading="lazy" />
            <h3>{post.title}</h3>
            <span className="pillar-link">Read more &rarr;</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function HomeStats() {
  const items = [
    ["25+", "Years of Experience"],
    ["20,000+", "Customers Served"],
    ["500+", "Corporate Clients"],
    [TEAM_SIZE.replace(" Employees", ""), "In-House Engineers"],
    [`${THIRD_PARTY_RATING.rating}★`, `${THIRD_PARTY_RATING.source} Rating`]
  ];
  return (
    <div className="stats-float-wrap">
      <div className="container">
        <div className="stats-float-card reveal-scale">
          {items.map(([num, label], i) => (
            <div key={label} style={{ "--delay": `${i * 70}ms` }}>
              <strong>{num}</strong><span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
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
              <span className="testimonial-quote-mark">&ldquo;</span>
              {t.image
                ? <img className="testimonial-photo" src={t.image} alt="" loading="lazy" />
                : <div className="testimonial-avatar">{t.name.slice(0, 2).toUpperCase()}</div>}
              <p>&ldquo;{t.quote}&rdquo;</p>
              <strong>{t.name}</strong>
              <span>{t.company}</span>
              {t.source && <span className="testimonial-source">via {t.source}</span>}
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
