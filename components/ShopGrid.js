"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { SHOP_PRODUCTS, waLink } from "../data/content";
import { addToCart, getCart } from "../lib/cart";

export default function ShopGrid() {
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

  return (
    <>
      <div className="shop-grid">
        {SHOP_PRODUCTS.map(p => (
          <div className="product-tile" key={p.slug}>
            {p.image && (
              <div className="tile-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.name} loading="lazy" />
              </div>
            )}
            <span className="tile-category">{p.category}</span>
            <h3>{p.name}</h3>
            <p className="price">&#8377;{p.price.toLocaleString("en-IN")}</p>
            <button className="btn btn-outline" onClick={() => handleAdd(p)}>
              {addedSlug === p.slug ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
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
