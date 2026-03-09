import { MessageSquare, Eye, Calculator, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Anfrage stellen",
    text: "Formular ausfüllen oder anrufen – dauert weniger als 2 Minuten.",
    detail: "Kostenlos & unverbindlich",
  },
  {
    icon: Eye,
    title: "Kostenlos besichtigen",
    text: "Wir kommen zu Ihnen und bewerten den Aufwand direkt vor Ort.",
    detail: "In Stuttgart & Umgebung",
  },
  {
    icon: Calculator,
    title: "Festpreis erhalten",
    text: "Sie bekommen ein verbindliches Angebot – transparent, ohne Überraschungen.",
    detail: "Keine versteckten Kosten",
  },
  {
    icon: CheckCircle,
    title: "Wir erledigen alles",
    text: "Lehnen Sie sich zurück. Wir arbeiten sauber, schnell und termingerecht.",
    detail: "Besenreine Übergabe",
  },
];

const ProcessSection = () => {
  return (
    <section id="ablauf" className="py-16 md:py-24 bg-anthracite-dark" aria-labelledby="ablauf-heading">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="ablauf-heading" className="text-3xl md:text-4xl font-extrabold text-secondary-foreground mb-4">
            So einfach geht's
          </h2>
          <p className="text-secondary-foreground/60 text-lg">
            In nur 4 Schritten zum stressfreien Umzug oder zur Entrümpelung in Stuttgart.
          </p>
        </div>

        <div className="relative">
          {/* Connector line – desktop only */}
          <div className="hidden lg:block absolute top-7 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" aria-hidden="true" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.title} className="flex flex-col items-center text-center relative">
                {/* Step number circle */}
                <div className="relative mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-black text-xl shadow-lg shadow-primary/30 relative z-10">
                    {i + 1}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center -mt-2 mb-4">
                  <s.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-secondary-foreground mb-1.5">{s.title}</h3>
                <p className="text-secondary-foreground/55 text-sm mb-2 leading-relaxed">{s.text}</p>
                <span className="text-xs font-semibold text-primary/70 bg-primary/10 px-2.5 py-1 rounded-full">
                  {s.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
          >
            Jetzt kostenlos anfragen
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
