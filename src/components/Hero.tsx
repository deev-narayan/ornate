"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import s from "./Hero.module.css";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imageY     = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const contentY   = useTransform(scrollYProgress, [0, 0.6], ["0%", "20%"]);
  const contentOp  = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const overlayOp  = useTransform(scrollYProgress, [0, 0.5], [0.5, 0.85]);
  const springY    = useSpring(imageY, { stiffness: 60, damping: 20 });

  return (
    <section ref={ref} className={s.hero}>
      {/* Parallax image */}
      <motion.div style={{ y: springY, scale: imageScale }} className={s.heroBg}>
        <img src="https://images.unsplash.com/photo-1542314831-c6a4d14d881f?q=80&w=2070&auto=format&fit=crop" alt="The Ornate" />
      </motion.div>

      {/* Dark overlay */}
      <motion.div style={{ opacity: overlayOp }} className={s.heroOverlay} />

      {/* Bottom gradient */}
      <div className={s.heroGradient} />

      {/* Content */}
      <motion.div style={{ y: contentY, opacity: contentOp }} className={s.heroContent}>
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={s.heroTag}
        >
          <span className={s.heroTagLine} />
          <span className={s.heroTagText}>Vrindavan Yojana, Lucknow</span>
          <span className={s.heroTagLine} />
        </motion.div>

        <div className={s.heroLineWrap}>
          <motion.span className={s.heroH1}
            initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Where Every
          </motion.span>
        </div>
        <div className={s.heroLineWrap}>
          <motion.span className={`${s.heroH1} ${s.heroH1Gold}`}
            initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Celebration
          </motion.span>
        </div>
        <div className={s.heroLineWrap}>
          <motion.span className={s.heroH1}
            initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Finds Its Home.
          </motion.span>
        </div>

        <motion.p className={s.heroSub}
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
        >
          A legacy of Nawabi grandeur — 7 grand venues, Maharaja suites, fine dining, and an unforgettable experience.
        </motion.p>

        <motion.div className={s.heroCtas}
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
        >
          <a href="#venues" className={s.btnPrimary}>Explore Venues</a>
          <a href="#story" className={s.btnOutline}>Our Story</a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div className={s.scrollIndicator}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className={s.scrollLabel}>Scroll</span>
        <div className={s.scrollLine}>
          <motion.div className={s.scrollLineInner}
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
