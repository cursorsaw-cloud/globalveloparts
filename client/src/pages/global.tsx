import { useLanguage } from "@/lib/i18n";

export default function GlobalNetworkPage() {
  const { t } = useLanguage();
  
  return (
    <div className="py-20 container animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-4xl font-bold mb-8 font-heading">{t('global.title')}</h1>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t('global.desc')}
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-medium">{t('global.eu')}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-medium">{t('global.me')}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-medium">{t('global.asia')}</span>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 aspect-video rounded-2xl flex items-center justify-center text-white/20 font-bold text-2xl border border-white/10 overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity" alt="Global Network" />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
          <span className="relative z-10 text-white/80 tracking-widest uppercase text-lg">Globalvelo Network</span>
        </div>
      </div>
    </div>
  );
}