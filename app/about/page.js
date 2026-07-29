import { TrustBar } from "../../components/Sections";
import { TEAM_SIZE } from "../../data/content";

export const metadata = {
  title: "About Us | Vel Systems",
  description: "Founded in 2002, Vel Systems has served Chengalpattu for over 25 years across IT, security, and now solar."
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero"><div className="container"><h1>About Us</h1></div></section>
      <section className="container content-section">
        <p>Founded in 2002 by Dr. Rtn. K. Murali Krishnan, Vel Systems is a reputable company registered under the Tamil Nadu Sales Registration Act. For over two decades we've served clients across IT hardware, security systems, and now solar, with a commitment to quality and long-term support.</p>
        <div className="about-grid">
          <div><h3>Our Motto</h3><p>Customer satisfaction is our breath.</p></div>
          <div><h3>Our Vision</h3><p>Providing superior quality products to customers and delivering real value for their money.</p></div>
          <div><h3>Our Team</h3><p>{TEAM_SIZE} of well trained and experienced engineers who back every sale with real service.</p></div>
        </div>
        <TrustBar />
      </section>
    </>
  );
}
