"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Database, TrendingUp, Film, Palette, Mic, Camera } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/Assets/Screenshot 2026-03-16 161214.png";

const services = [
  { icon: Database,   title: "CRM Implementation",        slug: "crm-implementation",        accent: "#C9A84C" },
  { icon: TrendingUp, title: "Growth & Digital Marketing", slug: "growth-digital-marketing",  accent: "#1A6B3C" },
  { icon: Film,       title: "Media Production",          slug: "media-production",           accent: "#C9A84C" },
  { icon: Palette,    title: "Content Creation",          slug: "content-creation",           accent: "#1A6B3C" },
  { icon: Mic,        title: "Podcast Studio",            slug: "podcasting",                 accent: "#C9A84C" },
  { icon: Camera,     title: "Real Estate Photography",   slug: "real-estate-photography",    accent: "#1A6B3C" },
];

const serviceTitles = services.map((s) => s.title);

export const PremiumHero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleNumber((prev) => (prev + 1) % serviceTitles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      {/* ── Background video ──────────────────────────────────────────────── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 z-0 w-full h-full object-cover"
        src="/myvideo_compressed.mp4"
      />

      {/* Dark overlay — keeps text readable over the video */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "rgba(0,0,0,0.40)" }}
      />

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <div className="relative z-[2] flex min-h-screen w-full items-center justify-center px-6 py-28">
        <div className="container mx-auto flex flex-col items-center gap-10 text-center max-w-5xl">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={logoImg}
              alt="Vantage Media Consulting"
              className="w-20 h-20 drop-shadow-2xl"
              style={{ objectFit: "contain" }}
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.25em] uppercase"
              style={{
                border: "1px solid rgba(201,168,76,0.35)",
                background: "rgba(201,168,76,0.08)",
                color: "#C9A84C",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#1A6B3C" }} />
              Premium Media Consulting
            </span>
          </motion.div>

          {/* Headline with cycling service titles */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-3xl md:text-5xl max-w-3xl tracking-tighter font-black leading-tight"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.7)" }}
          >
            <span className="text-white">Elevate Your Brand with</span>
            <span
              className="relative flex w-full justify-center overflow-hidden md:pb-4 md:pt-1 mt-2"
              style={{ minHeight: "1.2em" }}
            >
              &nbsp;
              {serviceTitles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute font-black"
                  style={{
                    background: index % 2 === 0
                      ? "linear-gradient(135deg, #C9A84C 0%, #e8d070 50%, #C9A84C 100%)"
                      : "linear-gradient(135deg, #1A6B3C 0%, #25A047 50%, #1A6B3C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  initial={{ opacity: 0, y: -60 }}
                  transition={{ type: "spring", stiffness: 50 }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : { y: titleNumber > index ? -100 : 100, opacity: 0 }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl leading-relaxed tracking-tight max-w-2xl text-center"
            style={{ color: "#e5e7eb", textShadow: "0 1px 12px rgba(0,0,0,0.8)" }}
          >
            A premium media and growth partner for luxury real estate brands,
            high-end service businesses, and personal brands — helping you
            increase visibility, generate qualified leads, and drive real revenue.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base text-black transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #C9A84C 0%, #e8d070 100%)",
                boxShadow: "0 6px 30px rgba(201,168,76,0.35)",
              }}
            >
              Start Your Journey
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("services")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-white transition-all duration-200"
              style={{
                border: "1px solid rgba(255,255,255,0.30)",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
              }}
            >
              View Services
            </motion.button>
          </motion.div>

          {/* Service quick-links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 max-w-3xl"
          >
            {services.map((svc) => {
              const Icon = svc.icon;
              const openInNewTab = svc.slug === "media-production";
              return (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  target={openInNewTab ? "_blank" : undefined}
                  rel={openInNewTab ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
                  style={{
                    border: `1px solid ${svc.accent}40`,
                    background: `${svc.accent}12`,
                    color: svc.accent,
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <Icon size={14} />
                  {svc.title}
                </Link>
              );
            })}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="grid grid-cols-3 gap-6 max-w-xl mx-auto mt-2"
          >
            {[
              { value: "200+", label: "Clients Served",   color: "#C9A84C" },
              { value: "8+",   label: "Years Experience", color: "#25A047" },
              { value: "500+", label: "Productions Delivered", color: "#C9A84C" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black mb-1" style={{ color: stat.color, textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}>
                  {stat.value}
                </div>
                <div className="text-xs tracking-widest uppercase text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[42rem] z-[2] pointer-events-none">
        <div className="absolute inset-x-10 top-0 h-[2px] blur-sm"
          style={{ background: "linear-gradient(to right, transparent, #1A6B3C, transparent)" }} />
        <div className="absolute inset-x-48 top-0 h-[4px] blur-sm"
          style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }} />
      </div>
    </section>
  );
};
