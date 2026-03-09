import { Phone, Mail, MapPin, Clock } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-anthracite-dark py-12 border-t border-secondary/20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold text-secondary-foreground mb-4">
              Die <span className="text-primary">Platzmacher</span>
            </h3>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">
              Ihr professioneller Partner für Umzüge und Entrümpelungen in Stuttgart und Umgebung. Faire Festpreise, kurzfristig verfügbar.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-secondary-foreground mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+4915117140649" className="hover:text-primary transition-colors">0151 17140649</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@die-platzmacher.de" className="hover:text-primary transition-colors">info@die-platzmacher.de</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Stuttgart, Baden-Württemberg
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Mo–Fr: 08:00–18:00 Uhr
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-secondary-foreground mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="/impressum" className="hover:text-primary transition-colors">Impressum</a></li>
              <li><a href="/datenschutz" className="hover:text-primary transition-colors">Datenschutzerklärung</a></li>
              <li><a href="/agb" className="hover:text-primary transition-colors">AGB</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary/20 mt-10 pt-6 text-center text-xs text-secondary-foreground/40">
          © {new Date().getFullYear()} Die Platzmacher – Umzüge & Entrümpelungen Stuttgart. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
