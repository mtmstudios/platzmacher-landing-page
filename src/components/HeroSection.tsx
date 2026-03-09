import { Phone, ArrowRight, Star, Clock, BadgeEuro, ShieldCheck } from "lucide-react";

const stats = [
  { value: "100+", label: "Zufriedene Kunden" },
  { value: "5,0★", label: "Ø Bewertung" },
  { value: "3+",   label: "Jahre Erfahrung" },
  { value: "2h",   label: "Antwortgarantie" },
];

const HeroSection = () => {
  return (
    <section
      className="relative pt-24 pb-0 md:pt-36 bg-anthracite-dark overflow-hidden"
      aria-label="Umzug und Entrümpelung Stuttgart – die Platzmacher"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0F172A]" />
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.07] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 20%, #FF5C00 0%, transparent 60%)" }}
      />

      <div className="container relative z-10 pb-0">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-7">
          <ol
            className="flex items-center gap-2 text-sm text-white/35"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/" className="hover:text-primary transition-colors" itemProp="item">
                <span itemProp="name">Startseite</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li className="text-white/20" aria-hidden="true">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-primary/80" itemProp="name">Umzug & Entrümpelung Stuttgart</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="max-w-3xl pb-16 md:pb-20">
          {/* Review pill */}
          <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-7">
            <div className="flex items-center gap-0.5" aria-label="5 von 5 Sternen">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FF5C00] text-[#FF5C00]" aria-hidden="true" />
              ))}
            </div>
            <span className="text-sm text-white/80 font-medium">
              <strong className="text-white">5,0</strong> · über 100 Bewertungen in Stuttgart
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] mb-5 text-white tracking-tight">
            Umzug &{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg,#FF5C00,#ff8c42)" }}
            >
              Entrümpelung
            </span>
            <br />
            in Stuttgart
          </h1>

          <p className="text-lg md:text-xl text-white/60 mb-8 leading-relaxed max-w-2xl font-light">
            Ihr lokaler Partner für{" "}
            <span className="text-white/90 font-medium">Umzüge, Entrümpelungen & Haushaltsauflösungen</span>{" "}
            in Stuttgart und Umgebung. Faire Festpreise, kurzfristig verfügbar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-[#FF5C00] text-white font-bold px-8 py-4 rounded-xl text-base hover:bg-[#e85200] active:scale-95 transition-all"
              style={{ boxShadow: "0 8px 32px -4px rgba(255,92,0,0.40)" }}
            >
              Kostenlos anfragen
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="tel:+4915117140649"
              className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/85 font-semibold px-8 py-4 rounded-xl text-base hover:border-[#FF5C00]/60 hover:text-[#FF5C00] transition-all backdrop-blur-sm"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              0151 17140649
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {[
              { icon: BadgeEuro,    text: "Faire Festpreise" },
              { icon: Clock,        text: "Kurzfristig verfügbar" },
              { icon: ShieldCheck,  text: "Versichert & zuverlässig" },
              { icon: Star,         text: "Besenreine Übergabe" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/45">
                <Icon className="w-4 h-4 text-[#FF5C00] shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar – anchored to bottom of hero, bleeds into next section */}
      <div className="relative z-10 border-t border-white/8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`py-7 text-center ${i < stats.length - 1 ? "border-r border-white/8" : ""}`}
              >
                <div
                  className="text-4xl font-black text-white mb-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(135deg,#FF5C00,#ff8c42)" }}
                  >
                    {s.value}
                  </span>
                </div>
                <div className="text-xs text-white/40 font-medium tracking-wider uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
