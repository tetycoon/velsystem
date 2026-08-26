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
  return (
    <>
      <section className="page-hero">
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
          <div className="sub-items-grid">
            {item.subItems.map(sub => (
              <div className="sub-item-card" key={sub.name}>
                {sub.image && <img className="sub-item-photo" src={sub.image} alt={sub.name} loading="lazy" />}
                <h3>{sub.name}</h3>
                <p>{sub.desc}</p>
              </div>
            ))}
          </div>
        )}
        {item.brands && item.brands.length > 0 && (
          <div className="brand-marquee-wrap">
            <h3 className="brand-marquee-heading">List of CCTV Brands We Have</h3>
            <div className="brand-marquee">
              <div className="brand-marquee-track">
                {[...item.brands, ...item.brands].map((b, i) => (
                  <div className="brand-marquee-item" key={`${b.name}-${i}`}>
                    <img src={b.logo} alt={b.name} className="brand-marquee-logo" loading="lazy" />
                    <span className="brand-marquee-name">{b.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <WhatsAppCta label={`Enquire About ${item.name}`} message={`Hi Vel Systems, I would like to enquire about ${item.name}.`} />
        <h3>Related</h3>
        <CategoryGrid items={related} basePath="/security-systems/" />
      </section>
    </>
  );
}
