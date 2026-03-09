import { Phone, ArrowRight, Star, Clock, BadgeEuro, ShieldCheck } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative pt-24 pb-16 md:pt-36 md:pb-28 bg-anthracite-dark overflow-hidden"
      aria-label="Umzug und Entrümpelung Stuttgart – die Platzmacher"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-anthracite-dark via-anthracite to-anthracite-dark" />
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary/8 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />

      <div className="container relative z-10">
        {/* Breadcrumbs – SEO + UX */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-secondary-foreground/50" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/" className="hover:text-primary transition-colors" itemProp="item">
                <span itemProp="name">Startseite</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true" className="text-secondary-foreground/30">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-primary" itemProp="name">Umzug & Entrümpelung Stuttgart</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          {/* Social proof bar */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" aria-hidden="true" />
              ))}
            </div>
            <span className="text-sm text-secondary-foreground font-medium">
              <strong>5,0</strong> · 100+ Kundenbewertungen
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 text-secondary-foreground">
            Umzug & Entrümpelung{" "}
            <span className="text-gradient">in Stuttgart</span>
            {" "}– Schnell, Sauber & Zum Festpreis
          </h1>

          <p className="text-lg md:text-xl text-secondary-foreground/75 mb-8 leading-relaxed max-w-2xl">
            Ihr lokaler Experte für <strong className="text-secondary-foreground">Umzüge, Entrümpelungen und Haushaltsauflösungen</strong> in Stuttgart und Umgebung.
            Faire Festpreise, kurzfristig verfügbar, besenreine Übergabe garantiert.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-bold hover:bg-primary/90 active:scale-95 transition-all shadow-lg shadow-primary/25"
            >
              Kostenlos anfragen
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="tel:+4915117140649"
              className="inline-flex items-center justify-center gap-2 border-2 border-secondary-foreground/20 text-secondary-foreground px-8 py-4 rounded-xl text-base font-bold hover:border-primary hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              0151 17140649
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <div className="flex items-center gap-2 text-secondary-foreground/65">
              <BadgeEuro className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
              <span className="text-sm font-medium">Faire Festpreise</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/65">
              <Clock className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
              <span className="text-sm font-medium">Kurzfristig verfügbar</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/65">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
              <span className="text-sm font-medium">Versichert & zuverlässig</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/65">
              <Star className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
              <span className="text-sm font-medium">Besenreine Übergabe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
