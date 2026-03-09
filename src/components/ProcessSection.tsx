import { MessageSquare, Eye, Calculator, CheckCircle } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Anfrage stellen", text: "Füllen Sie unser Formular aus oder rufen Sie uns an." },
  { icon: Eye, title: "Kostenlos besichtigen", text: "Wir kommen vorbei und bewerten den Aufwand vor Ort." },
  { icon: Calculator, title: "Festpreis erhalten", text: "Sie erhalten ein verbindliches Angebot ohne versteckte Kosten." },
  { icon: CheckCircle, title: "Wir erledigen alles", text: "Lehnen Sie sich zurück – wir kümmern uns um den Rest." },
];

const ProcessSection = () => {
  return (
    <section id="ablauf" className="py-16 md:py-24 bg-anthracite-dark">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary-foreground mb-4">
            So einfach geht's
          </h2>
          <p className="text-secondary-foreground/70 text-lg">In nur 4 Schritten zum stressfreien Umzug oder zur Entrümpelung.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className="text-center relative">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold text-secondary-foreground mb-2">{s.title}</h3>
              <p className="text-secondary-foreground/60 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
