import { Shield, Clock, BadgeEuro, Sparkles, Leaf, HeartHandshake } from "lucide-react";

const usps = [
  {
    icon: BadgeEuro,
    title: "Faire Festpreise",
    text: "Kein böses Erwachen: Sie erhalten ein verbindliches Festpreisangebot – ohne versteckte Kosten, ohne Nachforderungen.",
  },
  {
    icon: Clock,
    title: "Kurzfristig verfügbar",
    text: "Schnelle Terminvergabe, oft innerhalb von 2–5 Werktagen. Auch Express-Einsätze bei dringendem Bedarf möglich.",
  },
  {
    icon: Shield,
    title: "Versichert & zuverlässig",
    text: "Professionelles Team mit Transportversicherung. Ihr Eigentum ist bei uns jederzeit sicher und gut geschützt.",
  },
  {
    icon: Sparkles,
    title: "Besenreine Übergabe",
    text: "Nach getaner Arbeit hinterlassen wir Ihre Räume sauber und ordentlich – besenreine Übergabe immer inklusive.",
  },
  {
    icon: Leaf,
    title: "Umweltgerechte Entsorgung",
    text: "Wir entsorgen Hausrat, Sperrmüll und Elektroschrott umweltgerecht nach allen geltenden Vorschriften.",
  },
  {
    icon: HeartHandshake,
    title: "Diskret & respektvoll",
    text: "Bei Haushaltsauflösungen und Nachlassentrümpelungen gehen wir stets diskret und mit größtem Respekt vor.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="vorteile" className="py-16 md:py-24 bg-background" aria-labelledby="vorteile-heading">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="vorteile-heading" className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Warum die Platzmacher?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Das macht uns zum idealen Partner für Ihren Umzug oder Ihre Entrümpelung in Stuttgart.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((u, i) => (
            <div
              key={u.title}
              className="flex gap-4 p-5 rounded-2xl bg-muted border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <u.icon className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-1">{u.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{u.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
