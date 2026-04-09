import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { getBrandLogo, getBrandLogoCandidates } from "@/lib/brandLogos";

const LOCAL_LOGOS: Record<string, string> = {
  Brembo:      "/images/brands/brembo.svg",
  Bosch:       "/images/brands/bosch.svg",
  SKF:         "/images/brands/skf.svg",
  Valeo:       "/images/brands/valeo.svg",
  Mann:        "/images/brands/mann.svg",
  Febi:        "/images/brands/febi.svg",
  Hella:       "/images/brands/hella.svg",
  NGK:         "/images/brands/ngk.svg",
  KYB:         "/images/brands/kyb.png",
  Monroe:      "/images/brands/monroe.png",
  Bilstein:    "/images/brands/bilstein.svg",
  Meyle:       "/images/brands/meyle.svg",
  Gates:       "/images/brands/gates.svg",
  Dayco:       "/images/brands/dayco.svg",
  Continental: "/images/brands/continental.svg",
  Mahle:       "/images/brands/mahle.svg",
};

const ALL_BRAND_NAMES = [
  "Brembo", "Textar", "Ferodo", "Bosch", "TRW", "ATE", "Delphi",
  "Zimmermann", "Castrol", "Motul", "Febi", "Mann", "Mahle", "Hengst",
  "Filtron", "Purflux", "Donaldson", "Hifi Filter", "Parker", "Mobil",
  "Liqui Moly", "Victor Reinz", "Elring", "Ajusa", "Nüral", "Goetze",
  "Glyco", "Payen", "AE", "INA", "Gates", "Dayco", "SKF", "Kolbenschmidt",
  "Pierburg", "Lemförder", "FAG", "SNR", "Meyle", "Bilstein", "Sachs",
  "KYB", "Monroe", "Contitech", "Valeo", "Hella", "Magneti Marelli",
  "TYC", "Denso", "Varta", "Exide", "Nissens", "Hepu", "Graf", "Dolz",
  "LuK", "GKN", "ZF", "MAPA", "Garrett", "BorgWarner", "Bosal", "Walker",
  "Continental", "NGK",
];

function BrandCard({ name }: { name: string }) {
  const local = LOCAL_LOGOS[name];
  const external = getBrandLogo(name);
  const candidates = [
    ...(local ? [local] : []),
    ...(external && external !== local ? [external] : []),
    ...getBrandLogoCandidates(name).filter((c) => c !== external),
  ].filter(Boolean);

  const [idx, setIdx] = useState(0);
  const [failed, setFailed] = useState(false);

  const currentSrc = candidates[idx];

  const handleError = () => {
    const next = idx + 1;
    if (next < candidates.length) {
      setIdx(next);
    } else {
      setFailed(true);
    }
  };

  return (
    <div
      className="group flex shrink-0 flex-col items-center gap-2"
      data-testid={`img-brand-strip-${name.toLowerCase().replace(/[\s+]/g, "-")}`}
    >
      <div className="flex h-[72px] w-[88px] items-center justify-center rounded-[0.875rem] border border-slate-200/70 bg-white p-3 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.08)] transition-all duration-300 group-hover:scale-[1.13] group-hover:border-blue-200 group-hover:shadow-[0_6px_22px_-4px_rgba(37,99,235,0.20)]">
        {failed || !currentSrc ? (
          <span className="text-[0.6rem] font-black tracking-widest text-slate-400 text-center uppercase leading-tight">
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
      <span className="text-[0.68rem] font-semibold tracking-wide text-slate-500 transition-colors duration-300 group-hover:text-blue-600">
        {name}
      </span>
    </div>
  );
}

export function BrandStrip() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-x-hidden border-t border-slate-200/70 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] py-14">
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

        <div className="flex py-3"  style={{ overflowX: "hidden", overflowY: "visible" }}>
          <div
            className="flex animate-marquee items-center gap-6 pr-6"
            data-testid="div-brandstrip-marquee"
          >
            {ALL_BRAND_NAMES.map((name) => (
              <BrandCard key={name} name={name} />
            ))}
            {ALL_BRAND_NAMES.map((name) => (
              <BrandCard key={`${name}-dup`} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
