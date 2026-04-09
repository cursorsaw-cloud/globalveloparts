import {
  ArrowRight,
  BadgeCheck,
  Cpu,
  Filter,
  Fuel,
  Link2,
  MoveVertical,
  Settings,
  Settings2,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "wouter";
import neoveloLogo from "@assets/image_1775560940186.png";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export default function NeoVeloPartsPage() {
  const { t } = useLanguage();

  const metrics = [
    { value: "01", label: t("neovelo.metrics.1") },
    { value: "04", label: t("neovelo.metrics.2") },
    { value: "OEM", label: t("neovelo.metrics.3") },
    { value: "24/7", label: t("neovelo.metrics.4") },
  ];

  const ranges = [
    {
      icon: ShieldCheck,
      title: t("neovelo.range.1"),
      description: t("neovelo.range.desc.1"),
      image: "/images/neovelo/categories/brake-systems.png",
    },
    {
      icon: Filter,
      title: t("neovelo.range.2"),
      description: t("neovelo.range.desc.2"),
      image: "/images/neovelo/categories/filters.png",
    },
    {
      icon: Settings,
      title: t("neovelo.range.3"),
      description: t("neovelo.range.desc.3"),
      image: "/images/neovelo/categories/engine-parts.png",
    },
    {
      icon: MoveVertical,
      title: t("neovelo.range.4"),
      description: t("neovelo.range.desc.4"),
      image: "/images/neovelo/categories/suspension-damping.png",
    },
    {
      icon: Link2,
      title: t("neovelo.range.5"),
      description: t("neovelo.range.desc.5"),
      image: "/images/neovelo/categories/belts-chains.png",
    },
    {
      icon: Zap,
      title: t("neovelo.range.6"),
      description: t("neovelo.range.desc.6"),
      image: "/images/neovelo/categories/electrical-lighting.png",
    },
    {
      icon: Snowflake,
      title: t("neovelo.range.7"),
      description: t("neovelo.range.desc.7"),
      image: "/images/neovelo/categories/cooling-heating.png",
    },
    {
      icon: Settings2,
      title: t("neovelo.range.8"),
      description: t("neovelo.range.desc.8"),
      image: "/images/neovelo/categories/clutch-drivetrain.png",
    },
    {
      icon: Fuel,
      title: t("neovelo.range.9"),
      description: t("neovelo.range.desc.9"),
      image: "/images/neovelo/categories/exhaust-fuel.png",
    },
  ];

  const advantages = [
    t("neovelo.advantages.1"),
    t("neovelo.advantages.2"),
    t("neovelo.advantages.3"),
    t("neovelo.advantages.4"),
    t("neovelo.advantages.5"),
  ];

  const digitalPoints = [
    t("neovelo.digital.1"),
    t("neovelo.digital.2"),
    t("neovelo.digital.3"),
    t("neovelo.digital.4"),
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#020617_0%,#0f172a_48%,#1e3a1d_100%)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,230,53,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.18),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="section-shell relative z-10 py-18 md:py-22 lg:py-24">
          <div className="grid items-center gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] xl:gap-10">
            <div className="max-w-[48rem]">
              <span className="section-kicker text-slate-300" data-testid="text-neovelo-badge">
                {t("neovelo.badge")}
              </span>
              <h1 className="display-title mt-5 text-white" data-testid="text-neovelo-title">
                {t("neovelo.title")}
              </h1>
              <p className="body-lead mt-7 max-w-[42rem]" data-testid="text-neovelo-description">
                {t("neovelo.desc")}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className="flex min-h-[8.25rem] flex-col rounded-[1.45rem] border border-white/10 bg-white/[0.05] px-5 py-5 backdrop-blur-sm"
                    data-testid={`card-neovelo-metric-${index}`}
                  >
                    <div className="text-[2rem] font-extrabold tracking-[-0.05em] text-white">{metric.value}</div>
                    <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="px-8 text-base" data-testid="button-neovelo-products">
                  <Link href="/products">
                    {t("neovelo.cta.primary")}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="border border-white/15 bg-white/[0.05] px-8 text-base text-white hover:border-white/24 hover:bg-white/[0.1] hover:text-white"
                  data-testid="button-neovelo-contact"
                >
                  <a href="/#contact">{t("neovelo.cta.secondary")}</a>
                </Button>
              </div>
            </div>

            <div className="glass-panel-dark rounded-[2rem] p-4 md:p-5">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(241,245,249,0.94)_100%)] px-6 py-8 shadow-[0_30px_90px_-50px_rgba(255,255,255,0.35)] md:px-8 md:py-10">
                <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(132,204,22,0.75),transparent)]" />
                <div className="rounded-[1.4rem] border border-slate-200/80 bg-white/90 p-4 shadow-[0_28px_70px_-48px_rgba(15,23,42,0.4)] backdrop-blur-sm md:p-5">
                  <img
                    src={neoveloLogo}
                    alt="NeoVelo Spare Parts logo"
                    className="w-full object-contain"
                    loading="eager"
                    decoding="async"
                    data-testid="img-neovelo-logo"
                  />
                </div>
              </div>
              <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-white/10 text-primary">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400" data-testid="text-neovelo-panel-kicker">
                      {t("neovelo.panel.kicker")}
                    </p>
                    <h2 className="mt-1 text-2xl font-bold text-white" data-testid="text-neovelo-panel-title">
                      {t("neovelo.panel.title")}
                    </h2>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300" data-testid="text-neovelo-panel-description">
                  {t("neovelo.panel.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider bg-white">
        <div className="section-shell">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:gap-10">
            <div className="surface-panel rounded-[2rem] p-7 md:p-9">
              <span className="section-kicker text-secondary" data-testid="text-neovelo-story-kicker">
                {t("neovelo.story.kicker")}
              </span>
              <h2 className="mt-4 text-[2.2rem] font-bold leading-tight tracking-[-0.04em] text-slate-950 md:text-[2.8rem]" data-testid="text-neovelo-story-title">
                {t("neovelo.story.title")}
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-slate-600" data-testid="text-neovelo-story-body-1">
                {t("neovelo.story.body1")}
              </p>
              <p className="mt-4 text-[1rem] leading-8 text-slate-600" data-testid="text-neovelo-story-body-2">
                {t("neovelo.story.body2")}
              </p>
              <p className="mt-4 text-[1rem] leading-8 text-slate-600" data-testid="text-neovelo-story-body-3">
                {t("neovelo.story.body3")}
              </p>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)] p-7 shadow-[0_30px_80px_-55px_rgba(15,23,42,0.35)] md:p-8">
                <p className="section-kicker text-secondary" data-testid="text-neovelo-range-kicker">
                  {t("neovelo.range.kicker")}
                </p>
                <h3 className="mt-4 text-[1.8rem] font-bold tracking-[-0.04em] text-slate-950" data-testid="text-neovelo-range-title">
                  {t("neovelo.range.title")}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600" data-testid="text-neovelo-range-description">
                  {t("neovelo.range.desc")}
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-[0_36px_90px_-50px_rgba(15,23,42,0.85)] md:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[0.95rem] bg-white/10 text-primary">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400" data-testid="text-neovelo-positioning-kicker">
                    NeoVelo
                  </p>
                </div>
                <p className="mt-4 text-lg leading-8 text-slate-200" data-testid="text-neovelo-positioning-description">
                  {t("neovelo.panel.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider bg-slate-50">
        <div className="section-shell">
          <div className="mx-auto max-w-[46rem] text-center">
            <span className="section-kicker text-secondary" data-testid="text-neovelo-capabilities-badge">
              {t("neovelo.range.kicker")}
            </span>
            <h2 className="mt-4 text-[2.3rem] font-bold tracking-[-0.04em] text-slate-950 md:text-[3rem]" data-testid="text-neovelo-capabilities-title">
              {t("neovelo.range.title")}
            </h2>
            <p className="mx-auto mt-5 max-w-[42rem] text-[1rem] leading-8 text-slate-600" data-testid="text-neovelo-capabilities-description">
              {t("neovelo.range.desc")}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {ranges.map((range) => {
              const Icon = range.icon;

              return (
                <div
                  key={range.title}
                  className="group relative min-h-[20rem] overflow-hidden rounded-[1.85rem] border border-slate-200/90 bg-slate-950 shadow-[0_28px_90px_-48px_rgba(15,23,42,0.5)]"
                  data-testid={`card-neovelo-range-${range.title}`}
                >
                  <img
                    src={range.image}
                    alt={range.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    loading="lazy"
                    decoding="async"
                    data-testid={`img-neovelo-range-${range.title}`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.48)_46%,rgba(2,6,23,0.92)_100%)]" />
                  <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_70%)] opacity-70" />

                  <div className="relative z-10 flex h-full flex-col justify-between p-5 text-white">
                    <div>
                      <span className="inline-flex rounded-full border border-white/16 bg-black/20 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm" data-testid={`text-neovelo-range-badge-${range.title}`}>
                        NeoVelo Parts
                      </span>
                    </div>

                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-white/14 bg-white/10 text-white shadow-[0_14px_34px_-24px_rgba(15,23,42,0.9)] backdrop-blur-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 max-w-[14rem] text-[1.55rem] font-bold leading-[1.05] tracking-[-0.04em] text-white">
                        {range.title}
                      </h3>
                      <p className="mt-3 max-w-[16rem] text-sm leading-6 text-slate-200/92" data-testid={`text-neovelo-range-description-${range.title}`}>
                        {range.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-divider bg-white">
        <div className="section-shell">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:gap-10">
            <div className="rounded-[2rem] bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)] p-7 text-white shadow-[0_30px_90px_-40px_rgba(15,23,42,0.75)] md:p-9">
              <p className="section-kicker text-slate-400" data-testid="text-neovelo-advantages-kicker">
                {t("neovelo.advantages.kicker")}
              </p>
              <h2 className="mt-4 text-[2rem] font-bold tracking-[-0.04em] text-white md:text-[2.6rem]" data-testid="text-neovelo-advantages-title">
                {t("neovelo.advantages.title")}
              </h2>
              <p className="mt-4 text-[1rem] leading-8 text-slate-300" data-testid="text-neovelo-advantages-description">
                {t("neovelo.advantages.desc")}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
              {advantages.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-[1.6rem] border border-slate-200 bg-white px-5 py-5 shadow-[0_28px_70px_-55px_rgba(15,23,42,0.4)]"
                  data-testid={`card-neovelo-advantage-${index + 1}`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <p className="pt-1 text-sm font-medium leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider bg-slate-50">
        <div className="section-shell">
          <div className="grid items-center gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:gap-12">
            <div>
              <span className="section-kicker text-secondary" data-testid="text-neovelo-digital-kicker">
                {t("neovelo.digital.kicker")}
              </span>
              <h2 className="mt-4 text-[2.2rem] font-bold leading-tight tracking-[-0.04em] text-slate-950 md:text-[2.8rem]" data-testid="text-neovelo-digital-title">
                {t("neovelo.digital.title")}
              </h2>
              <p className="mt-5 max-w-[42rem] text-[1rem] leading-8 text-slate-600" data-testid="text-neovelo-digital-description">
                {t("neovelo.digital.desc")}
              </p>
            </div>

            <div className="surface-panel rounded-[2rem] p-7 md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-primary/10 text-primary">
                  <Cpu className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400" data-testid="text-neovelo-digital-panel-kicker">
                    {t("neovelo.digital.panel.kicker")}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-slate-950" data-testid="text-neovelo-digital-panel-title">
                    {t("neovelo.digital.panel.title")}
                  </h3>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {digitalPoints.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-slate-200 bg-slate-50 px-4 py-4"
                    data-testid={`card-neovelo-digital-${index + 1}`}
                  >
                    <p className="text-sm font-medium leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-[2rem] bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)] px-7 py-8 text-white shadow-[0_30px_90px_-40px_rgba(15,23,42,0.75)] md:px-10 md:py-10">
            <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto]">
              <div>
                <p className="section-kicker text-slate-400" data-testid="text-neovelo-cta-kicker">
                  {t("neovelo.cta.kicker")}
                </p>
                <h2 className="mt-4 text-[2rem] font-bold tracking-[-0.04em] text-white md:text-[2.6rem]" data-testid="text-neovelo-cta-title">
                  {t("neovelo.cta.title")}
                </h2>
                <p className="mt-4 max-w-[46rem] text-[1rem] leading-8 text-slate-300" data-testid="text-neovelo-cta-description">
                  {t("neovelo.cta.desc")}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="px-8 text-base font-semibold" data-testid="button-neovelo-cta-products">
                  <Link href="/products">
                    {t("neovelo.cta.primary")}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="px-8 text-base font-semibold" data-testid="button-neovelo-cta-contact">
                  <a href="/#contact">{t("neovelo.cta.secondary")}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
