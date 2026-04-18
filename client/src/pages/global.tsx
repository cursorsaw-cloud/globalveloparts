import { ArrowRight, Boxes, Building2, MapPin, Plane, Ship, Truck } from "lucide-react";
import logisticsBannerBg from "@assets/global-logistics-banner.png";
import worldMapNetworkBg from "@assets/image_1775746724311.png";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export default function GlobalNetworkPage() {
  const { t } = useLanguage();

  const hubs = [
    { city: t("global.hub.1.city"), role: t("global.hub.1.role") },
    { city: t("global.hub.2.city"), role: t("global.hub.2.role") },
    { city: t("global.hub.3.city"), role: t("global.hub.3.role") },
    { city: t("global.hub.4.city"), role: t("global.hub.4.role") },
  ];

  const flow = [
    { icon: Boxes, title: t("global.flow.1.title"), desc: t("global.flow.1.desc") },
    { icon: Ship, title: t("global.flow.2.title"), desc: t("global.flow.2.desc") },
    { icon: Truck, title: t("global.flow.3.title"), desc: t("global.flow.3.desc") },
  ];

  const stats = [
    { value: "40+", label: t("global.stats.1") },
    { value: "80+", label: t("global.stats.2") },
    { value: "4", label: t("global.stats.3") },
    { value: "24/7", label: t("global.stats.4") },
  ];

  const regions = [t("global.eu"), t("global.me"), t("global.asia"), t("global.africa")];

  const pins = [
    { label: t("global.hub.1.city"), pct: "18%" },
    { label: t("global.hub.3.city"), pct: "42%" },
    { label: t("global.hub.4.city"), pct: "63%" },
    { label: t("global.hub.2.city"), pct: "82%" },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">

      {/* ── HERO ─ dark navy theme ───────────────────────────── */}
      <section className="relative overflow-hidden bg-[#080f1e]">
        {/* World-map faint overlay */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src={worldMapNetworkBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.07]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(15,180,220,0.10),transparent_50%)]" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080f1e] to-transparent" />
        </div>

        <div className="section-shell relative z-10 py-20 md:py-24 lg:py-28">
          <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.88fr)] xl:gap-12">

            {/* Left — text */}
            <div>
              <span
                className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-400"
                data-testid="text-global-badge"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                {t("global.badge")}
              </span>

              <h1
                className="mt-6 text-[clamp(2.8rem,5vw,5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-white"
                data-testid="text-global-title"
              >
                {t("global.title")}
              </h1>

              <p
                className="mt-6 max-w-[42rem] text-[1.05rem] leading-8 text-slate-400"
                data-testid="text-global-description"
              >
                {t("global.desc")}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.3rem] border border-white/8 bg-white/[0.04] px-5 py-5 backdrop-blur-sm"
                    data-testid={`card-global-stat-${index}`}
                  >
                    <div className="text-[2rem] font-extrabold tracking-[-0.05em] text-white">{stat.value}</div>
                    <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — hub panel */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(160deg,#0f1f3d_0%,#0d1a2e_100%)] p-7 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.8)] md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_60%)]" />
              <div className="absolute left-8 top-8 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_0_8px_rgba(96,165,250,0.12)]" />
              <div className="absolute right-10 top-20 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_0_8px_rgba(103,232,249,0.10)]" />
              <div className="absolute bottom-14 left-14 h-2 w-2 rounded-full bg-slate-300 shadow-[0_0_0_8px_rgba(226,232,240,0.10)]" />
              <div className="absolute bottom-8 right-8 h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_0_8px_rgba(96,165,250,0.10)]" />

              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[0.9rem] bg-blue-500/15 text-blue-400 ring-1 ring-blue-500/20">
                    <Plane className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400" data-testid="text-global-panel-kicker">
                      {t("global.panel.kicker")}
                    </p>
                    <h2 className="mt-0.5 text-xl font-bold text-white" data-testid="text-global-panel-title">
                      {t("global.panel.title")}
                    </h2>
                  </div>
                </div>

                <p className="max-w-md text-sm leading-7 text-slate-400" data-testid="text-global-panel-description">
                  {t("global.panel.desc")}
                </p>

                <div className="mt-7 grid gap-2.5">
                  {hubs.map((hub, index) => (
                    <div
                      key={hub.city}
                      className="flex items-center gap-4 rounded-[1.1rem] border border-white/[0.07] bg-white/[0.03] px-5 py-3.5"
                      data-testid={`card-global-hub-${index}`}
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                        <MapPin className="h-3.5 w-3.5 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500">{hub.role}</div>
                        <div className="mt-0.5 text-[0.95rem] font-bold text-white">{hub.city}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CİNEMATİK LOJİSTİK BANNER ───────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: "clamp(320px, 42vw, 560px)" }} data-testid="section-global-logistics-banner">
        {/* Main image — full opacity, cinematic */}
        <img
          src={logisticsBannerBg}
          alt="Global logistics network — ships, trucks, aircraft"
          className="absolute inset-0 h-full w-full object-cover object-center"
          data-testid="img-global-page-network-background"
        />

        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,15,30,0.55)_0%,rgba(8,15,30,0.10)_40%,rgba(8,15,30,0.10)_60%,rgba(8,15,30,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,15,30,0.60)_0%,transparent_35%,transparent_65%,rgba(8,15,30,0.60)_100%)]" />

        {/* Center badge */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center pt-8">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/30 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md">
            <Ship className="h-3.5 w-3.5 text-cyan-300" />
            <span>{t("global.flow.kicker")}</span>
            <Plane className="h-3.5 w-3.5 text-blue-300" />
          </div>
        </div>

        {/* Transport mode icons strip — center */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center gap-8 px-6 md:gap-14">
          {[Ship, Truck, Plane].map((Icon, i) => (
            <div
              key={i}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white/80 shadow-lg backdrop-blur-md md:h-16 md:w-16"
            >
              <Icon className="h-6 w-6 md:h-7 md:w-7" />
            </div>
          ))}
        </div>

        {/* Location pins row at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-28">
          {pins.map((pin, i) => (
            <div
              key={pin.label}
              className="absolute bottom-6 flex -translate-x-1/2 flex-col items-center gap-1"
              style={{ left: pin.pct }}
            >
              <span className="rounded-full border border-white/20 bg-black/40 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-white/90 backdrop-blur-sm">
                {pin.label}
              </span>
              <MapPin className="h-5 w-5 text-red-500 drop-shadow-[0_2px_6px_rgba(239,68,68,0.7)]" fill="#ef4444" />
            </div>
          ))}
        </div>
      </section>

      {/* ── TEDARIK AKIŞI ────────────────────────────────────── */}
      <section className="section-divider bg-white">
        <div className="section-shell">
          <div className="mx-auto max-w-[44rem] text-center">
            <span className="section-kicker text-secondary" data-testid="text-global-flow-badge">
              {t("global.flow.kicker")}
            </span>
            <h2
              className="mt-4 text-[2.3rem] font-bold tracking-[-0.04em] text-slate-950 md:text-[3rem]"
              data-testid="text-global-flow-title"
            >
              {t("global.flow.title")}
            </h2>
            <p
              className="mx-auto mt-5 max-w-[40rem] text-[1rem] leading-8 text-slate-600"
              data-testid="text-global-flow-description"
            >
              {t("global.flow.desc")}
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {flow.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="surface-panel rounded-[1.85rem] p-7" data-testid={`card-global-flow-${index}`}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.15rem] border border-slate-200/80 bg-slate-100 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-[1.4rem] font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BÖLGELER + CTA ───────────────────────────────────── */}
      <section className="section-divider bg-slate-50">
        <div className="section-shell">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:gap-10">
            <div className="surface-panel rounded-[2rem] p-7 md:p-9">
              <span className="section-kicker text-secondary" data-testid="text-global-region-badge">
                {t("global.region.kicker")}
              </span>
              <h2
                className="mt-4 text-[2.15rem] font-bold leading-tight tracking-[-0.04em] text-slate-950 md:text-[2.8rem]"
                data-testid="text-global-region-title"
              >
                {t("global.region.title")}
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-slate-600" data-testid="text-global-region-description">
                {t("global.region.desc")}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {regions.map((item, index) => (
                <div key={item} className="surface-panel rounded-[1.7rem] px-6 py-6" data-testid={`card-global-region-${index}`}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-primary">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div className="text-[1rem] font-semibold leading-7 text-slate-800">{item}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-[2rem] bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)] px-7 py-8 text-white shadow-[0_30px_90px_-40px_rgba(15,23,42,0.75)] md:px-10 md:py-10">
            <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto_auto]">
              <div>
                <p className="section-kicker text-slate-400" data-testid="text-global-cta-kicker">
                  {t("global.cta.kicker")}
                </p>
                <h2
                  className="mt-4 text-[2rem] font-bold tracking-[-0.04em] text-white md:text-[2.6rem]"
                  data-testid="text-global-cta-title"
                >
                  {t("global.cta.title")}
                </h2>
                <p className="mt-4 max-w-[44rem] text-[1rem] leading-8 text-slate-300" data-testid="text-global-cta-description">
                  {t("global.cta.desc")}
                </p>
              </div>
              <Button asChild size="lg" className="px-8 text-base" data-testid="button-global-products">
                <a href="/products">
                  {t("global.cta.primary")}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="border border-white/15 bg-white/[0.05] px-8 text-base text-white hover:border-white/24 hover:bg-white/[0.1] hover:text-white"
                data-testid="button-global-contact"
              >
                <a href="/#contact">{t("global.cta.secondary")}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
