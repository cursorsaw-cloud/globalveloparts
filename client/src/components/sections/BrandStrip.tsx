import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { getBrandLogoCandidates } from "@/lib/brandLogos";

const brands: { name: string; localLogo: string }[] = [
  { name: "Brembo",      localLogo: "/images/brands/brembo.svg" },
  { name: "Bosch",       localLogo: "/images/brands/bosch.svg" },
  { name: "Continental", localLogo: "/images/brands/continental.svg" },
  { name: "SKF",         localLogo: "/images/brands/skf.svg" },
  { name: "Valeo",       localLogo: "/images/brands/valeo.svg" },
  { name: "Gates",       localLogo: "/images/brands/gates.svg" },
  { name: "Bilstein",    localLogo: "/images/brands/bilstein.svg" },
  { name: "KYB",         localLogo: "/images/brands/kyb.png" },
  { name: "Mann",        localLogo: "/images/brands/mann.svg" },
  { name: "Febi",        localLogo: "/images/brands/febi.svg" },
  { name: "Meyle",       localLogo: "/images/brands/meyle.svg" },
  { name: "Hella",       localLogo: "/images/brands/hella.svg" },
  { name: "NGK",         localLogo: "/images/brands/ngk.svg" },
  { name: "Monroe",      localLogo: "/images/brands/monroe.png" },
  { name: "Dayco",       localLogo: "/images/brands/dayco.svg" },
  { name: "Mahle",       localLogo: "/images/brands/mahle.svg" },
];

function BrandCard({ name, localLogo }: { name: string; localLogo: string }) {
  const allCandidates = [localLogo, ...getBrandLogoCandidates(name)];
  const [idx, setIdx] = useState(0);
  const [failed, setFailed] = useState(false);

  const currentSrc = allCandidates[idx];

  const handleError = () => {
    const next = idx + 1;
    if (next < allCandidates.length) {
      setIdx(next);
    } else {
      setFailed(true);
    }
  };

  return (
    <div
      className="group flex shrink-0 flex-col items-center gap-2.5"
      data-testid={`img-brand-strip-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="flex h-[72px] w-[88px] items-center justify-center rounded-[1rem] border border-slate-200/70 bg-white p-3 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.10)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/20 group-hover:shadow-[0_8px_24px_-8px_rgba(37,99,235,0.18)]">
        {failed ? (
          <span className="text-[0.65rem] font-black tracking-widest text-slate-400 text-center uppercase leading-tight">
            {name}
          </span>
        ) : (
          <img
            key={currentSrc}
            src={currentSrc}
            alt={`${name} logo`}
            className="h-full w-full object-contain [image-rendering:-webkit-optimize-contrast]"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={handleError}
          />
        )}
      </div>
      <span className="text-[0.7rem] font-semibold tracking-wide text-slate-500 group-hover:text-primary transition-colors duration-300">
        {name}
      </span>
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

        <div className="flex overflow-hidden pb-2">
          <div
            className="flex animate-marquee items-end gap-5 pr-5"
            data-testid="div-brandstrip-marquee"
          >
            {brands.map((b) => (
              <BrandCard key={b.name} name={b.name} localLogo={b.localLogo} />
            ))}
            {brands.map((b) => (
              <BrandCard key={`${b.name}-dup`} name={b.name} localLogo={b.localLogo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
