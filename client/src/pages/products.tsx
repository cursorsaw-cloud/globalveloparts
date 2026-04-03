export default function ProductsPage() {
  const allProducts = [
    { name: "Yüksek Performanslı Piston Seti", category: "Motor", brand: "Mahle", price: "Sorunuz" },
    { name: "Seramik Fren Diski", category: "Fren Sistemi", brand: "Brembo", price: "Sorunuz" },
    { name: "Adaptif Amortisör", category: "Süspansiyon", brand: "Sachs", price: "Sorunuz" },
    { name: "LED Far Grubu", category: "Elektrik & Aydınlatma", brand: "Hella", price: "Sorunuz" },
    { name: "Turboşarj Ünitesi", category: "Egzoz & Yakıt", brand: "Garrett", price: "Sorunuz" },
    { name: "Karbon Balata Takımı", category: "Fren Sistemi", brand: "Textar", price: "Sorunuz" },
    { name: "Triger Seti", category: "Kayış & Zincir", brand: "Gates", price: "Sorunuz" },
    { name: "Debriyaj Seti", category: "Debriyaj & Aktarma", brand: "LuK", price: "Sorunuz" },
    { name: "Yağ Filtresi", category: "Filtreler", brand: "Mann", price: "Sorunuz" },
    { name: "Su Pompası", category: "Soğutma & Isıtma", brand: "SKF", price: "Sorunuz" },
  ];

  return (
    <div className="py-20 container animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-4xl font-bold mb-8 font-heading">Ürün Kataloğumuz</h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
        Globalvelo olarak binlerce kalem orijinal ve OEM kalitesinde yedek parça stoğumuzla hizmetinizdeyiz. 
        Aşağıda ana kategorilerimizdeki öne çıkan ürünleri ve distribütörlüğünü yaptığımız markaları görebilirsiniz.
      </p>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allProducts.map((p, i) => (
          <div key={i} className="border p-6 rounded-xl hover:shadow-lg transition-shadow bg-card">
            <div className="flex justify-between items-start mb-2">
              <div className="text-xs font-bold text-primary uppercase">{p.category}</div>
              <div className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded">{p.brand}</div>
            </div>
            <h3 className="text-xl font-bold mb-4">{p.name}</h3>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Fiyat: {p.price}</span>
              <button className="text-primary font-medium hover:underline">Detaylar →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}