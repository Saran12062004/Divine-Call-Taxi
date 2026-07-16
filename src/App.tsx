import { useState } from "react";
import {
  Menu, X, ArrowRight, Phone, Mail, MapPin, ShieldCheck, Clock, Wallet,
  Car, Star, Smartphone, Navigation, CheckCircle, Home as HomeIcon, Info, Grid,
  MessageCircle, Sun, Moon, User,
} from "lucide-react";

const NAV = ["Home", "About", "Services", "App", "Contact"];

const NAV_ITEMS: [string, JSX.Element][] = [
  ["Home", <HomeIcon style={{ width: 16, height: 16 }} />],
  ["About", <Info style={{ width: 16, height: 16 }} />],
  ["Services", <Grid style={{ width: 16, height: 16 }} />],
  ["App", <Smartphone style={{ width: 16, height: 16 }} />],
  ["Contact", <MessageCircle style={{ width: 16, height: 16 }} />],
];

const SERVICES = [
  { icon: <ShieldCheck className="w-8 h-8" />, title: "Safe & Verified Drivers", desc: "Every driver is background-verified and trained for a safe, comfortable ride every time." },
  { icon: <Clock className="w-8 h-8" />, title: "24/7 Availability", desc: "Book a ride any time, day or night. Cars are always on standby near you." },
  { icon: <Wallet className="w-8 h-8" />, title: "Affordable Fares", desc: "Transparent, upfront pricing with no hidden charges. Pay by cash or online." },
  { icon: <Navigation className="w-8 h-8" />, title: "Live Tracking", desc: "Track your ride in real time from pickup to drop, right on the map." },
];

const STEPS = [
  { step: "01", title: "Set Pickup & Drop", desc: "Open the app and enter your pickup point and destination." },
  { step: "02", title: "Get Matched Instantly", desc: "Nearest available car is assigned and confirmed by our team." },
  { step: "03", title: "Track Your Ride", desc: "Watch your driver arrive live on the map, right on schedule." },
  { step: "04", title: "Reach Safely", desc: "Enjoy a safe, comfortable ride to your destination, every time." },
];

const TESTIMONIALS = [
  { name: "Karthik R.", role: "Daily Commuter", text: "Fast pickup every single time. Drivers are polite and the fares are always fair.", rating: 5 },
  { name: "Priya S.", role: "Working Professional", text: "Booking is super simple and I can track my cab live. Feels very safe at night.", rating: 5 },
  { name: "Arun M.", role: "Business Traveler", text: "Reliable service for airport drops. Never missed a flight because of them.", rating: 5 },
];

const FIELDS: [string, string, string, string, JSX.Element][] = [
  ["Full Name", "name", "text", "Your full name", <User style={{ width: 18, height: 18 }} />],
  ["Phone Number", "phone", "tel", "+91 00000 00000", <Phone style={{ width: 18, height: 18 }} />],
  ["Pickup Location", "pickup", "text", "Enter pickup point", <MapPin style={{ width: 18, height: 18 }} />],
  ["Drop Location", "drop", "text", "Enter destination", <Navigation style={{ width: 18, height: 18 }} />],
];

// Brand colors — fixed regardless of light/dark mode (nav, hero, footer, app-connect section)
const C = { black: "#0D0D0D", dark: "#1A1A1A", yellow: "#FFC700", yellowDark: "#E6B300" };

