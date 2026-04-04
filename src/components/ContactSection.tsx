import { motion } from "framer-motion";
import { Phone, MapPin, Globe, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
            Nous Trouver
          </h2>
          <div className="h-1 w-16 bg-gradient-brand rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Adresse</h3>
                <p className="text-muted-foreground font-body">39 Rue Balard, 75015 Paris</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Téléphone</h3>
                <a href="tel:0144260624" className="text-muted-foreground font-body hover:text-primary transition-colors">
                  01 44 26 06 24
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Site web</h3>
                <a href="https://koptik.fr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground font-body hover:text-primary transition-colors">
                  koptik.fr
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Horaires</h3>
                <div className="text-muted-foreground font-body space-y-1 text-sm">
                  <p>Lundi – Vendredi : 10h00 – 19h00</p>
                  <p>Samedi : 10h00 – 19h00</p>
                  <p>Dimanche : Fermé</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-border h-80 md:h-full min-h-[320px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.5!2d2.2785!3d48.8415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6701b4f58251b%3A0x4ad0e5b1b4b5e8f0!2s39+Rue+Balard%2C+75015+Paris!5e0!3m2!1sfr!2sfr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="K Optik & Audition - Localisation"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
