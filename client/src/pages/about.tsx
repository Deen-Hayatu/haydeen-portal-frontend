import { Link } from "wouter";
import { 
  Globe, 
  Shield, 
  Users, 
  Clock, 
  ArrowRight, 
  Lock, 
  Database,
  BookOpen,
  Building2,
  Briefcase,
  Newspaper,
  Lightbulb,
  Calendar
} from "lucide-react";
import FlipCard from "@/components/ui/flip-card";
import HeadTags from "@/components/seo/head-tags";

const philosophyPillars = [
  {
    icon: Globe,
    title: "Built for Local Constraints",
    description: "Low-bandwidth ready, offline-capable, USSD fallback for areas without smartphones.",
  },
  {
    icon: Shield,
    title: "Production-Grade from Day One",
    description: "Vercel Edge, managed Postgres, encryption at rest, and role-based access. No retrofitting needed.",
  },
  {
    icon: Users,
    title: "Community-Informed Design",
    description: "Field interviews with farmers and clinicians shape every feature before code is written.",
  },
  {
    icon: Clock,
    title: "Measurable Delivery Cycles",
    description: "8-week research, build, and review loops with documented sprint reports.",
  },
];

const coreProducts = [
  {
    name: "GhEHR",
    description:
      "Electronic Health Records and clinic management system for Ghana, covering patient data, OPD/IPD workflows, role-based access, audit logging, and NHIS-aligned operations.",
  },
  {
    name: "MedPal",
    description:
      "AI clinical decision support grounded in Ghana's Standard Treatment Guidelines, with human-in-the-loop safety checks and citations on every answer.",
  },
];

const inDevelopmentProduct = {
  name: "AgriConnect",
  description: "Farmer-to-buyer platform in active development with field-informed workflow testing.",
};

const deliveryBlocks = [
  {
    icon: Clock,
    title: "Delivery Model",
    items: [
      "Research, build, and review loops",
      "Documented sprint report every 8 weeks",
      "Stakeholder notes published weekly",
    ],
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    items: [
      "Encryption at rest and in transit",
      "Access logging and audit trails",
      "Role-based access control (RBAC)",
    ],
  },
];

const flipCards = [
  {
    title: "Our Story",
    category: "About Haydeen",
    description: "How firsthand experience with clinic and field operations shaped our mission to build practical software.",
    href: "#origins",
    gradient: "bg-gradient-to-br from-[#22c55e] via-[#16a34a] to-[#2563eb]",
    icon: BookOpen,
  },
  {
    title: "Leadership",
    category: "About Haydeen",
    description: "Meet the founder building clinic management software grounded in local operational realities.",
    href: "/about/leadership",
    gradient: "bg-gradient-to-br from-[#6366f1] via-[#818cf8] to-[#a5b4fc]",
    icon: Building2,
  },
  {
    title: "Newsroom",
    category: "About Haydeen",
    description: "Latest updates, announcements, and insights from Haydeen Technologies as we build solutions for West Africa.",
    href: "/blog",
    gradient: "bg-gradient-to-br from-neutral-600 via-neutral-500 to-neutral-400",
    icon: Newspaper,
  },
  {
    title: "Careers",
    category: "About Haydeen",
    description: "Join us in building systems that matter. We're looking for talented individuals who share our mission.",
    href: "/careers",
    gradient: "bg-gradient-to-br from-[#27AE60] via-[#2ecc71] to-[#58d68d]",
    icon: Briefcase,
  },
  {
    title: "How We Build",
    category: "About Haydeen",
    description: "Research-driven development with transparent 8-week delivery cycles and stakeholder accountability.",
    href: "#delivery",
    gradient: "bg-gradient-to-br from-[#22c55e] via-[#16a34a] to-[#0ea5e9]",
    icon: Lightbulb,
  },
  {
    title: "Events",
    category: "About Haydeen",
    description: "Connect with us at industry events, workshops, and community gatherings across West Africa.",
    href: "/contact",
    gradient: "bg-gradient-to-br from-[#ec4899] via-[#f472b6] to-[#f9a8d4]",
    icon: Calendar,
  },
];

