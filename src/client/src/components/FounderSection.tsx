/*
 * Founder Section — CEO 한상도 대표의 5대 차별점 부각
 * Light default + Dark mode + i18n
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Trophy,
  Briefcase,
  GraduationCap,
  Lightbulb,
  Rocket,
  FileText,
  Award,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import { t, type Lang } from "@/lib/i18n";

/* ── Animated counter ── */
function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 1200;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span ref={ref} className="stat-number font-serif font-black text-2xl sm:text-4xl md:text-5xl">
      {val}
      {suffix}
    </span>
  );
}

/* ── Data (not translated — names, URLs, technical terms) ── */
const differentiators = {
  ko: [
    {
      icon: Trophy,
      title: "세계 최고 수준의 최신기술 능숙도",
      highlight: "Global 1st",
      desc: "OpenAI GPT-5 Hackathon에서 전 세계 93팀을 제치고 글로벌 1위를 달성. 3D 공간 멀티모달 LLM 글로벌 리더보드 1위. 최신 AI 기술을 가장 빠르게 실전에 적용하는 역량.",
    },
    {
      icon: Briefcase,
      title: "AI 현업 경험",
      highlight: "다수 수상",
      desc: "Naver, TmaxAI, VRcrew, Waddle 등 국내 주요 AI 기업에서 Research Director 및 ML Engineer로 실전 경험. KMETA AI 챗봇 최우수상, Google Kaggle 우수 성과 등 현업에서 검증된 실력.",
    },
    {
      icon: GraduationCap,
      title: "AI 연구 경험",
      highlight: "논문 20+ / 특허 26+",
      desc: "POSTECH 박사과정(NLP & Optimization). SIGDIAL, NAACL, ASRU 등 국제 학회 논문 20편 이상. 해외 3건 포함 특허 26건 이상. 국가 R&D 프로젝트 13건 이상 참여.",
    },
    {
      icon: Lightbulb,
      title: "요구사항의 캐치, 높은 기획력",
      highlight: "정밀 설계",
      desc: "고객이 말하지 않은 것까지 읽어냅니다. 기술적 가능성과 비즈니스 임팩트를 동시에 고려하는 기획력으로, 단순 개발이 아닌 전략적 AX 설계를 제공합니다.",
    },
    {
      icon: Rocket,
      title: "빠른 반영과 높은 만족도",
      highlight: "1주 ~ 1달",
      desc: "15일 만에 MVP 구현, 1주~1달 내 실질적 결과 전달. 고객 피드백을 즉시 반영하는 민첩한 실행력으로, 대기업급 품질을 스타트업 속도로 납품합니다.",
    },
  ],
  en: [
    {
      icon: Trophy,
      title: "World-Class Cutting-Edge Tech Proficiency",
      highlight: "Global 1st",
      desc: "Won 1st place at the OpenAI GPT-5 Hackathon, beating 93 teams worldwide. #1 on the 3D Spatial Multimodal LLM global leaderboard. Fastest to apply the latest AI tech in production.",
    },
    {
      icon: Briefcase,
      title: "Real-World AI Experience",
      highlight: "Multiple Awards",
      desc: "Hands-on experience as Research Director and ML Engineer at Naver, TmaxAI, VRcrew, Waddle, and more. KMETA AI Chatbot Grand Prize, Google Kaggle top performer — proven in the field.",
    },
    {
      icon: GraduationCap,
      title: "AI Research Background",
      highlight: "20+ Papers / 26+ Patents",
      desc: "POSTECH PhD candidate (NLP & Optimization). 20+ papers at SIGDIAL, NAACL, ASRU. 26+ patents including 3 international. 13+ national R&D projects.",
    },
    {
      icon: Lightbulb,
      title: "Sharp Requirements Capture & Planning",
      highlight: "Precision Design",
      desc: "We read what clients don't say. With planning that balances technical feasibility and business impact, we deliver strategic AX design — not just development.",
    },
    {
      icon: Rocket,
      title: "Fast Delivery & High Satisfaction",
      highlight: "1 Week – 1 Month",
      desc: "MVP in 15 days, tangible results in 1 week to 1 month. Agile execution that instantly reflects client feedback — enterprise quality at startup speed.",
    },
  ],
  zh: [
    {
      icon: Trophy,
      title: "世界顶级前沿技术能力",
      highlight: "全球第一",
      desc: "在OpenAI GPT-5黑客马拉松中击败全球93支队伍荣获第一。3D空间多模态LLM全球排行榜第一。最快将最新AI技术应用于实际生产的能力。",
    },
    {
      icon: Briefcase,
      title: "AI实战经验",
      highlight: "多项获奖",
      desc: "在Naver、TmaxAI、VRcrew、Waddle等国内主要AI企业担任研究总监和ML工程师的实战经验。KMETA AI聊天机器人最优秀奖、Google Kaggle优秀成果等，在实际工作中经过验证的实力。",
    },
    {
      icon: GraduationCap,
      title: "AI研究经验",
      highlight: "20+篇论文 / 26+项专利",
      desc: "POSTECH博士课程（NLP & Optimization）。SIGDIAL、NAACL、ASRU等国际学会论文20篇以上。包含3件海外专利在内的26件以上专利。参与13件以上国家R&D项目。",
    },
    {
      icon: Lightbulb,
      title: "精准捕捉需求与高度规划能力",
      highlight: "精密设计",
      desc: "我们能读懂客户未说出口的需求。凭借同时考量技术可行性与商业影响的规划能力，提供战略性AX设计，而非单纯的开发服务。",
    },
    {
      icon: Rocket,
      title: "快速交付与高满意度",
      highlight: "1周 ~ 1个月",
      desc: "15天内实现MVP，1周至1个月内交付实质性成果。即时反映客户反馈的敏捷执行力，以初创企业的速度交付大企业级品质。",
    },
  ],
};

