/*
 * Contact Section — Light default + Dark mode + i18n
 * AX 진단 요청 CTA
 */
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { t, type Lang } from "@/lib/i18n";

export default function ContactSection({ lang = "ko" as Lang }: { lang?: Lang }) {
  const i = t(lang).contact;

  const descText = lang === "zh"
    ? <>您的数据可能正在错失收益机会。MaeBara的OpenAI黑客马拉松全球冠军专家将免费进行审查(Audit)。<br />我们在15天内用数字证明ROI。</>
    : lang === "en"
    ? <>Your data could be generating revenue. Our OpenAI Hackathon global-winning experts will perform a free audit.<br />We prove ROI in numbers within 15 days.</>
    : <>귀사의 데이터가 수익이 될 수 있는지, OpenAI 해커톤 글로벌 우승 전문가가 무료로 감사(Audit)를 수행합니다.<br />15일 이내에 ROI를 숫자로 증명합니다.</>;

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-50 via-white to-navy-50 dark:from-navy-950 dark:via-navy-800/30 dark:to-navy-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/[0.04] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-gold-700 dark:text-gold-500 text-xs font-semibold tracking-[0.25em] uppercase">
            {i.eyebrow}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4 text-navy-900 dark:text-white">
            {i.headline}
            <br />
            <span className="text-gold-600 dark:text-gold-400">{i.headlineAccent}</span>
          </h2>
          <div className="gold-line max-w-24 mx-auto mt-6" />
          <p className="text-navy-500 dark:text-navy-300 mt-6 max-w-xl mx-auto leading-relaxed">
            {descText}
          </p>

          <div className="mt-10">
            <a
              href="mailto:info@maebara.org"
              className="group inline-flex items-center gap-3 bg-navy-800 dark:bg-gold-500 hover:bg-navy-900 dark:hover:bg-gold-600 text-white dark:text-navy-950 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg text-sm tracking-wide"
            >
              <Mail className="w-5 h-5" />
              <span>{i.ctaBtn}</span>
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-navy-200 dark:border-navy-700/50 space-y-2">
            <p className="text-navy-400 text-sm">
              {i.contactLabel}:{" "}
              <a
                href="mailto:info@maebara.org"
                className="text-gold-700 dark:text-gold-400 hover:text-gold-800 dark:hover:text-gold-300 transition-colors"
              >
                info@maebara.org
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
