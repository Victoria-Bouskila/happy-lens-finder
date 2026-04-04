import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import storeNight from "@/assets/store-night.png";
import logo from "@/assets/logo-koptik.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={storeNight}
          alt="K Optik & Audition - Vue extérieure de nuit"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-brand rounded-full" />
            <span className="text-muted-foreground font-body text-sm tracking-widest uppercase">
              Opticien & Audioprothésiste
            </span>
          </div>

          <h1 className="mb-8 flex items-baseline gap-3 md:gap-4">
            <span className="font-heading font-black text-6xl md:text-8xl lg:text-9xl leading-none text-primary">K</span>
            <div className="flex flex-col leading-none">
              <span className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl tracking-wider text-foreground">OPTIK</span>
              <span className="font-heading font-light text-lg md:text-2xl lg:text-3xl tracking-widest text-muted-foreground">& AUDITION</span>
            </div>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 font-body font-light leading-relaxed">
            Votre opticien de confiance au cœur du 15ème arrondissement de Paris.
            Expertise, écoute et un large choix de montures depuis plus de 10 ans.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="tel:0144260624"
              className="inline-flex items-center gap-3 bg-gradient-brand px-8 py-4 rounded-lg text-primary-foreground font-heading font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              01 44 26 06 24
            </a>
            <a
              href="https://maps.google.com/?q=39+Rue+Balard+75015+Paris"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-border px-8 py-4 rounded-lg text-foreground font-heading font-semibold text-sm tracking-wide hover:bg-secondary transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Itinéraire
            </a>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground font-body">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Ouvert · Ferme à 19:00</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>39 Rue Balard, 75015 Paris</span>
            </div>
          </div>
        </motion.div>

        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute top-20 right-8 md:right-16 bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hidden md:block"
        >
          <div className="text-4xl font-heading font-black text-foreground">4,6</div>
          <div className="flex gap-0.5 justify-center my-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className={`text-lg ${i <= 4 ? "text-primary" : "text-muted-foreground/30"}`}>★</span>
            ))}
          </div>
          <div className="text-muted-foreground text-sm font-body">75 avis Google</div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
