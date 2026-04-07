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
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 py-4 pl-1 pr-2 sm:pl-1.5 sm:pr-3 lg:pl-2 lg:pr-4 xl:pl-2 xl:pr-5">
        <Link href="/">
          <div className="flex shrink-0 cursor-pointer items-center" data-testid="link-home-logo">
            <img
              src="/logo-globalvelo-white-header.png"
              alt="Globalvelo Logo"
              className="h-14 w-auto object-contain sm:h-16 lg:h-[4.5rem]"
              data-testid="img-globalvelo-logo"
            />
          </div>
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-8 md:flex lg:gap-10">
          <div className="flex items-center gap-6 lg:gap-8 xl:gap-10">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`cursor-pointer whitespace-nowrap text-[13px] font-semibold tracking-[0.16em] uppercase transition-colors duration-300 ${location === link.href ? "text-white" : "text-slate-300 hover:text-white"}`}
                  data-testid={`link-nav-${link.href.replace("/", "") || "home"}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}

            <a
              href="/#contact"
              className="whitespace-nowrap text-[13px] font-semibold tracking-[0.16em] uppercase text-slate-300 transition-colors duration-300 hover:text-white"
              data-testid="link-nav-contact"
            >
              {t("nav.contact")}
            </a>
          </div>

          <div className="h-8 w-px bg-white/12" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-11 rounded-full border border-white/12 bg-white/6 px-4 text-white hover:bg-white/10 hover:text-white"
                data-testid="button-language-switcher"
              >
                <Globe className="h-4 w-4" />
                {language.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[144px] rounded-2xl border-slate-700 bg-slate-900 p-2 text-white">
              <DropdownMenuItem
                className={`cursor-pointer rounded-xl font-medium ${language === "tr" ? "text-white" : "text-slate-400"}`}
                onClick={() => setLanguage("tr")}
                data-testid="button-language-tr"
              >
                TR - Türkçe
              </DropdownMenuItem>
              <DropdownMenuItem
                className={`cursor-pointer rounded-xl font-medium ${language === "en" ? "text-white" : "text-slate-400"}`}
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
              className="text-white hover:bg-white/10 hover:text-white"
              data-testid="button-mobile-menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-l border-white/10 bg-slate-950 text-white">
            <div className="flex flex-col gap-6 pt-8">
              <img
                src="/logo-globalvelo-white-header.png"
                alt="Globalvelo Logo"
                className="h-14 w-auto object-contain"
                data-testid="img-mobile-globalvelo-logo"
              />

              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="cursor-pointer text-lg font-semibold text-white/90"
                    onClick={() => setIsOpen(false)}
                    data-testid={`link-mobile-${link.href.replace("/", "") || "home"}`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}

              <a
                href="/#contact"
                className="text-lg font-semibold text-white/90"
                onClick={() => setIsOpen(false)}
                data-testid="link-mobile-contact"
              >
                {t("nav.contact")}
              </a>

              <div className="my-1 h-px w-full bg-white/10" />

              <div className="flex items-center gap-4">
                <Globe className="h-5 w-5 text-slate-400" />
                <div className="flex gap-4">
                  <button
                    type="button"
                    className={`text-lg font-semibold ${language === "tr" ? "text-white" : "text-slate-400"}`}
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
                    className={`text-lg font-semibold ${language === "en" ? "text-white" : "text-slate-400"}`}
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
    </nav>
  );
}
