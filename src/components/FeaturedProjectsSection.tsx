"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiChevronRight,
  HiExternalLink,
  HiCheck,
  HiDeviceTablet,
  HiVideoCamera,
  HiCube,
  HiUsers,
  HiTruck,
  HiOfficeBuilding,
  HiShoppingCart,
  HiClipboardList,
} from "react-icons/hi";

const projects = [
  {
    id: "hims",
    icon: HiDeviceTablet,
    title: "Enterprise Hospital Information Management System (HIMS)",
    desc: "A comprehensive hospital management platform covering complete patient lifecycle and hospital operations.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    modules: [
      "OP Management",
      "IP Management",
      "Daycare Management",
      "Dialysis Management",
      "IVF Module",
      "Pharmacy Management",
      "Inventory Management",
      "Laboratory Information System (LIS)",
      "Radiology Module",
      "Doctor Share Management",
      "Room & Bed Management",
      "Billing & Invoicing",
      "Patient Registration",
      "Discharge Summary",
      "Reports & Analytics",
    ],
    integrations: ["Laboratory Machines", "Medical Devices", "Healthcare APIs"],
  },
  {
    id: "telemedicine",
    icon: HiVideoCamera,
    title: "US Telemedicine Platform",
    desc: "A large-scale virtual healthcare ecosystem connecting doctors and patients remotely.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    features: [
      "Online Consultation",
      "Video Consultation",
      "Audio Calling",
      "Browser-to-Phone Calling",
      "Real-Time Chat",
      "Appointment Booking",
      "Patient Verification",
      "CharmHealth Integration",
      "Payment Gateway",
      "SMS Notifications",
      "Email Notifications",
      "WhatsApp Notifications",
      "Multi-Timezone Scheduling",
      "Doctor Dashboard",
      "Patient Dashboard",
    ],
  },
  {
    id: "erp",
    icon: HiCube,
    title: "Enterprise ERP System",
    desc: "End-to-end enterprise resource planning solution for streamlined business operations.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    modules: [
      "Purchase",
      "Sales",
      "Inventory",
      "Warehouse",
      "Finance",
      "Reporting",
      "Analytics",
      "User Roles",
      "Audit Logs",
    ],
  },
  {
    id: "crm",
    icon: HiUsers,
    title: "CRM Platform",
    desc: "Comprehensive customer relationship management with workflow automation.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    features: [
      "Lead Management",
      "Customer Tracking",
      "Sales Pipeline",
      "Follow-Up Management",
      "Workflow Automation",
      "Reporting Dashboard",
    ],
  },
  {
    id: "tms",
    icon: HiTruck,
    title: "Transport Management System",
    desc: "Complete fleet and logistics management platform for transportation companies.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    features: [
      "Vehicle Management",
      "Fleet Tracking",
      "Route Management",
      "Driver Accounts",
      "Expense Tracking",
      "Revenue Analysis",
      "Vehicle Cost Management",
      "Operational Reports",
    ],
  },
  {
    id: "hrms",
    icon: HiOfficeBuilding,
    title: "HR Management System",
    desc: "Human resource management platform covering the complete employee lifecycle.",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    features: [
      "Employee Management",
      "Attendance Tracking",
      "Payroll Processing",
      "Leave Management",
      "Shift Management",
      "Recruitment Workflow",
      "Performance Monitoring",
    ],
  },
  {
    id: "pos",
    icon: HiShoppingCart,
    title: "Retail POS Solutions",
    desc: "Point of sale systems for Restaurant, Textile, and Supermarket industries.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    industries: ["Restaurant POS", "Textile POS", "Supermarket POS"],
    features: [
      "Billing",
      "Inventory",
      "Purchase Management",
      "GST Reports",
      "Customer Management",
      "Sales Analytics",
    ],
  },
  {
    id: "vet",
    icon: HiClipboardList,
    title: "Veterinary Appointment System",
    desc: "Appointment and patient management platform for veterinary clinics.",
    color: "text-green-400",
    bg: "bg-green-400/10",
    features: [
      "Appointment Scheduling",
      "Patient Records",
      "Treatment Tracking",
      "Billing",
      "Notifications",
    ],
  },
];

export default function FeaturedProjectsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] via-transparent to-purple-500/[0.02]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Featured Projects
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Enterprise Solutions
            <span className="gradient-text"> Delivered</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/60 text-base sm:text-lg leading-relaxed">
            50+ enterprise modules built across healthcare, logistics, retail,
            and business automation domains.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <button
                onClick={() =>
                  setActiveId(activeId === project.id ? null : project.id)
                }
                className="w-full text-left group"
              >
                <div
                  className={`p-6 rounded-2xl glass border border-border-glass hover:border-primary/20 transition-all duration-500 ${
                    activeId === project.id ? "border-primary/30" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl ${project.bg} flex items-center justify-center shrink-0`}
                      >
                        <project.icon
                          className={`w-6 h-6 ${project.color}`}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm text-foreground/60">
                          {project.desc}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: activeId === project.id ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 mt-2"
                    >
                      <HiChevronRight className="w-5 h-5 text-foreground/40" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {activeId === project.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 border-t border-border-glass mt-6">
                          <div className="grid sm:grid-cols-2 gap-6">
                            {"modules" in project && project.modules && (
                              <div>
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                                  Modules
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {(project as any).modules.map(
                                    (m: string, j: number) => (
                                      <span
                                        key={j}
                                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium bg-surface text-foreground/70 border border-border-glass"
                                      >
                                        <HiCheck className="w-3 h-3 text-primary" />
                                        {m}
                                      </span>
                                    )
                                  )}
                                </div>
                              </div>
                            )}
                            {"features" in project && project.features && (
                              <div>
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                                  Features
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {(project as any).features.map(
                                    (f: string, j: number) => (
                                      <span
                                        key={j}
                                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium bg-surface text-foreground/70 border border-border-glass"
                                      >
                                        <HiCheck className="w-3 h-3 text-primary" />
                                        {f}
                                      </span>
                                    )
                                  )}
                                </div>
                              </div>
                            )}
                            {"industries" in project && project.industries && (
                              <div>
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                                  Industries
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {(project as any).industries.map(
                                    (ind: string, j: number) => (
                                      <span
                                        key={j}
                                        className="px-3 py-1 rounded-lg text-xs font-medium bg-accent/10 text-accent border border-accent/20"
                                      >
                                        {ind}
                                      </span>
                                    )
                                  )}
                                </div>
                              </div>
                            )}
                            {"integrations" in project &&
                              project.integrations && (
                                <div>
                                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                                    Integrations
                                  </h4>
                                  <div className="flex flex-wrap gap-2">
                                    {(project as any).integrations.map(
                                      (intg: string, j: number) => (
                                        <span
                                          key={j}
                                          className="px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20"
                                        >
                                          {intg}
                                        </span>
                                      )
                                    )}
                                  </div>
                                </div>
                              )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
