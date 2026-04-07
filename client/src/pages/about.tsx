import { ArrowRight, CheckCircle2, Globe2, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useLanguage();

  const metrics = [
    { value: "20+", label: t("about.metrics.years") },
    { value: "40+", label: t("about.metrics.markets") },
    { value: "80+", label: t("about.metrics.brands") },
    { value: "24/7", label: t("about.metrics.support") },
  ];

  const values = [
    { icon: ShieldCheck, title: t("about.values.1") },
    { icon: Sparkles, title: t("about.values.2") },
    { icon: CheckCircle2, title: t("about.values.3") },
    { icon: Globe2, title: t("about.values.4") },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0f172a_0%,#111827_55%,#1e293b_100%)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.2),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.22),transparent_28%)]" />
        <div className="section-shell relative z-10 py-20 md:py-24 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,28rem)] lg:gap-12">
            <div className="max-w-[44rem]">
              <span className="section-kicker text-slate-300" data-testid="text-about-badge">
                {t("about.badge")}
              </span>
              <h1 className="mt-5 text-[3rem] font-extrabold leading-[0.96] tracking-[-0.05em] text-white sm:text-[4rem] lg:text-[5rem]" data-testid="text-about-title">
                {t("about.title")}
              </h1>
              <p className="mt-7 max-w-[38rem] text-[1.06rem] leading-8 text-slate-300 md:text-[1.16rem]" data-testid="text-about-description">
                {t("about.desc")}
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="h-14 rounded-full px-8 text-base shadow-[0_22px_55px_-24px_rgba(37,99,235,0.7)]">
                  <a href="/products" data-testid="button-about-products">
                    {t("about.cta.primary")}
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 rounded-full border-white/15 bg-white/5 px-8 text-base text-white hover:bg-white/10 hover:text-white">
                  <a href="/#contact" data-testid="button-about-contact">
                    {t("about.cta.secondary")}
                  </a>
                </Button>
              </div>
            </div>

            <div className="glass-panel-dark rounded-[2rem] p-7 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-white/10 text-primary">
                  <Globe2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400" data-testid="text-about-panel-kicker">
                    {t("about.panel.kicker")}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-white" data-testid="text-about-panel-title">
                    {t("about.panel.title")}
                  </h2>
                </div>
              </div>
              <p className="text-sm leading-7 text-slate-300" data-testid="text-about-panel-description">
                {t("about.panel.desc")}
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-[1.35rem] border border-white/10 bg-white/5 px-5 py-4" data-testid={`card-about-metric-${metric.label}`}>
                    <div className="text-3xl font-extrabold tracking-[-0.05em] text-white">{metric.value}</div>
                    <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider bg-white">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
            <div className="surface-panel rounded-[2rem] p-7 md:p-9">
              <span className="section-kicker text-secondary" data-testid="text-about-story-kicker">
                {t("about.story.kicker")}
              </span>
              <h2 className="mt-4 text-[2.2rem] font-bold leading-tight tracking-[-0.04em] text-slate-950 md:text-[2.75rem]" data-testid="text-about-story-title">
                {t("about.story.title")}
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-slate-600" data-testid="text-about-story-body-1">
                {t("about.story.body1")}
              </p>
              <p className="mt-4 text-[1rem] leading-8 text-slate-600" data-testid="text-about-story-body-2">
                {t("about.story.body2")}
              </p>
            </div>

            <div className="grid gap-6">
              <div className="surface-panel rounded-[2rem] p-7 md:p-8">
                <p className="section-kicker text-secondary" data-testid="text-about-vision-kicker">
                  {t("about.vision.title")}
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-700" data-testid="text-about-vision-description">
                  {t("about.vision.desc")}
                </p>
              </div>
              <div className="surface-panel rounded-[2rem] p-7 md:p-8">
                <p className="section-kicker text-secondary" data-testid="text-about-mission-kicker">
                  {t("about.mission.title")}
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-700" data-testid="text-about-mission-description">
                  {t("about.mission.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider bg-slate-50">
        <div className="section-shell">
          <div className="mx-auto max-w-[44rem] text-center">
            <span className="section-kicker text-secondary" data-testid="text-about-values-badge">
              {t("about.values.title")}
            </span>
            <h2 className="mt-4 text-[2.3rem] font-bold tracking-[-0.04em] text-slate-950 md:text-[3rem]" data-testid="text-about-values-title">
              {t("about.values.heading")}
            </h2>
            <p className="mx-auto mt-5 max-w-[40rem] text-[1rem] leading-8 text-slate-600" data-testid="text-about-values-description">
              {t("about.values.desc")}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div key={value.title} className="surface-panel rounded-[1.8rem] p-6" data-testid={`card-about-value-${value.title}`}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.15rem] border border-slate-200/80 bg-slate-100 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-[1.35rem] font-bold text-slate-950">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{t(`about.values.${value.title === t("about.values.1") ? "detail1" : value.title === t("about.values.2") ? "detail2" : value.title === t("about.values.3") ? "detail3" : "detail4"}`)}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 rounded-[2rem] bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)] px-7 py-8 text-white shadow-[0_30px_90px_-40px_rgba(15,23,42,0.75)] md:px-10 md:py-10">
            <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto]">
              <div>
                <p className="section-kicker text-slate-400" data-testid="text-about-promise-kicker">
                  {t("about.promise.kicker")}
                </p>
                <h2 className="mt-4 text-[2rem] font-bold tracking-[-0.04em] text-white md:text-[2.6rem]" data-testid="text-about-promise-title">
                  {t("about.promise.title")}
                </h2>
                <p className="mt-4 max-w-[44rem] text-[1rem] leading-8 text-slate-300" data-testid="text-about-promise-description">
                  {t("about.promise.desc")}
                </p>
              </div>
              <Button asChild size="lg" variant="secondary" className="h-14 rounded-full px-8 text-base font-semibold" >
                <a href="/#contact" data-testid="button-about-cta-contact">
                  {t("about.cta.secondary")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
