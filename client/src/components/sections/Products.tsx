import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Motor Parçaları",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800",
    desc: "Piston, segman, silindir kapağı ve daha fazlası."
  },
  {
    title: "Fren Sistemleri",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=800",
    desc: "Diskler, balatalar, kaliperler ve ABS sensörleri."
  },
  {
    title: "Süspansiyon",
    image: "https://images.unsplash.com/photo-1552176625-e47ff529b595?auto=format&fit=crop&q=80&w=800",
    desc: "Amortisörler, yaylar ve alt takım bileşenleri."
  },
  {
    title: "Elektrik Aksamı",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800",
    desc: "Alternatörler, marş motorları ve sensörler."
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