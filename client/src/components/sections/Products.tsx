import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

const categories = [
  {
    key: "brakes",
    title: { tr: "Fren Sistemi", en: "Brake Systems" },
    desc: {
      tr: "Balata, disk, kaliper ve hidrolik çözümlerinde premium tedarik ağı.",
      en: "Premium supply network for pads, discs, calipers and hydraulic solutions.",
    },
    image: "/images/categories/brake-system.jpg",
  },
  {
    key: "filters",
    title: { tr: "Filtreler", en: "Filters" },
    desc: {
      tr: "Yağ, hava, polen ve yakıt filtrelerinde yüksek stok sürekliliği.",
      en: "High stock continuity across oil, air, cabin and fuel filters.",
    },
    image: "/images/categories/filters.jpg",
  },
  {
    key: "engine",
    title: { tr: "Motor Parçaları", en: "Engine Parts" },
    desc: {
      tr: "Zamanlama, conta, piston ve pompa gruplarında OEM odaklı seçim.",
      en: "OEM-focused selection for timing, gasket, piston and pump groups.",
    },
    image: "/images/categories/engine-parts.jpg",
  },
  {
    key: "suspension",
    title: { tr: "Süspansiyon & Sönümleme", en: "Suspension & Damping" },
    desc: {
      tr: "Amortisör, yay ve rulman gruplarında güvenilir markalar.",
      en: "Reliable brands for shock absorbers, springs and bearing groups.",
    },
    image: "/images/categories/suspension.jpg",
  },
  {
    key: "belt",
    title: { tr: "Kayış & Zincir", en: "Belts & Chains" },
    desc: {
      tr: "Triger setleri ve gergi çözümleri için güçlü ürün çeşitliliği.",
      en: "Strong assortment for timing kits and tensioning solutions.",
    },
    image: "/images/categories/belt-chain.jpg",
  },
  {
    key: "electrical",
    title: { tr: "Elektrik & Aydınlatma", en: "Electrical & Lighting" },
    desc: {
      tr: "Far, akü, ateşleme ve elektrik gruplarında hızlı temin.",
      en: "Fast sourcing across lighting, batteries, ignition and electrical groups.",
    },
    image: "/images/categories/electrical-lighting.jpg",
  },
  {
    key: "cooling",
    title: { tr: "Soğutma & Isıtma", en: "Cooling & Heating" },
    desc: {
      tr: "Radyatör, termostat ve pompa gruplarında global tedarik.",
      en: "Global sourcing for radiators, thermostats and pump assemblies.",
    },
    image: "/images/categories/cooling-heating.jpg",
  },
  {
    key: "clutch",
    title: { tr: "Debriyaj & Aktarma", en: "Clutch & Drivetrain" },
    desc: {
      tr: "Debriyaj seti, volan ve şanzıman parçalarında uzman portföy.",
      en: "Specialist portfolio for clutch kits, flywheels and transmission parts.",
    },
    image: "/images/categories/clutch-drivetrain.jpg",
  },
];

export function Products() {
  const { language, t } = useLanguage();

  return (
    <section id="products" className="section-divider relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_32%,#eef2f7_100%)]">
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/8 blur-[130px]" />
      <div className="section-shell relative z-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="section-heading">
            <span className="section-kicker text-secondary" data-testid="text-products-badge">
              {t("prod.badge")}
            </span>
            <h2 className="section-title" data-testid="text-products-title">
              {t("prod.title")}
            </h2>
            <p className="section-copy" data-testid="text-products-description">
              {t("prod.desc")}
            </p>
          </div>

          <Button asChild variant="outline" size="lg" className="h-12 rounded-full border-slate-300 bg-white/90 px-6 shadow-sm">
            <a href="/products" data-testid="button-products-catalog">
              {t("prod.viewAll")}
            </a>
          </Button>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {categories.map((category) => (
            <a
              key={category.key}
              href="/products"
              className="group relative overflow-hidden rounded-[1.9rem] border border-white/65 bg-slate-900 shadow-[0_34px_90px_-50px_rgba(15,23,42,0.62)]"
              data-testid={`card-home-category-${category.key}`}
            >
              <div className="aspect-[4/4.7] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title[language]}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  data-testid={`img-home-category-${category.key}`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/42 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200">
                  Globalvelo
                </div>
                <h3 className="text-[1.72rem] font-bold leading-tight text-white">{category.title[language]}</h3>
                <p className="mt-3 max-w-xs text-[0.95rem] leading-6 text-slate-300">{category.desc[language]}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
