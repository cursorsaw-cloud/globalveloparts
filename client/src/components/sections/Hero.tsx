import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Map,
  ShieldCheck,
  Truck,
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
  const { t, language } = useLanguage();

  const trustItems = [
    { icon: Map, label: t("home.trust.1") },
    { icon: ShieldCheck, label: t("home.trust.2") },
    { icon: Truck, label: t("home.trust.3") },
  ];

  const compactProofTitle = {
    tr: "Dijital Operasyon Altyapısı",
    en: "Digital Operations Infrastructure",
    es: "Infraestructura de operaciones digitales",
    ar: "البنية التحتية للعمليات الرقمية",
    ru: "Инфраструктура цифровых операций",
    fr: "Infrastructure des opérations digitales",
  };

  const compactProofDescription = {
    tr: "Sipariş yönetimi, stok takibi, raporlama ve ticari süreçleri destekleyen teknoloji odaklı B2B altyapımızla operasyonel verimliliği artırıyoruz.",
    en: "We raise operational efficiency with a technology-driven B2B infrastructure that supports order management, stock tracking, reporting and commercial processes.",
    es: "Aumentamos la eficiencia operativa con una infraestructura B2B de base tecnológica que respalda la gestión de pedidos, el seguimiento del stock, los reportes y los procesos comerciales.",
    ar: "نرفع الكفاءة التشغيلية عبر بنية تحتية للتجارة بين الشركات (B2B) قائمة على التكنولوجيا، تدعم إدارة الطلبات وتتبع المخزون وإعداد التقارير والعمليات التجارية.",
    ru: "Мы повышаем операционную эффективность за счёт технологической B2B-инфраструктуры, которая поддерживает управление заказами, учёт остатков, отчётность и коммерческие процессы.",
    fr: "Nous améliorons l’efficacité opérationnelle grâce à une infrastructure B2B axée sur la technologie, qui prend en charge la gestion des commandes, le suivi des stocks, le reporting et les processus commerciaux.",
  };

  const compactProofStats = {
    tr: [
      { value: "80+", label: "Marka İlişkisi" },
      { value: "%100", label: "Ürün Odaklı Kalite" },
      { value: "Türkiye Geneli", label: "Tedarik" },
      { value: "B2B", label: "Dijital Altyapı" },
    ],
    en: [
      { value: "80+", label: "Brand Relations" },
      { value: "100%", label: "Product-Focused Quality" },
      { value: "Nationwide", label: "Supply" },
      { value: "B2B", label: "Digital Infrastructure" },
    ],
    es: [
      { value: "80+", label: "Relaciones de marca" },
      { value: "100 %", label: "Calidad centrada en el producto" },
      { value: "Todo el país", label: "Suministro" },
      { value: "B2B", label: "Infraestructura digital" },
    ],
    ar: [
      { value: "+80", label: "علاقات العلامات التجارية" },
      { value: "%100", label: "جودة مركّزة على المنتج" },
      { value: "على مستوى البلاد", label: "التوريد" },
      { value: "B2B", label: "بنية رقمية" },
    ],
    ru: [
      { value: "80+", label: "Отношения с брендами" },
      { value: "100%", label: "Качество в фокусе продукта" },
      { value: "Вся страна", label: "Поставки" },
      { value: "B2B", label: "Цифровая инфраструктура" },
    ],
    fr: [
      { value: "80+", label: "Relations marques" },
      { value: "100%", label: "Qualité centrée produit" },
      { value: "Échelle nationale", label: "Approvisionnement" },
      { value: "B2B", label: "Infrastructure digitale" },
    ],
  };

  const hubs = [t("global.hub.1.city"), t("global.hub.2.city"), t("global.hub.3.city")];
  const proofStats = compactProofStats[language].map((stat) => ({
    ...stat,
    compact: !/^[\d+/.:%\s]+$/.test(stat.value),
  }));

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
                <a href="/#contact">
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
                <a href="/products">
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
            className="glass-panel-dark relative overflow-hidden rounded-[2rem] p-5 sm:p-6 lg:p-7"
            data-testid="card-hero-proof-panel"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/20 blur-[90px]" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                <Building2 className="h-3.5 w-3.5" />
                <span data-testid="text-hero-proof-kicker">{t("home.tech.kicker")}</span>
              </div>

              <div className="mt-4">
                <h2 className="max-w-sm text-[1.45rem] font-bold leading-tight text-white sm:text-[1.7rem]" data-testid="text-hero-proof-title">
                  {compactProofTitle[language]}
                </h2>
                <p className="mt-2 max-w-md text-sm leading-6 text-slate-300" data-testid="text-hero-proof-description">
                  {compactProofDescription[language]}
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {proofStats.map((stat, index) => (
                  <div key={stat.label} className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-3.5" data-testid={`card-hero-proof-stat-${index}`}>
                    <div className={stat.compact ? "text-[1.1rem] font-bold leading-tight tracking-[-0.03em] text-white" : "text-[1.7rem] font-bold tracking-[-0.05em] text-white"}>{stat.value}</div>
                    <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {hubs.map((hub, index) => (
                  <div
                    key={hub}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300"
                    data-testid={`row-hero-proof-hub-${index}`}
                  >
                    {hub}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
