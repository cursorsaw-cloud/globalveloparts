import { Link } from "wouter";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#about", label: "Hakkımızda" },
    { href: "#products", label: "Ürünler" },
    { href: "#global", label: "Global Ağımız" },
    { href: "#contact", label: "İletişim" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <a className="flex items-center gap-3">
              <img src="/logo.png" alt="Globalvelo Logo" className="h-10 w-10 object-contain" />
              <span className="font-heading text-xl font-bold tracking-tight text-primary">Globalvelo</span>
            </a>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Button>Teklif Al</Button>
        </div>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 pt-10">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="w-full">Teklif Al</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}