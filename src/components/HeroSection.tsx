import { Phone, ArrowRight, Star, Clock, BadgeEuro, ShieldCheck } from "lucide-react";

// Unsplash: professional movers – free to use (unsplash.com/photos/ctXcNX1b4Oo)
const HERO_IMAGE = "https://source.unsplash.com/ctXcNX1b4Oo/1200x900";

const stats = [
  { value: "100+", label: "Zufriedene Kunden" },
  { value: "5,0★", label: "Ø Bewertung" },
  { value: "3+",   label: "Jahre Erfahrung" },
  { value: "2h",   label: "Antwortgarantie" },
];

const HeroSection = () => {
  return (
    <section
      className="relative bg-[#0F172A] overflow-hidden"
      aria-label="Umzug und Entrümpelung Stuttgart – die Platzmacher"
    >
      {/* Subtle radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-2/3 h-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 90% 10%, rgba(255,92,0,0.08) 0%, transparent 55%)" }}
        aria-hidden="true"
      />

      {/* ── Two-column split layout ─────────────── */}
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-0 min-h-[calc(100vh-64px)] items-center">

          {/* ── Left: Text content ─────────────── */}
          <div className="py-20 md:py-24 lg:py-28 pr-0 lg:pr-12">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol
                className="flex items-center gap-2 text-sm text-white/30"
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
                  <span className="text-primary/70" itemProp="name">Umzug & Entrümpelung Stuttgart</span>
                  <meta itemProp="position" content="2" />
                </li>
              </ol>
            </nav>

            {/* Review pill */}
            <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <div className="flex items-center gap-0.5" aria-label="5 von 5 Sternen">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FF5C00] text-[#FF5C00]" aria-hidden="true" />
                ))}
              </div>
              <span className="text-sm text-white/75 font-medium">
                <strong className="text-white font-bold">5,0</strong> · über 100 Bewertungen
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black leading-[1.07] mb-5 text-white tracking-tight">
              Umzug &{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #FF5C00, #ff8c42)" }}
              >
                Entrümpelung
              </span>
              <br />
              in Stuttgart
            </h1>

            <p className="text-lg text-white/55 mb-8 leading-relaxed font-light max-w-lg">
              Ihr lokaler Experte für{" "}
              <span className="text-white/85 font-medium">Umzüge, Entrümpelungen & Haushaltsauflösungen</span>{" "}
              – faire Festpreise, kurzfristig verfügbar.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 bg-[#FF5C00] text-white font-bold px-7 py-4 rounded-xl text-base hover:bg-[#e85200] active:scale-95 transition-all cursor-pointer"
                style={{ boxShadow: "0 8px 32px -4px rgba(255,92,0,0.45)" }}
              >
                Kostenlos anfragen
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="tel:+4915117140649"
                className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/80 font-semibold px-7 py-4 rounded-xl text-base hover:border-[#FF5C00]/50 hover:text-[#FF5C00] transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                0151 17140649
              </a>
            </div>

            {/* Trust icons */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                { icon: BadgeEuro,   text: "Faire Festpreise" },
                { icon: Clock,       text: "Kurzfristig verfügbar" },
                { icon: ShieldCheck, text: "Versichert" },
                { icon: Star,        text: "Besenreine Übergabe" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/40">
                  <Icon className="w-4 h-4 text-[#FF5C00] shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Hero image ──────────────── */}
          <div className="hidden lg:flex items-center justify-end py-12 pl-8">
            <div className="relative w-full max-w-xl">
              {/* Orange accent border top-right */}
              <div
                className="absolute -top-3 -right-3 w-full h-full rounded-2xl pointer-events-none"
                style={{ border: "2px solid rgba(255,92,0,0.3)", borderRadius: "18px" }}
                aria-hidden="true"
              />

              {/* Image */}
              <img
                src={HERO_IMAGE}
                alt="Professionelle Umzugshelfer der Platzmacher in Stuttgart beim Tragen von Umzugskartons"
                className="w-full h-[520px] object-cover rounded-2xl"
                style={{ objectPosition: "center" }}
                loading="eager"
                decoding="async"
              />

              {/* Orange overlay gradient bottom */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(15,23,42,0.6) 0%, transparent 50%)",
                }}
                aria-hidden="true"
              />

              {/* Floating badge on image */}
              <div
                className="absolute bottom-5 left-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#FF5C00] rounded-lg flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold leading-none mb-0.5">Versichert & zuverlässig</p>
                    <p className="text-white/50 text-xs leading-none">Transportversicherung inklusive</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Stats bar ─────────────────────────── */}
      <div className="relative z-10 border-t border-white/[0.07]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`py-6 text-center ${i < stats.length - 1 ? "border-r border-white/[0.07]" : ""}`}
              >
                <div
                  className="text-3xl font-black mb-1 bg-clip-text text-transparent"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    backgroundImage: "linear-gradient(135deg, #FF5C00, #ff8c42)",
                  }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-white/35 font-medium tracking-widest uppercase">
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
