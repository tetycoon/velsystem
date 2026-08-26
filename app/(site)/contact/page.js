import { BRAND, LOCATIONS, TEAM_CONTACTS } from "../../../data/content";
import { WhatsAppCta } from "../../../components/Sections";
import EnquiryForm from "../../../components/EnquiryForm";

export const metadata = {
  alternates: { canonical: "/contact/" }, title: "Contact Us | Vel Systems", description: "Contact Vel Systems by phone, WhatsApp, or email. Three locations in Chengalpattu." };

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
                <p><strong>Phone:</strong> <a href={`tel:+${loc.phone.replace(/\D/g, "")}`}>{loc.phone}</a></p>
                <p><strong>Email:</strong> <a href={`mailto:${loc.email}`}>{loc.email}</a></p>
              </div>
            ))}
          </div>
          <div className="team-contacts">
            <h3>Direct Team Contacts</h3>
            <div className="team-contacts-table">
              {TEAM_CONTACTS.map(t => (
                <div className="team-contact-row" key={t.role}>
                  <span className="team-contact-role">{t.role}</span>
                  <a className="team-contact-phone" href={`tel:+91${t.phone.replace(/\D/g, "")}`}>{t.phone}</a>
                  <a className="team-contact-email" href={`mailto:${t.email}`}>{t.email}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <EnquiryForm />
      </section>
    </>
  );
}
