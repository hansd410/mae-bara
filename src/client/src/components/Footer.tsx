/*
 * Footer — Light default + Dark mode + i18n
 */
import { t, type Lang } from "@/lib/i18n";

const LOGO_LIGHT = "/handalo_logo_light.svg";
const LOGO_DARK = "/handalo_logo_dark.svg";

export default function Footer({ lang = "ko" as Lang }: { lang?: Lang }) {
  const i = t(lang).footer;

  return (
    <footer className="bg-navy-50 dark:bg-navy-950 border-t border-navy-200 dark:border-navy-800/50 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={LOGO_LIGHT} alt="Handalo AI" className="h-7 dark:hidden" />
            <img src={LOGO_DARK} alt="Handalo AI" className="h-7 hidden dark:block" />
          </div>
          <div className="text-center md:text-right">
            <p className="text-navy-400 dark:text-navy-500 text-base">{i.copyright}</p>
            <p className="text-navy-300 dark:text-navy-600 text-base mt-1">{i.tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
