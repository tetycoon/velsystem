import { notFound } from "next/navigation";
import { SECURITY_ITEMS } from "../../../data/content";
import { WhatsAppCta, CategoryGrid } from "../../../components/Sections";

export function generateStaticParams() {
  return SECURITY_ITEMS.map(item => ({ slug: item.slug }));
}

export function generateMetadata({ params }) {
  const item = SECURITY_ITEMS.find(i => i.slug === params.slug);
  if (!item) return {};
  return { title: `${item.name} | Security Systems | Vel Systems`, description: item.tagline };
}

export default function SecurityDetailPage({ params }) {
  const item = SECURITY_ITEMS.find(i => i.slug === params.slug);
  if (!item) return notFound();
  const related = SECURITY_ITEMS.filter(i => i.slug !== item.slug).slice(0, 3);
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>{item.name}</h1>
          <p>{item.tagline}</p>
        </div>
      </section>
      <section className="container content-section detail-section">
        <p>{item.body}</p>
        <WhatsAppCta label={`Enquire About ${item.name}`} message={`Hi Vel Systems, I would like to enquire about ${item.name}.`} />
        <h3>Related</h3>
        <CategoryGrid items={related} basePath="/security-systems/" />
      </section>
    </>
  );
}
