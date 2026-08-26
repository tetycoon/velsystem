import { notFound } from "next/navigation";
import { SECURITY_ITEMS } from "../../../../data/content";
import { WhatsAppCta, CategoryGrid } from "../../../../components/Sections";
import CategoryIcon from "../../../../components/CategoryIcon";

export function generateStaticParams() {
  return SECURITY_ITEMS.map(item => ({ slug: item.slug }));
}

export function generateMetadata({ params }) {
  const item = SECURITY_ITEMS.find(i => i.slug === params.slug);
  if (!item) return {};
  return { title: `${item.name} | Security Systems | Vel Systems`, description: item.tagline, alternates: { canonical: `/security-systems/${item.slug}/` } };
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
        <p>{item.body}</p>

        {item.subItems && item.subItems.length > 0 && (
          <div className="detail-block">
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
          <WhatsAppCta label={`Enquire About ${item.name}`} message={`Hi Vel Systems, I would like to enquire about ${item.name}.`} />
        </div>

        <div className="detail-block">
          <h2 className="detail-block-heading">Related</h2>
          <CategoryGrid items={related} basePath="/security-systems/" />
        </div>
      </section>
    </>
  );
}
