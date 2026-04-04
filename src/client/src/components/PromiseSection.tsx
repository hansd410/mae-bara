/*
 * Promise Section — Light default + Dark mode + i18n
 * AX 파트너 3대 약속
 */
import { motion } from "framer-motion";
import { Stethoscope, Terminal, TrendingUp } from "lucide-react";
import { t, type Lang } from "@/lib/i18n";

const icons = [Stethoscope, Terminal, TrendingUp];

export default function PromiseSection({ lang = "ko" as Lang }: { lang?: Lang }) {
  const i = t(lang).promise;

  return (
    <section id="promise" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-50 via-white to-navy-50 dark:from-navy-950 dark:via-navy-800/40 dark:to-navy-950" />
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
          <span className="text-gold-700 dark:text-gold-500 text-base font-semibold tracking-[0.25em] uppercase">
            {i.eyebrow}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4 text-navy-900 dark:text-white">
            {i.headline}{" "}
            <span className="text-gold-600 dark:text-gold-400">{i.headlineAccent}</span>
          </h2>
          <div className="gold-line max-w-24 mx-auto mt-6" />
          <p className="text-navy-500 dark:text-navy-300 mt-6 max-w-xl mx-auto leading-relaxed">
            {i.sub}
          </p>
        </motion.div>

        {/* Promise Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {i.items.map((p, idx) => {
            const Icon = icons[idx] || Stethoscope;
            return (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-card rounded-2xl p-8 text-center group"
              >
                <div className="text-gold-500/40 text-base font-bold tracking-[0.3em] mb-4">
                  Promise {p.num}
                </div>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gold-100 dark:bg-gold-500/10 border border-gold-300 dark:border-gold-500/20 flex items-center justify-center mb-6 group-hover:bg-gold-200 dark:group-hover:bg-gold-500/20 transition-colors">
                  <Icon className="w-8 h-8 text-gold-700 dark:text-gold-400" />
                </div>
                <h3 className="text-navy-900 dark:text-white font-bold text-xl mb-4 font-serif">{p.title}</h3>
                <p className="text-navy-500 dark:text-navy-300 text-base leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 gold-line" />
    </section>
  );
}
