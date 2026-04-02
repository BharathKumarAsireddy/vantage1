"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Database, Film, TrendingUp, Palette, Mic, ArrowRight,
  Users, Percent, Zap, Star, CheckCircle2, Camera,
} from "lucide-react";
import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { FloatingPaths } from "@/components/ui/background-paths";

/* ── Service cards ─────────────────────────────────────────────────────────── */
const services = [
  { icon: Database,   title: "CRM Implementation",  slug: "crm-implementation",  description: "End-to-end CRM setup covering automation, data migration, training, maintenance, analytics, and customisation — everything your team needs under one roof.", accent: "#C9A84C" },
  { icon: TrendingUp, title: "Growth & Digital Marketing", slug: "growth-digital-marketing", description: "Paid ads, SEO, social media, email automation, and conversion optimisation — every channel unified into one growth system that brings in customers and scales your revenue.", accent: "#1A6B3C" },
  { icon: Film,       title: "Media Production",     slug: "media-production",     description: "Premium video, audio, and content production that captivates audiences and communicates your brand story with cinematic impact.", accent: "#C9A84C" },
  { icon: Palette,    title: "Content Creation",     slug: "content-creation",     description: "End-to-end content creation and paid advertising across Google, Facebook, and Instagram — driving real customers to your business through targeted ad campaigns.", accent: "#1A6B3C" },
  { icon: Mic,        title: "Podcast Studio",       slug: "podcasting",           description: "A fully equipped, acoustically treated podcast studio available for rent — professional lighting, velvet lounge seating, and broadcast-quality infrastructure.", accent: "#C9A84C" },
  { icon: Camera,     title: "Real Estate Photography", slug: "real-estate-photography", description: "Professional real estate photography — interior, exterior, twilight, and aerial shots — engineered to make every property stand out and sell faster.", accent: "#1A6B3C" },
];

/* ── Results & Outcomes ────────────────────────────────────────────────────── */
const outcomes = [
  {
    icon: Users,
    title: "Lead Generation",
    bullets: ["2x–5x increase in qualified inbound leads", "More consistent deal flow", "Higher-quality prospects"],
    accent: "#C9A84C",
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    bullets: ["30%–100%+ increase in monthly revenue within 90–180 days", "Increased deal volume", "More predictable income"],
    accent: "#1A6B3C",
  },
  {
    icon: Percent,
    title: "Cost Efficiency",
    bullets: ["Reduced cost per lead", "Improved ROAS", "Higher conversion rates"],
    accent: "#C9A84C",
  },
  {
    icon: Zap,
    title: "Operational Efficiency",
    bullets: ["Faster response times", "No missed opportunities", "Clear pipeline visibility"],
    accent: "#1A6B3C",
  },
  {
    icon: Star,
    title: "Brand Positioning",
    bullets: ["Stronger authority presence", "Increased trust before contact", "Attract higher-end clients"],
    accent: "#C9A84C",
  },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Services() {
  const ref        = useRef(null);
  const resultsRef = useRef(null);
  const inView        = useInView(ref,        { once: true, margin: "-100px" });
  const resultsInView = useInView(resultsRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      <FloatingPaths position={1}  color="rgba(201,168,76" />
      <FloatingPaths position={-1} color="rgba(26,107,60"  />

      {/* Section divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20"
        style={{ background: "linear-gradient(to bottom, transparent, #C9A84C, transparent)" }}
      />

      {/* Subtle green tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(26,107,60,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5">
            Our{" "}
            <span style={{
              background: "linear-gradient(135deg, #C9A84C 0%, #e8d070 50%, #C9A84C 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Services
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "#9ca3af" }}>
            From CRM implementation and media strategy to creative production, digital marketing, and a professional podcast studio — we cover everything your brand needs to grow.
          </p>
        </motion.div>

        {/* ── Service cards ── */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <motion.li key={svc.title} variants={cardVariants} className="min-h-[14rem] list-none">
                <Link href={`/services/${svc.slug}`} className="block h-full group">
                  <div
                    className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3 transition-transform duration-300 group-hover:scale-[1.02]"
                    style={{ borderColor: `${svc.accent}20` }}
                  >
                    <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
                    <div
                      className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] p-6 shadow-sm md:p-6"
                      style={{ background: "rgba(255,255,255,0.02)", borderColor: `${svc.accent}18` }}
                    >
                      <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border-[0.75px] p-2" style={{ background: `${svc.accent}14`, borderColor: `${svc.accent}28` }}>
                          <Icon size={18} style={{ color: svc.accent }} />
                        </div>
                        <div className="space-y-3">
                          <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white">
                            {svc.title}
                          </h3>
                          <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem]" style={{ color: "#6b7280" }}>
                            {svc.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: svc.accent }}>
                        Learn More
                        <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* ── Results & Outcomes ── */}
        <div ref={resultsRef} className="mt-28">
          {/* Divider */}
          <div className="h-px w-full mb-20" style={{ background: "linear-gradient(to right, transparent, #1A6B3C50, transparent)" }} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block mb-4 text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#1A6B3C" }}>
              Results
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5">
              Results &{" "}
              <span style={{
                background: "linear-gradient(135deg, #1A6B3C 0%, #25A047 50%, #1A6B3C 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Outcomes
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg" style={{ color: "#9ca3af" }}>
              We don&apos;t just help you grow — we build the system that makes growth inevitable.
            </p>
          </motion.div>

          {/* First 3 outcomes */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={resultsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
          >
            {outcomes.slice(0, 3).map((outcome) => {
              const Icon = outcome.icon;
              return (
                <motion.div key={outcome.title} variants={cardVariants}>
                  <div
                    className="h-full rounded-2xl border p-6 flex flex-col gap-4"
                    style={{ background: "rgba(255,255,255,0.02)", borderColor: `${outcome.accent}22` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-fit rounded-lg border p-2" style={{ background: `${outcome.accent}14`, borderColor: `${outcome.accent}28` }}>
                        <Icon size={18} style={{ color: outcome.accent }} />
                      </div>
                      <h3 className="text-lg font-bold text-white">{outcome.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {outcome.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm" style={{ color: "#9ca3af" }}>
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: outcome.accent }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Last 2 outcomes — centred */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={resultsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            {outcomes.slice(3).map((outcome) => {
              const Icon = outcome.icon;
              return (
                <motion.div key={outcome.title} variants={cardVariants}>
                  <div
                    className="h-full rounded-2xl border p-6 flex flex-col gap-4"
                    style={{ background: "rgba(255,255,255,0.02)", borderColor: `${outcome.accent}22` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-fit rounded-lg border p-2" style={{ background: `${outcome.accent}14`, borderColor: `${outcome.accent}28` }}>
                        <Icon size={18} style={{ color: outcome.accent }} />
                      </div>
                      <h3 className="text-lg font-bold text-white">{outcome.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {outcome.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm" style={{ color: "#9ca3af" }}>
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: outcome.accent }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
