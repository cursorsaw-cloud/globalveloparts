import { useState } from "react";
import { 
  CircleDot, Filter, Settings, MoveVertical, Link2, 
  Zap, Snowflake, Settings2, Fuel, ChevronDown, ChevronUp,
  LayoutGrid, Layers
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

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

// Helper to get a brand logo using their official domain via Clearbit.
const getBrandDomain = (brandName: string) => {
  const domainMap: Record<string, string> = {
    "Brembo": "brembo.com",
    "Textar": "textar.com",
    "Ferodo": "ferodo.com",
    "Bosch": "boschaftermarket.com",
    "TRW": "trwaftermarket.com",
    "ATE": "ate-aftermarket.com",
    "Delphi": "delphiautoparts.com",
    "Jurid": "jurid.com",
    "Zimmermann": "ottoszimmermann.de",
    "Budweg": "budweg.com",
    "Frenkit": "frenkit.es",
    "Autofren": "seinsa.es",
    "Mann": "mann-filter.com",
    "Mahle": "mahle-aftermarket.com",
    "Hengst": "hengst.com",
    "Filtron": "filtron.eu",
    "Purflux": "purflux.com",
    "K&N": "knfilters.com",
    "Pipercross": "pipercross.net",
    "Castrol": "castrol.com",
    "Mobil": "mobil.com",
    "Liqui Moly": "liqui-moly.com",
    "Motul": "motul.com",
    "Victor Reinz": "victorreinz.com",
    "Elring": "elring.com",
    "Ajusa": "ajusa.es",
    "INA": "repxpert.com.tr",
    "FAG": "repxpert.com.tr",
    "LuK": "repxpert.com.tr",
    "Gates": "gates.com",
    "Dayco": "daycoaftermarket.com",
    "SKF": "skf.com",
    "Kolbenschmidt": "ms-motorservice.com",
    "Pierburg": "ms-motorservice.com",
    "Febi": "febi.com",
    "Lemförder": "aftermarket.zf.com",
    "Sachs": "aftermarket.zf.com",
    "ZF": "aftermarket.zf.com",
    "SNR": "ntn-snr.com",
    "Meyle": "meyle.com",
    "Bilstein": "bilstein.com",
    "KYB": "kyb-europe.com",
    "Monroe": "monroe.com",
    "Eibach": "eibach.com",
    "Lesjöfors": "lesjoforssprings.com",
    "Valeo": "valeoservice.com",
    "Hella": "hella.com",
    "Magneti Marelli": "magnetimarelli-parts-and-services.com",
    "NGK": "ngkntk.com",
    "Denso": "denso-am.eu",
    "Beru": "beruparts.com",
    "Nissens": "nissens.com",
    "Hepu": "hepu.de",
    "Wahler": "borgwarner.com",
    "BorgWarner": "borgwarner.com",
    "Varta": "varta-automotive.com",
    "Exide": "exidegroup.com",
    "Contitech": "continental-engineparts.com",
    "Garrett": "garrettmotion.com",
    "Bosal": "bosal.com",
    "Walker": "walker-exhaust.eu",
    "GKN": "gknautomotive.com"
  };
  return domainMap[brandName];
};

const getBrandLogo = (brandName: string) => {
  const domain = getBrandDomain(brandName);
  if (domain) {
    // Clearbit'ten en yüksek kalitede logo çekmek için size parametresi
    return `https://logo.clearbit.com/${domain}?size=800`;
  }
  
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(brandName)}&background=f8fafc&color=0f172a&font-size=0.33&size=800`;
};

export default function ProductsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { t } = useLanguage();

  const toggleCategory = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="py-20 container animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 font-heading">{t('prod.title')}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          {t('prod.desc')}
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
                      {cat.subCategories.length} {t('prod.subcats')} • {cat.brands.length} Marka
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
                  {t('prod.btn.details')}
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-6 pb-6 pt-2 border-t bg-slate-50/50">
                  
                  <div className="mb-8 mt-6">
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                      <LayoutGrid className="w-5 h-5 text-primary" />
                      {t('prod.subcats')}
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
                      {t('prod.brands')}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
                      {cat.brands.map((brand, idx) => (
                        <div 
                          key={idx} 
                          className="flex flex-col items-center justify-center p-4 sm:p-5 bg-white border rounded-xl hover:border-primary/40 hover:shadow-md transition-all duration-300 group shadow-sm"
                        >
                          <div className="h-20 sm:h-24 flex items-center justify-center w-full mb-3 transition-transform duration-300 group-hover:scale-105 p-2">
                            <img 
                              src={getBrandLogo(brand)} 
                              alt={`${brand} logo`} 
                              className="max-h-full max-w-full object-contain mix-blend-multiply"
                              style={{ 
                                objectFit: 'contain',
                                width: '100%',
                                height: '100%',
                                filter: 'contrast(1.05) grayscale(0.1)'
                              }}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                if (target.src.includes('clearbit')) {
                                  const domain = getBrandDomain(brand);
                                  if (domain) {
                                    target.src = `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${domain}&size=256`;
                                  }
                                } else {
                                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(brand)}&background=f8fafc&color=0f172a&font-size=0.33&size=800`;
                                }
                              }}
                            />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-center text-slate-700">{brand}</span>
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