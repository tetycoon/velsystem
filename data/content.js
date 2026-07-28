// Central content store. Swap placeholder text/images for real assets as they come in.
// Everything marked PLACEHOLDER is explicitly flagged so nothing fake ships as real.

const BRAND = {
  name: "Vel Systems",
  phone: "(+91) 98651 99933",
  whatsappNumber: "919865199933",
  email: "sales@velsystems.in",
  address: "No.7, Varadhanar Street, Vedhachala Nagar, Chengalpattu, Tamil Nadu 603001",
  instagram: "https://www.instagram.com/velsystems.in/",
  facebook: "https://www.facebook.com/VELSYSTEMSCPT",
  youtube: "https://www.youtube.com/@VelSystems",
  gstin: "33AAFFV0176R1ZP",
  navy: "#1F3A5F",
  orange: "#D4622A"
};

// Pulled from the old site's contact page. Three real locations, not one.
const LOCATIONS = [
  {
    name: "Vel Systems (Corporate Office)",
    address: "No.7, Varadhanar Street, Vedhachala Nagar, Chengalpattu, Tamil Nadu 603001",
    email: "sales@velsystems.in",
    phone: "(+91) 98651 99933"
  },
  {
    name: "Dell Showroom",
    address: "No. 25, Devadoss St, Vedachalam Nagar, Chengalpattu, Gokulapuram, Tamil Nadu 603002",
    email: "dellstorechengalpattu@gmail.com",
    phone: "(+91) 98651 90109"
  },
  {
    name: "Acer Store",
    address: "No.7, Varadhanar Street, Vedhachala Nagar, Chengalpattu, Tamil Nadu 603001",
    email: "acerstorechengalpattu@gmail.com",
    phone: "(+91) 98945 09664"
  }
];

