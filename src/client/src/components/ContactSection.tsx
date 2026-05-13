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
    ? <>一位专家无法承担的工作，由 15 个 AI 智能体承担。<br />单一积分驱动整合阵列，以招聘一人所需的时间引入。每月都有新的智能体加入，您的业务可覆盖范围持续扩展。</>
    : lang === "en"
    ? <>What one specialist can't cover, 15 AI agents do.<br />An integrated lineup running on a single credit — adopt it in the time it takes to hire one person. Every month, new agents join — widening the surface area your business can cover.</>
    : lang === "jp"
    ? <>一人の専門家では担えない仕事を、15のAIエージェントが担います。<br />ひとつのクレジットで動く統合ラインアップを、一人を採用する時間で導入できます。毎月新しいエージェントが加わり、貴社がカバーできる領域が広がり続けます。</>
    : <>한 명의 전문가가 감당할 수 없는 일을, 15개의 AI 에이전트가 합니다.<br />단일 크레딧으로 작동하는 통합 라인업을, 한 명을 채용하는 시간에 도입하세요. 매달 새로운 에이전트가 합류해 귀사의 라인업이 계속 넓어집니다.</>;

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-50 via-white to-navy-50 dark:from-navy-950 dark:via-navy-800/30 dark:to-navy-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.04] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-blue-700 dark:text-blue-500 text-base font-semibold tracking-[0.25em] uppercase">
            {i.eyebrow}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4 text-navy-900 dark:text-white">
            {i.headline}
            <br />
            <span className="text-blue-600 dark:text-blue-400">{i.headlineAccent}</span>
          </h2>
          <div className="gold-line max-w-24 mx-auto mt-6" />
          <p className="text-navy-500 dark:text-navy-300 mt-6 max-w-xl mx-auto leading-relaxed">
            {descText}
          </p>

          <div className="mt-10">
            <a
              href="mailto:info@handaro.ai"
              className="group inline-flex items-center gap-3 bg-navy-800 dark:bg-blue-500 hover:bg-navy-900 dark:hover:bg-blue-600 text-white dark:text-navy-950 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg text-base tracking-wide"
            >
              <Mail className="w-5 h-5" />
              <span>{i.ctaBtn}</span>
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-navy-200 dark:border-navy-700/50 space-y-2">
            <p className="text-navy-400 text-base">
              {i.contactLabel}:{" "}
              <a
                href="mailto:info@handaro.ai"
                className="text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                info@handaro.ai
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
