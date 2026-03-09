import { MapPin } from "lucide-react";

const districts = [
  "Stuttgart-Mitte", "Bad Cannstatt", "Vaihingen", "Zuffenhausen", "Feuerbach",
  "Degerloch", "Möhringen", "Stammheim", "Untertürkheim", "Obertürkheim",
  "Münster", "Weilimdorf", "Botnang", "Sillenbuch", "Hedelfingen",
  "Wangen", "Berg", "Gaisburg", "Gablenberg", "Stuttgart-Ost",
  "Stuttgart-Nord", "Stuttgart-Süd", "Stuttgart-West",
];

const surrounding = [
  "Ludwigsburg", "Esslingen", "Sindelfingen", "Böblingen",
  "Leonberg", "Waiblingen", "Fellbach", "Kornwestheim",
];

const ServiceAreaSection = () => {
  return (
    <section id="einsatzgebiet" className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            <MapPin className="inline w-8 h-8 text-primary mr-2" />
            Unser Einsatzgebiet
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Wir sind in ganz Stuttgart und Umgebung für Sie im Einsatz – schnell, zuverlässig und zu fairen Preisen.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-bold text-foreground mb-4">Stuttgarter Stadtteile</h3>
          <div className="flex flex-wrap gap-2">
            {districts.map((d) => (
              <span
                key={d}
                className="inline-block bg-card border border-border px-3 py-1.5 rounded-lg text-sm text-foreground hover:border-primary/50 transition-colors"
              >
                {d}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-foreground mb-4">Umland & Region Stuttgart</h3>
          <div className="flex flex-wrap gap-2">
            {surrounding.map((s) => (
              <span
                key={s}
                className="inline-block bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-lg text-sm text-foreground font-medium"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="mt-6 text-muted-foreground text-sm">
            Ob Umzug in Bad Cannstatt, Entrümpelung in Vaihingen oder Haushaltsauflösung in Degerloch – Die Platzmacher sind Ihr lokaler Ansprechpartner für alle Stadtteile Stuttgarts und die umliegenden Städte wie Ludwigsburg, Esslingen, Böblingen und Sindelfingen. Kontaktieren Sie uns für ein kostenloses Angebot!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
