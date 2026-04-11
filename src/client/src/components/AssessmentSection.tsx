/*
 * AX Readiness Assessment — Light default + Dark mode + i18n
 * MBTI 스타일 자가 진단 → discrete 등급 산출 → 등급별 묶음 패키지 추천
 * 진단 등급: Pioneer(1등급) / Accelerator(2등급) / Builder(3등급) / Starter(4등급)
 */
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardCheck,
  ArrowRight,
  ArrowLeft,
  Mail,
  RotateCcw,
  CheckCircle2,
  HelpCircle,
  FileText,
  Crown,
  Sparkles,
  Zap,
  Layers,
  Gift,
  Compass,
  Wrench,
  GraduationCap,
} from "lucide-react";
import { t, type Lang } from "@/lib/i18n";

/* ── Grade visual config ── */
const gradeVisuals = [
  { badgeColor: "bg-blue-600 dark:bg-blue-500", textColor: "text-white dark:text-navy-950", tierColor: "bg-blue-600", tierIcon: Crown },
  { badgeColor: "bg-emerald-600 dark:bg-emerald-500", textColor: "text-white", tierColor: "bg-emerald-600", tierIcon: Sparkles },
  { badgeColor: "bg-amber-500 dark:bg-amber-500", textColor: "text-white dark:text-navy-950", tierColor: "bg-amber-500", tierIcon: Zap },
  { badgeColor: "bg-navy-500 dark:bg-navy-400", textColor: "text-white dark:text-navy-950", tierColor: "bg-navy-500", tierIcon: Layers },
];

function getGradeIndex(totalScore: number, answeredCount: number): number {
  if (answeredCount === 0 || totalScore <= 0) return 3;
  const ratio = totalScore / (answeredCount * 4);
  if (ratio >= 0.85) return 0;
  if (ratio >= 0.65) return 1;
  if (ratio >= 0.4) return 2;
  return 3;
}

