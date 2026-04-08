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
  ShieldCheck,
  Snowflake,
  Sparkles,
  Zap,
} from "lucide-react";
import neoveloLogo from "@assets/image_1775560940186.png";
import marelliLogo from "@assets/image_1775641394433.png";
import sachsLogo from "@assets/image_1775645082561.png";
import pierburgLogo from "@assets/image_1775645658529.png";
import snrLogo from "@assets/image_1775646456486.png";
import contitechLogo from "@assets/image_1775646531584.png";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

const getBrandDomain = (brandName: string) => {
  const domainMap: Record<string, string> = {
    Brembo: "brembo.com",
    Textar: "textar.com",
    Ferodo: "ferodo.com",
    Bosch: "bosch.com",
    TRW: "trwaftermarket.com",
    ATE: "ate-brakes.com",
    Delphi: "delphiautoparts.com",
    Jurid: "jurid.com",
    Zimmermann: "otto-zimmermann.de",
    Budweg: "budweg.com",
    Hella: "hella.com",
    Castrol: "castrol.com",
    "Liqui Moly": "liqui-moly.com",
    Motul: "motul.com",
    Pierburg: "ms-motorservice.com",
    Frenkit: "frenkit.es",
    Autofren: "autofrenseinsa.com",
    Febi: "febi.com",
    Mann: "mann-filter.com",
    Mahle: "mahle.com",
    Hengst: "hengst.com",
    Filtron: "filtron.eu",
    Purflux: "purflux.com",
    "K&N": "knfilters.com",
    Pipercross: "pipercross.com",
    Mobil: "mobil.com",
    "Victor Reinz": "victorreinz.com",
    Elring: "elring.com",
    Ajusa: "ajusa.es",
    INA: "repxpert.com.tr",
    FAG: "repxpert.com.tr",
    LuK: "repxpert.com.tr",
    Vitesco: "repxpert.com.tr",
    Gates: "gates.com",
    Dayco: "dayco.com",
    SKF: "skf.com",
    Kolbenschmidt: "ms-motorservice.com",
    Lemförder: "aftermarket.zf.com",
    SNR: "ntn-snr.com",
    Meyle: "meyle.com",
    Bilstein: "bilstein.com",
    Sachs: "aftermarket.zf.com",
    MAPA: "mapa.com.tr",
    KYB: "kyb.com",
    Monroe: "monroe.com",
    Eibach: "eibach.com",
    Lesjöfors: "lesjoforsab.com",
    Valeo: "valeo.com",
    "Magneti Marelli": "marelli.com",
    "Van Wezel": "vanwezel.be",
    Klokkerholm: "klokkerholm.com",
    TYC: "tyc-europe.com",
    Alkar: "alkar.es",
    NGK: "ngkntk.com",
    Denso: "denso.com",
    Beru: "beru.com",
    Nissens: "nissens.com",
    Hepu: "hepu.de",
    Graf: "metelligroup.it",
    Bolz: "autowelt-bolz.de",
    Bosal: "bosal.com",
    Walker: "walkerexhaust.com",
    Garrett: "garrettmotion.com",
    BorgWarner: "borgwarner.com",
    ZF: "zf.com",
    GKN: "gknautomotive.com",
    VDO: "vdo.com",
    Corteco: "corteco.com",
    Varta: "varta-automotive.com",
    Exide: "exidegroup.com",
    Contitech: "contitech.de",
  };

  return domainMap[brandName];
};

