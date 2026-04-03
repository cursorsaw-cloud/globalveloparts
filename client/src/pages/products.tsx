import { useState } from "react";
import { 
  CircleDot, Filter, Settings, MoveVertical, Link2, 
  Zap, Snowflake, Settings2, Fuel, ChevronDown, ChevronUp,
  LayoutGrid, Layers
} from "lucide-react";

const categoriesData = [
  {
    id: "fren",
    name: "Fren Sistemi",
    icon: CircleDot,
    subCategories: ["Balata", "Disk", "Kaliper", "Hidrolik", "ABS", "Hortum"],
    brands: ["Brembo", "Textar", "Ferodo", "Bosch", "TRW", "ATE", "Delphi", "Jurid", "Zimmermann", "Budweg", "Castrol", "Liqui Moly", "Motul", "Frenkit", "Autofren", "Febi"]
  },
  {
    id: "filtre",
    name: "Filtreler",
    icon: Filter,
    subCategories: ["Yağ", "Hava", "Polen", "Yakıt", "Performans"],
    brands: ["Mann", "Mahle", "Bosch", "Hengst", "Filtron", "Purflux", "Delphi", "K&N", "Pipercross"]
  },
  {
    id: "motor",
    name: "Motor Parçaları",
    icon: Settings,
    subCategories: ["Yağ", "Conta", "Zamanlama", "Piston", "Pompa"],
    brands: ["Castrol", "Mobil", "Liqui Moly", "Victor Reinz", "Elring", "Ajusa", "INA", "Gates", "Dayco", "SKF", "Mahle", "Kolbenschmidt", "Pierburg", "Febi"]
  },
  {
    id: "suspansiyon",
    name: "Süspansiyon & Sönümleme",
    icon: MoveVertical,
    subCategories: ["Salıncak", "Rot", "Rulman", "Amortisör", "Yay"],
    brands: ["Lemförder", "TRW", "Delphi", "SKF", "FAG", "SNR", "Febi", "Meyle", "Bilstein", "Sachs", "KYB", "Monroe", "Eibach", "Lesjöfors"]
  },
  {
    id: "kayis",
    name: "Kayış & Zincir",
    icon: Link2,
    subCategories: ["Triger Seti", "V Kayışı", "Gergi"],
    brands: ["INA", "Gates", "Dayco", "Contitech", "SKF"]
  },
  {
    id: "elektrik",
    name: "Elektrik & Aydınlatma",
    icon: Zap,
    subCategories: ["Far", "Silecek", "Ateşleme", "Akü", "Röle"],
    brands: ["Valeo", "Hella", "Bosch", "Magneti Marelli", "NGK", "Denso", "Beru", "Varta", "Exide"]
  },
  {
    id: "sogutma",
    name: "Soğutma & Isıtma",
    icon: Snowflake,
    subCategories: ["Radyatör", "Pompa", "Termostat"],
    brands: ["Valeo", "Nissens", "SKF", "Hepu", "Mahle", "Wahler"]
  },
  {
    id: "debriyaj",
    name: "Debriyaj & Aktarma",
    icon: Settings2,
    subCategories: ["Debriyaj Seti", "Volan", "Aks", "Şanzıman"],
    brands: ["LuK", "Sachs", "Valeo", "GKN", "SKF", "Febi", "Meyle", "ZF", "Liqui Moly"]
  },
  {
    id: "egzoz",
    name: "Egzoz & Yakıt",
    icon: Fuel,
    subCategories: ["Turbo", "EGR", "Enjektör", "Yakıt Pompası"],
    brands: ["Garrett", "BorgWarner", "Pierburg", "Valeo", "Bosal", "Walker", "Bosch", "Delphi", "Denso"]
  }
];

// Helper to get a brand logo. We try clearbit first, and fallback to a generated avatar.
// In a real app with onlinecarparts.co.uk integration, we'd map brand names to their specific IDs.
const getBrandLogo = (brandName: string) => {
  const domainMap: Record<string, string> = {
    "Brembo": "brembo.com",
    "Bosch": "bosch.com",
    "Valeo": "valeo.com",
    "Mahle": "mahle.com",
    "SKF": "skf.com",
    "TRW": "trwaftermarket.com",
    "Hella": "hella.com",
    "Gates": "gates.com",
    "LuK": "schaeffler.com",
    "Sachs": "zf.com",
    "Mann": "mann-filter.com",
    "Castrol": "castrol.com",
    "Mobil": "mobil.com",
    "Liqui Moly": "liqui-moly.com",
    "Garrett": "garrettmotion.com"
  };
  
  const domain = domainMap[brandName];
  if (domain) {
    return `https://logo.clearbit.com/${domain}`;
  }
  
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(brandName)}&background=f8fafc&color=0f172a&font-size=0.33`;
};

export default function ProductsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="py-20 container animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 font-heading">Ürün Kategorileri & Markalar</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Globalvelo olarak, dünyanın önde gelen otomotiv yedek parça üreticileriyle çalışıyoruz.
          Aşağıdaki kategorilerden ürün gruplarını ve distribütörlüğünü yaptığımız markaları inceleyebilirsiniz.
        </p>
      </div>
      
      <div className="grid gap-6">
        {categoriesData.map((cat) => {
          const isExpanded = expandedId === cat.id;
          const Icon = cat.icon;
          
          return (
            <div 
              key={cat.id} 
              className={`border rounded-xl transition-all duration-300 bg-card overflow-hidden ${
                isExpanded ? "shadow-md ring-1 ring-primary/20" : "hover:shadow-sm"
              }`}
            >
              {/* Header / Clickable Area */}
              <div 
                className="p-6 flex items-center justify-between cursor-pointer select-none"
                onClick={() => toggleCategory(cat.id)}
                data-testid={`category-header-${cat.id}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg transition-colors ${isExpanded ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{cat.name}</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      {cat.subCategories.length} Alt Kategori • {cat.brands.length} Marka
                    </p>
                  </div>
                </div>
                <button 
                  className="flex items-center gap-2 text-primary font-medium px-4 py-2 hover:bg-muted rounded-md transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCategory(cat.id);
                  }}
                  data-testid={`button-details-${cat.id}`}
                >
                  Detaylar
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-6 pb-6 pt-2 border-t bg-slate-50/50">
                  
                  <div className="mb-8 mt-6">
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                      <LayoutGrid className="w-5 h-5 text-primary" />
                      Alt Kategoriler
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.subCategories.map((sub, idx) => (
                        <span 
                          key={idx} 
                          className="px-4 py-2 bg-white border rounded-full text-sm font-medium shadow-sm"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                      <Layers className="w-5 h-5 text-primary" />
                      Tedarikçi Markalar
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {cat.brands.map((brand, idx) => (
                        <div 
                          key={idx} 
                          className="flex flex-col items-center justify-center p-4 bg-white border rounded-xl hover:border-primary/50 hover:shadow-sm transition-all"
                        >
                          <div className="h-12 flex items-center justify-center w-full mb-3">
                            <img 
                              src={getBrandLogo(brand)} 
                              alt={`${brand} logo`} 
                              className="max-h-full max-w-full object-contain mix-blend-multiply"
                              onError={(e) => {
                                // Fallback if clearbit fails
                                const target = e.target as HTMLImageElement;
                                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(brand)}&background=f8fafc&color=0f172a&font-size=0.33`;
                              }}
                            />
                          </div>
                          <span className="text-sm font-medium text-center">{brand}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}