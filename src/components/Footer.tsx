import Link from "next/link";
import s from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className={s.watermark} aria-hidden>THE ORNATE</div>
      <div className={s.inner}>
        <div className={s.grid}>
          {/* Brand */}
          <div className={s.brand}>
            <span className={s.brandName}>The Ornate</span>
            <p className={s.brandDesc}>
              Where old Lucknawi nawabi grandeur meets modern celebration. A luxury hotel, banquet, salon, restaurant, and event venue in the heart of Vrindavan Yojana.
            </p>
            <address className={s.brandAddress}>
              Sec 6A, Near Akash Enclave,<br />
              Vrindavan Yojana,<br />
              Lucknow, Uttar Pradesh 226029
            </address>
          </div>

          {/* Venues */}
          <div className={s.col}>
            <span className={s.colTitle}>Our Venues</span>
            <ul className={s.colList}>
              {["Emerald Lawn","Jade Lawn","Sapphire Banquet","Platinum Ballroom","Opal Ballroom"].map(item => (
                <li key={item}><Link href="/banquets" className={s.colLink}>{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={s.col}>
            <span className={s.colTitle}>Services</span>
            <ul className={s.colList}>
              {[
                { label: "Hotel & Suites",       href: "/accommodations" },
                { label: "Salon & Spa",           href: "/salon" },
                { label: "AMRKH Restaurant",      href: "/restaurant" },
                { label: "Event & Photography",   href: "/events" },
              ].map(item => (
                <li key={item.label}><Link href={item.href} className={s.colLink}>{item.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={s.col}>
            <span className={s.colTitle}>Contact</span>
            <ul className={s.colList}>
              <li><a href="mailto:info@theornate.in" className={s.colLink}>info@theornate.in</a></li>
              <li><a href="tel:+919151209000" className={s.colLink}>+91 9151209000</a></li>
              <li><a href="tel:+919219904134" className={s.colLink}>+91 9219904134</a></li>
              <li><a href="tel:+919236392897" className={s.colLink}>+91 9236392897</a></li>
            </ul>
            <div className={s.socialRow}>
              {[
                { label: "Instagram", href: "https://www.instagram.com/ornatelucknow" },
                { label: "Facebook",  href: "https://www.facebook.com/share/15ZDMNAkb9/" },
                { label: "YouTube",   href: "https://www.youtube.com/@OrnateProductionHouse" },
              ].map(s2 => (
                <a key={s2.label} href={s2.href} target="_blank" rel="noopener noreferrer" className={s.socialLink}>
                  {s2.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={s.bottomBar}>
          <p>© {year} The Ornate Lucknow. All Rights Reserved.</p>
          <p className={s.credit}>
            Crafted by <span className={s.creditHighlight}>Antigravity</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
