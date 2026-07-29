import { notFound } from "next/navigation";
import { BLOG_POSTS } from "../../../data/content";
import { WhatsAppCta } from "../../../components/Sections";
import Link from "next/link";

export function generateStaticParams() {
  return BLOG_POSTS.map(post => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Vel Systems Blog`,
    description: post.body ? post.body[0] : post.title
  };
}

export default function BlogPostPage({ params }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  if (!post) return notFound();
  const related = BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link href="/blog/" className="blog-back-link">&larr; Back to Blog</Link>
          <h1>{post.title}</h1>
        </div>
      </section>
      <section className="container content-section blog-post-section">
        {post.image && <img className="blog-post-hero-photo" src={post.image} alt="" loading="eager" />}
        <article className="blog-post-body">
          {(post.body || []).map((para, i) => <p key={i}>{para}</p>)}
        </article>
        <WhatsAppCta label="Ask Us About This on WhatsApp" message={`Hi Vel Systems, I read "${post.title}" and had a question.`} />
        {related.length > 0 && (
          <>
            <h3>More From the Blog</h3>
            <div className="blog-list">
              {related.map(p => (
                <Link className="blog-card hover-lift" href={`/blog/${p.slug}/`} key={p.slug}>
                  {p.image && <img className="blog-card-photo" src={p.image} alt="" loading="lazy" />}
                  <h3>{p.title}</h3>
                </Link>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
