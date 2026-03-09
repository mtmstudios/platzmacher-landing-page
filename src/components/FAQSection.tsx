import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Was kostet ein Umzug in Stuttgart?",
    a: "Die Kosten hängen von der Wohnungsgröße, Etage und Entfernung ab. Wir bieten faire Festpreise ohne versteckte Kosten. Fordern Sie ein kostenloses Angebot an!",
  },
  {
    q: "Wie schnell können Sie einen Termin anbieten?",
    a: "In der Regel können wir innerhalb von 2–5 Werktagen starten. Bei dringenden Anfragen sind auch kurzfristigere Termine möglich.",
  },
  {
    q: "Was ist bei einer Entrümpelung inklusive?",
    a: "Unsere Entrümpelung umfasst das Ausräumen, Sortieren, Abtransport und die fachgerechte Entsorgung. Besenreine Übergabe ist immer inklusive.",
  },
  {
    q: "Sind Sie versichert?",
    a: "Ja, wir verfügen über eine Transportversicherung, die Ihr Eigentum während des gesamten Einsatzes absichert.",
  },
  {
    q: "Bieten Sie auch Wochenend-Termine an?",
    a: "Samstags-Termine sind nach Absprache möglich. Kontaktieren Sie uns einfach für eine individuelle Terminvereinbarung.",
  },
  {
    q: "Wie läuft eine Haushaltsauflösung ab?",
    a: "Wir besichtigen die Räumlichkeiten kostenlos, erstellen ein Festpreisangebot und kümmern uns um die komplette Räumung inklusive Entsorgung und besenreiner Übergabe.",
  },
  {
    q: "Entsorgen Sie auch Sperrmüll und Elektrogeräte?",
    a: "Ja, wir entsorgen alle Arten von Hausrat, Sperrmüll und Elektrogeräte umweltgerecht und nach den geltenden Vorschriften.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-muted">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Häufig gestellte Fragen
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-foreground text-sm md:text-base pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
