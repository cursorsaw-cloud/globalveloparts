import { Link } from "wouter";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="container py-14 md:py-18">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1fr_1fr]">
          <div className="space-y-5">
            <div className="inline-flex rounded-[1.6rem] border border-white/10 bg-white/[0.04] px-5 py-4 shadow-[0_22px_60px_-32px_rgba(15,23,42,0.9)] backdrop-blur-sm">
              <img
                src="/logo-clean.png"
                alt="GlobalVelo Spare Parts Logo"
                className="h-16 w-auto object-contain drop-shadow-[0_18px_38px_rgba(15,23,42,0.35)]"
                data-testid="img-footer-logo"
              />
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-400" data-testid="text-footer-description">
              {t("footer.desc")}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">{t("footer.quick")}</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/about" className="transition-colors hover:text-white" data-testid="link-footer-about">{t("nav.about")}</Link></li>
              <li><Link href="/products" className="transition-colors hover:text-white" data-testid="link-footer-products">{t("nav.products")}</Link></li>
              <li><Link href="/neovelo-parts" className="transition-colors hover:text-white" data-testid="link-footer-neovelo">{t("nav.neovelo")}</Link></li>
              <li><Link href="/global" className="transition-colors hover:text-white" data-testid="link-footer-global">{t("nav.global")}</Link></li>
              <li><a href="/#contact" className="transition-colors hover:text-white" data-testid="link-footer-contact">{t("nav.contact")}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">{t("footer.contact")}</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span data-testid="text-footer-address">{t("contact.address.desc1")}<br />{t("contact.address.desc2")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a href="tel:+902160000000" className="transition-colors hover:text-white" data-testid="link-footer-phone">+90 (216) 000 00 00</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <a href="mailto:info@globalvelo.com.tr" className="transition-colors hover:text-white" data-testid="link-footer-email">info@globalvelo.com.tr</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">{t("footer.connect")}</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <a
                href="mailto:info@globalvelo.com.tr"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                data-testid="link-footer-cta-email"
              >
                <span>{t("footer.connectEmail")}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/#contact"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                data-testid="link-footer-cta-form"
              >
                <span>{t("footer.connectForm")}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.sabancidx.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                data-testid="link-footer-cta-sabancidx"
              >
                <span>{t("footer.connectPartner")}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500" data-testid="text-footer-copyright">
          © {new Date().getFullYear()} Globalvelo Otomotiv A.Ş. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
