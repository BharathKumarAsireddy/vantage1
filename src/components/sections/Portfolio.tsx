"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, ZoomIn } from "lucide-react";
import { FloatingPaths } from "@/components/ui/background-paths";

const filters = ["All", "Implementation", "Integration", "Analytics", "Support", "Maintenance"];

const projects = [
  {
    title: "Salesforce Enterprise Rollout",
    category: "Implementation",
    description: "Full Salesforce CRM implementation for a 500-person sales team, reducing lead response time by 60%",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tag: "Implementation",
  },
  {
    title: "HubSpot & ERP Integration",
    category: "Integration",
    description: "Seamless two-way sync between HubSpot CRM and SAP ERP, eliminating 100% of manual data entry",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tag: "Integration",
  },
  {
    title: "CRM Analytics Dashboard",
    category: "Analytics",
    description: "Custom real-time reporting suite surfacing pipeline health and churn risk across 12 business units",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    tag: "Analytics",
  },
  {
    title: "Legacy CRM Data Migration",
    category: "Implementation",
    description: "Migrated 8 years of customer data into Zoho CRM with zero data loss and full deduplication",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80",
    tag: "Implementation",
  },
  {
    title: "Automated Sales Workflow",
    category: "Integration",
    description: "Built end-to-end automation connecting CRM, email marketing, and billing — saving 20 hours/week",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tag: "Integration",
  },
  {
    title: "CRM Training Program",
    category: "Support",
    description: "Company-wide CRM training rollout achieving 95% user adoption within 30 days of launch",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tag: "Support",
  },
  {
    title: "CRM Maintenance & Health Monitoring",
    category: "Maintenance",
    description: "Proactive CRM health checks, performance tuning, and 24/7 monitoring — reducing system downtime by 98% for a multi-region enterprise",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    tag: "Maintenance",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 overflow-hidden">
      <FloatingPaths position={1} color="rgba(201,168,76" />
      <FloatingPaths position={-1} color="rgba(26,107,60" />

      <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#C9A84C]/6 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A84C]">
            Our Work
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5">
            Featured{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C9A84C 0%, #e0c97a 50%, #C9A84C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Portfolio
            </span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Real-world CRM projects that have streamlined operations, unified data,
            and driven measurable results for our clients.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={
                active === f
                  ? { background: "#C9A84C", color: "#000" }
                  : {
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#a1a1aa",
                    }
              }
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              // Directional entrance: left → top → right → left → bottom → right
              const directions = [
                { x: -80, y: 0 },
                { x: 0,   y: -60 },
                { x: 80,  y: 0 },
                { x: -80, y: 0 },
                { x: 0,   y: 60 },
                { x: 80,  y: 0 },
              ];
              const dir = directions[index % directions.length];
              return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, x: dir.x, y: dir.y }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(201,168,76,0.18)" }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              >
                {/* Image container */}
                <div className="relative h-56 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-125"
                  />

                  {/* Gold shimmer border on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: "inset 0 0 0 2px rgba(201,168,76,0.50)" }}
                  />

                  {/* Zoom icon — appears in center on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      initial={{ scale: 0.5 }}
                      whileHover={{ scale: 1 }}
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{
                        background: "rgba(201,168,76,0.85)",
                        backdropFilter: "blur(6px)",
                        boxShadow: "0 0 30px rgba(201,168,76,0.60)",
                      }}
                    >
                      <ZoomIn size={24} color="#000" strokeWidth={2.5} />
                    </motion.div>
                  </div>

                  {/* Slide-up description overlay */}
                  <motion.div
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 flex flex-col justify-end p-5"
                    style={{ background: "linear-gradient(to top, rgba(9,9,11,0.95) 0%, rgba(9,9,11,0.55) 60%, transparent 100%)" }}
                  >
                    <p className="text-zinc-300 text-sm">{project.description}</p>
                    <div className="mt-3 flex items-center gap-1 text-[#C9A84C] text-sm font-medium">
                      View Project <ExternalLink size={13} className="ml-1" />
                    </div>
                  </motion.div>
                </div>

                {/* Card footer */}
                <div
                  className="p-5 transition-colors duration-300 group-hover:bg-white/[0.04]"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold group-hover:text-[#e8d070] transition-colors duration-300">{project.title}</h3>
                    <span
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.2)" }}
                    >
                      {project.tag}
                    </span>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
