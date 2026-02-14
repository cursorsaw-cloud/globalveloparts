import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="py-20 container animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-4xl font-bold mb-8 font-heading">Hakkımızda</h1>
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Globalvelo, otomotiv yedek parça sektöründe 20 yılı aşkın tecrübesiyle uluslararası arenada faaliyet gösteren öncü bir kuruluştur. 
          Misyonumuz, dünyanın dört bir yanındaki müşterilerimize en kaliteli yedek parçaları, en rekabetçi fiyatlarla ve en hızlı lojistik çözümleriyle ulaştırmaktır.
        </p>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="bg-muted p-8 rounded-xl border border-primary/10">
            <h3 className="text-xl font-bold mb-4 text-primary">Vizyonumuz</h3>
            <p className="text-muted-foreground">Otomotiv yedek parça tedariğinde global ölçekte en güvenilir ve yenilikçi çözüm ortağı olmak.</p>
          </div>
          <div className="bg-muted p-8 rounded-xl border border-primary/10">
            <h3 className="text-xl font-bold mb-4 text-primary">Değerlerimiz</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Kalite Odaklılık</li>
              <li>Müşteri Memnuniyeti</li>
              <li>Etik Ticaret</li>
              <li>Global İşbirliği</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}