// Theme palettes — applied to content sections (about, services, testimonials, contact)
const PALETTES = {
  light: { bg: "#F5F5F5", surface: "#FFFFFF", text: "#2A2A2A", muted: "#6B6B6B", border: "#E7E7E7" },
  dark: { bg: "#111113", surface: "#1C1C1F", text: "#F2F2F2", muted: "#A6A6AC", border: "#2E2E33" },
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [form, setForm] = useState({ name: "", phone: "", pickup: "", drop: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const T = PALETTES[theme];

  const scrollTo = (id: string) => {
    setActive(id);
    setMenuOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const MOBILE_TABS: [string, JSX.Element][] = [
    ["Home", <HomeIcon style={{ width: 22, height: 22 }} />],
    ["About", <Info style={{ width: 22, height: 22 }} />],
    ["Services", <Grid style={{ width: 22, height: 22 }} />],
    ["Contact", <MessageCircle style={{ width: 22, height: 22 }} />],
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ name: "", phone: "", pickup: "", drop: "", message: "" }); }, 4000);
  };

  const ThemeToggle = ({ small }: { small?: boolean }) => (
    <button onClick={() => setTheme(t => (t === "light" ? "dark" : "light"))}
      aria-label="Toggle dark mode"
      style={{
        width: small ? 38 : 44, height: small ? 38 : 44, borderRadius: "50%", border: `1px solid ${C.yellow}40`,
        background: `${C.yellow}15`, color: C.yellow, display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", flexShrink: 0,
      }}>
      {theme === "light" ? <Moon style={{ width: 18, height: 18 }} /> : <Sun style={{ width: 18, height: 18 }} />}
    </button>
  );

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: T.bg, color: T.text, transition: "background 0.3s, color 0.3s" }}>

      {/* NAVBAR */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: C.black, boxShadow: "0 2px 20px rgba(0,0,0,0.3)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 84, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: C.yellow, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 20px ${C.yellow}40` }}>
              <Car style={{ width: 28, height: 28, color: C.black }} />
            </div>
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: C.yellow, letterSpacing: 3, textTransform: "uppercase" }}>Divine</span>
              <span style={{ fontSize: 26, fontWeight: 900, color: "#fff", letterSpacing: "-0.5px" }}>Call Taxi</span>
            </span>
          </div>

          <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="hidden-mobile">
            {NAV_ITEMS.map(([n, icon]) => (
              <button key={n} onClick={() => scrollTo(n)}
                style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, transition: "all 0.2s",
                  background: active === n ? C.yellow : "transparent",
                  color: active === n ? C.black : "#fff" }}>
                {icon}{n}
              </button>
            ))}
            <button onClick={() => scrollTo("App")}
              style={{ marginLeft: 8, padding: "10px 22px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 14, fontWeight: 800,
                background: C.yellow, color: C.black, boxShadow: `0 4px 16px ${C.yellow}50` }}>
              Book a Ride
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <ThemeToggle />
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", cursor: "pointer" }} className="show-mobile">
              {menuOpen ? <X style={{ color: "#fff" }} /> : <Menu style={{ color: "#fff" }} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div style={{ background: C.dark, padding: "16px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV_ITEMS.map(([n, icon]) => (
              <button key={n} onClick={() => scrollTo(n)}
                style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", borderRadius: 8, border: "none", cursor: "pointer", textAlign: "left", fontSize: 15, fontWeight: 600,
                  background: active === n ? `${C.yellow}20` : "transparent", color: active === n ? C.yellow : "#fff" }}>
                {icon}{n}
              </button>
            ))}
            <button onClick={() => scrollTo("App")}
              style={{ marginTop: 8, padding: "12px 22px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 15, fontWeight: 800,
                background: C.yellow, color: C.black }}>
              Book a Ride
            </button>
          </div>
        )}
      </nav>

      <style>{`
        @media(max-width:768px){
          .hidden-mobile{display:none!important}
          .show-mobile{display:flex!important}
          .hero-grid{grid-template-columns:1fr!important}
          .about-grid{grid-template-columns:1fr!important}
          .contact-grid{grid-template-columns:1fr!important}
          .mobile-app-bar{display:flex!important}
          body{ padding-bottom: 76px; }
        }
        @media(min-width:769px){ .show-mobile{display:none!important} .mobile-app-bar{display:none!important} }
        input,textarea{ outline:none; font-family:inherit; }
        input:focus,textarea:focus{ border-color:${C.yellow}!important; box-shadow:0 0 0 3px ${C.yellow}30!important; }
        button{ -webkit-tap-highlight-color: transparent; }

        .watermark-car{ animation: floatCar 6s ease-in-out infinite; }
        @keyframes floatCar{ 0%,100%{ transform: translateY(-50%) translateX(0); } 50%{ transform: translateY(-54%) translateX(-12px); } }

        .road-dashes{
          position:absolute; left:0; right:0; bottom:30px; height:3px;
          background-image: repeating-linear-gradient(90deg, ${C.yellow}90 0 26px, transparent 26px 54px);
          animation: roadMove 0.9s linear infinite;
        }
        @keyframes roadMove{ from{ background-position-x:0; } to{ background-position-x:-54px; } }

        .driving-car{ position:absolute; bottom:12px; animation: driveAcross 8s linear infinite; }
        .driving-car svg{ display:block; animation: carHop 0.25s ease-in-out infinite alternate; filter: drop-shadow(0 6px 10px rgba(0,0,0,0.4)); }
        @keyframes driveAcross{ 0%{ left:-60px; } 100%{ left: calc(100% + 60px); } }
        @keyframes carHop{ from{ transform: translateY(0); } to{ transform: translateY(-3px); } }
      `}</style>

      {/* MOBILE APP-STYLE BOTTOM TAB BAR */}
      <div className="mobile-app-bar" style={{
        display: "none", position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 60,
        background: C.black, borderTop: `1px solid ${C.yellow}30`,
        padding: "10px 6px calc(env(safe-area-inset-bottom, 0px) + 8px)",
        justifyContent: "space-around", boxShadow: "0 -8px 24px rgba(0,0,0,0.4)",
      }}>
        {MOBILE_TABS.map(([n, icon]) => (
          <button key={n} onClick={() => scrollTo(n)}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, background: "none", border: "none", cursor: "pointer",
              padding: "4px 12px", color: active === n ? C.yellow : "#999" }}>
            {icon}
            <span style={{ fontSize: 11, fontWeight: 700 }}>{n}</span>
          </button>
        ))}
      </div>

      {/* HERO */}
      <section id="home" style={{ background: `linear-gradient(135deg, ${C.black} 0%, ${C.dark} 100%)`, padding: "80px 24px 100px", minHeight: "88vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div className="watermark-car" style={{ position: "absolute", right: -80, top: "50%", transform: "translateY(-50%)", opacity: 0.08 }}>
          <Car style={{ width: 420, height: 420, color: C.yellow }} />
        </div>

        {/* Animated road + driving car */}
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 70, overflow: "hidden" }}>
          <div className="road-dashes" />
          <div className="driving-car">
            <Car style={{ width: 44, height: 44, color: C.yellow }} />
          </div>
        </div>

        <div className="hero-grid" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 40, alignItems: "center", position: "relative", zIndex: 1 }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${C.yellow}20`, borderRadius: 50, padding: "6px 16px", marginBottom: 24, border: `1px solid ${C.yellow}50` }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: C.yellow, display: "inline-block" }} />
              <span style={{ color: C.yellow, fontSize: 13, fontWeight: 700 }}>Cars Available Near You Now</span>
            </div>
            <h1 style={{ fontSize: "clamp(40px,7vw,74px)", fontWeight: 900, color: "#fff", lineHeight: 1.08, marginBottom: 24 }}>
              Your Ride, <span style={{ color: C.yellow }}>Just a Tap Away</span>
            </h1>
            <p style={{ fontSize: 20, color: "#CFCFCF", maxWidth: 560, lineHeight: 1.7, marginBottom: 44 }}>
              Fast, safe, and affordable taxi booking. Real-time tracking, verified drivers, and instant confirmation — all in one app.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("App")}
                style={{ padding: "18px 36px", borderRadius: 12, border: "none", cursor: "pointer", fontSize: 17, fontWeight: 800,
                  background: C.yellow, color: C.black, display: "flex", alignItems: "center", gap: 8, boxShadow: `0 8px 30px ${C.yellow}40` }}>
                Book a Ride <ArrowRight style={{ width: 20, height: 20 }} />
              </button>
              <button onClick={() => scrollTo("Services")}
                style={{ padding: "18px 36px", borderRadius: 12, cursor: "pointer", fontSize: 17, fontWeight: 700,
                  background: "transparent", color: "#fff", border: `2px solid #ffffff40` }}>
                Our Services
              </button>
            </div>
            <div style={{ display: "flex", gap: 44, marginTop: 64, flexWrap: "wrap" }}>
              {[["500+", "Rides Daily"], ["100+", "Verified Drivers"], ["24/7", "Availability"], ["4.8★", "Rated"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontSize: 38, fontWeight: 900, color: "#fff" }}>{num}</div>
                  <div style={{ fontSize: 14, color: "#999", marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking mini-card (premium) */}
          <div style={{ background: T.surface, borderRadius: 24, padding: 36, boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: T.text, marginBottom: 22 }}>Quick Booking</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div onClick={() => scrollTo("Contact")} style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 16px", borderRadius: 12, border: `1.5px solid ${T.border}`, cursor: "pointer" }}>
                <MapPin style={{ width: 18, height: 18, color: C.yellowDark }} />
                <span style={{ fontSize: 14, color: T.muted }}>Enter pickup location</span>
              </div>
              <div onClick={() => scrollTo("Contact")} style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 16px", borderRadius: 12, border: `1.5px solid ${T.border}`, cursor: "pointer" }}>
                <Navigation style={{ width: 18, height: 18, color: C.yellowDark }} />
                <span style={{ fontSize: 14, color: T.muted }}>Enter drop location</span>
              </div>
              <button onClick={() => scrollTo("Contact")}
                style={{ marginTop: 6, padding: "14px", borderRadius: 12, border: `1px solid ${C.yellow}30`, cursor: "pointer", fontSize: 15, fontWeight: 800,
                  background: C.black, color: C.yellow }}>
                Find Nearby Cars
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 24px", background: T.surface }}>
        <div className="about-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <span style={{ fontSize: 13, fontWeight: 800, color: C.yellowDark, textTransform: "uppercase", letterSpacing: 2 }}>About Us</span>
            <h2 style={{ fontSize: "clamp(30px,4.5vw,48px)", fontWeight: 900, color: T.text, margin: "12px 0 20px", lineHeight: 1.2 }}>
              Built for Riders Who Value Time and Safety
            </h2>
            <p style={{ fontSize: 16, color: T.muted, lineHeight: 1.8, marginBottom: 20 }}>
              Divine Call Taxi connects you with verified, nearby drivers in seconds. No waiting, no surge surprises — just a reliable ride whenever you need one.
            </p>
            <p style={{ fontSize: 16, color: T.muted, lineHeight: 1.8, marginBottom: 32 }}>
              From daily commutes to airport drops, our fleet is available across the city, tracked live, and backed by a support team that cares.
            </p>
            {["Background-verified drivers", "Live GPS ride tracking", "Transparent, upfront fares", "24/7 customer support"].map(pt => (
              <div key={pt} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
                <CheckCircle style={{ width: 20, height: 20, color: C.yellowDark, flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 15, color: T.text }}>{pt}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[["500+", "Rides", "Every Day"], ["100+", "Drivers", "Verified"], ["15+", "Areas", "Covered"], ["4.8★", "Rating", "Average"]].map(([num, l1, l2]) => (
              <div key={l1} style={{ background: T.bg, borderRadius: 16, padding: "32px 24px", textAlign: "center", border: `1px solid ${T.border}` }}>
                <div style={{ fontSize: 36, fontWeight: 900, color: T.text }}>{num}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginTop: 4 }}>{l1}</div>
                <div style={{ fontSize: 13, color: T.muted }}>{l2}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px 24px", background: T.bg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{ fontSize: 13, fontWeight: 800, color: C.yellowDark, textTransform: "uppercase", letterSpacing: 2 }}>What We Offer</span>
            <h2 style={{ fontSize: "clamp(30px,4.5vw,48px)", fontWeight: 900, color: T.text, margin: "12px 0 16px" }}>Why Ride With Us</h2>
            <p style={{ fontSize: 16, color: T.muted, maxWidth: 500, margin: "0 auto" }}>Everything you need for a smooth, safe, and affordable ride experience.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 28 }}>
            {SERVICES.map(s => (
              <div key={s.title} style={{ padding: "36px 28px", borderRadius: 16, border: `1px solid ${T.border}`, background: T.surface, transition: "all 0.3s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "none"; }}>
                <div style={{ width: 60, height: 60, borderRadius: 14, background: `${C.yellow}25`, display: "flex", alignItems: "center", justifyContent: "center", color: C.yellowDark, marginBottom: 20 }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: T.text, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: T.muted, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 70 }}>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: T.text, marginBottom: 30, textAlign: "center" }}>How Booking Works</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 28 }}>
              {STEPS.map((p, i) => (
                <div key={p.step} style={{ background: C.black, borderRadius: 16, padding: "36px 28px", position: "relative" }}>
                  <div style={{ fontSize: 48, fontWeight: 900, color: `${C.yellow}30`, position: "absolute", top: 20, right: 20 }}>{p.step}</div>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: C.yellow, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <span style={{ fontSize: 20, fontWeight: 900, color: C.black }}>{i + 1}</span>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: "#fff", marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: "#bbb", lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APP CONNECT */}
      <section id="app" style={{ padding: "100px 24px", background: `linear-gradient(135deg, ${C.black} 0%, ${C.dark} 100%)` }}>
        <div className="hero-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: 260, height: 460, borderRadius: 36, background: "#fff", border: `8px solid ${C.dark}`, boxShadow: "0 30px 80px rgba(0,0,0,0.5)", padding: 20, display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ height: 10, width: 60, borderRadius: 6, background: "#eee", margin: "0 auto" }} />
              <div style={{ flex: 1, background: "#F5F5F5", borderRadius: 20, padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Car style={{ width: 20, height: 20, color: C.yellowDark }} />
                  <span style={{ fontSize: 13, fontWeight: 800, color: C.black }}>Divine Call Taxi</span>
                </div>
                <div style={{ background: "#fff", borderRadius: 12, padding: 12, fontSize: 12, color: "#6B6B6B" }}>📍 Pickup: Current Location</div>
                <div style={{ background: "#fff", borderRadius: 12, padding: 12, fontSize: 12, color: "#6B6B6B" }}>🎯 Drop: Enter destination</div>
                <div style={{ background: C.yellow, borderRadius: 12, padding: 12, fontSize: 13, fontWeight: 800, color: C.black, textAlign: "center", marginTop: "auto" }}>Book Now</div>
              </div>
            </div>
          </div>
          <div>
            <span style={{ fontSize: 13, fontWeight: 800, color: C.yellow, textTransform: "uppercase", letterSpacing: 2 }}>Get the App</span>
            <h2 style={{ fontSize: "clamp(30px,4.5vw,48px)", fontWeight: 900, color: "#fff", margin: "12px 0 20px", lineHeight: 1.2 }}>
              Book Faster With the Divine Call Taxi App
            </h2>
            <p style={{ fontSize: 16, color: "#bbb", lineHeight: 1.8, marginBottom: 32 }}>
              Download the app for instant booking, live driver tracking, ride history, and secure online payments — all in your pocket.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 30 }}>
              <button style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 24px", borderRadius: 10, border: `2px solid ${C.yellow}`, background: "transparent", color: "#fff", cursor: "pointer", fontWeight: 700 }}>
                <Smartphone style={{ width: 20, height: 20, color: C.yellow }} /> Download for Android
              </button>
            </div>
            <div style={{ display: "flex", gap: 30, flexWrap: "wrap" }}>
              {[["4.8★", "App Rating"], ["10K+", "Downloads"], ["100%", "Free App"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontSize: 26, fontWeight: 900, color: "#fff" }}>{num}</div>
                  <div style={{ fontSize: 13, color: "#999" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "100px 24px", background: T.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{ fontSize: 13, fontWeight: 800, color: C.yellowDark, textTransform: "uppercase", letterSpacing: 2 }}>Rider Reviews</span>
            <h2 style={{ fontSize: "clamp(30px,4.5vw,48px)", fontWeight: 900, color: T.text, margin: "12px 0" }}>What Our Riders Say</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 28 }}>
            {TESTIMONIALS.map(t => (
              <div key={t.name} style={{ background: T.bg, borderRadius: 16, padding: "36px 28px", border: `1px solid ${T.border}` }}>
                <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                  {[...Array(t.rating)].map((_, i) => <Star key={i} style={{ width: 16, height: 16, fill: C.yellow, color: C.yellow }} />)}
                </div>
                <p style={{ fontSize: 15, color: T.muted, lineHeight: 1.8, marginBottom: 24, fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: C.black, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: C.yellow, fontWeight: 800, fontSize: 16 }}>{t.name[0]}</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: T.text, fontSize: 15 }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: T.muted }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 24px", background: T.bg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{ fontSize: 13, fontWeight: 800, color: C.yellowDark, textTransform: "uppercase", letterSpacing: 2 }}>Get In Touch</span>
            <h2 style={{ fontSize: "clamp(30px,4.5vw,48px)", fontWeight: 900, color: T.text, margin: "12px 0 16px" }}>Book a Ride or Ask a Question</h2>
            <p style={{ fontSize: 16, color: T.muted, maxWidth: 500, margin: "0 auto" }}>Fill in your details and our team will confirm your ride shortly.</p>
          </div>
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            <div>
              {[
                [<Phone style={{ width: 20, height: 20 }} />, "Phone", "+91 8870743526"],
                [<Mail style={{ width: 20, height: 20 }} />, "Email", "saravananashokan543@gmail.com"],
                [<MapPin style={{ width: 20, height: 20 }} />, "Service Area", "Available across the city"],
              ].map(([icon, label, val]) => (
                <div key={String(label)} style={{ display: "flex", gap: 16, marginBottom: 28, alignItems: "flex-start" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: `${C.yellow}30`, display: "flex", alignItems: "center", justifyContent: "center", color: C.yellowDark, flexShrink: 0 }}>
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, color: T.muted, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>{String(label)}</div>
                    <div style={{ fontSize: 15, color: T.text, fontWeight: 700, marginTop: 4 }}>{String(val)}</div>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 40, padding: "28px", background: T.surface, borderRadius: 16, border: `1px solid ${T.border}` }}>
                <h4 style={{ fontWeight: 800, color: T.text, marginBottom: 8 }}>Available 24/7</h4>
                <p style={{ fontSize: 14, color: T.muted }}>Book anytime — day or night, cars are ready near you.</p>
              </div>
            </div>

            {/* PREMIUM FORM */}
            <form onSubmit={handleSubmit} style={{ background: T.surface, borderRadius: 20, padding: "40px", border: `1px solid ${T.border}`, boxShadow: "0 12px 40px rgba(0,0,0,0.06)" }}>
              {submitted && (
                <div style={{ background: "#FFF9E0", border: `1px solid ${C.yellow}`, borderRadius: 10, padding: "16px 20px", marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckCircle style={{ width: 20, height: 20, color: C.yellowDark }} />
                  <span style={{ color: "#2A2A2A", fontWeight: 700 }}>Request received! We'll confirm your ride shortly.</span>
                </div>
              )}
              {FIELDS.map(([label, field, type, ph, icon]) => (
                <div key={field} style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: T.text, marginBottom: 6 }}>{label} <span style={{ color: C.yellowDark }}>*</span></label>
                  <div style={{ position: "relative" }}>
                    <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: C.yellowDark, display: "flex" }}>{icon}</span>
                    <input required type={type} placeholder={ph} value={(form as any)[field]}
                      onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                      style={{ width: "100%", padding: "14px 16px 14px 46px", borderRadius: 12, border: `1.5px solid ${T.border}`, background: T.bg, fontSize: 15, color: T.text, boxSizing: "border-box" }} />
                  </div>
                </div>
              ))}
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: T.text, marginBottom: 6 }}>Additional Notes</label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 14, top: 16, color: C.yellowDark, display: "flex" }}><MessageCircle style={{ width: 18, height: 18 }} /></span>
                  <textarea placeholder="Any special instructions..." value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    rows={3} style={{ width: "100%", padding: "14px 16px 14px 46px", borderRadius: 12, border: `1.5px solid ${T.border}`, background: T.bg, fontSize: 15, color: T.text, resize: "vertical", boxSizing: "border-box" }} />
                </div>
              </div>
              <button type="submit"
                style={{ width: "100%", padding: "16px", borderRadius: 12, border: "none", cursor: "pointer", fontSize: 16, fontWeight: 800,
                  background: C.yellow, color: C.black, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxShadow: `0 8px 24px ${C.yellow}40` }}>
                Book a Ride <ArrowRight style={{ width: 18, height: 18 }} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: C.black, color: "#ccc", padding: "60px 24px 30px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 40, marginBottom: 50 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: C.yellow, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Car style={{ width: 18, height: 18, color: C.black }} />
                </div>
                <span style={{ fontSize: 20, fontWeight: 900, color: "#fff" }}>Divine Call Taxi</span>
              </div>
              <p style={{ fontSize: 14, color: "#999", lineHeight: 1.8 }}>Fast, safe, and affordable rides — booked in seconds.</p>
            </div>
            {[
              ["Quick Links", NAV],
              ["Contact", ["+91 8870743526", "saravananashokan543@gmail.com", "Available 24/7"]],
            ].map(([title, items]) => (
              <div key={String(title)}>
                <h4 style={{ fontWeight: 800, marginBottom: 16, color: C.yellow, fontSize: 15 }}>{String(title)}</h4>
                {(items as string[]).map(item => (
                  <div key={item} style={{ fontSize: 14, color: "#999", marginBottom: 8, cursor: "pointer" }}
                    onClick={() => { const n = NAV.find(x => x === item); if (n) scrollTo(n); }}>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid #ffffff15", paddingTop: 24, textAlign: "center", fontSize: 13, color: "#777" }}>
            © 2026 Divine Call Taxi. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
