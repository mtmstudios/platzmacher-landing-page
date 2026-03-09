import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Thomas K.",
    location: "Stuttgart-Vaihingen",
    service: "Haushaltsauflösung",
    rating: 5,
    text: "Absolut professionell und diskret. Die Platzmacher haben die gesamte Wohnungsauflösung meiner Mutter binnen eines Tages erledigt. Besenreine Übergabe wie versprochen. Sehr empfehlenswert!",
  },
  {
    name: "Sandra M.",
    location: "Bad Cannstatt",
    service: "Umzug 3-Zimmer",
    rating: 5,
    text: "Unkomplizierte Abwicklung, fairer Preis und das Team hat sogar Möbel aufgebaut. Innerhalb von 2 Stunden war alles im neuen Appartement. Danke!",
  },
  {
    name: "Michael R.",
    location: "Stuttgart-Mitte",
    service: "Kellrentrümpelung",
    rating: 5,
    text: "Hatte einen vollgestopften Keller, der seit Jahren nicht angegangen wurde. Die Platzmacher haben das in einem halben Tag komplett geräumt und entsorgt. Top Service.",
  },
];

const SocialProofSection = () => {
  return (
    <section
      className="py-16 md:py-24 bg-muted"
      aria-labelledby="bewertungen-heading"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2.5 bg-[#FF5C00]/10 border border-[#FF5C00]/20 rounded-full px-4 py-2 mb-5">
            <div className="flex items-center gap-0.5" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FF5C00] text-[#FF5C00]" />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">5,0 Sterne · 100+ Bewertungen</span>
          </div>
          <h2 id="bewertungen-heading" className="text-3xl md:text-4xl font-black text-foreground mb-3 tracking-tight">
            Was unsere Kunden sagen
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
            Vertrauen Sie auf die Erfahrungen echter Kunden aus Stuttgart und Umgebung.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-[#FF5C00]/30 hover:shadow-md transition-all duration-200"
            >
              {/* Stars */}
              <div className="flex items-center gap-1" aria-label={`${t.rating} von 5 Sternen`}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FF5C00] text-[#FF5C00]" aria-hidden="true" />
                ))}
              </div>

              {/* Quote */}
              <Quote className="w-5 h-5 text-[#FF5C00]/30" aria-hidden="true" />
              <p className="text-foreground/80 text-sm leading-relaxed flex-1 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                  <span className="text-xs font-semibold text-[#FF5C00] bg-[#FF5C00]/10 px-3 py-1 rounded-full">
                    {t.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground">
            Alle Bewertungen auf{" "}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF5C00] font-semibold hover:underline"
            >
              Google Maps
            </a>{" "}
            ansehen
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
