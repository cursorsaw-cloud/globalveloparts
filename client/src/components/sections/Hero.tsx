import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Globe2, ShieldCheck, Zap } from "lucide-react";
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
      ease: [0.22, 1, 0.36, 1],
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

  return (
    <section className="relative flex min-h-[calc(100vh-94px)] w-full items-center overflow-hidden bg-slate-950 md:min-h-[calc(100vh-102px)]">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Automotive Parts Background"
          className="h-full w-full object-cover opacity-35 mix-blend-luminosity"
          loading="eager"
          fetchPriority="high"
          data-testid="img-hero-background"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.24),transparent_28%),linear-gradient(105deg,rgba(2,6,23,0.97)_18%,rgba(2,6,23,0.88)_48%,rgba(2,6,23,0.52)_100%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-soft-light" />
      </div>

      <div className="pointer-events-none absolute left-[-10rem] top-12 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-[-8rem] right-[-4rem] h-[22rem] w-[22rem] rounded-full bg-secondary/25 blur-[150px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-50" />

      <div className="section-shell relative z-10 py-20 pb-28 md:py-24 md:pb-32 lg:py-28 lg:pb-36">
        <div className="max-w-[54rem]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass-panel-dark mb-8 inline-flex items-center gap-3 rounded-full px-4 py-2.5">
              <span className="flex h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_rgba(37,99,235,0.8)]" />
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-300" data-testid="text-hero-badge">
                {t("hero.badge")}
              </span>
            </div>

            <h1 className="max-w-[52rem] text-[3.35rem] font-extrabold leading-[0.96] tracking-[-0.055em] text-white sm:text-[4.35rem] md:text-[5rem] lg:text-[5.7rem]">
              {t("hero.title1")}
              <br />
              <span className="bg-gradient-to-r from-slate-100 via-white to-blue-300 bg-clip-text text-transparent">
                {t("hero.title2")}
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mt-8 max-w-[40rem] text-[1.08rem] font-light leading-8 text-slate-300 md:text-[1.22rem]" data-testid="text-hero-description">
              {t("hero.desc")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="mt-11 flex flex-col items-start gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="h-14 rounded-full px-8 text-base shadow-[0_20px_60px_-24px_rgba(37,99,235,0.75)]">
              <a href="/products" data-testid="button-hero-products">
                {t("hero.btn.products")}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-white/15 bg-white/5 px-8 text-base text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
            >
              <a href="/#contact" data-testid="button-hero-contact">
                {t("hero.btn.contact")}
                <ChevronRight className="h-5 w-5 text-slate-300" />
              </a>
            </Button>
          </motion.div>

          <div className="mt-18 grid max-w-[60rem] gap-4 sm:grid-cols-3 lg:gap-5">
            {trustItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  variants={statVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  className="glass-panel-dark rounded-[1.45rem] p-5 md:p-6"
                  data-testid={`card-hero-trust-${index}`}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-100">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
