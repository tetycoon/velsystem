import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "Vel Systems - Comprehensive Sales & Service for Solar, Security & IT",
  description: "Solar energy systems, CCTV & security solutions, IT hardware, and AMC contracts. 25+ years serving Chengalpattu and beyond."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
