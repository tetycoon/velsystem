// Central content store. Swap placeholder text/images for real assets as they come in.
// Everything marked PLACEHOLDER is explicitly flagged so nothing fake ships as real.

const BRAND = {
  name: "Vel Systems",
  phone: "(+91) 98651 99933",
  whatsappNumber: "919865199933",
  email: "sales@velsystems.in",
  address: "7A, Varadhanar Street, Vedachalam Nagar, Chengalpattu – 603001, Tamil Nadu",
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
    address: "7A, Varadhanar Street, Vedachalam Nagar, Chengalpattu – 603001, Tamil Nadu",
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

// Direct team contacts, listed in the old site's footer on every page.
const TEAM_CONTACTS = [
  { role: "Manager", name: "", phone: "89254 49972", email: "manager@velsystems.in" },
  { role: "Accountant", name: "", phone: "98651 80102", email: "accounts@velsystems.in" },
  { role: "General Manager", name: "", phone: "98651 80300", email: "gm@velsystems.in" },
  { role: "Murali", name: "", phone: "98651 80104", email: "murali@velsystems.in" }
];

// Real quotes pulled verbatim from the old homepage's rotating banner.
const HOME_QUOTES = {
  solarBlurb: "We provide end-to-end solar energy solutions that are intelligently tailored to the specific needs of homeowners, business owners, and industrial operators. Our systems are designed to be clean, efficient, and scalable, empowering you with future-ready energy that delivers long-term value.",
  serviceQuote: "Our job doesn't end when you buy, it begins. With Vel Systems, you get support that stays, long after the sale.",
  scaleQuote: "20,000 customers and 500+ corporate partners choose Vel Systems, because results matter."
};

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
  { slug: "cctv-camera", name: "CCTV Camera", tagline: "Professional protection made simple.", body: "Round-the-clock surveillance for homes, shops, offices, and institutions. We handle site survey, camera placement, cabling, and setup so coverage actually matches how your space is used, not a generic layout.", subItems: [
      { name: 'Dome Cameras', desc: "Housed in sleek, dome-shaped enclosures, ideal for indoor settings. Easily adjustable and able to cover a wide area, with a design that makes it hard to tell which direction they're pointed." },
      { name: 'Bullet Cameras', desc: 'Built for outdoor durability, delivering sharp, high-definition surveillance with clear, detailed footage and dependable performance.' },
      { name: 'PTZ Cameras', desc: 'Pan, tilt, and zoom cameras offering full remote control, able to move in different directions and zoom in on specific areas for flexible, precise surveillance.' },
      { name: 'IP Cameras', desc: 'High-definition surveillance with easy integration and remote access, advanced monitoring, real-time alerts, and hassle-free installation.' },
      { name: 'Thermal Cameras', desc: 'Detect movement through heat, making them ideal for low-light or pitch-dark environments, especially outdoors.' },
      { name: 'Wireless Cameras', desc: 'Connect seamlessly to a network and can be accessed remotely through a smartphone or computer, offering flexible monitoring.' },
      { name: 'DVR/NVR Systems', desc: 'Record and store footage from multiple cameras, often with motion detection and remote access for added convenience.' }
    ] },
  { slug: "door-access-control", name: "Door Access Control", tagline: "Manage and monitor who enters your space.", body: "Card, PIN, and biometric access control for single doors up to full multi-entry buildings. Useful for offices, schools, and warehouses that need a record of who came in and when.", subItems: [
      { name: 'eSSL', desc: 'Secure and efficient entry management using biometric, RFID, or keypad technologies, with customizable monitoring and access features.' },
      { name: 'Hikvision', desc: 'Advanced technologies including biometric, RFID, and face recognition for secure entry management, with integration into broader security systems.' },
      { name: 'Honeywell', desc: 'Secure, scalable solutions using card readers, biometrics, and keypads, with integrated management for access control and surveillance.' }
    ] },
  { slug: "biometric-system", name: "Biometric System", tagline: "Track employee in and out time accurately.", body: "Fingerprint and face-recognition attendance systems that remove buddy-punching and manual registers, with reports your HR team can actually use.", subItems: [
      { name: 'eSSL', desc: 'Captures and processes physical traits into digital data for secure verification or identification, with strong security and performance monitoring.' },
      { name: 'Hikvision', desc: 'Captures and processes biometric data for secure verification and identification, with a user interface and integration capabilities.' },
      { name: 'Matrix', desc: 'Captures and processes biometric data for secure verification, stores it in a secure database, with strong security and system integration.' }
    ] },
  { slug: "intercom", name: "Intercom", tagline: "Clear, real-time communication across your building.", body: "Wired and IP intercom systems connecting reception, security desks, and departments, suited to offices, apartments, and gated communities.", subItems: [
      { name: 'Crystal NEXA', desc: 'High-quality audio, seamless integration, and user-friendly controls, designed to enhance security and convenience.' },
      { name: 'Matrix', desc: 'High-quality audio and a sleek, modern design for clear and secure communication, with advanced technology and integration.' },
      { name: 'Panasonic', desc: 'High-quality audio and an intuitive interface for reliable communication, with a sleek design and user-friendly features.' }
    ] },
  { slug: "boom-barrier", name: "Boom Barrier", tagline: "Automated vehicle access control.", body: "Motorized boom barriers that raise and lower to control vehicle entry at gates, parking lots, and factory access points, with remote and card-based control options.", subItems: [
      { name: 'BG-BDC-RL-100', desc: 'A noise-less boom barrier with a non-spring mechanism for smooth, quiet operation. Durable design with low maintenance.' },
      { name: 'BG-108', desc: 'Reliable access control for wide entrances, with an 8-meter arm for high-traffic areas and smooth, adjustable operation.' },
      { name: 'Hikvision DS-TMG4BO-RA (4M)', desc: 'A 4-megapixel surveillance camera offering crisp, detailed images and dependable performance across lighting conditions, commonly bundled with barrier installations.' }
    ] },
  { slug: "metal-detector-signal-jammer", name: "Metal Detector & Signal Jammer", tagline: "Screening and signal control for secure premises.", body: "Walk-through and handheld metal detectors for events and institutions, plus signal jammers where controlled communication zones are required.", subItems: [
      { name: 'eSSL D1010S', desc: 'A precise metal detector with adjustable sensitivity, ergonomic design, and LED indicators for reliable security screening.' },
      { name: 'Hikvision ISD-SMG1118L', desc: 'A high-performance handheld metal detector with adjustable sensitivity, ergonomic design, and LED indicators.' },
      { name: 'eSSL D100S', desc: 'A high-sensitivity metal detector with adjustable settings, ergonomic handle, and LED indicators for accurate, comfortable use.' }
    ] },
  { slug: "signal-booster", name: "Signal Booster", tagline: "Stronger mobile signal across your premises.", body: "Indoor signal boosters that fix dead zones in basements, large offices, and multi-floor buildings." },
  { slug: "video-door-phone", name: "Video Door Phone", tagline: "See and speak to visitors before opening the door.", body: "Two-way video intercom units for homes and offices, with options for multi-unit apartment buildings.", subItems: [
      { name: 'Hikvision', desc: 'High-resolution cameras, two-way communication, and remote access, with motion detection and night vision.' },
      { name: 'Honeywell', desc: 'High-definition video and clear audio for secure communication with visitors, with a user-friendly interface and remote access.' }
    ] },
  { slug: "cash-counting-machine", name: "Cash Counting Machine", tagline: "Accurate, fast banknote counting and sorting.", body: "Counting and fake-note detection machines built for retail counters, ideal for shops and businesses handling daily cash volumes.", subItems: [
      { name: 'TVS', desc: 'Accurate counting, sorting, and verification of cash for high-volume transactions, with fast and reliable performance ideal for banks, retail, and offices.' }
    ] },
  { slug: "fire-alarms", name: "Fire Alarms", tagline: "Early detection, timely evacuation.", body: "Smoke and heat detection systems designed and installed to relevant safety codes, covering offices, factories, and institutions.", subItems: [
      { name: 'Ravel', desc: 'Intelligent sensors, easy-to-use control panels, and seamless integration with existing safety systems for comprehensive fire protection.' },
      { name: 'Honeywell', desc: 'Advanced, reliable fire detection and protection with cutting-edge technology, user-friendly interfaces, and seamless integration.' }
    ] },
  { slug: "safety-lockers", name: "Safety Lockers", tagline: "Secure storage for valuables and documents.", body: "Fire and tamper-resistant lockers sized for homes, offices, and bank-adjacent use cases.", subItems: [
      { name: 'Godrej NX Pro 25L', desc: 'A 25-litre home safe with a digital keypad and motorized locking bolts, built with solid steel construction.' },
      { name: 'Godrej 31 Defender Prime CL-C', desc: 'A high-security, 31-litre safe with advanced locking mechanisms and a fire-resistant design.' }
    ] },
  { slug: "gps-vehicle-tracker", name: "GPS Vehicle Tracker", tagline: "Real-time location tracking for fleets and vehicles.", body: "Live GPS tracking for personal vehicles and business fleets, with route history and geofencing for logistics use cases.", subItems: [
      { name: 'AIS GPS Vehicle Tracker', desc: 'Real-time location tracking, geo-fencing, and vehicle diagnostics with mobile and web access, suited to personal, fleet, and commercial use.' },
      { name: 'ATS GPS Tracker', desc: 'Fleet GPS tracking with real-time location insights, driver behaviour monitoring, route optimisation, geofencing, and comprehensive reporting.' }
    ] },
  { slug: "burglar-alarm-system", name: "Burglar Alarm System", tagline: "Detect unauthorized entry the moment it happens.", body: "Motion and entry sensors linked to a central alarm, sized for homes, shops, and warehouses.", subItems: [
      { name: 'Honeywell', desc: 'Motion detection and real-time alerts for comprehensive protection of homes and businesses.' },
      { name: 'Godrej', desc: 'A control panel, entry sensors, an audible alarm, keypad or remote control, real-time alert connectivity, and battery backup.' }
    ] }
];

