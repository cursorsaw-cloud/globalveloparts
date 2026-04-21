import { ArrowRight, Globe, Server, Shield, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export default function SabanciDxPage() {
  const { t } = useLanguage();

  const pillars = [
    { icon: Shield, title: t("sdx.1.title"), desc: t("sdx.1.desc") },
    { icon: Server, title: t("sdx.2.title"), desc: t("sdx.2.desc") },
    { icon: Globe, title: t("sdx.3.title"), desc: t("sdx.3.desc") },
    { icon: Zap, title: t("sdx.4.title"), desc: t("sdx.4.desc") },
  ];

  const outcomes = [
    t("sdx.outcomes.1"),
    t("sdx.outcomes.2"),
    t("sdx.outcomes.3"),
    t("sdx.outcomes.4"),
  ];

  const stats = [
    { value: "24/7", label: t("sdx.stats.1") },
    { value: "80+", label: t("sdx.stats.2") },
    { value: "100%", label: t("sdx.stats.3") },
    { value: "1", label: t("sdx.stats.4") },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="relative overflow-hidden bg-[#020617] text-white">
        <img
          src="/images/sabancidx-v1.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(2,6,23,0.90)_0%,rgba(15,23,42,0.55)_48%,rgba(2,6,23,0.78)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.18),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(148,163,184,0.10),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="section-shell relative z-10 py-18 md:py-22 lg:py-24">
          <div className="mx-auto max-w-[74rem]">
            <div className="grid gap-10 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] xl:items-start xl:gap-10">
              <div className="max-w-[48rem]">
                <div className="mt-1 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5" data-testid="card-sdx-brand-lockup">
                  <span className="section-kicker whitespace-nowrap text-slate-300" data-testid="text-sdx-badge">
                    {t("sdx.badge")}
                  </span>
                  <div className="inline-flex max-w-full items-center gap-4 rounded-[1.55rem] border border-white/10 bg-white/[0.045] px-4 py-3 shadow-[0_22px_60px_-34px_rgba(15,23,42,0.9)] backdrop-blur-md sm:px-5">
                    <div className="flex h-16 w-auto shrink-0 items-center justify-center rounded-[1rem] bg-white px-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_8px_24px_-16px_rgba(15,23,42,0.55)]">
                      <img
                        src="/images/sabancidx-logo.png"
                        alt="SabancıDx Logo"
                        className="h-9 w-auto object-contain"
                        data-testid="img-sdx-logo"
                      />
                    </div>
                    <div className="h-10 w-px shrink-0 bg-white/14" />
                    <div className="min-w-0 rounded-[0.9rem] bg-white/[0.02] px-1 py-1">
                      <img
                        src="/logo-globalvelo-dark.png"
                        alt="Globalvelo Logo"
                        className="h-10 w-auto max-w-[10.5rem] object-contain sm:h-11 sm:max-w-[12.5rem]"
                        data-testid="img-globalvelo-logo"
                      />
                    </div>
                  </div>
                </div>

                <h1 className="display-title mt-8 max-w-[44rem] text-white" data-testid="text-sdx-title">
                  {t("sdx.title")}
                </h1>
                <p className="body-lead mt-7 max-w-[40rem]" data-testid="text-sdx-description">
                  {t("sdx.desc")}
                </p>
              </div>

              <div className="glass-panel-dark rounded-[2rem] p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-white/10 text-blue-300">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400" data-testid="text-sdx-panel-kicker">
                      {t("sdx.panel.kicker")}
                    </p>
                    <h2 className="mt-1 text-2xl font-bold text-white" data-testid="text-sdx-panel-title">
                      {t("sdx.panel.title")}
                    </h2>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-300" data-testid="text-sdx-panel-description">
                  {t("sdx.panel.desc")}
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {stats.map((stat, index) => (
                    <div key={index} className="rounded-[1.3rem] border border-white/10 bg-white/5 px-5 py-4" data-testid={`card-sdx-stat-${index}`}>
                      <div className="text-3xl font-extrabold tracking-[-0.05em] text-white">{stat.value}</div>
                      <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider bg-white">
        <div className="section-shell">
          <div className="mx-auto max-w-[44rem] text-center">
            <span className="section-kicker text-secondary" data-testid="text-sdx-pillars-badge">
              {t("sdx.pillars.kicker")}
            </span>
            <h2 className="mt-4 text-[2.3rem] font-bold tracking-[-0.04em] text-slate-950 md:text-[3rem]" data-testid="text-sdx-pillars-title">
              {t("sdx.pillars.title")}
            </h2>
            <p className="mx-auto mt-5 max-w-[40rem] text-[1rem] leading-8 text-slate-600" data-testid="text-sdx-pillars-description">
              {t("sdx.pillars.desc")}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <div key={pillar.title} className="surface-panel rounded-[1.8rem] p-6" data-testid={`card-sdx-pillar-${index}`}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.15rem] border border-slate-200/80 bg-slate-100 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-[1.32rem] font-bold leading-tight text-slate-950">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-divider bg-slate-50">
        <div className="section-shell">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:gap-10">
            <div className="surface-panel rounded-[2rem] p-7 md:p-9">
              <span className="section-kicker text-secondary" data-testid="text-sdx-outcomes-badge">
                {t("sdx.outcomes.kicker")}
              </span>
              <h2 className="mt-4 text-[2.15rem] font-bold leading-tight tracking-[-0.04em] text-slate-950 md:text-[2.8rem]" data-testid="text-sdx-outcomes-title">
                {t("sdx.outcomes.title")}
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-slate-600" data-testid="text-sdx-outcomes-description">
                {t("sdx.outcomes.desc")}
              </p>
            </div>

            <div className="surface-panel rounded-[2rem] p-7 md:p-9">
              <div className="grid gap-4">
                {outcomes.map((item, index) => (
                  <div key={item} className="flex items-start gap-4 rounded-[1.35rem] border border-slate-200/70 bg-white/80 px-5 py-4" data-testid={`row-sdx-outcome-${index}`}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-primary">
                      <CheckIcon />
                    </div>
                    <div className="text-[1rem] leading-7 text-slate-700">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-[2rem] bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)] px-7 py-8 text-white shadow-[0_30px_90px_-40px_rgba(15,23,42,0.75)] md:px-10 md:py-10">
            <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto_auto]">
              <div>
                <p className="section-kicker text-slate-400" data-testid="text-sdx-cta-kicker">
                  {t("sdx.cta.kicker")}
                </p>
                <h2 className="mt-4 text-[2rem] font-bold tracking-[-0.04em] text-white md:text-[2.6rem]" data-testid="text-sdx-cta-title">
                  {t("sdx.cta.title")}
                </h2>
                <p className="mt-4 max-w-[44rem] text-[1rem] leading-8 text-slate-300" data-testid="text-sdx-cta-description">
                  {t("sdx.cta.desc")}
                </p>
              </div>
              <a href="https://www.sabancidx.com/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="px-8 text-base font-semibold" data-testid="button-sdx-primary">
                  {t("sdx.cta.btn")}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="border border-white/15 bg-white/[0.05] px-8 text-base text-white hover:border-white/24 hover:bg-white/[0.1] hover:text-white"
                data-testid="button-sdx-contact"
              >
                <a href="/#contact">{t("sdx.cta.secondary")}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.414l-7.2 7.2a1 1 0 01-1.414 0l-3.2-3.2a1 1 0 111.414-1.414l2.493 2.493 6.493-6.493a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}
