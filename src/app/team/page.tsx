import ServiceNavbar from "@/components/layout/ServiceNavbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Vantage Media Consulting",
  description: "Meet the experts behind Vantage Media Consulting.",
};

const team = [
  {
    name: "Michael",
    role: "Founder & CEO",
    bio: "Visionary strategist with deep expertise in CRM systems, media production, and growth marketing. Michael founded Vantage to give ambitious businesses access to enterprise-grade growth infrastructure.",
    accent: "#C9A84C",
  },
];

export default function TeamPage() {
  return (
    <>
      <ServiceNavbar accent="#C9A84C" />
      <main className="min-h-screen" style={{ background: "#1a1a1a" }}>

        {/* Hero */}
        <section className="relative pt-32 pb-20 px-4 sm:px-8 lg:px-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)" }} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block mb-4 text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>The People</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Meet Our{" "}
              <span style={{ background: "linear-gradient(135deg, #C9A84C 0%, #e8d070 50%, #C9A84C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Team
              </span>
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#9ca3af" }}>
              A small, elite team of strategists, creatives, and technologists united by one goal: delivering exceptional results for every client we work with.
            </p>
          </div>
        </section>

        {/* Team grid */}
        <section className="py-16 px-4 sm:px-8 lg:px-14">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map(({ name, role, bio, accent }) => (
              <div key={name} className="rounded-3xl p-8 flex flex-col gap-4" style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${accent}22` }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black" style={{ background: `${accent}18`, color: accent }}>
                  {name[0]}
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">{name}</h3>
                  <p className="text-xs font-semibold tracking-wider uppercase mt-0.5" style={{ color: accent }}>{role}</p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-16 px-4 sm:px-8 lg:px-14">
          <div className="max-w-3xl mx-auto text-center rounded-3xl p-12" style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.07) 0%, rgba(26,107,60,0.07) 100%)", border: "1px solid rgba(201,168,76,0.15)" }}>
            <h2 className="text-2xl font-black text-white mb-3">Want to Join the Team?</h2>
            <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>We&apos;re always looking for exceptional talent. Check out our open positions.</p>
            <a
              href="/careers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #C9A84C 0%, #e8d070 100%)", color: "#000" }}
            >
              View Careers
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
