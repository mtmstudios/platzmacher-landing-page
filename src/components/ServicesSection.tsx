import { Truck, Trash2, Home, Building2, Package, Warehouse } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Umzüge in Stuttgart",
    id: "umzuege",
    description:
      "Ob Privatumzug oder Seniorenumzug – wir packen an! Von der Planung bis zum Aufbau am neuen Standort kümmern wir uns um alles. Professionell, pünktlich und zum fairen Festpreis in ganz Stuttgart und Umgebung.",
  },
  {
    icon: Trash2,
    title: "Entrümpelungen Stuttgart",
    id: "entruempelungen",
    description:
      "Keller voll? Dachboden überquellend? Wir entrümpeln schnell und fachgerecht. Inklusive Sortierung, Entsorgung und besenreiner Übergabe. Umweltgerechte Entsorgung garantiert.",
  },
  {
    icon: Home,
    title: "Haushaltsauflösung Stuttgart",
    id: "haushaltsaufloesung",
    description:
      "Bei Haushaltsauflösungen übernehmen wir die komplette Räumung Ihrer Wohnung oder Ihres Hauses in Stuttgart. Diskret, respektvoll und termingerecht – mit transparenter Preisgestaltung.",
  },
  {
    icon: Package,
    title: "Nachlassentrümpelung Stuttgart",
    id: "nachlassentruempelung",
    description:
      "Im Trauerfall kümmern wir uns einfühlsam um die Nachlassentrümpelung. Wertgegenstände werden sorgfältig aussortiert, der Rest fachgerecht entsorgt. Wir nehmen Ihnen diese Last ab.",
  },
  {
    icon: Building2,
    title: "Büroumzug Stuttgart",
    id: "bueroumzug",
    description:
      "Büroumzüge erfordern Planung und Effizienz. Wir minimieren Ihre Ausfallzeiten und transportieren Möbel, IT-Equipment und Akten sicher an den neuen Standort in Stuttgart.",
  },
  {
    icon: Warehouse,
    title: "Keller & Garagenräumung Stuttgart",
    id: "keller-garage",
    description:
      "Keller- und Garagenräumungen in Stuttgart – schnell, gründlich und preiswert. Wir entsorgen alten Hausrat, Sperrmüll und Gerümpel. Besenreine Übergabe inklusive.",
  },
];

const ServicesSection = () => {
  return (
    <section id="leistungen" className="py-16 md:py-24 bg-muted" aria-label="Unsere Leistungen">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Unsere Leistungen in Stuttgart
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Von Umzügen über Entrümpelungen bis hin zu kompletten Haushaltsauflösungen – wir sind Ihr zuverlässiger Partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground mb-3">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.description}</p>
              <a
                href="#kontakt"
                className="inline-block mt-4 text-sm font-semibold text-primary hover:underline"
              >
                Jetzt anfragen →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
