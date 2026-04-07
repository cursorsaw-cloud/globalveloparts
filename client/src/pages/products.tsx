import { useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CircleDot,
  Filter,
  Fuel,
  LayoutGrid,
  Layers,
  Link2,
  MoveVertical,
  Settings,
  Settings2,
  Snowflake,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

const getBrandDomain = (brandName: string) => {
  const domainMap: Record<string, string> = {
    Brembo: "brembo.com",
    Textar: "textar.com",
    Ferodo: "ferodo.com",
    Bosch: "boschaftermarket.com",
    TRW: "trwaftermarket.com",
    ATE: "ate-aftermarket.com",
    Delphi: "delphiautoparts.com",
    Jurid: "jurid.com",
    Zimmermann: "ottoszimmermann.de",
    Budweg: "budweg.com",
    Frenkit: "frenkit.es",
    Autofren: "seinsa.es",
    Mann: "mann-filter.com",
    Mahle: "mahle-aftermarket.com",
    Hengst: "hengst.com",
    Filtron: "filtron.eu",
    Purflux: "purflux.com",
    "K&N": "knfilters.com",
    Pipercross: "pipercross.net",
    Castrol: "castrol.com",
    Mobil: "mobil.com",
    "Liqui Moly": "liqui-moly.com",
    Motul: "motul.com",
    "Victor Reinz": "victorreinz.com",
    Elring: "elring.com",
    Ajusa: "ajusa.es",
    INA: "repxpert.com.tr",
    FAG: "repxpert.com.tr",
    LuK: "repxpert.com.tr",
    Vitesco: "repxpert.com.tr",
    Gates: "gates.com",
    Dayco: "daycoaftermarket.com",
    SKF: "skf.com",
    Kolbenschmidt: "ms-motorservice.com",
    Pierburg: "ms-motorservice.com",
    Febi: "febi.com",
    Lemförder: "aftermarket.zf.com",
    Sachs: "aftermarket.zf.com",
    ZF: "aftermarket.zf.com",
    SNR: "ntn-snr.com",
    Meyle: "meyle.com",
    Bilstein: "bilstein.com",
    KYB: "kyb-europe.com",
    Monroe: "monroe.com",
    Eibach: "eibach.com",
    Lesjöfors: "lesjoforssprings.com",
    Valeo: "valeoservice.com",
    Hella: "hella.com",
    "Magneti Marelli": "magnetimarelli-parts-and-services.com",
    NGK: "ngkntk.com",
    Denso: "denso-am.eu",
    Beru: "beruparts.com",
    Nissens: "nissens.com",
    Hepu: "hepu.de",
    Wahler: "borgwarner.com",
    BorgWarner: "borgwarner.com",
    Varta: "varta-automotive.com",
    Exide: "exidegroup.com",
    Contitech: "continental-engineparts.com",
    Garrett: "garrettmotion.com",
    Bosal: "bosal.com",
    Walker: "walker-exhaust.eu",
    GKN: "gknautomotive.com",
  };

  return domainMap[brandName];
};

const getBrandLogo = (brandName: string) => {
  if (brandName === "LuK") return "https://www.repxpert.com.tr/assets/images/brands/luk-logo.svg";
  if (brandName === "INA") return "https://www.repxpert.com.tr/assets/images/brands/ina-logo.svg";
  if (brandName === "FAG") return "https://www.repxpert.com.tr/assets/images/brands/fag-logo.svg";
  if (brandName === "Vitesco") return "https://www.repxpert.com.tr/assets/images/brands/vitesco-logo.svg";

  const domain = getBrandDomain(brandName);
  if (domain && domain !== "repxpert.com.tr") {
    return `https://logo.clearbit.com/${domain}?size=800`;
  }

  return `https://ui-avatars.com/api/?name=${encodeURIComponent(brandName)}&background=f8fafc&color=0f172a&font-size=0.33&size=800`;
};

const categories = [
  {
    id: "fren",
    icon: CircleDot,
    image: "/images/categories/brake-system.jpg",
    name: { tr: "Fren Sistemi", en: "Brake Systems" },
    subCategories: {
      tr: ["Balata", "Disk", "Kaliper", "Hidrolik", "ABS", "Hortum"],
      en: ["Pads", "Discs", "Calipers", "Hydraulics", "ABS", "Hoses"],
    },
    brands: ["Brembo", "Textar", "Ferodo", "Bosch", "TRW", "ATE", "Delphi", "Jurid", "Zimmermann", "Budweg", "Castrol", "Liqui Moly", "Motul", "Frenkit", "Autofren", "Febi"],
  },
  {
    id: "filtre",
    icon: Filter,
    image: "/images/categories/filters.jpg",
    name: { tr: "Filtreler", en: "Filters" },
    subCategories: {
      tr: ["Yağ", "Hava", "Polen", "Yakıt", "Performans"],
      en: ["Oil", "Air", "Cabin", "Fuel", "Performance"],
    },
    brands: ["Mann", "Mahle", "Bosch", "Hengst", "Filtron", "Purflux", "Delphi", "K&N", "Pipercross"],
  },
  {
    id: "motor",
    icon: Settings,
    image: "/images/categories/engine-parts.jpg",
    name: { tr: "Motor Parçaları", en: "Engine Parts" },
    subCategories: {
      tr: ["Yağ", "Conta", "Zamanlama", "Piston", "Pompa"],
      en: ["Oil", "Gaskets", "Timing", "Pistons", "Pumps"],
    },
    brands: ["Castrol", "Mobil", "Liqui Moly", "Victor Reinz", "Elring", "Ajusa", "INA", "Gates", "Dayco", "SKF", "Mahle", "Kolbenschmidt", "Pierburg", "Febi"],
  },
  {
    id: "suspansiyon",
    icon: MoveVertical,
    image: "/images/categories/suspension.jpg",
    name: { tr: "Süspansiyon & Sönümleme", en: "Suspension & Damping" },
    subCategories: {
      tr: ["Salıncak", "Rot", "Rulman", "Amortisör", "Yay"],
      en: ["Control Arms", "Tie Rods", "Bearings", "Shock Absorbers", "Springs"],
    },
    brands: ["Lemförder", "TRW", "Delphi", "SKF", "FAG", "SNR", "Febi", "Meyle", "Bilstein", "Sachs", "KYB", "Monroe", "Eibach", "Lesjöfors"],
  },
  {
    id: "kayis",
    icon: Link2,
    image: "/images/categories/belt-chain.jpg",
    name: { tr: "Kayış & Zincir", en: "Belts & Chains" },
    subCategories: {
      tr: ["Triger Seti", "V Kayışı", "Gergi"],
      en: ["Timing Kits", "V-Belts", "Tensioners"],
    },
    brands: ["INA", "Gates", "Dayco", "Contitech", "SKF"],
  },
  {
    id: "elektrik",
    icon: Zap,
    image: "/images/categories/electrical-lighting.jpg",
    name: { tr: "Elektrik & Aydınlatma", en: "Electrical & Lighting" },
    subCategories: {
      tr: ["Far", "Silecek", "Ateşleme", "Akü", "Röle"],
      en: ["Headlights", "Wipers", "Ignition", "Batteries", "Relays"],
    },
    brands: ["Valeo", "Hella", "Bosch", "Magneti Marelli", "NGK", "Denso", "Beru", "Varta", "Exide"],
  },
  {
    id: "sogutma",
    icon: Snowflake,
    image: "/images/categories/cooling-heating.jpg",
    name: { tr: "Soğutma & Isıtma", en: "Cooling & Heating" },
    subCategories: {
      tr: ["Radyatör", "Pompa", "Termostat"],
      en: ["Radiators", "Pumps", "Thermostats"],
    },
    brands: ["Valeo", "Nissens", "SKF", "Hepu", "Mahle", "Wahler"],
  },
  {
    id: "debriyaj",
    icon: Settings2,
    image: "/images/categories/clutch-drivetrain.jpg",
    name: { tr: "Debriyaj & Aktarma", en: "Clutch & Drivetrain" },
    subCategories: {
      tr: ["Debriyaj Seti", "Volan", "Aks", "Şanzıman"],
      en: ["Clutch Kits", "Flywheels", "Axles", "Transmissions"],
    },
    brands: ["LuK", "Sachs", "Valeo", "GKN", "SKF", "Febi", "Meyle", "ZF", "Liqui Moly"],
  },
  {
    id: "egzoz",
    icon: Fuel,
    image: "/images/categories/engine-parts.jpg",
    name: { tr: "Egzoz & Yakıt", en: "Exhaust & Fuel" },
    subCategories: {
      tr: ["Turbo", "EGR", "Enjektör", "Yakıt Pompası"],
      en: ["Turbo", "EGR", "Injectors", "Fuel Pumps"],
    },
    brands: ["Garrett", "BorgWarner", "Pierburg", "Valeo", "Bosal", "Walker", "Bosch", "Delphi", "Denso"],
  },
];

export default function ProductsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(categories[0].id);
  const { language, t } = useLanguage();

  const localizedCategories = useMemo(
    () =>
      categories.map((category) => ({
        ...category,
        label: category.name[language],
        labels: category.subCategories[language],
      })),
    [language],
  );

  const stats = [
    { value: `${categories.length}`, label: t("prod.stat.1") },
    { value: "80+", label: t("prod.stat.2") },
    { value: "40+", label: t("prod.stat.3") },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.06),transparent_28%)]" />
        <div className="section-shell relative z-10 py-20 md:py-24 lg:py-28">
          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:gap-12">
            <div className="max-w-[46rem]">
              <span className="section-kicker text-secondary" data-testid="text-products-page-badge">
                {t("prod.badge")}
              </span>
              <h1 className="mt-5 text-[3rem] font-extrabold leading-[0.96] tracking-[-0.05em] text-slate-950 sm:text-[4rem] lg:text-[5rem]" data-testid="text-products-page-title">
                {t("prod.title")}
              </h1>
              <p className="mt-7 max-w-[39rem] text-[1.05rem] leading-8 text-slate-600 md:text-[1.16rem]" data-testid="text-products-page-description">
                {t("prod.desc")}
              </p>
            </div>

            <div className="surface-panel rounded-[2rem] p-6 md:p-7">
              <p className="section-kicker text-secondary" data-testid="text-products-page-guide-kicker">
                {t("prod.guide.kicker")}
              </p>
              <h2 className="mt-4 text-2xl font-bold text-slate-950" data-testid="text-products-page-guide-title">
                {t("prod.guide.title")}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600" data-testid="text-products-page-guide-description">
                {t("prod.guide.desc")}
              </p>
              <Button asChild className="mt-6 h-12 rounded-full px-6" data-testid="button-products-page-contact">
                <a href="/#contact">
                  {t("contact.badge")}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="surface-panel rounded-[1.5rem] px-5 py-5" data-testid={`card-products-stat-${stat.label}`}>
                <div className="text-3xl font-extrabold tracking-[-0.05em] text-slate-950">{stat.value}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider bg-white">
        <div className="section-shell pt-14 md:pt-16">
          <div className="grid gap-6">
            {localizedCategories.map((category) => {
              const isExpanded = expandedId === category.id;
              const Icon = category.icon;

              return (
                <section
                  key={category.id}
                  className={`overflow-hidden rounded-[2rem] border transition-all duration-300 ${
                    isExpanded
                      ? "border-slate-200 bg-white shadow-[0_32px_90px_-55px_rgba(15,23,42,0.28)]"
                      : "border-slate-200/80 bg-slate-50/70 hover:border-slate-300"
                  }`}
                  data-testid={`section-products-category-${category.id}`}
                >
                  <button
                    type="button"
                    className="flex w-full flex-col gap-6 p-5 text-left sm:p-6 lg:flex-row lg:items-center lg:justify-between"
                    onClick={() => setExpandedId(isExpanded ? null : category.id)}
                    data-testid={`button-products-toggle-${category.id}`}
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-5">
                      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[1.3rem] sm:h-28 sm:w-28">
                        <img src={category.image} alt={category.label} className="h-full w-full object-cover" data-testid={`img-products-category-${category.id}`} />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.12)_0%,rgba(15,23,42,0.55)_100%)]" />
                        <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-[0.95rem] bg-white/15 text-white backdrop-blur-sm">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="min-w-0">
                        <div className="mb-2 inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                          {category.brands.length} {t("prod.brandCount")}
                        </div>
                        <h2 className="text-[1.7rem] font-bold leading-tight text-slate-950 sm:text-[2rem]">{category.label}</h2>
                        <p className="mt-2 text-sm leading-7 text-slate-600" data-testid={`text-products-meta-${category.id}`}>
                          {category.labels.length} {t("prod.subcats")} • {category.brands.length} {t("prod.brands")}
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center justify-center gap-2 self-start rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm lg:self-center">
                      {t("prod.btn.details")}
                      {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="border-t border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-5 pb-5 pt-6 sm:px-6 sm:pb-6">
                      <div className="grid gap-8 xl:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)]">
                        <div className="surface-panel rounded-[1.65rem] p-6">
                          <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                            <LayoutGrid className="h-5 w-5 text-primary" />
                            {t("prod.subcats")}
                          </h3>
                          <div className="mt-5 flex flex-wrap gap-2.5">
                            {category.labels.map((subCategory) => (
                              <span key={subCategory} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm" data-testid={`tag-products-subcategory-${category.id}-${subCategory}`}>
                                {subCategory}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900">
                            <Layers className="h-5 w-5 text-primary" />
                            {t("prod.brands")}
                          </h3>
                          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                            {category.brands.map((brand) => (
                              <div key={brand} className="group flex flex-col items-center justify-center rounded-[1.35rem] border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-primary/25 hover:shadow-md" data-testid={`card-products-brand-${category.id}-${brand}`}>
                                <div className="mb-3 flex h-16 w-full items-center justify-center p-2 sm:h-20">
                                  <img
                                    src={getBrandLogo(brand)}
                                    alt={`${brand} logo`}
                                    className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                    style={{ filter: "contrast(1.05) grayscale(0.08)" }}
                                    loading="lazy"
                                    decoding="async"
                                    onError={(event) => {
                                      const target = event.target as HTMLImageElement;
                                      if (target.src.includes("clearbit")) {
                                        const domain = getBrandDomain(brand);
                                        if (domain) {
                                          target.src = `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${domain}&size=256`;
                                          return;
                                        }
                                      }
                                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(brand)}&background=f8fafc&color=0f172a&font-size=0.33&size=800`;
                                    }}
                                  />
                                </div>
                                <span className="text-center text-xs font-semibold text-slate-700 sm:text-sm">{brand}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
