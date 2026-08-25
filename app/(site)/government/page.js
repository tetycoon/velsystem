import { BRAND } from "../../../data/content";
import { WhatsAppCta } from "../../../components/Sections";

export const metadata = {
  alternates: { canonical: "/government/" },
  title: "Government, PSU & Institution Supply | Vel Systems",
  description: "GeM registered supplier for government offices, schools, colleges, and corporate campuses."
};

export default function GovernmentPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Government, PSU &amp; Institution Supply</h1>
          <p>GeM registered. Proven record supplying IT hardware, security systems, and AMC support to government offices, schools, colleges, and corporate campuses.</p>
          <WhatsAppCta label="Request a Quotation for Tender" message="Hi Vel Systems, I would like to request a quotation for a government/institutional tender." />
        </div>
      </section>
      <section className="container content-section why-solar-split">
        <div className="reveal-left">
          <h2>Why Institutions Work With Us</h2>
          <ul className="check-list">
            <li>GeM registered, GSTIN {BRAND.gstin}.</li>
            <li>25+ years supplying IT hardware and security systems at scale.</li>
            <li>AMC and on-call support after delivery, not just a one-time sale.</li>
            <li>Bulk supply capability across desktops, laptops, networking, CCTV, and access control.</li>
          </ul>
          <p className="placeholder-note">GeM certificate, tender award letters, and compliance documents to be added here once supplied.</p>
        </div>
        <img className="reveal-right gem-badge-photo" src="/images/badges/gem-logo.png" alt="Government e Marketplace registered supplier badge" loading="lazy" />
      </section>
    </>
  );
}
