import { Link } from "wouter";
import { Shield, Users, FileText, BarChart3, Check, Stethoscope, Database, Cloud, ShieldCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeadTags from "@/components/seo/head-tags";
import ghehrLogo from "@assets/GhEHR logo_1752832735160.png";
import BetaSignupForm from "@/components/ui/beta-signup-form";
import WoodgreenSpotlight from "@/components/solutions/woodgreen-spotlight";
import PlatformScreenshot from "@/components/ui/platform-screenshot";
import dashboardImage from "@assets/ghehr-dashboard-screenshot.webp";
import billingImage from "@assets/ghehr-billing-screenshot.webp";
import labsImage from "@assets/ghehr-labs-screenshot.webp";
import { buildCdnSources, onCdnImgError } from "@/lib/cdn";

const GhEHR = () => {
  const dashboardCdn = buildCdnSources("ghehr-dashboard-screenshot.webp");
  const billingCdn = buildCdnSources("ghehr-billing-screenshot.webp");
  const labsCdn = buildCdnSources("ghehr-labs-screenshot.webp");
  const logoCdn = buildCdnSources("GhEHR logo_1752832735160.png", { widths: [240, 360, 480], quality: 80 });
  return (
    <>
      <HeadTags
        title="GhEHR | Ghana Electronic Health Record System by Haydeen Technologies"
        description="GhEHR is a comprehensive electronic health record system designed specifically for Ghana's healthcare ecosystem. Features patient records, healthcare analytics, NHIS integration, and secure data management."
        keywords="GhEHR, electronic health records Ghana, healthcare technology, NHIS integration, Ghana Health Service, medical records system, healthcare analytics Ghana, patient data management"
        canonical="https://haydeentechnologies.com/solutions/ghehr"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a3d62] via-[#0a2742] to-[#041425] text-white py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-6">
                <img 
                  src={logoCdn?.src ?? ghehrLogo} 
                  srcSet={logoCdn?.srcSet}
                  onError={onCdnImgError(ghehrLogo)}
                  sizes="(max-width: 768px) 60vw, 320px"
                  alt="GhEHR Logo" 
                  className="h-16 w-auto mr-4"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold">GhEHR</h1>
                  <p className="text-lg opacity-90">Ghana Electronic Health Record</p>
                </div>
              </div>
              <p className="text-xl mb-4 opacity-90">
                Modernize patient care with digital records that work offline. No more paper files, lost records, or duplicate data entry.
              </p>
              <p className="text-lg mb-4 opacity-80">
                Live in production • Built specifically for Ghana's healthcare system, by Ghanaians who understand your challenges.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact?intent=demo" className="btn bg-white text-[#185abd] hover:bg-opacity-90">
                  Request Demo
                </Link>
                <a href="#pricing" className="btn bg-[#0A3D62] text-white hover:bg-opacity-90">
                  See Pricing
                </a>
              </div>
            </div>
            <div className="relative">
              <PlatformScreenshot 
                platform="ghehr" 
                className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62] mb-6">The Problem We're Solving</h2>
            <p className="text-lg text-gray-600 mb-6">
              Ghana's healthcare workers spend too much time on paperwork. Patient records are lost, duplicated, or incomplete. Doctors can't access patient history when they need it most. This slows down care and puts patients at risk.
            </p>
            <h3 className="text-2xl font-bold text-[#E74C3C] mb-4">How GhEHR Changes That</h3>
            <p className="text-lg text-gray-600">
              GhEHR gives you instant access to complete patient records, even offline. No more searching through filing cabinets. No more lost records. Just fast, accurate patient care. <strong>Now live in production, serving private clinics in Ghana.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Stat 1 */}
            <div className="bg-[#F2F2F2] rounded-lg p-6 text-center">
              <div className="text-lg font-bold text-[#185abd] mb-2">Live in Production</div>
              <p className="text-gray-600">Facilities can request guided onboarding and implementation walkthroughs.</p>
            </div>
            
            {/* Stat 2 */}
            <div className="bg-[#F2F2F2] rounded-lg p-6 text-center">
              <div className="text-lg font-bold text-[#185abd] mb-2">Clinic Workflow Coverage</div>
              <p className="text-gray-600">Patient records, consultations, and operational workflows are integrated.</p>
            </div>
            
            {/* Stat 3 */}
            <div className="bg-[#F2F2F2] rounded-lg p-6 text-center">
              <div className="text-lg font-bold text-[#185abd] mb-2">Offline-Aware Design</div>
              <p className="text-gray-600">Built for facilities operating with intermittent connectivity.</p>
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
              GhEHR offers comprehensive healthcare management tools designed specifically for Ghana's medical infrastructure and practices.
            </p>
          </div>

          <Tabs defaultValue="records" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="records">Clinic Workflows</TabsTrigger>
              <TabsTrigger value="analytics">Billing & NHIS</TabsTrigger>
              <TabsTrigger value="integration">Offline & Lab/Pharmacy</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="records" className="border rounded-lg p-6 bg-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[#0A3D62] mb-4">OPD &amp; IPD Clinic Workflows</h3>
                  <p className="text-gray-600 mb-6">
                    End-to-end outpatient and inpatient workflows: triage, SOAP consultation notes, and admission/ward/bed management, with support for interrupting and resuming a consultation while labs are pending.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#185abd] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Triage, consultation, and SOAP clinical notes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#185abd] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Interrupted-consultation resume (pause for labs, pick up where you left off)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#185abd] mr-2 flex-shrink-0 mt-0.5" />
                      <span>IPD admission, ward, and bed management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#185abd] mr-2 flex-shrink-0 mt-0.5" />
                      <span>PDF generation for clinical notes and lab reports</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                  <img
                    src={dashboardCdn?.src ?? dashboardImage}
                    srcSet={dashboardCdn?.srcSet}
                    onError={onCdnImgError(dashboardImage)}
                    sizes="(max-width: 768px) 100vw, 600px"
                    alt="GhEHR clinic dashboard showing patient records and clinical operations"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="analytics" className="border rounded-lg p-6 bg-white">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="rounded-lg overflow-hidden shadow-lg md:order-first order-last bg-white">
                  <img
                    src={billingCdn?.src ?? billingImage}
                    srcSet={billingCdn?.srcSet}
                    onError={onCdnImgError(billingImage)}
                    sizes="(max-width: 768px) 100vw, 640px"
                    alt="GhEHR billing and payment management showing invoices and NHIS receivables"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0A3D62] mb-4">Billing & NHIS Claims</h3>
                  <p className="text-gray-600 mb-6">
                    NHIS eligibility checks with graceful offline fallback, plus billing and invoicing with an approval workflow for high-value voids, refunds, and discounts.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" />
                      <span>NHIS (National Health Insurance Scheme) eligibility checks</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Billing and invoicing with second-approver sign-off</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Offline fallback keeps billing moving without connectivity</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Facility-level reporting for claims and revenue</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="integration" className="border rounded-lg p-6 bg-white">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[#0A3D62] mb-4">Offline-First, Lab & Pharmacy</h3>
                  <p className="text-gray-600 mb-6">
                    Built for facilities with intermittent connectivity: an offline-first PWA that syncs on reconnect, plus lab and pharmacy order tracking with critical-result alerts.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Offline-first PWA with sync on reconnect</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Lab orders, results, and critical alerts</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Pharmacy order tracking</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Optional MedPal clinical decision support alongside your workflow</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                  <img
                    src={labsCdn?.src ?? labsImage}
                    srcSet={labsCdn?.srcSet}
                    onError={onCdnImgError(labsImage)}
                    sizes="(max-width: 768px) 100vw, 640px"
                    alt="GhEHR laboratory orders management showing pending lab tests and costs"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="security" className="border rounded-lg p-6 bg-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="rounded-lg overflow-hidden shadow-lg md:order-first order-last bg-[#0A3D62]/5 flex items-center justify-center p-12">
                  <ShieldCheck className="h-32 w-32 text-[#0A3D62]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0A3D62] mb-4">Security & Compliance</h3>
                  <p className="text-gray-600 mb-6">
                    Security measures built for PHI: field-level encryption at rest, role-based access across 11 clinical and admin roles, and audit trails covering every record change.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" />
                      <span>AES-256-GCM encryption for PHI fields at rest (NHIS &amp; Ghana Card numbers)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Ghana Data Protection Act (Act 843) compliance features</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Role-based access control (11 roles) and append-only audit trails</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#22c55e] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Two-factor authentication with account lockout protection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits for Ghana */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62] mb-4">Benefits for Ghana's Healthcare System</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              GhEHR is designed to address the unique challenges of Ghana's healthcare landscape while improving outcomes for patients and healthcare providers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#F2F2F2] rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-[#27AE60] rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0A3D62] mb-3">Improved Patient Care</h3>
              <p className="text-gray-600">
                Complete patient history accessibility across all healthcare facilities in Ghana for better diagnosis and treatment decisions.
              </p>
            </div>

            <div className="bg-[#F2F2F2] rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-[#1ABC9C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0A3D62] mb-3">Centralized Data Management</h3>
              <p className="text-gray-600">
                Unified healthcare data system reducing duplication and improving coordination between healthcare providers.
              </p>
            </div>

            <div className="bg-[#F2F2F2] rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-[#F39C12] rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0A3D62] mb-3">Public Health Insights</h3>
              <p className="text-gray-600">
                Real-time health analytics supporting government policy decisions and resource allocation for better health outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-16 md:py-24 bg-[#F2F2F2]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62] mb-4">Implementation Roadmap</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our phased approach ensures smooth adoption across Ghana's healthcare system.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Phase 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#27AE60]/35">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-1/4">
                  <span className="inline-block bg-[#27AE60] text-white px-4 py-2 rounded-full text-sm font-medium mb-2">Phase 1 - Live</span>
                  <h3 className="text-2xl font-bold text-[#0A3D62]">Private Clinics & Hospitals</h3>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-600 mb-4">
                    GhEHR is live in production, onboarding private clinics and hospitals with guided setup, staff training, and data migration support.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#27AE60]" />
                      <span className="text-sm">Core EHR functionality live</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#27AE60]" />
                      <span className="text-sm">Healthcare provider training</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#27AE60]" />
                      <span className="text-sm">Guided onboarding & implementation support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#27AE60]" />
                      <span className="text-sm">Data migration protocols</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#1ABC9C]/35">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-1/4">
                  <span className="inline-block bg-[#1ABC9C] text-white px-4 py-2 rounded-full text-sm font-medium mb-2">Phase 2 - Expansion</span>
                  <h3 className="text-2xl font-bold text-[#0A3D62]">District Health Centers</h3>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-600 mb-4">
                    Expand to district health centers and clinics, implementing mobile access for rural healthcare workers.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#1ABC9C]" />
                      <span className="text-sm">Mobile application deployment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#1ABC9C]" />
                      <span className="text-sm">Rural connectivity solutions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#F39C12]/35">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-1/4">
                  <span className="inline-block bg-[#F39C12] text-white px-4 py-2 rounded-full text-sm font-medium mb-2">Phase 3 - Integration</span>
                  <h3 className="text-2xl font-bold text-[#0A3D62]">National Health Network</h3>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-600 mb-4">
                    Complete national rollout with full NHIS integration and cross-border health data sharing capabilities.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#F39C12]" />
                      <span className="text-sm">NHIS full integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#F39C12]" />
                      <span className="text-sm">ECOWAS health data sharing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WoodgreenSpotlight />

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62] mb-4">Plans for Every Facility Size</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Recommended fits based on staff and patient volume - talk to us if you're between tiers, plans can flex to your facility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-[#F2F2F2] rounded-xl p-6 flex flex-col border-2 border-transparent">
              <h3 className="text-lg font-bold text-[#0A3D62] mb-1">Starter</h3>
              <p className="text-3xl font-bold text-[#185abd] mb-1">GHS 199<span className="text-base font-normal text-gray-500">/mo</span></p>
              <p className="text-sm text-gray-500 mb-4">GHS 1,500 one-time setup fee</p>
              <p className="text-sm text-gray-600 mb-4">Recommended for small private clinics - up to 3 staff, 200 patients.</p>
            </div>

            <div className="bg-white rounded-xl p-6 flex flex-col border-2 border-[#27AE60] shadow-lg relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#27AE60] text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
              <h3 className="text-lg font-bold text-[#0A3D62] mb-1">Professional</h3>
              <p className="text-3xl font-bold text-[#185abd] mb-1">GHS 499<span className="text-base font-normal text-gray-500">/mo</span></p>
              <p className="text-sm text-gray-500 mb-4">GHS 2,000 one-time setup fee</p>
              <p className="text-sm text-gray-600 mb-4">Recommended for mid-size OPD clinics - up to 20 staff, 1,000 patients.</p>
            </div>

            <div className="bg-[#F2F2F2] rounded-xl p-6 flex flex-col border-2 border-transparent">
              <h3 className="text-lg font-bold text-[#0A3D62] mb-1">Enterprise</h3>
              <p className="text-3xl font-bold text-[#185abd] mb-1">GHS 1,499<span className="text-base font-normal text-gray-500">/mo</span></p>
              <p className="text-sm text-gray-500 mb-4">GHS 5,000 one-time setup fee</p>
              <p className="text-sm text-gray-600 mb-4">Recommended for hospitals - multi-department, unlimited staff & patients.</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">Yearly billing works out to about 2 months free on any tier. Talk to us about the right fit for your facility.</p>
        </div>
      </section>

      {/* Access Request Section */}
      <section id="beta-signup" className="py-16 md:py-24 bg-[#F2F2F2]">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62] mb-4">Request GhEHR Access</h2>
              <p className="text-lg text-gray-600">
                GhEHR is live in production and open for guided facility onboarding and evaluation.
              </p>
            </div>
            <BetaSignupForm defaultPlatform="GhEHR" />
          </div>
        </div>
      </section>

      {/* Cross-link to MedPal */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600">
              Pair GhEHR with{" "}
              <Link href="/solutions/medpal" className="font-semibold text-[#185abd] hover:underline">
                MedPal
              </Link>{" "}
              for clinical decision support grounded in Ghana's Standard Treatment Guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#27AE60] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Modernize Your Healthcare Practice?</h2>
            <p className="text-xl mb-8 opacity-90">
              GhEHR is live in production. Request a guided demo for your facility.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact?intent=demo" className="btn bg-white text-[#7c3aed] hover:bg-opacity-90">
                Request Demo
              </Link>
              <a
                href="https://ghehrhealth.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#0A3D62] text-white hover:bg-opacity-90"
              >
                Open GhEHR
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GhEHR;
