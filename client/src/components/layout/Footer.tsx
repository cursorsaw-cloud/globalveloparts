import { Link } from "wouter";
import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { GlobalVeloLogo } from "@/components/layout/GlobalVeloLogo";

export function Footer() {
  const { t } = useLanguage();

  const trustItems = [t("hero.trust.countries"), t("hero.trust.fast"), t("nav.assurance")];

  return (
    <footer className="border-t border-white/6 bg-slate-950 text-slate-200">
      <div className="section-shell py-16 md:py-20">
        <div className="grid gap-8 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)] p-7 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.95)] md:p-10 xl:grid-cols-[1.25fr_0.8fr_0.85fr_1fr] xl:gap-10">
          <div className="space-y-6">
            <div className="inline-flex rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <GlobalVeloLogo className="h-14 w-auto" />
            </div>
            <p className="max-w-md text-[0.98rem] leading-8 text-slate-400" data-testid="text-footer-description">
              {t("footer.desc")}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {trustItems.map((item, index) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300"
                  data-testid={`text-footer-trust-${index}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{t("footer.quick")}</h3>
            <ul className="space-y-3 text-[0.96rem] text-slate-300">
              <li>
                <Link href="/about" className="transition-colors hover:text-white" data-testid="link-footer-about">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/products" className="transition-colors hover:text-white" data-testid="link-footer-products">
                  {t("nav.products")}
                </Link>
              </li>
              <li>
                <Link href="/global" className="transition-colors hover:text-white" data-testid="link-footer-global">
                  {t("nav.global")}
                </Link>
              </li>
              <li>
                <a href="/#contact" className="transition-colors hover:text-white" data-testid="link-footer-contact">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{t("footer.connect")}</h3>
            <ul className="space-y-3 text-[0.96rem] text-slate-300">
              <li>
                <Link href="/neovelo-parts" className="transition-colors hover:text-white" data-testid="link-footer-neovelo">
                  {t("nav.neovelo")}
                </Link>
              </li>
              <li>
                <Link href="/sabancidx" className="transition-colors hover:text-white" data-testid="link-footer-sabancidx">
                  {t("nav.sabancidx")}
                </Link>
              </li>
              <li>
                <a
                  href="https://www.sabancidx.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  data-testid="link-footer-partner-site"
                >
                  {t("footer.connectPartner")}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/globalvelo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  data-testid="link-footer-linkedin"
                >
                  <Linkedin className="h-4 w-4" />
                  {t("footer.social.linkedin")}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{t("footer.contact")}</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="leading-7" data-testid="text-footer-address">
                  {t("contact.address.desc1")}
                  <br />
                  {t("contact.address.desc2")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a href="tel:+902160000000" className="transition-colors hover:text-white" data-testid="link-footer-phone">
                  +90 (216) 000 00 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <a href="mailto:info@globalvelo.com.tr" className="transition-colors hover:text-white" data-testid="link-footer-email">
                  info@globalvelo.com.tr
                </a>
              </li>
            </ul>

            <div className="space-y-3 text-sm text-slate-400">
              <a
                href="mailto:info@globalvelo.com.tr"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                data-testid="link-footer-cta-email"
              >
                <span>{t("footer.connectEmail")}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/#contact"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                data-testid="link-footer-cta-form"
              >
                <span>{t("footer.connectForm")}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-slate-800/90 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p data-testid="text-footer-copyright">© {new Date().getFullYear()} Globalvelo Otomotiv A.Ş. {t("footer.rights")}</p>
          <p className="text-slate-600" data-testid="text-footer-tagline">
            {t("footer.tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
