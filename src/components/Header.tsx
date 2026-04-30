"use client";
import { useState, useEffect, useRef, MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { X, Compass, Sparkles, Map, Coffee, Camera, BellRing, BedDouble, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import s from "./Header.module.css";

const ZONES = [
  { id: "accommodations", href: "/accommodations", index: 1, title: "Maharaja Suites",   subtitle: "Hotel & Accommodations",  icon: BedDouble, wide: false },
  { id: "banquets",       href: "/banquets",       index: 2, title: "Banquets & Lawns",  subtitle: "7 Grand Venues",          icon: Map,       wide: true  },
  { id: "restaurant",     href: "/restaurant",     index: 3, title: "AMRKH",             subtitle: "Fine Dining",             icon: Coffee,    wide: false },
  { id: "events",         href: "/events",         index: 4, title: "Event Curation",    subtitle: "Photography & Decor",     icon: Camera,    wide: true  },
  { id: "salon",          href: "/salon",          index: 5, title: "Salon & Spa",       subtitle: "Wellness Center",         icon: Sparkles,  wide: true  },
  { id: "contact",        href: "/contact",        index: 6, title: "The Front Desk",    subtitle: "Contact & Enquiries",     icon: BellRing,  full: true  },
] as const;

function LobbyZone({ zone, hovered, setHovered, onNavigate }: {
  zone: typeof ZONES[number];
  hovered: string | null;
  setHovered: (id: string | null) => void;
  onNavigate: (href: string) => void;
}) {
  const tileRef = useRef<HTMLDivElement>(null);
  const isHovered = hovered === zone.id;
  const isDimmed  = hovered !== null && hovered !== zone.id;
  const isWide    = "wide" in zone && zone.wide;
  const isFull    = "full" in zone && zone.full;
  const Icon = zone.icon;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!tileRef.current || !isHovered) return;
    const rect = tileRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
    tileRef.current.style.transform = `translateZ(70px) translateY(-10px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
  };

  const handleMouseLeave = () => {
    setHovered(null);
    if (tileRef.current) tileRef.current.style.transform = "";
  };

  const zoneClass = [
    s.zone,
    isFull ? s.zoneFull : isWide ? s.zoneWide : "",
    isHovered ? s.zoneHovered : isDimmed ? s.zoneDimmed : "",
  ].join(" ");

  return (
    <div ref={tileRef} onClick={() => onNavigate(zone.href)}
      onMouseEnter={() => setHovered(zone.id)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={zoneClass}
    >
      {/* Corner dots */}
      <div className={`${s.cornerDot} ${s.cornerTL} ${isHovered ? s.cornerDotActive : ""}`} />
      <div className={`${s.cornerDot} ${s.cornerTR} ${isHovered ? s.cornerDotActive : ""}`} />
      <div className={`${s.cornerDot} ${s.cornerBL} ${isHovered ? s.cornerDotActive : ""}`} />
      <div className={`${s.cornerDot} ${s.cornerBR} ${isHovered ? s.cornerDotActive : ""}`} />

      <div className={isWide || isFull ? `${s.zoneInner} ${s.zoneInnerWide}` : s.zoneInner}>
        <div className={isWide || isFull ? `${s.zoneTop} ${s.zoneTopWide}` : s.zoneTop}>
          <div className={s.zoneIcon}>
            <Icon size={isWide || isFull ? 44 : 52} strokeWidth={0.8}
              className={isHovered ? s.zoneIconHovered : ""} />
            <div className={`${s.zoneIconGlow} ${isHovered ? s.zoneIconGlowActive : ""}`} />
          </div>
          {!isWide && !isFull && (
            <span className={s.zoneNumber}>0{zone.index}</span>
          )}
        </div>

        <div className={isWide || isFull ? `${s.zoneText} ${s.zoneTextWide}` : s.zoneText}>
          <h3 className={`${s.zoneTitle} ${isHovered ? s.zoneTitleHovered : ""}`}>{zone.title}</h3>
          <div className={`${s.zoneSubtitle} ${isWide || isFull ? s.zoneSubtitleWide : ""} ${isHovered ? s.zoneSubtitleHovered : ""}`}>
            <span>{zone.subtitle}</span>
            <div className={`${s.zoneSubtitleLine} ${isHovered ? s.zoneSubtitleLineActive : ""}`} />
          </div>
        </div>
      </div>

      <div className={`${s.zoneGlow} ${isHovered ? s.zoneGlowActive : ""}`} />
    </div>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [hovered,    setHovered]    = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavigate = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => router.push(href), 500);
  };

  return (
    <>
      <header className={`${s.header} ${isScrolled ? s.headerScrolled : ""}`}>
        <div className={s.nav} style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 1.5rem" }}>
          <Link href="/" className={s.logo}>The Ornate</Link>
          <div className={s.navRight}>
            <Link href="/" className={s.homeLink}><Home size={16} strokeWidth={1.5} /></Link>
            <button onClick={() => setMenuOpen(true)} className={s.menuBtn}>
              <Compass size={16} className={s.menuBtnIcon} />
              <span className={s.menuBtnLabel}>Directory</span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div key="menu"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={s.menuOverlay}
          >
            <div className={s.menuTopBar}>
              <div className={s.menuTopBarLeft}>
                <Compass size={20} color="var(--gold)" strokeWidth={1} />
                <span className={s.menuTopBarText}>
                  The Ornate <span className={s.menuTopBarDot}>·</span> Select Destination
                </span>
              </div>
              <button onClick={() => setMenuOpen(false)} className={s.closeBtn}>
                <span className={s.closeBtnText}>Close</span>
                <X size={28} strokeWidth={1} />
              </button>
            </div>

            <div className={s.menuBody}>
              <div className={s.zoneGrid}>
                {ZONES.map(zone => (
                  <LobbyZone key={zone.id} zone={zone}
                    hovered={hovered} setHovered={setHovered}
                    onNavigate={handleNavigate} />
                ))}
              </div>
            </div>

            <div className={s.menuDots}>
              {[0,1,2].map(i => <div key={i} className={s.menuDot} />)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
