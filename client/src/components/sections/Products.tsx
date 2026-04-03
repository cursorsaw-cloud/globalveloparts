import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Fren Sistemi",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=800",
    desc: "Balata, Disk, Kaliper, Hidrolik, ABS, Hortum."
  },
  {
    title: "Filtreler",
    image: "https://images.unsplash.com/photo-1622204558230-010e979a02fb?auto=format&fit=crop&q=80&w=800",
    desc: "Yağ, Hava, Polen, Yakıt, Performans."
  },
  {
    title: "Motor Parçaları",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800",
    desc: "Yağ, Conta, Zamanlama, Piston, Pompa."
  },
  {
    title: "Süspansiyon & Sönümleme",
    image: "https://images.unsplash.com/photo-1552176625-e47ff529b595?auto=format&fit=crop&q=80&w=800",
    desc: "Salıncak, Rot, Rulman, Amortisör, Yay."
  },
  {
    title: "Kayış & Zincir",
    image: "https://images.unsplash.com/photo-1616422285623-1384f5bc93cd?auto=format&fit=crop&q=80&w=800",
    desc: "Triger Seti, V Kayışı, Gergi."
  },
  {
    title: "Elektrik & Aydınlatma",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800",
    desc: "Far, Silecek, Ateşleme, Akü, Röle."
  },
  {
    title: "Soğutma & Isıtma",
    image: "https://images.unsplash.com/photo-1622322339893-6c7d242ef99a?auto=format&fit=crop&q=80&w=800",
    desc: "Radyatör, Pompa, Termostat."
  },
  {
    title: "Debriyaj & Aktarma",
    image: "https://images.unsplash.com/photo-1588616149298-6a56e7e01d16?auto=format&fit=crop&q=80&w=800",
    desc: "Debriyaj Seti, Volan, Aks, Şanzıman."
  },
];

export function Products() {
  return (
    <section id="products" className="py-20 bg-muted/50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ürün Kategorileri</h2>
            <p className="text-muted-foreground text-lg">
              Geniş ürün yelpazemizle her türlü araç grubu için kaliteli yedek parça çözümleri sunuyoruz.
            </p>
          </div>
          <Button variant="outline" size="lg">Tüm Kataloğu İndir</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-background shadow-md">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
                <p className="text-sm text-slate-300 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}