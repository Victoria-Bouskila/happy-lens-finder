import { motion } from "framer-motion";
import { Eye, Ear, Camera } from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Optique",
    description:
      "Un large choix de montures de grandes marques. Verres progressifs, unifocaux, solaires sur mesure. Conseil personnalisé et ajustement professionnel.",
  },
  {
    icon: Ear,
    title: "Audition",
    description:
      "Bilan auditif complet et appareillage sur mesure. Accompagnement dans le choix et le réglage de vos aides auditives.",
  },
  {
    icon: Camera,
    title: "Photos d'identité",
    description:
      "Photos d'identité conformes aux normes (passeport, CNI, permis). Service rapide et soigné en quelques minutes.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
            Nos Services
          </h2>
          <div className="h-1 w-16 bg-gradient-brand rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-glow transition-shadow duration-500 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
