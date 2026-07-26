import { CheckCircle2 } from "lucide-react";

const trustSignals = [
  "AES-256 encryption for data at rest and in transit",
  "Role-based access with audit logging",
  "Data stored in secure European data centers",
  "Aligned with the Ghana Data Protection Act",
  "NHIS-aligned workflows for Ghanaian healthcare operations",
  "Offline-aware sync for unstable connectivity",
];

const TrustBand = () => {
  return (
    <section className="py-16 md:py-20 bg-neutral-50" aria-label="Trust and security signals">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563eb]">Security & reliability</p>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Built for clinical realities, not ideal conditions
            </h2>
            <p className="text-neutral-600 leading-relaxed max-w-prose">
              GhEHR focuses on reliable patient data and clinic workflows in environments
              where bandwidth, staffing, and infrastructure can vary day to day.
            </p>
          </div>

          <ul className="grid gap-4 content-start">
            {trustSignals.map((signal) => (
              <li key={signal} className="flex items-start gap-3 text-sm text-neutral-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16a34a]" aria-hidden />
                <span className="leading-relaxed">{signal}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrustBand;
