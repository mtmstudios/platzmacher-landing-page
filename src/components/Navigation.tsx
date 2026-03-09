import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Vorteile", href: "#vorteile" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Einsatzgebiet", href: "#einsatzgebiet" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "FAQ", href: "#faq" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border" aria-label="Hauptnavigation">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-anthracite">
          Die <span className="text-primary">Platzmacher</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="tel:+4915117140649" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
            <Phone className="w-4 h-4" />
            0151 17140649
          </a>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <a href="tel:+4915117140649" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-xs font-semibold">
            <Phone className="w-3.5 h-3.5" />
            Anrufen
          </a>
          <button onClick={() => setOpen(!open)} className="p-2 text-foreground" aria-label="Menü öffnen">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border py-4">
          <div className="container flex flex-col gap-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-foreground hover:text-primary py-2">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
