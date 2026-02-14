import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-slate-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/hero-bg.png" 
          alt="Automotive Parts Background" 
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
      </div>

      <div className="container relative flex h-full items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Otomotiv Dünyasında <br />
              <span className="text-primary">Global Güç</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-8 text-lg text-slate-300 md:text-xl">
              Uluslararası standartlarda otomotiv yedek parça tedariği ve lojistiği. 
              En kaliteli parçaları, dünyanın her noktasına ulaştırıyoruz.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button size="lg" className="text-lg h-14 px-8">
              Ürünleri İncele
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-14 px-8 bg-transparent text-white border-white hover:bg-white hover:text-slate-950">
              Bizimle İletişime Geçin <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}