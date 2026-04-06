import { Globe, ShieldCheck, Truck, Users, Award, Zap, Server, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Global Tedarik Ağı",
    description: "40'tan fazla ülkeye ihracat kapasitesi ve dünyanın önde gelen otomotiv markalarıyla güçlü tedarik zinciri ortaklıkları.",
    icon: Globe,
  },
  {
    title: "Orijinal ve OEM Kalitesi",
    description: "Tüm yedek parçalarımız uluslararası kalite standartlarına (ISO/TS) uygun, sertifikalı ve üretici garantisi altındadır.",
    icon: ShieldCheck,
  },
  {
    title: "Hızlı Lojistik Çözümleri",
    description: "Modern depolama altyapımız sayesinde dünyanın her noktasına güvenli, sigortalı ve zamanında teslimat garantisi sunuyoruz.",
    icon: Truck,
  },
  {
    title: "Uzman Destek Ekibi",
    description: "Sektörde yılların deneyimine sahip uzman kadromuzla iş ortaklarımıza 7/24 teknik ve operasyonel destek sağlıyoruz.",
    icon: Users,
  },
];

export function Features() {
  return (
    <section id="about" className="py-24 bg-slate-50 border-t border-slate-200/60 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      
      <div className="container relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3 block">Kurumsal Değerlerimiz</span>
          <h2 className="mb-6 text-4xl font-extrabold md:text-5xl text-slate-900 tracking-tight">
            Neden Globalvelo?
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Sektördeki köklü tecrübemiz, yenilikçi lojistik altyapımız ve tavizsiz kalite odaklı yaklaşımımızla global iş ortaklarımıza sürdürülebilir değer katıyoruz.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-slate-200/60 shadow-md bg-white hover:-translate-y-2 hover:shadow-xl transition-all duration-400 group">
              <CardHeader className="space-y-5 pb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm border border-slate-200/50">
                  <feature.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Statistics / Trust indicators */}
        <div className="mt-20 pt-10 border-t border-slate-200/60 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-extrabold text-primary mb-2">40+</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">İhracat Ülkesi</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-primary mb-2">80+</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Global Marka</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-primary mb-2">15k+</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Ürün Çeşidi</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-primary mb-2">%100</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">OEM Kalitesi</div>
          </div>
        </div>
      </div>
    </section>
  );
}