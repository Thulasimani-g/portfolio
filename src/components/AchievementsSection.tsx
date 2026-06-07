"use client";

import { motion } from "framer-motion";
import {
  HiBriefcase,
  HiCube,
  HiCollection,
  HiHeart,
  HiGlobe,
} from "react-icons/hi";

const stats = [
  {
    icon: HiBriefcase,
    value: "4+",
    label: "Years Experience",
    desc: "Building enterprise-grade applications",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: HiCube,
    value: "50+",
    label: "Enterprise Modules Built",
    desc: "Across multiple business domains",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: HiCollection,
    value: "Multiple",
    label: "Industries Served",
    desc: "Healthcare, Logistics, Retail, Enterprise",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    icon: HiHeart,
    value: "Specialist",
    label: "Healthcare Technology",
    desc: "HIMS, Telemedicine, LIS, Medical Devices",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: HiGlobe,
    value: "Expert",
    label: "Enterprise Integration",
    desc: "Systems, Devices, APIs, Legacy Platforms",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] via-transparent to-purple-500/[0.03]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Achievements
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Trusted by
            <span className="gradient-text"> Enterprise Clients</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/60 text-base sm:text-lg leading-relaxed">
            A track record of delivering complex enterprise solutions across
            industries and geographies.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl glass border border-border-glass hover:border-primary/20 transition-all duration-500 text-center group"
            >
              <div
                className={`w-14 h-14 rounded-xl ${stat.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold mb-1">{stat.label}</div>
              <div className="text-xs text-foreground/50 leading-relaxed">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
