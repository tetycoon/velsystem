import { BRAND } from "../../data/content";
import { WhatsAppCta } from "../../components/Sections";
import EnquiryForm from "../../components/EnquiryForm";

export const metadata = { title: "Contact Us | Vel Systems", description: "Contact Vel Systems by phone, WhatsApp, or email." };

export default function ContactPage() {
  return (
    <>
      <section className="page-hero"><div className="container"><h1>Contact Us</h1></div></section>
      <section className="container content-section contact-section">
        <div className="contact-info">
          <p><strong>Address:</strong> {BRAND.address}</p>
          <p><strong>Phone:</strong> {BRAND.phone}</p>
          <p><strong>Email:</strong> {BRAND.email}</p>
          <WhatsAppCta label="Chat on WhatsApp" message="Hi Vel Systems, I have a question." />
        </div>
        <EnquiryForm />
      </section>
    </>
  );
}
