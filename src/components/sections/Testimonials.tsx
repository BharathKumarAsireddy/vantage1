"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { FloatingPaths } from "@/components/ui/background-paths";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CMO, Nexus Financial Group",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    quote: "Vantage completely transformed our media presence. Their strategic approach and deep market knowledge helped us achieve a 340% increase in brand awareness within six months. Truly exceptional work.",
    rating: 5,
  },
  {
    name: "James Okafor",
    role: "CEO, TechVault Inc.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    quote: "Working with Vantage was a game-changer. Their team's expertise in digital strategy and their ability to deliver measurable results set them apart from every other agency we've worked with.",
    rating: 5,
  },
  {
    name: "Elena Vasquez",
    role: "Director of Marketing, GreenPath Solutions",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    quote: "The team at Vantage are more than consultants — they're strategic partners. Their integrated media strategy drove 280% revenue growth and they were with us every step of the way.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Founder, Apex Luxury Brands",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    quote: "Exceptional execution, outstanding communication, and results beyond our expectations. Vantage secured 200+ media placements for our launch and made us a household name overnight.",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
      <FloatingPaths position={1} color="rgba(201,168,76" />
      <FloatingPaths position={-1} color="rgba(26,107,60" />

      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #1A6B3C, transparent)" }} />

      {/* Gold tint */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.03) 0%, transparent 70%)" }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 text-xs font-bold tracking-[0.3em] uppercase"
            style={{ color: "#C9A84C" }}>
            Client Stories
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5">
            What Our{" "}
            <span style={{
              background: "linear-gradient(135deg, #C9A84C 0%, #e8d070 50%, #C9A84C 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Clients Say
            </span>
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-3xl p-8 md:p-12 text-center"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(201,168,76,0.12)",
                boxShadow: "0 0 60px rgba(201,168,76,0.04)",
              }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={18} fill="#C9A84C" color="#C9A84C" />
                ))}
              </div>

              {/* Quote mark */}
              <div className="text-5xl font-serif leading-none mb-4" style={{ color: "#1A6B3C" }}>&ldquo;</div>

              <blockquote
                className="text-xl md:text-2xl font-light leading-relaxed mb-8 max-w-3xl mx-auto"
                style={{ color: "#e5e7eb" }}
              >
                {testimonials[current].quote}
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-14 h-14 rounded-full object-cover"
                  style={{ border: "2px solid rgba(201,168,76,0.40)" }}
                />
                <div>
                  <div className="font-bold" style={{ color: "#C9A84C" }}>
                    {testimonials[current].name}
                  </div>
                  <div className="text-sm" style={{ color: "#6b7280" }}>
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              style={{ border: "1px solid rgba(201,168,76,0.15)", color: "#9ca3af" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(201,168,76,0.40)";
                el.style.color = "#C9A84C";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(201,168,76,0.15)";
                el.style.color = "#9ca3af";
              }}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "2rem" : "0.5rem",
                    background: i === current
                      ? "linear-gradient(to right, #1A6B3C, #C9A84C)"
                      : "rgba(201,168,76,0.20)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              style={{ border: "1px solid rgba(201,168,76,0.15)", color: "#9ca3af" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(201,168,76,0.40)";
                el.style.color = "#C9A84C";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(201,168,76,0.15)";
                el.style.color = "#9ca3af";
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
