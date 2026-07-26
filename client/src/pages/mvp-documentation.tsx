import { motion } from "framer-motion";
import { Code, Calendar, CheckCircle, Clock } from "lucide-react";
import { Link } from "wouter";
import HeadTags from "@/components/seo/head-tags";

const deploymentChecklist = [
  {
    title: "Hosting & API",
    detail: "GhEHR production deployment is live on AWS with environment-specific routing and deployment automation.",
    status: "Live",
  },
  {
    title: "Database",
    detail: "Production data layer is provisioned with migrations, backup strategy, and monitored access paths.",
    status: "Live",
  },
  {
    title: "Security & Ops",
    detail: "TLS enforced, RBAC and audit logging enabled, and observability active in production.",
    status: "Live",
  },
];

const MVPDocumentation = () => {
  const agriconnectFeatures = [
    {
      feature: "User Registration & Authentication",
      status: "completed",
      description: "Secure farmer and buyer registration with mobile verification"
    },
    {
      feature: "Product Listing & Marketplace",
      status: "completed",
      description: "Farmers can list crops with pricing, quantities, and harvest dates"
    },
    {
      feature: "Real-time Messaging System",
      status: "in-progress",
      description: "Direct communication between farmers and buyers"
    },
    {
      feature: "Payment Integration (Mobile Money)",
      status: "planned",
      description: "MTN, Vodafone, AirtelTigo payment processing"
    },
    {
      feature: "Weather Data Integration",
      status: "planned",
      description: "Local weather forecasts and farming recommendations"
    }
  ];

  const ghehrFeatures = [
    {
      feature: "Patient Registration System",
      status: "completed",
      description: "Secure patient data entry and management"
    },
    {
      feature: "Medical Records Database",
      status: "completed",
      description: "Electronic health records with search and filtering"
    },
    {
      feature: "Appointment Scheduling",
      status: "completed",
      description: "Patient and doctor scheduling system"
    },
    {
      feature: "NHIS Integration",
      status: "completed",
      description: "Ghana National Health Insurance Scheme connectivity"
    },
    {
      feature: "Pharmacy Management",
      status: "completed",
      description: "Medication tracking and prescription management"
    }
  ];

  const technicalDecisions = [
    {
      decision: "PostgreSQL over MongoDB",
      reasoning: "Structured data relationships in agriculture and healthcare require ACID compliance and complex queries",
      impact: "Better data integrity for financial transactions and medical records"
    },
    {
      decision: "React with TypeScript",
      reasoning: "Type safety critical for handling financial and medical data, strong local developer ecosystem",
      impact: "Improved consistency across frontend and backend contracts and easier onboarding for new developers"
    },
    {
      decision: "Mobile-First Design",
      reasoning: "Target users rely heavily on phones in day-to-day operations",
      impact: "Improved usability in field and clinic contexts, optimized for Ghana's mobile-heavy market"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-700 bg-green-50';
      case 'in-progress': return 'text-[#185abd] bg-blue-50';
      case 'planned': return 'text-gray-700 bg-gray-100';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'in-progress': return <Clock className="w-4 h-4" />;
      case 'planned': return <Calendar className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeadTags
        title="MVP Progress | Haydeen Technologies"
        description="Live build progress across Haydeen Technologies' products - GhEHR, MedPal, and AgriConnect - from MVP milestones to production releases."
        canonical="https://haydeentechnologies.com/mvp-progress"
      />
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0a3d62] via-[#0a2742] to-[#041425]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              MVP Development Documentation
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Transparent progress, real insights, and technical decisions behind our solutions. GhEHR is now live in production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AgriConnect Progress */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62] mb-4">AgriConnect MVP Progress</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Agricultural marketplace platform connecting farmers directly with buyers across Ghana
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-[#0A3D62] mb-6">Feature Development Status</h3>
              <div className="space-y-4">
                {agriconnectFeatures.map((item, index) => (
                  <motion.div
                    key={item.feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg border border-gray-200 p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{item.feature}</h4>
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.status)}`}>
                        {getStatusIcon(item.status)}
                        {item.status.replace('-', ' ')}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#0A3D62] mb-6">Current Delivery Status</h3>
              <div className="space-y-6">
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <p className="font-semibold text-[#0A3D62] mb-2">Current phase</p>
                  <p className="text-sm text-gray-600">AgriConnect remains in active MVP development and partner validation.</p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <p className="font-semibold text-[#0A3D62] mb-2">Field feedback loop</p>
                  <p className="text-sm text-gray-600">Product updates are guided by direct farmer and buyer conversations from ongoing discovery.</p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <p className="font-semibold text-[#0A3D62] mb-2">Next milestone</p>
                  <p className="text-sm text-gray-600">Finalize marketplace workflows and payment readiness for wider rollout.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GhEHR Status */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62] mb-4">GhEHR Release Status</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Electronic Health Records system for Ghana, live in production
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#0A3D62] mb-6">Deployment Status</h3>
              <div className="space-y-6">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <p className="font-semibold text-[#0A3D62] mb-2">Release state</p>
                  <p className="text-sm text-gray-600">GhEHR core modules are complete and live in production.</p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <p className="font-semibold text-[#0A3D62] mb-2">Environment readiness</p>
                  <p className="text-sm text-gray-600">Security controls, audit logging, and observability are active in production.</p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <p className="font-semibold text-[#0A3D62] mb-2">Access model</p>
                  <p className="text-sm text-gray-600">Facilities can request guided onboarding for operational walkthroughs.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0A3D62] mb-6">Feature Development Status</h3>
              <div className="space-y-4">
                {ghehrFeatures.map((item, index) => (
                  <motion.div
                    key={item.feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg border border-gray-200 p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{item.feature}</h4>
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.status)}`}>
                        {getStatusIcon(item.status)}
                        {item.status.replace('-', ' ')}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Deployment Readiness */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#185abd]">Deployment readiness</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62] mb-4">Infrastructure already provisioned</h2>
              <p className="max-w-3xl mx-auto text-gray-600">
                GhEHR is completed and live in production. Hosting, data, security, and observability are active.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {deploymentChecklist.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-2">{item.status}</p>
                  <h3 className="text-xl font-bold text-[#0A3D62] mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://ghehrhealth.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#185abd] text-white font-semibold hover:bg-[#0e4ea3] transition"
              >
                Open GhEHR
              </a>
              <Link
                href="/contact?intent=demo"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#185abd] text-[#185abd] font-semibold hover:bg-[#185abd]/10 transition"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </section>

      {/* Technical Decisions */}
      <section className="py-16 md:py-24 bg-[#0A3D62] text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Technical Decisions</h2>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Transparent reasoning behind our technology choices and their business impact
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {technicalDecisions.map((decision, index) => (
              <motion.div
                key={decision.decision}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-4">{decision.decision}</h3>
                <p className="opacity-90 mb-4">{decision.reasoning}</p>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-sm font-medium text-[#FCD116]">Impact:</p>
                  <p className="text-sm opacity-90">{decision.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/technology" 
              className="inline-flex items-center px-8 py-4 bg-[#185abd] text-white font-medium rounded-lg hover:bg-[#0e4ea3] transition"
            >
              <Code className="w-5 h-5 mr-2" />
              View Complete Technical Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MVPDocumentation;