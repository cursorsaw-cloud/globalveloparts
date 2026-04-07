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
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/96 shadow-[0_16px_50px_-34px_rgba(15,23,42,0.28)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/88">
      <div className="container flex min-h-[5.5rem] items-center justify-between gap-6 py-3">
        <Link href="/">
          <div className="flex cursor-pointer items-center" data-testid="link-home-logo">
            <img
              src="/logo-globalvelo-white-header.png"
              alt="Globalvelo Logo"
              className="h-12 w-auto object-contain sm:h-14 lg:h-16"
              data-testid="img-globalvelo-logo"
            />
          </div>
        </Link>

        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="flex items-center gap-8 lg:gap-10">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`cursor-pointer text-[13px] font-semibold tracking-[0.16em] uppercase transition-colors duration-300 ${location === link.href ? "text-slate-950" : "text-slate-500 hover:text-slate-950"}`}
                  data-testid={`link-nav-${link.href.replace("/", "") || "home"}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}

            <a
              href="/#contact"
              className="text-[13px] font-semibold tracking-[0.16em] uppercase text-slate-500 transition-colors duration-300 hover:text-slate-950"
              data-testid="link-nav-contact"
            >
              {t("nav.contact")}
            </a>
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-10 rounded-full border border-slate-200 bg-white px-4 text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                data-testid="button-language-switcher"
              >
                <Globe className="h-4 w-4" />
                {language.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[140px] rounded-2xl border-slate-200 p-2">
              <DropdownMenuItem
                className={`cursor-pointer rounded-xl font-medium ${language === "tr" ? "text-slate-950" : "text-slate-500"}`}
                onClick={() => setLanguage("tr")}
                data-testid="button-language-tr"
              >
                TR - Türkçe
              </DropdownMenuItem>
              <DropdownMenuItem
                className={`cursor-pointer rounded-xl font-medium ${language === "en" ? "text-slate-950" : "text-slate-500"}`}
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
              className="text-slate-900 hover:bg-slate-100 hover:text-slate-950"
              data-testid="button-mobile-menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-l border-slate-200 bg-white">
            <div className="flex flex-col gap-6 pt-8">
              <img
                src="/logo-globalvelo-white-header.png"
                alt="Globalvelo Logo"
                className="h-12 w-auto object-contain"
                data-testid="img-mobile-globalvelo-logo"
              />

              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="cursor-pointer text-lg font-semibold text-slate-900"
                    onClick={() => setIsOpen(false)}
                    data-testid={`link-mobile-${link.href.replace("/", "") || "home"}`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}

              <a
                href="/#contact"
                className="text-lg font-semibold text-slate-900"
                onClick={() => setIsOpen(false)}
                data-testid="link-mobile-contact"
              >
                {t("nav.contact")}
              </a>

              <div className="my-1 h-px w-full bg-slate-200" />

              <div className="flex items-center gap-4">
                <Globe className="h-5 w-5 text-slate-500" />
                <div className="flex gap-4">
                  <button
                    type="button"
                    className={`text-lg font-semibold ${language === "tr" ? "text-slate-950" : "text-slate-500"}`}
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
                    className={`text-lg font-semibold ${language === "en" ? "text-slate-950" : "text-slate-500"}`}
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
