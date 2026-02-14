export default function GlobalNetworkPage() {
  return (
    <div className="py-20 container animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-4xl font-bold mb-8 font-heading">Global Ağımız</h1>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Globalvelo, Türkiye merkezli olmak üzere Avrupa, Orta Doğu, Asya ve Afrika pazarlarında aktif bir rol oynamaktadır. 
            40'tan fazla ülkeye yayılan geniş distribütör ağımız ve stratejik lojistik merkezlerimizle, yedek parça ihtiyacını sınır tanımadan karşılıyoruz.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-medium">Avrupa Lojistik Merkezi: Almanya</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-medium">Orta Doğu Dağıtım: Dubai</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-medium">Asya Pasifik Ofisi: Şangay</span>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 aspect-video rounded-2xl flex items-center justify-center text-white/20 font-bold text-2xl border border-white/10">
          [Global Harita Görseli]
        </div>
      </div>
    </div>
  );
}