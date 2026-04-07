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
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[linear-gradient(180deg,#1b2230_0%,#111827_100%)] shadow-[0_20px_60px_-34px_rgba(15,23,42,0.7)] backdrop-blur-xl supports-[backdrop-filter]:bg-slate-900/92">
      <div className="w-full pl-1 pr-2 sm:pl-1.5 sm:pr-3 lg:pl-2 lg:pr-6 xl:pr-8">
        <div className="flex min-h-[94px] items-center gap-6 md:min-h-[102px]">
          <Link href="/">
            <div className="flex shrink-0 cursor-pointer items-center" data-testid="link-home-logo">
              <div className="relative h-[4.2rem] w-[15.8rem] sm:h-[4.6rem] sm:w-[17.4rem] lg:h-[5rem] lg:w-[18.9rem]" data-testid="img-globalvelo-logo">
                <img
                  src="/globalvelo-banner-logo.png"
                  alt="Globalvelo Spare Parts Logo"
                  className="h-full w-full object-contain"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[#c8d1dc] opacity-100 [clip-path:inset(4%_44%_34%_0)]"
                  style={{
                    WebkitMaskImage: "url('/globalvelo-banner-logo.png')",
                    maskImage: "url('/globalvelo-banner-logo.png')",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[#b9c3cf] opacity-100 [clip-path:inset(78%_24%_0_24%)]"
                  style={{
                    WebkitMaskImage: "url('/globalvelo-banner-logo.png')",
                    maskImage: "url('/globalvelo-banner-logo.png')",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                  }}
                />
              </div>
            </div>
          </Link>

          <div className="ml-auto hidden min-w-0 items-center justify-end gap-6 md:flex lg:gap-8 xl:gap-10">
            <div className="flex items-center gap-6 lg:gap-8 xl:gap-9">
              {links.map((link) => {
                const isActive = location === link.href;

                return (
                  <Link key={link.href} href={link.href}>
                    <span
                      className={`relative cursor-pointer whitespace-nowrap py-2 text-[13px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 lg:text-[14px] ${
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
                className="whitespace-nowrap py-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-300 transition-colors duration-300 hover:text-white lg:text-[14px]"
                data-testid="link-nav-contact"
              >
                {t("nav.contact")}
              </a>
            </div>

            <div className="h-7 w-px bg-white/12" />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 rounded-full border border-white/10 bg-white/[0.045] px-4 text-[13px] font-semibold tracking-[0.14em] text-slate-100 hover:bg-white/10 hover:text-white"
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
                <div className="relative h-[4.2rem] w-[15.8rem]" data-testid="img-mobile-globalvelo-logo">
                  <img
                    src="/globalvelo-banner-logo.png"
                    alt="Globalvelo Spare Parts Logo"
                    className="h-full w-full object-contain"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[#c8d1dc] opacity-100 [clip-path:inset(4%_44%_34%_0)]"
                    style={{
                      WebkitMaskImage: "url('/globalvelo-banner-logo.png')",
                      maskImage: "url('/globalvelo-banner-logo.png')",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[#b9c3cf] opacity-100 [clip-path:inset(78%_24%_0_24%)]"
                    style={{
                      WebkitMaskImage: "url('/globalvelo-banner-logo.png')",
                      maskImage: "url('/globalvelo-banner-logo.png')",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                    }}
                  />
                </div>

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
