"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NAV, UTILITY_NAV, BRAND, waLink, SECURITY_ITEMS, IT_ITEMS } from "../data/content";

export default function Header() {
  const current = usePathname();
  const [open, setOpen] = useState(false);

  function dropdownFor(item) {
    if (item.children === "security") {
      return SECURITY_ITEMS.map(s => (
        <Link key={s.slug} href={`/security-systems/${s.slug}/`}>
          {s.icon && <img className="dropdown-icon" src={s.icon} alt="" />}
          {s.name}
        </Link>
      ));
    }
    if (item.children === "itHardware") {
      return IT_ITEMS.map(s => (
        <Link key={s.slug} href={`/it-hardware/${s.slug}/`}>
          {s.icon && <img className="dropdown-icon" src={s.icon} alt="" />}
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
          <span>{BRAND.email} &nbsp;|&nbsp; {BRAND.phone}</span>
          <div className="social-links">
            <a href={waLink("Hi Vel Systems, I have a question.")} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={BRAND.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={BRAND.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </div>
      <div className="container header-inner">
        <Link href="/" className="logo">
          <img src="/images/vel-systems-logo.png" alt="Vel Systems - Sales, Service, Accessories" className="logo-img" />
        </Link>
        <div className="header-badges">
          <img src="/images/badges/25-years-excellence.png" alt="25+ Years of Excellence" />
          <img src="/images/badges/gem-logo.png" alt="GeM Registered Supplier" />
          <img src="/images/badges/iso-9001-2015.png" alt="ISO 9001:2015 Certified" />
        </div>
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
