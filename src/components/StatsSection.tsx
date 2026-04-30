"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import s from "./StatsSection.module.css";

const stats = [
  { number: "30,000", unit: "sq. ft",  label: "Total Event Space" },
  { number: "2,000",  unit: "guests",  label: "Maximum Capacity" },
  { number: "7",      unit: "venues",  label: "Distinct Spaces" },
  { number: "15+",    unit: "years",   label: "Of Excellence" },
];

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section className={s.section}>
      <div className={s.inner} ref={ref}>
        <motion.p className={s.sectionLabel}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          The Scale of Excellence
        </motion.p>
        <div className={s.grid}>
          {stats.map((stat, i) => (
            <motion.div key={i} className={s.statItem}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className={s.statNumber}>{stat.number}</p>
              <p className={s.statUnit}>{stat.unit}</p>
              <div className={s.statDivider} />
              <p className={s.statLabel}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
