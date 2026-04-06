import { Link, useLocation } from "wouter";
import { Menu, Globe } from "lucide-react";
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
    { href: "/about", label: t('nav.about') },
    { href: "/products", label: t('nav.products') },
    { href: "/global", label: t('nav.global') },
    { href: "/sabancidx", label: t('nav.sabancidx') },
    { href: "/#contact", label: t('nav.contact') },
  ];

  return (
    <>
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-xs sm:text-sm font-medium tracking-wide">
        {t('nav.assurance')}
      </div>
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex py-4 items-center justify-between min-h-[5rem]">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src="/logo.png" alt="Globalvelo Logo" className="h-20 sm:h-24 w-auto object-contain" />
            </div>
          </Link>
        </div>

        <div className="hidden md:flex md:items-center md:gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${location === link.href ? 'text-primary' : 'text-muted-foreground'}`}>
                {link.label}
              </span>
            </Link>
          ))}
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary focus-visible:ring-0 focus-visible:ring-offset-0 font-medium ml-2">
                <Globe className="h-4 w-4" />
                {language.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[120px]">
              <DropdownMenuItem 
                className={`cursor-pointer font-medium ${language === 'tr' ? 'text-primary' : 'text-muted-foreground'}`}
                onClick={() => setLanguage('tr')}
              >
                TR - Türkçe
              </DropdownMenuItem>
              <DropdownMenuItem 
                className={`cursor-pointer font-medium ${language === 'en' ? 'text-primary' : 'text-muted-foreground'}`}
                onClick={() => setLanguage('en')}
              >
                EN - English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 pt-10">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="text-lg font-medium cursor-pointer" onClick={() => setIsOpen(false)}>
                    {link.label}
                  </span>
                </Link>
              ))}
              
              <div className="h-px bg-border my-2 w-full"></div>
              
              <div className="flex items-center gap-4">
                <Globe className="h-5 w-5 text-muted-foreground" />
                <div className="flex gap-4">
                  <span 
                    className={`text-lg font-medium cursor-pointer ${language === 'tr' ? 'text-primary' : 'text-muted-foreground'}`}
                    onClick={() => {
                      setLanguage('tr');
                      setIsOpen(false);
                    }}
                  >
                    TR
                  </span>
                  <span 
                    className={`text-lg font-medium cursor-pointer ${language === 'en' ? 'text-primary' : 'text-muted-foreground'}`}
                    onClick={() => {
                      setLanguage('en');
                      setIsOpen(false);
                    }}
                  >
                    EN
                  </span>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
    </>
  );
}