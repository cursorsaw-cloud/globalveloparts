import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Bizimle İletişime Geçin</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Ürünlerimiz hakkında detaylı bilgi almak, teklif istemek veya iş ortaklığı için formumuzu doldurun. Ekibimiz en kısa sürede size dönüş yapacaktır.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Talep Oluşturun</h3>
                  <p className="text-muted-foreground">İhtiyacınız olan parçaları belirtin.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Teklif Alın</h3>
                  <p className="text-muted-foreground">En uygun fiyat ve teslimat seçeneklerini sunalım.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Hızlı Teslimat</h3>
                  <p className="text-muted-foreground">Global lojistik ağımızla ürünlerinizi teslim edelim.</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-6 md:p-8 shadow-xl border-t-4 border-t-primary">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Ad Soyad</label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">E-posta</label>
                  <Input id="email" type="email" placeholder="ornek@sirket.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Konu</label>
                <Input id="subject" placeholder="Bilgi alma / Sipariş" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Mesajınız</label>
                <Textarea id="message" placeholder="Size nasıl yardımcı olabiliriz?" className="min-h-[120px]" />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Gönder
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}