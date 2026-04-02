import ServiceNavbar from "@/components/layout/ServiceNavbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Vantage Media Consulting",
  description: "Privacy Policy for Vantage Media Consulting.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <ServiceNavbar accent="#C9A84C" />
      <main className="min-h-screen" style={{ background: "#1a1a1a" }}>
        <section className="relative pt-32 pb-20 px-4 sm:px-8 lg:px-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)" }} />
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="inline-block mb-4 text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>Legal</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Privacy Policy</h1>
            <p className="text-sm mb-10" style={{ color: "#6b7280" }}>Last updated: March 2026</p>

            <div className="prose prose-invert max-w-none space-y-8 text-sm leading-relaxed" style={{ color: "#9ca3af" }}>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">1. Information We Collect</h2>
                <p>Vantage Media Consulting (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects information you provide directly when you fill out our contact form, request a consultation, or communicate with us. This may include your name, email address, phone number, company name, and the content of your messages.</p>
                <p className="mt-3">We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
                  <li>Respond to your inquiries and provide our services</li>
                  <li>Send you relevant information about our services (with your consent)</li>
                  <li>Improve our website and user experience</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud and unauthorized use</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">3. Sharing of Information</h2>
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided those parties agree to keep your information confidential.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">4. Cookies</h2>
                <p>Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how visitors use our site. You can control cookie settings through your browser. For more details, see our Cookie Policy.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">5. Third-Party Services</h2>
                <p>Our website may use third-party services including Google Analytics, GoHighLevel (GHL) for form processing, and Google Maps. These services have their own privacy policies governing the use of your information.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">6. Data Security</h2>
                <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of internet transmission is 100% secure.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">7. Data Retention</h2>
                <p>We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">8. Your Rights</h2>
                <p>You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, contact us at michael@vantagemediaconsulting.com.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">9. Children&apos;s Privacy</h2>
                <p>Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">10. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated date.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">11. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                <div className="mt-3 rounded-2xl p-5" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.12)" }}>
                  <p className="font-semibold text-white">Vantage Media Consulting</p>
                  <p>401 W Lantana Rd, Lantana, FL 33462</p>
                  <p>Email: <a href="mailto:michael@vantagemediaconsulting.com" style={{ color: "#C9A84C" }}>michael@vantagemediaconsulting.com</a></p>
                  <p>Phone: <a href="tel:+15086123433" style={{ color: "#C9A84C" }}>(508) 612-3433</a></p>
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
