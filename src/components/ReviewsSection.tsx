import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Mariame Sylla",
    text: "Merci à Bertrand pour son accueil et sa gentillesse !! Allez voir leurs choix de montures incroyable",
    rating: 5,
  },
  {
    name: "Cyril Botrus",
    text: "Super lieu pour faire des photos d'identité et bien sûr des lunettes. Bertrand est très agréable et professionnel !",
    rating: 5,
  },
  {
    name: "Sarjo Mohammed",
    text: "Un service exceptionnel ! Professionnel, à l'écoute et vraiment passionné par son métier, il a su répondre à toutes mes questions avec patience et précision.",
    rating: 5,
  },
  {
    name: "Axelle Bouskila",
    text: "Extraordinaire opticien compétent et à l'écoute de ses clients, très large choix de montures et accueil tellement agréable ! Je recommande à 10000% !",
    rating: 5,
  },
  {
    name: "Jean François",
    text: "Je remercie Bertrand très bon opticien pour ses conseils et son expérience. J'ai pu avoir ma lunettes prête en seulement 2 jours.",
    rating: 5,
  },
  {
    name: "Igor",
    text: "Fidèle depuis l'ouverture et jusqu'à la retraite. Accueil et conseil toujours parfait.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-5xl font-heading font-black text-foreground">4,6</span>
            <div className="text-left">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i <= 4 ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground text-sm font-body">75 avis Google</span>
            </div>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
            Ce que disent nos clients
          </h2>
          <div className="h-1 w-16 bg-gradient-brand rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground font-body leading-relaxed mb-4 text-sm">
                "{review.text}"
              </p>
              <span className="text-muted-foreground font-heading font-semibold text-sm">
                {review.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
