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
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-background/90 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.35)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/75">
      <div className="container flex min-h-[6.75rem] items-center justify-between gap-6 py-4">
        <Link href="/">
          <div className="flex cursor-pointer items-center gap-4" data-testid="link-home-logo">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white px-4 py-3 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.55)]">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-100/80" />
              <img
                src="/logo.png"
                alt="Globalvelo Logo"
                className="relative h-20 w-auto object-contain sm:h-24"
                data-testid="img-globalvelo-logo"
              />
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`cursor-pointer text-sm font-semibold tracking-[0.02em] transition-all duration-300 hover:text-primary ${location === link.href ? "text-primary" : "text-slate-600"}`}
                data-testid={`link-nav-${link.href.replace("/", "") || "home"}`}
              >
                {link.label}
              </span>
            </Link>
          ))}

          <a
            href="/#contact"
            className="text-sm font-semibold tracking-[0.02em] text-slate-600 transition-colors duration-300 hover:text-primary"
            data-testid="link-nav-contact"
          >
            {t("nav.contact")}
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="ml-2 gap-2 rounded-full border border-slate-200 bg-white/80 px-4 text-slate-600 shadow-sm transition-colors hover:text-primary"
                data-testid="button-language-switcher"
              >
                <Globe className="h-4 w-4" />
                {language.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[140px] rounded-2xl border-slate-200/80 p-2">
              <DropdownMenuItem
                className={`cursor-pointer rounded-xl font-medium ${language === "tr" ? "text-primary" : "text-slate-500"}`}
                onClick={() => setLanguage("tr")}
                data-testid="button-language-tr"
              >
                TR - Türkçe
              </DropdownMenuItem>
              <DropdownMenuItem
                className={`cursor-pointer rounded-xl font-medium ${language === "en" ? "text-primary" : "text-slate-500"}`}
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
            <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-l border-slate-200/70 bg-white/95 backdrop-blur-xl">
            <div className="flex flex-col gap-6 pt-10">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="cursor-pointer text-lg font-semibold text-slate-800"
                    onClick={() => setIsOpen(false)}
                    data-testid={`link-mobile-${link.href.replace("/", "") || "home"}`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}

              <a
                href="/#contact"
                className="text-lg font-semibold text-slate-800"
                onClick={() => setIsOpen(false)}
                data-testid="link-mobile-contact"
              >
                {t("nav.contact")}
              </a>

              <div className="my-2 h-px w-full bg-slate-200" />

              <div className="flex items-center gap-4">
                <Globe className="h-5 w-5 text-slate-500" />
                <div className="flex gap-4">
                  <button
                    type="button"
                    className={`text-lg font-semibold ${language === "tr" ? "text-primary" : "text-slate-500"}`}
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
                    className={`text-lg font-semibold ${language === "en" ? "text-primary" : "text-slate-500"}`}
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
