export default function ProductsPage() {
  const allProducts = [
    { name: "Yüksek Performanslı Piston Seti", category: "Motor", price: "Sorunuz" },
    { name: "Seramik Fren Diski", category: "Fren", price: "Sorunuz" },
    { name: "Adaptif Amortisör", category: "Süspansiyon", price: "Sorunuz" },
    { name: "LED Far Grubu", category: "Elektrik", price: "Sorunuz" },
    { name: "Turboşarj Ünitesi", category: "Motor", price: "Sorunuz" },
    { name: "Karbon Balata Takımı", category: "Fren", price: "Sorunuz" },
  ];

  return (
    <div className="py-20 container animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-4xl font-bold mb-8 font-heading">Ürün Kataloğumuz</h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
        Globalvelo olarak binlerce kalem orijinal ve OEM kalitesinde yedek parça stoğumuzla hizmetinizdeyiz. 
        Aşağıda ana kategorilerimizdeki öne çıkan ürünleri görebilirsiniz.
      </p>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allProducts.map((p, i) => (
          <div key={i} className="border p-6 rounded-xl hover:shadow-lg transition-shadow bg-card">
            <div className="text-xs font-bold text-primary uppercase mb-2">{p.category}</div>
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