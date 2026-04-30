"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import s from "./StorySection.module.css";

const venues = [
  { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1798&auto=format&fit=crop", title: "Emerald Lawn", subtitle: "30,000 sq. ft · Up to 2,000 guests", desc: "A sprawling expanse of lush green celebration, adorned with fairy lights and grand floral architecture.", tag: "Grand Outdoor" },
  { src: "https://images.unsplash.com/photo-1606825964894-3151b142de8f?q=80&w=2070&auto=format&fit=crop", title: "Sapphire Banquet", subtitle: "9,000 sq. ft · Up to 400 guests", desc: "A versatile indoor venue draped in deep sapphire and gold — designed for unforgettable events.", tag: "Elegant Indoor" },
  { src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop", title: "Maharaja Suite", subtitle: "Heritage Luxury Accommodation", desc: "Crafted with sophistication and old Lucknawi artistry — a seamless blend of heritage and modern comfort.", tag: "Accommodations" },
];

function StoryCard({ item }: { item: typeof venues[0] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`story-image ${s.card}`}
    >
      <img src={item.src} alt={item.title} />
      <div className={s.cardOverlay} />
      <span className={s.cardTag}>{item.tag}</span>
      <div className={s.cardShimmer} />
      <div className={s.cardBody}>
        <h4 className={s.cardTitle}>{item.title}</h4>
        <p className={s.cardSub}>{item.subtitle}</p>
        <p className={s.cardDesc}>{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headingRef, { once: true, margin: "-20%" });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: textRef.current,
        pinSpacing: false,
      });
      const images = gsap.utils.toArray<HTMLElement>(".story-image");
      images.forEach((img) => {
        gsap.fromTo(img,
          { opacity: 0, scale: 0.88, y: 80 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out",
            scrollTrigger: { trigger: img, start: "top 85%", end: "top 30%", scrub: 1.5 }
          }
        );
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="story" className={s.section}>
      {/* Intro heading */}
      <div ref={headingRef} className={s.intro}>
        <motion.div className={s.sectionLabel}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className={s.sectionLabelLine} />
          <span className={s.sectionLabelText}>Our Legacy</span>
        </motion.div>
        <div className={s.headingWrap}>
          <motion.h2 className={s.heading}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            A Legacy of<br />
            <span className={s.headingItalic}>Nawabi Grandeur.</span>
          </motion.h2>
        </div>
      </div>

      {/* Two-column scroll */}
      <div ref={containerRef} className={s.columns}>
        {/* Sticky text */}
        <div ref={textRef} className={s.textPanel}>
          <div className={s.textInner}>
            <p className={s.bodyText}>
              Rooted in the heart of Vrindavan Yojana, The Ornate reimagines the celebrated heritage of Lucknow. We blend the meticulous artistry of traditional havelis with the unmatched grace of contemporary luxury.
            </p>
            <p className={s.bodyText}>
              From intimate gatherings to grand weddings hosting 2,000 guests, every corner of our 30,000 sq. ft. estate is designed to tell a story worth remembering.
            </p>
            <a href="#venues" className={s.textLink}>
              Explore All Venues
              <span className={s.textLinkArrow}>→</span>
            </a>
          </div>
        </div>

        {/* Scrolling images */}
        <div className={s.imageColumn}>
          {venues.map((item, i) => <StoryCard key={i} item={item} />)}
          <div className={s.spacer} />
        </div>
      </div>
    </section>
  );
}
