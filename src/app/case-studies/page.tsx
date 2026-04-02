import ServiceNavbar from "@/components/layout/ServiceNavbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Vantage Media Consulting",
  description: "Real results for real clients. See how Vantage Media Consulting drives growth.",
};

const caseStudies = [
  {
    client: "Luxury Real Estate Brand",
    industry: "Real Estate",
    result: "400% increase in qualified leads within 90 days",
    service: "CRM Implementation + Growth Optimization",
    accent: "#C9A84C",
    description: "Implemented a fully automated CRM pipeline, rebuilt their ad funnel, and deployed targeted campaigns across Google and Meta — resulting in a dramatic increase in high-intent buyer inquiries.",
  },
  {
    client: "High-End Service Business",
    industry: "Professional Services",
    result: "55% reduction in cost per customer acquisition",
    service: "Digital Marketing + Content Creation",
    accent: "#1A6B3C",
    description: "Rebuilt their digital marketing strategy from scratch — new content, new targeting, and a streamlined lead nurture sequence that cut their cost per acquisition in half.",
  },
  {
    client: "Personal Brand — Executive Coach",
    industry: "Coaching & Consulting",
    result: "5x return on ad spend across all campaigns",
    service: "Media Production + Paid Advertising",
    accent: "#C9A84C",
    description: "Produced a suite of high-quality video content and launched a multi-channel paid ad strategy that transformed their online presence and tripled their monthly client intake.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <ServiceNavbar accent="#C9A84C" />
      <main className="min-h-screen" style={{ background: "#1a1a1a" }}>

        {/* Hero */}
        <section className="relative pt-32 pb-20 px-4 sm:px-8 lg:px-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)" }} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block mb-4 text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>Proven Results</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Client{" "}
              <span style={{ background: "linear-gradient(135deg, #C9A84C 0%, #e8d070 50%, #C9A84C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Case Studies
              </span>
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#9ca3af" }}>
              We let results do the talking. Here&apos;s a snapshot of what we&apos;ve achieved for clients across industries.
            </p>
          </div>
        </section>

        {/* Stats bar */}
        <section className="py-10 px-4 sm:px-8 lg:px-14">
          <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "400%", label: "Average Lead Volume Increase" },
              { value: "5x", label: "Average Return on Ad Spend" },
              { value: "55%", label: "Lower Cost Per Customer" },
              { value: "100+", label: "Businesses Grown" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center rounded-2xl p-6" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.12)" }}>
                <div className="text-3xl font-black mb-1" style={{ color: "#C9A84C" }}>{value}</div>
                <div className="text-xs" style={{ color: "#6b7280" }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Case studies */}
        <section className="py-16 px-4 sm:px-8 lg:px-14">
          <div className="max-w-5xl mx-auto flex flex-col gap-8">
            {caseStudies.map(({ client, industry, result, service, accent, description }) => (
              <div key={client} className="rounded-3xl p-8 lg:p-10" style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${accent}20` }}>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full font-semibold" style={{ background: `${accent}18`, color: accent }}>{industry}</span>
                  <span className="text-xs px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.05)", color: "#9ca3af" }}>{service}</span>
                </div>
                <h2 className="text-xl font-black text-white mb-2">{client}</h2>
                <p className="text-sm font-bold mb-4" style={{ color: accent }}>{result}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-8 lg:px-14">
          <div className="max-w-3xl mx-auto text-center rounded-3xl p-12" style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.07) 0%, rgba(26,107,60,0.07) 100%)", border: "1px solid rgba(201,168,76,0.15)" }}>
            <h2 className="text-2xl font-black text-white mb-3">Ready to Be Our Next Success Story?</h2>
            <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>Let&apos;s talk about what&apos;s possible for your business.</p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #C9A84C 0%, #e8d070 100%)", color: "#000" }}
            >
              Get In Touch
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
