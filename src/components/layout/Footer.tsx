"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import logoImg from "@/Assets/Screenshot 2026-03-16 161214.png";

const serviceLinks = [
  { label: "Growth & Digital Marketing", href: "/services/growth-digital-marketing" },
  { label: "CRM Implementation", href: "/services/crm-implementation" },
  { label: "Podcast Studio", href: "/services/podcasting" },
  { label: "Media Production", href: "/services/media-production" },
  { label: "Content Creation", href: "/services/content-creation" },
  { label: "Real Estate Photography", href: "/services/real-estate-photography" },
];

const links = {
  Company: [
    { label: "About Us",     href: "/about" },
    { label: "Our Team",     href: "/team" },
    { label: "Careers",      href: "/careers" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Press",        href: "/press" },
  ],
  Legal: [
    { label: "Privacy Policy",   href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy",    href: "/cookie-policy" },
  ],
};


export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{ background: "linear-gradient(to right, transparent, #C9A84C, #1A6B3C, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* ── Brand ── */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Image
                src={logoImg}
                alt="Vantage Media Consulting"
                className="h-14 w-auto drop-shadow-lg"
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6" style={{ color: "#6b7280" }}>
              Premium media and growth partner for luxury real estate brands,
              high-end service businesses, and personal brands. We build systems
              designed to drive growth — not content for the sake of posting.
            </p>
          </div>

          {/* ── Services links ── */}
          <div>
            <h4
              className="font-bold text-xs tracking-[0.2em] uppercase mb-4"
              style={{ color: "#C9A84C" }}
            >
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm flex items-center gap-1 group transition-colors duration-200"
                    style={{ color: "#6b7280" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#C9A84C")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#6b7280")
                    }
                  >
                    {label}
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Other links ── */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4
                className="font-bold text-xs tracking-[0.2em] uppercase mb-4"
                style={{ color: "#C9A84C" }}
              >
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm flex items-center gap-1 group transition-colors duration-200"
                      style={{ color: "#6b7280" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "#C9A84C")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "#6b7280")
                      }
                    >
                      {label}
                      <ArrowUpRight
                        size={11}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
          style={{ borderTop: "1px solid rgba(201,168,76,0.08)", color: "#4b5563" }}
        >
          <p>© {new Date().getFullYear()} Vantage Media Consulting. All rights reserved.</p>
          <p
            className="font-semibold"
            style={{
              background: "linear-gradient(135deg, #1A6B3C, #C9A84C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Crafted with precision & purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