const getBrandLogoCandidates = (brandName: string) => {
  const brandLogoOverrides: Record<string, string> = {
    NeoVelo: neoveloLogo,
    LuK: "https://www.repxpert.com.tr/assets/images/brands/luk-logo.svg",
    INA: "https://www.repxpert.com.tr/assets/images/brands/ina-logo.svg",
    FAG: "https://www.repxpert.com.tr/assets/images/brands/fag-logo.svg",
    Vitesco: "https://www.repxpert.com.tr/assets/images/brands/vitesco-logo.svg",
    Bosch: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bosch-logo.svg",
    TRW: "https://commons.wikimedia.org/wiki/Special:Redirect/file/TRW_logo.svg",
    ATE: "https://www.ate-brakes.com/img/logo_ate.png",
    Castrol: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Castrol_logo_2023.svg",
    Motul: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Motul_logo.svg",
    Valeo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Valeo_Logo.svg",
    Hella: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Hella-logo.svg",
    "Magneti Marelli": marelliLogo,
    NGK: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ngk_logo.svg",
    TYC: "https://images.seeklogo.com/logo-png/61/1/tyc-logo-png_seeklogo-617739.png",
    Denso: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Denso_logo.svg",
    Varta: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Varta-logo-2021.svg",
    Exide: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Exide_Logo.svg",
    Budweg: "https://www.budweg.com/hubfs/budweg-logo.png",
    Autofren: "https://www.autofrenseinsa.com/themes/custom/autofren/logo.svg",
    Brembo: "https://www.brembo.com/en/_layouts/15/IBSA/Images/brembo_logo.png",
    Textar: "https://textar.com/wp-content/uploads/2021/09/Textar_Logo_UZ_black.svg",
    Ferodo: "https://www.ferodo.com/content/loc-emea/loc-eu/fmmp-ferodo/en_GB/_jcr_content/page-nav/site_nav/logo-image.img.png/Ferodo%20Logo-1635556089357.png",
    Mahle: "https://www.mahle.com/media/system_files/img/mahle_logo_2020.png",
    Mann: "https://www.mann-filter.com/us-en/_jcr_content/mainBrandLogo.coreimg.svg/1762774610821/logo.svg",
    Delphi: "https://www.delphiautoparts.com/ResourcePackages/Delphi/dist/a1d6c1389a3f6b5a43bd.svg",
    Febi: "https://cdn.worldvectorlogo.com/logos/febi-bilstein.svg",
    Sachs: sachsLogo,
    MAPA: "https://www.mapa.com.tr/wp-content/themes/mapa/assets/theme//images/mapa_logo.png",
    Monroe: "https://www.monroe.com/content/dam/marketing/North-America/monroe/homepage/monroe-logo.png",
    Garrett: "https://www.garrettmotion.com/wp-content/themes/garrettmotion/images/logo.svg",
    Pierburg: pierburgLogo,
    Bosal: "https://cdn.worldvectorlogo.com/logos/bosal.svg",
    Walker: "https://cdn.worldvectorlogo.com/logos/walker-mufflers.svg",
    SNR: snrLogo,
    Nissens: "https://powerful-wisdom-ab8ee1c7df.media.strapiapp.com/logo_1_1_6ae8158e28.svg",
    Graf: "https://www.metelligroup.it/images/2.png",
    Bolz: "https://autowelt-bolz.de/wp-content/uploads/2021/06/bolz_logo.png",
    "Liqui Moly": "https://www.liqui-moly.com/_Resources/Persistent/2/5/8/e/258e7ce972cde7f6b6ef260ef66bc9508e8eb6dc/liqui-moly-logo.svg",
    Lemförder: "https://wp.logos-download.com/wp-content/uploads/2021/01/LEMFORDER_Logo.svg?dl",
    Contitech: contitechLogo,
    Beru: "https://www.beru.com/assets/img/logo.svg",
  };

  const domain = getBrandDomain(brandName);
  const candidates = [
    brandLogoOverrides[brandName],
    domain
      ? `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${domain}&size=256`
      : null,
  ].filter((value): value is string => Boolean(value));

  return Array.from(new Set(candidates));
};