function waLink(message) {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const NAV = [
  { label: "Solar", href: "/solar/" },
  { label: "Security Systems", href: "/security-systems/", children: "security" },
  { label: "IT Hardware", href: "/it-hardware/", children: "itHardware" },
  { label: "AMC Contracts", href: "/amc/" },
  { label: "Shop", href: "/shop/" }
];

const UTILITY_NAV = [
  { label: "About Us", href: "/about/" },
  { label: "Our Customers", href: "/customers/" },
  { label: "Government & Institutions", href: "/government/" },
  { label: "Rental", href: "/rental/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact Us", href: "/contact/" }
];

const SECURITY_ITEMS = [
  { slug: "cctv-camera", name: "CCTV Camera", tagline: "Professional protection made simple.", body: "Round-the-clock surveillance for homes, shops, offices, and institutions. We handle site survey, camera placement, cabling, and setup so coverage actually matches how your space is used, not a generic layout." },
  { slug: "door-access-control", name: "Door Access Control", tagline: "Manage and monitor who enters your space.", body: "Card, PIN, and biometric access control for single doors up to full multi-entry buildings. Useful for offices, schools, and warehouses that need a record of who came in and when." },
  { slug: "biometric-system", name: "Biometric System", tagline: "Track employee in and out time accurately.", body: "Fingerprint and face-recognition attendance systems that remove buddy-punching and manual registers, with reports your HR team can actually use." },
  { slug: "intercom", name: "Intercom", tagline: "Clear, real-time communication across your building.", body: "Wired and IP intercom systems connecting reception, security desks, and departments, suited to offices, apartments, and gated communities." },
  { slug: "boom-barrier", name: "Boom Barrier", tagline: "Automated vehicle access control.", body: "Motorized boom barriers that raise and lower to control vehicle entry at gates, parking lots, and factory access points, with remote and card-based control options." },
  { slug: "metal-detector-signal-jammer", name: "Metal Detector & Signal Jammer", tagline: "Screening and signal control for secure premises.", body: "Walk-through and handheld metal detectors for events and institutions, plus signal jammers where controlled communication zones are required." },
  { slug: "signal-booster", name: "Signal Booster", tagline: "Stronger mobile signal across your premises.", body: "Indoor signal boosters that fix dead zones in basements, large offices, and multi-floor buildings." },
  { slug: "video-door-phone", name: "Video Door Phone", tagline: "See and speak to visitors before opening the door.", body: "Two-way video intercom units for homes and offices, with options for multi-unit apartment buildings." },
  { slug: "cash-counting-machine", name: "Cash Counting Machine", tagline: "Accurate, fast banknote counting and sorting.", body: "Counting and fake-note detection machines built for retail counters, ideal for shops and businesses handling daily cash volumes." },
  { slug: "fire-alarms", name: "Fire Alarms", tagline: "Early detection, timely evacuation.", body: "Smoke and heat detection systems designed and installed to relevant safety codes, covering offices, factories, and institutions." },
  { slug: "safety-lockers", name: "Safety Lockers", tagline: "Secure storage for valuables and documents.", body: "Fire and tamper-resistant lockers sized for homes, offices, and bank-adjacent use cases." },
  { slug: "gps-vehicle-tracker", name: "GPS Vehicle Tracker", tagline: "Real-time location tracking for fleets and vehicles.", body: "Live GPS tracking for personal vehicles and business fleets, with route history and geofencing for logistics use cases." },
  { slug: "burglar-alarm-system", name: "Burglar Alarm System", tagline: "Detect unauthorized entry the moment it happens.", body: "Motion and entry sensors linked to a central alarm, sized for homes, shops, and warehouses." }
];

const IT_ITEMS = [
  { slug: "desktop", name: "Desktop", tagline: "Reliable computer sales and service.", body: "New and refurbished desktop systems for office and home use, with on-site service backing every sale." },
  { slug: "laptop", name: "Laptop", tagline: "Fast, reliable laptop sales and service.", body: "A range of laptops across budgets, from everyday office use to performance machines, with warranty support handled locally." },
  { slug: "printer", name: "Printer", tagline: "Economical control over your printing budget.", body: "Printer sales, consumables, and service contracts that keep per-page costs predictable instead of surprising you at reorder time." },
  { slug: "tablet", name: "Tablet", tagline: "Compact, portable devices for work on the move.", body: "Tablets for field staff, reception counters, and point-of-sale use, matched to the job rather than sold as one-size-fits-all." },
  { slug: "software", name: "Software", tagline: "Protecting your data and your working environment.", body: "Genuine OS, productivity, and antivirus software licensing, with setup support so it's actually configured correctly on day one." },
  { slug: "mobile-accessories", name: "Mobile Accessories", tagline: "Accessories that extend what your devices can do.", body: "Chargers, cases, and peripherals sourced for reliability, not just shelf price." },
  { slug: "server-workstation", name: "Server & Workstation", tagline: "Power and reliability for demanding workloads.", body: "Server and workstation builds sized to actual load, from a small office file server to multi-user business applications." },
  { slug: "network-hardware-solution", name: "Networking", tagline: "Industrial-grade network solutions.", body: "Switches, routers, structured cabling, and network design for offices and industrial sites that need uptime, not guesswork." },
  { slug: "online-offline-ups", name: "Online & Offline UPS", tagline: "Keep operations running through power cuts.", body: "UPS systems sized to your load, protecting servers, workstations, and critical equipment from outages and voltage spikes." },
  { slug: "firewall-security-system", name: "Firewall", tagline: "Professional protection made simple for your network.", body: "Firewall appliances and configuration for businesses that need real network security, not just a default router setting." },
  { slug: "it-peripherals", name: "IT Peripherals", tagline: "Peripherals that expand what your setup can do.", body: "Keyboards, mice, docking stations, monitors, and other peripherals for office and home office setups." },
  { slug: "wifi-access-point", name: "WiFi Access Point", tagline: "Reliable wireless coverage, properly planned.", body: "Access point placement and setup for offices and campuses that need consistent WiFi coverage across every room, not just near the router." },
  { slug: "photocopier", name: "Photocopier", tagline: "Built for bulk printing and copying.", body: "Photocopiers and MFDs suited to high-volume offices, with service contracts to match." },
  { slug: "data-storage", name: "Data Storage", tagline: "Fast, reliable storage for your business data.", body: "NAS and storage solutions sized for backup, file sharing, and growing data needs." },
  { slug: "data-recovery-2", name: "Data Recovery", tagline: "Seamless recovery when data goes missing.", body: "Recovery services for failed drives and accidental deletion, handled with the care that critical business data needs." },
  { slug: "projector", name: "Projector", tagline: "Clear projection for meetings and classrooms.", body: "Projectors for boardrooms, classrooms, and events, matched to room size and lighting conditions." }
];

const AMC_PLANS = [
  { name: "Annual Maintenance Contract – Comprehensive (AMC)", body: "We assess your full specification and fix one annual amount that covers spare parts. This includes preventive maintenance at least once a month, plus service as needed through the year." },
  { name: "Annual Service Contract – Non-Comprehensive (ASC)", body: "Our engineers service all model configurations for a fixed reasonable amount, excluding spare parts cost. Covers preventive maintenance and on-demand service through the contract period." },
  { name: "On-Call Services", body: "Experienced service engineers respond to requests within working hours when you don't need a full annual contract." }
];

// Real products, pulled directly from the old site's shop, with real current prices.
// No longer placeholder/sample data.
const SHOP_PRODUCTS = [
  { slug: "honeywell-gl650-barcode-scanner", name: "IMPACT by Honeywell GL650 2D Hands-Free Barcode Scanner", price: 7552, category: "IT Hardware", image: "/images/products/honeywell-gl650-barcode-scanner.jpg" },
  { slug: "cp-plus-wifi-router", name: "CP PLUS CP-GR-DE412 WiFi Router", price: 2150, category: "IT Hardware", image: "/images/products/cp-plus-wifi-router.jpg" },
  { slug: "tplink-archer-c24-router", name: "TP-Link Archer C24 AC750 Mbps Dual-Band WiFi Router", price: 2400, category: "IT Hardware", image: "/images/products/tplink-archer-c24-router.jpg" },
  { slug: "honeywell-ihs520bt-barcode-scanner", name: "IMPACT by Honeywell IHS520BT 2D Barcode Scanner", price: 6500, category: "IT Hardware", image: "/images/products/honeywell-ihs520bt-barcode-scanner.jpg" },
  { slug: "epson-003-ink-set", name: "Epson 003 Ink 65ml Tri-Colour Bottle Set (Pack of 4)", price: 2200, category: "IT Hardware", image: "/images/products/epson-003-ink-set.jpg" },
  { slug: "hp-dhs5100-speaker", name: "HP Multimedia Speaker DHS-5100", price: 1950, category: "Accessories", image: "/images/products/hp-dhs5100-speaker.jpg" },
  { slug: "hp-h150-earbuds", name: "HP H150 Wireless Earbuds", price: 1596, category: "Accessories", image: "/images/products/hp-h150-earbuds.jpg" },
  { slug: "lenovo-bluetooth-headphone", name: "Lenovo In-Ear Metal Finish Bluetooth Headphone (Black)", price: 1700, category: "Accessories", image: "/images/products/lenovo-bluetooth-headphone.jpg" },
  { slug: "consistent-h81-motherboard", name: "Consistent Desktop H81 Motherboard", price: 2500, category: "IT Hardware", image: "/images/products/consistent-h81-motherboard.jpg" },
  { slug: "consistent-cmb-h61-motherboard", name: "Consistent DDR3 Motherboard CMB-H61", price: 1700, category: "IT Hardware", image: "/images/products/consistent-cmb-h61-motherboard.jpg" },
  { slug: "motherboard-1155-ddr3", name: "Motherboard 1155-pin DDR3", price: 1690, category: "IT Hardware", image: "/images/products/motherboard-1155-ddr3.jpg" },
  { slug: "consistent-cmb-g41-motherboard", name: "Consistent Motherboard CMB-G41 DDR3", price: 1850, category: "IT Hardware", image: "/images/products/consistent-cmb-g41-motherboard.jpg" }
];

// Real post titles from the old site's blog. Full post bodies not yet migrated,
// these seed the page instead of launching it empty.
const BLOG_POSTS = [
  { slug: "video-door-phone-not-a-luxury", title: "Secure Your Home with a Smart Touch: Why a Video Door Phone Is No Longer a Luxury" },
  { slug: "top-5-solar-myths", title: "Top 5 Myths About Solar Power, And the Truth Behind Them" },
  { slug: "choosing-the-right-printer", title: "Choosing the Right Printer Made Simple, A Local Guide from Vel Systems, Chengalpattu" },
  { slug: "best-solar-system-tamil-nadu", title: "How to Choose the Best Solar System for Your Home in Tamil Nadu" },
  { slug: "power-up-your-tech-life", title: "Power Up Your Tech Life, at Vel Systems" },
  { slug: "top-5-reasons-cctv-2025", title: "Top 5 Reasons to Install CCTV at Home in 2025" },
  { slug: "why-switch-to-solar-now", title: "Top 5 Reasons Why Now's the Perfect Time to Switch to Solar Power for Your Home" }
];

// Not fabricating client quotes. This stays empty/placeholder until real testimonials are collected.
const TESTIMONIALS = [];

const FAQ_KB = [
  { keywords: ["solar", "panel", "electricity", "bill"], answer: "We design and install end-to-end solar systems for homes, businesses, and industrial sites. Share your monthly electricity bill or rooftop size on WhatsApp and we'll give you a free estimate." },
  { keywords: ["cctv", "camera", "security"], answer: "We supply and install CCTV systems from single-camera shops to multi-site businesses. Tell us the number of locations to cover and we'll suggest a setup on WhatsApp." },
  { keywords: ["amc", "maintenance", "contract", "service"], answer: "We offer Comprehensive AMC, Non-Comprehensive ASC, and On-Call service contracts. Message us on WhatsApp with your equipment list for a quote." },
  { keywords: ["laptop", "desktop", "computer"], answer: "We sell and service laptops and desktops across budgets, with local warranty support. Let us know your use case on WhatsApp and we'll recommend a model." },
  { keywords: ["government", "tender", "gem", "institution", "school"], answer: "We are GeM registered and have supplied to government offices, schools, and corporate campuses. Visit our Government & Institutions page or message us directly for tender-related queries." },
  { keywords: ["price", "cost", "quote", "quotation"], answer: "Pricing depends on your exact requirement. The fastest way to get an accurate quote is to message us on WhatsApp with details of what you need." }
];
const FAQ_FALLBACK = "Thanks for your question. For an exact answer, please message our team directly on WhatsApp, we reply fast and can quote accurately once we know your requirement.";

module.exports = {
  BRAND, LOCATIONS, waLink, NAV, UTILITY_NAV,
  SECURITY_ITEMS, IT_ITEMS, AMC_PLANS, SHOP_PRODUCTS, BLOG_POSTS, TESTIMONIALS,
  FAQ_KB, FAQ_FALLBACK
};
