import { motion } from "framer-motion";
import storeInterior from "@/assets/store-interior.png";
import storeOffice from "@/assets/store-office.png";
import storeExterior from "@/assets/store-exterior.png";
import storeWide from "@/assets/store-wide.png";

const images = [
  { src: storeExterior, alt: "Devanture K Optik - Rue Balard" },
  { src: storeInterior, alt: "Intérieur du magasin - collection de montures" },
  { src: storeWide, alt: "Vue panoramique du magasin" },
  { src: storeOffice, alt: "Espace consultation et audioprothèse" },
];

const GallerySection = () => {
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
            Notre Boutique
          </h2>
          <div className="h-1 w-16 bg-gradient-brand rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
