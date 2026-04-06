import { Globe, ShieldCheck, Truck, Users, Award, Zap, Server, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";

export function Features() {
  const { t } = useLanguage();
  
  const features = [
    {
      title: t('feat.1.title'),
      description: t('feat.1.desc'),
      icon: Globe,
    },
    {
      title: t('feat.2.title'),
      description: t('feat.2.desc'),
      icon: ShieldCheck,
    },
    {
      title: t('feat.3.title'),
      description: t('feat.3.desc'),
      icon: Truck,
    },
    {
      title: t('feat.4.title'),
      description: t('feat.4.desc'),
      icon: Users,
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 border-t border-slate-200/60 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      
      <div className="container relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3 block">{t('feat.badge')}</span>
          <h2 className="mb-6 text-4xl font-extrabold md:text-5xl text-slate-900 tracking-tight">
            {t('feat.title')}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            {t('feat.desc')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-slate-200/60 shadow-md bg-white hover:-translate-y-2 hover:shadow-xl transition-all duration-400 group">
              <CardHeader className="space-y-5 pb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm border border-slate-200/50">
                  <feature.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Statistics / Trust indicators */}
        <div className="mt-20 pt-10 border-t border-slate-200/60 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-extrabold text-primary mb-2">40+</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{t('feat.stat.1.label')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-primary mb-2">80+</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{t('feat.stat.2.label')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-primary mb-2">15k+</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{t('feat.stat.3.label')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-primary mb-2">%100</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{t('feat.stat.4.label')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}