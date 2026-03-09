import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Was kostet ein Umzug in Stuttgart?",
    a: "Die Kosten hängen von der Wohnungsgröße, Etage, Entfernung und dem benötigten Aufwand ab. Kleine Umzüge starten ab ca. 300€, größere Umzüge werden individuell berechnet. Wir bieten verbindliche Festpreise – keine versteckten Kosten. Fordern Sie jetzt kostenlos ein Angebot an!",
  },
  {
    q: "Was kostet eine Entrümpelung in Stuttgart?",
    a: "Entrümpelungen beginnen ab ca. 150€ für einen Kellerraum. Der genaue Preis richtet sich nach Volumen, Zugänglichkeit und Entsorgungsaufwand. Wir kommen kostenlos vorbei, begutachten die Situation und erstellen ein verbindliches Festpreisangebot.",
  },
  {
    q: "Wie schnell können Sie einen Termin anbieten?",
    a: "In der Regel können wir innerhalb von 2–5 Werktagen starten. Bei dringenden Anfragen – z.B. bei Wohnungsübergaben oder akuten Situationen – sind auch Express-Termine kurzfristig möglich. Rufen Sie uns einfach an!",
  },
  {
    q: "Was ist bei einer Entrümpelung alles inklusive?",
    a: "Unsere Entrümpelung umfasst das Ausräumen, Sortieren von Wertgegenständen, den Abtransport und die umweltgerechte Entsorgung. Besenreine Übergabe ist immer inklusive – Sie müssen sich um nichts kümmern.",
  },
  {
    q: "Sind Sie in ganz Stuttgart tätig?",
    a: "Ja! Wir sind in allen Stuttgarter Stadtteilen tätig: Stuttgart-Mitte, Bad Cannstatt, Vaihingen, Zuffenhausen, Feuerbach, Degerloch, Möhringen und viele mehr. Auch das Umland (Ludwigsburg, Esslingen, Böblingen, Sindelfingen) gehört zu unserem Einsatzgebiet.",
  },
  {
    q: "Sind Sie versichert?",
    a: "Ja, wir verfügen über eine umfassende Transportversicherung. Ihr Eigentum ist während des gesamten Einsatzes – beim Tragen, Transport und Abladen – bei uns in sicheren Händen versichert.",
  },
  {
    q: "Bieten Sie auch Wochenend-Termine an?",
    a: "Samstags-Termine sind nach Absprache möglich. Kontaktieren Sie uns für eine individuelle Terminvereinbarung – wir finden gemeinsam den passenden Zeitpunkt.",
  },
  {
    q: "Wie läuft eine Haushaltsauflösung ab?",
    a: "Wir besichtigen die Räumlichkeiten kostenlos, erstellen ein verbindliches Festpreisangebot und kümmern uns um die komplette Räumung inklusive Entsorgung und besenreiner Übergabe. Bei Nachlassentrümpelungen gehen wir dabei besonders diskret und einfühlsam vor.",
  },
  {
    q: "Entsorgen Sie auch Sperrmüll und Elektrogeräte?",
    a: "Ja, wir entsorgen alle Arten von Hausrat, Sperrmüll und Elektrogeräte umweltgerecht und nach allen geltenden gesetzlichen Vorschriften. Wiederverwendbare Gegenstände werden wenn möglich gespendet oder weitergegeben.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-muted" aria-labelledby="faq-heading">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-muted-foreground text-lg">
            Alles was Sie über Umzug & Entrümpelung in Stuttgart wissen müssen.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-semibold text-foreground text-sm md:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                hidden={openIndex !== i}
                className={openIndex === i ? "block" : "hidden"}
              >
                <div className="px-6 pb-5 pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed border-t border-border pt-3">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground text-sm mb-4">Noch weitere Fragen?</p>
          <a
            href="tel:+4915117140649"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            0151 17140649 – Wir sind Mo–Fr 8–18 Uhr erreichbar
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
