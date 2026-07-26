import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Play,
  ShieldCheck,
  Wifi,
  Zap,
} from "lucide-react";
import platformPreview from "@assets/ghehr-screenshot.webp";
import { buildCdnSources, onCdnImgError } from "@/lib/cdn";

const featurePoints = [
  {
    icon: Wifi,
    title: "Low-bandwidth ready",
    description: "Keeps clinic workflows responsive on unstable connections.",
  },
  {
    icon: ShieldCheck,
    title: "Audit-ready records",
    description: "Role-based access and traceable updates for patient data.",
  },
  {
    icon: Zap,
    title: "Faster patient flow",
    description: "Reduce paperwork and move from intake to care faster.",
  },
  {
    icon: Activity,
    title: "Built for clinics",
    description: "Designed around real outpatient and inpatient operations.",
  },
];

const HeroMinimal = () => {
  const previewCdn = buildCdnSources("ghehr-screenshot.webp", {
    widths: [480, 768, 1200, 1600],
    quality: 75,
  });

  return (
    <section
      className="relative overflow-hidden bg-[#0a2742] text-white"
      aria-label="Hero section for GhEHR clinic software"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a3d62] via-[#0a2742] to-[#041425]" />
      <div
        className="absolute inset-0 opacity-[0.08]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -left-32 -top-16 h-72 w-72 rounded-full bg-[#22c55e]/12 blur-3xl motion-safe:animate-drift" aria-hidden />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#0ea5e9]/12 blur-3xl motion-safe:animate-drift-slow" aria-hidden />
      <div className="absolute right-1/3 top-1/4 h-56 w-56 rounded-full bg-[#facc15]/10 blur-3xl motion-safe:animate-drift" aria-hidden />

      <div className="container relative py-16 md:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:gap-14">
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7dd3fc]"
            >
              Live in production · Woodgreen Clinic, Ghana
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="space-y-5"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-[2.9rem] font-bold leading-tight tracking-tight max-w-3xl">
                <span className="text-[#e0f2fe]">Digital Health Records Built for</span>{" "}
                <span className="text-[#facc15]">Ghanaian Clinics</span>
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                Replace paperwork, manage patients, and streamline care-even with low bandwidth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contact?intent=demo"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#185abd] to-[#0e4ea3] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-[#185abd]/30 transition hover:-translate-y-[1px] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#185abd] focus:ring-offset-2 focus:ring-offset-[#0a2742]"
                data-testid="hero-cta-discover"
                aria-label="Request demo of GhEHR"
              >
                Request Demo
                <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-hover-slide group-hover:translate-x-1" />
              </Link>
              <Link
                href="/solutions/ghehr"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/12 focus:outline-none focus:ring-2 focus:ring-[#185abd] focus:ring-offset-2 focus:ring-offset-[#0a2742]"
                data-testid="hero-cta-experience"
                aria-label="See GhEHR in action"
              >
                <Play className="h-4 w-4" />
                See GhEHR in Action
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
            >
              {featurePoints.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm shadow-black/10"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#22c55e]/14 text-white">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs leading-relaxed text-white/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 h-16 w-16 rounded-full bg-[#22c55e]/40 blur-2xl" aria-hidden />
            <div className="absolute -right-10 -bottom-10 h-24 w-24 rounded-full bg-[#facc15]/20 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur shadow-2xl shadow-black/30">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden />
              </div>

              <div className="relative p-3">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/15 bg-white/5">
                  <img
                    src={previewCdn?.src ?? platformPreview}
                    srcSet={previewCdn?.srcSet}
                    sizes="(max-width: 768px) 90vw, (max-width: 1280px) 480px, 620px"
                    alt="Preview of GhEHR platform interface"
                    className="h-full w-full object-cover"
                    width={1600}
                    height={1000}
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    onError={onCdnImgError(platformPreview)}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a233b] via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroMinimal;
