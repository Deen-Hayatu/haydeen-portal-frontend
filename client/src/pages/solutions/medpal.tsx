import { Link } from "wouter";
import { ShieldCheck, Lock, Puzzle, Check, FileCheck2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeadTags from "@/components/seo/head-tags";
import BetaSignupForm from "@/components/ui/beta-signup-form";
import MedPalLogo from "@/components/ui/medpal-logo";
import medpalScreenshot from "@assets/medpal-screenshot.webp";
import { buildCdnSources, onCdnImgError } from "@/lib/cdn";

const MedPal = () => {
  const medpalCdn = buildCdnSources("medpal-screenshot.webp");

  return (
    <>
      <HeadTags
        title="MedPal | AI Clinical Decision Support for Ghana by Haydeen Technologies"
        description="MedPal is clinical decision support grounded in Ghana's Standard Treatment Guidelines. Every answer cited, with human-in-the-loop safety checks. Live in production, works with GhEHR or standalone."
        keywords="MedPal, clinical decision support Ghana, Ghana Standard Treatment Guidelines, STG, healthcare AI Ghana, GhEHR copilot, clinical AI"
        canonical="https://haydeentechnologies.com/solutions/medpal"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a3d62] via-[#0a2742] to-[#041425] text-white py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 rounded-xl bg-white/10 flex items-center justify-center mr-4">
                  <MedPalLogo size={28} showText={false} />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold">MedPal</h1>
                  <p className="text-lg opacity-90">AI Clinical Decision Support for Ghana</p>
                </div>
              </div>
              <p className="text-xl mb-4 opacity-90">
                Describe a patient presentation and get differential diagnoses, treatment guidance, investigations, and patient education - every answer cited to Ghana's Standard Treatment Guidelines (STG 2017).
              </p>
              <p className="text-lg mb-4 opacity-80">
                Live in production • Decision support with a clinician always in the loop, not autonomous diagnosis.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact?intent=demo" className="btn bg-white text-[#185abd] hover:bg-opacity-90">
                  Request Demo
                </Link>
                <a
                  href="https://medpal.ghehrhealth.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-[#0A3D62] text-white hover:bg-opacity-90"
                >
                  Open MedPal
                </a>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl w-full max-w-lg mx-auto bg-white">
              <img
                src={medpalCdn?.src ?? medpalScreenshot}
                srcSet={medpalCdn?.srcSet}
                onError={onCdnImgError(medpalScreenshot)}
                sizes="(max-width: 768px) 100vw, 600px"
                alt="MedPal clinical decision support showing an STG-cited differential diagnosis with confidence score"
                className="w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62] mb-6">Clinical Guidance, Grounded in Ghana's Guidelines</h2>
            <p className="text-lg text-gray-600 mb-6">
              Clinicians spend precious minutes cross-checking treatment protocols, especially for less common presentations. MedPal shortens that lookup without replacing clinical judgment.
            </p>
            <h3 className="text-2xl font-bold text-[#E74C3C] mb-4">How MedPal Helps</h3>
            <p className="text-lg text-gray-600">
              Describe a presentation and MedPal returns differential diagnoses, treatment guidance, investigations, and patient education - every answer cited to the STG 2017 with a confidence score, and safety flags for emergencies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#F2F2F2] rounded-lg p-6 text-center">
              <div className="text-lg font-bold text-[#185abd] mb-2">Live in Production</div>
              <p className="text-gray-600">Available at medpal.ghehrhealth.com and rolling out to GhEHR pilot facilities.</p>
            </div>
            <div className="bg-[#F2F2F2] rounded-lg p-6 text-center">
              <div className="text-lg font-bold text-[#185abd] mb-2">Cited to the STG</div>
              <p className="text-gray-600">Every answer references the Ghana Standard Treatment Guidelines, with a confidence score.</p>
            </div>
            <div className="bg-[#F2F2F2] rounded-lg p-6 text-center">
              <div className="text-lg font-bold text-[#185abd] mb-2">Human-in-the-Loop</div>
              <p className="text-gray-600">Decision support for the clinician to review, not an autonomous diagnosis tool.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 md:py-24 bg-[#F2F2F2]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62] mb-4">Key Features</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Built for the realities of Ghanaian clinical practice: cited answers, safety by design, and privacy-first handling of patient data.
            </p>
          </div>

          <Tabs defaultValue="answers" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="answers">Guideline-Grounded</TabsTrigger>
              <TabsTrigger value="safety">Safety by Design</TabsTrigger>
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
              <TabsTrigger value="ghehr">Works With GhEHR</TabsTrigger>
            </TabsList>

            <TabsContent value="answers" className="border rounded-lg p-6 bg-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[#0A3D62] mb-4">Guideline-Grounded Answers</h3>
                  <p className="text-gray-600 mb-6">
                    Answers are drawn from Ghana's Standard Treatment Guidelines (STG 2017), never fabricated - every response is chunk-grounded and cited.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#185abd] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Differential diagnoses and treatment guidance</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#185abd] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Recommended investigations and patient education</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#185abd] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Every answer cited to the STG with a confidence score</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#185abd] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Deterministic keyword fallback if the AI model is unreachable</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg bg-[#0A3D62]/5 flex items-center justify-center p-12">
                  <FileCheck2 className="h-32 w-32 text-[#0A3D62]" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="safety" className="border rounded-lg p-6 bg-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="rounded-lg overflow-hidden shadow-lg md:order-first order-last bg-[#0A3D62]/5 flex items-center justify-center p-12">
                  <ShieldCheck className="h-32 w-32 text-[#0A3D62]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0A3D62] mb-4">Safety by Design</h3>
                  <p className="text-gray-600 mb-6">
                    MedPal is decision support, not autonomous diagnosis - a clinician always reviews the output before it informs care.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Deterministic safety overrides force emergencies to "blocked / refer now"</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Human-in-the-loop by design - never a replacement for clinical judgment</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Confidence scores flag uncertainty rather than hiding it</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="privacy" className="border rounded-lg p-6 bg-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[#0A3D62] mb-4">Privacy-First by Design</h3>
                  <p className="text-gray-600 mb-6">
                    Patient data is de-identified before any cloud AI call, and facilities choose how much AI assistance to use.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" />
                      <span>PHI de-identified before any cloud LLM call</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Per-facility choice: STG-only mode or AI-assisted mode</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" />
                      <span>No patient data used to train external models</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg bg-[#0A3D62]/5 flex items-center justify-center p-12">
                  <Lock className="h-32 w-32 text-[#0A3D62]" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ghehr" className="border rounded-lg p-6 bg-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="rounded-lg overflow-hidden shadow-lg md:order-first order-last bg-[#0A3D62]/5 flex items-center justify-center p-12">
                  <Puzzle className="h-32 w-32 text-[#0A3D62]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0A3D62] mb-4">Works With GhEHR - or Standalone</h3>
                  <p className="text-gray-600 mb-6">
                    MedPal is available as a copilot inside GhEHR's clinical notes, or as a standalone web app for clinicians outside the GhEHR network.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Integrated copilot for GhEHR clinical notes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Standalone web app at medpal.ghehrhealth.com</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Rolling out to GhEHR facilities on request</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Access Request Section */}
      <section id="beta-signup" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62] mb-4">Request MedPal Access</h2>
              <p className="text-lg text-gray-600">
                MedPal is live in production. Request a guided walkthrough for your facility or clinical team.
              </p>
            </div>
            <BetaSignupForm defaultPlatform="MedPal" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#27AE60] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bring Guideline-Grounded Guidance to Your Clinic</h2>
            <p className="text-xl mb-8 opacity-90">
              MedPal is live in production. Request a guided demo, or open the app directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact?intent=demo" className="btn bg-white text-[#7c3aed] hover:bg-opacity-90">
                Request Demo
              </Link>
              <a
                href="https://medpal.ghehrhealth.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#0A3D62] text-white hover:bg-opacity-90"
              >
                Open MedPal
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MedPal;
