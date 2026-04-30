"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import s from "./VenueShowcase.module.css";

const venues = [
  { title: "Emerald + Lawn",    sqft: "30,000", pax: "2,000", tag: "Emerald",  color: "#1E6B4F" },
  { title: "Jade – Jasper Lawn",sqft: "21,000", pax: "650",   tag: "Jade",     color: "#2A7A5A" },
  { title: "Sapphire Banquet",  sqft: "9,000",  pax: "400",   tag: "Sapphire", color: "#1B3A6B" },
  { title: "Sky + Pool Deck",   sqft: "6,000",  pax: "250",   tag: "Sky",      color: "#1A4A6B" },
  { title: "Platinum Ballroom", sqft: "5,000",  pax: "300",   tag: "Platinum", color: "#5A6A7A" },
  { title: "Opal Ballroom",     sqft: "4,000",  pax: "200",   tag: "Opal",     color: "#8A6A6A" },
];

const images = [
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800",
  "https://images.unsplash.com/photo-1606825964894-3151b142de8f?q=80&w=800",
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800",
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
];

function VenueCard({ venue, image, index }: { venue: typeof venues[0]; image: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div ref={ref} className={s.card}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={s.cardImageWrap}>
        <img src={image} alt={venue.title} />
        <div className={s.cardImageOverlay} />
      </div>
      <span className={s.cardGemTag} style={{ backgroundColor: venue.color + "CC" }}>
        {venue.tag}
      </span>
      <div className={s.cardBody}>
        <h3 className={s.cardTitle}>{venue.title}</h3>
        <div className={s.cardStats}>
          <div className={s.cardStat}>
            <p className={s.cardStatLabel}>Area</p>
            <p className={s.cardStatValue}>{venue.sqft}<span className={s.cardStatUnit}> sq.ft</span></p>
          </div>
          <div className={s.cardDivider} />
          <div className={s.cardStat}>
            <p className={s.cardStatLabel}>Capacity</p>
            <p className={s.cardStatValue}>{venue.pax}<span className={s.cardStatUnit}> guests</span></p>
          </div>
        </div>
        <div className={s.cardCta}>
          <span>View Details</span>
          <span className={s.cardCtaArrow}>→</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function VenueShowcase() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-15%" });

  return (
    <section id="venues" className={s.section}>
      <div className={s.inner}>
        <div ref={titleRef} className={s.head}>
          <motion.div className={s.label}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className={s.labelLine} />
            <span className={s.labelText}>7 Grand Spaces</span>
          </motion.div>
          <div className={s.titleRow}>
            <div className={s.headingWrap}>
              <motion.h2 className={s.heading}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                Venues of<br /><span className={s.headingItalic}>Distinction.</span>
              </motion.h2>
            </div>
            <motion.p className={s.headingDesc}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              From sprawling outdoor lawns to glittering ballrooms — each space carries its own royal character, named after the gemstones they reflect.
            </motion.p>
          </div>
        </div>

        <div className={s.grid}>
          {venues.map((v, i) => <VenueCard key={i} venue={v} image={images[i]} index={i} />)}
        </div>
      </div>
    </section>
  );
}
