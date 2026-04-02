"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Script from "next/script";
import { Mail, Phone, MapPin, ArrowRight, Navigation, Clock } from "lucide-react";

const CONTACT_INFO = [
  {
    Icon: Mail,
    label: "Email Us",
    value: "michael@vantagemediaconsulting.com",
    href: "mailto:michael@vantagemediaconsulting.com",
    accent: "#C9A84C",
  },
  {
    Icon: Phone,
    label: "Call Us",
    value: "(508) 612-3433",
    href: "tel:+15086123433",
    accent: "#1A6B3C",
  },
  {
    Icon: MapPin,
    label: "Visit Us",
    value: "401 W Lantana Rd, Lantana, FL 33462",
    href: "https://maps.google.com/?q=401+W+Lantana+Rd,+Lantana,+FL+33462",
    accent: "#C9A84C",
  },
];

const MAP_SRC =
  "https://maps.google.com/maps?q=401+W+Lantana+Rd,+Lantana,+FL+33462&output=embed&z=16";

const MAPS_ADDRESS = "401+W+Lantana+Rd,+Lantana,+FL+33462";

function openMaps() {
  const isApple =
    typeof navigator !== "undefined" &&
    /iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent) &&
    "ontouchend" in document;
  const url = isApple
    ? `https://maps.apple.com/?q=${MAPS_ADDRESS}`
    : `https://www.google.com/maps/search/?api=1&query=${MAPS_ADDRESS}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export default function Contact() {
  const ref        = useRef(null);
  const mapRef     = useRef(null);
  const inView     = useInView(ref,    { once: true, margin: "-100px" });
  const mapInView  = useInView(mapRef, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative flex flex-col overflow-hidden" style={{ background: "#1a1a1a" }}>

      {/* ── TOP: Full-width Map ── */}
      <motion.div
        ref={mapRef}
        initial={{ opacity: 0, y: -30 }}
        animate={mapInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full flex-shrink-0"
        style={{ height: "70vh", minHeight: 450 }}
      >
        <iframe
          title="Vantage Media Consulting Location"
          src={MAP_SRC}
          width="100%"
          height="100%"
          className="absolute inset-0 w-full h-full"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none z-[5]"
          style={{ background: "linear-gradient(to bottom, rgba(26,26,26,0.10) 0%, transparent 25%, transparent 70%, rgba(26,26,26,0.35) 100%)" }} />
        {/* Open in Google Maps badge */}
        <button
          onClick={openMaps}
          aria-label="Open in Google Maps"
          className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg transition-all duration-200 hover:scale-105"
          style={{ background: "rgba(26,26,26,0.85)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.35)", backdropFilter: "blur(6px)" }}
        >
          <Navigation size={11} />
          Open in Google Maps
        </button>
      </motion.div>

      {/* ── BOTTOM: Content (full width) ── */}
      <div className="w-full flex flex-col">
        <div ref={ref} className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-14 py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── LEFT: Heading + Contact cards ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Heading */}
            <div>
              <span className="inline-block mb-3 text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                Let&apos;s{" "}
                <span style={{ background: "linear-gradient(135deg, #C9A84C 0%, #e8d070 50%, #C9A84C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Work Together
                </span>
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                Ready to elevate your CRM? Let&apos;s discuss how Vantage can help you achieve your goals.
              </p>
            </div>

            {/* Contact info cards */}
            <div className="flex flex-col gap-3">
              {CONTACT_INFO.map(({ Icon, label, value, href, accent }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") || href.startsWith("tel:") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl group transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.02)", border: `1px solid rgba(${accent === "#C9A84C" ? "201,168,76" : "26,107,60"},0.12)` }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `rgba(${accent === "#C9A84C" ? "201,168,76" : "26,107,60"},0.38)`;
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `rgba(${accent === "#C9A84C" ? "201,168,76" : "26,107,60"},0.12)`;
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                  }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${accent}14`, border: `1px solid ${accent}28` }}>
                    <Icon size={16} style={{ color: accent }} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs tracking-wide mb-0.5" style={{ color: "#6b7280" }}>{label}</div>
                    <div className="text-sm font-medium truncate" style={{ color: "#d1d5db" }}>{value}</div>
                  </div>
                  <ArrowRight size={14} className="ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: accent }} />
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-4 p-4 rounded-2xl"
              style={{ background: "rgba(26,107,60,0.06)", border: "1px solid rgba(26,107,60,0.15)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(26,107,60,0.12)", border: "1px solid rgba(26,107,60,0.25)" }}>
                <Clock size={16} style={{ color: "#1A6B3C" }} />
              </div>
              <div>
                <div className="text-xs tracking-wide mb-0.5 font-semibold" style={{ color: "#6b7280" }}>Business Hours</div>
                <div className="text-sm font-medium text-white">Mon – Fri: 9 AM – 6 PM</div>
                <div className="text-sm" style={{ color: "#9ca3af" }}>Eastern Time (ET)</div>
              </div>
            </div>

            {/* Free consultation CTA */}
            <div className="rounded-2xl p-5" style={{ background: "linear-gradient(135deg, rgba(26,107,60,0.10) 0%, rgba(201,168,76,0.07) 100%)", border: "1px solid rgba(201,168,76,0.18)" }}>
              <div className="font-semibold text-white text-sm mb-1">Schedule a Free Consultation</div>
              <p className="text-xs mb-3" style={{ color: "#9ca3af" }}>Transform your CRM strategy in a 30-minute session.</p>
              <button className="flex items-center gap-2 text-xs font-bold transition-all hover:gap-3" style={{ color: "#C9A84C" }}>
                Book Now <ArrowRight size={12} />
              </button>
            </div>
          </motion.div>

          {/* ── RIGHT: GHL Embedded Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(201,168,76,0.10)",
                minHeight: 560,
              }}
            >
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/z7bM6nWe6wNYGiTZ8BKW"
                style={{ width: "100%", height: "560px", border: "none", borderRadius: "1.5rem" }}
                id="inline-z7bM6nWe6wNYGiTZ8BKW"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Website form"
                data-height="544"
                data-layout-iframe-id="inline-z7bM6nWe6wNYGiTZ8BKW"
                data-form-id="z7bM6nWe6wNYGiTZ8BKW"
                title="Website form"
              />
            </div>
            <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
