"use client";

import { motion } from "framer-motion";
import {
  HiCode,
  HiCube,
  HiHeart,
  HiLink,
  HiChartBar,
  HiCheckCircle,
  HiSupport,
  HiShieldCheck,
} from "react-icons/hi";

const reasons = [
  {
    icon: HiCode,
    title: "Full Stack Development Expertise",
    desc: "Proficient across the entire stack — Angular, React, Next.js, NestJS, Node.js, Laravel, and multiple databases.",
  },
  {
    icon: HiCube,
    title: "Enterprise Application Experience",
    desc: "Deep experience building ERP, CRM, HRMS, Logistics, and Retail systems used by hundreds of users daily.",
  },
  {
    icon: HiHeart,
    title: "Healthcare Domain Knowledge",
    desc: "Specialized in HIMS, Telemedicine, LIS, and medical device integrations with regulatory compliance.",
  },
  {
    icon: HiLink,
    title: "Complex Integration Experience",
    desc: "Proven ability to connect disparate systems — lab machines, payment gateways, telecom APIs, and legacy platforms.",
  },
  {
    icon: HiChartBar,
    title: "Scalable Architecture Design",
    desc: "Design systems that scale from hundreds to thousands of concurrent users without compromising performance.",
  },
  {
    icon: HiCheckCircle,
    title: "Clean Code & Best Practices",
    desc: "Follow SOLID principles, design patterns, testing, and code review processes for maintainable codebases.",
  },
  {
    icon: HiSupport,
    title: "Long-Term Product Support",
    desc: "Provide ongoing maintenance, feature enhancements, and production support for deployed applications.",
  },
  {
    icon: HiShieldCheck,
    title: "Reliability & Communication",
    desc: "Transparent communication, timely deliveries, and a commitment to quality that enterprise clients trust.",
  },
];

export default function WhyHireMeSection() {
  return (
    <section id="why-hire-me" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-primary/[0.02] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Why Hire Me
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Partner with a
            <span className="gradient-text"> Trusted Engineer</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/60 text-base sm:text-lg leading-relaxed">
            Here is what sets me apart as your enterprise development partner.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-6 rounded-2xl glass border border-border-glass hover:border-primary/20 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 text-base"
          >
            Let&apos;s Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
}
