import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Globe2,
  Route,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

const statVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.45 + index * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  const { t } = useLanguage();

  const trustItems = [
    { icon: Globe2, label: t("hero.trust.countries") },
    { icon: ShieldCheck, label: t("hero.trust.original") },
    { icon: Zap, label: t("hero.trust.fast") },
  ];

  const proofStats = [
    { value: "40+", label: t("feat.stat.1.label") },
    { value: "80+", label: t("feat.stat.2.label") },
    { value: "15k+", label: t("feat.stat.3.label") },
    { value: "%100", label: t("feat.stat.4.label") },
  ];

  const hubs = [
    { city: t("global.hub.1.city"), role: t("global.hub.1.role") },
    { city: t("global.hub.2.city"), role: t("global.hub.2.role") },
    { city: t("global.hub.3.city"), role: t("global.hub.3.role") },
  ];

  return (
    <section className="relative flex min-h-[calc(100vh-var(--nav-height-mobile))] w-full items-center overflow-hidden bg-slate-950 lg:min-h-[calc(100vh-var(--nav-height))]">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Automotive Parts Background"
          className="h-full w-full object-cover opacity-30 mix-blend-luminosity"
          loading="eager"
          fetchPriority="high"
          data-testid="img-hero-background"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.22),transparent_30%),linear-gradient(110deg,rgba(2,6,23,0.97)_16%,rgba(2,6,23,0.9)_46%,rgba(2,6,23,0.58)_100%)]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="pointer-events-none absolute left-[-10rem] top-10 h-[24rem] w-[24rem] rounded-full bg-primary/20 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-[-8rem] right-[-4rem] h-[22rem] w-[22rem] rounded-full bg-slate-400/20 blur-[150px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-50" />

      <div className="section-shell relative z-10 py-18 pb-24 md:py-22 md:pb-28 lg:py-24 lg:pb-32">
        <div className="grid items-end gap-12 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] xl:gap-10">
          <div className="max-w-[56rem]">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="glass-panel-dark mb-8 inline-flex items-center gap-3 rounded-full px-4 py-2.5">
                <span className="flex h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_rgba(37,99,235,0.8)]" />
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300" data-testid="text-hero-badge">
                  {t("hero.badge")}
                </span>
              </div>

              <h1 className="display-title max-w-[54rem] text-white" data-testid="text-hero-title">
                {t("hero.title1")}
                <br />
                <span className="bg-gradient-to-r from-slate-100 via-white to-slate-300 bg-clip-text text-transparent">
                  {t("hero.title2")}
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="body-lead mt-7" data-testid="text-hero-description">
                {t("hero.desc")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row"
            >
              <Button asChild size="lg" className="h-14 px-8 text-base shadow-[0_20px_60px_-24px_rgba(15,23,42,0.6)]" data-testid="button-hero-products">
                <a href="/products">
                  {t("hero.btn.products")}
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="h-14 rounded-full border border-white/14 bg-white/[0.05] px-8 text-base text-white backdrop-blur-sm hover:border-white/24 hover:bg-white/[0.1] hover:text-white"
                data-testid="button-hero-contact"
              >
                <a href="/#contact">
                  {t("hero.btn.contact")}
                  <ChevronRight className="h-5 w-5 text-slate-300 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>

            <div className="mt-14 grid max-w-[60rem] gap-4 sm:grid-cols-3 lg:gap-5">
              {trustItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    variants={statVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    className="glass-panel-dark rounded-[1.55rem] p-5 md:p-6"
                    data-testid={`card-hero-trust-${index}`}
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-100">
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel-dark relative overflow-hidden rounded-[2rem] p-6 sm:p-7 lg:p-8"
            data-testid="card-hero-proof-panel"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/20 blur-[100px]" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                <Building2 className="h-3.5 w-3.5" />
                <span data-testid="text-hero-proof-kicker">{t("nav.assurance")}</span>
              </div>

              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h2 className="max-w-sm text-[1.85rem] font-bold leading-tight text-white sm:text-[2.15rem]" data-testid="text-hero-proof-title">
                    {t("sdx.panel.title")}
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-7 text-slate-300" data-testid="text-hero-proof-description">
                    {t("sdx.panel.desc")}
                  </p>
                </div>
                <div className="hidden h-12 w-px bg-white/10 lg:block" />
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {proofStats.map((stat, index) => (
                  <div key={stat.label} className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4" data-testid={`card-hero-proof-stat-${index}`}>
                    <div className="text-[1.95rem] font-bold tracking-[-0.05em] text-white">{stat.value}</div>
                    <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-[1.6rem] border border-white/10 bg-slate-950/35 p-5">
                <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  <Route className="h-4 w-4" />
                  <span data-testid="text-hero-proof-network-label">{t("global.badge")}</span>
                </div>
                <div className="space-y-3">
                  {hubs.map((hub, index) => (
                    <div key={hub.city} className="flex items-center justify-between gap-4 rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3" data-testid={`row-hero-proof-hub-${index}`}>
                      <span className="text-sm font-semibold text-white">{hub.city}</span>
                      <span className="text-xs uppercase tracking-[0.16em] text-slate-400">{hub.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
