import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Network,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useLanguage();

  const metrics = [
    { value: "HQ", label: t("about.metrics.years") },
    { value: "Global", label: t("about.metrics.markets") },
    { value: "B2B", label: t("about.metrics.brands") },
    { value: "Dx", label: t("about.metrics.support") },
  ];

  const values = [
    { icon: Globe2, title: t("about.values.1"), detail: t("about.values.detail1") },
    { icon: Network, title: t("about.values.2"), detail: t("about.values.detail2") },
    { icon: CheckCircle2, title: t("about.values.3"), detail: t("about.values.detail3") },
    { icon: ShieldCheck, title: t("about.values.4"), detail: t("about.values.detail4") },
  ];

  const narrative = [t("about.story.body1"), t("about.story.body2"), t("about.story.body3")];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#020617_0%,#0f172a_52%,#172554_100%)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.18),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="section-shell relative z-10 py-18 md:py-22 lg:py-24">
          <div className="grid items-end gap-10 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] xl:gap-10">
            <div className="max-w-[50rem]">
              <span className="section-kicker text-slate-300" data-testid="text-about-badge">
                {t("about.badge")}
              </span>
              <h1 className="display-title mt-5 text-white" data-testid="text-about-title">
                {t("about.title")}
              </h1>
              <p className="body-lead mt-7 max-w-[44rem]" data-testid="text-about-description">
                {t("about.desc")}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className="rounded-[1.45rem] border border-white/10 bg-white/[0.05] px-5 py-5 backdrop-blur-sm"
                    data-testid={`card-about-metric-${index}`}
                  >
                    <div className="text-[2rem] font-extrabold tracking-[-0.05em] text-white">{metric.value}</div>
                    <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="px-8 text-base" data-testid="button-about-products">
                  <a href="/products">
                    {t("about.cta.primary")}
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="border border-white/15 bg-white/[0.05] px-8 text-base text-white hover:border-white/24 hover:bg-white/[0.1] hover:text-white"
                  data-testid="button-about-contact"
                >
                  <a href="/#contact">{t("about.cta.secondary")}</a>
                </Button>
              </div>
            </div>

            <div className="glass-panel-dark overflow-hidden rounded-[2rem] p-6 md:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] border border-white/10 bg-white/[0.08] text-primary">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400" data-testid="text-about-panel-kicker">
                    {t("about.panel.kicker")}
                  </p>
                  <h2 className="mt-2 text-[1.9rem] font-bold leading-tight text-white" data-testid="text-about-panel-title">
                    {t("about.panel.title")}
                  </h2>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300" data-testid="text-about-panel-description">
                {t("about.panel.desc")}
              </p>

              <div className="mt-7 grid gap-3">
                {narrative.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] px-4 py-4"
                    data-testid={`row-about-narrative-${index}`}
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      0{index + 1}
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider bg-white">
        <div className="section-shell">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-start">
            <div className="surface-panel rounded-[2rem] p-7 md:p-9">
              <span className="section-kicker text-secondary" data-testid="text-about-story-kicker">
                {t("about.story.kicker")}
              </span>
              <h2 className="mt-4 text-[2.2rem] font-bold leading-tight tracking-[-0.04em] text-slate-950 md:text-[2.9rem]" data-testid="text-about-story-title">
                {t("about.story.title")}
              </h2>
              <div className="mt-6 space-y-4">
                {narrative.map((item, index) => (
                  <p key={index} className="text-[1rem] leading-8 text-slate-600" data-testid={`text-about-story-body-${index + 1}`}>
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)] p-7 shadow-[0_30px_80px_-55px_rgba(15,23,42,0.35)] md:p-8">
                <p className="section-kicker text-secondary" data-testid="text-about-vision-kicker">
                  {t("about.vision.title")}
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-700" data-testid="text-about-vision-description">
                  {t("about.vision.desc")}
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_30px_80px_-55px_rgba(15,23,42,0.28)] md:p-8">
                <p className="section-kicker text-secondary" data-testid="text-about-mission-kicker">
                  {t("about.mission.title")}
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-700" data-testid="text-about-mission-description">
                  {t("about.mission.desc")}
                </p>
              </div>

              <div className="rounded-[2rem] bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)] p-7 text-white shadow-[0_36px_90px_-50px_rgba(15,23,42,0.85)] md:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[0.95rem] bg-white/10 text-primary">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400" data-testid="text-about-positioning-kicker">
                    GlobalVelo
                  </p>
                </div>
                <p className="mt-4 text-lg leading-8 text-slate-200" data-testid="text-about-positioning-description">
                  {t("about.promise.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider bg-white">
        <div className="section-shell">
          <div className="mx-auto max-w-[52rem] text-center">
            <span className="section-kicker text-secondary flex items-center justify-center gap-2" data-testid="text-about-activities-kicker">
              <TrendingUp className="h-4 w-4" />
              {t("about.activities.kicker")}
            </span>
            <h2 className="mt-4 text-[2.3rem] font-bold tracking-[-0.04em] text-slate-950 md:text-[3rem]" data-testid="text-about-activities-title">
              {t("about.activities.title")}
            </h2>
            <p className="mx-auto mt-5 max-w-[44rem] text-[1rem] leading-8 text-slate-600" data-testid="text-about-activities-desc">
              {t("about.activities.desc")}
            </p>
          </div>
        </div>
      </section>

      <section className="section-divider bg-slate-50">
        <div className="section-shell">
          <div className="mx-auto max-w-[46rem] text-center">
            <span className="section-kicker text-secondary" data-testid="text-about-values-badge">
              {t("about.values.title")}
            </span>
            <h2 className="mt-4 text-[2.3rem] font-bold tracking-[-0.04em] text-slate-950 md:text-[3rem]" data-testid="text-about-values-title">
              {t("about.values.heading")}
            </h2>
            <p className="mx-auto mt-5 max-w-[42rem] text-[1rem] leading-8 text-slate-600" data-testid="text-about-values-description">
              {t("about.values.desc")}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div key={value.title} className="surface-panel rounded-[1.8rem] p-6" data-testid={`card-about-value-${index}`}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.15rem] border border-slate-200/80 bg-slate-100 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-[1.35rem] font-bold text-slate-950">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{value.detail}</p>
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
                <p className="mt-4 max-w-[46rem] text-[1rem] leading-8 text-slate-300" data-testid="text-about-promise-description">
                  {t("about.promise.desc")}
                </p>
              </div>
              <Button asChild size="lg" variant="secondary" className="px-8 text-base font-semibold" data-testid="button-about-cta-contact">
                <a href="/#contact">{t("about.cta.secondary")}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
