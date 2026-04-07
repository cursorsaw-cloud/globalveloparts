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
    { href: "/global", label: t("nav.global") },
    { href: "/sabancidx", label: t("nav.sabancidx") },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[linear-gradient(180deg,#1b2230_0%,#111827_100%)] shadow-[0_20px_60px_-34px_rgba(15,23,42,0.7)] backdrop-blur-xl supports-[backdrop-filter]:bg-slate-900/92">
      <div className="w-full pl-1 pr-2 sm:pl-1.5 sm:pr-3 lg:pl-2 lg:pr-6 xl:pr-8">
        <div className="flex min-h-[94px] items-center gap-6 md:min-h-[102px]">
          <Link href="/">
            <div className="flex shrink-0 cursor-pointer items-center" data-testid="link-home-logo">
              <img
                src="/logo-globalvelo-white-header.png"
                alt="Globalvelo Logo"
                className="h-14 w-auto object-contain sm:h-[4.05rem] lg:h-[4.45rem]"
                data-testid="img-globalvelo-logo"
              />
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
              <DropdownMenuContent align="end" className="w-[152px] rounded-2xl border-slate-700 bg-slate-900 p-2 text-white">
                <DropdownMenuItem
                  className={`cursor-pointer rounded-xl font-medium ${language === "tr" ? "bg-white/8 text-white" : "text-slate-400"}`}
                  onClick={() => setLanguage("tr")}
                  data-testid="button-language-tr"
                >
                  TR - Türkçe
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`cursor-pointer rounded-xl font-medium ${language === "en" ? "bg-white/8 text-white" : "text-slate-400"}`}
                  onClick={() => setLanguage("en")}
                  data-testid="button-language-en"
                >
                  EN - English
                </DropdownMenuItem>
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
                  src="/logo-globalvelo-white-header.png"
                  alt="Globalvelo Logo"
                  className="h-14 w-auto object-contain"
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
                  <div className="flex gap-3">
                    <button
                      type="button"
                      className={`flex-1 rounded-full px-4 py-3 text-sm font-semibold ${language === "tr" ? "bg-white text-slate-950" : "border border-white/10 bg-transparent text-slate-300"}`}
                      onClick={() => {
                        setLanguage("tr");
                        setIsOpen(false);
                      }}
                      data-testid="button-mobile-language-tr"
                    >
                      TR
                    </button>
                    <button
                      type="button"
                      className={`flex-1 rounded-full px-4 py-3 text-sm font-semibold ${language === "en" ? "bg-white text-slate-950" : "border border-white/10 bg-transparent text-slate-300"}`}
                      onClick={() => {
                        setLanguage("en");
                        setIsOpen(false);
                      }}
                      data-testid="button-mobile-language-en"
                    >
                      EN
                    </button>
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
