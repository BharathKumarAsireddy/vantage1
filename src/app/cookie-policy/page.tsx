import ServiceNavbar from "@/components/layout/ServiceNavbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Vantage Media Consulting",
  description: "Cookie Policy for Vantage Media Consulting.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <ServiceNavbar accent="#C9A84C" />
      <main className="min-h-screen" style={{ background: "#1a1a1a" }}>
        <section className="relative pt-32 pb-20 px-4 sm:px-8 lg:px-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)" }} />
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="inline-block mb-4 text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>Legal</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Cookie Policy</h1>
            <p className="text-sm mb-10" style={{ color: "#6b7280" }}>Last updated: March 2026</p>

            <div className="prose prose-invert max-w-none space-y-8 text-sm leading-relaxed" style={{ color: "#9ca3af" }}>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">1. What Are Cookies</h2>
                <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners. Cookies do not harm your device and cannot access any other information on your computer.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">2. How We Use Cookies</h2>
                <p>Vantage Media Consulting uses cookies to:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
                  <li>Ensure the website functions correctly</li>
                  <li>Remember your preferences and settings</li>
                  <li>Understand how visitors use and interact with our website</li>
                  <li>Improve the performance and user experience of our website</li>
                  <li>Measure the effectiveness of our marketing campaigns</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">3. Types of Cookies We Use</h2>
                <div className="space-y-4 mt-3">
                  {[
                    { name: "Strictly Necessary Cookies", desc: "These cookies are essential for the website to function and cannot be switched off. They are usually set in response to actions you take, such as filling in forms." },
                    { name: "Analytics Cookies", desc: "We use Google Analytics to understand how visitors interact with our website. These cookies collect information anonymously and help us improve the site." },
                    { name: "Functional Cookies", desc: "These cookies allow the website to remember choices you make (such as form inputs) and provide enhanced features." },
                    { name: "Marketing Cookies", desc: "These cookies may be set by our advertising partners via our site. They may be used to build a profile of your interests and show relevant advertisements on other sites." },
                  ].map(({ name, desc }) => (
                    <div key={name} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,168,76,0.08)" }}>
                      <h3 className="font-semibold text-white mb-1">{name}</h3>
                      <p>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">4. Third-Party Cookies</h2>
                <p>Some pages on our website may contain content from third-party services such as Google Maps, YouTube, or social media platforms. These services may set their own cookies. We do not control these cookies and recommend reviewing the privacy and cookie policies of these third parties.</p>
                <p className="mt-3">Our contact form is powered by GoHighLevel (LeadConnector). Their cookie and data practices are governed by their own privacy policy.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">5. Managing Cookies</h2>
                <p>You can control and manage cookies through your browser settings. Most browsers allow you to:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
                  <li>View cookies stored on your device</li>
                  <li>Delete some or all cookies</li>
                  <li>Block third-party cookies</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block all cookies from being set</li>
                </ul>
                <p className="mt-3">Please be aware that restricting cookies may impact the functionality of our website. Instructions for managing cookies in popular browsers:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
                  <li>Google Chrome: Settings &rarr; Privacy and Security &rarr; Cookies</li>
                  <li>Safari: Preferences &rarr; Privacy</li>
                  <li>Firefox: Options &rarr; Privacy &amp; Security</li>
                  <li>Edge: Settings &rarr; Cookies and Site Permissions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">6. Changes to This Policy</h2>
                <p>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. Any changes will be posted on this page with an updated revision date.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">7. Contact Us</h2>
                <p>If you have any questions about our use of cookies, please contact us at:</p>
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
