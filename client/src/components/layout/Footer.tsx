import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Globalvelo" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-slate-400 max-w-xs">
              Uluslararası otomotiv yedek parça ticaretinde güvenilir çözüm ortağınız.
              Dünya çapında tedarik zinciri yönetimi ve lojistik çözümleri.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Hızlı Erişim</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Ürünler</Link></li>
              <li><Link href="/global-network" className="hover:text-white transition-colors">Hizmet Bölgeleri</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">İletişim</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>Maslak Mah. Büyükdere Cad.<br />No: 123, Sarıyer, İstanbul</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span>+90 (212) 555 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span>info@globalvelo.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Bizi Takip Edin</h3>
            <div className="flex gap-4">
              <a href="#" className="rounded-full bg-slate-800 p-2 hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-slate-800 p-2 hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-slate-800 p-2 hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Globalvelo Otomotiv A.Ş. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}