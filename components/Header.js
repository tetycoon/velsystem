"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { NAV, UTILITY_NAV, BRAND, waLink, SECURITY_ITEMS, IT_ITEMS } from "../data/content";
import CategoryIcon from "./CategoryIcon";

export default function Header() {
  const current = usePathname();
  const [open, setOpen] = useState(false);

  function dropdownFor(item) {
    if (item.children === "security") {
      return SECURITY_ITEMS.map(s => (
        <Link key={s.slug} href={`/security-systems/${s.slug}/`}>
          <CategoryIcon slug={s.slug} size={18} className="dropdown-icon" />
          {s.name}
        </Link>
      ));
    }
    if (item.children === "itHardware") {
      return IT_ITEMS.map(s => (
        <Link key={s.slug} href={`/it-hardware/${s.slug}/`}>
          <CategoryIcon slug={s.slug} size={18} className="dropdown-icon" />
          {s.name}
        </Link>
      ));
    }
    return null;
  }

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="topbar-contact">
            <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            &nbsp;|&nbsp;
            <a href="tel:+919865199933">{BRAND.phone}</a>
            &nbsp;|&nbsp;
            <a href="mailto:service@velsystems.in">service@velsystems.in</a>
            &nbsp;/&nbsp;
            <a href="tel:+919865180110">(+91) 98651 80110</a>
            <span className="topbar-contact-label">Service</span>
          </span>
          <div className="social-links">
            <a href={waLink("Hi Vel Systems, I have a question.")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href={BRAND.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href={BRAND.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className="container header-inner">
        <Link href="/" className="logo">
          <img src="/images/vel-systems-logo.png" alt="Vel Systems - Sales, Service, Accessories" className="logo-img" />
        </Link>
        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen(!open)}>&#9776;</button>
        <nav className={`main-nav${open ? " open" : ""}`}>
          <ul className="nav-main">
            {NAV.map(item => {
              const dropdown = dropdownFor(item);
              return (
                <li key={item.href} className={`nav-item${dropdown ? " has-dropdown" : ""}`}>
                  <Link href={item.href} className={current === item.href ? "active" : ""}>{item.label}</Link>
                  {dropdown && <div className="dropdown">{dropdown}</div>}
                </li>
              );
            })}
          </ul>
          <ul className="nav-utility">
            {UTILITY_NAV.map(item => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
          <a className="btn btn-whatsapp nav-cta" href={waLink("Hi Vel Systems, I would like a quote.")} target="_blank" rel="noopener noreferrer">
            WhatsApp Enquiry
          </a>
        </nav>
      </div>
    </header>
  );
}