const mediaHighlights = [
  {
    title: "박사 자퇴 후 오픈AI 해커톤 우승…\"둥지 떠나서야 비로소 비행 배웠다\"",
    titleEn: "After leaving PhD, won OpenAI Hackathon — \"Only after leaving the nest did I learn to fly\"",
    titleZh: "博士退学后赢得OpenAI黑客马拉松——\"离巢之后，才真正学会飞翔\"",
    source: "한국경제",
    sourceEn: "Hankyung",
    sourceZh: "韩国经济",
    url: "https://www.hankyung.com/article/2025092176781",
  },
  {
    title: "GPT-5 해커톤 대회서 전 세계 93팀 제치고 1등 '韓 스타트업'",
    titleEn: "Korean startup beats 93 teams worldwide for 1st place at GPT-5 Hackathon",
    titleZh: "韩国初创企业在GPT-5黑客马拉松中击败全球93支队伍夺冠",
    source: "매일경제",
    sourceEn: "Maeil Business",
    sourceZh: "每日经济",
    url: "https://www.mk.co.kr/news/business/11393991",
  },
  {
    title: "800여명 경쟁자 제치고 '오픈AI 대회' 1위 우뚝",
    titleEn: "Beats 800+ competitors to claim 1st place at OpenAI competition",
    titleZh: "击败800余名竞争者，荣获OpenAI大赛第一名",
    source: "헬로디디",
    sourceEn: "HelloDD",
    sourceZh: "科技日报",
    url: "https://www.hellodd.com/news/articleView.html?idxno=108914",
  },
];

