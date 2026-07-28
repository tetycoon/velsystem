import { BRAND, LOCATIONS, TEAM_CONTACTS } from "../../data/content";
import { WhatsAppCta } from "../../components/Sections";
import EnquiryForm from "../../components/EnquiryForm";

export const metadata = { title: "Contact Us | Vel Systems", description: "Contact Vel Systems by phone, WhatsApp, or email. Three locations in Chengalpattu." };

export default function ContactPage() {
  return (
    <>
      <section className="page-hero"><div className="container"><h1>Contact Us</h1></div></section>
      <section className="container content-section contact-section">
        <div className="contact-info">
          <WhatsAppCta label="Chat on WhatsApp" message="Hi Vel Systems, I have a question." />
          <div className="locations-list">
            {LOCATIONS.map(loc => (
              <div className="location-card" key={loc.name}>
                <h3>{loc.name}</h3>
                <p>{loc.address}</p>
                <p><strong>Phone:</strong> {loc.phone}</p>
                <p><strong>Email:</strong> {loc.email}</p>
              </div>
            ))}
          </div>
          <div className="team-contacts">
            <h3>Direct Team Contacts</h3>
            <ul>
              {TEAM_CONTACTS.map(t => (
                <li key={t.role}><strong>{t.role}:</strong> {t.phone} &middot; {t.email}</li>
              ))}
            </ul>
          </div>
        </div>
        <EnquiryForm />
      </section>
    </>
  );
}