const IT_ITEMS = [
  { slug: "desktop", name: "Desktop", tagline: "Reliable computer sales and service.", body: "New and refurbished desktop systems for office and home use, with on-site service backing every sale.", subItems: [
      { name: 'Tower Desktops', desc: 'Traditional desktop computers in a tower case, easy to upgrade with room for multiple hard drives and components.' },
      { name: 'Workstation', desc: 'Specialized desktops for professionals running demanding applications like video editing or 3D modelling.' },
      { name: 'All-in-One Desktops', desc: 'Combine the monitor and CPU into one compact unit, easier to set up but less upgradeable than tower desktops.' },
      { name: 'Gaming Desktops', desc: 'High-performance desktops with powerful graphics cards and components built for demanding games.' },
      { name: 'Consumer Desktop', desc: 'Powerful performance in a sleek, user-friendly design for everyday productivity and entertainment.' }
    ] },
  { slug: "laptop", name: "Laptop", tagline: "Fast, reliable laptop sales and service.", body: "A range of laptops across budgets, from everyday office use to performance machines, with warranty support handled locally.", subItems: [
      { name: 'Business Laptops', desc: 'Built for durability, security, and productivity in business use.' },
      { name: 'Gaming Laptops', desc: 'Powerful CPUs, graphics cards, and large memory/storage for gaming.' },
      { name: '2-in-1 Laptops', desc: 'Lightweight, slim, and portable with long battery life.' },
      { name: 'Chromebooks', desc: "Run Google's Chrome OS, designed for web-based tasks with minimal storage." },
      { name: 'Ultrabooks', desc: 'Lightweight, slim, and portable with long battery life.' },
      { name: 'MacBooks', desc: 'Designed and manufactured by Apple, running macOS.' }
    ] },
  { slug: "printer", name: "Printer", tagline: "Economical control over your printing budget.", body: "Printer sales, consumables, and service contracts that keep per-page costs predictable instead of surprising you at reorder time.", subItems: [
      { name: 'Inkjet Printers', desc: 'High-quality, fast printing with wireless connectivity, automatic duplexing, and a compact, energy-efficient design.' },
      { name: 'Laser Printers', desc: 'Use toner cartridges and a laser for high-quality prints at fast speeds.' },
      { name: 'Thermal Printers', desc: 'Use heat to transfer images onto special paper, ideal for receipts and small documents.' },
      { name: 'Dot Matrix Printers', desc: 'A print head strikes an ink ribbon to produce text and images, commonly used for invoices and multi-part documents.' },
      { name: 'Barcode Printer', desc: 'High-speed label and barcode printing for retail and inventory management.' },
      { name: 'Ink Tank Printers', desc: 'Refillable ink tank systems built for high-quality, cost-effective printing across a variety of paper sizes.' }
    ] },
  { slug: "tablet", name: "Tablet", tagline: "Compact, portable devices for work on the move.", body: "Tablets for field staff, reception counters, and point-of-sale use, matched to the job rather than sold as one-size-fits-all.", subItems: [
      { name: 'Lenovo', desc: 'A range of models from budget-friendly to high-performance, with versatile displays, detachable keyboards, and Android or Windows integration.' },
      { name: 'Acer', desc: 'Acer tablets balancing everyday productivity and entertainment use, with build quality backed by local service support.' }
    ] },
  { slug: "software", name: "Software", tagline: "Protecting your data and your working environment.", body: "Genuine OS, productivity, and antivirus software licensing, with setup support so it's actually configured correctly on day one." },
  { slug: "mobile-accessories", name: "Mobile Accessories", tagline: "Accessories that extend what your devices can do.", body: "Chargers, cases, and peripherals sourced for reliability, not just shelf price.", subItems: [
      { name: 'Powerbank', desc: 'High-capacity, fast, reliable charging for multiple devices on the go, sleek and portable.' },
      { name: 'Pendrive', desc: 'High-performance pen drives with extensive storage and rapid transfer rates for everyday use or backups.' },
      { name: 'USB Cables', desc: 'Fast, reliable, durable cables for charging and syncing devices.' },
      { name: 'Headphone', desc: 'Premium sound with crisp highs and deep bass, plush comfort, and noise isolation.' },
      { name: 'Data Cable', desc: 'Portronics data cables for reliable, high-speed charging and syncing across smartphones, tablets, and other gadgets.' }
    ] },
  { slug: "server-workstation", name: "Server & Workstation", tagline: "Power and reliability for demanding workloads.", body: "Server and workstation builds sized to actual load, from a small office file server to multi-user business applications." },
  { slug: "network-hardware-solution", name: "Networking", tagline: "Industrial-grade network solutions.", body: "Switches, routers, structured cabling, and network design for offices and industrial sites that need uptime, not guesswork.", subItems: [
      { name: 'Routers', desc: 'Connect multiple networks together and direct traffic between them, allowing multiple devices to share one internet connection.' },
      { name: 'Switches', desc: 'Connect multiple devices within a network for faster, more efficient communication than hubs.' },
      { name: 'Hubs', desc: 'Connect multiple devices within a network, less efficient than switches, generally used in smaller networks.' },
      { name: 'Network Interface Cards (NICs)', desc: 'Hardware components that give devices a physical interface to connect to a network.' },
      { name: 'Cables', desc: 'Ethernet cables providing the physical connection for data transfer between devices.' },
      { name: 'Modems', desc: 'Connect a network to the internet, transferring data through a broadband connection.' }
    ] },
  { slug: "online-offline-ups", name: "Online & Offline UPS", tagline: "Keep operations running through power cuts.", body: "UPS systems sized to your load, protecting servers, workstations, and critical equipment from outages and voltage spikes.", subItems: [
      { name: 'APC', desc: 'Dependable backup power and superior surge protection during outages and disruptions.' },
      { name: 'Fingers', desc: 'Dependable backup power and surge protection, keeping devices running safely during outages.' },
      { name: 'Luminous', desc: 'Continuous power with reliable backup and robust surge protection during outages and fluctuations.' }
    ] },
  { slug: "firewall-security-system", name: "Firewall", tagline: "Professional protection made simple for your network.", body: "Firewall appliances and configuration for businesses that need real network security, not just a default router setting.", subItems: [
      { name: 'SonicWall', desc: 'Intrusion prevention, malware protection, and secure remote access to safeguard businesses against cyber threats.' },
      { name: 'Sophos', desc: 'Advanced threat protection, centralized management, and detailed reporting for comprehensive security needs.' },
      { name: 'Cisco', desc: "Advanced threat defense, high performance, deep packet inspection, VPN support, and scalable management through Cisco's security ecosystem." }
    ] },
  { slug: "it-peripherals", name: "IT Peripherals", tagline: "Peripherals that expand what your setup can do.", body: "Keyboards, mice, docking stations, monitors, and other peripherals for office and home office setups.", subItems: [
      { name: 'Laptop', desc: 'Portable personal computers integrating a screen, keyboard, and processing components for computing on the go.' },
      { name: 'Monitor', desc: 'Display devices presenting visual output, the main interface for viewing and managing applications and media.' },
      { name: 'Mice', desc: 'Wired or wireless input devices with various designs and sensors for precise control and comfort.' },
      { name: 'Keyboard', desc: 'Input devices across layouts and switch types, from basic to advanced models with backlighting and programmable keys.' },
      { name: 'RAM', desc: 'Fast, temporary storage for active data and applications, enabling quick access and smooth multitasking.' },
      { name: 'Motherboard', desc: 'The central circuit board connecting the CPU, RAM, and other components, managing data flow across the system.' }
    ] },
  { slug: "wifi-access-point", name: "WiFi Access Point", tagline: "Reliable wireless coverage, properly planned.", body: "Access point placement and setup for offices and campuses that need consistent WiFi coverage across every room, not just near the router." },
  { slug: "photocopier", name: "Photocopier", tagline: "Built for bulk printing and copying.", body: "Photocopiers and MFDs suited to high-volume offices, with service contracts to match.", subItems: [
      { name: 'Analog Photocopiers', desc: 'Use a light source to transfer an image onto a photosensitive drum, coated with toner and fused onto paper.' },
      { name: 'Digital Photocopiers', desc: 'Use a digital scanner to capture the image, then print it using toner or ink.' },
      { name: 'Multifunctional Photocopiers', desc: 'Combine photocopier, scanner, printer, and sometimes fax functions into one device.' },
      { name: 'Networked Photocopiers', desc: 'Connected to a network, allowing multiple users to print or copy from the same machine.' },
      { name: 'Color Photocopiers', desc: 'Produce color copies, often used for marketing materials and documents requiring color.' },
      { name: 'Portable Photocopiers', desc: 'Small, lightweight, and easy to transport for use on the go.' }
    ] },
  { slug: "data-storage", name: "Data Storage", tagline: "Fast, reliable storage for your business data.", body: "NAS and storage solutions sized for backup, file sharing, and growing data needs.", subItems: [
      { name: 'HDD Storage', desc: 'Uses magnetic fields to store data on a hard disk drive or magnetic tape.' },
      { name: 'Solid State Storage', desc: 'Uses flash memory technology on SSDs and USB flash drives.' },
      { name: 'Cloud Storage', desc: 'Stores and accesses data over the internet through a third-party service provider.' },
      { name: 'Network-Attached Storage (NAS)', desc: 'File-level storage that lets multiple users and devices access data over a local area network.' }
    ] },
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

// The 5 solar categories shown on the old site's power-solutions page.
const SOLAR_TYPES = [
  { name: "Residential Solar", desc: "Rooftop systems sized for homes." },
  { name: "Commercial Solar", desc: "Systems for shops, offices, and business premises." },
  { name: "Industrial Solar", desc: "Larger installations for factories and industrial rooftops." },
  { name: "Solar Plant", desc: "Ground-mounted plants for bigger capacity needs." },
  { name: "Floating Solar", desc: "Panels installed over water bodies where land is limited." }
];

// Real financing and subsidy figures from the old site. Rates change, so these should be
// reconfirmed with Vel Systems before every relaunch, not treated as permanently accurate.
const SOLAR_FINANCE = {
  overview: {
    interest: "6.5% onwards",
    tenure: "1 to 10 years",
    amount: "₹1 Lakh to ₹10 Crores",
    financeBy: "All Nationalised Banks, Private Banks, NBFC"
  },
  loanTypes: [
    { name: "Residential Solar Loan", rate: "6.50% onwards" },
    { name: "Commercial / Industrial Solar Loan", rate: "7.99% onwards" },
    { name: "Housing Society Solar Loan", rate: "8.99% onwards" }
  ],
  residentialSubsidy: [
    "₹30,000 per kW (up to 2 kW)",
    "₹18,000 per kW (for additional capacity up to 3 kW)",
    "₹78,000 total subsidy (capped for systems larger than 3 kW)"
  ],
  ghsSubsidy: "₹18,000 per kW for common facilities including EV charging, up to 500 kW capacity at 3 kW per house. This upper limit excludes individual rooftop plants installed by residents in the GHS/RWA."
};

// Real FAQ, pulled verbatim (question and answer) from the old site's Solar page.
const SOLAR_FAQ = [
  { q: "What are the benefits of installing solar panels at home?", a: "Installing residential solar panels helps you reduce electricity bills, increase property value, and lower your carbon footprint. You can also take advantage of government subsidies and enjoy long-term energy savings." },
  { q: "How do solar panels work?", a: "Solar panels convert sunlight into electricity using photovoltaic (PV) cells. This electricity powers your home or industrial equipment, and any excess can be stored or fed back into the grid, depending on your system." },
  { q: "How long do solar panels last?", a: "Most solar panels last 25 to 30 years with minimal maintenance. Vel Systems provides high-quality panels with warranties and expert support to ensure long-term performance." },
  { q: "Is solar energy suitable for industrial use?", a: "Absolutely. We offer industrial solar panel solutions that help reduce operational costs and provide a reliable power supply for factories, warehouses, and plants." },
  { q: "Can I get a subsidy or financial support for solar installation?", a: "Yes, residential customers in India are eligible for government subsidies on solar panel systems. Vel Systems assists you in availing these benefits and provides complete guidance on the paperwork." },
  { q: "How much roof space is needed for a solar installation?", a: "On average, a 1 kW solar system requires about 100 square feet of shadow-free rooftop area. We'll conduct a site assessment to determine the best setup for your space and needs." },
  { q: "How long does the installation take?", a: "Installation usually takes 2 to 5 days for homes and up to a few weeks for larger industrial projects, depending on the complexity. Our team ensures a smooth and timely process." },
  { q: "Will solar panels work during cloudy days or at night?", a: "Solar panels generate less power on cloudy days and none at night. However, with battery storage or a grid-tied system, your power supply remains uninterrupted." },
  { q: "Does Vel Systems provide maintenance and after-sales support?", a: "Yes. We offer ongoing maintenance, performance checks, and customer support to keep your system running at its best." }
];

// Client names shown in the old site's trust strip. Logos themselves weren't recoverable
// (no alt text on the old site's images), so these are text-only for now.
const TRUSTED_BY = [
  "Primary Agricultural Cooperative Credit Society",
  "Cryolor",
  "Nippon Steel",
  "Jamna Auto Inc"
];

// Not fabricating client quotes. Real ones only — this one is pulled verbatim from the
// old site's Solar page. Still nothing on the dedicated Customers page itself.
const TESTIMONIALS = [
  {
    quote: "I've known Vel Systems for the past 25 years and have purchased four laptops, batteries, and CCTV systems from them. I've always been satisfied with their service. Recently, they recommended solar to help reduce my electricity bills. Once approvals were granted, they took full responsibility for the solar installation, including arranging a loan through Canara Bank and securing the government subsidy. I didn't have to worry about anything, they handled all the paperwork efficiently. Their end-to-end service and after-sales support are commendable. I'm completely happy and have already referred them to my friends. Vel Systems is a trusted one-stop solution for all tech and energy needs.",
    name: "Umesh",
    company: "Residential Solar Customer"
  }
];

const FAQ_KB = [
  { keywords: ["solar", "panel", "electricity", "bill"], answer: "We design and install end-to-end solar systems for homes, businesses, and industrial sites. Share your monthly electricity bill or rooftop size on WhatsApp and we'll give you a free estimate." },
  { keywords: ["cctv", "camera", "security"], answer: "We supply and install CCTV systems from single-camera shops to multi-site businesses. Tell us the number of locations to cover and we'll suggest a setup on WhatsApp." },
  { keywords: ["amc", "maintenance", "contract", "service"], answer: "We offer Comprehensive AMC, Non-Comprehensive ASC, and On-Call service contracts. Message us on WhatsApp with your equipment list for a quote." },
  { keywords: ["laptop", "desktop", "computer"], answer: "We sell and service laptops and desktops across budgets, with local warranty support. Let us know your use case on WhatsApp and we'll recommend a model." },
  { keywords: ["government", "tender", "gem", "institution", "school"], answer: "We are GeM registered and have supplied to government offices, schools, and corporate campuses. Visit our Government & Institutions page or message us directly for tender-related queries." },
  { keywords: ["price", "cost", "quote", "quotation"], answer: "Pricing depends on your exact requirement. The fastest way to get an accurate quote is to message us on WhatsApp with details of what you need." }
];
const FAQ_FALLBACK = "Thanks for your question. For an exact answer, please message our team directly on WhatsApp, we reply fast and can quote accurately once we know your requirement.";

// Real client logos, pulled from the old site's Customers page image gallery.
// No alt text existed on the old images, names below identified visually from the logos themselves.
const CLIENT_LOGOS = [
  { name: "Cryolor", image: "/images/clients/cryolor.jpg" },
  { name: "Bay-Forge Limited", image: "/images/clients/bay-forge.jpg" },
  { name: "Pearl Global", image: "/images/clients/pearl-global.jpg" },
  { name: "Jayitri Garden City", image: "/images/clients/jayitri-garden-city.jpg" },
  { name: "Pinak Group", image: "/images/clients/pinak-group.jpg" },
  { name: "Teyro Labs Private Ltd", image: "/images/clients/teyro-labs.jpg" },
  { name: "Green Trends", image: "/images/clients/green-trends.jpg" },
  { name: "Triton Healthcare Pvt Ltd", image: "/images/clients/triton-healthcare.jpg" },
  { name: "Jamna Auto Industries Ltd", image: "/images/clients/jamna-auto.jpg" },
  { name: "TVS", image: "/images/clients/tvs.jpg" },
  { name: "Vimal Enterprises", image: "/images/clients/vimal-enterprises.jpg" },
  { name: "Naturals Unisex Salon & Spa", image: "/images/clients/naturals-salon.jpg" },
  { name: "Zee", image: "/images/clients/zee.jpg" }
];

module.exports = {
  BRAND, LOCATIONS, TEAM_CONTACTS, HOME_QUOTES, SOLAR_TYPES, SOLAR_FINANCE, SOLAR_FAQ, TRUSTED_BY, CLIENT_LOGOS, waLink, NAV, UTILITY_NAV,
  SECURITY_ITEMS, IT_ITEMS, AMC_PLANS, SHOP_PRODUCTS, BLOG_POSTS, TESTIMONIALS,
  FAQ_KB, FAQ_FALLBACK
};
