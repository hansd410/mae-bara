/*
 * Technology Section (Arctic Proof) — Light default + Dark mode
 * Handalo AI One의 기술 증명 — 북극항로
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Box, Cpu, Globe } from "lucide-react";

const ARCTIC_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663325138416/6uQycx7vmjvWLhEUm478jc/technology-arctic-bRk6ZVnVjsdKbzb98zRpri.webp";

const stats = [
  { display: "32.4%", label: "재처리 비용 절감" },
  { display: "459km", label: "항로 거리 단축" },
  { display: "15일", label: "MVP 구현 및 ROI 증명" },
  { display: "1위", label: "OpenAI 글로벌 해커톤" },
];

const techs = [
  {
    icon: Box,
    title: "T-CAG Digital Twin",
    subtitle: "PDDL 기반 지능형 디지털 트윈",
    desc: "항만의 복잡한 규칙을 PDDL 언어로 정의하여 AI가 활동할 수 있는 무결한 가상 환경을 구축합니다.",
  },
  {
    icon: Cpu,
    title: "Yard Orchestrator",
    subtitle: "DRL 기반 예측적 적재 엔진",
    desc: "심층 강화학습을 통해 미래 출고 스케줄과 야드 상태를 동적으로 연동하여 누적 비용을 최소화합니다.",
  },
  {
    icon: Globe,
    title: "NSR-OptiNav",
    subtitle: "지능형 항로 최적화 엔진",
    desc: "NSIDC/NOAA 실데이터 기반 환경 복제와 2단계 계층적 최적화로 최적 항로를 도출합니다.",
  },
];

export default function TechnologySection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });

  return (
    <section id="technology" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background — dark overlay for readability */}
      <div className="absolute inset-0">
        <img src={ARCTIC_BG} alt="" className="w-full h-full object-cover opacity-15 dark:opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/85 to-navy-900 dark:from-navy-950/90 dark:via-navy-950/80 dark:to-navy-950" />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/[0.03] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-400 text-base font-semibold tracking-[0.25em] uppercase">
            Technology — The Arctic Proof
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4 text-white">
            데이터로 증명된{" "}
            <span className="text-gold-400">기술적 우위</span>
          </h2>
          <div className="gold-line max-w-24 mx-auto mt-6" />
          <p className="text-navy-200 mt-6 max-w-2xl mx-auto leading-relaxed">
            변수가 가장 많고 물리적으로 가장 가혹한 북극항로의 물류 최적화를 해결한 기술력 —
            이것이 한다로AI가 모든 산업의 AX를 자신 있게 수행할 수 있는 이유입니다.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <span className="text-gold-400 text-3xl md:text-4xl font-extrabold font-serif">
                {statsInView ? stat.display : "—"}
              </span>
              <div className="text-navy-300 text-base mt-2 tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tech Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-2xl p-8 text-center group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold-500/30 transition-all"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors">
                <tech.icon className="w-8 h-8 text-gold-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">{tech.title}</h3>
              <p className="text-gold-400 text-base font-semibold mb-4">{tech.subtitle}</p>
              <p className="text-navy-200 text-base leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <blockquote className="font-serif text-xl md:text-2xl text-navy-200 italic max-w-3xl mx-auto leading-relaxed">
            "북극항로는 우리가 하는 유일한 일이 아닙니다.
            <br />
            <span className="text-gold-400 not-italic font-semibold">
              우리 기술의 수준을 증명하는 극한의 테스트베드
            </span>
            입니다."
          </blockquote>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 gold-line" />
    </section>
  );
}