const getBrandLogo = (brandName: string) => getBrandLogoCandidates(brandName)[0];

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
    brands: ["NeoVelo", "Brembo", "Textar", "Ferodo", "Bosch", "TRW", "ATE", "Delphi", "Jurid", "Zimmermann", "Budweg", "Castrol", "Liqui Moly", "Motul", "Frenkit", "Autofren", "Febi"],
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
    brands: ["NeoVelo", "Mann", "Mahle", "Bosch", "Hengst", "Filtron", "Purflux", "Delphi", "K&N", "Pipercross"],
  },
  {
    id: "motor",
    icon: Settings,
    image: "/images/categories/engine-parts-pro.png",
    name: { tr: "Motor Parçaları", en: "Engine Parts" },
    subCategories: {
      tr: ["Yağ", "Conta", "Zamanlama", "Piston", "Pompa"],
      en: ["Oil", "Gaskets", "Timing", "Pistons", "Pumps"],
    },
    brands: ["NeoVelo", "Castrol", "Mobil", "Liqui Moly", "Victor Reinz", "Elring", "Ajusa", "INA", "Gates", "Dayco", "SKF", "Mahle", "Kolbenschmidt", "Pierburg", "Febi"],
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
    brands: ["NeoVelo", "Lemförder", "TRW", "Delphi", "SKF", "FAG", "SNR", "Febi", "Meyle", "Bilstein", "Sachs", "KYB", "Monroe", "Eibach", "Lesjöfors"],
  },
  {
    id: "kayis",
    icon: Link2,
    image: "/images/categories/belt-chain-pro.png",
    name: { tr: "Kayış & Zincir", en: "Belts & Chains" },
    subCategories: {
      tr: ["Triger Seti", "V Kayışı", "Gergi"],
      en: ["Timing Kits", "V-Belts", "Tensioners"],
    },
    brands: ["NeoVelo", "INA", "Gates", "Dayco", "Contitech", "SKF", "SNR"],
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
    brands: ["NeoVelo", "Valeo", "Hella", "Bosch", "Magneti Marelli", "TYC", "Denso", "Varta", "Exide"],
  },
  {
    id: "sogutma",
    icon: Snowflake,
    image: "/images/categories/cooling-heating-pro.png",
    name: { tr: "Soğutma & Isıtma", en: "Cooling & Heating" },
    subCategories: {
      tr: ["Radyatör", "Pompa", "Termostat"],
      en: ["Radiators", "Pumps", "Thermostats"],
    },
    brands: ["NeoVelo", "Valeo", "Nissens", "SKF", "Hepu", "Mahle", "Graf", "Bolz"],
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
    brands: ["NeoVelo", "LuK", "Sachs", "Valeo", "GKN", "SKF", "Febi", "Meyle", "ZF", "MAPA"],
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
    brands: ["NeoVelo", "Garrett", "BorgWarner", "Pierburg", "Valeo", "Bosal", "Walker", "Bosch", "Delphi", "Denso"],
  },
];

