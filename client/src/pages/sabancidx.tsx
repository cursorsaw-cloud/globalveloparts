import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Cloud,
  Database,
  Network,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export default function SabanciDxPage() {
  const { language, t } = useLanguage();
  const isTR = language === "tr";

  const solutionCards = [
    {
      icon: Cloud,
      title: isTR ? "Cloud Solutions" : "Cloud Solutions",
      description: isTR
        ? "SabancıDx'in sitesinde öne çıkan bulut çözümleri yaklaşımı, Globalvelo'nun sipariş, entegrasyon ve kurumsal iş akışlarını tek kaynaktan daha ölçeklenebilir biçimde kurgulamasını destekler."
        : "SabancıDx's cloud solutions approach supports Globalvelo in structuring order, integration and enterprise workflows from a scalable single source.",
      href: "https://www.sabancidx.com/en/cloud-solutions",
      image: "https://www.sabancidx.com/gallery/about-us-4.png",
    },
    {
      icon: ServerCog,
      title: isTR ? "Managed Services" : "Managed Services",
      description: isTR
        ? "Yönetilen hizmetler modeli; operasyonların sürekliliği, sistem takibi ve kritik altyapının kararlı çalışması için Globalvelo tarafında güven veren bir teknoloji omurgası oluşturur."
        : "The managed services model builds a dependable technology backbone for Globalvelo with continuity, monitoring and stable infrastructure operations.",
      href: "https://www.sabancidx.com/en/managed-services/information-technology-infrastructure-management",
      image: "https://www.sabancidx.com/gallery/about-us-6.png",
    },
    {
      icon: Sparkles,
      title: isTR ? "Digital Transformation Products" : "Digital Transformation Products",
      description: isTR
        ? "SabancıDx'in dijital dönüşüm ürünleri yaklaşımı; veri görünürlüğü, karar desteği ve süreç optimizasyonu ile Globalvelo'nun B2B deneyimini daha hızlı ve daha izlenebilir hale getirir."
        : "SabancıDx's digital transformation products strengthen Globalvelo's B2B experience with better visibility, decision support and process optimization.",
      href: "https://www.sabancidx.com/en/digital-transformation-products",
      image: "https://www.sabancidx.com/success-stories/agesa/images/slide.png",
    },
  ];

  const integrationPoints = [
    {
      icon: Workflow,
      title: isTR ? "Siparişten teslimata entegre akış" : "Integrated flow from order to delivery",
      description: isTR
        ? "Globalvelo'nun bayi ve iş ortaklarıyla yürüttüğü B2B operasyonlar; teklif, sipariş, stok ve sevkiyat katmanlarında daha izlenebilir bir dijital akışa bağlanır."
        : "Globalvelo's B2B operations connect dealers and partners through a more traceable digital flow across quotation, ordering, inventory and shipment layers.",
    },
    {
      icon: ShieldCheck,
      title: isTR ? "Kurumsal güvenlik ve süreklilik" : "Enterprise security and continuity",
      description: isTR
        ? "SabancıDx'in kurumsal standartları, Globalvelo markasının güven veren premium duruşunu veri güvenliği, iş sürekliliği ve operasyon disiplini ile destekler."
        : "SabancıDx enterprise standards reinforce Globalvelo's premium positioning with data security, business continuity and operational discipline.",
    },
    {
      icon: Database,
      title: isTR ? "Veri görünürlüğü ve raporlama" : "Data visibility and reporting",
      description: isTR
        ? "Tedarik, marka, ürün ve kanal verilerinin daha tutarlı yorumlanması; büyüme kararlarını daha hızlı ve daha doğru hale getiren bir yönetim görünürlüğü sağlar."
        : "A stronger interpretation layer across supply, brand, product and channel data enables faster and more accurate growth decisions.",
    },
    {
      icon: BarChart3,
      title: isTR ? "Ölçeklenebilir büyüme altyapısı" : "Scalable growth infrastructure",
      description: isTR
        ? "Yeni pazarlar, yeni iş ortakları ve artan ürün kapsamı için teknoloji mimarisi baştan ölçeklenebilir bir kurumsal çerçevede ele alınır."
        : "Technology architecture is positioned as an enterprise-ready, scalable foundation for new markets, partners and broader product scope.",
    },
  ];

  const referenceLogos = [
    { name: "Toyota", src: "https://www.sabancidx.com/references/mini/toyota.png" },
    { name: "Temsa", src: "https://www.sabancidx.com/references/mini/temsa.png" },
    { name: "Teknosa", src: "https://www.sabancidx.com/references/mini/teknosa.png" },
    { name: "Akbank", src: "https://www.sabancidx.com/references/mini/akbank.png" },
    { name: "CarrefourSA", src: "https://www.sabancidx.com/references/mini/csa.png" },
    { name: "Brisa", src: "https://www.sabancidx.com/references/mini/brisa.png" },
  ];

  const proofPoints = isTR
    ? [
        "SabancıDx sitesinde öne çıkan çözüm alanları: bulut, yönetilen hizmetler ve dijital dönüşüm ürünleri.",
        "Kurumsal ölçekli referans yapısı, Globalvelo'nun teknoloji partneri seçimini daha güçlü bir zemine oturtur.",
        "Globalvelo için bu iş birliği; sadece altyapı değil, güven, hız ve izlenebilirlik vaadinin de parçasıdır.",
      ]
    : [
        "SabancıDx highlights cloud, managed services and digital transformation products as its core solution areas.",
        "Its enterprise reference base strengthens the rationale behind Globalvelo's technology partnership.",
        "For Globalvelo, the partnership is not only about infrastructure, but also about trust, speed and traceability.",
      ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0b1120_0%,#111827_52%,#1e293b_100%)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.2),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(148,163,184,0.12),transparent_32%)]" />
        <div className="section-shell relative z-10 py-20 md:py-24 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(22rem,0.86fr)] lg:gap-12">
            <div className="max-w-[46rem]">
              <div className="mt-1 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5" data-testid="card-sdx-brand-lockup">
                <span className="section-kicker whitespace-nowrap text-slate-300" data-testid="text-sdx-badge">
                  {t("sdx.badge")}
                </span>
                <div className="inline-flex max-w-full items-center gap-4 rounded-[1.55rem] border border-white/10 bg-white/[0.045] px-4 py-3 shadow-[0_22px_60px_-34px_rgba(15,23,42,0.9)] backdrop-blur-md sm:px-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1rem] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_8px_24px_-16px_rgba(15,23,42,0.55)]">
                    <img
                      src="https://www.sabancidx.com/images/sabancidx-logo.svg"
                      alt="SabancıDx Logo"
                      className="h-9 w-auto object-contain"
                      data-testid="img-sdx-logo"
                    />
                  </div>
                  <div className="h-10 w-px shrink-0 bg-white/14" />
                  <div className="min-w-0 rounded-[0.9rem] bg-white/[0.02] px-1 py-1">
                    <img
                      src="/logo-globalvelo-white-header.png"
                      alt="Globalvelo Logo"
                      className="h-10 w-auto max-w-[10.5rem] object-contain sm:h-11 sm:max-w-[12.5rem]"
                      data-testid="img-globalvelo-logo"
                    />
                  </div>
                </div>
              </div>

              <h1 className="mt-8 text-[3rem] font-extrabold leading-[0.96] tracking-[-0.05em] text-white sm:text-[4rem] lg:text-[5rem]" data-testid="text-sdx-title">
                {t("sdx.title")}
              </h1>
              <p className="mt-7 max-w-[40rem] text-[1.05rem] leading-8 text-slate-300 md:text-[1.16rem]" data-testid="text-sdx-description">
                {t("sdx.desc")}
              </p>

              <div className="mt-8 grid gap-3">
                {proofPoints.map((point, index) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm"
                    data-testid={`row-sdx-proof-${index}`}
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-blue-300">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-7 text-slate-200">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_35px_90px_-45px_rgba(15,23,42,0.9)] backdrop-blur-md">
                <img
                  src="https://www.sabancidx.com/gallery/about-us-4.png"
                  alt="SabancıDx team and technology environment"
                  className="h-[24rem] w-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  data-testid="img-sdx-hero-main"
                />
                <div className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.18)_0%,rgba(15,23,42,0.38)_100%)] px-6 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400" data-testid="text-sdx-hero-card-kicker">
                    {isTR ? "SabancıDx sitesinden görsel destek" : "Visual support from SabancıDx site"}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-200" data-testid="text-sdx-hero-card-description">
                    {isTR
                      ? "Sayfadaki içerik, SabancıDx'in resmi web sitesindeki çözüm yapısı, marka dili ve kurumsal görsel evreni referans alınarak Globalvelo iş modeliyle ilişkilendirildi."
                      : "This page connects Globalvelo's operating model with the official SabancıDx solution structure, brand language and visual ecosystem."}
                  </p>
                </div>
              </div>

              <div className="surface-panel absolute -bottom-8 -left-6 hidden w-[15rem] rounded-[1.7rem] p-4 lg:block">
                <img
                  src="https://www.sabancidx.com/success-stories/agesa/images/slide.png"
                  alt="SabancıDx success story visual"
                  className="h-36 w-full rounded-[1.2rem] object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  data-testid="img-sdx-hero-secondary"
                />
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500" data-testid="text-sdx-secondary-kicker">
                  {isTR ? "Kurumsal dönüşüm perspektifi" : "Enterprise transformation perspective"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider bg-white">
        <div className="section-shell">
          <div className="mx-auto max-w-[46rem] text-center">
            <span className="section-kicker text-secondary" data-testid="text-sdx-solutions-badge">
              {isTR ? "SabancıDx Çözüm Çerçevesi" : "SabancıDx Solution Framework"}
            </span>
            <h2 className="mt-4 text-[2.35rem] font-bold tracking-[-0.04em] text-slate-950 md:text-[3rem]" data-testid="text-sdx-solutions-title">
              {isTR ? "Resmi site içeriğini Globalvelo diliyle yeniden çerçeveledik" : "We reframed the official site content through Globalvelo's lens"}
            </h2>
            <p className="mx-auto mt-5 max-w-[42rem] text-[1rem] leading-8 text-slate-600" data-testid="text-sdx-solutions-description">
              {isTR
                ? "SabancıDx'in resmi sitesinde öne çıkan çözüm başlıklarını, Globalvelo'nun uluslararası otomotiv yedek parça ticareti ve B2B yazılım altyapısı ile doğrudan ilişkilendiren daha anlatı odaklı bir yapı kurduk."
                : "We connected the solution areas highlighted on SabancıDx's official site directly to Globalvelo's international spare parts trade and B2B software operations."}
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {solutionCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <article key={card.title} className="surface-panel overflow-hidden rounded-[1.9rem]" data-testid={`card-sdx-solution-${index}`}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-52 w-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    data-testid={`img-sdx-solution-${index}`}
                  />
                  <div className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-slate-200 bg-slate-50 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-[1.35rem] font-bold leading-tight text-slate-950" data-testid={`text-sdx-solution-title-${index}`}>
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600" data-testid={`text-sdx-solution-description-${index}`}>
                      {card.description}
                    </p>
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-slate-950"
                      data-testid={`link-sdx-solution-${index}`}
                    >
                      {isTR ? "İlgili çözümü incele" : "Explore the solution"}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-divider bg-slate-50">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-10">
            <div className="surface-panel rounded-[2rem] p-7 md:p-9">
              <span className="section-kicker text-secondary" data-testid="text-sdx-integration-badge">
                {isTR ? "Globalvelo Entegrasyon Modeli" : "Globalvelo Integration Model"}
              </span>
              <h2 className="mt-4 text-[2.15rem] font-bold leading-tight tracking-[-0.04em] text-slate-950 md:text-[2.8rem]" data-testid="text-sdx-integration-title">
                {isTR ? "SabancıDx, Globalvelo markasına nasıl bağlanıyor?" : "How does SabancıDx connect to the Globalvelo brand?"}
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-slate-600" data-testid="text-sdx-integration-description">
                {isTR
                  ? "Bu sayfada SabancıDx'i yalnızca bir teknoloji tedarikçisi olarak değil; Globalvelo'nun premium, güven veren ve ölçeklenebilir marka mimarisini güçlendiren stratejik bir iş ortağı olarak konumlandırdık."
                  : "On this page, SabancıDx is positioned not simply as a vendor, but as a strategic partner that strengthens Globalvelo's premium, trusted and scalable brand architecture."}
              </p>

              <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-slate-200/80 bg-white">
                <img
                  src="https://www.sabancidx.com/gallery/about-us-2.png"
                  alt="SabancıDx collaborative work environment"
                  className="h-64 w-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  data-testid="img-sdx-integration-main"
                />
              </div>
            </div>

            <div className="grid gap-4">
              {integrationPoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="surface-panel rounded-[1.7rem] px-6 py-6" data-testid={`card-sdx-integration-${index}`}>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] border border-slate-200/80 bg-white text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-[1.18rem] font-bold text-slate-950" data-testid={`text-sdx-integration-title-${index}`}>
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600" data-testid={`text-sdx-integration-description-${index}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider bg-white">
        <div className="section-shell">
          <div className="surface-panel rounded-[2rem] p-7 md:p-9">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[42rem]">
                <span className="section-kicker text-secondary" data-testid="text-sdx-references-badge">
                  {isTR ? "Kurumsal Referans Ekosistemi" : "Enterprise Reference Ecosystem"}
                </span>
                <h2 className="mt-4 text-[2.05rem] font-bold tracking-[-0.04em] text-slate-950 md:text-[2.6rem]" data-testid="text-sdx-references-title">
                  {isTR ? "SabancıDx'in kurumsal ölçeği, Globalvelo anlatısını güçlendiriyor" : "SabancıDx's enterprise scale strengthens Globalvelo's narrative"}
                </h2>
                <p className="mt-4 text-[1rem] leading-8 text-slate-600" data-testid="text-sdx-references-description">
                  {isTR
                    ? "Resmi sitedeki referans yapısı, SabancıDx'in farklı sektörlerde kurumsal güven inşa ettiğini gösteriyor. Bu da Globalvelo'nun teknoloji partnerliğini daha inandırıcı ve daha premium bir zemine taşıyor."
                    : "The reference ecosystem shown on the official site demonstrates SabancıDx's enterprise credibility across industries, reinforcing the strength of Globalvelo's technology partnership."}
                </p>
              </div>

              <a
                href="https://www.sabancidx.com/en/about-us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-slate-950"
                data-testid="link-sdx-corporate"
              >
                {isTR ? "Kurumsal profili görüntüle" : "View corporate profile"}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
              {referenceLogos.map((logo, index) => (
                <div
                  key={logo.name}
                  className="flex min-h-[6.4rem] items-center justify-center rounded-[1.35rem] border border-slate-200 bg-white px-5 py-4 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.3)]"
                  data-testid={`card-sdx-reference-${index}`}
                >
                  <img
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    className="h-9 w-full object-contain"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    data-testid={`img-sdx-reference-${index}`}
                  />
                </div>
              ))}
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
                <Button size="lg" className="h-14 rounded-full px-8 text-base font-semibold shadow-[0_20px_55px_-25px_rgba(37,99,235,0.65)]" data-testid="button-sdx-primary">
                  {t("sdx.cta.btn")}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
              <Button asChild size="lg" variant="outline" className="h-14 rounded-full border-white/15 bg-white/5 px-8 text-base text-white hover:bg-white/10 hover:text-white">
                <a href="/#contact" data-testid="button-sdx-contact">
                  {t("sdx.cta.secondary")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
