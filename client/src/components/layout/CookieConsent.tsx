import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

const STORAGE_KEY = "globalvelo_cookie_consent";

export function CookieConsent() {
  const { t, language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const isRtl = language === "ar";

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-slate-200 bg-white/96 px-4 py-4 shadow-[0_-20px_60px_-20px_rgba(15,23,42,0.18)] backdrop-blur-xl animate-in slide-in-from-bottom-2 duration-300 sm:px-6"
      data-testid="div-cookie-consent"
    >
      <div className="mx-auto flex max-w-screen-xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Cookie className="h-4 w-4" />
          </div>
          <p className="text-[0.9rem] leading-6 text-slate-700" data-testid="text-cookie-message">
            {t("cookie.text")}
          </p>
        </div>
        <div className={`flex shrink-0 gap-2.5 ${isRtl ? "flex-row-reverse" : ""}`}>
          <Button
            size="sm"
            variant="outline"
            onClick={handleDecline}
            className="border-slate-300 px-5 text-slate-600 hover:bg-slate-50"
            data-testid="button-cookie-decline"
          >
            {t("cookie.decline")}
          </Button>
          <Button
            size="sm"
            onClick={handleAccept}
            className="px-5"
            data-testid="button-cookie-accept"
          >
            {t("cookie.accept")}
          </Button>
        </div>
      </div>
    </div>
  );
}
