/*
 * NameOriginSection — 한다로 이름의 의미를 설명하는 섹션
 * 瀚(넓고 클 한) + 多(많을 다) + 路(길 로)
 */
import { motion } from "framer-motion";
import { type Lang } from "@/lib/i18n";

const content = {
  ko: {
    eyebrow: "이름의 뜻",
    headline: "왜 '한다로'인가",
    subtitle: "세 한자가 담은 하나의 약속",
    chars: [
      {
        hanja: "瀚",
        korean: "한",
        meaning: "넓고 클 한",
        desc: "방대한 데이터",
        color: "from-blue-600 to-blue-800",
      },
      {
        hanja: "多",
        korean: "다",
        meaning: "많을 다",
        desc: "다양한 기술",
        color: "from-indigo-600 to-indigo-800",
      },
      {
        hanja: "路",
        korean: "로",
        meaning: "길 로",
        desc: "미래의 길",
        color: "from-navy-600 to-navy-900",
      },
    ],
    tagline: "방대한 데이터(瀚)와 다양한 기술(多)로 미래의 길(路)을 제시하다.",
  },
  en: {
    eyebrow: "Our Name",
    headline: "What is 'Handalo'?",
    subtitle: "Three characters. One promise.",
    chars: [
      {
        hanja: "瀚",
        korean: "Han",
        meaning: "Vast & Grand",
        desc: "Boundless Data",
        color: "from-blue-600 to-blue-800",
      },
      {
        hanja: "多",
        korean: "Da",
        meaning: "Manifold",
        desc: "Diverse Technology",
        color: "from-indigo-600 to-indigo-800",
      },
      {
        hanja: "路",
        korean: "Lo",
        meaning: "The Path",
        desc: "The Road Ahead",
        color: "from-navy-600 to-navy-900",
      },
    ],
    tagline: "Guiding the road to the future (路) through boundless data (瀚) and diverse technology (多).",
  },
  zh: {
    eyebrow: "品牌含义",
      headline: "为何叫\u201c瀚多路\u201d？",
    subtitle: "三个汉字，一个承诺。",
    chars: [
      {
        hanja: "瀚",
        korean: "瀚",
        meaning: "广阔浩瀚",
        desc: "海量数据",
        color: "from-blue-600 to-blue-800",
      },
      {
        hanja: "多",
        korean: "多",
        meaning: "多元丰富",
        desc: "多样技术",
        color: "from-indigo-600 to-indigo-800",
      },
      {
        hanja: "路",
        korean: "路",
        meaning: "道路方向",
        desc: "未来之路",
        color: "from-navy-600 to-navy-900",
      },
    ],
    tagline: "以海量数据(瀚)与多元技术(多)，指引通向未来的道路(路)。",
  },
};

export default function NameOriginSection({ lang = "ko" as Lang }: { lang?: Lang }) {
  const i = content[lang] ?? content.ko;

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-navy-950 to-navy-900">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(200,180,120,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,180,120,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-500/[0.06] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold-400 text-sm font-semibold tracking-[0.3em] uppercase">
            {i.eyebrow}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4 text-white">
            {i.headline}
          </h2>
          <p className="text-navy-300 mt-3 text-base tracking-wide">{i.subtitle}</p>
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
              <div className={`w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center shadow-xl shadow-navy-950/50 border border-white/10`}>
                <span className="text-4xl md:text-5xl font-bold text-white leading-none">{c.hanja}</span>
              </div>
              {/* Korean / romanized */}
              <div className="text-gold-400 text-xl md:text-2xl font-bold tracking-widest">{c.korean}</div>
              {/* Meaning */}
              <div className="text-navy-200 text-sm font-medium">{c.meaning}</div>
              {/* Desc */}
              <div className="text-white/60 text-xs tracking-wide">{c.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Plus signs between chars */}
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-light italic border-l-4 border-gold-500/60 pl-6 text-left"
        >
          "{i.tagline}"
        </motion.p>
      </div>
    </section>
  );
}
