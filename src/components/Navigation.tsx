import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "./Logo";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/98 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-background/95 backdrop-blur border-b border-border"
      }`}
      aria-label="Hauptnavigation"
    >
      <div className="container flex items-center justify-between h-16">
        <Logo variant="light" />

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+4915117140649"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
            aria-label="Jetzt anrufen: 0151 17140649"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            0151 17140649
          </a>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:+4915117140649"
            className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-xs font-semibold"
            aria-label="Jetzt anrufen"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            Anrufen
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-foreground"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border py-4 shadow-lg">
          <div className="container flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground hover:text-primary hover:bg-accent px-3 py-2.5 rounded-lg transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-border">
              <a
                href="tel:+4915117140649"
                className="flex items-center gap-2 text-sm font-semibold text-primary px-3 py-2.5"
              >
                <Phone className="w-4 h-4" />
                0151 17140649
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
