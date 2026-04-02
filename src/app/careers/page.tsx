import ServiceNavbar from "@/components/layout/ServiceNavbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Vantage Media Consulting",
  description: "Join the Vantage Media Consulting team. Explore open positions and build your career with us.",
};

const openings = [
  { title: "CRM Specialist", type: "Full-Time", location: "Lantana, FL / Remote", dept: "Operations" },
  { title: "Digital Marketing Manager", type: "Full-Time", location: "Lantana, FL / Hybrid", dept: "Marketing" },
  { title: "Video Producer", type: "Full-Time", location: "Lantana, FL", dept: "Media Production" },
  { title: "Social Media Strategist", type: "Contract", location: "Remote", dept: "Content" },
];

export default function CareersPage() {
  return (
    <>
      <ServiceNavbar accent="#C9A84C" />
      <main className="min-h-screen" style={{ background: "#1a1a1a" }}>

        {/* Hero */}
        <section className="relative pt-32 pb-20 px-4 sm:px-8 lg:px-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(26,107,60,0.08) 0%, transparent 70%)" }} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block mb-4 text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#1A6B3C" }}>Join Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Build Something{" "}
              <span style={{ background: "linear-gradient(135deg, #1A6B3C 0%, #25A047 50%, #1A6B3C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Extraordinary
              </span>
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#9ca3af" }}>
              We&apos;re a lean, high-performance team. If you&apos;re exceptional at what you do and want to work with ambitious clients on meaningful projects, we want to hear from you.
            </p>
          </div>
        </section>

        {/* Why work here */}
        <section className="py-12 px-4 sm:px-8 lg:px-14">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "High Impact Work", desc: "Every project moves the needle for real businesses. No busywork." },
              { title: "Competitive Pay", desc: "We compensate at the top of market and reward exceptional performance." },
              { title: "Growth Culture", desc: "We invest in your skills, tools, and professional development." },
            ].map(({ title, desc }) => (
              <div key={title} className="rounded-2xl p-6 text-center" style={{ background: "rgba(26,107,60,0.05)", border: "1px solid rgba(26,107,60,0.15)" }}>
                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-sm" style={{ color: "#6b7280" }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open positions */}
        <section className="py-16 px-4 sm:px-8 lg:px-14">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <span className="inline-block mb-3 text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>Open Positions</span>
              <h2 className="text-3xl font-black text-white">Current Openings</h2>
            </div>
            <div className="flex flex-col gap-4">
              {openings.map(({ title, type, location, dept }) => (
                <div key={title} className="rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group transition-all duration-200 hover:scale-[1.01]"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,168,76,0.10)" }}>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">{title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C" }}>{dept}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.05)", color: "#9ca3af" }}>{type}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.05)", color: "#9ca3af" }}>{location}</span>
                    </div>
                  </div>
                  <a
                    href="mailto:michael@vantagemediaconsulting.com?subject=Job Application"
                    className="flex-shrink-0 text-xs font-bold px-5 py-2 rounded-full transition-all hover:scale-105"
                    style={{ background: "linear-gradient(135deg, #C9A84C 0%, #e8d070 100%)", color: "#000" }}
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
            <p className="text-sm mt-8 text-center" style={{ color: "#6b7280" }}>
              Don&apos;t see the right role?{" "}
              <a href="mailto:michael@vantagemediaconsulting.com" className="underline" style={{ color: "#C9A84C" }}>
                Send us your resume
              </a>{" "}
              and tell us how you can add value.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
