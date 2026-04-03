/*
 * Navigation — Light default + Dark toggle + Language switch
 * PNG 로고 (투명 배경 + 다크모드용 흰색), 다크모드 토글, 한/영 전환
 */
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { t, type Lang } from "@/lib/i18n";

const LOGO_LIGHT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663325138416/6uQycx7vmjvWLhEUm478jc/logo_maebara_eng_transparent_517481aa.png";
const LOGO_DARK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663325138416/6uQycx7vmjvWLhEUm478jc/logo_maebara_eng_white_bb531472.png";

export default function Navigation({ lang = "ko" as Lang }: { lang?: Lang }) {
  const i = t(lang).nav;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isOnDarkBg = theme === "dark";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-navy-950/95 backdrop-blur-xl shadow-lg border-b border-navy-200/50 dark:border-gold-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href={lang === "en" ? "/en#home" : lang === "zh" ? "/zh#home" : "#home"} className="flex items-center gap-3">
          <img
            src={isOnDarkBg ? LOGO_DARK : LOGO_LIGHT}
            alt="MaeBara"
            className="h-9"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          {i.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link-anim text-sm font-medium transition-colors tracking-[0.12em] ${
                isOnDarkBg
                  ? "text-navy-100 hover:text-gold-400"
                  : "text-navy-600 dark:text-navy-200 hover:text-gold-700 dark:hover:text-gold-400"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Language switch */}
          <a
            href={i.langSwitchHref}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold tracking-wider transition-colors ${
              isOnDarkBg
                ? "border-navy-600 hover:bg-navy-800/50 text-gold-400"
                : "border-navy-200 dark:border-navy-700 hover:bg-navy-100 dark:hover:bg-navy-800 text-navy-500 dark:text-navy-300"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            {i.langSwitch}
          </a>

          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg border transition-colors ${
              isOnDarkBg
                ? "border-navy-600 hover:bg-navy-800/50 text-gold-400"
                : "border-navy-200 dark:border-navy-700 hover:bg-navy-100 dark:hover:bg-navy-800"
            }`}
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-gold-500" />
            ) : (
              <Moon className={`w-4 h-4 ${isOnDarkBg ? "text-navy-200" : "text-navy-500"}`} />
            )}
          </button>
        </div>

        {/* Mobile: lang + theme toggle + menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={i.langSwitchHref}
            className={`flex items-center gap-1 px-2 py-1.5 rounded-lg border text-[10px] font-bold tracking-wider transition-colors ${
              isOnDarkBg
                ? "border-navy-600 hover:bg-navy-800/50 text-gold-400"
                : "border-navy-200 dark:border-navy-700 hover:bg-navy-100 dark:hover:bg-navy-800 text-navy-500 dark:text-navy-300"
            }`}
          >
            <Globe className="w-3 h-3" />
            {i.langSwitch}
          </a>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg border transition-colors ${
              isOnDarkBg
                ? "border-navy-600 hover:bg-navy-800/50"
                : "border-navy-200 dark:border-navy-700 hover:bg-navy-100 dark:hover:bg-navy-800"
            }`}
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-gold-500" />
            ) : (
              <Moon className={`w-4 h-4 ${isOnDarkBg ? "text-navy-200" : "text-navy-500"}`} />
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`transition-colors ${
              isOnDarkBg
                ? "text-navy-100 hover:text-gold-400"
                : "text-navy-600 dark:text-navy-200 hover:text-gold-700 dark:hover:text-gold-400"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 dark:bg-navy-950/95 backdrop-blur-xl border-t border-navy-200/50 dark:border-navy-700/30 px-6 py-4 space-y-3">
          {i.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-navy-600 dark:text-navy-200 hover:text-gold-700 dark:hover:text-gold-400 transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
