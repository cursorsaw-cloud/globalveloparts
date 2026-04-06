import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useLanguage();
  
  return (
    <div className="py-20 container animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-4xl font-bold mb-8 font-heading">{t('about.title')}</h1>
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          {t('about.desc')}
        </p>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="bg-muted p-8 rounded-xl border border-primary/10">
            <h3 className="text-xl font-bold mb-4 text-primary">{t('about.vision.title')}</h3>
            <p className="text-muted-foreground">{t('about.vision.desc')}</p>
          </div>
          <div className="bg-muted p-8 rounded-xl border border-primary/10">
            <h3 className="text-xl font-bold mb-4 text-primary">{t('about.values.title')}</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>{t('about.values.1')}</li>
              <li>{t('about.values.2')}</li>
              <li>{t('about.values.3')}</li>
              <li>{t('about.values.4')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}