"use client";

import { motion } from "framer-motion";
import {
  HiMail,
  HiCode,
  HiHeart,
  HiCube,
  HiUserGroup,
  HiVideoCamera,
  HiLink,
  HiCog,
  HiArrowRight,
} from "react-icons/hi";

const services = [
  { icon: HiCode, label: "Custom Software Development" },
  { icon: HiHeart, label: "Healthcare Solutions" },
  { icon: HiCube, label: "ERP Development" },
  { icon: HiUserGroup, label: "CRM Development" },
  { icon: HiCog, label: "SaaS Applications" },
  { icon: HiVideoCamera, label: "Telemedicine Platforms" },
  { icon: HiLink, label: "API Integrations" },
  { icon: HiCog, label: "Enterprise Automation" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-purple-500/[0.03]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Contact
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Let&apos;s Build Something
                <span className="gradient-text"> Amazing Together</span>
              </h2>
              <p className="mt-4 text-foreground/60 text-base sm:text-lg leading-relaxed">
                Have an enterprise project in mind? Let&apos;s discuss how I can
                help you build scalable, robust, and future-proof software
                solutions.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/50">
                Services I Offer
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {services.map((svc, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-3 rounded-xl glass border border-border-glass text-sm font-medium"
                  >
                    <svc.icon className="w-4 h-4 text-primary shrink-0" />
                    <span>{svc.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:thulasimani.ganesan@example.com"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25"
              >
                <HiMail className="w-5 h-5" />
                Send an Email
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl glass border border-border-glass"
          >
            <h3 className="text-xl font-semibold mb-6">
              Get In Touch
            </h3>
            <form
              action="mailto:thulasimani.ganesan@example.com"
              method="POST"
              encType="text/plain"
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground/70 mb-1.5"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border-glass text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground/70 mb-1.5"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border-glass text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground/70 mb-1.5"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border-glass text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground/70 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border-glass text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm resize-none"
                  placeholder="Tell me about your project"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25"
              >
                <HiMail className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
