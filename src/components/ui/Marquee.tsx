"use client";

const items = [
  "Media Strategy",
  "CRM Implementation",
  "Growth & Digital Marketing",
  "Podcast Studio",
  "Media Production",
  "Creative Consulting",
  "Audience Growth",
  "Content Strategy",
  "Performance Media",
  "Brand Identity",
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  // Duplicate items so the loop is seamless
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden py-3 mask-fade-x">
      <ul
        className={`flex gap-0 shrink-0 min-w-full ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        aria-hidden
      >
        {doubled.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-5 px-6 whitespace-nowrap text-xs font-bold tracking-[0.25em] uppercase select-none"
            style={{ color: i % 2 === 0 ? "#C9A84C" : "#4b5563" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: i % 4 === 0 ? "#1A6B3C" : i % 4 === 2 ? "#C9A84C" : "#333" }}
            />
            {item}
          </li>
        ))}
      </ul>
      {/* Second copy for seamless loop */}
      <ul
        className={`flex gap-0 shrink-0 min-w-full ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        aria-hidden
      >
        {doubled.map((item, i) => (
          <li
            key={`b-${i}`}
            className="flex items-center gap-5 px-6 whitespace-nowrap text-xs font-bold tracking-[0.25em] uppercase select-none"
            style={{ color: i % 2 === 0 ? "#C9A84C" : "#4b5563" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: i % 4 === 0 ? "#1A6B3C" : i % 4 === 2 ? "#C9A84C" : "#333" }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden py-2" style={{ borderTop: "1px solid rgba(201,168,76,0.08)", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
        style={{ background: "linear-gradient(to right, #1a1a1a, transparent)" }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
        style={{ background: "linear-gradient(to left, #1a1a1a, transparent)" }} />

      <MarqueeRow />
    </div>
  );
}
