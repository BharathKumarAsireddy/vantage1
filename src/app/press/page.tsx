import ServiceNavbar from "@/components/layout/ServiceNavbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press | Vantage Media Consulting",
  description: "News and press coverage about Vantage Media Consulting.",
};

export default function PressPage() {
  return (
    <>
      <ServiceNavbar accent="#C9A84C" />
      <main className="min-h-screen" style={{ background: "#1a1a1a" }}>

        {/* Hero */}
        <section className="relative pt-32 pb-20 px-4 sm:px-8 lg:px-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)" }} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block mb-4 text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>In The News</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Press &{" "}
              <span style={{ background: "linear-gradient(135deg, #C9A84C 0%, #e8d070 50%, #C9A84C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Media
              </span>
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#9ca3af" }}>
              Coverage, mentions, and news about Vantage Media Consulting.
            </p>
          </div>
        </section>

        {/* Press content placeholder */}
        <section className="py-16 px-4 sm:px-8 lg:px-14">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl p-16 text-center" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,168,76,0.10)" }}>
              <h2 className="text-xl font-bold text-white mb-3">Press Coverage Coming Soon</h2>
              <p className="text-sm mb-8" style={{ color: "#6b7280" }}>
                We&apos;re actively building our press presence. For media inquiries, partnership opportunities, or interview requests, please reach out directly.
              </p>
              <a
                href="mailto:michael@vantagemediaconsulting.com?subject=Press Inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #C9A84C 0%, #e8d070 100%)", color: "#000" }}
              >
                Media Inquiries
              </a>
            </div>
          </div>
        </section>

        {/* Press kit */}
        <section className="py-8 px-4 sm:px-8 lg:px-14 pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl p-8" style={{ background: "rgba(26,107,60,0.05)", border: "1px solid rgba(26,107,60,0.15)" }}>
              <h3 className="text-lg font-bold text-white mb-2">Press Kit</h3>
              <p className="text-sm mb-4" style={{ color: "#9ca3af" }}>
                Need logos, brand assets, or company information for editorial use? Contact us and we&apos;ll send over our press kit.
              </p>
              <a
                href="mailto:michael@vantagemediaconsulting.com?subject=Press Kit Request"
                className="text-sm font-bold underline"
                style={{ color: "#1A6B3C" }}
              >
                Request Press Kit →
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
