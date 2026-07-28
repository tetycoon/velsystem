import { BLOG_POSTS } from "../../data/content";

export const metadata = { title: "Blog | Vel Systems", description: "News and articles from Vel Systems." };

export default function BlogPage() {
  return (
    <>
      <section className="page-hero"><div className="container"><h1>Blog</h1></div></section>
      <section className="container content-section">
        <div className="blog-list">
          {BLOG_POSTS.map(post => (
            <article className="blog-card" key={post.slug}>
              <h3>{post.title}</h3>
              <p className="placeholder-note">Full post coming soon.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
