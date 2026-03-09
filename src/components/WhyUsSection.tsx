import { Shield, Clock, BadgeEuro, ThumbsUp } from "lucide-react";

const usps = [
  {
    icon: BadgeEuro,
    title: "Faire Festpreise",
    text: "Keine versteckten Kosten. Sie erhalten einen verbindlichen Festpreis – ohne Überraschungen.",
  },
  {
    icon: Clock,
    title: "Kurzfristig verfügbar",
    text: "Schnelle Terminvergabe, oft innerhalb weniger Tage. Auch Notfall-Einsätze möglich.",
  },
  {
    icon: Shield,
    title: "Zuverlässig & versichert",
    text: "Professionelles Team mit Transportversicherung. Ihr Eigentum ist bei uns in sicheren Händen.",
  },
  {
    icon: ThumbsUp,
    title: "Besenreine Übergabe",
    text: "Nach getaner Arbeit hinterlassen wir alles sauber und ordentlich. Garantiert.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="vorteile" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Warum Die Platzmacher?
          </h2>
          <p className="text-muted-foreground text-lg">Das macht uns zu Ihrem idealen Partner in Stuttgart.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((u) => (
            <div key={u.title} className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <u.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{u.title}</h3>
              <p className="text-muted-foreground text-sm">{u.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
