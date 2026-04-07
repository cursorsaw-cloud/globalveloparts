import { Link, useLocation } from "wouter";
import { Globe, Menu } from "lucide-react";
import { useState } from "react";
import bannerLogo from "@assets/image_1775586561862.png";
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
    <nav className="sticky top-0 z-50 w-full border-b border-white/8 bg-[linear-gradient(180deg,rgba(22,30,45,0.98)_0%,rgba(14,20,33,0.96)_100%)] shadow-[0_18px_60px_-34px_rgba(2,6,23,0.9)] backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/88">
      <div className="w-full pl-3 pr-2 sm:pl-4 sm:pr-3 lg:pl-5 lg:pr-6 xl:pr-8">
        <div className="flex min-h-[72px] items-center gap-6 md:min-h-[80px]">
          <Link href="/">
            <div className="flex shrink-0 cursor-pointer items-center" data-testid="link-home-logo">
              <img
                src={bannerLogo}
                alt="GlobalVelo Logo"
                className="h-9 w-auto object-contain sm:h-10 lg:h-[2.8rem]"
                data-testid="img-globalvelo-logo"
              />
            </div>
          </Link>

          <div className="ml-auto hidden min-w-0 items-center justify-end gap-5 md:flex lg:gap-7 xl:gap-8">
            <div className="flex items-center gap-5 lg:gap-7 xl:gap-8">
              {links.map((link) => {
                const isActive = location === link.href;

                return (
                  <Link key={link.href} href={link.href}>
                    <span
                      className={`relative cursor-pointer whitespace-nowrap py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 lg:text-[11.5px] ${
                        isActive ? "text-white" : "text-slate-300 hover:text-white"
                      }`}
                      data-testid={`link-nav-${link.href.replace("/", "") || "home"}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}

              <a
                href="/#contact"
                className="whitespace-nowrap py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300 transition-colors duration-300 hover:text-white lg:text-[11.5px]"
                data-testid="link-nav-contact"
              >
                {t("nav.contact")}
              </a>
            </div>

            <div className="h-6 w-px bg-white/10" />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 rounded-full border border-white/10 bg-white/[0.04] px-4 text-[12px] font-semibold tracking-[0.14em] text-slate-100 hover:bg-white/10 hover:text-white"
                  data-testid="button-language-switcher"
                >
                  <Globe className="h-4 w-4" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[188px] rounded-2xl border-slate-700 bg-slate-900 p-2 text-white">
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
            <SheetContent side="right" className="border-l border-white/10 bg-slate-950 px-6 text-white">
              <div className="flex flex-col gap-7 pt-8">
                <img
                  src={bannerLogo}
                  alt="GlobalVelo Logo"
                  className="h-10 w-auto object-contain"
                  data-testid="img-mobile-globalvelo-logo"
                />

                <div className="space-y-2 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-3">
                  {links.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <span
                        className={`block cursor-pointer rounded-2xl px-4 py-3 text-[1.02rem] font-semibold transition-colors ${
                          location === link.href ? "bg-white/10 text-white" : "text-white/85 hover:bg-white/6 hover:text-white"
                        }`}
                        onClick={() => setIsOpen(false)}
                        data-testid={`link-mobile-${link.href.replace("/", "") || "home"}`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  ))}

                  <a
                    href="/#contact"
                    className="block rounded-2xl px-4 py-3 text-[1.02rem] font-semibold text-white/85 transition-colors hover:bg-white/6 hover:text-white"
                    onClick={() => setIsOpen(false)}
                    data-testid="link-mobile-contact"
                  >
                    {t("nav.contact")}
                  </a>
                </div>

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
                        className={`rounded-full px-4 py-3 text-sm font-semibold ${language === option.value ? "bg-white text-slate-950" : "border border-white/10 bg-transparent text-slate-300"}`}
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
