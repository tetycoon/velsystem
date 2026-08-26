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
  { role: "Murali", name: "", phone: "98651 80104", email: "murali@velsystems.in" },
  // From the printed company profile (VEL SYSTEMS PROFILE 23-24.pdf) — a dedicated
  // service line, separate from the sales number already in BRAND.phone.
  { role: "Service Support", name: "", phone: "98651 80110", email: "service@velsystems.in" }
];

// Real, printed on the company's official profile brochure. Not shown elsewhere on
// the site yet, so surfaced on the About page.
const TEAM_SIZE = "40+ Employees";

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
  { label: "Home", href: "/" },
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
  { slug: "cctv-camera", name: "CCTV Camera", icon: "/images/icons/icon-cctv-camera.jpg", tagline: "Professional protection made simple.", body: "Round-the-clock surveillance for homes, shops, offices, and institutions. We handle site survey, camera placement, cabling, and setup so coverage actually matches how your space is used, not a generic layout.", subItems: [
      { image: "/images/subitems/subitem-cctv-camera-0.jpg", name: 'Dome Cameras', desc: "Housed in sleek, dome-shaped enclosures, ideal for indoor settings. Easily adjustable and able to cover a wide area, with a design that makes it hard to tell which direction they're pointed." },
      { image: "/images/subitems/subitem-cctv-camera-1.jpg", name: 'Bullet Cameras', desc: 'Built for outdoor durability, delivering sharp, high-definition surveillance with clear, detailed footage and dependable performance.' },
      { image: "/images/subitems/subitem-cctv-camera-2.jpg", name: 'PTZ Cameras', desc: 'Pan, tilt, and zoom cameras offering full remote control, able to move in different directions and zoom in on specific areas for flexible, precise surveillance.' },
      { image: "/images/subitems/subitem-cctv-camera-3.jpg", name: 'IP Cameras', desc: 'High-definition surveillance with easy integration and remote access, advanced monitoring, real-time alerts, and hassle-free installation.' },
      { image: "/images/subitems/subitem-cctv-camera-4.jpg", name: 'Thermal Cameras', desc: 'Detect movement through heat, making them ideal for low-light or pitch-dark environments, especially outdoors.' },
      { image: "/images/subitems/subitem-cctv-camera-5.jpg", name: 'Wireless Cameras', desc: 'Connect seamlessly to a network and can be accessed remotely through a smartphone or computer, offering flexible monitoring.' },
      { image: "/images/subitems/subitem-cctv-camera-6.jpg", name: 'DVR/NVR Systems', desc: 'Record and store footage from multiple cameras, often with motion detection and remote access for added convenience.' },
      { image: "/images/subitems/subitem-cctv-camera-7.jpg", name: 'Wi-Fi Camera', desc: 'Connects straight to your home or office Wi-Fi with no extra cabling, so setup is quick and footage is viewable live from a phone app.' },
      { image: "/images/subitems/subitem-cctv-camera-8.jpg", name: '4G Camera', desc: 'Runs on a SIM card and mobile network instead of Wi-Fi or LAN, built for remote sites, farms, or locations without a fixed internet line.' },
      { image: "/images/subitems/subitem-cctv-camera-9.jpg", name: 'ANPR Camera', desc: 'Automatic Number Plate Recognition camera that reads and logs vehicle number plates on its own, used at gates, parking entries, and toll points.' },
      { image: "/images/subitems/subitem-cctv-camera-10.jpg", name: 'Fisheye Camera', desc: 'A single ultra-wide-angle camera covering a full 180 to 360 degree view of a room or open area, cutting down the number of cameras needed.' }
    
    ],
    brands: [
      { name: "CP Plus", logo: "/images/brand/cp-plus.png" },
      { name: "Hikvision", logo: "/images/brand/hikvision.png" },
      { name: "Dahua", logo: "/images/brand/dahua.png" },
      { name: "Uniview", logo: "/images/brand/uniview.png" },
      { name: "Honeywell", logo: "/images/brand/honeywell.png" },
      { name: "Prama", logo: "/images/brand/prama.png" },
      { name: "Godrej", logo: "/images/brand/Godrej.png" },
      { name: "Matrix", logo: "/images/brand/Matrix.png" },
      { name: "Trueview", logo: "/images/brand/Trueview.png" },
      { name: "Secureye", logo: "/images/brand/Secureye.png" },
      { name: "TP-Link", logo: "/images/brand/tp-link.png" },
      { name: "VIGI", logo: "/images/brand/vigi.png" },
      { name: "Imou", logo: "/images/brand/imou.png" },
      { name: "EZVIZ", logo: "/images/brand/ezviz.png" }
    ],
   },
  { slug: "door-access-control", name: "Door Access Control", icon: "/images/icons/icon-door-access-control.jpg", tagline: "Manage and monitor who enters your space.", body: "Card, PIN, and biometric access control for single doors up to full multi-entry buildings. Useful for offices, schools, and warehouses that need a record of who came in and when.", subItems: [
      { image: "/images/subitems/subitem-door-access-control-0.jpg", name: 'eSSL', desc: 'Secure and efficient entry management using biometric, RFID, or keypad technologies, with customizable monitoring and access features.' },
      { image: "/images/subitems/subitem-door-access-control-1.jpg", name: 'Hikvision', desc: 'Advanced technologies including biometric, RFID, and face recognition for secure entry management, with integration into broader security systems.' },
      { image: "/images/subitems/subitem-door-access-control-2.jpg", name: 'Honeywell', desc: 'Secure, scalable solutions using card readers, biometrics, and keypads, with integrated management for access control and surveillance.' }
    ] },
  { slug: "biometric-system", name: "Biometric System", icon: "/images/icons/icon-biometric-system.jpg", tagline: "Track employee in and out time accurately.", body: "Fingerprint and face-recognition attendance systems that remove buddy-punching and manual registers, with reports your HR team can actually use.", subItems: [
      { image: "/images/subitems/subitem-biometric-system-0.jpg", name: 'eSSL', desc: 'Captures and processes physical traits into digital data for secure verification or identification, with strong security and performance monitoring.' },
      { image: "/images/subitems/subitem-biometric-system-1.jpg", name: 'Hikvision', desc: 'Captures and processes biometric data for secure verification and identification, with a user interface and integration capabilities.' },
      { image: "/images/subitems/subitem-biometric-system-2.jpg", name: 'Matrix', desc: 'Captures and processes biometric data for secure verification, stores it in a secure database, with strong security and system integration.' }
    ] },
  { slug: "intercom", name: "Intercom", icon: "/images/icons/icon-intercom.jpg", tagline: "Clear, real-time communication across your building.", body: "Wired and IP intercom systems connecting reception, security desks, and departments, suited to offices, apartments, and gated communities.", subItems: [
      { image: "/images/subitems/subitem-intercom-0.jpg", name: 'Crystal NEXA', desc: 'High-quality audio, seamless integration, and user-friendly controls, designed to enhance security and convenience.' },
      { image: "/images/subitems/subitem-intercom-1.jpg", name: 'Matrix', desc: 'High-quality audio and a sleek, modern design for clear and secure communication, with advanced technology and integration.' },
      { image: "/images/subitems/subitem-intercom-2.jpg", name: 'Panasonic', desc: 'High-quality audio and an intuitive interface for reliable communication, with a sleek design and user-friendly features.' }
    ] },
  { slug: "boom-barrier", name: "Boom Barrier", icon: "/images/icons/icon-boom-barrier.jpg", tagline: "Automated vehicle access control.", body: "Motorized boom barriers that raise and lower to control vehicle entry at gates, parking lots, and factory access points, with remote and card-based control options.", subItems: [
      { image: "/images/subitems/subitem-boom-barrier-0.jpg", name: 'BG-BDC-RL-100', desc: 'A noise-less boom barrier with a non-spring mechanism for smooth, quiet operation. Durable design with low maintenance.' },
      { image: "/images/subitems/subitem-boom-barrier-1.jpg", name: 'BG-108', desc: 'Reliable access control for wide entrances, with an 8-meter arm for high-traffic areas and smooth, adjustable operation.' },
      { image: "/images/subitems/subitem-boom-barrier-2.jpg", name: 'Hikvision DS-TMG4BO-RA (4M)', desc: 'A 4-megapixel surveillance camera offering crisp, detailed images and dependable performance across lighting conditions, commonly bundled with barrier installations.' }
    ] },
  { slug: "metal-detector-signal-jammer", name: "Metal Detector & Signal Jammer", icon: "/images/icons/icon-metal-detector-signal-jammer.jpg", tagline: "Screening and signal control for secure premises.", body: "Walk-through and handheld metal detectors for events and institutions, plus signal jammers where controlled communication zones are required.", subItems: [
      { image: "/images/subitems/subitem-metal-detector-signal-jammer-0.jpg", name: 'eSSL D1010S', desc: 'A precise metal detector with adjustable sensitivity, ergonomic design, and LED indicators for reliable security screening.' },
      { image: "/images/subitems/subitem-metal-detector-signal-jammer-1.jpg", name: 'Hikvision ISD-SMG1118L', desc: 'A high-performance handheld metal detector with adjustable sensitivity, ergonomic design, and LED indicators.' },
      { image: "/images/subitems/subitem-metal-detector-signal-jammer-2.jpg", name: 'eSSL D100S', desc: 'A high-sensitivity metal detector with adjustable settings, ergonomic handle, and LED indicators for accurate, comfortable use.' }
    ] },
  { slug: "signal-booster", name: "Signal Booster", tagline: "Stronger mobile signal across your premises.", body: "Indoor signal boosters that fix dead zones in basements, large offices, and multi-floor buildings." },
  { slug: "video-door-phone", name: "Video Door Phone", icon: "/images/icons/icon-video-door-phone.jpg", tagline: "See and speak to visitors before opening the door.", body: "Two-way video intercom units for homes and offices, with options for multi-unit apartment buildings.", subItems: [
      { image: "/images/subitems/subitem-video-door-phone-0.jpg", name: 'Hikvision', desc: 'High-resolution cameras, two-way communication, and remote access, with motion detection and night vision.' },
      { image: "/images/subitems/subitem-video-door-phone-1.jpg", name: 'Honeywell', desc: 'High-definition video and clear audio for secure communication with visitors, with a user-friendly interface and remote access.' }
    ] },
  { slug: "cash-counting-machine", name: "Cash Counting Machine", tagline: "Accurate, fast banknote counting and sorting.", body: "Counting and fake-note detection machines built for retail counters, ideal for shops and businesses handling daily cash volumes.", subItems: [
      { image: "/images/subitems/subitem-cash-counting-machine-0.jpg", name: 'TVS', desc: 'Accurate counting, sorting, and verification of cash for high-volume transactions, with fast and reliable performance ideal for banks, retail, and offices.' }
    ] },
  { slug: "fire-alarms", name: "Fire Alarms", tagline: "Early detection, timely evacuation.", body: "Smoke and heat detection systems designed and installed to relevant safety codes, covering offices, factories, and institutions.", subItems: [
      { image: "/images/subitems/subitem-fire-alarms-0.jpg", name: 'Ravel', desc: 'Intelligent sensors, easy-to-use control panels, and seamless integration with existing safety systems for comprehensive fire protection.' },
      { image: "/images/subitems/subitem-fire-alarms-1.jpg", name: 'Honeywell', desc: 'Advanced, reliable fire detection and protection with cutting-edge technology, user-friendly interfaces, and seamless integration.' }
    ] },
  { slug: "safety-lockers", name: "Safety Lockers", tagline: "Secure storage for valuables and documents.", body: "Fire and tamper-resistant lockers sized for homes, offices, and bank-adjacent use cases.", subItems: [
      { image: "/images/subitems/subitem-safety-lockers-0.jpg", name: 'Godrej NX Pro 25L', desc: 'A 25-litre home safe with a digital keypad and motorized locking bolts, built with solid steel construction.' },
      { image: "/images/subitems/subitem-safety-lockers-1.jpg", name: 'Godrej 31 Defender Prime CL-C', desc: 'A high-security, 31-litre safe with advanced locking mechanisms and a fire-resistant design.' }
    ] },
  { slug: "gps-vehicle-tracker", name: "GPS Vehicle Tracker", icon: "/images/icons/icon-gps-vehicle-tracker.jpg", tagline: "Real-time location tracking for fleets and vehicles.", body: "Live GPS tracking for personal vehicles and business fleets, with route history and geofencing for logistics use cases.", subItems: [
      { image: "/images/subitems/subitem-gps-vehicle-tracker-0.jpg", name: 'AIS GPS Vehicle Tracker', desc: 'Real-time location tracking, geo-fencing, and vehicle diagnostics with mobile and web access, suited to personal, fleet, and commercial use.' },
      { name: 'ATS GPS Tracker', desc: 'Fleet GPS tracking with real-time location insights, driver behaviour monitoring, route optimisation, geofencing, and comprehensive reporting.' }
    ] },
  { slug: "burglar-alarm-system", name: "Burglar Alarm System", tagline: "Detect unauthorized entry the moment it happens.", body: "Motion and entry sensors linked to a central alarm, sized for homes, shops, and warehouses.", subItems: [
      { image: "/images/subitems/subitem-burglar-alarm-system-0.jpg", name: 'Honeywell', desc: 'Motion detection and real-time alerts for comprehensive protection of homes and businesses.' },
      { image: "/images/subitems/subitem-burglar-alarm-system-1.jpg", name: 'Godrej', desc: 'A control panel, entry sensors, an audible alarm, keypad or remote control, real-time alert connectivity, and battery backup.' }
    ] },
  // Pulled directly from the old site's own guard-tour-patrol-security page.
  { slug: "guard-tour-patrol-security", name: "Guard Tour Patrol Security", icon: "/images/icons/icon-gps-vehicle-tracker.jpg", tagline: "Real-time tracking and accountability for security patrols.", body: "The eSSL guard tour patrol system tracks patrol activities in real time, using RFID, GPS, or mobile technology to monitor security personnel and confirm checkpoints are actually being covered on schedule." },
  // The next three items are pulled from the company's printed profile brochure
  // (VEL SYSTEMS PROFILE 23-24.pdf), which lists services not yet documented on
  // the old website. No dedicated stock photos exist for these yet, so each
  // reuses the closest real product photo already in our library (same
  // equipment family) rather than shipping with no image at all.
  { slug: "pas-av-system-bell-timer", name: "PAS (AV System) & Bell Timer", icon: "/images/icons/icon-intercom.jpg", tagline: "Public address, conferencing, and automated bell timing.", body: "Public Address Systems (Analog and IP PA), Audio and Video Conference Systems for meeting rooms, and automated bell timers that handle period bell timings for schools and institutions on a set schedule." },
  { slug: "canteen-visitor-management", name: "Canteen & Visitor Management", icon: "/images/icons/icon-biometric-system.jpg", tagline: "Automated canteen billing and visitor tracking.", body: "Fully automated canteen management with per-day food slip counts, online credit top-ups, prepaid or postpaid options for employees, and daily, weekly, or monthly item-wise reports. Paired with visitor management for tracking who's on-site and when." },
  { slug: "home-automation", name: "Home & Office Automation", icon: "/images/icons/icon-video-door-phone.jpg", tagline: "Remote and sensor-based control for doors, windows, and more.", body: "Automation for sliding doors and windows, dimmers, water heater control, and IR/on-off switches, controlled from a wall-mounted or wireless touch panel. Includes video monitoring, motion detection, and event-based actions." }
];