const About = () => {
  return (
    <>
      <HeadTags
        title="About Haydeen Technologies | Clinic Management System Ghana"
        description="Learn how Haydeen Technologies is building GhEHR, an Electronic Health Records and clinic management system for Ghana, alongside practical software for local industries."
        keywords="Electronic Health Records Ghana, Clinic management system Ghana, GhEHR platform, health tech company Ghana"
        canonical="https://haydeentechnologies.com/about"
      />
      {/* SECTION 1 - Institutional Hero */}
      <section className="relative bg-gradient-to-br from-[#0a3d62] via-[#0a2742] to-[#041425] text-white py-24 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Building practical Electronic Health Records for Ghanaian clinics
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
              Haydeen Technologies builds GhEHR, a clinic management system focused on patient data and workflows that work under real-world constraints.
            </p>
            
            {/* Credibility signals */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/70 mb-10">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FCD116]" />
                Built in Ghana
              </span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#27AE60]" />
                Low-bandwidth ready
              </span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                Production-grade infrastructure
              </span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Security by design
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact?intent=demo"
                className="inline-flex items-center px-8 py-4 bg-[#27AE60] hover:bg-[#229954] text-white font-semibold rounded-lg transition-colors"
                data-testid="button-explore-platforms"
              >
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/solutions/ghehr"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors"
                data-testid="button-contact-hero"
              >
                See GhEHR in Action
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Flip Cards Navigation Grid */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {flipCards.map((card) => (
                <FlipCard
                  key={card.title}
                  title={card.title}
                  category={card.category}
                  description={card.description}
                  href={card.href}
                  gradient={card.gradient}
                  icon={card.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - Why We Exist (Problem Framing) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              Why We Exist
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                <strong className="text-neutral-900">Agriculture:</strong> Farmers across West Africa operate in fragmented markets with limited access to real-time pricing, reliable buyers, and supply chain visibility. The result: inefficiency, waste, and suppressed incomes.
              </p>
              <p>
                <strong className="text-neutral-900">Healthcare:</strong> Clinics and hospitals manage patient data on paper or disconnected systems, creating delays, errors, and capacity constraints as patient volumes rise.
              </p>
              <p>
                Haydeen Technologies closes these gaps by building reliable patient data and workflow systems designed for local constraints: intermittent connectivity, limited device access, and resource-constrained environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - What Makes Us Different (Operating Philosophy Pillars) */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-600">
              Our operating philosophy prioritizes reliability, transparency, and community input over speed-to-market.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {philosophyPillars.map((pillar) => (
              <div 
                key={pillar.title} 
                className="bg-white rounded-xl p-6 border border-neutral-200 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-[#22c55e]/10 flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-[#22c55e]" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - Product Focus */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Product Focus
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              GhEHR is our core product, with additional solutions progressing in stages.
            </p>

            <div className="space-y-8">
              {coreProducts.map((product) => (
                <div key={product.name} className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563eb] mb-2">Live Product</p>
                  <p className="font-semibold text-neutral-900">{product.name}</p>
                  <p className="text-gray-600 mt-1">{product.description}</p>
                </div>
              ))}

              <div className="rounded-xl border border-neutral-200 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#16a34a] mb-2">In Development</p>
                <p className="font-semibold text-neutral-900">{inDevelopmentProduct.name}</p>
                <p className="text-gray-600 mt-1">{inDevelopmentProduct.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - How We Build (Delivery & Governance) */}
      <section id="delivery" className="py-20 md:py-28 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              How We Build
            </h2>
            <p className="text-lg text-gray-600">
              Delivery discipline and security are not afterthoughts. They are built into every sprint.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {deliveryBlocks.map((block) => (
              <div 
                key={block.title}
                className="bg-white rounded-xl p-8 border border-neutral-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#22c55e]/10 flex items-center justify-center">
                    <block.icon className="w-5 h-5 text-[#22c55e]" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {block.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-600">
                      <Database className="w-4 h-4 text-[#27AE60] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - Origins (Founder, de-personalized) */}
      <section id="origins" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              Origins
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded in Effiduase Ghana, after firsthand exposure to operational challenges in agriculture and healthcare. Farmers struggling to connect with buyers, clinics managing patient data on paper.
              </p>
              <p>
                That experience shapes a practical, resilient, accountable design philosophy: build for real constraints, deliver measurable outcomes, and earn trust through transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - Forward-Looking Close */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0a3d62] via-[#0a2742] to-[#041425] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building Systems That Last
            </h2>
            <p className="text-xl opacity-90 mb-10">
              Designed for scale, trust, and long-term impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact?intent=demo"
                className="inline-flex items-center px-8 py-4 bg-[#27AE60] hover:bg-[#229954] text-white font-semibold rounded-lg transition-colors"
                data-testid="button-view-platforms"
              >
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/solutions/ghehr"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors"
                data-testid="button-contact-footer"
              >
                See GhEHR in Action
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
