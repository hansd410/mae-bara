/*
 * Product Section — 전 제품 통합 + i18n
 * Light default + Dark mode
 */
import { motion } from "framer-motion";
import {
  FileSearch,
  BarChart3,
  Users,
  Shield,
  Clapperboard,
  Bot,
  ShoppingBag,
  Anchor,
  ArrowRight,
  Video,
  Store,
} from "lucide-react";
import { t, type Lang } from "@/lib/i18n";

/* ── Product → Labs/One page URL mapping ── */
const PRODUCT_HREFS: Record<string, { ko: string; en: string }> = {
  "Storyroll":    { ko: "https://autotubeai-hxyetbz3.manus.space/", en: "https://autotubeai-hxyetbz3.manus.space/" },
  "Selldi":       { ko: "https://prodpagegen-pxwjrc53.manus.space/", en: "https://prodpagegen-pxwjrc53.manus.space/" },
  "True Draft":   { ko: "https://truedraft.shop",    en: "https://truedraft.shop" },
  "True Predict": { ko: "/labs/truePredict/truePredict.html", en: "/labs/truePredict/truePredict_en.html" },
  "True Persona": { ko: "/labs/truePersona/truePersona.html", en: "/labs/truePersona/truePersona_en.html" },
  "True Guard":   { ko: "/labs/trueGuard/trueGuard.html",    en: "/labs/trueGuard/trueGuard_en.html" },
  "True Forge":   { ko: "/labs/trueForge/trueForge.html",    en: "/labs/trueForge/trueForge_en.html" },
  "True Agent":   { ko: "/labs/trueAgent/trueAgent.html",    en: "/labs/trueAgent/trueAgent_en.html" },
  "Pure LLM":     { ko: "/labs/pureLLM/purellm.html",        en: "/labs/pureLLM/purellm_en.html" },
  "MaeBara One":  { ko: "/one/one_index.html",               en: "/one/one_index_en.html" },
};

