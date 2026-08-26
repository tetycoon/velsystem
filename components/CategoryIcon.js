import {
  Cctv, DoorOpen, Fingerprint, PhoneCall, ParkingSquare, ScanLine, Radio,
  Video, Banknote, Flame, LockKeyhole, Navigation, Siren, Footprints,
  Speaker, UtensilsCrossed, Lightbulb,
  Monitor, Laptop, Printer, Tablet, ShieldCheck, Smartphone, Server,
  Network, BatteryCharging, ShieldAlert, Keyboard, Wifi, Copy, HardDrive,
  RotateCcw, Projector, Wrench
} from "lucide-react";

// Every SECURITY_ITEMS / IT_ITEMS slug mapped to a real, semantically-fitting
// icon, replacing the old low-res clipart-style JPEGs. A few items had no
// icon at all before, or wrongly reused another category's icon (guard tour
// patrol was using the GPS tracker icon, home automation was using the video
// door phone icon) — those are corrected here with their own icon.
// cctv-camera was mapped to the plain "Camera" icon (looks like a DSLR),
// swapped for lucide's dedicated "Cctv" icon (camera-on-a-pole) instead.
const ICON_MAP = {
  "cctv-camera": Cctv,
  "door-access-control": DoorOpen,
  "biometric-system": Fingerprint,
  "intercom": PhoneCall,
  "boom-barrier": ParkingSquare,
  "metal-detector-signal-jammer": ScanLine,
  "signal-booster": Radio,
  "video-door-phone": Video,
  "cash-counting-machine": Banknote,
  "fire-alarms": Flame,
  "safety-lockers": LockKeyhole,
  "gps-vehicle-tracker": Navigation,
  "burglar-alarm-system": Siren,
  "guard-tour-patrol-security": Footprints,
  "pas-av-system-bell-timer": Speaker,
  "canteen-visitor-management": UtensilsCrossed,
  "home-automation": Lightbulb,

  "desktop": Monitor,
  "laptop": Laptop,
  "printer": Printer,
  "tablet": Tablet,
  "software": ShieldCheck,
  "mobile-accessories": Smartphone,
  "server-workstation": Server,
  "network-hardware-solution": Network,
  "online-offline-ups": BatteryCharging,
  "firewall-security-system": ShieldAlert,
  "it-peripherals": Keyboard,
  "wifi-access-point": Wifi,
  "photocopier": Copy,
  "data-storage": HardDrive,
  "data-recovery-2": RotateCcw,
  "projector": Projector
};

export default function CategoryIcon({ slug, size = 20, className = "", strokeWidth = 1.75 }) {
  const Icon = ICON_MAP[slug] || Wrench;
  return <Icon size={size} className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
