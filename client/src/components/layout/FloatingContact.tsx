import { useEffect, useState } from "react";
import { Mail, MessageCircle, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const WHATSAPP_NUMBER = "905322562571";
const EMAIL = "info@globalvelo.com.tr";

export function FloatingContact() {
  const { t, language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const isRtl = language === "ar";

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 420);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const waText = encodeURIComponent(
    language === "tr"
      ? "Merhaba, yedek parça teklifi almak istiyorum."
      : language === "ar"
        ? "مرحباً، أود الحصول على عرض سعر لقطع الغيار."
        : language === "ru"
          ? "Здравствуйте, хотел бы запросить предложение на запасные части."
          : language === "es"
            ? "Hola, me gustaría solicitar un presupuesto de repuestos."
            : language === "fr"
              ? "Bonjour, je souhaite obtenir un devis pour des pièces détachées."
              : "Hello, I would like to request a spare parts quote.",
  );

  return (
    <div
      className={`fixed bottom-6 z-50 flex flex-col items-end gap-2.5 ${isRtl ? "left-6" : "right-6"}`}
      data-testid="div-floating-contact"
    >
      {expanded && (
        <div className="flex flex-col items-end gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full border border-white/20 bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_32px_-8px_rgba(37,211,102,0.7)] transition-all hover:bg-[#22c55e] hover:shadow-[0_12px_40px_-8px_rgba(37,211,102,0.8)]"
            data-testid="link-floating-whatsapp"
            aria-label={t("float.whatsapp")}
          >
            <MessageCircle className="h-4 w-4 shrink-0" />
            <span className="whitespace-nowrap">WhatsApp</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-[0_8px_28px_-8px_rgba(15,23,42,0.3)] transition-all hover:bg-slate-50 hover:shadow-[0_12px_36px_-8px_rgba(15,23,42,0.38)]"
            data-testid="link-floating-email"
            aria-label={t("float.email")}
          >
            <Mail className="h-4 w-4 shrink-0" />
            <span className="whitespace-nowrap">{EMAIL}</span>
          </a>
        </div>
      )}

      <button
        onClick={() => setExpanded((p) => !p)}
        className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_10px_40px_-8px_rgba(37,99,235,0.75)] transition-all duration-300 hover:scale-105 hover:shadow-[0_14px_48px_-8px_rgba(37,99,235,0.85)] ${
          expanded
            ? "bg-slate-800"
            : "bg-[linear-gradient(135deg,#1d4ed8_0%,#2563eb_100%)]"
        }`}
        aria-label={expanded ? "Close contact options" : "Quick contact"}
        data-testid="button-floating-contact-toggle"
      >
        {expanded ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
