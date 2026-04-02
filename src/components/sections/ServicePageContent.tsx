"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import type { ServiceData, ServiceSection, ServiceSystem } from "@/lib/services-data";
import crmHeroImg from "@/Assets/CRM vantage website.webp";
import growthHeroImg from "@/Assets/GO & DM.png";
import realEstateHeroImg from "@/Assets/Real estate.png";

const slugHeroImages: Record<string, { src: string }> = {
  "crm-implementation": crmHeroImg,
  "growth-digital-marketing": growthHeroImg,
  "real-estate-photography": realEstateHeroImg,
};

const mediaProductionVideo = "/myv.mp4";
const podcastStudioVideo = "/podcast.mp4";
const contentCreationVideo = "/content.mp4";

/* ─── Video background helper ──────────────────────────────────────────────── */
function VideoBg({
  url,
  fallback,
  opacity = 35,
  overlayOpacity = 0.45,
  rotate = 0,
  shift = 0,
}: {
  url: string;
  fallback: string;
  opacity?: number;
  overlayOpacity?: number;
  rotate?: number;
  shift?: number;
}) {
  const needsRotate = rotate !== 0;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: fallback, width: "100%", height: "100%" }}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={needsRotate ? "absolute" : "absolute inset-0 w-full h-full object-cover"}
        style={{
          opacity: opacity / 100,
          ...(needsRotate && {
            top: "50%",
            left: "50%",
            width: "300vh",
            height: "300vw",
            objectFit: "cover",
            transform: `translate(-50%, -50%) rotate(${rotate}deg) translateY(${shift}%)`,
          }),
        }}
      >
        <source src={url} type={url.endsWith(".mov") ? "video/quicktime" : "video/mp4"} />
        {url.endsWith(".mov") && <source src={url} type="video/mp4" />}
      </video>
      <div className="absolute inset-0" style={{ background: `rgba(0,0,0,${overlayOpacity})` }} />
    </div>
  );
}

/* ─── Fade-in wrapper ───────────────────────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section label / heading helpers ──────────────────────────────────────── */
function SectionLabel({ text, accent }: { text: string; accent: string }) {
  return (
    <span
      className="inline-block mb-4 text-xs font-bold tracking-[0.3em] uppercase"
      style={{ color: accent }}
    >
      {text}
    </span>
  );
}

