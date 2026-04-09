import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { useLanguage } from "@/lib/i18n";

export function Layout({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const isRtl = language === "ar";

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      lang={language}
      className={`min-h-screen flex flex-col font-sans lang-${language}`}
    >
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingContact />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
}
