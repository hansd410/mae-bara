/*
 * Hero Section — Light mode: 밝은 추상 배경 / Dark mode: 어두운 배경
 * AX Standard 핵심 메시지
 */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { t, type Lang } from "@/lib/i18n";

export default function HeroSection({ lang = "ko" as Lang }: { lang?: Lang }) {
  const i = t(lang).hero;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy-50 dark:bg-navy-950"
    >
      {/* Light mode: abstract geometric pattern background */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-navy-50 to-blue-50" />
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-200/30 to-blue-50/10 blur-[80px]" />
        <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-navy-200/20 to-navy-100/10 blur-[60px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,30,80,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,30,80,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-0 w-[1px] h-[60vh] bg-gradient-to-b from-transparent via-blue-400/20 to-transparent rotate-[25deg] translate-x-[-200px]" />
        <div className="absolute bottom-0 left-[30%] w-[1px] h-[40vh] bg-gradient-to-t from-transparent via-blue-400/15 to-transparent rotate-[-15deg]" />
      </div>

      {/* Dark mode: deep navy with subtle glow */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-navy-600/10 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(200,180,120,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(200,180,120,0.2) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-600/20 dark:border-blue-500/25 bg-blue-500/[0.08] dark:bg-blue-500/[0.06] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-700 dark:text-blue-400 text-base font-semibold tracking-[0.2em] uppercase">
              {i.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-black leading-[1.15] mb-8 text-navy-900 dark:text-white"
          >
            {i.headline1}
            <br />
            {i.headline2 ? <>{i.headline2} </> : null}<span className="text-blue-600 dark:text-blue-400">{i.headlineAccent}</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-navy-600 dark:text-navy-200 leading-relaxed max-w-2xl mb-12 font-light"
          >
            {i.sub1}{" "}
            <strong className="text-navy-800 dark:text-white font-medium">{i.subBold1}</strong>
            {i.sub1end}
            <br />
            {i.sub2}
            <br />
            {i.sub3}{" "}
            <strong className="text-navy-800 dark:text-white font-medium">{i.subBold2}</strong>
            {i.sub3end}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white dark:text-navy-950 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/20 dark:shadow-blue-500/20 hover:shadow-blue-600/40 dark:hover:shadow-blue-500/40 text-base tracking-wide"
            >
              <span>{i.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#product"
              className="inline-flex items-center gap-2 border border-navy-300 dark:border-navy-400/40 hover:border-blue-600/50 dark:hover:border-blue-500/50 text-navy-700 dark:text-navy-100 font-medium py-4 px-8 rounded-lg transition-all duration-300 text-base tracking-wide hover:bg-navy-100/50 dark:hover:bg-navy-800/30"
            >
              {i.ctaSecondary}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 gold-line" />
    </section>
  );
}
