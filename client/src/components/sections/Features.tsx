import { Globe, ShieldCheck, Truck, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Global Ağ",
    description: "40'tan fazla ülkeye ihracat ve geniş tedarik zinciri ağı.",
    icon: Globe,
  },
  {
    title: "Orijinal Kalite",
    description: "OEM standartlarında sertifikalı ve garantili yedek parçalar.",
    icon: ShieldCheck,
  },
  {
    title: "Hızlı Lojistik",
    description: "Dünyanın her yerine güvenli ve zamanında teslimat garantisi.",
    icon: Truck,
  },
  {
    title: "Profesyonel Ekip",
    description: "Sektörde deneyimli uzman kadromuzla 7/24 destek.",
    icon: Users,
  },
];

export function Features() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-foreground">
            Neden Globalvelo?
          </h2>
          <p className="text-muted-foreground text-lg">
            Sektördeki tecrübemiz ve kalite odaklı yaklaşımımızla iş ortaklarımıza değer katıyoruz.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg bg-card hover:-translate-y-1 transition-transform duration-300">
              <CardHeader className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}