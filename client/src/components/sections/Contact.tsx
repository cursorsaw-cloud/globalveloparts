import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Contact() {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container relative z-10">
        <div className="grid gap-16 lg:grid-cols-5 items-center">
          <div className="lg:col-span-2">
            <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3 block">{t('contact.badge')}</span>
            <h2 className="mb-6 text-4xl font-extrabold md:text-5xl text-slate-900 tracking-tight">{t('contact.title1')} <br/><span className="text-primary">{t('contact.title2')}</span></h2>
            <p className="mb-10 text-lg text-slate-600 leading-relaxed">
              {t('contact.desc')}
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-5 items-start group">
                <div className="h-14 w-14 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200/60 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">{t('contact.email.title')}</h3>
                  <p className="text-slate-600 mb-1">{t('contact.email.desc')}</p>
                  <a href="mailto:info@globalvelo.com" className="text-primary font-medium hover:underline">info@globalvelo.com</a>
                </div>
              </div>
              
              <div className="flex gap-5 items-start group">
                <div className="h-14 w-14 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200/60 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">{t('contact.phone.title')}</h3>
                  <p className="text-slate-600 mb-1">{t('contact.phone.desc')}</p>
                  <a href="tel:+902160000000" className="text-primary font-medium hover:underline">+90 (216) 000 00 00</a>
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="h-14 w-14 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200/60 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">{t('contact.address.title')}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t('contact.address.desc1')}<br />
                    {t('contact.address.desc2')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Card className="p-8 md:p-10 shadow-2xl border-0 rounded-3xl bg-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>
              <h3 className="text-2xl font-bold mb-8 text-slate-900">{t('contact.form.title')}</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">{t('contact.form.name')}</label>
                    <Input id="name" placeholder={t('contact.form.name.ph')} className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">{t('contact.form.email')}</label>
                    <Input id="email" type="email" placeholder="ornek@sirket.com" className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700">{t('contact.form.phone')}</label>
                    <Input id="phone" placeholder="+90 (___) ___ __ __" className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="subject" className="text-sm font-semibold text-slate-700">{t('contact.form.subject')}</label>
                    <Input id="subject" placeholder={t('contact.form.subject.ph')} className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700">{t('contact.form.message')}</label>
                  <Textarea id="message" placeholder={t('contact.form.message.ph')} className="min-h-[160px] bg-slate-50 border-slate-200 focus:bg-white transition-colors resize-none" />
                </div>
                <Button type="submit" size="lg" className="w-full h-14 text-base font-semibold shadow-lg shadow-primary/20 group mt-4">
                  {t('contact.form.submit')}
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}