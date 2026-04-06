import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container relative z-10">
        <div className="grid gap-16 lg:grid-cols-5 items-center">
          <div className="lg:col-span-2">
            <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3 block">İletişim</span>
            <h2 className="mb-6 text-4xl font-extrabold md:text-5xl text-slate-900 tracking-tight">İş Ortaklığı İçin <br/><span className="text-primary">Adım Atın</span></h2>
            <p className="mb-10 text-lg text-slate-600 leading-relaxed">
              Global yedek parça tedarik zincirimizin bir parçası olmak, ürünlerimiz hakkında detaylı bilgi almak veya teklif istemek için uzman ekibimize ulaşın.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-5 items-start group">
                <div className="h-14 w-14 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200/60 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">E-posta</h3>
                  <p className="text-slate-600 mb-1">7/24 operasyonel destek için:</p>
                  <a href="mailto:info@globalvelo.com" className="text-primary font-medium hover:underline">info@globalvelo.com</a>
                </div>
              </div>
              
              <div className="flex gap-5 items-start group">
                <div className="h-14 w-14 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200/60 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">Telefon</h3>
                  <p className="text-slate-600 mb-1">Hafta içi 09:00 - 18:00 arası:</p>
                  <a href="tel:+902160000000" className="text-primary font-medium hover:underline">+90 (216) 000 00 00</a>
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="h-14 w-14 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200/60 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">Merkez Ofis</h3>
                  <p className="text-slate-600 leading-relaxed">
                    İçerenköy Mah. Kayışdağı Yolu Cad.<br />
                    Ataşehir, İstanbul / Türkiye
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Card className="p-8 md:p-10 shadow-2xl border-0 rounded-3xl bg-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>
              <h3 className="text-2xl font-bold mb-8 text-slate-900">Bize Ulaşın</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">Firma / Ad Soyad</label>
                    <Input id="name" placeholder="Örn: ABC Otomotiv Ltd." className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">Kurumsal E-posta</label>
                    <Input id="email" type="email" placeholder="ornek@sirket.com" className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Telefon Numarası</label>
                    <Input id="phone" placeholder="+90 (___) ___ __ __" className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="subject" className="text-sm font-semibold text-slate-700">İlgilendiğiniz Konu</label>
                    <Input id="subject" placeholder="Örn: Filtre Grubu Teklifi" className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700">Mesajınız ve Talepleriniz</label>
                  <Textarea id="message" placeholder="İhtiyaç duyduğunuz OEM numaralarını veya markaları belirtebilirsiniz..." className="min-h-[160px] bg-slate-50 border-slate-200 focus:bg-white transition-colors resize-none" />
                </div>
                <Button type="submit" size="lg" className="w-full h-14 text-base font-semibold shadow-lg shadow-primary/20 group mt-4">
                  Talebi Gönder
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