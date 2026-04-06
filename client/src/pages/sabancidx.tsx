import { Shield, Server, Zap, Globe, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export default function SabanciDxPage() {
  const { t } = useLanguage();
  
  return (
    <div className="py-20 container animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm border mb-8">
            <img 
              src="https://www.sabancidx.com/assets/images/logo.svg" 
              alt="SabancıDx Logo" 
              className="h-12 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://ui-avatars.com/api/?name=SabanciDx&background=0f172a&color=fff&size=120";
              }}
            />
            <span className="mx-4 text-2xl text-slate-300 font-light">|</span>
            <img src="/logo.png" alt="Globalvelo Logo" className="h-10 object-contain" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-slate-900">
            {t('sdx.title')}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {t('sdx.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 p-8 rounded-2xl border">
            <Shield className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">{t('sdx.1.title')}</h3>
            <p className="text-slate-600">
              {t('sdx.1.desc')}
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border">
            <Server className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">{t('sdx.2.title')}</h3>
            <p className="text-slate-600">
              {t('sdx.2.desc')}
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border">
            <Globe className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">{t('sdx.3.title')}</h3>
            <p className="text-slate-600">
              {t('sdx.3.desc')}
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border">
            <Zap className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">{t('sdx.4.title')}</h3>
            <p className="text-slate-600">
              {t('sdx.4.desc')}
            </p>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground rounded-3xl p-10 text-center relative overflow-hidden">
          <Cpu className="absolute -right-10 -bottom-10 w-64 h-64 text-white opacity-5" />
          <h2 className="text-3xl font-bold mb-4 relative z-10">{t('sdx.cta.title')}</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8 relative z-10">
            {t('sdx.cta.desc')}
          </p>
          <a href="https://www.sabancidx.com/" target="_blank" rel="noopener noreferrer" className="relative z-10">
            <Button variant="secondary" size="lg" className="font-semibold">
              {t('sdx.cta.btn')}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}