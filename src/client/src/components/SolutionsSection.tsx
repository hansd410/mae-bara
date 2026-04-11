/*
 * Design: Sovereign Command — Solutions Section
 * 밝은 배경 전환으로 시각적 리듬 생성
 * 서비스 카드 그리드
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
} from "lucide-react";

const SOLUTIONS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663325138416/6uQycx7vmjvWLhEUm478jc/solutions-bg-DYfVJdHQKPwqwA4Nd49zht.webp";

const solutions = [
  {
    icon: FileSearch,
    title: "AI Universal Document Auditor",
    desc: "Vision AI 기반 문서 검증 시스템. 표, 도면, 수치 데이터의 완벽한 정합성 분석으로 모든 산업의 규격 문서를 자동 감사합니다.",
    tag: null,
  },
  {
    icon: BarChart3,
    title: "AI Demand & Logistics Forecaster",
    desc: "글로벌 트렌드와 공급망 변수를 결합한 AI 예측 솔루션. 제조, 물류, 유통, 금융 분야의 수요 예측과 리스크 관리를 지원합니다.",
    tag: null,
  },
  {
    icon: Users,
    title: "Hyper-Personalization Engine",
    desc: "고객 행동과 취향을 실시간 분석하는 초개인화 마케팅 엔진. 이커머스, 미디어, 교육, 금융 분야에서 전환율을 극대화합니다.",
    tag: null,
  },
  {
    icon: Shield,
    title: "AI Digital Safety & Security",
    desc: "보이스피싱, 스미싱, 딥페이크 사기를 실시간으로 탐지하는 AI 보안 솔루션. 은행, 통신사, 정부, 기업을 위한 디지털 안전망입니다.",
    tag: null,
  },
  {
    icon: Clapperboard,
    title: "AI Content Generation Pipeline",
    desc: "게임 에셋, 3D 모델, 다국어 시나리오를 자동 생성하는 AI 파이프라인. 제작 단가를 1/10로 낮추고 퀄리티는 극대화합니다.",
    tag: null,
  },
  {
    icon: Bot,
    title: "AI Autonomous Task Engine",
    desc: "보고를 넘어 실무를 수행하는 AI 자율 업무 에이전트. 기업 시스템과 직접 통신하여 인간 업무의 80%를 자동화합니다.",
    tag: null,
  },
  {
    icon: ShoppingBag,
    title: "Pure LLM",
    desc: "쇼피파이 스토어에 GPT, Claude 등 최신 LLM을 직접 연동하는 순수한 AI 통합 솔루션. 코드 없이 강력한 지능을 추가하세요.",
    tag: "App",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={SOLUTIONS_BG} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/90 to-navy-950" />
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
          <span className="text-blue-500 text-base font-semibold tracking-[0.25em] uppercase">
            Solutions
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4 text-white">
            처방형 AI <span className="text-blue-400">솔루션</span>
          </h2>
          <div className="gold-line max-w-24 mx-auto mt-6" />
          <p className="text-navy-300 mt-6 max-w-xl mx-auto leading-relaxed">
            각 산업의 고유한 문제를 해결하기 위해 설계된 처방형 AI 솔루션
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors shrink-0">
                  <sol.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-bold text-base leading-tight">{sol.title}</h3>
                  {sol.tag && (
                    <span className="px-2 py-0.5 bg-blue-500/15 text-blue-400 text-[10px] font-semibold rounded-full border border-blue-500/20 shrink-0">
                      {sol.tag}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-navy-300 text-base leading-relaxed">{sol.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 gold-line" />
    </section>
  );
}
