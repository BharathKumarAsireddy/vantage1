"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { FloatingPaths } from "@/components/ui/background-paths";

const stats = [
  { value: 200, suffix: "+", label: "Global Clients", color: "#C9A84C" },
  { value: 15, suffix: "+", label: "Years of Excellence", color: "#1A6B3C" },
  { value: 98, suffix: "%", label: "Client Retention", color: "#C9A84C" },
  { value: 50, suffix: "M+", label: "Audience Reached", color: "#1A6B3C" },
];

const highlights = [
  "Strategy-first approach tied to your actual revenue outcome",
  "Cinematic, documentary-style production at elite visual standards",
  "Full-backend execution: scripting, production, ads, landing pages & optimization",
  "Every asset built to convert attention into qualified leads and sales",
  "We work selectively — luxury real estate, high-end services & personal brands only",
];

function Counter({ value, suffix, color }: { value: number; suffix: string; color: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = (value / 2000) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} style={{ color }}>{count}{suffix}</span>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <FloatingPaths position={1} color="rgba(201,168,76" />
      <FloatingPaths position={-1} color="rgba(26,107,60" />

      <div className="absolute -left-64 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "rgba(26,107,60,0.10)" }} />
      <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "rgba(201,168,76,0.07)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center" ref={ref}>

          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block mb-4 text-xs font-bold tracking-[0.3em] uppercase"
              style={{ color: "#C9A84C" }}>
              Who We Are
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              The Vantage{" "}
              <span style={{
                background: "linear-gradient(135deg, #C9A84C 0%, #e8d070 50%, #C9A84C 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Difference
              </span>
            </h2>
            <p className="text-lg leading-relaxed mb-5" style={{ color: "#9ca3af" }}>
              Our approach begins with strategy — understanding your market, your
              positioning, and the revenue outcome you want to achieve. From there,
              we design a clear content and advertising framework that supports your
              business goals, not vanity metrics.
            </p>
            <p className="leading-relaxed mb-5" style={{ color: "#6b7280" }}>
              Every project is executed with a documentary-style, cinematic standard
              that elevates brand perception while maintaining performance. From
              scripting and production to ad creation, landing pages, and ongoing
              optimization — we manage the entire backend so nothing is left to chance.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: "#6b7280" }}>
              Unlike traditional marketing agencies or freelance videographers, we
              handle everything end-to-end, so our clients can stay focused on closing
              deals, scaling operations, and increasing yearly revenue.
            </p>

            <ul className="space-y-3">
              {highlights.map((item, i) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: i % 2 === 0 ? "#C9A84C" : "#1A6B3C" }}
                  />
                  <span className="text-sm" style={{ color: "#d1d5db" }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="rounded-2xl p-8 text-center"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid rgba(${stat.color === "#C9A84C" ? "201,168,76" : "26,107,60"},0.15)`,
                }}
              >
                <div className="text-4xl font-black mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} color={stat.color} />
                </div>
                <div className="text-sm tracking-wide" style={{ color: "#6b7280" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}

            {/* Mission card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="col-span-2 rounded-2xl p-6"
              style={{
                background: "linear-gradient(135deg, rgba(201,168,76,0.07) 0%, rgba(26,107,60,0.07) 100%)",
                border: "1px solid rgba(201,168,76,0.18)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center text-base font-black"
                  style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C" }}
                >
                  ◆
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Our Mission</div>
                  <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                    We work as a true growth partner — handling the strategy,
                    execution, and optimization so our clients can focus on what
                    they do best. We work selectively with brands that demand
                    elite visual standards, proven systems, and a long-term
                    growth partner, not another vendor.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
