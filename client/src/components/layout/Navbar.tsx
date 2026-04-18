import { Link, useLocation } from "wouter";
import { Globe, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/lib/i18n";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const links = [
    { href: "/about", label: t("nav.about") },
    { href: "/products", label: t("nav.products") },
    { href: "/neovelo-parts", label: t("nav.neovelo") },
    { href: "/global", label: t("nav.global") },
    { href: "/sabancidx", label: t("nav.sabancidx") },
  ];

  const languageOptions = [
    { value: "tr", label: "TR - Türkçe" },
    { value: "en", label: "EN - English" },
    { value: "es", label: "ES - Español" },
    { value: "ar", label: "AR - العربية" },
    { value: "ru", label: "RU - Русский" },
    { value: "fr", label: "FR - Français" },
  ] as const;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.96)_0%,rgba(2,6,23,0.92)_100%)] shadow-[0_20px_60px_-36px_rgba(2,6,23,0.9)] backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/88">
      <div className="site-shell">
        <div className="flex min-h-[var(--nav-height-mobile)] items-center gap-4 lg:min-h-[var(--nav-height)] lg:gap-6">
          <Link href="/">
            <div className="flex shrink-0 cursor-pointer items-center" data-testid="link-home-logo">
              <img
                src="/logo-globalvelo-dark.png"
                alt="Globalvelo Spare Parts Logo"
                className="h-12 w-auto object-contain sm:h-[3.35rem] lg:h-[3.65rem]"
                data-testid="img-globalvelo-logo"
              />
            </div>
          </Link>


          <div className="hidden items-center gap-1.5 md:flex lg:gap-2 xl:gap-2.5">
            {links.map((link) => {
              const isActive = location === link.href;

              return (
                <Link key={link.href} href={link.href} onClick={() => { document.documentElement.scrollTop = 0; document.body.scrollTop = 0; }}>
                  <span
                    className={`relative cursor-pointer whitespace-nowrap rounded-full px-3 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 lg:px-4 lg:text-[12px] ${
                      isActive
                        ? "bg-white/[0.08] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                        : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                    }`}
                    data-testid={`link-nav-${link.href.replace("/", "") || "home"}`}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 rounded-full border border-white/10 bg-white/[0.045] px-4 text-[12px] font-semibold tracking-[0.14em] text-slate-100 hover:border-white/20 hover:bg-white/10 hover:text-white"
                  data-testid="button-language-switcher"
                >
                  <Globe className="h-4 w-4" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-[188px] rounded-2xl border-slate-700 bg-slate-900 p-2 text-white"
              >
                {languageOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.value}
                    className={`cursor-pointer rounded-xl font-medium ${language === option.value ? "bg-white/8 text-white" : "text-slate-400"}`}
                    onClick={() => setLanguage(option.value)}
                    data-testid={`button-language-${option.value}`}
                  >
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              asChild
              variant="ghost"
              size="sm"
              className="h-10 rounded-full border border-white/12 bg-white/[0.05] px-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white hover:border-white/20 hover:bg-white/12"
              data-testid="button-nav-contact"
            >
              <a href="/#contact">{t("nav.contact")}</a>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                data-testid="button-mobile-menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[92vw] max-w-sm border-l border-white/10 bg-[linear-gradient(180deg,#020617_0%,#0f172a_100%)] px-5 text-white sm:px-6"
            >
              <div className="flex flex-col gap-6 pt-8">
                <div>
                  <img
                    src="/logo-globalvelo-dark.png"
                    alt="Globalvelo Spare Parts Logo"
                    className="h-12 w-auto object-contain"
                    data-testid="img-mobile-globalvelo-logo"
                  />
                </div>

                <div className="space-y-2 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-3">
                  {links.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => { setIsOpen(false); document.documentElement.scrollTop = 0; document.body.scrollTop = 0; }}>
                      <span
                        className={`block cursor-pointer rounded-2xl px-4 py-3 text-[0.98rem] font-semibold transition-colors ${
                          location === link.href ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/6 hover:text-white"
                        }`}
                        data-testid={`link-mobile-${link.href.replace("/", "") || "home"}`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </div>

                <Button
                  asChild
                  size="lg"
                  className="h-13 w-full rounded-full text-sm font-semibold uppercase tracking-[0.16em]"
                  data-testid="button-mobile-contact"
                >
                  <a href="/#contact" onClick={() => setIsOpen(false)}>
                    {t("nav.contact")}
                  </a>
                </Button>

                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-4">
                  <div className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                    <Globe className="h-4 w-4" />
                    Language
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {languageOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        className={`rounded-full px-4 py-3 text-sm font-semibold transition-all ${
                          language === option.value
                            ? "bg-white text-slate-950"
                            : "border border-white/10 bg-transparent text-slate-300 hover:border-white/20 hover:text-white"
                        }`}
                        onClick={() => {
                          setLanguage(option.value);
                          setIsOpen(false);
                        }}
                        data-testid={`button-mobile-language-${option.value}`}
                      >
                        {option.value.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