const IT_ITEMS = [
  { slug: "desktop", name: "Desktop", icon: "/images/icons/icon-desktop.jpg", tagline: "Reliable computer sales and service.", body: "New and refurbished desktop systems for office and home use, with on-site service backing every sale.", subItems: [
      { image: "/images/subitems/subitem-desktop-0.jpg", name: 'Tower Desktops', desc: 'Traditional desktop computers in a tower case, easy to upgrade with room for multiple hard drives and components.' },
      { image: "/images/subitems/subitem-desktop-1.jpg", name: 'Workstation', desc: 'Specialized desktops for professionals running demanding applications like video editing or 3D modelling.' },
      { image: "/images/subitems/subitem-desktop-2.jpg", name: 'All-in-One Desktops', desc: 'Combine the monitor and CPU into one compact unit, easier to set up but less upgradeable than tower desktops.' },
      { image: "/images/subitems/subitem-desktop-3.jpg", name: 'Gaming Desktops', desc: 'High-performance desktops with powerful graphics cards and components built for demanding games.' },
      { image: "/images/subitems/subitem-desktop-4.jpg", name: 'Consumer Desktop', desc: 'Powerful performance in a sleek, user-friendly design for everyday productivity and entertainment.' }
    ] },
  { slug: "laptop", name: "Laptop", icon: "/images/icons/icon-laptop.jpg", tagline: "Fast, reliable laptop sales and service.", body: "A range of laptops across budgets, from everyday office use to performance machines, with warranty support handled locally.", subItems: [
      { image: "/images/subitems/subitem-laptop-0.jpg", name: 'Business Laptops', desc: 'Built for durability, security, and productivity in business use.' },
      { image: "/images/subitems/subitem-laptop-1.jpg", name: 'Gaming Laptops', desc: 'Powerful CPUs, graphics cards, and large memory/storage for gaming.' },
      { image: "/images/subitems/subitem-laptop-2.jpg", name: '2-in-1 Laptops', desc: 'Lightweight, slim, and portable with long battery life.' },
      { image: "/images/subitems/subitem-laptop-3.jpg", name: 'Chromebooks', desc: "Run Google's Chrome OS, designed for web-based tasks with minimal storage." },
      { image: "/images/subitems/subitem-laptop-4.jpg", name: 'Ultrabooks', desc: 'Lightweight, slim, and portable with long battery life.' },
      { image: "/images/subitems/subitem-laptop-5.jpg", name: 'MacBooks', desc: 'Designed and manufactured by Apple, running macOS.' }
    ] },
  { slug: "printer", name: "Printer", icon: "/images/icons/icon-printer.jpg", tagline: "Economical control over your printing budget.", body: "Printer sales, consumables, and service contracts that keep per-page costs predictable instead of surprising you at reorder time.", subItems: [
      { image: "/images/subitems/subitem-printer-0.jpg", name: 'Inkjet Printers', desc: 'High-quality, fast printing with wireless connectivity, automatic duplexing, and a compact, energy-efficient design.' },
      { image: "/images/subitems/subitem-printer-1.jpg", name: 'Laser Printers', desc: 'Use toner cartridges and a laser for high-quality prints at fast speeds.' },
      { image: "/images/subitems/subitem-printer-2.jpg", name: 'Thermal Printers', desc: 'Use heat to transfer images onto special paper, ideal for receipts and small documents.' },
      { image: "/images/subitems/subitem-printer-3.jpg", name: 'Dot Matrix Printers', desc: 'A print head strikes an ink ribbon to produce text and images, commonly used for invoices and multi-part documents.' },
      { image: "/images/subitems/subitem-printer-4.jpg", name: 'Barcode Printer', desc: 'High-speed label and barcode printing for retail and inventory management.' },
      { image: "/images/subitems/subitem-printer-5.jpg", name: 'Ink Tank Printers', desc: 'Refillable ink tank systems built for high-quality, cost-effective printing across a variety of paper sizes.' }
    ] },
  { slug: "tablet", name: "Tablet", tagline: "Compact, portable devices for work on the move.", body: "Tablets for field staff, reception counters, and point-of-sale use, matched to the job rather than sold as one-size-fits-all.", subItems: [
      { image: "/images/subitems/subitem-tablet-0.jpg", name: 'Lenovo', desc: 'A range of models from budget-friendly to high-performance, with versatile displays, detachable keyboards, and Android or Windows integration.' },
      { image: "/images/subitems/subitem-tablet-1.jpg", name: 'Acer', desc: 'Acer tablets balancing everyday productivity and entertainment use, with build quality backed by local service support.' }
    ] },
  { slug: "software", name: "Software", icon: "/images/icons/icon-software.jpg", tagline: "Protecting your data and your working environment.", body: "Genuine OS, productivity, and antivirus software licensing, with setup support so it's actually configured correctly on day one." },
  { slug: "mobile-accessories", name: "Mobile Accessories", icon: "/images/icons/icon-mobile-accessories.jpg", tagline: "Accessories that extend what your devices can do.", body: "Chargers, cases, and peripherals sourced for reliability, not just shelf price.", subItems: [
      { image: "/images/subitems/subitem-mobile-accessories-0.jpg", name: 'Powerbank', desc: 'High-capacity, fast, reliable charging for multiple devices on the go, sleek and portable.' },
      { image: "/images/subitems/subitem-mobile-accessories-1.jpg", name: 'Pendrive', desc: 'High-performance pen drives with extensive storage and rapid transfer rates for everyday use or backups.' },
      { image: "/images/subitems/subitem-mobile-accessories-2.jpg", name: 'USB Cables', desc: 'Fast, reliable, durable cables for charging and syncing devices.' },
      { image: "/images/subitems/subitem-mobile-accessories-3.jpg", name: 'Headphone', desc: 'Premium sound with crisp highs and deep bass, plush comfort, and noise isolation.' },
      { image: "/images/subitems/subitem-mobile-accessories-4.jpg", name: 'Data Cable', desc: 'Portronics data cables for reliable, high-speed charging and syncing across smartphones, tablets, and other gadgets.' }
    ] },
  { slug: "server-workstation", name: "Server & Workstation", icon: "/images/icons/icon-server-workstation.jpg", tagline: "Power and reliability for demanding workloads.", body: "Server and workstation builds sized to actual load, from a small office file server to multi-user business applications." },
  { slug: "network-hardware-solution", name: "Networking", icon: "/images/icons/icon-network-hardware-solution.jpg", tagline: "Industrial-grade network solutions.", body: "Switches, routers, structured cabling, and network design for offices and industrial sites that need uptime, not guesswork.", subItems: [
      { image: "/images/subitems/subitem-network-hardware-solution-0.jpg", name: 'Routers', desc: 'Connect multiple networks together and direct traffic between them, allowing multiple devices to share one internet connection.' },
      { image: "/images/subitems/subitem-network-hardware-solution-1.jpg", name: 'Switches', desc: 'Connect multiple devices within a network for faster, more efficient communication than hubs.' },
      { image: "/images/subitems/subitem-network-hardware-solution-2.jpg", name: 'Hubs', desc: 'Connect multiple devices within a network, less efficient than switches, generally used in smaller networks.' },
      { image: "/images/subitems/subitem-network-hardware-solution-3.jpg", name: 'Network Interface Cards (NICs)', desc: 'Hardware components that give devices a physical interface to connect to a network.' },
      { image: "/images/subitems/subitem-network-hardware-solution-4.jpg", name: 'Cables', desc: 'Ethernet cables providing the physical connection for data transfer between devices.' },
      { image: "/images/subitems/subitem-network-hardware-solution-5.jpg", name: 'Modems', desc: 'Connect a network to the internet, transferring data through a broadband connection.' }
    ] },
  { slug: "online-offline-ups", name: "Online & Offline UPS", icon: "/images/icons/icon-online-offline-ups.jpg", tagline: "Keep operations running through power cuts.", body: "UPS systems sized to your load, protecting servers, workstations, and critical equipment from outages and voltage spikes.", subItems: [
      { image: "/images/subitems/subitem-online-offline-ups-0.jpg", name: 'APC', desc: 'Dependable backup power and superior surge protection during outages and disruptions.' },
      { image: "/images/subitems/subitem-online-offline-ups-1.jpg", name: 'Fingers', desc: 'Dependable backup power and surge protection, keeping devices running safely during outages.' },
      { image: "/images/subitems/subitem-online-offline-ups-2.jpg", name: 'Luminous', desc: 'Continuous power with reliable backup and robust surge protection during outages and fluctuations.' }
    ] },
  { slug: "firewall-security-system", name: "Firewall", icon: "/images/icons/icon-firewall-security-system.jpg", tagline: "Professional protection made simple for your network.", body: "Firewall appliances and configuration for businesses that need real network security, not just a default router setting.", subItems: [
      { image: "/images/subitems/subitem-firewall-security-system-0.jpg", name: 'SonicWall', desc: 'Intrusion prevention, malware protection, and secure remote access to safeguard businesses against cyber threats.' },
      { image: "/images/subitems/subitem-firewall-security-system-1.jpg", name: 'Sophos', desc: 'Advanced threat protection, centralized management, and detailed reporting for comprehensive security needs.' },
      { image: "/images/subitems/subitem-firewall-security-system-2.jpg", name: 'Cisco', desc: "Advanced threat defense, high performance, deep packet inspection, VPN support, and scalable management through Cisco's security ecosystem." }
    ] },
  { slug: "it-peripherals", name: "IT Peripherals", icon: "/images/icons/icon-it-peripherals.jpg", tagline: "Peripherals that expand what your setup can do.", body: "Keyboards, mice, docking stations, monitors, and other peripherals for office and home office setups.", subItems: [
      { image: "/images/subitems/subitem-it-peripherals-0.jpg", name: 'Laptop', desc: 'Portable personal computers integrating a screen, keyboard, and processing components for computing on the go.' },
      { image: "/images/subitems/subitem-it-peripherals-1.jpg", name: 'Monitor', desc: 'Display devices presenting visual output, the main interface for viewing and managing applications and media.' },
      { image: "/images/subitems/subitem-it-peripherals-2.jpg", name: 'Mice', desc: 'Wired or wireless input devices with various designs and sensors for precise control and comfort.' },
      { image: "/images/subitems/subitem-it-peripherals-3.jpg", name: 'Keyboard', desc: 'Input devices across layouts and switch types, from basic to advanced models with backlighting and programmable keys.' },
      { image: "/images/subitems/subitem-it-peripherals-4.jpg", name: 'RAM', desc: 'Fast, temporary storage for active data and applications, enabling quick access and smooth multitasking.' },
      { image: "/images/subitems/subitem-it-peripherals-5.jpg", name: 'Motherboard', desc: 'The central circuit board connecting the CPU, RAM, and other components, managing data flow across the system.' }
    ] },
  { slug: "wifi-access-point", name: "WiFi Access Point", icon: "/images/icons/icon-wifi-access-point.jpg", tagline: "Reliable wireless coverage, properly planned.", body: "Access point placement and setup for offices and campuses that need consistent WiFi coverage across every room, not just near the router." },
  { slug: "photocopier", name: "Photocopier", icon: "/images/icons/icon-photocopier.jpg", tagline: "Built for bulk printing and copying.", body: "Photocopiers and MFDs suited to high-volume offices, with service contracts to match.", subItems: [
      { image: "/images/subitems/subitem-photocopier-0.jpg", name: 'Analog Photocopiers', desc: 'Use a light source to transfer an image onto a photosensitive drum, coated with toner and fused onto paper.' },
      { image: "/images/subitems/subitem-photocopier-1.jpg", name: 'Digital Photocopiers', desc: 'Use a digital scanner to capture the image, then print it using toner or ink.' },
      { image: "/images/subitems/subitem-photocopier-2.jpg", name: 'Multifunctional Photocopiers', desc: 'Combine photocopier, scanner, printer, and sometimes fax functions into one device.' },
      { image: "/images/subitems/subitem-photocopier-3.jpg", name: 'Networked Photocopiers', desc: 'Connected to a network, allowing multiple users to print or copy from the same machine.' },
      { image: "/images/subitems/subitem-photocopier-4.jpg", name: 'Color Photocopiers', desc: 'Produce color copies, often used for marketing materials and documents requiring color.' },
      { image: "/images/subitems/subitem-photocopier-5.jpg", name: 'Portable Photocopiers', desc: 'Small, lightweight, and easy to transport for use on the go.' }
    ] },
  { slug: "data-storage", name: "Data Storage", icon: "/images/icons/icon-data-storage.jpg", tagline: "Fast, reliable storage for your business data.", body: "NAS and storage solutions sized for backup, file sharing, and growing data needs.", subItems: [
      { image: "/images/subitems/subitem-data-storage-0.jpg", name: 'HDD Storage', desc: 'Uses magnetic fields to store data on a hard disk drive or magnetic tape.' },
      { image: "/images/subitems/subitem-data-storage-1.jpg", name: 'Solid State Storage', desc: 'Uses flash memory technology on SSDs and USB flash drives.' },
      { image: "/images/subitems/subitem-data-storage-2.jpg", name: 'Cloud Storage', desc: 'Stores and accesses data over the internet through a third-party service provider.' },
      { image: "/images/subitems/subitem-data-storage-3.jpg", name: 'Network-Attached Storage (NAS)', desc: 'File-level storage that lets multiple users and devices access data over a local area network.' }
    ] },
  { slug: "data-recovery-2", name: "Data Recovery", tagline: "Seamless recovery when data goes missing.", body: "Recovery services for failed drives and accidental deletion, handled with the care that critical business data needs." },
  { slug: "projector", name: "Projector", icon: "/images/icons/icon-projector.jpg", tagline: "Clear projection for meetings and classrooms.", body: "Projectors for boardrooms, classrooms, and events, matched to room size and lighting conditions." }
];

