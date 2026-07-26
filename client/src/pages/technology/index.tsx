import { motion } from "framer-motion";
import { Code, Database, Shield, Cloud, Smartphone, Zap } from "lucide-react";
import HeadTags from "@/components/seo/head-tags";

const TechnologyPage = () => {
  const techStack = [
    {
      category: "Frontend",
    icon: <Code className="w-8 h-8 text-[#22c55e]" />,
      technologies: [
        { name: "React 18", description: "Modern UI framework with hooks and concurrent features" },
        { name: "TypeScript", description: "Type-safe JavaScript for better development experience" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development" },
        { name: "Vite", description: "Fast build tool and development server" }
      ]
    },
    {
      category: "Backend",
    icon: <Database className="w-8 h-8 text-[#22c55e]" />,
      technologies: [
        { name: "Node.js", description: "JavaScript runtime for server-side development" },
        { name: "Express.js", description: "Web framework for building REST APIs" },
        { name: "Drizzle ORM", description: "Type-safe database queries and migrations" },
        { name: "REST & GraphQL", description: "Flexible API design patterns" }
      ]
    },
    {
      category: "Security",
    icon: <Shield className="w-8 h-8 text-[#22c55e]" />,
      technologies: [
        { name: "CSP Headers", description: "Content Security Policy for XSS protection" },
        { name: "Rate Limiting", description: "API protection against abuse and spam" },
        { name: "Input Validation", description: "Zod schema validation for all user inputs" },
        { name: "Session Security", description: "Secure session management and authentication" }
      ]
    },
    {
      category: "Cloud & Infrastructure",
    icon: <Cloud className="w-8 h-8 text-[#22c55e]" />,
      technologies: [
        { name: "Amazon EC2", description: "Application hosting across our product suite" },
        { name: "Amazon RDS", description: "Managed PostgreSQL for clinical production data" },
        { name: "Amazon S3", description: "Scalable object storage for files and documents" },
        { name: "Amazon Bedrock", description: "Managed LLM inference powering AI-assisted clinical decision support" }
      ]
    },
    {
      category: "Databases",
    icon: <Database className="w-8 h-8 text-[#22c55e]" />,
      technologies: [
        { name: "PostgreSQL", description: "Reliable relational database for transactional data" },
        { name: "Neon Database", description: "Serverless PostgreSQL with auto-scaling" },
        { name: "ChromaDB", description: "Vector database for AI-powered clinical guideline retrieval" },
        { name: "Redis", description: "In-memory caching for real-time performance" }
      ]
    }
  ];

  const architecturePrinciples = [
    {
    icon: <Smartphone className="w-6 h-6 text-[#22c55e]" />,
      title: "Mobile-First Design",
      description: "Built for Ghana's mobile-heavy internet usage, with offline capabilities and low-bandwidth optimization"
    },
    {
    icon: <Zap className="w-6 h-6 text-[#22c55e]" />,
      title: "Performance Optimized",
      description: "Fast load times through lazy loading, image optimization, and efficient caching strategies"
    },
    {
    icon: <Cloud className="w-6 h-6 text-[#22c55e]" />,
      title: "Cloud-Native Architecture",
      description: "AWS-hosted infrastructure with managed databases for reliability and cost efficiency"
    },
    {
    icon: <Shield className="w-6 h-6 text-[#22c55e]" />,
      title: "Security by Design",
      description: "Built-in protection against common attacks, with data encryption and privacy compliance"
    }
  ];

  const developmentProcess = [
    {
      phase: "Research & Planning",
      duration: "Discovery phase",
      description: "Stakeholder interviews, market research, and technical architecture planning",
      status: "Completed for AgriConnect & GhEHR"
    },
    {
      phase: "MVP Development",
      duration: "Build phase",
      description: "Core feature development, database design, and initial user interface",
      status: "AgriConnect in active development; GhEHR core modules complete"
    },
    {
      phase: "Production Operation",
      duration: "Live phase",
      description: "Guided onboarding, feedback collection, and iterative improvements in production",
      status: "GhEHR live in production; AgriConnect pre-release validation ongoing"
    },
    {
      phase: "Production Launch",
      duration: "Rollout phase",
      description: "Full deployment, marketing launch, and onboarding systems",
      status: "GhEHR live; AgriConnect planned after operational readiness checks"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeadTags
        title="Technology | Haydeen Technologies"
        description="The technology behind Haydeen Technologies' products: offline-first web apps, secure cloud infrastructure, FHIR healthcare standards, and mobile-money integrations built for West Africa."
        canonical="https://haydeentechnologies.com/technology"
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
              Technology & Architecture
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Built with modern, scalable technologies designed for West African markets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62] mb-4">Our Technology Stack</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We use proven, enterprise-grade technologies to ensure reliability, security, and scalability for our solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {stack.icon}
                  <h3 className="text-xl font-bold text-[#0A3D62] ml-3">{stack.category}</h3>
                </div>
                <div className="space-y-4">
                  {stack.technologies.map((tech) => (
                    <div key={tech.name}>
                      <h4 className="font-semibold text-gray-900">{tech.name}</h4>
                      <p className="text-sm text-gray-600">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Principles */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62] mb-4">Architecture Principles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our architectural decisions are driven by the unique needs of West African markets and users.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {architecturePrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-[#22c55e]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  {principle.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A3D62] mb-2">{principle.title}</h3>
                  <p className="text-gray-600">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62] mb-4">Development Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our structured approach to building reliable, user-centered solutions.
            </p>
          </div>

          <div className="space-y-8">
            {developmentProcess.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-[#22c55e] text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-[#0A3D62]">{phase.phase}</h3>
                      <span className="ml-4 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 ml-12">{phase.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <div className="px-4 py-2 bg-[#22c55e]/10 text-[#22c55e] rounded-lg font-medium text-sm whitespace-nowrap">
                      {phase.status}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source & Documentation */}
      <section className="py-16 md:py-24 bg-[#0A3D62] text-white">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Documentation & Standards</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
              We believe in transparency and follow industry best practices for code quality, security, and documentation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Clean Code</h3>
                <p className="opacity-80">TypeScript, ESLint, and Prettier for maintainable code</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Security First</h3>
                <p className="opacity-80">OWASP compliance and regular security audits</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Data Privacy</h3>
                <p className="opacity-80">GDPR-ready with data protection by design</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;