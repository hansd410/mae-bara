/*
 * About Section — Light default + Dark mode
 * AX 전문 파트너 정체성 + 3대 차별화 강점
 */
import { motion } from "framer-motion";
import { Zap, FlaskConical, ScanEye } from "lucide-react";
import { t, type Lang } from "@/lib/i18n";

const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663325138416/6uQycx7vmjvWLhEUm478jc/about-section-5A8m4nvRbHVH4VzX3cdaBw.webp";

const icons = [Zap, FlaskConical, ScanEye];

export default function AboutSection({ lang = "ko" as Lang }: { lang?: Lang }) {
  const i = t(lang).about;

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={ABOUT_BG} alt="" className="w-full h-full object-cover opacity-[0.06] dark:opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

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
            {i.headlineEnd}
          </h2>
          <div className="gold-line max-w-24 mx-auto mt-6" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-navy-700 dark:text-navy-100 text-lg leading-relaxed mb-6">
              {i.p1}
            </p>
            <p className="text-navy-500 dark:text-navy-300 leading-relaxed mb-8">
              {i.p2}
            </p>

            {/* Two key concepts */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl glass-card !transform-none !shadow-none hover:!transform-none hover:!shadow-none">
                <div className="w-10 h-10 rounded-lg bg-gold-100 dark:bg-gold-500/10 border border-gold-300 dark:border-gold-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-gold-700 dark:text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-navy-900 dark:text-white font-bold text-sm mb-1">{i.concept1Title} ({i.concept1Sub})</h4>
                  <p className="text-navy-500 dark:text-navy-300 text-sm leading-relaxed">
                    {i.concept1Desc}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl glass-card !transform-none !shadow-none hover:!transform-none hover:!shadow-none">
                <div className="w-10 h-10 rounded-lg bg-gold-100 dark:bg-gold-500/10 border border-gold-300 dark:border-gold-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-gold-700 dark:text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-navy-900 dark:text-white font-bold text-sm mb-1">{i.concept2Title} ({i.concept2Sub})</h4>
                  <p className="text-navy-500 dark:text-navy-300 text-sm leading-relaxed">
                    {i.concept2Desc}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: 3 strengths */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-navy-400 dark:text-navy-400 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                Why MaeBara
              </h3>
            </motion.div>

            {i.strengths.map((s, idx) => {
              const Icon = icons[idx] || Zap;
              return (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="glass-card rounded-2xl p-6 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <span className="text-gold-500/60 text-xs font-bold tracking-wider">{s.num}</span>
                      <div className="w-12 h-12 rounded-xl bg-gold-100 dark:bg-gold-500/10 border border-gold-300 dark:border-gold-500/20 flex items-center justify-center group-hover:bg-gold-200 dark:group-hover:bg-gold-500/20 transition-colors">
                        <Icon className="w-6 h-6 text-gold-700 dark:text-gold-400" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="text-navy-900 dark:text-white font-bold text-lg">{s.title}</h3>
                        <span className="px-2.5 py-0.5 bg-gold-100 dark:bg-gold-500/15 text-gold-700 dark:text-gold-400 text-[10px] font-bold rounded-full border border-gold-300 dark:border-gold-500/20 tracking-wider uppercase">
                          {s.highlight}
                        </span>
                      </div>
                      <p className="text-navy-500 dark:text-navy-300 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
