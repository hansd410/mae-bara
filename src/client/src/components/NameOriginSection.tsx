/*
 * NameOriginSection — 한다로 이름의 의미를 설명하는 섹션
 * 瀚(넓고 클 한) + 多(많을 다) + 路(길 로)
 * Light default + Dark mode 대응
 */
import { motion } from "framer-motion";
import { type Lang } from "@/lib/i18n";

const content = {
  ko: {
    eyebrow: "이름의 뜻",
    headline: "왜 '한다로'인가",
    subtitle: "세 한자가 담은 하나의 방향성 — 규모, 다양성, 그리고 새로운 길",
    chars: [
      {
        hanja: "瀚",
        korean: "한",
        meaning: "넓고 클 한",
        desc: "무한히 확장되는 규모",
      },
      {
        hanja: "多",
        korean: "다",
        meaning: "많을 다",
        desc: "6개 산업을 잇는 다양성",
      },
      {
        hanja: "路",
        korean: "로",
        meaning: "길 로",
        desc: "비효율을 걷어내는 새로운 길",
      },
    ],
    tagline: "무한한 규모(瀚)와 다양한 전문성(多)으로 비즈니스의 새로운 길(路)을 엽니다.",
  },
  en: {
    eyebrow: "Our Name",
    headline: "What is 'Handaro'?",
    subtitle: "Three characters, one direction — scale, diversity, and a new path.",
    chars: [
      {
        hanja: "瀚",
        korean: "Han",
        meaning: "Vast & Grand",
        desc: "Scale that expands without limit",
      },
      {
        hanja: "多",
        korean: "Da",
        meaning: "Manifold",
        desc: "Diversity across 6 industries",
      },
      {
        hanja: "路",
        korean: "Ro",
        meaning: "The Path",
        desc: "A new road, cleared of inefficiency",
      },
    ],
    tagline: "Opening a new road for business (路) through limitless scale (瀚) and diverse expertise (多).",
  },
  zh: {
    eyebrow: "品牌含义",
    headline: "\u4e3a\u4f55\u53eb\u300c\u701a\u591a\u8def\u300d\uff1f",
    subtitle: "三个汉字，一个方向——规模、多样性、与一条新道路。",
    chars: [
      {
        hanja: "瀚",
        korean: "瀚",
        meaning: "广阔浩瀚",
        desc: "无限延展的规模",
      },
      {
        hanja: "多",
        korean: "多",
        meaning: "多元丰富",
        desc: "贯通 6 大产业的多样性",
      },
      {
        hanja: "路",
        korean: "路",
        meaning: "道路方向",
        desc: "扫除低效的新道路",
      },
    ],
    tagline: "以无限的规模(瀚)与多样的专业(多)，为业务开辟一条新道路(路)。",
  },
  jp: {
    eyebrow: "名前の由来",
    headline: "なぜ『ハンダロ』なのか",
    subtitle: "三つの漢字が示す方向性——スケール、多様性、そして新しい道。",
    chars: [
      {
        hanja: "瀚",
        korean: "ハン",
        meaning: "広大・雄大",
        desc: "無限に広がるスケール",
      },
      {
        hanja: "多",
        korean: "ダ",
        meaning: "多様・豊富",
        desc: "6つの産業をつなぐ多様性",
      },
      {
        hanja: "路",
        korean: "ロ",
        meaning: "道・方向",
        desc: "非効率を取り除く新しい道",
      },
    ],
    tagline: "無限のスケール(瀚)と多様な専門性(多)で、ビジネスの新たな道(路)を拓く。",
  },
};

const cardColors = [
  "bg-blue-600 dark:bg-blue-700",
  "bg-indigo-600 dark:bg-indigo-700",
  "bg-navy-700 dark:bg-navy-600",
];

export default function NameOriginSection({ lang = "ko" as Lang }: { lang?: Lang }) {
  const i = content[lang] ?? content.ko;

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-navy-50 dark:bg-navy-950 border-b border-navy-200/60 dark:border-navy-800/50">
      {/* Light mode: subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, #1e3a8a 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Glow — subtle in light, stronger in dark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-400/[0.04] dark:bg-blue-500/[0.06] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow + Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-700 dark:text-blue-400 text-sm font-semibold tracking-[0.3em] uppercase">
            {i.eyebrow}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4 text-navy-900 dark:text-white">
            {i.headline}
          </h2>
          <p className="text-navy-500 dark:text-navy-300 mt-3 text-base tracking-wide">{i.subtitle}</p>
          <div className="gold-line max-w-20 mx-auto mt-6" />
        </motion.div>

        {/* Three characters */}
        <div className="mt-16 grid grid-cols-3 gap-6 md:gap-10 max-w-3xl mx-auto">
          {i.chars.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col items-center gap-4"
            >
              {/* Hanja card */}
              <div className={`w-20 h-20 md:w-28 md:h-28 rounded-2xl ${cardColors[idx]} flex items-center justify-center shadow-lg shadow-navy-200/60 dark:shadow-navy-950/60 border border-white/20 dark:border-white/10`}>
                <span className="text-4xl md:text-5xl font-bold text-white leading-none">{c.hanja}</span>
              </div>
              {/* Korean / romanized */}
              <div className="text-blue-700 dark:text-blue-400 text-xl md:text-2xl font-bold tracking-widest">{c.korean}</div>
              {/* Meaning */}
              <div className="text-navy-600 dark:text-navy-200 text-sm font-medium">{c.meaning}</div>
              {/* Desc */}
              <div className="text-navy-400 dark:text-navy-400 text-xs tracking-wide">{c.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 text-lg md:text-xl text-navy-700 dark:text-white/80 leading-relaxed max-w-2xl mx-auto font-light italic border-l-4 border-blue-600/50 dark:border-blue-500/60 pl-6 text-left"
        >
          "{i.tagline}"
        </motion.p>
      </div>
    </section>
  );
}
