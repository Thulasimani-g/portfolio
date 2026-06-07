"use client";

import { motion } from "framer-motion";
import {
  HiCube,
  HiCode,
  HiCollection,
  HiServer,
  HiLightningBolt,
  HiChartBar,
  HiCog,
} from "react-icons/hi";

const focuses = [
  {
    icon: HiCube,
    title: "End-to-End Product Development",
    desc: "From concept to deployment, I build complete enterprise solutions that solve real business problems.",
  },
  {
    icon: HiCode,
    title: "Software Architecture",
    desc: "Designing scalable, maintainable architectures following SOLID principles and enterprise patterns.",
  },
  {
    icon: HiCollection,
    title: "API Development",
    desc: "Building robust RESTful APIs and third-party integrations for seamless data exchange.",
  },
  {
    icon: HiServer,
    title: "Enterprise Integrations",
    desc: "Connecting disparate systems through custom integrations, middleware, and API gateways.",
  },
  {
    icon: HiLightningBolt,
    title: "Performance Optimization",
    desc: "Optimizing application performance, database queries, and system throughput for scale.",
  },
  {
    icon: HiChartBar,
    title: "Scalable Systems",
    desc: "Architecting systems that grow with your business, handling increased loads seamlessly.",
  },
  {
    icon: HiCog,
    title: "Long-Term Maintenance",
    desc: "Providing ongoing support, updates, and improvements to keep systems running smoothly.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            About Me
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Building Enterprise
            <span className="gradient-text"> Software That Matters</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/60 text-base sm:text-lg leading-relaxed">
            I am a solution-oriented software engineer who has successfully
            delivered complex applications for healthcare organizations,
            logistics companies, retail businesses, and enterprise clients
            worldwide.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {focuses.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl glass hover:bg-surface-light transition-all duration-500 border border-border-glass hover:border-primary/20"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
