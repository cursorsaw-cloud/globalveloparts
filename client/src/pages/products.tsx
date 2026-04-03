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

// Helper to get a brand logo using their official domain or clearbit fallback.
const getBrandLogo = (brandName: string) => {
  const customLogos: Record<string, string> = {
    "Brembo": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=65",
    "Textar": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=39",
    "Ferodo": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=62",
    "Bosch": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=30",
    "TRW": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=161",
    "ATE": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=3",
    "Delphi": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=89",
    "Jurid": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=64",
    "Zimmermann": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=162",
    "Budweg": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=102",
    "Castrol": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=10332",
    "Liqui Moly": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=10274",
    "Motul": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=10291",
    "Febi": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=101",
    "Mann": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=4",
    "Mahle": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=219",
    "Hengst": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=121",
    "Filtron": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=108",
    "K&N": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=10061",
    "Mobil": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=10336",
    "Victor Reinz": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=35",
    "Elring": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=10",
    "Ajusa": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=105",
    "INA": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=194",
    "Gates": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=33",
    "Dayco": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=42",
    "SKF": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=50",
    "Kolbenschmidt": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=128",
    "Pierburg": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=129",
    "Lemförder": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=35",
    "FAG": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=314",
    "SNR": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=55",
    "Meyle": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=144",
    "Bilstein": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=16",
    "Sachs": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=32",
    "KYB": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=85",
    "Monroe": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=37",
    "Eibach": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=112",
    "Lesjöfors": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=208",
    "Contitech": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=118",
    "Valeo": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=21",
    "Hella": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=2",
    "Magneti Marelli": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=140",
    "NGK": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=15",
    "Denso": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=66",
    "Beru": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=11",
    "Varta": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=10103",
    "Exide": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=10134",
    "Nissens": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=117",
    "Hepu": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=110",
    "Wahler": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=160",
    "LuK": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=6",
    "GKN": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=141",
    "ZF": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=346",
    "Garrett": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=10041",
    "BorgWarner": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=10168",
    "Bosal": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=28",
    "Walker": "https://cdn.onlinecarparts.co.uk/thumb?m=1&id=58"
  };

  // Use onlinecarparts CDN if available
  if (customLogos[brandName]) {
    return customLogos[brandName];
  }

  // Fallback to clearbit for brands that might be missing from the list above
  const domainMap: Record<string, string> = {
    "Frenkit": "frenkit.es",
    "Autofren": "autofrenseinsa.com",
    "Purflux": "purflux.com",
    "Pipercross": "pipercross.com"
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