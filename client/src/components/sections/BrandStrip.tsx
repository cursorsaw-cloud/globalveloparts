import { useLanguage } from "@/lib/i18n";

const brands = [
  { name: "Brembo",      logo: "/images/brands/brembo.svg" },
  { name: "Bosch",       logo: "/images/brands/bosch.svg" },
  { name: "Continental", logo: "/images/brands/continental.svg" },
  { name: "SKF",         logo: "/images/brands/skf.svg" },
  { name: "Valeo",       logo: "/images/brands/valeo.svg" },
  { name: "Gates",       logo: "/images/brands/gates.svg" },
  { name: "Bilstein",    logo: "/images/brands/bilstein.svg" },
  { name: "KYB",         logo: "/images/brands/kyb.svg" },
  { name: "Mann",        logo: "/images/brands/mann.svg" },
  { name: "Febi",        logo: "/images/brands/febi.svg" },
  { name: "Meyle",       logo: "/images/brands/meyle.svg" },
  { name: "Hella",       logo: "/images/brands/hella.svg" },
  { name: "NGK",         logo: "/images/brands/ngk.svg" },
  { name: "Monroe",      logo: "/images/brands/monroe.svg" },
  { name: "Dayco",       logo: "/images/brands/dayco.svg" },
  { name: "Mahle",       logo: "/images/brands/mahle.svg" },
];

function BrandLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div
      className="flex h-14 shrink-0 items-center justify-center rounded-[1.1rem] border border-slate-200/80 bg-white px-5 shadow-[0_6px_24px_-12px_rgba(15,23,42,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_12px_32px_-12px_rgba(37,99,235,0.2)]"
      data-testid={`img-brand-strip-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <img
        src={logo}
        alt={`${name} logo`}
        className="h-7 w-auto max-w-[6rem] object-contain grayscale transition-all duration-300 hover:grayscale-0"
        loading="lazy"
        decoding="async"
        onError={(e) => {
          const img = e.target as HTMLImageElement;
          img.style.display = "none";
          const parent = img.parentElement;
          if (parent) {
            parent.innerHTML = `<span class="text-[0.75rem] font-bold tracking-wider text-slate-400 uppercase">${name}</span>`;
          }
        }}
      />
    </div>
  );
}

export function BrandStrip() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-t border-slate-200/70 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] py-14">
      <div className="section-shell mb-10 text-center">
        <span className="section-kicker text-secondary" data-testid="text-brandstrip-badge">
          {t("brands.badge")}
        </span>
        <h2
          className="mt-3 text-[1.75rem] font-bold tracking-[-0.04em] text-slate-950 md:text-[2.1rem]"
          data-testid="text-brandstrip-title"
        >
          {t("brands.title")}
        </h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-[linear-gradient(90deg,rgba(248,250,252,1)_0%,rgba(248,250,252,0)_100%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-[linear-gradient(270deg,rgba(248,250,252,1)_0%,rgba(248,250,252,0)_100%)]" />

        <div className="flex overflow-hidden">
          <div className="flex animate-marquee gap-4 pr-4" data-testid="div-brandstrip-marquee">
            {brands.map((b) => (
              <BrandLogo key={b.name} name={b.name} logo={b.logo} />
            ))}
            {brands.map((b) => (
              <BrandLogo key={`${b.name}-dup`} name={b.name} logo={b.logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
