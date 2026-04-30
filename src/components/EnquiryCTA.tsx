"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import s from "./EnquiryCTA.module.css";

export default function EnquiryCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section ref={ref} className={s.section}>
      <div className={s.bgWord}>CELEBRATE</div>
      <div className={s.inner}>
        <div className={s.card}>
          <motion.div className={s.label}
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className={s.labelLine} />
            <span className={s.labelText}>Plan Your Event</span>
            <span className={s.labelLine} />
          </motion.div>

          <div className={s.headingWrap}>
            <motion.h2 className={s.heading}
              initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              Your Perfect Day<br />
              <span className={s.headingItalic}>Awaits You.</span>
            </motion.h2>
          </div>

          <motion.p className={s.desc}
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Whether it's a grand wedding, a corporate gala, or an intimate celebration — our team is available 24/7 to craft the perfect experience.
          </motion.p>

          <motion.div className={s.ctas}
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <a href="tel:+919151209000" className={s.btnPrimary}>Call Now</a>
            <a href="https://wa.me/919151209000" target="_blank" rel="noopener noreferrer" className={s.btnOutline}>WhatsApp Us</a>
          </motion.div>

          <motion.div className={s.contactBar}
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span>info@theornate.in</span>
            <span className={s.contactDot}>·</span>
            <span>+91 9151209000</span>
            <span className={s.contactDot}>·</span>
            <span>Available 24 / 7</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