export default function ProductsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(categories[0].id);
  const { language, t } = useLanguage();
  const contentLanguage = language === "tr" ? "tr" : "en";

  const localizedCategories = useMemo(
    () =>
      categories.map((category) => ({
        ...category,
        label: category.name[contentLanguage],
        labels: category.subCategories[contentLanguage],
      })),
    [contentLanguage],
  );

  const stats = [
    { value: `${categories.length}`, label: t("prod.stat.1") },
    { value: "80+", label: t("prod.stat.2") },
    { value: "40+", label: t("prod.stat.3") },
  ];

  const sourcingPoints = [t("prod.guide.desc"), t("hero.trust.original"), t("hero.trust.fast")];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.06),transparent_28%)]" />
        <div className="section-shell relative z-10 py-18 md:py-22 lg:py-24">
          <div className="grid items-end gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] xl:gap-10">
            <div className="max-w-[47rem]">
              <span className="section-kicker text-secondary" data-testid="text-products-page-badge">
                {t("prod.badge")}
              </span>
              <h1 className="section-title mt-5 !text-[clamp(3.1rem,5vw,5.1rem)]" data-testid="text-products-page-title">
                {t("prod.title")}
              </h1>
              <p className="section-copy mt-7 max-w-[40rem]" data-testid="text-products-page-description">
                {t("prod.desc")}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="surface-panel rounded-[1.5rem] px-5 py-5" data-testid={`card-products-stat-${index}`}>
                    <div className="text-3xl font-extrabold tracking-[-0.05em] text-slate-950">{stat.value}</div>
                    <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-panel rounded-[2rem] p-6 md:p-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                <Sparkles className="h-3.5 w-3.5" />
                <span data-testid="text-products-page-guide-kicker">{t("prod.guide.kicker")}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-slate-950" data-testid="text-products-page-guide-title">
                {t("prod.guide.title")}
              </h2>
              <div className="mt-5 grid gap-3">
                {sourcingPoints.map((item, index) => (
                  <div key={index} className="rounded-[1.25rem] border border-slate-200 bg-white px-4 py-4" data-testid={`row-products-guide-${index}`}>
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-6 px-6" data-testid="button-products-page-contact">
                <a href="/#contact">
                  {t("contact.badge")}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
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
                            {category.brands.map((brand) => {
                              const isNeoVelo = brand === "NeoVelo";
                              const isLemforder = brand === "Lemförder";
                              const isFebi = brand === "Febi";
                              const isSachs = brand === "Sachs";
                              const isMapa = brand === "MAPA";
                              const isPierburg = brand === "Pierburg";
                              const isBosal = brand === "Bosal";
                              const isWalker = brand === "Walker";
                              const isContitech = brand === "Contitech";

                              return (
                                <div
                                  key={brand}
                                  className={`group relative flex flex-col rounded-[1.45rem] border p-4 shadow-[0_24px_60px_-48px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-0.5 ${
                                    isNeoVelo
                                      ? "border-primary/35 bg-[linear-gradient(180deg,rgba(239,246,255,0.96)_0%,rgba(255,255,255,1)_100%)] shadow-[0_30px_80px_-44px_rgba(37,99,235,0.34)] ring-1 ring-primary/12 hover:border-primary/55 hover:shadow-[0_34px_90px_-42px_rgba(37,99,235,0.42)]"
                                      : "border-slate-200/90 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] hover:border-primary/30 hover:shadow-[0_28px_80px_-46px_rgba(37,99,235,0.24)]"
                                  }`}
                                  data-testid={`card-products-brand-${category.id}-${brand}`}
                                >
                                  {isNeoVelo ? (
                                    <span className="absolute right-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-white shadow-[0_12px_24px_-12px_rgba(37,99,235,0.8)]" data-testid={`badge-products-brand-${category.id}-${brand}`}>
                                      Featured
                                    </span>
                                  ) : null}
                                  <div
                                    className={`mb-3 flex w-full items-center justify-center overflow-hidden rounded-[1.15rem] px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_14px_34px_-28px_rgba(15,23,42,0.28)] ${
                                      isNeoVelo
                                        ? "min-h-[6rem] border border-primary/15 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.12),rgba(255,255,255,0.96)_55%)] sm:min-h-[6.6rem]"
                                        : isLemforder
                                          ? "min-h-[5.1rem] border border-slate-100 bg-white px-1 py-1 sm:min-h-[5.7rem]"
                                          : isSachs
                                            ? "min-h-[5.1rem] border border-slate-100 bg-white px-2.5 py-2 sm:min-h-[5.7rem]"
                                            : isPierburg
                                              ? "min-h-[5.1rem] border border-slate-100 bg-white px-1.5 py-2 sm:min-h-[5.7rem]"
                                              : isContitech
                                                ? "min-h-[5.1rem] border border-slate-100 bg-white px-2 py-2 sm:min-h-[5.7rem]"
                                                : isFebi || isMapa || isWalker
                                                  ? "min-h-[5.1rem] border border-slate-100 bg-white px-2 py-2 sm:min-h-[5.7rem]"
                                                : isBosal
                                                  ? "min-h-[5.1rem] border border-slate-100 bg-white px-3 py-3 sm:min-h-[5.7rem]"
                                                  : "min-h-[5.1rem] border border-slate-100 bg-white sm:min-h-[5.7rem]"
                                    }`}
                                  >
                                    <img
                                      src={getBrandLogo(brand)}
                                      alt={`${brand} logo`}
                                      className={`object-contain [image-rendering:-webkit-optimize-contrast] [transform:translateZ(0)] transition-transform duration-300 group-hover:scale-[1.04] ${
                                        isNeoVelo
                                          ? "h-14 w-full sm:h-16"
                                          : isLemforder
                                            ? "h-auto w-[92%] max-w-[9.5rem] scale-[1.35] group-hover:scale-[1.35] sm:max-w-[10rem]"
                                            : isFebi
                                              ? "h-auto w-[84%] max-w-[8.8rem] group-hover:scale-100 sm:max-w-[9.2rem]"
                                              : isSachs
                                                ? "h-auto w-[92%] max-h-[3.2rem] max-w-[10rem] group-hover:scale-100 sm:max-h-[3.35rem] sm:max-w-[10.4rem]"
                                                : isMapa
                                                  ? "h-auto w-[88%] max-w-[8.8rem] group-hover:scale-100 sm:max-w-[9.4rem]"
                                                  : isPierburg
                                                    ? "h-auto w-full max-h-[3.45rem] max-w-[11.8rem] group-hover:scale-100 sm:max-h-[3.6rem] sm:max-w-[12.2rem]"
                                                    : isContitech
                                                      ? "h-auto w-[88%] max-w-[8.8rem] group-hover:scale-100 sm:max-w-[9.2rem]"
                                                      : isBosal
                                                        ? "h-auto w-[64%] max-w-[6rem] group-hover:scale-100 sm:max-w-[6.4rem]"
                                                        : isWalker
                                                          ? "h-auto w-[82%] max-w-[8rem] group-hover:scale-100 sm:max-w-[8.5rem]"
                                                          : "h-full w-full"
                                      }`}
                                      style={{
                                        filter: isNeoVelo
                                          ? "contrast(1.16) saturate(1.16) drop-shadow(0 8px 18px rgba(37,99,235,0.16))"
                                          : isLemforder || isFebi || isSachs || isMapa || isPierburg || isBosal || isWalker || isContitech
                                            ? "none"
                                            : "contrast(1.1) saturate(1.08)",
                                        objectPosition: "center",
                                      }}
                                      loading="lazy"
                                      decoding="async"
                                      referrerPolicy="no-referrer"
                                      onError={(event) => {
                                        const target = event.target as HTMLImageElement;
                                        const candidates = getBrandLogoCandidates(brand);
                                        const currentIndex = Number(target.dataset.logoIndex ?? "0");
                                        const nextIndex = currentIndex + 1;
                                        const nextSrc = candidates[nextIndex];

                                        if (nextSrc) {
                                          target.dataset.logoIndex = String(nextIndex);
                                          target.src = nextSrc;
                                        }
                                      }}
                                    />
                                  </div>
                                  <span className={`mt-auto overflow-hidden text-ellipsis whitespace-nowrap text-center font-semibold tracking-[0.02em] sm:text-sm ${isNeoVelo ? "text-[0.82rem] text-primary" : "text-[0.78rem] text-slate-700"}`}>
                                    {brand}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </section>
              );
            })}
          </div>

          <div className="mt-14 rounded-[2rem] bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)] px-7 py-8 text-white shadow-[0_30px_90px_-40px_rgba(15,23,42,0.75)] md:px-10 md:py-10">
            <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto]">
              <div>
                <p className="section-kicker text-slate-400" data-testid="text-products-bottom-kicker">
                  {t("sdx.badge")}
                </p>
                <h2 className="mt-4 text-[2rem] font-bold tracking-[-0.04em] text-white md:text-[2.6rem]" data-testid="text-products-bottom-title">
                  {t("sdx.title")}
                </h2>
                <p className="mt-4 max-w-[46rem] text-[1rem] leading-8 text-slate-300" data-testid="text-products-bottom-description">
                  {t("sdx.desc")}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="px-8 text-base" data-testid="button-products-bottom-sdx">
                  <a href="/sabancidx">
                    {t("nav.sabancidx")}
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="border border-white/15 bg-white/[0.05] px-8 text-base text-white hover:border-white/24 hover:bg-white/[0.1] hover:text-white"
                  data-testid="button-products-bottom-contact"
                >
                  <a href="/#contact">{t("sdx.cta.secondary")}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
