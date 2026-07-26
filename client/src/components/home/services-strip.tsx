import { Link } from "wouter";
import { Globe, Code, ArrowRight } from "lucide-react";

const ServicesStrip = () => {
  return (
    <section className="border-y border-neutral-200 bg-white py-8 md:py-10">
      <div className="container flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-4 text-neutral-700">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-[#2563eb]" />
            <Code className="h-5 w-5 text-[#2563eb]" />
          </div>
          <p>
            We also design fast, low-bandwidth websites and build custom software for Ghanaian businesses.
          </p>
        </div>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] hover:text-[#16a34a] transition-colors whitespace-nowrap"
        >
          Start a conversation
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-hover-slide group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default ServicesStrip;
