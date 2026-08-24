"use client";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Sun, ShieldCheck, Laptop, Headphones, LayoutGrid } from "lucide-react";
import { waLink } from "../data/content";
import { addToCart, getCart } from "../lib/cart";

const CATEGORIES = [
  { value: "all", label: "All", icon: LayoutGrid },
  { value: "solar", label: "Solar", icon: Sun },
  { value: "security-systems", label: "Security Systems", icon: ShieldCheck },
  { value: "it-hardware", label: "IT Hardware", icon: Laptop },
  { value: "accessories", label: "Accessories", icon: Headphones },
];

const CATEGORY_LABELS = Object.fromEntries(CATEGORIES.filter(c => c.value !== "all").map(c => [c.value, c.label]));

export default function ShopGrid({ products = [] }) {
  const [cartCount, setCartCount] = useState(0);
  const [addedSlug, setAddedSlug] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const cart = getCart();
    setCartCount(cart.reduce((n, i) => n + i.qty, 0));
  }, []);

  function handleAdd(product) {
    const cart = addToCart(product);
    setCartCount(cart.reduce((n, i) => n + i.qty, 0));
    setAddedSlug(product.slug);
    setTimeout(() => setAddedSlug(null), 1200);
  }

  const filtered = useMemo(
    () => activeCategory === "all" ? products : products.filter(p => p.category === activeCategory),
    [products, activeCategory]
  );
  const featured = filtered.filter(p => p.featured);
  const rest = filtered.filter(p => !p.featured);

  function renderTile(p) {
    return (
      <div className="product-tile" key={p.slug}>
        {p.featured && <span className="hot-deal-ribbon">Hot Deal</span>}
        {p.image && (
          <div className="tile-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.image} alt={p.name} loading="lazy" />
          </div>
        )}
        <span className="tile-category">{CATEGORY_LABELS[p.category] || p.category}</span>
        <h3>{p.name}</h3>
        <span className="tile-stock"><span className="tile-stock-dot" aria-hidden="true" />In Stock</span>
        {p.quoteOnly ? (
          <>
            <p className="price">Price on request</p>
            <a
              className="btn btn-outline"
              href={waLink(`Hi Vel Systems, I would like a price quote for: ${p.name}`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get a Quote
            </a>
          </>
        ) : (
          <>
            <p className="price">&#8377;{Number(p.price || 0).toLocaleString("en-IN")}</p>
            <button className="btn btn-outline" onClick={() => handleAdd(p)}>
              {addedSlug === p.slug ? "Added" : "Add to Cart"}
            </button>
          </>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="shop-toolbar">
        {CATEGORIES.map(c => {
          const Icon = c.icon;
          return (
            <button
              key={c.value}
              type="button"
              className={`shop-filter-pill${activeCategory === c.value ? " active" : ""}`}
              onClick={() => setActiveCategory(c.value)}
            >
              <Icon size={15} strokeWidth={2} aria-hidden="true" />
              {c.label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="shop-empty">No products in this category yet. Message us on WhatsApp and we&apos;ll help you find what you need.</p>
      ) : (
        <>
          {featured.length > 0 && (
            <div className="shop-featured">
              <h2 className="shop-section-heading">Hot Deals</h2>
              <div className="shop-grid">
                {featured.map(renderTile)}
              </div>
            </div>
          )}
          {rest.length > 0 && (
            <>
              {featured.length > 0 && <h2 className="shop-section-heading">All Products</h2>}
              <div className="shop-grid">
                {rest.map(renderTile)}
              </div>
            </>
          )}
        </>
      )}

      {cartCount > 0 && (
        <div className="cart-bar">
          <span>{cartCount} item{cartCount > 1 ? "s" : ""} in cart</span>
          <Link href="/shop/cart/" className="btn btn-primary">View Cart</Link>
        </div>
      )}
    </>
  );
}
