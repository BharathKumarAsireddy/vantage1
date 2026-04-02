export interface ServiceFeatureItem {
  title: string;
  description: string;
  image: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceSection {
  type: "overview" | "features" | "process" | "results" | "podcast" | "gallery" | "photo-gallery";
  title: string;
  subtitle?: string;
  description?: string;
  videoUrl?: string;
  featuredVideoUrl?: string;
  image?: string;
  images?: string[];
  features?: ServiceFeatureItem[];
  processSteps?: ProcessStep[];
  stats?: ServiceStat[];
}

export interface ServiceSystem {
  title: string;
  bullets: string[];
  outcome: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  heroDescription: string;
  heroBullets: string[];
  heroClosing: string;
  accent: string;
  accentSecondary: string;
  heroVideo: string;
  system: ServiceSystem;
  sections: ServiceSection[];
}

const pv = (id: number, fps = 30) =>
  `https://videos.pexels.com/video-files/${id}/${id}-hd_1920_1080_${fps}fps.mp4`;

export const servicesData: ServiceData[] = [
  {
    slug: "crm-implementation",
    title: "CRM Implementation",
    tagline: "Turn Every Lead Into Revenue — Automatically",
    heroDescription:
      "Most businesses don't have a lead problem… they have a follow-up problem. We build and implement a fully customized CRM system designed to capture, track, nurture, and convert every opportunity that enters your business — without anything slipping through the cracks. From automated follow-ups, pipeline tracking, missed-call text back, AI-powered responses, and intelligent routing systems — we eliminate human error and replace it with precision systems that work 24/7.",
    heroBullets: [
      "No more missed leads or slow response times",
      "Increased close rates without increasing workload",
      "Full visibility into your pipeline and revenue flow",
      "Systems that scale with your business, not against it",
    ],
    heroClosing: "We don't just \"set up software\" — we build a revenue engine behind your business.",
    accent: "#C9A84C",
    accentSecondary: "#e8d070",
    heroVideo: pv(3195394),
    system: {
      title: "CRM & Automation Infrastructure",
      bullets: [
        "Full CRM setup and customization",
        "Automated follow-ups (SMS, email, AI)",
        "Pipeline tracking + deal management",
        "IVR & call routing systems",
      ],
      outcome: "Faster response times, higher close rates, zero missed revenue",
    },
    sections: [],
  },

  {
    slug: "growth-digital-marketing",
    title: "Growth & Digital Marketing",
    tagline: "More Customers. More Revenue. Less Guesswork.",
    heroDescription:
      "Growth without a system is just luck. We combine performance-driven paid advertising, full-funnel digital marketing, and conversion optimization into one integrated strategy — designed to bring qualified customers to your business and turn them into revenue. From Google and Meta ads to SEO, social media, email automation, and data-backed CRO, every channel works together to scale your business predictably.",
    heroBullets: [
      "Predictable lead flow and revenue growth",
      "Lower cost per acquisition across every channel",
      "Higher return on ad spend (ROAS) and conversion rates",
      "Scalable systems built for long-term growth",
    ],
    heroClosing: "We don't \"run ads\" or \"do marketing\" — we build acquisition systems that compound over time.",
    accent: "#1A6B3C",
    accentSecondary: "#25A047",
    heroVideo: pv(2795405),
    system: {
      title: "Growth & Acquisition System",
      bullets: [
        "Paid advertising (Meta, Google, LinkedIn)",
        "SEO, content & social media marketing",
        "Landing pages & conversion rate optimisation",
        "Analytics, reporting & funnel optimisation",
      ],
      outcome: "A steady, scalable flow of qualified customers and predictable revenue",
    },
    sections: [],
  },

  {
    slug: "media-production",
    title: "Media Production",
    tagline: "Cinematic Content That Positions You as the Authority",
    heroDescription:
      "In today's market, perception is everything. We produce high-end, cinematic video and photography designed to elevate your brand, build trust instantly, and separate you from your competition. This isn't basic content — this is strategic storytelling. From luxury real estate to business documentaries, brand stories, and high-converting ad creatives — every piece we produce is designed with one goal: Make you look like the obvious choice.",
    heroBullets: [
      "Higher perceived value in your market",
      "Stronger brand authority and credibility",
      "Content that actually converts — not just looks good",
      "A visual presence that attracts higher-end clients",
    ],
    heroClosing: "We don't just shoot content. We engineer perception.",
    accent: "#C9A84C",
    accentSecondary: "#e8d070",
    heroVideo: pv(3195394),
    system: {
      title: "Authority-Driven Media Production",
      bullets: [
        "Brand storytelling + documentary-style content",
        "High-end video + photography production",
        "Ad creatives designed to convert",
        "Social-first visual assets",
      ],
      outcome: "Instant credibility and premium positioning",
    },
    sections: [],
  },

  {
    slug: "content-creation",
    title: "Content Creation",
    tagline: "Content That Drives Attention, Trust, and Sales",
    heroDescription:
      "Posting content without strategy is a waste of time. We create content with intent — designed to stop the scroll, build trust, and move your audience toward action. From scripting, filming, editing, and distribution — we handle the entire process so your brand shows up consistently and powerfully across all platforms. Every piece of content is built around proven frameworks that drive engagement and conversions.",
    heroBullets: [
      "Consistent, high-quality content without the headache",
      "Increased engagement and audience growth",
      "Authority positioning in your niche",
      "More inbound leads and opportunities",
    ],
    heroClosing: "We don't create content for likes — we create content for leverage.",
    accent: "#1A6B3C",
    accentSecondary: "#25A047",
    heroVideo: pv(3045925, 25),
    system: {
      title: "Content Engine",
      bullets: [
        "Strategic content planning",
        "Scripting + filming + editing",
        "Short-form + long-form distribution",
        "Platform-specific optimization",
      ],
      outcome: "Audience growth, engagement, and inbound leads",
    },
    sections: [],
  },
  {
    slug: "podcasting",
    title: "Podcast Studio",
    tagline: "Build Authority, Network, and Influence at Scale",
    heroDescription:
      "The fastest way to build authority in today's world is by owning attention. Our podcast studio gives you the platform to position yourself as a leader in your industry while building powerful relationships with high-level individuals. We handle everything — from production, filming, audio, editing, and distribution — so you can focus on showing up and delivering value. This isn't just content… it's a strategic authority play.",
    heroBullets: [
      "Instant credibility in your industry",
      "High-level networking opportunities",
      "Long-form content that builds deep trust",
      "Repurposed clips for consistent social growth",
    ],
    heroClosing: "Turn conversations into content. Turn content into influence. Turn influence into revenue.",
    accent: "#C9A84C",
    accentSecondary: "#e8d070",
    heroVideo: pv(3044943),
    system: {
      title: "Authority-Driven Media Production",
      bullets: [
        "Professional podcast production + distribution",
        "Brand storytelling + long-form content",
        "Repurposed short-form social assets",
        "Strategic authority positioning in your space",
      ],
      outcome: "Instant credibility and premium positioning in your industry",
    },
    sections: [
      {
        type: "overview",
        title: "A Studio Built for Creators Who Mean Business",
        subtitle: "Professional. Atmospheric. Yours to Book.",
        description:
          "Our podcast studio is more than a room — it's a curated creative environment engineered to inspire great conversations and capture them in pristine quality. From the acoustically treated ceiling panels to the ambient purple mood lighting, every detail has been designed with your production in mind.\n\nWhether you're launching a brand podcast, recording interviews, filming video content, or hosting live streams, our studio gives you the professional backdrop and technical infrastructure to produce content that commands attention.",
        image: "/podcast/podcast-room-4.jpg",
        videoUrl: pv(3195394),
      },
      {
        type: "gallery",
        title: "Inside the Studio",
        subtitle: "See the Space",
        description:
          "A purpose-built content studio where every corner is camera-ready. Explore the space that will become your creative home.",
        videoUrl: pv(3044943),
        images: [
          "/podcast/podcast-room-1.jpg",
          "/podcast/podcast-room-2.jpg",
          "/podcast/podcast-room-3.jpg",
          "/podcast/podcast-room-4.jpg",
          "/podcast/podcast-room-5.jpg",
          "/podcast/podcast-room-6.jpg",
          "/podcast/podcast-room-7.jpg",
        ],
      },
      {
        type: "features",
        title: "Everything You Need to Create",
        subtitle: "Studio Features & Equipment",
        description:
          "The studio is fully equipped and ready to record — so you can focus entirely on your content.",
        videoUrl: pv(2795405),
        features: [
          {
            title: "Professional Acoustic Treatment",
            description:
              "Ceiling and wall acoustic foam panels eliminate echo and unwanted background noise, delivering clean, broadcast-quality audio from the moment you hit record.",
            image: "/podcast/podcast-room-5.jpg",
          },
          {
            title: "Cinematic Studio Lighting",
            description:
              "Multiple professional softbox lights and LED panels give you full control over your visual environment — from warm interview tones to dramatic atmospheric setups.",
            image: "/podcast/podcast-room-1.jpg",
          },
          {
            title: "Luxury Lounge Seating",
            description:
              "Velvet teal lounge chairs and a stylish geometric coffee table create a relaxed, premium aesthetic that makes guests feel comfortable and cameras love.",
            image: "/podcast/podcast-room-6.jpg",
          },
          {
            title: "Atmospheric Mood Design",
            description:
              "Purple accent lighting, lush tropical palms, and a warm wood slat feature wall create a one-of-a-kind visual signature that makes your content instantly recognisable.",
            image: "/podcast/podcast-room-3.jpg",
          },
        ],
      },
      {
        type: "process",
        title: "Book the Studio in 4 Simple Steps",
        subtitle: "From Inquiry to On-Air",
        description:
          "We've made the booking process as smooth as possible so you can spend less time on logistics and more time creating.",
        processSteps: [
          {
            step: "01",
            title: "Enquire & Choose Your Slot",
            description:
              "Reach out via our contact page or call us directly. Tell us your dates, session length, and the type of content you're producing.",
          },
          {
            step: "02",
            title: "Confirm & Pay",
            description:
              "We'll send you a booking confirmation and invoice. Sessions can be booked by the hour, half-day, or full day — with flexible packages available.",
          },
          {
            step: "03",
            title: "Arrive & Set Up",
            description:
              "Arrive at your scheduled time and find the studio fully set up and ready. Our team will walk you through the equipment and lighting options.",
          },
          {
            step: "04",
            title: "Record & Deliver",
            description:
              "Record your content in a world-class environment. We can also provide post-production support — editing, colour grading, and audio mixing — so your content is publish-ready.",
          },
        ],
      },
      {
        type: "results",
        title: "The Studio, By the Numbers",
        subtitle: "Built for Professional Production",
        description:
          "Our podcast studio is engineered to the same standards used by leading broadcasters and content agencies — giving independent creators and brands access to professional-grade infrastructure at accessible rates.",
        videoUrl: pv(3255438, 24),
        stats: [
          { value: "4K", label: "Video Recording Ready" },
          { value: "100%", label: "Acoustically Treated" },
          { value: "360°", label: "Camera-Ready Angles" },
          { value: "1-Day", label: "Fastest Booking Turnaround" },
        ],
      },
    ],
  },
  {
    slug: "real-estate-photography",
    title: "Real Estate Photography",
    tagline: "Make Every Property Stand Out and Sell Faster",
    heroDescription:
      "First impressions sell properties. In today's market, buyers scroll through hundreds of listings before ever stepping through a door — and the only thing that makes them stop is a stunning image. We deliver professional real estate photography that showcases every property at its absolute best: light-filled interiors, dramatic exteriors, breathtaking twilight shots, and crisp aerial perspectives. From luxury homes to commercial spaces, we make your listings impossible to scroll past.",
    heroBullets: [
      "Listings that attract more views and enquiries",
      "Faster sales and stronger offers",
      "Premium presentation for every property type",
      "Fast turnaround so listings go live without delay",
    ],
    heroClosing: "We don't just photograph properties — we sell them before the viewing.",
    accent: "#1A6B3C",
    accentSecondary: "#25A047",
    heroVideo: pv(3195394),
    system: {
      title: "Real Estate Photography",
      bullets: [
        "Interior & exterior photography",
        "Twilight & golden hour sessions",
        "Aerial & drone photography",
        "Fast delivery, edit-ready files",
      ],
      outcome: "More enquiries, faster sales, and stronger offers",
    },
    sections: [
      {
        type: "overview",
        title: "Photography That Sells Properties",
        subtitle: "Premium Visuals. Proven Results.",
        description:
          "The difference between a property that sits on the market and one that sells within days often comes down to one thing: how it looks in photos. We combine technical expertise with an eye for design to capture every property in a way that tells a compelling story — making buyers feel the space before they've ever visited.\n\nFrom staging consultation and lighting setup to post-production editing and final delivery, we handle every detail so your listing looks flawless from day one.",
        image: "/real-estate/79rubber-89.jpg",
        videoUrl: pv(3044943),
      },
      {
        type: "photo-gallery",
        title: "Houses",
        subtitle: "Our Portfolio",
        description:
          "Every property tells a story. From sun-drenched living rooms to perfectly staged bedrooms — our shots make buyers fall in love before the viewing.",
        videoUrl: pv(3044943),
        images: [
          "/real-estate/79rubber-41.jpg",
          "/real-estate/79rubber-42.jpg",
          "/real-estate/79rubber-86.jpg",
          "/real-estate/79rubber-43.jpg",
          "/real-estate/79rubber-88.jpg",
          "/real-estate/79rubber-45.jpg",
          "/real-estate/79rubber-89.jpg",
          "/real-estate/79rubber-46.jpg",
          "/real-estate/79rubber-90.jpg",
        ],
      },
      {
        type: "overview",
        title: "Drone & Aerial Shots",
        subtitle: "See the Full Picture from Above.",
        description:
          "Our licensed drone operators capture breathtaking aerial perspectives that showcase the full scale of a property, its land, pool, and surroundings in a single frame. Aerial shots give buyers a complete picture that no ground-level photography can match — and they make your listing stand out in any market.\n\nFrom low-altitude angles that highlight the roofline and garden to high-altitude wide shots that capture the neighbourhood context, every drone session is planned for maximum visual impact.",
        videoUrl: pv(3195394),
      },
      {
        type: "process",
        title: "How It Works",
        subtitle: "Simple, Fast, and Stress-Free",
        description:
          "We've refined our process to make professional real estate photography as effortless as possible — so your listing is live and generating enquiries as quickly as possible.",
        videoUrl: pv(3255438, 24),
        processSteps: [
          {
            step: "01",
            title: "Book Your Session",
            description:
              "Contact us with your property details, preferred dates, and any specific shots you need. We'll confirm availability and send a booking confirmation within 24 hours.",
          },
          {
            step: "02",
            title: "Pre-Shoot Preparation",
            description:
              "We provide a simple property preparation checklist to ensure your property looks its absolute best on shoot day — from decluttering tips to lighting guidance.",
          },
          {
            step: "03",
            title: "Professional Photo Shoot",
            description:
              "Our photographer arrives on time, fully equipped, and handles everything — lighting setup, composition, staging adjustments — to capture every room and feature at its best.",
          },
          {
            step: "04",
            title: "Edited & Delivered",
            description:
              "Fully edited, high-resolution images delivered within 24–48 hours, ready to upload directly to your listing platform of choice.",
          },
        ],
      },
      {
        type: "results",
        title: "The Impact of Great Photography",
        subtitle: "Numbers That Speak for Themselves",
        description:
          "Professional real estate photography isn't a luxury — it's the highest-ROI investment an agent or vendor can make on any listing.",
        videoUrl: pv(3044943),
        stats: [
          { value: "118%", label: "More Online Views vs Standard Photos" },
          { value: "32%", label: "Faster Time to Sale" },
          { value: "24hr", label: "Edited Image Turnaround" },
          { value: "100+", label: "Properties Shot" },
        ],
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((s) => s.slug);
}
