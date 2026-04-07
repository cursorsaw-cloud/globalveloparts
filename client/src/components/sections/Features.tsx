import { Globe, ShieldCheck, Truck, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      title: t("feat.1.title"),
      description: t("feat.1.desc"),
      icon: Globe,
    },
    {
      title: t("feat.2.title"),
      description: t("feat.2.desc"),
      icon: ShieldCheck,
    },
    {
      title: t("feat.3.title"),
      description: t("feat.3.desc"),
      icon: Truck,
    },
    {
      title: t("feat.4.title"),
      description: t("feat.4.desc"),
      icon: Users,
    },
  ];

  const stats = [
    { value: "40+", label: t("feat.stat.1.label") },
    { value: "80+", label: t("feat.stat.2.label") },
    { value: "15k+", label: t("feat.stat.3.label") },
    { value: "%100", label: t("feat.stat.4.label") },
  ];

  return (
    <section id="about" className="relative -mt-18 overflow-visible bg-slate-50">
      <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/4 -translate-y-1/3 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/4 translate-y-1/3 rounded-full bg-secondary/10 blur-3xl" />

      <div className="section-shell relative z-10 pt-0">
        <div className="surface-panel grid gap-5 rounded-[2rem] px-6 py-7 sm:grid-cols-2 xl:grid-cols-4 xl:px-8 xl:py-8">
          {stats.map((stat, index) => (
            <div key={index} className="rounded-[1.4rem] border border-slate-200/70 bg-white/75 px-5 py-5 text-center xl:text-left">
              <div className="text-4xl font-extrabold tracking-[-0.05em] text-primary">{stat.value}</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 flex max-w-[62rem] flex-col items-center text-center">
          <div className="section-heading items-center text-center">
            <span className="section-kicker text-secondary" data-testid="text-features-badge">
              {t("feat.badge")}
            </span>
            <h2 className="section-title" data-testid="text-features-title">
              {t("feat.title")}
            </h2>
            <p className="section-copy" data-testid="text-features-description">
              {t("feat.desc")}
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="surface-panel rounded-[1.75rem] bg-white/95 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_42px_90px_-60px_rgba(15,23,42,0.4)]"
            >
              <CardHeader className="space-y-5 px-6 pb-4 pt-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-slate-200/80 bg-slate-100 text-primary shadow-sm">
                  <feature.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <CardTitle className="text-[1.4rem] font-bold leading-tight text-slate-950">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-[0.95rem] leading-7 text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
