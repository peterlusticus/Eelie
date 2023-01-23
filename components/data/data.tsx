import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal, faUbuntu, faWindows } from "@fortawesome/free-brands-svg-icons";
import { faBuildingColumns, faCreditCard, faDesktop, faLaptop, faMoneyBill, faServer } from "@fortawesome/free-solid-svg-icons"

export const suffix = "| Bad Erzland GZ"

export const bookingSteps = [
  { id: '1', name: 'Suche', href: '#' },
  { id: '2', name: 'Suchergebnisse', href: '#' },
  { id: '3', name: 'Konfiguration', href: '#' },
  { id: '4', name: 'Anmelden oder Registrieren', href: '#' },
  { id: '5', name: 'Ihre Daten', href: '#' },
  { id: '6', name: 'Zahlung', href: '#' },
]

export const geraete = [
  { id: '1', title: "Laptop", specifications: ["1920 x 1080 Pixel Display", "8GB DDR4 SODIMM", "256GB SSD", "VGA, HDMI, DP, USB 3.0 (3x)", "Audio In / Out", "HD Webcam"], description: " ", price: "4.50", icon: faLaptop },
  { id: '2', title: "Desktop PC", specifications: ["Intel Pentium Gold G5400", "Intel UHD 610", "16GB DDR4", "256GB SSD", "VGA, HDMI, DP, USB 3.0 (6x) usb 2.0 (4X)", "Audio In / Out"], price: "4,50", icon: faDesktop },
  { id: '3', title: "Barebone", specifications: ["Intel® Pentium G4400T", "Intel UHD 610", "8GB DDR4", "256GB SSD", "VGA, HDMI, DP, USB 3.0 (3x) usb 2.0 (3X)", "Audio In / Out",], price: "4,50", icon: faServer }
]

export const standard = ["1 Gig LAN oder WLAN", "Fujitsu Bildschirm", "Fujitsu Maus", "Fujitsu Tastatur"]

export const betriebssysteme = [
  { id: '1', title: "Windows 11", description: "Version 22H2", icon: faWindows },
  { id: '2', title: "Windows 10", description: "Version 22H2", icon: faWindows },
  { id: '3', title: "Ubuntu", description: "Version 22.10 (Kinetic Kudu)", icon: faUbuntu }
]

export const browser = [
  "Chrome",
  "Firefox",
  "Edge"
]

export const kommunikationsapplikationen = [
  "Teams",
  "Discord",
  "Slack"
]

export const paymentMethods = [
  { id: '1', title: "PayPal", description: "Online-Bezahldienst", icon: faPaypal },
  { id: '2', title: "Barzahlung", description: "Barzahlung vor Ort", icon: faMoneyBill },
  { id: '3', title: "Überweisung", description: "Vorkasse per Überweisung", }
]

export const radiusInKm = ["5 km","10 km","20 km","50 km","100 km","200 km"]

export const personNumber = ["1","2","3","4","5"]

export const bookingTimes = ["1","2","3","4","5"]

export const sortItems = ["Entfernung zum Zentrum","Bewertungen","Mietzuschlag","Alphabetisch"]

export const priceItems = ["beliebig","<50€","50-100€","100-150€","150-200€","200-250€","250-300€","300-400€","400-500€","500-600€","600-700€","700-800€","800-900€","900-1.000€","1.000-1.200€","1200-1.500€","1500-2000€","2000-3000€",">3000€"]