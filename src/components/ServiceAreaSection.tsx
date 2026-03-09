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
    <section id="einsatzgebiet" className="py-16 md:py-24 bg-muted" aria-labelledby="einsatzgebiet-heading">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="einsatzgebiet-heading" className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            <MapPin className="inline w-7 h-7 text-primary mr-2 -mt-1" aria-hidden="true" />
            Unser Einsatzgebiet
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Wir sind in <strong>ganz Stuttgart und Umgebung</strong> für Sie im Einsatz –
            schnell, zuverlässig und zu fairen Festpreisen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary inline-block" aria-hidden="true" />
              Stuttgarter Stadtteile
            </h3>
            <div className="flex flex-wrap gap-2">
              {districts.map((d) => (
                <a
                  key={d}
                  href="#kontakt"
                  className="inline-block bg-card border border-border px-3 py-1.5 rounded-lg text-sm text-foreground hover:border-primary/50 hover:text-primary hover:bg-accent transition-colors"
                  title={`Umzug & Entrümpelung ${d}`}
                >
                  {d}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary/50 inline-block" aria-hidden="true" />
              Umland & Region Stuttgart
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {surrounding.map((s) => (
                <a
                  key={s}
                  href="#kontakt"
                  className="inline-block bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-lg text-sm text-foreground font-medium hover:bg-primary/20 transition-colors"
                  title={`Umzug & Entrümpelung ${s}`}
                >
                  {s}
                </a>
              ))}
            </div>
            <div className="bg-card border border-border rounded-2xl p-5 text-sm text-muted-foreground leading-relaxed">
              <p>
                Ob <strong className="text-foreground">Umzug in Bad Cannstatt</strong>,{" "}
                <strong className="text-foreground">Entrümpelung in Vaihingen</strong> oder{" "}
                <strong className="text-foreground">Haushaltsauflösung in Degerloch</strong> –
                die Platzmacher sind Ihr lokaler Ansprechpartner für alle Stuttgarter Stadtteile
                und die umliegenden Städte wie Ludwigsburg, Esslingen, Böblingen und Sindelfingen.
              </p>
              <a href="#kontakt" className="inline-block mt-3 text-primary font-semibold hover:underline text-sm">
                Kostenlos anfragen →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
