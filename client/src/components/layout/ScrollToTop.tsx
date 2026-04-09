import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function ScrollToTop() {
  const { t, language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const isRtl = language === "ar";

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-24 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-600 shadow-[0_8px_24px_-6px_rgba(15,23,42,0.22)] backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-slate-900 hover:shadow-[0_12px_30px_-6px_rgba(15,23,42,0.30)] animate-in fade-in zoom-in-95 ${isRtl ? "left-6" : "right-6"}`}
      aria-label={t("backtotop")}
      data-testid="button-scroll-to-top"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
