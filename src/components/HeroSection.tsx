import { Phone, ArrowDown, Star, Clock, BadgeEuro } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-anthracite-dark overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-anthracite-dark via-anthracite to-anthracite-dark opacity-90" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />

      <div className="container relative z-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-secondary-foreground/60">
            <li><a href="/" className="hover:text-primary transition-colors">Startseite</a></li>
            <li>/</li>
            <li className="text-primary">Umzug & Entrümpelung Stuttgart</li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-secondary-foreground">
            Umzug & Entrümpelung in Stuttgart –{" "}
            <span className="text-gradient">Schnell, Sauber & Zum Festpreis</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
            Faire Festpreise · Kurzfristig verfügbar · Besenreine Übergabe garantiert
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
            >
              <ArrowDown className="w-5 h-5" />
              Jetzt kostenlos anfragen
            </a>
            <a
              href="tel:+4915117140649"
              className="inline-flex items-center justify-center gap-2 border-2 border-secondary-foreground/30 text-secondary-foreground px-8 py-4 rounded-lg text-lg font-bold hover:border-primary hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              Jetzt anrufen
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">100+ zufriedene Kunden</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <BadgeEuro className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Faire Festpreise</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Kurzfristig verfügbar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
