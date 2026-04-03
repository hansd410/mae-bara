/*
 * Ecosystem Section — Light default + Dark mode + i18n
 * 3대 서브 브랜드: AX / Solutions / Academy
 * 통일 4등급 체계: Basic → Standard → Advanced → Premium
 * 묶음 할인: AX + Solutions + Academy 함께 구매 시 15~20% 할인
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Wrench,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Crown,
  Zap,
  Layers,
  Sparkles,
  Mail,
  Gift,
} from "lucide-react";
import { t, type Lang } from "@/lib/i18n";

/* ── Tier visual config (not translated) ── */
const tierColors: Record<string, { color: string; textColor: string }> = {
  basic: { color: "bg-navy-500", textColor: "text-white" },
  standard: { color: "bg-amber-500", textColor: "text-white" },
  advanced: { color: "bg-emerald-600", textColor: "text-white" },
  premium: { color: "bg-gold-600", textColor: "text-white" },
};

const brandIcons = [Compass, Wrench, GraduationCap];

/* ── Tier icon ── */
function TierIcon({ tierKey }: { tierKey: string }) {
  switch (tierKey) {
    case "premium": return <Crown className="w-4 h-4" />;
    case "advanced": return <Sparkles className="w-4 h-4" />;
    case "standard": return <Zap className="w-4 h-4" />;
    default: return <Layers className="w-4 h-4" />;
  }
}

/* ── Consult mailto helper ── */
function openConsultMail(lang: Lang, category: string, item: string, detail?: string) {
  const i = t(lang).ecosystem.consultMail;
  const subject = encodeURIComponent(`[${lang === "zh" ? "咨询申请" : lang === "en" ? "Consultation Request" : "상담 요청"}] ${category} — ${item}`);
  const body = encodeURIComponent(
    i.greeting + i.interest + `${category} — ${item}\n` +
    (detail ? i.detail + detail + "\n" : "") +
    i.request + i.footer
  );
  window.open(`mailto:info@maebara.org?subject=${subject}&body=${body}`, "_self");
}

/* ── Service field key by brand type ── */
type ServiceField = "ax" | "solutions" | "academy";
function getServiceField(brandType: string): ServiceField {
  if (brandType === "ax") return "ax";
  if (brandType === "solutions") return "solutions";
  return "academy";
}

