"use client";

import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";

const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    role: "CIO, Healthcare Organization",
    content:
      "Thulasimani delivered one of the most comprehensive hospital management systems I have ever seen. His understanding of healthcare workflows, laboratory integrations, and compliance requirements is outstanding. The system handles 500+ daily patient visits seamlessly.",
  },
  {
    name: "Michael Chen",
    role: "CTO, US Telemedicine Startup",
    content:
      "Working with Thulasimani on our telemedicine platform was a game-changer. He integrated Twilio video, payment gateways, and our EHR system flawlessly. His ability to work across time zones and communicate effectively made the entire process smooth.",
  },
  {
    name: "Priya Sharma",
    role: "Director of Operations, Logistics Company",
    content:
      "The transport management system he built for us transformed our operations. Fleet tracking, expense management, and route optimization — everything works perfectly. Our operational efficiency improved by 40% within the first quarter.",
  },
  {
    name: "Ahmed Al-Rashid",
    role: "VP Engineering, Enterprise SaaS",
    content:
      "Thulasimani is the kind of engineer every CTO wants on their team. He doesn't just write code; he thinks about architecture, scalability, and long-term maintainability. The ERP modules he built for us are still running flawlessly after two years.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
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
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
            What Clients
            <span className="gradient-text"> Say</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl glass border border-border-glass hover:border-primary/20 transition-all duration-500"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <HiStar key={j} className="w-4 h-4 text-accent" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-6 italic">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-foreground/50">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
