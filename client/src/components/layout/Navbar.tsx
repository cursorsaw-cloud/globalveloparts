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
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.97),rgba(15,23,42,0.92))] shadow-[0_20px_60px_-36px_rgba(15,23,42,0.95)] backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/88">
      <div className="container flex min-h-[4.75rem] items-center justify-between gap-5 py-3">
        <Link href="/">
          <div className="flex cursor-pointer items-center" data-testid="link-home-logo">
            <img
              src="/logo-clean.png"
              alt="Globalvelo Logo"
              className="h-9 w-auto object-contain opacity-95 brightness-0 invert drop-shadow-[0_8px_22px_rgba(255,255,255,0.08)] sm:h-10"
              data-testid="img-globalvelo-logo"
            />
          </div>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`cursor-pointer text-sm font-semibold tracking-[0.08em] uppercase transition-colors duration-300 ${location === link.href ? "text-white" : "text-slate-300/78 hover:text-white"}`}
                data-testid={`link-nav-${link.href.replace("/", "") || "home"}`}
              >
                {link.label}
              </span>
            </Link>
          ))}

          <a
            href="/#contact"
            className="text-sm font-semibold tracking-[0.08em] uppercase text-slate-300/78 transition-colors duration-300 hover:text-white"
            data-testid="link-nav-contact"
          >
            {t("nav.contact")}
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="ml-1 h-10 rounded-full border border-white/12 bg-white/5 px-4 text-slate-100 hover:bg-white/10 hover:text-white"
                data-testid="button-language-switcher"
              >
                <Globe className="h-4 w-4" />
                {language.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[140px] rounded-2xl border-slate-700 bg-slate-950 p-2 text-slate-100">
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
            <div className="flex flex-col gap-6 pt-10">
              <img
                src="/logo-clean.png"
                alt="Globalvelo Logo"
                className="h-9 w-auto object-contain brightness-0 invert opacity-95"
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

              <div className="my-2 h-px w-full bg-white/10" />

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
