import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/about", label: "Hakkımızda" },
    { href: "/products", label: "Ürünler" },
    { href: "/global", label: "Global Ağımız" },
    { href: "/#contact", label: "İletişim" },
  ];

  return (
    <>
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-xs sm:text-sm font-medium tracking-wide">
        SabancıDx Güvencesiyle
      </div>
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src="/logo.png" alt="Globalvelo Logo" className="h-12 w-auto object-contain" />
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
          <Button>Teklif Al</Button>
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
              <Button className="w-full">Teklif Al</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
    </>
  );
}