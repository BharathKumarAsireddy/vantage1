"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import logoImg from "@/Assets/Screenshot 2026-03-16 161214.png";

const SparklesCore = dynamic(
  () => import("@/components/ui/sparkles").then((m) => ({ default: m.SparklesCore })),
  { ssr: false }
);

const navItems = [
  { name: "Home",         id: "home" },
  { name: "Services",     id: "services" },
  { name: "About",        id: "about" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Contact",      id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── Logo — fixed top-left ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 z-50 flex items-center px-5 h-16 lg:h-20"
      >
        <button
          onClick={() => scrollTo("home")}
          className="group relative flex items-center justify-center"
          style={{ width: 100, height: 48 }}
        >
          <div className="absolute inset-0 rounded-xl overflow-hidden opacity-50 group-hover:opacity-90 transition-opacity duration-500">
            <SparklesCore
              id="navbar-logo-sparkles"
              background="transparent"
              minSize={0.2}
              maxSize={0.7}
              particleDensity={350}
              className="w-full h-full"
              particleColor="#C9A84C"
              speed={2}
            />
          </div>
          <Image
            src={logoImg}
            alt="Vantage Media Consulting"
            className="relative z-10 h-12 w-auto drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
            style={{ objectFit: "contain" }}
          />
        </button>
      </motion.div>

      {/* ── Nav pill — centered (desktop) ── */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-3 left-[35%] -translate-x-1/2 z-50 hidden lg:flex items-center gap-1 px-2 py-2 rounded-full"
        style={{
          background: "rgba(15,15,15,0.80)",
          border: "1px solid rgba(201,168,76,0.20)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.40)",
        }}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200"
            style={{ color: active === item.id ? "#000" : "#9ca3af" }}
          >
            {active === item.id && (
              <motion.div
                layoutId="nav-active-pill"
                className="absolute inset-0 rounded-full"
                style={{ background: "linear-gradient(135deg, #C9A84C 0%, #e8d070 100%)" }}
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10">{item.name}</span>
          </button>
        ))}
      </motion.nav>

      {/* ── CTA + hamburger — fixed top-right ── */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 right-0 z-50 flex items-center px-5 h-16 lg:h-20"
      >
        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-5 h-0.5 rounded-full transition-all duration-300"
              style={{ background: "#C9A84C" }}
            />
          ))}
        </button>

        {/* Desktop CTA */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => scrollTo("contact")}
          className="hidden lg:block px-5 py-2.5 rounded-full text-sm font-bold text-black transition-all duration-200"
          style={{
            background: "linear-gradient(135deg, #C9A84C 0%, #e0c97a 100%)",
            boxShadow: "0 4px 20px rgba(201,168,76,0.28)",
          }}
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden flex flex-col gap-1 px-4 py-4"
            style={{
              background: "rgba(10,10,10,0.97)",
              borderBottom: "1px solid rgba(201,168,76,0.15)",
              backdropFilter: "blur(18px)",
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  color: active === item.id ? "#C9A84C" : "#9ca3af",
                  background: active === item.id ? "rgba(201,168,76,0.08)" : "transparent",
                  border: active === item.id ? "1px solid rgba(201,168,76,0.2)" : "1px solid transparent",
                }}
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
