import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Globe2, ShieldCheck, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center bg-slate-950 overflow-hidden">
      {/* Premium Background with Gradient & Texture */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Automotive Parts Background" 
          className="h-full w-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Decorative Light Beams */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-medium text-slate-300">Global Yedek Parça Tedarikçiniz</span>
            </div>
            
            <h1 className="mb-6 font-heading text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.1]">
              Otomotiv Dünyasında <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Global Güç</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <p className="mb-10 text-lg text-slate-300 md:text-xl font-light leading-relaxed max-w-2xl">
              Uluslararası standartlarda OEM garantili otomotiv yedek parça tedariği ve akıllı lojistik çözümleri. En kaliteli parçaları, dünyanın her noktasına kusursuz ulaştırıyoruz.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-4 sm:flex-row items-start"
          >
            <Button size="lg" className="text-base h-14 px-8 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all group">
              Ürünleri İncele
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-base h-14 px-8 rounded-full bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all group">
              Bizimle İletişime Geçin 
              <ChevronRight className="ml-1 h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-2xl"
          >
            <div className="flex items-center gap-3">
              <Globe2 className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium text-slate-300">40+ Ülke</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium text-slate-300">%100 Orijinal</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium text-slate-300">Hızlı Teslimat</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}