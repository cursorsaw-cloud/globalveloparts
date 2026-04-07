import { useMemo, useState } from "react";
import {
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

  return (
    <div className="container py-16 md:py-20">
      <div className="mb-12 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
        <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-secondary" data-testid="text-products-page-badge">
          {t("prod.badge")}
        </span>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl" data-testid="text-products-page-title">{t("prod.title")}</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground" data-testid="text-products-page-description">
          {t("prod.desc")}
        </p>
      </div>

      <div className="grid gap-6">
        {localizedCategories.map((category) => {
          const isExpanded = expandedId === category.id;
          const Icon = category.icon;

          return (
            <section
              key={category.id}
              className={`overflow-hidden rounded-[1.5rem] border bg-card transition-all duration-300 ${
                isExpanded ? "border-primary/25 shadow-[0_28px_90px_-52px_rgba(15,23,42,0.7)]" : "border-slate-200/80 hover:border-slate-300 hover:shadow-sm"
              }`}
              data-testid={`section-products-category-${category.id}`}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
                onClick={() => setExpandedId(isExpanded ? null : category.id)}
                data-testid={`button-products-toggle-${category.id}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${isExpanded ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-950">{category.label}</h2>
                    <p className="mt-1 text-sm text-muted-foreground" data-testid={`text-products-meta-${category.id}`}>
                      {category.labels.length} {t("prod.subcats")} • {category.brands.length} {t("prod.brandCount")}
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
                  {t("prod.btn.details")}
                  {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </span>
              </button>

              {isExpanded && (
                <div className="border-t border-slate-200/70 bg-slate-50/70 px-6 pb-6 pt-6">
                  <div className="mb-8">
                    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900">
                      <LayoutGrid className="h-5 w-5 text-primary" />
                      {t("prod.subcats")}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.labels.map((subCategory) => (
                        <span key={subCategory} className="rounded-full border bg-white px-4 py-2 text-sm font-medium shadow-sm" data-testid={`tag-products-subcategory-${category.id}-${subCategory}`}>
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
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-6">
                      {category.brands.map((brand) => (
                        <div key={brand} className="group flex flex-col items-center justify-center rounded-2xl border bg-white p-4 shadow-sm transition-all duration-300 hover:border-primary/35 hover:shadow-md" data-testid={`card-products-brand-${category.id}-${brand}`}>
                          <div className="mb-3 flex h-20 w-full items-center justify-center p-2 sm:h-24">
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
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
