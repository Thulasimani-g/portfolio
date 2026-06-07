"use client";

import { motion } from "framer-motion";
import {
  HiServer,
  HiChip,
  HiScale,
  HiDocumentText,
  HiCreditCard,
  HiPhone,
  HiMail,
  HiChat,
  HiGlobe,
  HiHeart,
  HiLink,
  HiCollection,
} from "react-icons/hi";

const integrations = [
  { icon: HiServer, label: "Laboratory Machine Integration (LIS)", desc: "Direct integration with lab analyzers and diagnostic equipment for automated result capture." },
  { icon: HiChip, label: "Serial Port Communication", desc: "Hardware-level serial communication for medical devices and industrial equipment." },
  { icon: HiScale, label: "Weighing Machine Integration", desc: "Automated weight capture from digital scales via serial and USB interfaces." },
  { icon: HiDocumentText, label: "E-Way Bill Integration", desc: "Automated e-way bill generation and management for logistics compliance." },
  { icon: HiDocumentText, label: "E-Invoice Integration", desc: "GST-compliant electronic invoice generation with IRN portal integration." },
  { icon: HiCreditCard, label: "Payment Gateway Integration", desc: "Secure payment processing with major gateways including Razorpay, Stripe, and more." },
  { icon: HiPhone, label: "Twilio Voice & Video", desc: "Real-time voice and video communication for telemedicine and remote consultation." },
  { icon: HiChat, label: "WhatsApp Integration", desc: "Business messaging automation via WhatsApp Business API for notifications and support." },
  { icon: HiMail, label: "SMS Gateway", desc: "Bulk SMS integration for transactional alerts, OTPs, and campaign messaging." },
  { icon: HiMail, label: "Email Automation", desc: "Automated email workflows using SMTP, SendGrid, and SES for transactional and marketing emails." },
  { icon: HiHeart, label: "Healthcare APIs", desc: "Integration with EHR, HL7, FHIR, and practice management systems." },
  { icon: HiGlobe, label: "Third-Party Enterprise APIs", desc: "Custom API integrations with ERP, CRM, and legacy enterprise systems." },
];

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-purple-500/[0.02] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Enterprise Integrations
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Seamless System
            <span className="gradient-text"> Connectivity</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/60 text-base sm:text-lg leading-relaxed">
            Proven expertise in integrating diverse systems, devices, and
            APIs to create unified enterprise ecosystems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group p-6 rounded-2xl glass border border-border-glass hover:border-primary/20 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold leading-tight">
                  {item.label}
                </h3>
              </div>
              <p className="text-xs text-foreground/60 leading-relaxed pl-14">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
