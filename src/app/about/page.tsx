import ServiceNavbar from "@/components/layout/ServiceNavbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Vantage Media Consulting",
  description: "Learn about Vantage Media Consulting — our story, mission, and the values that drive everything we do.",
};

export default function AboutPage() {
  return (
    <>
      <ServiceNavbar accent="#C9A84C" />
      <main className="min-h-screen" style={{ background: "#1a1a1a" }}>

        {/* Hero */}
        <section className="relative pt-32 pb-20 px-4 sm:px-8 lg:px-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)" }} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block mb-4 text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>Our Story</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              About{" "}
              <span style={{ background: "linear-gradient(135deg, #C9A84C 0%, #e8d070 50%, #C9A84C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Vantage
              </span>
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#9ca3af" }}>
              Vantage Media Consulting is a premium media and growth partner for luxury real estate brands, high-end service businesses, and personal brands. We build systems designed to drive real growth — not content for the sake of posting.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 sm:px-8 lg:px-14">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl p-8" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.15)" }}>
              <h2 className="text-2xl font-black text-white mb-4">Our Mission</h2>
              <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                To empower ambitious businesses with the tools, strategy, and creative firepower they need to dominate their market — combining elite CRM systems, data-driven marketing, and premium content production under one roof.
              </p>
            </div>
            <div className="rounded-3xl p-8" style={{ background: "rgba(26,107,60,0.05)", border: "1px solid rgba(26,107,60,0.15)" }}>
              <h2 className="text-2xl font-black text-white mb-4">Our Vision</h2>
              <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                A world where every great business has access to enterprise-grade growth infrastructure — regardless of size. We believe premium strategy and execution should not be reserved for Fortune 500 companies alone.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-4 sm:px-8 lg:px-14">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block mb-3 text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>What We Stand For</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Results First", desc: "Every strategy, campaign, and system we build is tied to measurable outcomes. We don't do vanity metrics." },
                { title: "Premium Quality", desc: "We hold ourselves to the same standard as the luxury brands we serve. Good enough is never good enough." },
                { title: "Radical Transparency", desc: "No black boxes. You always know what we're doing, why, and what it's producing." },
                { title: "Long-Term Thinking", desc: "We build assets and systems that compound over time — not quick wins that fade." },
                { title: "Client Partnership", desc: "Your success is our success. We operate as an extension of your team, not a vendor." },
                { title: "Continuous Innovation", desc: "The media landscape never stops evolving. Neither do we." },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,168,76,0.10)" }}>
                  <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-16 px-4 sm:px-8 lg:px-14">
          <div className="max-w-4xl mx-auto text-center rounded-3xl p-12" style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.07) 0%, rgba(26,107,60,0.07) 100%)", border: "1px solid rgba(201,168,76,0.15)" }}>
            <span className="inline-block mb-3 text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>Headquarters</span>
            <h2 className="text-2xl font-black text-white mb-2">Based in South Florida</h2>
            <p className="text-sm" style={{ color: "#9ca3af" }}>401 W Lantana Rd, Lantana, FL 33462</p>
            <p className="text-sm mt-4" style={{ color: "#6b7280" }}>Serving clients locally, nationally, and globally.</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
