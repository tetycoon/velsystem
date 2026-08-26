import { notFound } from "next/navigation";
import { SECURITY_ITEMS } from "../../../../data/content";
import { WhatsAppCta, CategoryGrid } from "../../../../components/Sections";
import CategoryIcon from "../../../../components/CategoryIcon";

const BASE_URL = "https://velsystem.vercel.app";

export function generateStaticParams() {
  return SECURITY_ITEMS.map(item => ({ slug: item.slug }));
}

export function generateMetadata({ params }) {
  const item = SECURITY_ITEMS.find(i => i.slug === params.slug);
  if (!item) return {};
  const rawDesc = `${item.tagline} ${item.name} sales, installation, and after-sales service for homes and businesses in Chengalpattu, Tamil Nadu by Vel Systems — 25+ years of local experience.`;
  const description = rawDesc.length > 160 ? rawDesc.slice(0, 157) + "..." : rawDesc;
  return {
    title: `${item.name} Sales & Installation in Chengalpattu | Vel Systems`,
    description,
    alternates: { canonical: `/security-systems/${item.slug}/` }
  };
}

// Real-facts Service schema — reuses the same figures already verified and
// published elsewhere on the site (homepage trust bar), nothing invented.
function DetailServiceSchema({ item }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": item.name,
    "name": `${item.name} — Vel Systems`,
    "description": item.tagline,
    "url": `${BASE_URL}/security-systems/${item.slug}/`,
    "provider": {
      "@type": "ElectronicsStore",
      "name": "Vel Systems",
      "areaServed": { "@type": "City", "name": "Chengalpattu" }
    }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function SecurityDetailPage({ params }) {
  const item = SECURITY_ITEMS.find(i => i.slug === params.slug);
  if (!item) return notFound();
  const related = SECURITY_ITEMS.filter(i => i.slug !== item.slug).slice(0, 3);
  // Reuse the first sub-item's real product photo as the hero backdrop —
  // real, already-correct per category, no stock/fabricated image needed.
  const heroPhoto = item.subItems && item.subItems[0] && item.subItems[0].image;

  return (
    <>
      <DetailServiceSchema item={item} />
      <section
        className={`page-hero${heroPhoto ? " has-photo" : ""}`}
        style={heroPhoto ? {
          backgroundImage: `linear-gradient(120deg, rgba(13,44,107,.86) 0%, rgba(9,30,74,.75) 55%, rgba(232,40,45,.35) 160%), url(${heroPhoto})`
        } : undefined}
      >
        <div className="container detail-hero-inner">
          <div className="detail-hero-icon-badge"><CategoryIcon slug={item.slug} size={30} /></div>
          <div>
            <h1>{item.name}</h1>
            <p>{item.tagline}</p>
          </div>
        </div>
      </section>
      <section className="container content-section detail-section">
        <p className="detail-intro reveal">
          {item.body}{" "}
          Every <strong>{item.name.toLowerCase()}</strong> installation in <strong>Chengalpattu</strong> is backed by Vel Systems&rsquo; own in-house team and <strong>25+ years of local experience</strong>, so the same people who set it up are who you call for service.
        </p>

        <div className="detail-trust-strip">
          <div><strong>25+</strong><span>Years of Experience</span></div>
          <div><strong>40+</strong><span>In-House Engineers</span></div>
          <div><strong>GeM &amp; ISO 9001:2015</strong><span>Registered &amp; Certified</span></div>
          <div><strong>20,000+</strong><span>Customers Served</span></div>
        </div>

        {item.subItems && item.subItems.length > 0 && (
          <div className="detail-block">
            <h2 className="detail-block-heading">Types of {item.name}</h2>
            <div className="sub-items-grid">
              {item.subItems.map(sub => (
                <div className="sub-item-card" key={sub.name}>
                  {sub.image && <img className="sub-item-photo" src={sub.image} alt={sub.name} loading="lazy" />}
                  <h3>{sub.name}</h3>
                  <p>{sub.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {item.brands && item.brands.length > 0 && (
          <div className="detail-block">
            <h2 className="detail-block-heading">List of CCTV Brands We Have</h2>
            <div className="brand-grid">
              {item.brands.map(b => (
                <div className="brand-grid-item" key={b.name}>
                  <div className="brand-grid-logo-wrap">
                    <img src={b.logo} alt={b.name} className="brand-grid-logo" loading="lazy" />
                  </div>
                  <span className="brand-grid-name">{b.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="detail-block">
          <h2 className="detail-block-heading">Ready to Get Started?</h2>
          <div className="detail-promo-band">
            <p>
              Every {item.name.toLowerCase()} we install is planned around your actual space,
              not a generic layout — site survey, placement, cabling, and setup handled by our
              own in-house team, with AMC support available afterward so it isn't a one-time
              visit and gone.
            </p>
            <WhatsAppCta label={`Enquire About ${item.name}`} message={`Hi Vel Systems, I would like to enquire about ${item.name}.`} />
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block-heading">Related</h2>
          <CategoryGrid items={related} basePath="/security-systems/" />
        </div>
      </section>
    </>
  );
}