export default function FounderSection({ lang = "ko" as Lang }: { lang?: Lang }) {
  const i = t(lang).founder;
  const diffs = differentiators[lang];
  const quote = lang === "en"
    ? { text: "Technology isn't about proving — it's about showing results.\nMaeBara proves your AX with numbers.", author: "— Sangdo Han, CEO & Founder" }
    : lang === "zh"
    ? { text: "技术不是用来证明的，而是用结果来展示的。\nMaeBara用数字证明您的AX价值。", author: "— 韩相度，CEO & Founder" }
    : { text: "기술은 증명하는 것이 아니라 결과로 보여주는 것입니다.\n매바라는 귀사의 AX를 숫자로 증명합니다.", author: "— 한상도, CEO & Founder" };
  const subtitle = lang === "en"
    ? "Led directly by CEO Sangdo Han. The only AX partner combining world-class technology, real-world experience, and deep research capabilities."
    : lang === "zh"
    ? "由CEO韩相度亲自带领的团队。将世界顶级技术实力、实战经验与研究能力融为一体的唯一AX合作伙伴。"
    : "CEO 한상도가 직접 이끄는 팀. 세계 최고 수준의 기술력과 실전 경험, 그리고 연구 역량이 하나로 결합된 유일한 AX 파트너입니다.";

  return (
    <section id="founder" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-50/30 to-background dark:from-navy-950 dark:via-navy-900/20 dark:to-navy-950" />
      <div className="absolute top-0 left-0 right-0 gold-line" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
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
            {i.headlineEnd}
          </h2>
          <div className="gold-line max-w-24 mx-auto mt-6" />
          <p className="text-navy-500 dark:text-navy-300 mt-6 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Founder Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-2xl p-5 sm:p-8 md:p-10 mb-16 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start w-full overflow-hidden">
            {/* Left: Profile Info */}
            <div className="w-full md:w-1/3 min-w-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-gold-300 dark:border-gold-500/25 shadow-lg shadow-gold-500/10 shrink-0">
                  <img
                    src="/images/sangdo_han_profile.jpg"
                    alt="Han Sangdo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-navy-900 dark:text-white font-bold text-xl font-serif">{i.name}</h3>
                  <p className="text-gold-700 dark:text-gold-400 text-base font-semibold">{i.role}</p>
                  <a
                    href="https://sites.google.com/site/hansd410/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-navy-400 dark:text-navy-500 text-base mt-1 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {lang === "zh" ? "个人主页" : lang === "en" ? "Profile Page" : "프로필 페이지"}
                  </a>
                </div>
              </div>

              <div className="space-y-3 text-base">
                <div className="flex items-start gap-2 text-navy-600 dark:text-navy-300">
                  <GraduationCap className="w-4 h-4 text-gold-600 dark:text-gold-500 shrink-0 mt-0.5" />
                  <span className="break-words">POSTECH PhD ABD (NLP & Optimization)</span>
                </div>
                <div className="flex items-start gap-2 text-navy-600 dark:text-navy-300">
                  <Trophy className="w-4 h-4 text-gold-600 dark:text-gold-500 shrink-0 mt-0.5" />
                  <span className="break-words">OpenAI GPT-5 Hackathon Global 1st</span>
                </div>
                <div className="flex items-start gap-2 text-navy-600 dark:text-navy-300">
                  <BookOpen className="w-4 h-4 text-gold-600 dark:text-gold-500 shrink-0 mt-0.5" />
                  <span className="break-words">CEO Business School {lang === "en" ? "Professor" : lang === "zh" ? "教授" : "교수"}</span>
                </div>
                <div className="flex items-start gap-2 text-navy-600 dark:text-navy-300">
                  <Briefcase className="w-4 h-4 text-gold-600 dark:text-gold-500 shrink-0 mt-0.5" />
                  <span className="break-words">Naver · TmaxAI · VRcrew · Waddle</span>
                </div>
              </div>

              {/* Research Focus */}
              <div className="mt-6 p-3 sm:p-4 rounded-xl bg-navy-50 dark:bg-navy-800/40 border border-navy-200/60 dark:border-navy-700/30 overflow-hidden">
                <p className="text-navy-400 dark:text-navy-500 text-base font-semibold tracking-[0.2em] uppercase mb-2">{i.researchTitle}</p>
                <p className="text-navy-700 dark:text-navy-200 text-base leading-relaxed break-words">
                  AI-Driven Optimization & Large-Scale System Design — Reinforcement Learning, Multi-Modal Data Fusion, Complex Decision Systems
                </p>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="w-full md:w-2/3 min-w-0 overflow-hidden">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6 mb-8">
                {i.stats.map((s, idx) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="text-center p-3 sm:p-4 rounded-xl bg-navy-50/80 dark:bg-navy-800/30 border border-navy-200/40 dark:border-navy-700/20 overflow-hidden"
                  >
                    <AnimatedNumber target={parseInt(s.num)} suffix="+" />
                    <p className="text-navy-500 dark:text-navy-400 text-base mt-1 sm:mt-2 font-medium leading-tight">{s.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Media Highlights */}
              <div>
                <p className="text-navy-400 dark:text-navy-500 text-base font-semibold tracking-[0.2em] uppercase mb-4">
                  {i.mediaTitle}
                </p>
                <div className="space-y-3">
                  {mediaHighlights.map((m, idx) => (
                    <motion.a
                      key={idx}
                      href={m.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-navy-50/60 dark:bg-navy-800/20 border border-navy-200/40 dark:border-navy-700/20 hover:border-gold-400/50 dark:hover:border-gold-500/30 transition-all group overflow-hidden"
                    >
                      <FileText className="w-4 h-4 text-gold-600 dark:text-gold-500 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-navy-700 dark:text-navy-200 text-base sm:text-base font-medium truncate group-hover:text-gold-700 dark:group-hover:text-gold-400 transition-colors">
                          {lang === "zh" ? m.titleZh : lang === "en" ? m.titleEn : m.title}
                        </p>
                        <p className="text-navy-400 dark:text-navy-500 text-base">{lang === "zh" ? m.sourceZh : lang === "en" ? m.sourceEn : m.source}</p>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-navy-300 dark:text-navy-600 group-hover:text-gold-500 transition-colors shrink-0" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 5 Differentiators */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diffs.map((d, idx) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`glass-card rounded-2xl p-5 sm:p-7 group ${
                idx >= 3 ? "lg:col-span-1" : ""
              } ${idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gold-100 dark:bg-gold-500/10 border border-gold-300 dark:border-gold-500/20 flex items-center justify-center group-hover:bg-gold-200 dark:group-hover:bg-gold-500/20 transition-colors">
                  <d.icon className="w-5 h-5 text-gold-700 dark:text-gold-400" />
                </div>
                <span className="px-2.5 py-0.5 bg-gold-100 dark:bg-gold-500/15 text-gold-700 dark:text-gold-400 text-[10px] font-bold rounded-full border border-gold-300 dark:border-gold-500/20 tracking-wider">
                  {d.highlight}
                </span>
              </div>
              <h3 className="text-navy-900 dark:text-white font-bold text-base mb-3 font-serif leading-snug">
                {d.title}
              </h3>
              <p className="text-navy-500 dark:text-navy-300 text-base leading-relaxed">
                {d.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <blockquote className="font-serif text-lg md:text-xl text-navy-600 dark:text-navy-300 italic leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
            "{quote.text}"
          </blockquote>
          <p className="text-navy-400 dark:text-navy-500 text-base mt-4 font-medium">
            {quote.author}
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 gold-line" />
    </section>
  );
}
