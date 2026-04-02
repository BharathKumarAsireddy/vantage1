"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import logoImg from "@/Assets/Screenshot 2026-03-16 161214.png";

const navLinks = [
  { name: "Home",         href: "/" },
  { name: "Services",     href: "/#services" },
  { name: "Portfolio",    href: "/#portfolio" },
  { name: "Testimonials", href: "/#testimonials" },
];

export default function ServiceNavbar({ accent }: { accent: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center px-5 h-16 lg:h-20 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(9,9,11,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? `1px solid ${accent}18` : "1px solid transparent",
      }}
    >
      {/* ── Logo left ── */}
      <Link href="/" className="shrink-0 group">
        <Image
          src={logoImg}
          alt="Vantage Media Consulting"
          className="h-10 w-auto drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
          style={{ objectFit: "contain" }}
        />
      </Link>

      {/* ── Nav links — absolutely centered on the header ── */}
      <nav className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full absolute left-1/2 -translate-x-1/2"
        style={{
          background: "rgba(15,15,15,0.75)",
          border: `1px solid ${accent}20`,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:text-white"
            style={{ color: "#9ca3af" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#fff";
              (e.currentTarget as HTMLElement).style.background = `${accent}18`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#9ca3af";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* ── Right side: back link + CTA ── */}
      <div className="flex items-center gap-4 shrink-0 ml-auto">
        <Link
          href="/#services"
          className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
          style={{ color: `${accent}90` }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = accent)}
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = `${accent}90`)
          }
        >
          <ArrowLeft size={15} />
          All Services
        </Link>

        <Link href="/#contact">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-5 py-2.5 rounded-full text-sm font-bold text-black"
            style={{
              background: `linear-gradient(135deg, ${accent} 0%, #e8d070 100%)`,
              boxShadow: `0 4px 16px ${accent}28`,
            }}
          >
            Get Started
          </motion.button>
        </Link>
      </div>
    </motion.header>
  );
}
