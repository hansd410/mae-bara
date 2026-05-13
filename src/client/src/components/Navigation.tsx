/*
 * Navigation — Light default + Dark toggle + Language dropdown
 * PNG 로고 (투명 배경 + 다크모드용 골드), 다크모드 토글, 언어 드롭다운
 */
import { useState, useEffect, useRef } from "react";
import { Menu, X, Moon, Sun, Globe, ChevronDown, ChevronRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { t, type Lang } from "@/lib/i18n";

const LOGO_LIGHT = "/handaro_logo_light.svg";
const LOGO_DARK = "/handaro_logo_dark.svg";

const LANG_OPTIONS: { label: string; href: string; lang: Lang }[] = [
  { label: "KR", href: "/", lang: "ko" },
  { label: "EN", href: "/en", lang: "en" },
  { label: "CN", href: "/zh", lang: "zh" },
  { label: "JP", href: "/jp", lang: "jp" },
];

const PRODUCT_ITEMS: {
  name: string;
  subtitle: string;
  href: string;
  tag?: string;
  category: Record<Lang, string>;
}[] = [
  // ── 콘텐츠 (B2C) ──
  { name: "Storyroll",       subtitle: "AI Video Generator",               href: "https://storyroll.handaroai.com",      tag: "New",        category: { ko: "콘텐츠",            en: "Content",              zh: "内容",            jp: "コンテンツ" } },
  { name: "Viral Cut",       subtitle: "AI Short-Form Extractor",          href: "https://viralcut.handaroai.com",       tag: "New",        category: { ko: "콘텐츠",            en: "Content",              zh: "内容",            jp: "コンテンツ" } },
  { name: "Script2Podcast",  subtitle: "AI Blog-to-Podcast",               href: "https://script2podcast.handaroai.com", tag: "New",        category: { ko: "콘텐츠",            en: "Content",              zh: "内容",            jp: "コンテンツ" } },
  { name: "Thumb AI",        subtitle: "AI CTR Thumbnail",                 href: "https://thumbai.handaroai.com",        tag: "New",        category: { ko: "콘텐츠",            en: "Content",              zh: "内容",            jp: "コンテンツ" } },
  // ── 이커머스 (B2C) ──
  { name: "ManySeller",      subtitle: "AI Product Page Builder",          href: "https://manyseller.handaroai.com",     tag: "New",        category: { ko: "이커머스",          en: "E-Commerce",           zh: "电商",            jp: "イーコマース" } },
  { name: "Auto Ad Copy",    subtitle: "AI Ad Copy Generator",             href: "https://autoadcopy.handaroai.com",     tag: "New",        category: { ko: "이커머스",          en: "E-Commerce",           zh: "电商",            jp: "イーコマース" } },
  { name: "Review2Insight",  subtitle: "AI Review Analytics Engine",       href: "https://review2insight.handaroai.com", tag: "New",        category: { ko: "이커머스",          en: "E-Commerce",           zh: "电商",            jp: "イーコマース" } },
  // ── 에듀테크 (B2C) ──
  { name: "LessonForge AI",  subtitle: "AI Lesson Plan Generator",         href: "https://lessonforgeai.handaroai.com",  tag: "New",        category: { ko: "에듀테크",          en: "EduTech",              zh: "教育科技",        jp: "エドテック" } },
  { name: "QuizMaster AI",   subtitle: "AI Assessment Item Generator",     href: "https://quizmasterai.handaroai.com",   tag: "New",        category: { ko: "에듀테크",          en: "EduTech",              zh: "教育科技",        jp: "エドテック" } },
  // ── 문서·업무 ──
  { name: "True Draft",      subtitle: "AI Universal Document Auditor",    href: "https://truedraft.handaroai.com",                         category: { ko: "문서·업무",         en: "Task",                 zh: "文档·业务",       jp: "文書·業務" } },
  { name: "True Agent",      subtitle: "AI Autonomous Task Engine",        href: "https://trueagent.handaroai.com",      tag: "Enterprise", category: { ko: "문서·업무",         en: "Task",                 zh: "文档·业务",       jp: "文書·業務" } },
  // ── 예측·마케팅 (B2B) ──
  { name: "True Predict",    subtitle: "AI Demand & Logistics Forecaster", href: "https://truepredict.handaroai.com",    tag: "Enterprise", category: { ko: "예측·마케팅",       en: "Predictive",           zh: "预测·营销",       jp: "予測·マーケティング" } },
  { name: "True Persona",    subtitle: "Hyper-Personalization Engine",     href: "https://truepersona.handaroai.com",    tag: "Enterprise", category: { ko: "예측·마케팅",       en: "Predictive",           zh: "预测·营销",       jp: "予測·マーケティング" } },
  // ── 물류·제조 (B2B / 플랫폼) ──
  { name: "Handaro AI One",  subtitle: "Port Sync Orchestrator",           href: "https://one.handaroai.com",            tag: "Enterprise", category: { ko: "물류·제조",         en: "Logistics",            zh: "物流·制造",       jp: "物流·製造" } },
];

const VIEW_ALL_LABEL: Record<Lang, string> = {
  ko: "전체 보기",
  en: "View All",
  zh: "全部产品",
  jp: "全製品を見る",
};

const LINEUP_HEADER_LABEL: Record<Lang, string> = {
  ko: "제품 라인업",
  en: "Product Lineup",
  zh: "产品阵列",
  jp: "製品ラインアップ",
};

type ProductTab = "all" | "b2c" | "b2b";

export default function Navigation({ lang = "ko" as Lang }: { lang?: Lang }) {
  const i = t(lang).nav;
  const tProd = t(lang).product;
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [productTab, setProductTab] = useState<ProductTab>("all");
  const [mobileProductTab, setMobileProductTab] = useState<ProductTab>("all");
  const [scrolled, setScrolled] = useState(false);

  const filterByTab = (tab: ProductTab) =>
    tab === "all"
      ? PRODUCT_ITEMS
      : tab === "b2b"
      ? PRODUCT_ITEMS.filter((p) => p.tag === "Enterprise")
      : PRODUCT_ITEMS.filter((p) => p.tag !== "Enterprise");
  const { theme, toggleTheme } = useTheme();
  const langRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);
  const productTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  useEffect(() => {
    return () => {
      if (productTimeoutRef.current) clearTimeout(productTimeoutRef.current);
    };
  }, []);

  const handleProductEnter = () => {
    if (productTimeoutRef.current) clearTimeout(productTimeoutRef.current);
    setProductOpen(true);
  };
  const handleProductLeave = () => {
    productTimeoutRef.current = setTimeout(() => setProductOpen(false), 180);
  };

  const isOnDarkBg = theme === "dark";
  const currentLang = LANG_OPTIONS.find((o) => o.lang === lang)!;

  const langBtnClass = `flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold tracking-wider transition-colors ${
    isOnDarkBg
      ? "border-navy-600 hover:bg-navy-800/50 text-blue-400"
      : "border-navy-200 dark:border-navy-700 hover:bg-navy-100 dark:hover:bg-navy-800 text-navy-500 dark:text-navy-300"
  }`;

  const navLinkClass = `nav-link-anim text-xs xl:text-sm font-medium transition-colors whitespace-nowrap leading-none ${
    isOnDarkBg
      ? "text-navy-100 hover:text-blue-400"
      : "text-navy-600 dark:text-navy-200 hover:text-blue-700 dark:hover:text-blue-400"
  }`;

  const dropdownBg = isOnDarkBg
    ? "bg-navy-900 border-navy-700"
    : "bg-white dark:bg-navy-900 border-navy-200 dark:border-navy-700";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-navy-950/95 backdrop-blur-xl shadow-lg border-b border-navy-200/50 dark:border-blue-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-4 flex items-center justify-between">
        <a href={lang === "en" ? "/en#home" : lang === "zh" ? "/zh#home" : lang === "jp" ? "/jp#home" : "#home"} className="flex items-center gap-3">
          <img
            src={isOnDarkBg ? LOGO_DARK : LOGO_LIGHT}
            alt="Handaro AI"
            className="h-auto w-[88px] sm:w-[110px] lg:w-[150px] xl:w-[180px]"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {i.links.map((link) =>
            link.href === "#product" ? (
              /* Product dropdown trigger */
              <div
                key={link.href}
                className="relative"
                onMouseEnter={handleProductEnter}
                onMouseLeave={handleProductLeave}
              >
                <a
                  href={link.href}
                  className={`${navLinkClass} flex items-center gap-0.5`}
                >
                  {link.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${productOpen ? "rotate-180" : ""}`}
                  />
                </a>

                {/* Dropdown panel */}
                {productOpen && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[580px] rounded-2xl border shadow-2xl overflow-hidden ${dropdownBg}`}
                    style={{ zIndex: 100 }}
                  >
                    {/* Header */}
                    <div className={`px-5 py-3 border-b flex items-center justify-between ${
                      isOnDarkBg ? "border-navy-700 bg-navy-800/50" : "border-navy-100 dark:border-navy-700 bg-navy-50/80 dark:bg-navy-800/50"
                    }`}>
                      <span className={`text-xs font-semibold tracking-widest uppercase ${
                        isOnDarkBg ? "text-blue-400" : "text-blue-600 dark:text-blue-400"
                      }`}>
                        {LINEUP_HEADER_LABEL[lang]}
                      </span>
                      <a
                        href={link.href}
                        className={`flex items-center gap-1 text-xs font-medium transition-colors ${
                          isOnDarkBg ? "text-navy-400 hover:text-blue-400" : "text-navy-400 hover:text-blue-600 dark:hover:text-blue-400"
                        }`}
                      >
                        {VIEW_ALL_LABEL[lang]}
                        <ChevronRight className="w-3 h-3" />
                      </a>
                    </div>

                    {/* B2C/B2B tabs */}
                    <div className={`px-4 pt-3 pb-2 border-b flex items-center gap-1.5 ${
                      isOnDarkBg ? "border-navy-700/60" : "border-navy-100 dark:border-navy-700/60"
                    }`}>
                      {(["all", "b2c", "b2b"] as ProductTab[]).map((tab) => {
                        const isActive = productTab === tab;
                        const label = tab === "all" ? tProd.tabAll : tab === "b2c" ? tProd.tabB2C : tProd.tabB2B;
                        const activeClass = tab === "b2b"
                          ? "bg-amber-50 dark:bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/30"
                          : "bg-blue-50 dark:bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-500/30";
                        const idleClass = isOnDarkBg
                          ? "text-navy-300 border-transparent hover:bg-navy-800"
                          : "text-navy-500 dark:text-navy-300 border-transparent hover:bg-navy-50 dark:hover:bg-navy-800";
                        return (
                          <button
                            key={tab}
                            onClick={() => setProductTab(tab)}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide border transition-colors ${
                              isActive ? activeClass : idleClass
                            }`}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>

                    {/* Product grid — 3 columns */}
                    <div className="p-4 grid grid-cols-3 gap-1.5">
                      {filterByTab(productTab).map((p) => (
                        <a
                          key={p.name}
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group flex flex-col px-3 py-2.5 rounded-xl transition-colors ${
                            isOnDarkBg
                              ? "hover:bg-navy-800"
                              : "hover:bg-navy-50 dark:hover:bg-navy-800"
                          }`}
                        >
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className={`text-xs font-semibold group-hover:text-blue-500 transition-colors ${
                              isOnDarkBg ? "text-navy-100" : "text-navy-700 dark:text-navy-100"
                            }`}>
                              {p.name}
                            </span>
                            {p.tag === "New" && (
                              <span className="text-[9px] font-bold px-1 py-0.5 rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 leading-none">
                                NEW
                              </span>
                            )}
                            {p.tag === "Enterprise" && (
                              <span className="text-[9px] font-bold px-1 py-0.5 rounded-md bg-amber-500/15 text-amber-600 dark:text-amber-400 leading-none">
                                B2B
                              </span>
                            )}
                          </div>
                          <span className={`text-[10px] leading-tight ${
                            isOnDarkBg ? "text-navy-400" : "text-navy-400 dark:text-navy-500"
                          }`}>
                            {p.category[lang]}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={navLinkClass}
              >
                {link.label}
              </a>
            )
          )}

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
        <div className="flex lg:hidden items-center gap-1.5">
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
          isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 dark:bg-navy-950/95 backdrop-blur-xl border-t border-navy-200/50 dark:border-navy-700/30 px-6 py-4 space-y-3">
          {i.links.map((link) =>
            link.href === "#product" ? (
              <div key={link.href}>
                <button
                  onClick={() => setMobileProductOpen((v) => !v)}
                  className="w-full flex items-center justify-between text-sm font-medium text-navy-600 dark:text-navy-200 hover:text-blue-700 dark:hover:text-blue-400 transition-colors py-2"
                >
                  {link.label}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileProductOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileProductOpen && (
                  <div className="pl-2 pb-1 space-y-1">
                    {/* Mobile B2C/B2B tabs */}
                    <div className="flex items-center gap-1.5 pb-2 mb-1 border-b border-navy-100 dark:border-navy-700/40">
                      {(["all", "b2c", "b2b"] as ProductTab[]).map((tab) => {
                        const isActive = mobileProductTab === tab;
                        const label = tab === "all" ? tProd.tabAll : tab === "b2c" ? tProd.tabB2C : tProd.tabB2B;
                        const activeClass = tab === "b2b"
                          ? "bg-amber-50 dark:bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/30"
                          : "bg-blue-50 dark:bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-500/30";
                        return (
                          <button
                            key={tab}
                            onClick={() => setMobileProductTab(tab)}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide border transition-colors ${
                              isActive
                                ? activeClass
                                : "text-navy-500 dark:text-navy-300 border-transparent hover:bg-navy-50 dark:hover:bg-navy-800"
                            }`}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>
                    {filterByTab(mobileProductTab).map((p) => (
                      <a
                        key={p.name}
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-navy-50 dark:hover:bg-navy-800 transition-colors group"
                      >
                        <div>
                          <span className="block text-xs font-semibold text-navy-700 dark:text-navy-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {p.name}
                          </span>
                          <span className="block text-[10px] text-navy-400 dark:text-navy-500 mt-0.5">
                            {p.subtitle}
                          </span>
                        </div>
                        {p.tag && (
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md leading-none ${
                            p.tag === "New"
                              ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                              : "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                          }`}>
                            {p.tag === "Enterprise" ? "B2B" : "NEW"}
                          </span>
                        )}
                      </a>
                    ))}
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-1 px-3 py-2 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {VIEW_ALL_LABEL[lang]}
                      <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-navy-600 dark:text-navy-200 hover:text-blue-700 dark:hover:text-blue-400 transition-colors py-2"
              >
                {link.label}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
