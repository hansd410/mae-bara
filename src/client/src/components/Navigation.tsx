/*
 * Navigation — Light default + Dark toggle + Language dropdown
 * PNG 로고 (투명 배경 + 다크모드용 골드), 다크모드 토글, 언어 드롭다운
 */
import { useState, useEffect, useRef } from "react";
import { Menu, X, Moon, Sun, Globe, ChevronDown } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { t, type Lang } from "@/lib/i18n";

const LOGO_LIGHT = "/handaro_logo_light.svg";
const LOGO_DARK = "/handaro_logo_dark.svg";

const LANG_OPTIONS: { label: string; href: string; lang: Lang }[] = [
  { label: "KR", href: "/", lang: "ko" },
  { label: "EN", href: "/en", lang: "en" },
  { label: "CN", href: "/zh", lang: "zh" },
];

export default function Navigation({ lang = "ko" as Lang }: { lang?: Lang }) {
  const i = t(lang).nav;
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const langRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const outsideDesktop = langRef.current && !langRef.current.contains(target);
      const outsideMobile = mobileLangRef.current && !mobileLangRef.current.contains(target);
      if (outsideDesktop && outsideMobile) setLangOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isOnDarkBg = theme === "dark";
  const currentLang = LANG_OPTIONS.find((o) => o.lang === lang)!;

  const langBtnClass = `flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold tracking-wider transition-colors ${
    isOnDarkBg
      ? "border-navy-600 hover:bg-navy-800/50 text-blue-400"
      : "border-navy-200 dark:border-navy-700 hover:bg-navy-100 dark:hover:bg-navy-800 text-navy-500 dark:text-navy-300"
  }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-navy-950/95 backdrop-blur-xl shadow-lg border-b border-navy-200/50 dark:border-blue-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href={lang === "en" ? "/en#home" : lang === "zh" ? "/zh#home" : "#home"} className="flex items-center gap-3">
          <img
            src={isOnDarkBg ? LOGO_DARK : LOGO_LIGHT}
            alt="Handaro AI"
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
                  ? "text-navy-100 hover:text-blue-400"
                  : "text-navy-600 dark:text-navy-200 hover:text-blue-700 dark:hover:text-blue-400"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Language dropdown */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className={langBtnClass}
              aria-label="Select language"
            >
              <Globe className="w-3.5 h-3.5" />
              {currentLang.label}
              <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <div className={`absolute right-0 mt-1.5 w-20 rounded-lg border shadow-lg overflow-hidden ${
                isOnDarkBg
                  ? "bg-navy-900 border-navy-600"
                  : "bg-white dark:bg-navy-900 border-navy-200 dark:border-navy-700"
              }`}>
                {LANG_OPTIONS.map((opt) => (
                  <a
                    key={opt.lang}
                    href={opt.href}
                    onClick={() => setLangOpen(false)}
                    className={`block px-4 py-2 text-xs font-bold tracking-wider transition-colors ${
                      opt.lang === lang
                        ? "text-blue-500 bg-blue-50 dark:bg-blue-900/20"
                        : isOnDarkBg
                        ? "text-navy-200 hover:bg-navy-800 hover:text-blue-400"
                        : "text-navy-500 dark:text-navy-300 hover:bg-navy-50 dark:hover:bg-navy-800 hover:text-blue-700 dark:hover:text-blue-400"
                    }`}
                  >
                    {opt.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg border transition-colors ${
              isOnDarkBg
                ? "border-navy-600 hover:bg-navy-800/50 text-blue-400"
                : "border-navy-200 dark:border-navy-700 hover:bg-navy-100 dark:hover:bg-navy-800"
            }`}
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-blue-500" />
            ) : (
              <Moon className={`w-4 h-4 ${isOnDarkBg ? "text-navy-200" : "text-navy-500"}`} />
            )}
          </button>
        </div>

        {/* Mobile: lang dropdown + theme toggle + menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <div ref={mobileLangRef} className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className={`flex items-center gap-1 px-2 py-1.5 rounded-lg border text-xs font-bold tracking-wider transition-colors ${
                isOnDarkBg
                  ? "border-navy-600 hover:bg-navy-800/50 text-blue-400"
                  : "border-navy-200 dark:border-navy-700 hover:bg-navy-100 dark:hover:bg-navy-800 text-navy-500 dark:text-navy-300"
              }`}
              aria-label="Select language"
            >
              <Globe className="w-3 h-3" />
              {currentLang.label}
              <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <div className={`absolute right-0 mt-1.5 w-20 rounded-lg border shadow-lg overflow-hidden z-50 ${
                isOnDarkBg
                  ? "bg-navy-900 border-navy-600"
                  : "bg-white dark:bg-navy-900 border-navy-200 dark:border-navy-700"
              }`}>
                {LANG_OPTIONS.map((opt) => (
                  <a
                    key={opt.lang}
                    href={opt.href}
                    onClick={() => setLangOpen(false)}
                    className={`block px-4 py-2 text-xs font-bold tracking-wider transition-colors ${
                      opt.lang === lang
                        ? "text-blue-500 bg-blue-50 dark:bg-blue-900/20"
                        : isOnDarkBg
                        ? "text-navy-200 hover:bg-navy-800 hover:text-blue-400"
                        : "text-navy-500 dark:text-navy-300 hover:bg-navy-50 dark:hover:bg-navy-800 hover:text-blue-700 dark:hover:text-blue-400"
                    }`}
                  >
                    {opt.label}
                  </a>
                ))}
              </div>
            )}
          </div>
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
              <Sun className="w-4 h-4 text-blue-500" />
            ) : (
              <Moon className={`w-4 h-4 ${isOnDarkBg ? "text-navy-200" : "text-navy-500"}`} />
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`transition-colors ${
              isOnDarkBg
                ? "text-navy-100 hover:text-blue-400"
                : "text-navy-600 dark:text-navy-200 hover:text-blue-700 dark:hover:text-blue-400"
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
              className="block text-sm font-medium text-navy-600 dark:text-navy-200 hover:text-blue-700 dark:hover:text-blue-400 transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
