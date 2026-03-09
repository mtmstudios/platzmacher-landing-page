import { Truck, Trash2, Home, Building2, Package, Warehouse, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Umzüge in Stuttgart",
    id: "umzuege",
    keywords: "Privatumzug · Seniorenumzug · Fernumzug",
    description:
      "Ob Privatumzug, Seniorenumzug oder Fernumzug – wir packen an! Von der Planung über den Transport bis zum Aufbau am neuen Standort kümmern wir uns um alles. Professionell, pünktlich und zum fairen Festpreis in ganz Stuttgart und Umgebung.",
  },
  {
    icon: Trash2,
    title: "Entrümpelungen Stuttgart",
    id: "entruempelungen",
    keywords: "Keller · Dachboden · Wohnung",
    description:
      "Keller voll, Dachboden überquellend oder Wohnung zu entrümpeln? Wir entrümpeln schnell und fachgerecht – inklusive Sortierung, umweltgerechtem Abtransport und besenreiner Übergabe. Faire Preise garantiert.",
  },
  {
    icon: Home,
    title: "Haushaltsauflösung Stuttgart",
    id: "haushaltsauflosung",
    keywords: "Komplett · Diskret · Termingerecht",
    description:
      "Bei Haushaltsauflösungen übernehmen wir die komplette Räumung Ihrer Wohnung oder Ihres Hauses in Stuttgart. Diskret, respektvoll und termingerecht – mit transparenter Festpreisgestaltung und besenreiner Übergabe.",
  },
  {
    icon: Package,
    title: "Nachlassentrümpelung Stuttgart",
    id: "nachlassentruempelung",
    keywords: "Einfühlsam · Werterhaltend · Komplett",
    description:
      "Im Trauerfall kümmern wir uns einfühlsam um die Nachlassentrümpelung. Wertgegenstände werden sorgfältig aussortiert, der Rest fachgerecht und umweltgerecht entsorgt. Wir nehmen Ihnen diese schwere Last ab.",
  },
  {
    icon: Building2,
    title: "Büroumzug Stuttgart",
    id: "bueroumzug",
    keywords: "Gewerbe · IT-Equipment · Ausfallzeit minimal",
    description:
      "Büroumzüge erfordern Planung und Effizienz. Wir minimieren Ihre Ausfallzeiten und transportieren Büromöbel, IT-Equipment und Akten sicher an den neuen Standort – auch außerhalb der Geschäftszeiten möglich.",
  },
  {
    icon: Warehouse,
    title: "Keller & Garagenräumung",
    id: "keller-garage",
    keywords: "Sperrmüll · Hausrat · Schnell & günstig",
    description:
      "Keller- und Garagenräumungen in Stuttgart – schnell, gründlich und preiswert. Wir entsorgen alten Hausrat, Sperrmüll und Gerümpel fachgerecht und umweltgerecht. Besenreine Übergabe immer inklusive.",
  },
];

const ServicesSection = () => {
  return (
    <section id="leistungen" className="py-16 md:py-24 bg-muted" aria-labelledby="leistungen-heading">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="leistungen-heading" className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Unsere Leistungen in Stuttgart
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Von Umzügen über Entrümpelungen bis hin zu kompletten Haushaltsauflösungen –
            Ihr zuverlässiger Partner in Stuttgart und der ganzen Region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/40 transition-all group flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <s.icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{s.title}</h3>
              <p className="text-xs font-medium text-primary/70 mb-3 uppercase tracking-wide">{s.keywords}</p>
              <p className="text-muted-foreground leading-relaxed text-sm flex-1">{s.description}</p>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary hover:gap-2 transition-all"
                aria-label={`${s.title} anfragen`}
              >
                Jetzt anfragen
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
