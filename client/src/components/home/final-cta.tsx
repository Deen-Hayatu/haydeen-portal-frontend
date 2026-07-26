import { Link } from "wouter";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-[#0a2742] text-white">
      <div className="container">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's talk.
          </h2>
          <p className="text-white/70 text-base leading-relaxed">
            No commitment. We'll walk you through GhEHR in 30 minutes and show you exactly
            how it fits your clinic's workflows.
          </p>

          <div className="flex justify-center pt-2">
            <Link href="/contact?intent=demo">
              <Button
                size="lg"
                className="group bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 h-12"
                data-testid="button-book-call-cta"
              >
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 ease-hover-slide group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 pt-2 text-xs text-white/45">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              Ashanti, Ghana
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              Mon–Fri, 9am–6pm GMT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
