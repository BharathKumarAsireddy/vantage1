import ServiceNavbar from "@/components/layout/ServiceNavbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Vantage Media Consulting",
  description: "Terms of Service for Vantage Media Consulting.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <ServiceNavbar accent="#C9A84C" />
      <main className="min-h-screen" style={{ background: "#1a1a1a" }}>
        <section className="relative pt-32 pb-20 px-4 sm:px-8 lg:px-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)" }} />
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="inline-block mb-4 text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>Legal</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Terms of Service</h1>
            <p className="text-sm mb-10" style={{ color: "#6b7280" }}>Last updated: March 2026</p>

            <div className="prose prose-invert max-w-none space-y-8 text-sm leading-relaxed" style={{ color: "#9ca3af" }}>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">1. Acceptance of Terms</h2>
                <p>By accessing or using the website of Vantage Media Consulting (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) at vantagemediaconsulting.com, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">2. Services</h2>
                <p>Vantage Media Consulting provides media consulting, CRM implementation, digital marketing, content creation, media production, and podcast studio rental services. The specific scope, deliverables, pricing, and timeline for any engagement will be outlined in a separate service agreement or statement of work signed by both parties.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">3. Website Use</h2>
                <p>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You may not:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
                  <li>Use the website in any way that violates applicable laws or regulations</li>
                  <li>Transmit any unsolicited or unauthorized advertising material</li>
                  <li>Attempt to gain unauthorized access to any part of the website</li>
                  <li>Engage in data scraping, crawling, or harvesting without permission</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">4. Intellectual Property</h2>
                <p>All content on this website — including text, graphics, logos, images, and software — is the property of Vantage Media Consulting or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">5. Disclaimer of Warranties</h2>
                <p>This website and its content are provided &ldquo;as is&rdquo; without warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">6. Limitation of Liability</h2>
                <p>To the fullest extent permitted by law, Vantage Media Consulting shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, this website or our services.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">7. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">8. Privacy</h2>
                <p>Your use of our website is also governed by our Privacy Policy, which is incorporated into these Terms by reference.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">9. Governing Law</h2>
                <p>These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Palm Beach County, Florida.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">10. Changes to Terms</h2>
                <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website following changes constitutes your acceptance of the revised Terms.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">11. Contact</h2>
                <div className="mt-3 rounded-2xl p-5" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.12)" }}>
                  <p className="font-semibold text-white">Vantage Media Consulting</p>
                  <p>401 W Lantana Rd, Lantana, FL 33462</p>
                  <p>Email: <a href="mailto:michael@vantagemediaconsulting.com" style={{ color: "#C9A84C" }}>michael@vantagemediaconsulting.com</a></p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
