import { useState } from "react";
import { Check } from "lucide-react";

const WOODGREEN_LOGO_SRC = "/customer-logos/woodgreen_logo.jpg";

const WoodgreenSpotlight = () => {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563eb] mb-2">Case study</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Live at Woodgreen Clinic
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            A private clinic in Kpandai District, Northern Region, running full outpatient and inpatient
            operations on GhEHR.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                {!logoFailed ? (
                  <img
                    src={WOODGREEN_LOGO_SRC}
                    alt="Woodgreen Clinic logo"
                    className="h-16 w-16 rounded-full object-cover border border-gray-200"
                    loading="lazy"
                    decoding="async"
                    onError={() => setLogoFailed(true)}
                  />
                ) : (
                  <div className="h-16 w-16 rounded-full bg-[#1E7A46] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    WG
                  </div>
                )}
                <h3 className="text-2xl font-bold text-neutral-900">Woodgreen Clinic</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Woodgreen Clinic is a private healthcare facility in Kpandai District, Northern Region -
                one of the first facilities running GhEHR in full production, not a pilot or demo
                environment.
              </p>
              <a
                href="/blog/woodgreen-clinic-case-study"
                className="text-[#185abd] font-medium hover:underline"
              >
                Read the full case study →
              </a>
            </div>
            <div className="md:w-1/2 bg-[#1E7A46]/5 p-6 md:p-8 flex items-center justify-center">
              <div className="p-4 rounded-lg border border-[#1E7A46]/20 bg-white text-center w-full">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#16a34a]">
                  Live in production
                </p>
                <h4 className="font-bold text-neutral-900 mb-3">What's Live</h4>
                <ul className="text-left text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#16a34a] flex-shrink-0 mt-0.5" />
                    <span>Professional tier - full OPD workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#16a34a] flex-shrink-0 mt-0.5" />
                    <span>Inpatient care - 5 wards, 100 beds (Male, Female, Pediatric, Emergency, Maternity)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#16a34a] flex-shrink-0 mt-0.5" />
                    <span>NHIS billing enabled, accreditation in progress</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WoodgreenSpotlight;
