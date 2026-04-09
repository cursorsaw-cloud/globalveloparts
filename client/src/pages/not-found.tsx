import { Link } from "wouter";
import { ArrowLeft, Home, Mail, PackageSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="relative flex min-h-[calc(100vh-var(--nav-height-mobile))] flex-col items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#020617_0%,#0f172a_55%,#1e293b_100%)] text-white lg:min-h-[calc(100vh-var(--nav-height))]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.4),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative z-10 w-full max-w-[42rem] px-6 py-20 text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-[1.6rem] border border-white/12 bg-white/[0.06] backdrop-blur-sm">
          <PackageSearch className="h-9 w-9 text-primary" data-testid="img-notfound-icon" />
        </div>

        <div
          className="mb-4 text-[7rem] font-extrabold leading-none tracking-[-0.08em] text-white/12 select-none"
          data-testid="text-notfound-code"
          aria-hidden="true"
        >
          404
        </div>

        <h1
          className="mt-[-2.5rem] text-[2.2rem] font-bold tracking-[-0.04em] text-white md:text-[2.8rem]"
          data-testid="text-notfound-title"
        >
          {t("notfound.title")}
        </h1>
        <p
          className="mx-auto mt-5 max-w-[36rem] text-[1.02rem] leading-8 text-slate-400"
          data-testid="text-notfound-description"
        >
          {t("notfound.desc")}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="w-full px-7 sm:w-auto" data-testid="button-notfound-home">
            <Link href="/">
              <Home className="h-4 w-4" />
              {t("notfound.home")}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="w-full border border-white/15 bg-white/[0.05] px-7 text-white hover:border-white/24 hover:bg-white/[0.09] hover:text-white sm:w-auto"
            data-testid="button-notfound-products"
          >
            <Link href="/products">
              <ArrowLeft className="h-4 w-4" />
              {t("notfound.products")}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="w-full border border-white/15 bg-white/[0.05] px-7 text-white hover:border-white/24 hover:bg-white/[0.09] hover:text-white sm:w-auto"
            data-testid="button-notfound-contact"
          >
            <a href="/#contact">
              <Mail className="h-4 w-4" />
              {t("notfound.contact")}
            </a>
          </Button>
        </div>

        <div className="mt-14 inline-flex rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3.5">
          <img
            src="/logo-globalvelo-white-header.png"
            alt="GlobalVelo"
            className="h-10 w-auto object-contain"
            data-testid="img-notfound-logo"
          />
        </div>
      </div>
    </div>
  );
}
