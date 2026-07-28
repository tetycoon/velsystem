"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { waLink } from "../data/content";
import { getCart } from "../lib/cart";

export default function CartView() {
  const [cart, setCart] = useState([]);

  useEffect(() => { setCart(getCart()); }, []);

  if (cart.length === 0) {
    return <p>Your cart is empty. <Link href="/shop/">Browse the shop</Link>.</p>;
  }

  const total = cart.reduce((n, i) => n + i.price * i.qty, 0);
  const summary = cart.map(i => `${i.name} x${i.qty}`).join(", ");

  return (
    <>
      <div>
        {cart.map(i => (
          <div className="cart-line" key={i.slug}>
            <span>{i.name} &times; {i.qty}</span>
            <span>&#8377;{(i.price * i.qty).toLocaleString("en-IN")}</span>
          </div>
        ))}
      </div>
      <div className="cart-total">Total: &#8377;{total.toLocaleString("en-IN")}</div>
      <button className="btn btn-primary" disabled>Checkout (Payment gateway coming soon)</button>
      <p className="placeholder-note">Checkout connects to Razorpay once the account is set up. Until then, submit an enquiry and our team will confirm payment over WhatsApp or call.</p>
      <a className="btn btn-whatsapp" href={waLink(`Hi Vel Systems, I would like to place an order: ${summary}`)} target="_blank" rel="noopener noreferrer">
        Enquire About My Cart Order
      </a>
    </>
  );
}
