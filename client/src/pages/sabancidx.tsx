import { Shield, Server, Zap, Globe, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SabanciDxPage() {
  return (
    <div className="py-20 container animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm border mb-8">
            <img 
              src="https://www.sabancidx.com/assets/images/logo.svg" 
              alt="SabancıDx Logo" 
              className="h-12 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://ui-avatars.com/api/?name=SabanciDx&background=0f172a&color=fff&size=120";
              }}
            />
            <span className="mx-4 text-2xl text-slate-300 font-light">|</span>
            <img src="/logo.png" alt="Globalvelo Logo" className="h-10 object-contain" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-slate-900">
            Dijital Dönüşümde Güçlü İş Ortaklığı
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Globalvelo olarak, global çaptaki tüm operasyonlarımızın teknolojik altyapısını Türkiye'nin lider dijital dönüşüm şirketi <strong>SabancıDx</strong> güvencesiyle sağlıyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 p-8 rounded-2xl border">
            <Shield className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">Üst Düzey Veri Güvenliği</h3>
            <p className="text-slate-600">
              Müşterilerimizin, bayilerimizin ve iş ortaklarımızın tüm verileri, SabancıDx'in siber güvenlik (Cyber Security) çözümleriyle korunmaktadır. Küresel veri standartlarına uygun, uçtan uca şifrelenmiş altyapı ile çalışıyoruz.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border">
            <Server className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">Kesintisiz B2B Altyapısı</h3>
            <p className="text-slate-600">
              Yedek parça tedarik ve sipariş yönetim sistemlerimiz, SabancıDx'in bulut bilişim (Cloud Computing) mimarisi üzerinde koşmaktadır. Bu sayede 7/24 kesintisiz, hızlı ve hatasız sipariş yönetimi sağlıyoruz.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border">
            <Globe className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">Küresel Entegrasyon</h3>
            <p className="text-slate-600">
              80'den fazla küresel marka ile olan entegrasyonlarımız, ileri veri analitiği ve yapay zeka (AI) destekli stok tahminleme sistemleri sayesinde kusursuz bir şekilde yönetilmektedir.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border">
            <Zap className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">Operasyonel Çeviklik</h3>
            <p className="text-slate-600">
              Dijitalleşme süreçlerimiz sayesinde, siparişten teslimata kadar geçen süre optimize edilmiş, lojistik operasyonlarımızda SabancıDx'in teknolojik vizyonu ile maksimum verimliliğe ulaşılmıştır.
            </p>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground rounded-3xl p-10 text-center relative overflow-hidden">
          <Cpu className="absolute -right-10 -bottom-10 w-64 h-64 text-white opacity-5" />
          <h2 className="text-3xl font-bold mb-4 relative z-10">Geleceğe Birlikte Yürüyoruz</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8 relative z-10">
            SabancıDx'in güçlü referansları arasında yer almaktan gurur duyuyor, otomotiv yedek parça sektöründe dijital standartları birlikte belirliyoruz.
          </p>
          <a href="https://www.sabancidx.com/" target="_blank" rel="noopener noreferrer" className="relative z-10">
            <Button variant="secondary" size="lg" className="font-semibold">
              SabancıDx'i Keşfedin
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}