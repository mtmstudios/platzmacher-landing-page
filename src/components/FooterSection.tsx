import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Logo from "./Logo";

const FooterSection = () => {
  return (
    <footer className="bg-anthracite-dark pt-12 pb-6 border-t border-secondary/20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <Logo variant="dark" className="mb-4" />
            <p className="text-secondary-foreground/55 text-sm leading-relaxed mt-4">
              Ihr lokaler Partner für Umzüge, Entrümpelungen und Haushaltsauflösungen
              in Stuttgart und der Region. Faire Festpreise, kurzfristig verfügbar.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-bold text-secondary-foreground mb-4 text-sm uppercase tracking-wider">
              Kontakt
            </h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/65">
              <li>
                <a
                  href="tel:+4915117140649"
                  className="flex items-center gap-2 hover:text-primary transition-colors group"
                >
                  <Phone className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <span>0151 17140649</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@die-platzmacher-stuttgart.de"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <span>info@die-platzmacher-stuttgart.de</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>Stuttgart, Baden-Württemberg</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                <span>Mo–Fr: 08:00–18:00 Uhr</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-secondary-foreground mb-4 text-sm uppercase tracking-wider">
              Leistungen
            </h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/65 mb-6">
              {[
                ["Umzüge Stuttgart", "#umzuege"],
                ["Entrümpelung Stuttgart", "#entruempelungen"],
                ["Haushaltsauflösung", "#haushaltsauflosung"],
                ["Nachlassentrümpelung", "#nachlassentruempelung"],
                ["Büroumzug Stuttgart", "#bueroumzug"],
                ["Keller & Garagenräumung", "#keller-garage"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-primary transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="font-bold text-secondary-foreground mb-3 text-sm uppercase tracking-wider">
              Rechtliches
            </h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/65">
              <li><a href="/impressum" className="hover:text-primary transition-colors">Impressum</a></li>
              <li><a href="/datenschutz" className="hover:text-primary transition-colors">Datenschutzerklärung</a></li>
              <li><a href="/agb" className="hover:text-primary transition-colors">AGB</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary/15 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-secondary-foreground/35">
          <p>
            © {new Date().getFullYear()} die Platzmacher – Umzüge & Entrümpelungen Stuttgart.
            Alle Rechte vorbehalten.
          </p>
          <p>
            Ihr Partner in Stuttgart, Ludwigsburg, Esslingen, Böblingen & Umgebung.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