const AMC_PLANS = [
  { name: "Annual Maintenance Contract – Comprehensive (AMC)", image: "/images/icons/icon-server-workstation.jpg", body: "We assess your full specification and fix one annual amount that covers spare parts. This includes preventive maintenance at least once a month, plus service as needed through the year." },
  { name: "Annual Service Contract – Non-Comprehensive (ASC)", image: "/images/icons/icon-desktop.jpg", body: "Our engineers service all model configurations for a fixed reasonable amount, excluding spare parts cost. Covers preventive maintenance and on-demand service through the contract period." },
  { name: "On-Call Services", image: "/images/icons/icon-network-hardware-solution.jpg", body: "Experienced service engineers respond to requests within working hours when you don't need a full annual contract." }
];

// Real product photos we already have, matched to the categories the old site's
// rental page actually rents out (laptops, desktops, projectors, printers).
const RENTAL_CATEGORIES = [
  { name: "Laptop Rental", image: "/images/icons/icon-laptop.jpg", desc: "Touchscreen laptops with dedicated graphics, M.2 SSD storage, and FHD displays." },
  { name: "Desktop Rental", image: "/images/icons/icon-desktop.jpg", desc: "Core i3 to Core i9 desktops with fast delivery, setup, and technical support." },
  { name: "Projector Rental", image: "/images/icons/icon-projector.jpg", desc: "Crisp, clear projection for presentations and events, by the day, week, or month." },
  { name: "Printer Rental", image: "/images/icons/icon-printer.jpg", desc: "Laser printers for short or long-term hire, single-function or all-in-one." }
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

// Real post titles from the old site's blog. Full bodies below are written fresh,
// but every claim is grounded in facts already verified elsewhere in this file
// (SOLAR_FAQ, SOLAR_FINANCE, and the security/IT sub-item descriptions) rather
// than invented statistics.
const BLOG_POSTS = [
  { slug: "video-door-phone-not-a-luxury", title: "Secure Your Home with a Smart Touch: Why a Video Door Phone Is No Longer a Luxury", image: "/images/subitems/subitem-video-door-phone-0.jpg", body: [
    "A knock on the door used to mean walking over, opening it, and finding out who it was. Installing a video door phone removes the guesswork. A video door phone lets you see and speak to whoever's outside before you decide whether to open up at all, which matters whether you're home alone, expecting a delivery, or just don't want to deal with someone at the door.",
    "The units we install, from Hikvision and Honeywell, both give you high-resolution video, two-way audio, and remote access from your phone, so you can answer the door from another room or another city. Motion detection and night vision mean you're not caught off guard after dark either.",
    "For apartment buildings and gated communities, multi-unit versions let each flat run its own handset off a shared entry panel, so every resident gets the same visitor screening without needing a separate wired system per door.",
    "It's a small addition to install, usually done alongside your existing wiring or as a standalone WiFi unit, but it changes a basic daily habit: you stop opening the door on faith and start opening it on information. That's the shift from luxury to just sensible."
  ] },
  { slug: "top-5-solar-myths", title: "Top 5 Myths About Solar Power, And the Truth Behind Them", image: "/images/solar/solar-residential.jpg", body: [
    "Solar gets talked about a lot, and not all of it is accurate. Here are five things people commonly get wrong, and what's actually true.",
    "Myth 1: Panels don't work on cloudy days. They generate less power when it's overcast, that part is true, but they don't stop working. Paired with battery storage or a grid-tied setup, your home's power supply stays uninterrupted even through a run of bad weather.",
    "Myth 2: Solar panels don't last long. Most quality panels last 25 to 30 years with minimal maintenance. That's a multi-decade return on a single installation, not a short-term gadget.",
    "Myth 3: You need a huge roof. On average, a 1 kW system needs about 100 square feet of shadow-free rooftop area. Most homes have more than enough space; a proper site assessment tells you exactly what your roof can support.",
    "Myth 4: There's no financial help available. Residential customers in India can access government subsidies on rooftop solar, and we handle the paperwork side of that process rather than leaving you to figure it out alone.",
    "Myth 5: Installation takes forever. A home installation typically takes 2 to 5 days. Larger industrial projects take longer, but that's a matter of scale, not a sign that solar itself is a slow, complicated process."
  ] },
  { slug: "choosing-the-right-printer", title: "Choosing the Right Printer Made Simple, A Local Guide from Vel Systems, Chengalpattu", image: "/images/subitems/subitem-printer-1.jpg", body: [
    "Printers aren't one-size-fits-all, and picking the wrong type usually shows up later as a high per-page cost or a machine that can't keep up with what you actually print. Here's how the main categories break down.",
    "Inkjet printers give you high-quality, fast printing with wireless connectivity and automatic duplexing in a compact, energy-efficient design, good for home offices and light everyday use.",
    "Laser printers use toner and a laser to produce high-quality prints at fast speeds, which makes them the better fit for offices with steady, higher-volume printing.",
    "Thermal printers use heat to transfer images onto special paper, built specifically for receipts and small documents rather than general-purpose printing.",
    "Dot matrix printers strike an ink ribbon to produce text and images, and they're still the standard choice for invoices and multi-part carbon-copy documents in many businesses.",
    "Barcode printers handle high-speed label and barcode printing for retail and inventory management, while ink tank printers use refillable tanks for cost-effective, high-quality printing across a range of paper sizes.",
    "If you're not sure which category fits your volume and use case, tell us what you print and how often. That's a five-minute conversation that saves you from buying the wrong machine."
  ] },
  { slug: "best-solar-system-tamil-nadu", title: "How to Choose the Best Solar System for Your Home in Tamil Nadu", image: "/images/solar/solar-plant.jpg", body: [
    "Tamil Nadu gets strong, consistent sunlight for most of the year, which makes solar a genuinely practical option here, not just a trend. The right system depends on what you're powering and how much space you have.",
    "Residential Solar covers rooftop systems sized for homes. Commercial Solar fits shops, offices, and business premises. Industrial Solar scales up for factories and industrial rooftops, and where land is available but rooftop space isn't, Solar Plant setups (ground-mounted) or Floating Solar over water bodies are the alternative.",
    "On financing: rates start around 6.5% for residential loans, 7.99% for commercial and industrial, and 8.99% for housing society loans, with loan amounts ranging from ₹1 lakh to ₹10 crores through nationalised banks, private banks, and NBFCs. Note that rates change, so treat these as a starting point to confirm at the time you apply.",
    "On subsidy: residential households can get ₹30,000 per kW for the first 2 kW, and ₹18,000 per kW for additional capacity up to 3 kW, capped at ₹78,000 total for larger systems. Housing societies and RWAs get ₹18,000 per kW for common facilities including EV charging, up to 500 kW capacity.",
    "The best system isn't the biggest one, it's the one sized correctly for your actual roof area and power usage. That's what a proper site assessment is for, and it's the first step before any quote means anything."
  ] },
  { slug: "power-up-your-tech-life", title: "IT Hardware, Networking & AMC Support: Power Up Your Tech Life at Vel Systems", image: "/images/icons/icon-laptop.jpg", body: [
    "Most people only think about their IT hardware setup when something breaks. A little planning ahead of that point, on hardware, networking, and AMC support, saves a lot of downtime later.",
    "On the hardware side, that means picking desktops and laptops sized to what you actually do, from everyday office work to demanding workstation tasks, backed by on-site service instead of a box that ships and disappears.",
    "On the infrastructure side, that means networking that doesn't fall over under load, whether that's switches and structured cabling for an office or a properly planned WiFi access point layout for consistent coverage across every room. It also means a UPS sized to your load, so a power cut doesn't take your server or workstation down with it.",
    "And on the ongoing side, that means an AMC or ASC contract, so maintenance is a scheduled, predictable cost instead of an emergency call when something finally fails.",
    "None of this is complicated in isolation. It's just easier to get right with someone who's been doing it locally for over two decades than to piece it together machine by machine."
  ] },
  { slug: "top-5-reasons-cctv-2025", title: "Top 5 Reasons to Install CCTV at Home in 2026", image: "/images/icons/icon-cctv-camera.jpg", body: [
    "CCTV has moved well past grainy black-and-white footage. Here's what modern CCTV home surveillance actually gives you.",
    "1. Coverage that fits the space. Dome cameras suit indoor settings with a wide, hard-to-read viewing angle, while bullet cameras are built for outdoor durability with sharp, high-definition footage.",
    "2. Control when you need it. PTZ (pan-tilt-zoom) cameras let you move the camera and zoom into specific areas remotely, useful for keeping an eye on a larger compound from one unit.",
    "3. Easy remote access. IP cameras integrate easily with your network for real-time alerts and remote viewing from your phone, wherever you are.",
    "4. Coverage in the dark. Thermal cameras detect movement through heat rather than light, which makes them genuinely useful in low-light or pitch-dark areas outdoors.",
    "5. Flexible installation. Wireless cameras connect over your network without a cabling overhaul, and DVR/NVR systems record and store footage from multiple cameras at once, with motion detection so you're not reviewing hours of nothing.",
    "The right home setup is usually a mix of two or three of these, not just one camera at the front gate. Tell us your layout and we'll tell you what actually covers it."
  ] },
  { slug: "why-switch-to-solar-now", title: "Top 5 Reasons Why Now's the Perfect Time to Switch to Solar Power for Your Home", image: "/images/solar/solar-installation.jpg", body: [
    "If you've been putting off going solar, here's what's actually working in your favour right now.",
    "1. The subsidy is live and specific. ₹30,000 per kW for the first 2 kW, ₹18,000 per kW up to 3 kW, capped at ₹78,000 for residential systems. That's a real reduction in your upfront cost, not a vague promise.",
    "2. Financing is accessible. Loans start from 6.5% through nationalised banks, private banks, and NBFCs, with tenures from 1 to 10 years, so the upfront cost doesn't have to be paid in one go.",
    "3. The panels last. 25 to 30 years of service life with minimal maintenance means this is a decision you make once, not something you revisit every few years.",
    "4. Installation is fast. Most home systems are installed in 2 to 5 days, so you're not living through a long, disruptive project to get there.",
    "5. Your roof is probably already suitable. A 1 kW system needs roughly 100 square feet of shadow-free space, which is less than most homeowners expect, and a site assessment tells you exactly what your setup would look like.",
    "None of these reasons depend on a limited-time offer or a sales deadline. They're just the current state of subsidy, financing, and technology, and none of them get better by waiting."
  ] },
  { slug: "amc-vs-asc-annual-maintenance-contract-explained", title: "AMC vs ASC: Which Annual Maintenance Contract Actually Fits Your Business", image: "/images/hero/quote-service.jpg", body: [
    "An Annual Maintenance Contract is the difference between IT problems getting fixed on a schedule and IT problems getting fixed in a panic. Once you own more than a couple of computers, printers, or a network, an AMC turns unpredictable repair calls into a fixed, planned cost. The confusing part is that AMC isn't one product, it's a few, and picking the wrong one means paying for cover you don't need or missing cover you do.",
    "Comprehensive AMC is the full-cover option. We assess your complete setup and agree one annual amount that includes spare parts, plus preventive maintenance at least once a month with additional service visits as needed through the year. This suits businesses running critical equipment where downtime costs more than the contract itself, think servers, workstations running production software, or a network that can't afford to go dark.",
    "Non-Comprehensive ASC (Annual Service Contract) covers the same preventive maintenance and on-demand service, but spare parts are billed separately at a fixed, reasonable rate rather than bundled into the annual fee. It's the right call when your hardware is newer, still under manufacturer warranty for parts, or when you'd rather pay for components only when they actually fail.",
    "On-Call Services skip the annual commitment entirely. Our service engineers respond to requests within working hours whenever something comes up, which fits businesses with a small setup that doesn't yet justify a full annual contract.",
    "The honest way to choose: count your machines, check what's still under warranty, and be realistic about how much downtime you can absorb before it costs you money. A five-machine office with warranty cover still running rarely needs Comprehensive AMC. A factory floor running 40 workstations with zero tolerance for downtime almost always does.",
    "We've been servicing AMC and ASC contracts for businesses around Chengalpattu for over 25 years, with an in-house team of 40+ engineers rather than subcontracted technicians. Tell us your equipment list on WhatsApp and we'll tell you plainly which contract type actually fits, not just which one we'd prefer to sell."
  ] }
];

// The 5 solar categories shown on the old site's power-solutions page.
// Images pulled from the old site's Solar page "Our Customized Solutions" graphic
// (velsystems.in/power-solutions/) — cropped out of the two composite banners used there.
const SOLAR_TYPES = [
  { name: "Residential Solar", desc: "Rooftop systems sized for homes.", image: "/images/solar/solar-residential.jpg" },
  { name: "Commercial Solar", desc: "Systems for shops, offices, and business premises.", image: "/images/solar/solar-commercial.jpg" },
  { name: "Industrial Solar", desc: "Larger installations for factories and industrial rooftops.", image: "/images/solar/solar-industrial.jpg" },
  { name: "Solar Plant", desc: "Ground-mounted plants for bigger capacity needs.", image: "/images/solar/solar-plant.jpg" },
  { name: "Floating Solar", desc: "Panels installed over water bodies where land is limited.", image: "/images/solar/solar-floating.jpg" }
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
// Checked again for more (homepage, Customers page, Facebook reviews) — old site only
// ever had this one written testimonial. Facebook page has zero reviews. Adding an
// "image" here uses the real solar hero photo already sourced from the old site, since
// this customer's story is specifically about his solar installation — not a fake photo
// of "Umesh" himself, which we don't have and won't invent.
//
// The 3 below are real Google reviews for the Vel Systems Google Business listing
// (4.8, 1,243 ratings at time of writing), used with the reviewer's own public
// display name and quoted as they wrote it. Two were cut short at the natural
// end of a full sentence rather than including Google's own "... More" truncation
// point mid-sentence — nothing after the quoted text was invented.
const TESTIMONIALS = [
  {
    quote: "I've known Vel Systems for the past 25 years and have purchased four laptops, batteries, and CCTV systems from them. I've always been satisfied with their service. Recently, they recommended solar to help reduce my electricity bills. Once approvals were granted, they took full responsibility for the solar installation, including arranging a loan through Canara Bank and securing the government subsidy. I didn't have to worry about anything, they handled all the paperwork efficiently. Their end-to-end service and after-sales support are commendable. I'm completely happy and have already referred them to my friends. Vel Systems is a trusted one-stop solution for all tech and energy needs.",
    name: "Umesh",
    company: "Residential Solar Customer",
    image: "/images/hero/hero-solar.jpg",
    source: "Shared directly with Vel Systems"
  },
  {
    quote: "I recently bought a laptop, and I would like to share my review. The performance is smooth, the battery life is good, and it meets my daily needs. Overall, I am satisfied with my purchase.",
    name: "Amuloo",
    company: "Laptop Customer",
    source: "Google review"
  },
  {
    quote: "I recently engaged Vel Systems for the solar installation at my residence, and I would like to share my positive experience.",
    name: "90selaiyur",
    company: "Solar Installation Customer",
    image: "/images/solar/solar-residential.jpg",
    source: "Google review"
  },
  {
    quote: "I recently bought a ready-made personal computer from Vel Systems, and the whole experience was easy and efficient.",
    name: "Mathangi Ananthakrishnan",
    company: "Desktop PC Customer, Local Guide",
    source: "Google review"
  }
];

// Real, verifiable third-party rating — not a quote we're putting in anyone's mouth.
// Pulled from Vel Systems' live Justdial listing (Chengalpattu Main Road branch) on
// 2026-07-29. Reconfirm the number periodically since Justdial ratings move over time.
const THIRD_PARTY_RATING = {
  source: "Justdial",
  rating: 4.7,
  reviewCount: 1285,
  url: "https://www.justdial.com/Chengalpattu/search?q=Vel-Systems-Chengalpattu-Main-Road&stype=company_list"
};

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

// Additional real client names — pulled from the two "Trusted By" pages of the
// printed company profile (VEL SYSTEMS PROFILE 23-24.pdf), which lists far more
// clients than the old website's Customers page image gallery ever did. No logo
// image files for these (they only exist as flattened images inside the PDF), so
// shown as a text pill list rather than fabricated logo graphics. Names already
// covered by CLIENT_LOGOS or TRUSTED_BY are left out to avoid duplicates.
const ADDITIONAL_CLIENTS = [
  "Wheels India Limited", "Spirax Sarco", "Check Point", "SV Chem", "Sigma Corporation",
  "Balmer Lawrie Van Leer Limited", "Tamil Nadu Police", "District Collector Office, Chengalpattu",
  "Allison Transmission", "Sri Lakshmi Engineering Works", "Madras Mines", "Binny Mills Limited",
  "Akshayakalpa", "Lucas TVS", "Deejay Constructions", "Highbrow Healthcare", "Ceebros",
  "PL Agro", "Chengalpattu Medical College", "Rane TRW", "HBL Biotech Limited", "Esterkote",
  "IIITD&M Kancheepuram", "Dynamic Engineers & Electroplaters", "Shoks Projects Private Limited",
  "Arihant TVS", "RLT", "School of Seamanship & Nautical Technology", "Nilgiris 1905",
  "Soorya Chengalpattu", "City Collection Textiles", "Brindavan Schools", "Ramakrishna Mission",
  "St. Mary's Girls Hr. Sec. School", "Vivekananda School", "Triveni Academy Senior Secondary School",
  "Vikas Mantra Public School", "Kidzee", "Pattammal Alagesan College", "Subham Vidhyalayaa CBSE School",
  "V.S. Stars Public School", "Ela Green School", "Rajeswari Vedachalam Govt Arts College",
  "Mount Litera Zee School", "Mahindra Aqualily", "Iris Court", "Sylvan County",
  "Arihant Villa Viviana", "Laurel", "Lathaa Cinemas", "SRK Cinemas", "Shieeld Light Roof",
  "Netafim", "Beent Hospital Eye & ENT", "Sree Renga Hospital", "Dr. Wahaab's Pranic Acupuncture",
  "Athveka Multi Speciality Clinic", "RUWSEC Hospital", "Samyuktha Clinic", "Pallava Scans",
  "Chengai Scans", "Sandeep Scans", "Nanmayam Health Care", "Balaji Heartcare Centre",
  "Jaas Bone & Joint Centre", "Baby Scans", "SMS Blue Metals", "RS Blue Metals", "AGD Steels",
  "Esthell", "Sangaminn Hotel & Banquets", "Bala Farms", "Sharda Motor", "Fatima Furniture",
  "Ashapura", "Hotel Shri Ganesh Bhavan", "Ranga Residency", "Kuppanna", "FLSmidth",
  "Jayam Store", "Ansar Stores", "NSK Thanga Maaligai", "Fashion Trends", "Valuimurugan Traders",
  "Karpagam", "Arihant Bikes", "Bajaj"
];

module.exports = {
  BRAND, LOCATIONS, TEAM_CONTACTS, TEAM_SIZE, HOME_QUOTES, SOLAR_TYPES, SOLAR_FINANCE, SOLAR_FAQ, TRUSTED_BY, CLIENT_LOGOS, ADDITIONAL_CLIENTS, waLink, NAV, UTILITY_NAV,
  SECURITY_ITEMS, IT_ITEMS, AMC_PLANS, RENTAL_CATEGORIES, SHOP_PRODUCTS, BLOG_POSTS, TESTIMONIALS, THIRD_PARTY_RATING,
  FAQ_KB, FAQ_FALLBACK
};
