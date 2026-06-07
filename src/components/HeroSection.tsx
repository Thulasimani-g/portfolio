"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiBriefcase,
  HiCube,
  HiHeart,
  HiCode,
  HiGlobe,
} from "react-icons/hi";

const highlights = [
  { icon: HiBriefcase, label: "4+ Years Experience" },
  { icon: HiCube, label: "50+ Enterprise Modules Delivered" },
  { icon: HiHeart, label: "Healthcare Domain Specialist" },
  { icon: HiCode, label: "Full Stack Development Expert" },
  { icon: HiGlobe, label: "Enterprise Integration Specialist" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Available for Enterprise Projects
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
              >
                Thulasimani{" "}
                <span className="gradient-text">Ganesan</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-xl sm:text-2xl font-semibold text-foreground/80"
              >
                Senior Full Stack Developer{" "}
                <span className="text-foreground/50">|</span>{" "}
                <span className="text-primary">Enterprise Application Specialist</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 text-base sm:text-lg text-foreground/60 leading-relaxed max-w-xl"
              >
                Building scalable Healthcare, ERP, CRM, Telemedicine, Logistics,
                HRMS, and Retail solutions with modern technologies and
                enterprise-grade integrations.
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-foreground/60 leading-relaxed max-w-xl"
            >
              I specialize in designing and developing enterprise applications,
              healthcare platforms, SaaS products, and business automation
              systems that help organizations streamline operations, improve
              efficiency, and scale digitally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40"
              >
                View Portfolio
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass font-semibold hover:bg-surface-light transition-all duration-300 border border-border-glass"
              >
                Hire Me
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-primary hover:text-primary-dark transition-all duration-300"
              >
                Contact Me
                <HiArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="pt-4"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-foreground/40 mb-4">
                Professional Highlights
              </p>
              <div className="flex flex-wrap gap-3">
                {highlights.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-xs font-medium text-foreground/70"
                  >
                    <item.icon className="w-3.5 h-3.5 text-primary" />
                    {item.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 via-purple-500/20 to-accent/20 animate-pulse-glow" />
              <div className="absolute inset-4 w-72 h-72 rounded-full bg-gradient-to-br from-primary/30 via-purple-500/30 to-accent/30 animate-pulse-glow" style={{ animationDelay: "1s" }} />
              <div className="absolute inset-8 w-64 h-64 rounded-full bg-gradient-to-br from-primary via-purple-500 to-accent flex items-center justify-center shadow-2xl overflow-hidden ring-4 ring-white/20">
                <Image
                  src="/Profile.png"
                  alt="Thulasimani Ganesan"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl glass flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-accent">4+</span>
                  <span className="text-[10px] font-medium text-foreground/60">Years</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -left-6 w-28 h-20 rounded-2xl glass flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-primary">50+</span>
                  <span className="text-[10px] font-medium text-foreground/60">Modules</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