/* ── Unified Tier Detail Component ── */
function TierDetail({ brandType, brandName, lang }: { brandType: string; brandName: string; lang: Lang }) {
  const [expandedTier, setExpandedTier] = useState<number | null>(null);
  const i = t(lang).ecosystem;
  const field = getServiceField(brandType);

  return (
    <div>
      <h4 className="text-navy-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
        {i.tierServiceTitle}
      </h4>

      <div className="space-y-3 mb-6">
        {i.tierDefs.map((tier, idx) => {
          const service = i.tierServices.find((s) => s.tierKey === tier.key);
          const isExpanded = expandedTier === idx;
          const isRecommended = tier.key === "standard";
          const vc = tierColors[tier.key] || tierColors.basic;

          return (
            <div
              key={tier.key}
              className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                isRecommended
                  ? "border-amber-300 dark:border-amber-500/40 ring-1 ring-amber-200 dark:ring-amber-500/20"
                  : "border-navy-200 dark:border-navy-700/30"
              }`}
            >
              <button
                onClick={() => setExpandedTier(isExpanded ? null : idx)}
                className="w-full flex items-center justify-between p-4 bg-navy-50 dark:bg-navy-800/30 hover:bg-navy-100 dark:hover:bg-navy-800/50 transition-colors"
              >
                <div className="flex items-center gap-3 flex-wrap">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${vc.color} ${vc.textColor} flex items-center gap-1.5 shrink-0`}>
                    <TierIcon tierKey={tier.key} />
                    {tier.label}
                  </span>
                  <span className="text-navy-500 dark:text-navy-300 text-xs">{tier.copy}</span>
                  {isRecommended && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-500/15 text-amber-700 dark:text-amber-400 text-[10px] font-bold tracking-wider uppercase shrink-0">
                      {i.bestValue}
                    </span>
                  )}
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-navy-400 shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-navy-400 shrink-0 ml-2" />
                )}
              </button>

              <AnimatePresence>
                {isExpanded && service && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-white dark:bg-navy-900/20">
                      <p className="text-navy-600 dark:text-navy-300 text-sm leading-relaxed mb-4">
                        {service[field]}
                      </p>
                      <button
                        onClick={() => openConsultMail(lang, brandName, `${tier.label}`, service[field])}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gold-100 dark:bg-gold-500/10 text-gold-700 dark:text-gold-400 text-xs font-semibold hover:bg-gold-200 dark:hover:bg-gold-500/20 transition-colors border border-gold-200 dark:border-gold-500/20"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        {i.consultBtn}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Bundle Discount Banner */}
      <div className="rounded-xl border-2 border-dashed border-gold-300 dark:border-gold-500/30 bg-gold-50/50 dark:bg-gold-500/5 p-5">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-gold-100 dark:bg-gold-500/10 border border-gold-300 dark:border-gold-500/20 flex items-center justify-center shrink-0">
            <Gift className="w-5 h-5 text-gold-700 dark:text-gold-400" />
          </div>
          <div>
            <h5 className="text-navy-900 dark:text-white font-bold text-sm mb-1">{i.bundleTitle}</h5>
            <p className="text-navy-500 dark:text-navy-300 text-xs leading-relaxed mb-3">
              {i.bundleDesc1}{" "}
              <span className="text-gold-700 dark:text-gold-400 font-bold">{i.bundleDiscount}</span>
              {i.bundleDesc2}
            </p>
            <button
              onClick={() => openConsultMail(lang, i.consultMailCategory, i.consultMailItem)}
              className="flex items-center gap-1.5 text-gold-700 dark:text-gold-400 text-xs font-semibold hover:text-gold-800 dark:hover:text-gold-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              {i.bundleBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function EcosystemSection({ lang = "ko" as Lang }: { lang?: Lang }) {
  const [active, setActive] = useState(0);
  const i = t(lang).ecosystem;
  const brand = i.brands[active];
  const BrandIcon = brandIcons[active];

  return (
    <section id="ecosystem" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-50 via-white to-navy-50 dark:from-navy-950 dark:via-navy-900/50 dark:to-navy-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-700 dark:text-gold-500 text-xs font-semibold tracking-[0.25em] uppercase">
            {i.eyebrow}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4 text-navy-900 dark:text-white">
            {i.headline}{" "}
            <span className="text-gold-600 dark:text-gold-400">{i.headlineAccent}</span>
          </h2>
          <div className="gold-line max-w-24 mx-auto mt-6" />
          <p className="text-navy-500 dark:text-navy-300 mt-6 max-w-2xl mx-auto leading-relaxed">{i.sub}</p>

          {/* Unified 4-Tier Overview */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {i.tierDefs.map((tier) => {
              const vc = tierColors[tier.key] || tierColors.basic;
              return (
                <span key={tier.key} className={`px-2 py-1 rounded-lg text-[10px] font-bold ${vc.color} ${vc.textColor} flex items-center gap-1`}>
                  <TierIcon tierKey={tier.key} />
                  {tier.label}
                </span>
              );
            })}
            <span className="text-navy-400 dark:text-navy-500 text-xs flex items-center ml-1">
              {i.tierNote}
            </span>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {i.brands.map((b, idx) => {
            const Icon = brandIcons[idx];
            return (
              <button
                key={b.id}
                onClick={() => setActive(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                  active === idx
                    ? "bg-gold-100 dark:bg-gold-500/15 border-gold-400 dark:border-gold-500/50 text-gold-800 dark:text-gold-400 shadow-lg shadow-gold-500/10"
                    : "bg-white dark:bg-navy-800/40 border-navy-200 dark:border-navy-700/40 text-navy-500 dark:text-navy-300 hover:border-navy-300 dark:hover:border-navy-600/60 hover:text-navy-700 dark:hover:text-navy-100"
                }`}
              >
                <Icon className="w-4 h-4" />
                {b.name}
              </button>
            );
          })}
        </div>

        {/* Active Brand Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={brand.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-8 md:p-10"
          >
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Left: Brand Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-100 dark:bg-gold-500/10 border border-gold-300 dark:border-gold-500/20 flex items-center justify-center">
                    <BrandIcon className="w-6 h-6 text-gold-700 dark:text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-navy-900 dark:text-white font-bold text-xl">{brand.name}</h3>
                    <p className="text-gold-700 dark:text-gold-400 text-sm font-medium">{brand.tagline}</p>
                  </div>
                </div>

                <p className="text-navy-600 dark:text-navy-200 leading-relaxed mb-6 text-sm">{brand.narrative}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <span className="text-gold-700 dark:text-gold-500 text-xs font-bold mt-0.5 shrink-0">TARGET</span>
                    <span className="text-navy-500 dark:text-navy-300 text-sm">{brand.target}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gold-700 dark:text-gold-500 text-xs font-bold mt-0.5 shrink-0">VALUE</span>
                    <span className="text-navy-500 dark:text-navy-300 text-sm">{brand.value}</span>
                  </div>
                </div>
              </div>

              {/* Right: Unified Tier Detail */}
              <div className="lg:col-span-3">
                <TierDetail brandType={brand.id} brandName={brand.name} lang={lang} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Flow Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid sm:grid-cols-3 gap-4"
        >
          {i.flowSteps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-navy-50 dark:bg-navy-800/20 border border-navy-200 dark:border-navy-700/20">
              <div className="w-8 h-8 rounded-full bg-gold-100 dark:bg-gold-500/10 border border-gold-300 dark:border-gold-500/20 flex items-center justify-center shrink-0">
                <span className="text-gold-700 dark:text-gold-400 text-xs font-bold">{idx + 1}</span>
              </div>
              <div>
                <p className="text-navy-400 text-xs font-semibold tracking-wider uppercase">{step.brand}</p>
                <p className="text-navy-700 dark:text-navy-200 text-sm">{step.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 gold-line" />
    </section>
  );
}
