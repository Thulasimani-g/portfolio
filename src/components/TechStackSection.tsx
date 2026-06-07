"use client";

import { motion } from "framer-motion";
import {
  HiCode,
  HiServer,
  HiDatabase,
  HiPhone,
  HiCloud,
} from "react-icons/hi";

const categories = [
  {
    icon: HiCode,
    title: "Frontend",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    items: [
      "Angular",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    icon: HiServer,
    title: "Backend",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    items: ["NestJS", "Node.js", "Laravel", "PHP", "REST APIs"],
  },
  {
    icon: HiDatabase,
    title: "Database",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    items: ["MySQL", "PostgreSQL", "SQL Server"],
  },
  {
    icon: HiPhone,
    title: "Communication",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    items: [
      "Twilio Video",
      "Twilio Voice",
      "WhatsApp APIs",
      "SMS Gateways",
      "Email Services",
    ],
  },
  {
    icon: HiCloud,
    title: "Cloud & DevOps",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    items: ["Linux", "Docker", "Nginx", "Cloudflare", "CI/CD"],
  },
];

export default function TechStackSection() {
  return (
    <section id="techstack" className="relative py-24 lg:py-32 overflow-hidden">
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
            Technology Stack
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Enterprise-Grade
            <span className="gradient-text"> Tech Arsenal</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/60 text-base sm:text-lg leading-relaxed">
            Modern technologies and frameworks powering enterprise-scale
            applications across multiple domains.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl glass border border-border-glass hover:border-primary/20 transition-all duration-500"
            >
              <div
                className={`w-12 h-12 rounded-xl ${cat.bg} flex items-center justify-center mb-4`}
              >
                <cat.icon className={`w-6 h-6 ${cat.color}`} />
              </div>
              <h3 className="text-base font-semibold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-surface text-foreground/70 border border-border-glass"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
