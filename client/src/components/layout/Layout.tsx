import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/lib/i18n";

export function Layout({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  return (
    <div className={`min-h-screen flex flex-col font-sans ${language === 'en' ? 'lang-en' : 'lang-tr'}`}>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}