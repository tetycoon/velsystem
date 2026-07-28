import Link from "next/link";
import { BRAND, waLink } from "../data/content";
import Chatbot from "./Chatbot";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h4>{BRAND.name}</h4>
            <p>{BRAND.address}</p>
            <p>GSTIN: {BRAND.gstin}</p>
            <p>{BRAND.phone} &nbsp;|&nbsp; {BRAND.email}</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/about/">About Us</Link></li>
              <li><Link href="/amc/">Our Services</Link></li>
              <li><Link href="/customers/">Our Customers</Link></li>
              <li><Link href="/government/">Government &amp; Institutions</Link></li>
              <li><Link href="/contact/">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4>Solutions</h4>
            <ul className="footer-links">
              <li><Link href="/solar/">Solar</Link></li>
              <li><Link href="/security-systems/">Security Systems</Link></li>
              <li><Link href="/it-hardware/">IT Hardware</Link></li>
              <li><Link href="/amc/">AMC Contracts</Link></li>
              <li><Link href="/shop/">Shop</Link></li>
            </ul>
          </div>
          <div>
            <h4>Follow Us</h4>
            <ul className="footer-links">
              <li><a href={BRAND.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href={BRAND.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href={BRAND.youtube} target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href={waLink("Hi Vel Systems, I have a question.")} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>Copyright &copy; Vel Systems {new Date().getFullYear()}</p>
        </div>
      </footer>
      <a
        className="whatsapp-float"
        href={waLink("Hi Vel Systems, I'm on your website and would like to know more.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        WA
      </a>
      <Chatbot />
    </>
  );
}