/* ── Component ── */
export default function AssessmentSection({ lang = "ko" as Lang }: { lang?: Lang }) {
  const i = t(lang).assessment;
  const questions = i.questions;
  const grades = i.grades;

  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const answeredNonZero = answers.filter((a) => a > 0).length;
  const gradeIdx = getGradeIndex(totalScore, answeredNonZero || answers.length);
  const grade = grades[gradeIdx];
  const vis = gradeVisuals[gradeIdx];
  const progress = ((current + 1) / questions.length) * 100;
  const unknownCount = answers.filter((a) => a === 0).length;

  const handleSelect = (score: number) => {
    const newAnswers = [...answers];
    newAnswers[current] = score;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
    else setShowResult(true);
  };

  const handlePrev = () => { if (current > 0) setCurrent(current - 1); };

  const handleReset = () => {
    setStarted(false); setCurrent(0); setAnswers([]); setShowResult(false);
  };

  const tierLabels = ["Premium", "Advanced", "Standard", "Basic"];
  const tierLabel = tierLabels[gradeIdx];

  const handleBundleConsult = () => {
    const mb = i.bundleMailBody;
    const subject = encodeURIComponent(`${i.bundleMailSubject} ${tierLabel} — ${grade.code} (${grade.rank}${i.gradeUnit})`);
    const body = encodeURIComponent(
      mb.greeting + mb.result + `${grade.code} (${grade.rank}${i.gradeUnit})\n` +
      mb.score + `${totalScore} / ${questions.length * 4}\n` +
      mb.unknown + `${unknownCount}${mb.unknownUnit}\n\n` +
      mb.recommend + tierLabel + "\n" +
      `  - AX: ${grade.ax}\n  - Solutions: ${grade.solutions}\n  - Academy: ${grade.academy}\n\n` +
      mb.discount + mb.footer
    );
    window.open(`mailto:info@handaro.ai?subject=${subject}&body=${body}`, "_self");
  };

  const handleDetailInquiry = () => {
    const md = i.detailMailBody;
    const subject = encodeURIComponent(`${i.detailMailSubject} AX ${grade.code} (${grade.rank}${i.gradeUnit})`);
    const body = encodeURIComponent(
      md.greeting + md.result + `${grade.code} (${grade.rank}${i.gradeUnit})\n` +
      md.score + `${totalScore} / ${questions.length * 4}\n` +
      md.unknown + `${unknownCount}${md.unknownUnit}\n\n` +
      md.request + md.areas + md.footer
    );
    window.open(`mailto:info@handaro.ai?subject=${subject}&body=${body}`, "_self");
  };

  const BundleIcon = vis.tierIcon;

  return (
    <section id="assessment" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-50 via-white to-navy-50 dark:from-navy-950 dark:via-navy-800/30 dark:to-navy-950" />
      <div className="absolute top-0 left-0 right-0 gold-line" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-blue-700 dark:text-blue-500 text-base font-semibold tracking-[0.25em] uppercase">
            {i.eyebrow}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4 text-navy-900 dark:text-white">
            {i.headline}{" "}
            <span className="text-blue-600 dark:text-blue-400">{i.headlineAccent}</span>{" "}
            {i.headlineEnd}
          </h2>
          <div className="gold-line max-w-24 mx-auto mt-6" />
          <p className="text-navy-500 dark:text-navy-300 mt-6 max-w-xl mx-auto leading-relaxed">
            {i.sub}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* ── Start Screen ── */}
          {!started && !showResult && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center mb-6">
                <ClipboardCheck className="w-10 h-10 text-blue-700 dark:text-blue-400" />
              </div>
              <h3 className="text-navy-900 dark:text-white font-bold text-2xl mb-3 font-serif">
                {i.startTitle}
              </h3>
              <p className="text-navy-500 dark:text-navy-300 text-base leading-relaxed mb-3 max-w-md mx-auto">
                {i.startDesc}
              </p>

              <div className="flex justify-center gap-2 mb-6">
                {grades.map((g, idx) => (
                  <div key={g.rank} className="flex flex-col items-center gap-1">
                    <div className={`px-3 py-1.5 rounded-lg text-base font-bold ${gradeVisuals[idx].badgeColor} ${gradeVisuals[idx].textColor}`}>
                      {g.rank}{i.gradeUnit}
                    </div>
                    <span className="text-navy-400 dark:text-navy-500 text-base font-medium">{g.code}</span>
                  </div>
                ))}
              </div>

              <p className="text-navy-400 text-base mb-2">{i.timeInfo}</p>
              <p className="text-navy-400 dark:text-navy-500 text-base mb-8 flex items-center justify-center gap-1">
                <HelpCircle className="w-3 h-3" />
                {i.unknownHint}
              </p>
              <button
                onClick={() => setStarted(true)}
                className="inline-flex items-center gap-2 bg-navy-800 dark:bg-blue-500 hover:bg-navy-900 dark:hover:bg-blue-600 text-white dark:text-navy-950 font-bold py-3.5 px-8 rounded-lg transition-all duration-300 shadow-lg text-base"
              >
                {i.startBtn}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* ── Quiz Screen ── */}
          {started && !showResult && (
            <motion.div
              key={`q-${current}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="glass-card rounded-2xl p-8 md:p-10 max-w-3xl mx-auto"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-navy-400 text-base font-semibold tracking-wider uppercase">
                  {questions[current].category}
                </span>
                <span className="text-navy-400 text-base">
                  {current + 1} / {questions.length}
                </span>
              </div>

              <div className="w-full h-1 bg-navy-200 dark:bg-navy-800 rounded-full mb-8 overflow-hidden">
                <motion.div
                  className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <h3 className="text-navy-900 dark:text-white font-bold text-xl mb-8 leading-relaxed">
                {questions[current].question}
              </h3>

              <div className="space-y-3 mb-8">
                {questions[current].options.map((opt, idx) => {
                  const isSelected = answers[current] === opt.score;
                  const isUnknown = opt.score === 0;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(opt.score)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-3 ${
                        isSelected
                          ? isUnknown
                            ? "bg-navy-100 dark:bg-navy-700/40 border-navy-300 dark:border-navy-500/50 text-navy-700 dark:text-navy-200"
                            : "bg-blue-50 dark:bg-blue-500/15 border-blue-400 dark:border-blue-500/50 text-navy-900 dark:text-white"
                          : isUnknown
                            ? "bg-navy-50/50 dark:bg-navy-800/20 border-navy-200 dark:border-navy-700/20 text-navy-400 hover:border-navy-300 dark:hover:border-navy-600/50"
                            : "bg-white dark:bg-navy-800/30 border-navy-200 dark:border-navy-700/30 text-navy-600 dark:text-navy-200 hover:border-navy-300 dark:hover:border-navy-600/50 hover:bg-navy-50 dark:hover:bg-navy-800/50"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isSelected
                            ? isUnknown ? "border-navy-400 dark:border-navy-500 bg-navy-400 dark:bg-navy-500" : "border-blue-500 bg-blue-500"
                            : "border-navy-300 dark:border-navy-600"
                        }`}
                      >
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white dark:bg-navy-950" />}
                      </div>
                      <span className={`text-base leading-relaxed ${isUnknown ? "flex items-center gap-1.5" : ""}`}>
                        {isUnknown && <HelpCircle className="w-3.5 h-3.5 shrink-0" />}
                        {opt.text}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={handlePrev}
                  disabled={current === 0}
                  className="flex items-center gap-2 text-navy-400 hover:text-navy-600 dark:hover:text-navy-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-base"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {i.prevBtn}
                </button>
                <button
                  onClick={handleNext}
                  disabled={answers[current] === undefined}
                  className="flex items-center gap-2 bg-navy-800 dark:bg-blue-500 hover:bg-navy-900 dark:hover:bg-blue-600 disabled:opacity-30 disabled:cursor-not-allowed text-white dark:text-navy-950 font-bold py-2.5 px-6 rounded-lg transition-all text-base"
                >
                  {current === questions.length - 1 ? i.resultBtn : i.nextBtn}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ── Result Screen ── */}
          {showResult && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Grade Card */}
              <div className="glass-card rounded-2xl p-8 md:p-10 text-center mb-8">
                <div className="text-navy-400 text-base font-semibold tracking-[0.2em] uppercase mb-6">
                  {i.resultTitle}
                </div>

                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-flex flex-col items-center mb-6"
                >
                  <div className={`w-28 h-28 rounded-2xl ${vis.badgeColor} flex items-center justify-center shadow-xl mb-4`}>
                    <div className="text-center">
                      <div className={`text-4xl font-black ${vis.textColor}`}>{grade.rank}</div>
                      <div className={`text-base font-bold ${vis.textColor} opacity-80`}>{i.gradeUnit}</div>
                    </div>
                  </div>
                  <h3 className="text-navy-900 dark:text-white text-2xl font-bold font-serif">{grade.code}</h3>
                  <p className="text-navy-400 dark:text-navy-500 text-base mt-1">{grade.subtitle}</p>
                </motion.div>

                {/* 4-step Grade Indicator */}
                <div className="max-w-md mx-auto mb-6">
                  <div className="flex gap-2">
                    {grades.map((g, idx) => (
                      <div key={g.rank} className="flex-1 flex flex-col items-center gap-1.5">
                        <div className={`w-full h-3 rounded-full transition-all duration-500 ${
                          g.rank === grade.rank ? gradeVisuals[idx].badgeColor + " shadow-md" : "bg-navy-200 dark:bg-navy-700"
                        }`} />
                        <span className={`text-base font-bold ${
                          g.rank === grade.rank ? "text-navy-800 dark:text-white" : "text-navy-300 dark:text-navy-600"
                        }`}>{g.code}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {unknownCount > 0 && (
                  <div className="text-navy-400 dark:text-navy-500 text-base mb-4 flex items-center justify-center gap-1">
                    <HelpCircle className="w-3 h-3" />
                    {i.unknownNote} {unknownCount}{i.unknownSuffix}
                  </div>
                )}

                <p className="text-navy-500 dark:text-navy-300 text-base leading-relaxed max-w-lg mx-auto">
                  {grade.desc}
                </p>
              </div>

              {/* Recommended Bundle Package */}
              <div className="mb-6">
                <h3 className="text-navy-900 dark:text-white font-bold text-lg mb-1 text-center">
                  {grade.code} {i.recommendTitle}
                </h3>
                <p className="text-navy-400 text-base text-center mb-6">{i.recommendSub}</p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="glass-card rounded-2xl p-6 md:p-8 max-w-2xl mx-auto"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl ${vis.tierColor} flex items-center justify-center shadow-lg`}>
                      <BundleIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-navy-900 dark:text-white font-bold text-lg">
                          {tierLabel} {i.bundleLabel}
                        </h4>
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/15 text-blue-700 dark:text-blue-400 text-[10px] font-bold">
                          <Gift className="w-3 h-3" />
                          {i.bundleDiscount}
                        </span>
                      </div>
                      <p className="text-navy-400 dark:text-navy-500 text-base mt-0.5">{grade.bundleCopy}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      { icon: Compass, label: "AX", desc: grade.ax },
                      { icon: Wrench, label: "Solutions", desc: grade.solutions },
                      { icon: GraduationCap, label: "Academy", desc: grade.academy },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3 p-3 rounded-xl bg-navy-50 dark:bg-navy-800/20 border border-navy-100 dark:border-navy-700/20">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
                          <item.icon className="w-4 h-4 text-blue-700 dark:text-blue-400" />
                        </div>
                        <div>
                          <span className="text-navy-400 text-base font-semibold tracking-wider uppercase">{item.label}</span>
                          <p className="text-navy-600 dark:text-navy-300 text-base leading-relaxed">{item.desc}</p>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-500/60 shrink-0 mt-1" />
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleBundleConsult}
                    className="w-full flex items-center justify-center gap-2 bg-navy-800 dark:bg-blue-500 hover:bg-navy-900 dark:hover:bg-blue-600 text-white dark:text-navy-950 font-bold py-3 px-6 rounded-lg transition-all text-base shadow-md"
                  >
                    <Mail className="w-4 h-4" />
                    {i.bundleConsultBtn}
                  </button>
                </motion.div>
              </div>

              {/* Detail Inquiry */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="text-center mb-8"
              >
                <p className="text-navy-400 dark:text-navy-500 text-base mb-3">{i.detailNote}</p>
                <button
                  onClick={handleDetailInquiry}
                  className="inline-flex items-center gap-2 border-2 border-navy-300 dark:border-navy-600 hover:border-blue-500 dark:hover:border-blue-500 text-navy-700 dark:text-navy-200 hover:text-blue-700 dark:hover:text-blue-400 font-bold py-3 px-8 rounded-lg transition-all text-base"
                >
                  <FileText className="w-4 h-4" />
                  {i.detailBtn}
                </button>
              </motion.div>

              {/* Reset */}
              <div className="text-center">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-navy-400 hover:text-navy-600 dark:hover:text-navy-200 transition-colors text-base"
                >
                  <RotateCcw className="w-4 h-4" />
                  {i.resetBtn}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 right-0 gold-line" />
    </section>
  );
}
