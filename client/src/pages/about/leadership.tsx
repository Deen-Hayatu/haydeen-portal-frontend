import { Link } from "wouter";
import { ArrowLeft, Linkedin, Mail, Globe } from "lucide-react";
import OptimizedImage from "@/components/ui/optimized-image";
import founderProfessionalPhoto from "../../assets/founder-professional-photo.jpg";
import HeadTags from "@/components/seo/head-tags";

const Leadership = () => {
  return (
    <>
      <HeadTags
        title="Leadership | Haydeen Technologies"
        description="Meet the leadership of Haydeen Technologies - founded by Mohammad Deen Hayatu in the Ashanti Region, building health-tech and agri-tech software for Ghana."
        canonical="https://haydeentechnologies.com/about/leadership"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a3d62] via-[#0a2742] to-[#041425] text-white py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/about" 
              className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors"
              data-testid="link-back-about"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to About
            </Link>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 mb-2">
              About Haydeen
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Leadership
            </h1>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 items-start">
              {/* Photo */}
              <div className="md:col-span-1">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <OptimizedImage 
                    src={founderProfessionalPhoto} 
                    alt="Mohammad Deen Hayatu, Founder of Haydeen Technologies" 
                    className="w-full aspect-square object-cover"
                    priority={true}
                    width={400}
                    height={400}
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="md:col-span-2">
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                    Mohammad Deen Hayatu
                  </h2>
                  <p className="text-xl text-[#22c55e] font-medium">
                    Founder & CEO
                  </p>
                </div>

                <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                  <p>
                    Mohammad Deen Hayatu is a full-stack developer, AI engineer, and entrepreneur from Effiduasi, Ghana. Drawing on his background in biomedical research, he founded Haydeen Technologies to build practical software for healthcare delivery and operations.
                  </p>
                  <p>
                    He leads the product and engineering direction of GhEHR, Haydeen's Electronic Health Records and clinic management system for Ghana. His work focuses on making patient data and workflows usable by real clinic teams under day-to-day pressure.
                  </p>
                  <p>
                    His approach is grounded in firsthand constraints: clinics relying on paper records, intermittent connectivity, and uneven digital capacity across facilities. These realities shape how GhEHR is designed for reliability, traceability, and practical adoption.
                  </p>
                </div>

                {/* Expertise */}
                <div className="border-t border-neutral-200 pt-8">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                    Areas of Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Full-Stack Development",
                      "AI/ML Engineering",
                      "Healthcare Technology",
                      "Agricultural Systems",
                      "Product Design",
                      "Systems Architecture"
                    ].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1.5 bg-[#22c55e]/10 text-[#22c55e] text-sm font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="border-t border-neutral-200 pt-8 mt-8">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                    Connect
                  </h3>
                  <div className="flex gap-4">
                    <a 
                      href="mailto:contact@haydeentech.com"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg transition-colors"
                      data-testid="link-founder-email"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                    <a 
                      href="https://haydeentech.com"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg transition-colors"
                      data-testid="link-founder-website"
                    >
                      <Globe className="w-4 h-4" />
                      Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Philosophy */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Leadership Philosophy
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              "We build systems that last. Designed for scale, trust, and long-term impact. Technology should work for the people using it, not the other way around."
            </p>
            <p className="text-gray-500 italic">
              - Mohammad Deen Hayatu
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Interested in joining the team?
            </h3>
            <p className="text-gray-600 mb-8">
              We're always looking for talented individuals who share our mission.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center px-8 py-4 bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold rounded-lg transition-colors"
              data-testid="button-view-careers"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Leadership;