/* ── Product data (bilingual) ── */
const products = {
  ko: [
    { icon: Video, name: "Storyroll", subtitle: "AI Video Generator", desc: "텍스트를 입력하면 AI가 영상을 만듭니다. 5단계 자동 파이프라인으로 영상 클립·나레이션·더빙까지 원클릭 완성.", category: "영상 생성", tag: "New" },
    { icon: Store, name: "Selldi", subtitle: "AI Product Page Builder", desc: "상품명 하나로 팔리는 상세페이지를 30초 만에 완성. AI 카피라이팅·디자인·상품 이미지까지 자동 생성.", category: "이커머스", tag: "New" },
    { icon: FileSearch, name: "True Draft", subtitle: "AI Universal Document Auditor", desc: "Vision AI 기반 문서 검증 시스템. 표, 도면, 수치 데이터의 완벽한 정합성 분석으로 모든 산업의 규격 문서를 자동 감사합니다.", category: "문서 자동화" },
    { icon: BarChart3, name: "True Predict", subtitle: "AI Demand & Logistics Forecaster", desc: "글로벌 트렌드와 공급망 변수를 결합한 AI 예측 솔루션. 제조, 유통, 금융 분야의 수요 예측과 리스크 관리를 지원합니다.", category: "예측 분석" },
    { icon: Users, name: "True Persona", subtitle: "Hyper-Personalization Engine", desc: "고객 행동과 취향을 실시간 분석하는 초개인화 마케팅 엔진. 이커머스, 미디어, 교육, 금융 분야에서 전환율을 극대화합니다.", category: "마케팅" },
    { icon: Shield, name: "True Guard", subtitle: "AI Digital Safety & Security", desc: "보이스피싱, 스미싱, 딥페이크 사기를 실시간으로 탐지하는 AI 보안 솔루션. 은행, 통신사, 정부, 기업을 위한 디지털 안전망입니다.", category: "보안" },
    { icon: Clapperboard, name: "True Forge", subtitle: "AI Content Generation Pipeline", desc: "게임 에셋, 3D 모델, 다국어 시나리오를 자동 생성하는 AI 파이프라인. 제작 단가를 1/10로 낮추고 퀄리티는 극대화합니다.", category: "콘텐츠 생성" },
    { icon: Bot, name: "True Agent", subtitle: "AI Autonomous Task Engine", desc: "보고를 넘어 실무를 수행하는 AI 자율 업무 에이전트. 기업 시스템과 직접 통신하여 인간 업무의 80%를 자동화합니다.", category: "업무 자동화" },
    { icon: ShoppingBag, name: "Pure LLM", subtitle: "The Purest AI for Shopify", desc: "쇼피파이 스토어에 GPT, Claude 등 최신 LLM을 직접 연동하는 순수한 AI 통합 솔루션. 코드 없이 강력한 지능을 추가하세요.", category: "커머스", tag: "App" },
    { icon: Anchor, name: "MaeBara One", subtitle: "Port Sync Orchestrator", desc: "항만 지능 운영체제. 처방형 AI(Prescriptive AI)를 통해 분석을 넘어 이익을 확정하는 Decision-as-a-Service를 제공합니다.", category: "물류·항만", tag: "Enterprise" },
  ],
  en: [
    { icon: Video, name: "Storyroll", subtitle: "AI Video Generator", desc: "Type text, and AI creates your video. A 5-step pipeline auto-generates clips, narration, and dubbing in one click.", category: "Video Creation", tag: "New" },
    { icon: Store, name: "Selldi", subtitle: "AI Product Page Builder", desc: "Build a high-converting product detail page in 30 seconds. AI auto-generates copywriting, design, and product images.", category: "E-commerce", tag: "New" },
    { icon: FileSearch, name: "True Draft", subtitle: "AI Universal Document Auditor", desc: "A Vision AI-powered document verification system. Automatically audits regulatory documents across all industries with perfect consistency analysis of tables, drawings, and numerical data.", category: "Document Automation" },
    { icon: BarChart3, name: "True Predict", subtitle: "AI Demand & Logistics Forecaster", desc: "An AI forecasting solution combining global trends with supply chain variables. Supports demand forecasting and risk management in manufacturing, distribution, and finance.", category: "Predictive Analytics" },
    { icon: Users, name: "True Persona", subtitle: "Hyper-Personalization Engine", desc: "A hyper-personalization marketing engine that analyzes customer behavior and preferences in real-time. Maximizes conversion rates in e-commerce, media, education, and finance.", category: "Marketing" },
    { icon: Shield, name: "True Guard", subtitle: "AI Digital Safety & Security", desc: "An AI security solution that detects voice phishing, smishing, and deepfake fraud in real-time. A digital safety net for banks, telecoms, governments, and enterprises.", category: "Security" },
    { icon: Clapperboard, name: "True Forge", subtitle: "AI Content Generation Pipeline", desc: "An AI pipeline that auto-generates game assets, 3D models, and multilingual scenarios. Cuts production costs to 1/10 while maximizing quality.", category: "Content Creation" },
    { icon: Bot, name: "True Agent", subtitle: "AI Autonomous Task Engine", desc: "An AI autonomous task agent that goes beyond reporting to execute real work. Communicates directly with enterprise systems to automate 80% of human tasks.", category: "Task Automation" },
    { icon: ShoppingBag, name: "Pure LLM", subtitle: "The Purest AI for Shopify", desc: "A pure AI integration solution that connects the latest LLMs like GPT and Claude directly to your Shopify store. Add powerful intelligence without code.", category: "Commerce", tag: "App" },
    { icon: Anchor, name: "MaeBara One", subtitle: "Port Sync Orchestrator", desc: "A port intelligence operating system. Delivers Decision-as-a-Service through Prescriptive AI that goes beyond analysis to lock in profits.", category: "Logistics & Port", tag: "Enterprise" },
  ],
  zh: [
    { icon: Video, name: "Storyroll", subtitle: "AI Video Generator", desc: "输入文字，AI自动生成视频。五步流水线一键完成视频片段、旁白与配音。", category: "视频生成", tag: "New" },
    { icon: Store, name: "Selldi", subtitle: "AI Product Page Builder", desc: "只需输入商品名称，30秒完成高转化率商品详情页。AI自动生成文案、设计与商品图片。", category: "电商", tag: "New" },
    { icon: FileSearch, name: "True Draft", subtitle: "AI Universal Document Auditor", desc: "基于Vision AI的文件验证系统。通过对表格、图纸、数值数据的完美一致性分析，自动审计各行业的规格文件。", category: "文件自动化" },
    { icon: BarChart3, name: "True Predict", subtitle: "AI Demand & Logistics Forecaster", desc: "结合全球趋势与供应链变量的AI预测解决方案。支持制造、分销、金融领域的需求预测和风险管理。", category: "预测分析" },
    { icon: Users, name: "True Persona", subtitle: "Hyper-Personalization Engine", desc: "实时分析客户行为和偏好的超个性化营销引擎。在电商、媒体、教育、金融领域最大化转化率。", category: "营销" },
    { icon: Shield, name: "True Guard", subtitle: "AI Digital Safety & Security", desc: "实时检测语音诈骗、短信诈骗、深度伪造诈骗的AI安全解决方案。为銀行、电信、政府、企业提供数字安全网。", category: "安全" },
    { icon: Clapperboard, name: "True Forge", subtitle: "AI Content Generation Pipeline", desc: "自动生成游戏资产、3D模型、多语言剧本的AI流水线。将制作成本降至1/10，同时最大化质量。", category: "内容生成" },
    { icon: Bot, name: "True Agent", subtitle: "AI Autonomous Task Engine", desc: "超越报告、执行实务的AI自主业务代理。直接与企业系统通信，自动化人类工作的80%。", category: "业务自动化" },
    { icon: ShoppingBag, name: "Pure LLM", subtitle: "The Purest AI for Shopify", desc: "将GPT、Claude等最新LLM直接集成到Shopify店铺的纯粹AI集成解决方案。无需代码即可添加强大智能。", category: "电商", tag: "App" },
    { icon: Anchor, name: "MaeBara One", subtitle: "Port Sync Orchestrator", desc: "港口智能操作系统。通过处方型AI（Prescriptive AI）提供超越分析、确定利益的Decision-as-a-Service。", category: "物流·港口", tag: "Enterprise" },
  ],
};

