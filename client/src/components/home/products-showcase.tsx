import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import ghehrLogo from "@assets/GhEHR logo_1752832735160.png";
import ghehrDashboard from "@assets/ghehr-dashboard-screenshot.webp";
import medpalScreenshot from "@assets/medpal-screenshot.webp";
import farmerImage from "@assets/generated_images/ghanaian_cocoa_farmer_portrait.webp";
import MedPalLogo from "@/components/ui/medpal-logo";
import { buildCdnSources, onCdnImgError } from "@/lib/cdn";

const GhEHRIcon = () => (
  <img src={ghehrLogo} alt="" className="h-6 w-6 object-contain" aria-hidden="true" />
);

const products = [
  {
    id: "ghehr",
    title: "GhEHR",
    logo: <GhEHRIcon />,
    status: "Live in production",
    statusColor: "#16a34a",
    tagline: "Patient records in seconds, not minutes.",
    features: [
      "OPD & IPD clinic workflows",
      "NHIS-aligned billing and claims",
      "Low-bandwidth, offline-aware",
      "Role-based access with audit trails",
    ],
    image: ghehrDashboard,
    cdnPath: "ghehr-dashboard-screenshot.webp",
    imageAlt: "GhEHR clinic dashboard showing patient records and clinical operations",
    cta: { label: "See GhEHR in Action", path: "/solutions/ghehr" },
  },
  {
    id: "medpal",
    title: "MedPal",
    logo: <MedPalLogo size={20} showText={false} />,
    status: "Live in production",
    statusColor: "#16a34a",
    tagline: "AI clinical guidance, cited to Ghana's STG.",
    features: [
      "STG-cited differential diagnoses",
      "Deterministic emergency safety overrides",
      "Works with GhEHR or standalone",
    ],
    image: medpalScreenshot,
    cdnPath: "medpal-screenshot.webp",
    imageAlt: "MedPal clinical decision support showing an STG-cited differential diagnosis",
    cta: { label: "See MedPal in Action", path: "/solutions/medpal" },
  },
];

const ProductsShowcase = () => {
  return (
    <section className="relative z-10 -mt-10 rounded-t-[40px] bg-white pb-20 pt-16 md:-mt-16 md:rounded-t-[64px] md:pb-28 md:pt-24">
      <div className="container">
        <div className="mb-16 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563eb]">Products</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">What we build</h2>
            <p className="max-w-2xl text-neutral-600">
              Two products live in Ghanaian clinics today, built with direct input from the people who use them.
            </p>
          </div>
          <Link
            href="/solutions"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 underline-offset-4 hover:text-[#2563eb] hover:underline"
          >
            View all solutions
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-hover-slide group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="space-y-20 md:space-y-28">
          {products.map((product, index) => {
            const cdn = buildCdnSources(product.cdnPath);
            return (
              <div
                key={product.id}
                data-testid={`product-${product.id}`}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-3 flex items-center gap-3">
                    {product.logo}
                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">{product.title}</h3>
                  </div>
                  <p
                    className="mb-3 text-xs font-semibold uppercase tracking-[0.18em]"
                    style={{ color: product.statusColor }}
                  >
                    {product.status}
                  </p>
                  <p className="mb-6 text-xl font-medium text-neutral-700">{product.tagline}</p>
                  <ul className="mb-8 space-y-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#16a34a]" />
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={product.cta.path}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] hover:text-[#16a34a] transition-colors"
                    data-testid={`product-${product.id}-cta`}
                  >
                    {product.cta.label}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-hover-slide group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="rounded-2xl border border-neutral-200/80 bg-white p-3 shadow-xl transition-all duration-200 ease-hover-slide hover:-translate-y-1 hover:shadow-2xl">
                    <img
                      src={cdn?.src ?? product.image}
                      srcSet={cdn?.srcSet}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
                      alt={product.imageAlt}
                      className="w-full h-auto rounded-lg"
                      loading="lazy"
                      decoding="async"
                      onError={onCdnImgError(product.image)}
                    />
                  </div>
                </div>
              </div>
            );
          })}

          {/* AgriConnect: compact, in-development treatment */}
          <div
            data-testid="product-agriconnect"
            className="flex flex-col items-start gap-6 border-t border-neutral-200 pt-12 sm:flex-row sm:items-center"
          >
            <img
              src={farmerImage}
              alt=""
              aria-hidden="true"
              className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="mb-1 flex items-center gap-3">
                <h3 className="text-lg font-bold text-neutral-900">AgriConnect</h3>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  In development
                </span>
              </div>
              <p className="text-neutral-600">
                A direct farmer-to-buyer marketplace with mobile money built in.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] hover:text-[#16a34a] transition-colors"
              data-testid="product-agriconnect-cta"
            >
              Talk to us about AgriConnect
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-hover-slide group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
