import HeroMinimal from "@/components/home/hero-minimal";
import ProductsShowcase from "@/components/home/products-showcase";
import WoodgreenSpotlight from "@/components/solutions/woodgreen-spotlight";
import ServicesStrip from "@/components/home/services-strip";
import TrustBand from "@/components/home/trust-band";
import FinalCTA from "@/components/home/final-cta";
import HeadTags from "@/components/seo/head-tags";

const Home = () => {
  return (
    <>
      <HeadTags
        title="Haydeen Technologies | Electronic Health Records & Clinical AI for Ghana"
        description="GhEHR helps Ghanaian clinics replace paperwork with digital patient records and clinic management workflows that stay reliable even on low bandwidth. Pair it with MedPal for AI clinical decision support cited to Ghana's Standard Treatment Guidelines."
        keywords="Electronic Health Records Ghana, Clinic management system Ghana, GhEHR electronic health records, MedPal clinical AI, healthcare technology Ghana, patient data and workflows Ghana"
        canonical="https://haydeentechnologies.com"
      />
      <HeroMinimal />
      <ProductsShowcase />
      <WoodgreenSpotlight />
      <ServicesStrip />
      <TrustBand />
      <FinalCTA />
    </>
  );
};

export default Home;
