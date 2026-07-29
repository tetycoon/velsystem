import Link from "next/link";
import { BLOG_POSTS } from "../../data/content";

export const metadata = { title: "Blog | Vel Systems", description: "News and articles from Vel Systems." };

export default function BlogPage() {
  return (
    <>
      <section className="page-hero"><div className="container"><h1>Blog</h1></div></section>
      <section className="container content-section">
        <div className="blog-list">
          {BLOG_POSTS.map((post, i) => (
            <Link className="blog-card reveal hover-lift" href={`/blog/${post.slug}/`} style={{ "--delay": `${(i % 4) * 60}ms` }} key={post.slug}>
              {post.image && <img className="blog-card-photo" src={post.image} alt="" loading="lazy" />}
              <h3>{post.title}</h3>
              <span className="pillar-link">Read more &rarr;</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
