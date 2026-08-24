"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { waLink } from "../data/content";
import { addToCart, getCart } from "../lib/cart";

const CATEGORY_LABELS = {
  solar: "Solar",
  "security-systems": "Security Systems",
  "it-hardware": "IT Hardware",
  accessories: "Accessories",
};

export default function ShopGrid({ products = [] }) {
  const [cartCount, setCartCount] = useState(0);
  const [addedSlug, setAddedSlug] = useState(null);

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

  const featured = products.filter(p => p.featured);
  const rest = products.filter(p => !p.featured);

  function renderTile(p) {
    return (
      <div className="product-tile" key={p.slug}>
        {p.image && (
          <div className="tile-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.image} alt={p.name} loading="lazy" />
          </div>
        )}
        <span className="tile-category">{CATEGORY_LABELS[p.category] || p.category}</span>
        <h3>{p.name}</h3>
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

  if (products.length === 0) {
    return <p>No products available right now. Message us on WhatsApp and we&apos;ll help you find what you need.</p>;
  }

  return (
    <>
      {featured.length > 0 && (
        <div className="shop-featured">
          <h2>Hot Deals</h2>
          <div className="shop-grid">
            {featured.map(renderTile)}
          </div>
        </div>
      )}
      <div className="shop-grid">
        {rest.map(renderTile)}
      </div>
      {cartCount > 0 && (
        <div className="cart-bar">
          <span>{cartCount} item{cartCount > 1 ? "s" : ""} in cart</span>
          <Link href="/shop/cart/" className="btn btn-primary">View Cart</Link>
        </div>
      )}
    </>
  );
}