export default function ProductSection({ lang = "ko" as Lang }: { lang?: Lang }) {
  const i = t(lang).product;
  const items = products[lang];
  const hrefLang = lang === "zh" ? "en" : lang;

  return (
    <section id="product" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-navy-900 dark:via-navy-950 dark:to-navy-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
          <p className="text-navy-500 dark:text-navy-300 mt-6 max-w-2xl mx-auto leading-relaxed">
            {i.sub}
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((product, idx) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group relative rounded-2xl p-6 bg-white dark:bg-navy-800/30 border border-navy-200 dark:border-navy-700/30 hover:border-gold-300 dark:hover:border-gold-500/30 hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="px-2.5 py-0.5 bg-navy-100 dark:bg-navy-700/30 text-navy-500 dark:text-navy-400 text-[10px] font-semibold rounded-full">
                  {product.category}
                </span>
                {product.tag && (
                  <span className="px-2.5 py-0.5 bg-gold-100 dark:bg-gold-500/15 text-gold-700 dark:text-gold-400 text-[10px] font-semibold rounded-full border border-gold-200 dark:border-gold-500/20">
                    {product.tag}
                  </span>
                )}
              </div>

              <div className="w-12 h-12 rounded-xl bg-gold-100 dark:bg-gold-500/10 border border-gold-200 dark:border-gold-500/20 flex items-center justify-center mb-4 group-hover:bg-gold-200 dark:group-hover:bg-gold-500/20 transition-colors shrink-0">
                <product.icon className="w-6 h-6 text-gold-700 dark:text-gold-400" />
              </div>

              <h3 className="text-navy-900 dark:text-white font-bold text-lg mb-1 leading-tight">{product.name}</h3>
              <p className="text-gold-600 dark:text-gold-400 text-base font-medium mb-3">{product.subtitle}</p>
              <p className="text-navy-500 dark:text-navy-400 text-base leading-relaxed mb-5 flex-1">{product.desc}</p>

              <a
                href={PRODUCT_HREFS[product.name]?.[hrefLang] ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gold-700 dark:text-gold-400 text-base font-semibold hover:text-gold-800 dark:hover:text-gold-300 transition-colors mt-auto"
              >
                {i.viewBtn}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 gold-line" />
    </section>
  );
}
