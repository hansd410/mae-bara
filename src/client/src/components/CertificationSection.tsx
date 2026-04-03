/*
 * Certification Section — AI-Native 인증서 발급 + i18n
 * Light default + Dark mode
 */
import { motion } from "framer-motion";
import { ShieldCheck, Award, BadgeCheck, FileCheck2, ArrowRight } from "lucide-react";
import { t, type Lang } from "@/lib/i18n";

const certIcons = [FileCheck2, BadgeCheck, Award];

export default function CertificationSection({ lang = "ko" as Lang }: { lang?: Lang }) {
  const i = t(lang).certification;

  const auditText = lang === "en"
    ? "MaeBara's OpenAI Hackathon global-winning experts visit your company to comprehensively audit data infrastructure, AI utilization, and organizational capabilities, then issue tier-specific certifications."
    : "매바라의 OpenAI 해커톤 글로벌 우승 전문가가 직접 귀사를 방문하여 데이터 인프라, AI 활용도, 조직 역량을 종합 감사(Audit)한 뒤, 등급별 인증서를 발급합니다.";

  const ctaNote = lang === "en"
    ? "After completing the AX maturity assessment, the certification process will be guided."
    : "AX 성숙도 진단을 먼저 받으신 후, 인증 프로세스가 안내됩니다.";

  return (
    <section id="certification" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-50/50 to-background dark:from-navy-950 dark:via-navy-900/30 dark:to-navy-950" />
      <div className="absolute top-0 left-0 right-0 gold-line" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
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
          <p className="text-navy-500 dark:text-navy-300 mt-6 max-w-2xl mx-auto leading-relaxed">
            {i.intro}
          </p>
        </motion.div>

        {/* Shield Icon + Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-14"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 dark:from-gold-500/15 dark:to-gold-500/5 border border-gold-300 dark:border-gold-500/25 flex items-center justify-center mb-6 shadow-lg shadow-gold-500/10">
            <ShieldCheck className="w-10 h-10 text-gold-700 dark:text-gold-400" />
          </div>
          <p className="text-navy-600 dark:text-navy-300 text-center max-w-lg leading-relaxed text-sm">
            {auditText}
          </p>
        </motion.div>

        {/* Certification Levels */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {i.levels.map((cert, idx) => {
            const Icon = certIcons[idx] || FileCheck2;
            return (
              <motion.div
                key={cert.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-card rounded-2xl p-8 text-center group"
              >
                <div className="text-gold-500/50 text-xs font-bold tracking-[0.3em] mb-4 uppercase">
                  {cert.level}
                </div>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gold-100 dark:bg-gold-500/10 border border-gold-300 dark:border-gold-500/20 flex items-center justify-center mb-6 group-hover:bg-gold-200 dark:group-hover:bg-gold-500/20 transition-colors">
                  <Icon className="w-8 h-8 text-gold-700 dark:text-gold-400" />
                </div>
                <h3 className="text-navy-900 dark:text-white font-bold text-xl mb-2 font-serif">{cert.name}</h3>
                <p className="text-navy-500 dark:text-navy-300 text-sm leading-relaxed mb-6">{cert.desc}</p>
                <div className="text-left space-y-2">
                  {cert.criteria.map((c, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <BadgeCheck className="w-4 h-4 text-gold-600 dark:text-gold-500 shrink-0 mt-0.5" />
                      <span className="text-navy-600 dark:text-navy-300 text-xs leading-relaxed">{c}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="#assessment"
            className="group inline-flex items-center gap-2 bg-navy-800 dark:bg-gold-500 hover:bg-navy-900 dark:hover:bg-gold-600 text-white dark:text-navy-950 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg text-sm tracking-wide"
          >
            <span>{i.ctaBtn}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="text-navy-400 text-xs mt-4">{ctaNote}</p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 gold-line" />
    </section>
  );
}
