export type PortfolioCategorySlug =
  | "all"
  | "mobile-apps"
  | "dashboards"
  | "websites"
  | "ai-agents";

export type PortfolioCategory = {
  label: string;
  slug: PortfolioCategorySlug;
};

export type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
  href: string;
  category: Exclude<PortfolioCategorySlug, "all">;
  fullDescription?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  technologies?: string[];
  gallery?: string[];
};

const caseStudyPath = "/projects/index.html";

export const portfolioCategories: PortfolioCategory[] = [
  { label: "All", slug: "all" },
  { label: "Mobile Apps", slug: "mobile-apps" },
  { label: "Dashboards", slug: "dashboards" },
  { label: "Websites", slug: "websites" },
  { label: "AI Agents", slug: "ai-agents" },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "health-track-pro",
    title: "HealthTrack Pro",
    description: "AI health monitoring",
    image:
      "https://i.pinimg.com/736x/26/04/fb/2604fb77ef86e0f51ef97f46fec1ca6f.jpg",
    alt: "Health monitoring UI",
    tags: ["React Native"],
    href: "/projects/mobile-pro",
    category: "mobile-apps",
    fullDescription: "  Pro is an innovative mobile application that leverages artificial intelligence to monitor and track user health metrics in real-time.",
    challenge: "Users struggled to maintain consistent health monitoring routines and lacked actionable insights from their health data.",
    solution: "Built a React Native app with AI-powered analytics that provides personalized health recommendations and automated reminders.",
    results: ["40% increase in user engagement", "Reduced health monitoring time by 60%", "5-star rating on app stores"],
    technologies: ["React Native", "Python", "TensorFlow", "Firebase"],
    gallery: [
      "https://i.pinimg.com/1200x/a3/5c/33/a35c33e8813ed8b6bfe1ec40e9d03ddf.jpg",
    ],
  },
  {
    id: "law-firm-website",
    title: "Law Firm website",
    description: "Smart productivity app",
    image:
      "https://i.pinimg.com/736x/37/29/95/372995bdd8c28323c991a490af676b6a.jpg",
    alt: "Law firm website UI",
    tags: ["React", "Next.js"],
    href: "/projects/law-firm-website",
    category: "websites",
    fullDescription: "A professional legal services website designed to showcase expertise and streamline client inquiries with AI-powered scheduling.",
    challenge: "Law firms needed a modern online presence that conveyed professionalism while automating client intake processes.",
    solution: "Developed a Next.js website with integrated CRM functionality and AI chatbot for initial consultations.",
    results: ["50% increase in qualified leads", "Reduced response time from 24h to 2h", "Mobile conversion rate increased by 35%"],
    technologies: ["Next.js", "React", "TypeScript", "MongoDB"],
  },
  {
    id: "restaurant-website",
    title: "Restaurant Website",
    description: "Enterprise site with 3D",
    image:
      "https://i.pinimg.com/736x/47/a9/99/47a9993c7d44c7f864533e6ba8f171c1.jpg",
    alt: "Restaurant website UI",
    tags: ["Next.js", "Framer", "TypeScript"],
    href: "/projects/restaurant-website",
    category: "websites",
    fullDescription: "An immersive restaurant website featuring 3D menu visualization, online reservations, and delivery integration.",
    challenge: "Restaurants needed to showcase their dining experience digitally and streamline reservations and orders.",
    solution: "Created an interactive Next.js website with 3D menu navigation, real-time reservation system, and integrated payment processing.",
    results: ["3x increase in online reservations", "200% boost in online orders", "Average order value increased by 25%"],
    technologies: ["Next.js", "Framer Motion", "Three.js", "Stripe"],
  },
  {
    id: "beach-restore-website",
    title: "Beach Restore Website",
    description: "Environmental conservation and beach cleanup platform",
    image:
      "https://i.pinimg.com/736x/51/b5/e1/51b5e11f81afa5eb593192eb7d4a1093.jpg",
    alt: "Beach restore website UI",
    tags: ["React", "TypeScript", "MySQL"],
    href: "/projects/beach-restore-website",
    category: "websites",
    fullDescription: "Beach Restore is a comprehensive platform dedicated to environmental conservation, enabling users to organize beach cleanup events, track impact, and contribute to marine ecosystem restoration.",
    challenge: "Environmental organizations struggled to coordinate volunteers and track conservation impact across multiple beach cleanup initiatives.",
    solution: "Built a React website with TypeScript for type safety, integrated with MySQL backend for event management, volunteer tracking, and real-time impact metrics.",
    results: ["500+ beach cleanups organized", "15,000+ tons of waste removed", "Engaged 50,000+ volunteers worldwide"],
    technologies: ["React", "TypeScript", "MySQL", "Node.js", "Tailwind CSS"],
  },
  {
    id: "quantum-analytics",
    title: "Quantum Analytics",
    description: "Scientific data visualization suite for research teams.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    alt: "Scientific data charts",
    tags: ["Vue.js", "WebGL"],
    href: "/projects/quantum-analytics",
    category: "dashboards",
    fullDescription: "Advanced scientific data visualization platform enabling researchers to explore complex datasets with interactive 3D visualizations.",
    challenge: "Researchers struggled with legacy visualization tools that couldn't handle large datasets efficiently.",
    solution: "Developed a Vue.js application with WebGL rendering for real-time 3D data visualization and statistical analysis.",
    results: ["10x faster data processing", "Published 15 peer-reviewed papers", "Used by 50+ research institutions"],
    technologies: ["Vue.js", "WebGL", "Three.js", "Python"],
  },
  {
    id: "ai-agent-real-estate",
    title: "AI agent for Real estate",
    description:
      "automatically responds to client inquiries, schedules property viewings",
    image:
      "https://i.pinimg.com/736x/53/96/5d/53965d3866ac2ba4a22f1eba65e8b1f9.jpg",
    alt: "CRM dashboard mock",
    tags: ["Next.js", "LangChain"],
    href: "/projects/ai-agent-real-estate",
    category: "ai-agents",
    fullDescription: "Intelligent real estate assistant that handles inquiries, schedules viewings, and provides property recommendations 24/7.",
    challenge: "Real estate agents were overwhelmed with inquiries and spent excessive time on administrative tasks.",
    solution: "Created an AI agent using LangChain that understands natural language, manages calendars, and provides instant property matches.",
    results: ["90% of inquiries handled automatically", "32 hours saved per week per agent", "Lead qualification accuracy: 94%"],
    technologies: ["Next.js", "LangChain", "OpenAI GPT-4", "PostgreSQL"],
  },
  {
    id: "movie-app",
    title: "CineFlow",
    description: "Movie discovery and streaming companion app",
    image:
      "https://i.pinimg.com/736x/24/51/f5/2451f5a9ffd78e915c22a1c3fd18262a.jpg",
    alt: "Movie streaming app UI",
    tags: ["React Native", "API Integration"],
    href: "/projects/movie-app",
    category: "mobile-apps",
    fullDescription: "CineFlow is a comprehensive movie discovery and tracking app that helps users find, watch, and share movies with beautiful recommendations and social features.",
    challenge: "Movie enthusiasts had fragmented experiences across multiple apps and needed a unified platform to discover, track, and discuss films.",
    solution: "Built a React Native app with TMDB API integration, personalized recommendations, watchlists, and social sharing features.",
    results: ["50K+ downloads", "4.7-star rating", "Users save 30+ minutes per week on discovery"],
    technologies: ["React Native", "TMDB API", "Firebase", "Redux"],
  },
  {
    id: "ecommerce-mobile",
    title: "ShopHub Mobile",
    description: "Full-featured e-commerce mobile platform",
    image:
      "https://i.pinimg.com/736x/14/3b/ca/143bca896dab07f1ea317f6e4423bfb0.jpg",
    alt: "E-commerce mobile app UI",
    tags: ["react native", "Payment Integration"],
    href: "/projects/ecommerce-mobile",
    category: "mobile-apps",
    fullDescription: "ShopHub is a robust e-commerce mobile application offering seamless shopping experience with advanced search, personalized recommendations, and secure checkout.",
    challenge: "Mobile shoppers needed a fast, intuitive platform with reliable payment processing and real-time inventory updates.",
    solution: "Developed a Flutter app with Stripe integration, real-time notifications, wishlist management, and AI-powered product recommendations.",
    results: ["200K+ users", "Average cart value increased by 45%", "5.8K transactions per day"],
    technologies: ["Flutter", "Stripe", "Firebase", "SQLite"],
  },
  {
    id: "real-estate-mobile",
    title: "PropertyNest",
    description: "Smart real estate property discovery app",
    image:
      "https://i.pinimg.com/736x/d5/3d/d6/d53dd699d893c43fa27eda1fc220b1c8.jpg",
    alt: "Real estate mobile app UI",
    tags: ["React Native", "Maps API"],
    href: "/projects/real-estate-mobile",
    category: "mobile-apps",
    fullDescription: "PropertyNest is an intelligent real estate app that uses location-based search, virtual tours, and AI matching to help users find their perfect property.",
    challenge: "Property hunters spent hours browsing listings without smart filtering and lacked immersive property viewing experiences.",
    solution: "Created a React Native app with Google Maps integration, 3D virtual tours, smart filters, mortgage calculators, and agent messaging.",
    results: ["150K+ listings accessed monthly", "3.2M virtual tours viewed", "Average listing view time: 4.5 minutes"],
    technologies: ["React Native", "Google Maps", "Firebase", "WebRTC"],
  },
  {
    id: "portfolio-mobile",
    title: "PortfolioHub",
    description: "Creative portfolio and project showcase app",
    image:
      "https://i.pinimg.com/736x/d6/e7/f8/d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1.jpg",
    alt: "Portfolio mobile app UI",
    tags: ["Flutter", "Cloud Sync"],
    href: "/projects/portfolio-mobile",
    category: "mobile-apps",
    fullDescription: "PortfolioHub empowers creatives to build stunning mobile portfolios, showcase work, receive feedback, and connect with clients and collaborators.",
    challenge: "Creatives and freelancers needed mobile-first portfolio solutions to showcase work on-the-go with real-time collaboration features.",
    solution: "Developed a Flutter app with cloud storage, real-time collaboration, client feedback tools, and integrated messaging for seamless client communication.",
    results: ["75K+ creators", "5K+ portfolios published", "Clients found 65% faster"],
    technologies: ["Flutter", "Firebase Cloud", "WebSockets", "Image Optimization"],
  },
  {
    id: "hotel-ai-agent",
    title: "Hotel Ai Agent",
    description:
      "automated virtual assistant that instantly handles guest inquiries, bookings, and support across platforms to improve customer experience.",
    image:
      "https://i.pinimg.com/736x/74/12/3c/74123c70e165451107cafc0450f8ae8e.jpg",
    alt: "Enterprise landing page",
    tags: ["Next.js", "N8N"],
    href: "/projects/hotel-ai-agent",
    category: "ai-agents",
    fullDescription: "24/7 AI concierge service for hotels that handles bookings, provides local recommendations, and resolves guest issues instantly.",
    challenge: "Hotels had high staff turnover and couldn't provide 24/7 guest support with consistent quality.",
    solution: "Implemented an AI agent using N8N and GPT-4 that integrates with property management and booking systems.",
    results: ["Guest satisfaction increased to 98%", "Support costs reduced by 60%", "Bookings through AI increased by 45%"],
    technologies: ["Next.js", "N8N", "OpenAI", "Webhook APIs"],
  },
  {
    id: "studio-x",
    title: "Studio X",
    description: "Creative studio portfolio with cinematic motion.",
    image:
      "https://i.pinimg.com/736x/c2/06/0c/c2060c2609f6e33b5d839086434c771c.jpg",
    alt: "Creative agency site",
    tags: ["Astro", "GSAP"],
    href: "/projects/studio-x",
    category: "websites",
    fullDescription: "Stunning creative agency portfolio showcasing design and motion work with cutting-edge web technology.",
    challenge: "Creative agencies needed a portfolio that matched their exceptional design work with equally impressive web experience.",
    solution: "Built an Astro site with GSAP animations, optimized performance, and Framer Motion interactions.",
    results: ["100 Lighthouse score", "30+ high-value clients acquired", "Featured in design publications"],
    technologies: ["Astro", "GSAP", "Framer Motion", "WebGL"],
  },
  {
    id: "ecom-pulse",
    title: "EcomPulse",
    description: "Fast headless commerce experience for DTC brands.",
    image:
      "https://i.pinimg.com/736x/93/a3/fc/93a3fc5f4fe87125b6579784e9496c06.jpg",
    alt: "Ecommerce storefront UI",
    tags: ["Shopify", "Vercel"],
    href: "/projects/ecom-pulse",
    category: "websites",
    fullDescription: "High-performance e-commerce platform built on Shopify enabling direct-to-consumer brands to sell globally.",
    challenge: "DTC brands needed fast, scalable e-commerce solutions with superior conversion rates.",
    solution: "Built a headless Shopify storefront on Vercel with optimized checkout and personalization features.",
    results: ["Average order value +28%", "Conversion rate 3.5%", "Page load time under 1s"],
    technologies: ["Shopify", "Next.js", "Vercel", "Algolia"],
  },
  {
    id: "learn-flow",
    title: "LearnFlow",
    description: "Interactive learning platform with cohort tools.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    alt: "Edtech experience",
    tags: ["Remix", "Stripe"],
    href: "/projects/learn-flow",
    category: "websites",
    fullDescription: "Online learning platform connecting instructors with students through interactive courses and collaborative learning cohorts.",
    challenge: "EdTech platforms lacked engaging community features and had high student dropout rates.",
    solution: "Created a Remix-based platform with real-time collaboration, live coding environments, and community features.",
    results: ["95% course completion rate", "$2M ARR", "12K+ active learners"],
    technologies: ["Remix", "Stripe", "Socket.io", "PostgreSQL"],
  },
  {
    id: "intelli-agent",
    title: "IntelliAgent",
    description: "Autonomous support agent for customer operations.",
    image:
      "https://i.pinimg.com/736x/55/3a/8c/553a8cf3426a3414dd4447bfcaf931cd.jpg",
    alt: "AI agent dashboard",
    tags: ["N8N", "LangChain"],
    href: "/projects/intelli-agent",
    category: "ai-agents",
    fullDescription: "Comprehensive AI-powered customer support automation platform that handles tickets, escalations, and complex queries.",
    challenge: "Support teams spent 70% of time on repetitive tasks with inconsistent quality and long resolution times.",
    solution: "Built an autonomous agent using LangChain that understands context, escalates appropriately, and learns from feedback.",
    results: ["85% first-contact resolution", "Response time: 2 minutes", "CSAT score: 94%"],
    technologies: ["LangChain", "N8N", "OpenAI", "Vector DB"],
  },
  {
    id: "content-engine",
    title: "ContentEngine",
    description: "AI content automation for marketing teams.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    alt: "AI marketing visuals",
    tags: ["Llama 3", "FastAPI"],
    href: "/projects/content-engine",
    category: "ai-agents",
    fullDescription: "AI-powered content generation platform that creates high-quality marketing content at scale with brand consistency.",
    challenge: "Marketing teams spent weeks creating content and struggled with consistency across channels.",
    solution: "Built a FastAPI service using Llama 3 that generates SEO-optimized content, social posts, and email campaigns in seconds.",
    results: ["Content creation time: 5-10 minutes", "100K+ pieces generated", "Engagement increased 45%"],
    technologies: ["Llama 3", "FastAPI", "Vector Search", "PostgreSQL"],
  },
];