function GradientHeading({
  children,
  accent,
  accentSecondary,
}: {
  children: React.ReactNode;
  accent: string;
  accentSecondary: string;
}) {
  return (
    <h2
      className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5"
      style={{
        background: `linear-gradient(135deg, ${accent} 0%, ${accentSecondary} 50%, ${accent} 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </h2>
  );
}

/* ─── Overview section ──────────────────────────────────────────────────────── */
function OverviewSection({
  section,
  accent,
  accentSecondary,
}: {
  section: ServiceSection;
  accent: string;
  accentSecondary: string;
}) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <VideoBg
        url={section.videoUrl}
        fallback="linear-gradient(135deg, #1a1a1a 0%, #0f1a0f 100%)"
        opacity={60}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <SectionLabel text="Overview" accent={accent} />
            <GradientHeading accent={accent} accentSecondary={accentSecondary}>
              {section.title}
            </GradientHeading>
            <p className="text-sm font-semibold mb-6" style={{ color: accentSecondary }}>
              {section.subtitle}
            </p>
            {section.description.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed mb-4"
                style={{ color: "#9ca3af" }}
              >
                {para}
              </p>
            ))}
          </FadeIn>
          {section.image && (
            <FadeIn delay={0.15}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px]">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${accent}18 0%, transparent 60%)`,
                  }}
                />
                {/* Gold corner accent */}
                <div
                  className="absolute top-0 left-0 w-16 h-1 rounded-br"
                  style={{ background: accent }}
                />
                <div
                  className="absolute top-0 left-0 w-1 h-16 rounded-br"
                  style={{ background: accent }}
                />
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Features section ──────────────────────────────────────────────────────── */
function FeaturesSection({
  section,
  accent,
  accentSecondary,
}: {
  section: ServiceSection;
  accent: string;
  accentSecondary: string;
}) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={!section.videoUrl ? { background: "linear-gradient(135deg, #0a0a0d 0%, #1a1a1a 100%)" } : undefined}>
      {section.videoUrl && (
        <VideoBg
          url={section.videoUrl}
          fallback="linear-gradient(135deg, #0a0a0d 0%, #1a1a1a 100%)"
          opacity={60}
        />
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <SectionLabel text={section.subtitle} accent={accent} />
          <GradientHeading accent={accent} accentSecondary={accentSecondary}>
            {section.title}
          </GradientHeading>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "#9ca3af" }}>
            {section.description}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {section.features?.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.1}>
              <div
                className="group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-[1.02]"
                style={{
                  borderColor: `${accent}22`,
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                {/* Feature image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to bottom, transparent 40%, rgba(9,9,11,0.95) 100%)`,
                    }}
                  />
                  {/* Accent strip */}
                  <div
                    className="absolute bottom-0 left-0 h-0.5 w-full"
                    style={{
                      background: `linear-gradient(to right, ${accent}, transparent)`,
                    }}
                  />
                </div>
                {/* Text content */}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0"
                      style={{ color: accent }}
                    />
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed pl-7" style={{ color: "#6b7280" }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Process section ───────────────────────────────────────────────────────── */
function ProcessSection({
  section,
  accent,
  accentSecondary,
}: {
  section: ServiceSection;
  accent: string;
  accentSecondary: string;
}) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={!section.videoUrl ? { background: "linear-gradient(135deg, #1a1a1a 0%, #0d0d10 100%)" } : undefined}>
      {section.videoUrl && (
        <VideoBg
          url={section.videoUrl}
          fallback="linear-gradient(135deg, #1a1a1a 0%, #0d0d10 100%)"
          opacity={60}
        />
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <SectionLabel text={section.subtitle} accent={accent} />
          <GradientHeading accent={accent} accentSecondary={accentSecondary}>
            {section.title}
          </GradientHeading>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "#9ca3af" }}>
            {section.description}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {section.processSteps?.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.12}>
              <div
                className="relative rounded-2xl p-6 border h-full"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  borderColor: `${accent}1a`,
                }}
              >
                {/* Step number */}
                <div
                  className="text-5xl font-black mb-4 leading-none"
                  style={{
                    background: `linear-gradient(135deg, ${accent}60, ${accent}20)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {step.step}
                </div>
                {/* Connector line (not on last) */}
                {i < (section.processSteps?.length ?? 0) - 1 && (
                  <div
                    className="hidden lg:block absolute top-[52px] right-0 w-6 h-px translate-x-full"
                    style={{ background: `linear-gradient(to right, ${accent}40, transparent)` }}
                  />
                )}
                <h3 className="text-base font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Podcast section ───────────────────────────────────────────────────────── */
function PodcastSection({
  section,
  accent,
  accentSecondary,
}: {
  section: ServiceSection;
  accent: string;
  accentSecondary: string;
}) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <VideoBg
        url={section.videoUrl}
        fallback="linear-gradient(135deg, #1a1a1a 0%, #0d0d08 100%)"
        opacity={60}
      />
      {/* Warm radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 30%, ${accent}0c 0%, transparent 65%)`,
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-14">
          <SectionLabel text={section.subtitle} accent={accent} />
          <GradientHeading accent={accent} accentSecondary={accentSecondary}>
            {section.title}
          </GradientHeading>
          {section.description.split("\n\n").map((para, i) => (
            <p
              key={i}
              className="max-w-2xl mx-auto text-base leading-relaxed mb-3"
              style={{ color: "#9ca3af" }}
            >
              {para}
            </p>
          ))}
        </FadeIn>

        {/* Featured podcast video player */}
        {section.featuredVideoUrl && (
          <FadeIn delay={0.15}>
            <div className="relative max-w-4xl mx-auto">
              {/* Glow frame */}
              <div
                className="absolute -inset-px rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${accent}60, ${accentSecondary}30, transparent)`,
                }}
              />
              <div
                className="relative rounded-2xl overflow-hidden border"
                style={{ borderColor: `${accent}30` }}
              >
                {/* Top bar — podcast branding strip */}
                <div
                  className="flex items-center gap-3 px-5 py-3 border-b"
                  style={{
                    background: "rgba(9,9,11,0.9)",
                    borderColor: `${accent}20`,
                  }}
                >
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
                    <span className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
                  </div>
                  <span
                    className="text-xs font-bold tracking-[0.2em] uppercase ml-2"
                    style={{ color: `${accent}cc` }}
                  >
                    Vantage Podcast — Now Playing
                  </span>
                </div>

                {/* Video */}
                <video
                  controls
                  playsInline
                  className="w-full aspect-video bg-black"
                  poster="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1280&q=80"
                >
                  <source src={section.featuredVideoUrl} type="video/mp4" />
                </video>

                {/* Bottom meta bar */}
                <div
                  className="flex items-center justify-between px-5 py-3 border-t"
                  style={{
                    background: "rgba(9,9,11,0.9)",
                    borderColor: `${accent}20`,
                  }}
                >
                  <div>
                    <p className="text-sm font-bold text-white">
                      Shaping the Future of Media
                    </p>
                    <p className="text-xs" style={{ color: "#6b7280" }}>
                      Episode 01 · The Vantage Podcast
                    </p>
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full border"
                    style={{
                      color: accent,
                      borderColor: `${accent}40`,
                      background: `${accent}10`,
                    }}
                  >
                    New Episode
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

/* ─── Gallery section ───────────────────────────────────────────────────────── */
function GallerySection({
  section,
  accent,
  accentSecondary,
}: {
  section: ServiceSection;
  accent: string;
  accentSecondary: string;
}) {
  const images = section.images ?? [];
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #0d0d10 0%, #1a1a1a 100%)" }}
      />
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${accent}12 0%, transparent 60%)`,
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <SectionLabel text={section.subtitle} accent={accent} />
          <GradientHeading accent={accent} accentSecondary={accentSecondary}>
            {section.title}
          </GradientHeading>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "#9ca3af" }}>
            {section.description}
          </p>
        </FadeIn>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {/* Hero image — spans 2 cols & 2 rows */}
          {images[0] && (
            <FadeIn className="col-span-2 row-span-2">
              <div
                className="relative rounded-2xl overflow-hidden h-full min-h-[320px] border group"
                style={{ borderColor: `${accent}25` }}
              >
                <img
                  src={images[0]}
                  alt="Podcast studio — main view"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${accent}20 0%, transparent 60%)`,
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(to right, ${accent}80, transparent)` }}
                />
              </div>
            </FadeIn>
          )}

          {/* Remaining images */}
          {images.slice(1).map((img, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                className="relative rounded-2xl overflow-hidden h-[220px] border group"
                style={{ borderColor: `${accent}20` }}
              >
                <img
                  src={img}
                  alt={`Podcast studio — view ${i + 2}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${accent}18 0%, transparent 60%)`,
                  }}
                />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Rent CTA banner */}
        <FadeIn delay={0.3}>
          <div
            className="mt-14 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border"
            style={{
              background: `linear-gradient(135deg, ${accent}0e 0%, rgba(9,9,11,0.6) 100%)`,
              borderColor: `${accent}30`,
            }}
          >
            <div>
              <p
                className="text-xs font-bold tracking-[0.3em] uppercase mb-2"
                style={{ color: accent }}
              >
                Available for Rent
              </p>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                Book the Studio for Your Next Project
              </h3>
              <p className="text-sm" style={{ color: "#9ca3af" }}>
                Hourly, half-day, and full-day rates available. Production support optional.
              </p>
            </div>
            <Link href="/#contact" className="shrink-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 rounded-full font-bold text-white whitespace-nowrap"
                style={{
                  background: `linear-gradient(135deg, ${accent} 0%, ${accentSecondary} 100%)`,
                  boxShadow: `0 4px 28px ${accent}40`,
                }}
              >
                Enquire About Booking
              </motion.button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Photo Gallery section (real estate & generic) ────────────────────────── */
function PhotoGallerySection({
  section,
  accent,
  accentSecondary,
}: {
  section: ServiceSection;
  accent: string;
  accentSecondary: string;
}) {
  const images = section.images ?? [];
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #111114 0%, #0d0d10 100%)" }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${accent}10 0%, transparent 60%)` }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <SectionLabel text={section.subtitle} accent={accent} />
          <GradientHeading accent={accent} accentSecondary={accentSecondary}>
            {section.title}
          </GradientHeading>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "#9ca3af" }}>
            {section.description}
          </p>
        </FadeIn>

        {/* Masonry columns grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {images.map((img, i) => (
            <FadeIn key={i} delay={Math.min(i * 0.07, 0.4)}>
              <div
                className="relative overflow-hidden rounded-2xl border group mb-4 break-inside-avoid"
                style={{ borderColor: `${accent}22` }}
              >
                <img
                  src={img}
                  alt={`${section.title} — photo ${i + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${accent}20 0%, transparent 60%)` }}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Results section ───────────────────────────────────────────────────────── */
function ResultsSection({
  section,
  accent,
  accentSecondary,
}: {
  section: ServiceSection;
  accent: string;
  accentSecondary: string;
}) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <VideoBg
        url={section.videoUrl}
        fallback="linear-gradient(135deg, #1a1a1a 0%, #111 100%)"
        opacity={60}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <SectionLabel text="Results" accent={accent} />
            <GradientHeading accent={accent} accentSecondary={accentSecondary}>
              {section.title}
            </GradientHeading>
            <p className="text-sm font-semibold mb-6" style={{ color: accentSecondary }}>
              {section.subtitle}
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#9ca3af" }}>
              {section.description}
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-4">
            {section.stats?.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-6 border text-center"
                  style={{
                    background: `linear-gradient(135deg, ${accent}0a 0%, rgba(9,9,11,0.8) 100%)`,
                    borderColor: `${accent}25`,
                  }}
                >
                  <div
                    className="text-4xl font-black mb-2"
                    style={{
                      background: `linear-gradient(135deg, ${accent}, ${accentSecondary})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold tracking-wide uppercase" style={{ color: "#6b7280" }}>
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA section ───────────────────────────────────────────────────────────── */
function CTASection({
  accent,
  accentSecondary,
}: {
  accent: string;
  accentSecondary: string;
}) {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #0d0d0f 100%)" }}>
      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${accent}08 0%, transparent 70%)`,
        }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <FadeIn>
          <SectionLabel text="Get Started" accent={accent} />
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Ready to Elevate Your{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${accent}, ${accentSecondary})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Brand?
            </span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "#9ca3af" }}>
            Let&apos;s build something remarkable together. Schedule a free consultation with our
            team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 rounded-full font-bold text-black transition-all duration-200"
                style={{
                  background: `linear-gradient(135deg, ${accent} 0%, ${accentSecondary} 100%)`,
                  boxShadow: `0 4px 24px ${accent}35`,
                }}
              >
                Schedule Free Consultation
              </motion.button>
            </Link>
            <Link href="/#services">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 rounded-full font-bold text-white border transition-all duration-200"
                style={{ borderColor: `${accent}50` }}
              >
                View All Services
              </motion.button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── System section ────────────────────────────────────────────────────────── */
function SystemSection({
  system,
  accent,
  accentSecondary,
}: {
  system: ServiceSystem;
  accent: string;
  accentSecondary: string;
}) {
  return (
    <section className="relative py-24 lg:py-28 overflow-hidden" style={{ background: "#0f0f12" }}>
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(to right, transparent, ${accent}40, transparent)` }}
      />
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${accent}08 0%, transparent 55%)` }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <span
            className="inline-block mb-4 text-xs font-bold tracking-[0.3em] uppercase"
            style={{ color: accent }}
          >
            What&apos;s Included
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black mb-3"
            style={{
              background: `linear-gradient(135deg, ${accent} 0%, ${accentSecondary} 50%, ${accent} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {system.title}
          </h2>
        </FadeIn>

        {/* Bullets grid */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {system.bullets.map((bullet, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl px-4 py-3 border"
                style={{ background: `${accent}08`, borderColor: `${accent}20` }}
              >
                <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: accent }} />
                <span className="text-sm font-medium" style={{ color: "#d1d5db" }}>
                  {bullet}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Outcome callout */}
        <FadeIn delay={0.2}>
          <div
            className="rounded-2xl px-6 py-5 border text-center"
            style={{
              background: `linear-gradient(135deg, ${accent}10 0%, rgba(9,9,11,0.6) 100%)`,
              borderColor: `${accent}35`,
            }}
          >
            <span
              className="text-xs font-bold tracking-[0.25em] uppercase block mb-2"
              style={{ color: `${accent}99` }}
            >
              Outcome
            </span>
            <p className="text-base sm:text-lg font-semibold" style={{ color: accentSecondary }}>
              {system.outcome}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Main export ───────────────────────────────────────────────────────────── */
export default function ServicePageContent({ service }: { service: ServiceData }) {
  const { accent, accentSecondary } = service;
  const heroVideoUrl =
    service.slug === "media-production" ? mediaProductionVideo :
    service.slug === "podcasting" ? podcastStudioVideo :
    service.slug === "content-creation" ? contentCreationVideo :
    service.heroVideo;

  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      {/* ── Hero video (full screen) ── */}
      <section className="relative flex items-center overflow-hidden" style={{ height: "100vh", width: "100vw" }}>
        {slugHeroImages[service.slug] ? (
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={slugHeroImages[service.slug].src}
              alt={service.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />
          </div>
        ) : (
          <VideoBg
            url={heroVideoUrl}
            fallback="#ffffff"
            opacity={100}
            overlayOpacity={0.22}
            rotate={service.slug === "media-production" ? -90 : 0}
            shift={0}
          />
        )}

        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 60%, ${accent}10 0%, transparent 65%)`,
          }}
        />

        {/* Top border line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: `linear-gradient(to right, transparent, ${accent}60, transparent)`,
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:opacity-100"
              style={{ color: `${accent}99` }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = accent)}
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = `${accent}99`)
              }
            >
              <ArrowLeft size={16} />
              Back to Services
            </Link>
          </motion.div>

          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block mb-5 text-xs font-bold tracking-[0.35em] uppercase"
              style={{ color: accent }}
            >
              Vantage Media Consulting
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.85)" }}
            >
              {service.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="text-xl font-semibold"
              style={{
                background: `linear-gradient(135deg, ${accent}, ${accentSecondary})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {service.tagline}
            </motion.p>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: `${accent}80` }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            className="w-px h-8"
            style={{ background: `linear-gradient(to bottom, ${accent}80, transparent)` }}
          />
        </motion.div>
      </section>

      {/* ── Description section (below video) ── */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #111114 0%, #1a1a1a 100%)" }}
      >
        {/* Accent top border */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(to right, transparent, ${accent}50, transparent)` }}
        />
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${accent}0a 0%, transparent 60%)` }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: description + closing */}
            <FadeIn>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: "#9ca3af" }}
              >
                {service.heroDescription}
              </p>

              {service.heroClosing && (
                <p
                  className="mt-6 text-sm sm:text-base font-semibold italic"
                  style={{ color: accentSecondary }}
                >
                  {service.heroClosing}
                </p>
              )}
            </FadeIn>

            {/* Right: bullets + CTA */}
            <FadeIn delay={0.15}>
              {service.heroBullets && (
                <ul className="mb-8 space-y-4">
                  {service.heroBullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm sm:text-base"
                      style={{ color: "#d1d5db" }}
                    >
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: accent }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              <Link href="/#contact">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-7 py-3.5 rounded-full font-bold text-black"
                  style={{
                    background: `linear-gradient(135deg, ${accent} 0%, ${accentSecondary} 100%)`,
                    boxShadow: `0 4px 24px ${accent}35`,
                  }}
                >
                  Get Started
                </motion.button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── System section ── */}
      <SystemSection system={service.system} accent={accent} accentSecondary={accentSecondary} />

      {/* ── Dynamic sections ── */}
      {service.sections.map((section, i) => {
        const props = { key: i, section, accent, accentSecondary };
        switch (section.type) {
          case "overview":      return <OverviewSection      {...props} />;
          case "features":      return <FeaturesSection      {...props} />;
          case "process":       return <ProcessSection        {...props} />;
          case "results":       return <ResultsSection        {...props} />;
          case "podcast":       return <PodcastSection        {...props} />;
          case "gallery":       return <GallerySection        {...props} />;
          case "photo-gallery": return <PhotoGallerySection   {...props} />;
          default:              return null;
        }
      })}

      {/* ── CTA ── */}
      <CTASection accent={accent} accentSecondary={accentSecondary} />
    </div>
  );
}
