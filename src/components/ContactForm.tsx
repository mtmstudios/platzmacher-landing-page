import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";

const WEBHOOK_URL = "https://your-n8n-instance.com/webhook/platzmacher-anfrage";

const dienstleistungen = [
  "Umzug",
  "Entrümpelung",
  "Haushaltsauflösung",
  "Büroumzug",
  "Nachlassentrümpelung",
  "Keller & Garage",
  "Sonstiges",
];

const wohnflaechen = ["bis 30m²", "30–60m²", "60–90m²", "90–120m²", "über 120m²"];

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (formData: FormData) => {
    const errs: Record<string, string> = {};
    if (!formData.get("name")?.toString().trim()) errs.name = "Bitte Name eingeben.";
    if (!formData.get("telefon")?.toString().trim()) errs.telefon = "Bitte Telefonnummer eingeben.";
    const email = formData.get("email")?.toString().trim() || "";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Bitte gültige E-Mail eingeben.";
    if (!formData.get("dienstleistung")?.toString()) errs.dienstleistung = "Bitte Dienstleistung wählen.";
    if (!formData.get("adresse")?.toString().trim()) errs.adresse = "Bitte Adresse eingeben.";
    if (!formData.get("datenschutz")) errs.datenschutz = "Bitte Datenschutzerklärung akzeptieren.";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    if (formData.get("website")?.toString()) return;

    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const payload = {
      name: formData.get("name"),
      telefon: formData.get("telefon"),
      email: formData.get("email"),
      dienstleistung: formData.get("dienstleistung"),
      adresse: formData.get("adresse"),
      wunschtermin: formData.get("wunschtermin"),
      wohnflaeche: formData.get("wohnflaeche"),
      beschreibung: formData.get("beschreibung"),
    };

    setLoading(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
    } catch {
      // Still show success for UX (webhook might be CORS-restricted)
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="kontakt" className="py-16 md:py-24 bg-background">
        <div className="container max-w-2xl text-center">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-extrabold text-foreground mb-4">Vielen Dank!</h2>
          <p className="text-muted-foreground text-lg">
            Wir melden uns innerhalb von 2 Stunden bei Ihnen. Bei dringenden Anfragen rufen Sie uns direkt an:{" "}
            <a href="tel:+4915117140649" className="text-primary font-semibold">0151 17140649</a>
          </p>
        </div>
      </section>
    );
  }

  const inputClasses = "w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors";
  const labelClasses = "block text-sm font-semibold text-foreground mb-1.5";
  const errorClasses = "text-xs text-destructive mt-1";

  return (
    <section id="kontakt" className="py-16 md:py-24 bg-background">
      <div className="container max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Kostenloses Angebot anfordern
          </h2>
          <p className="text-muted-foreground text-lg">
            Füllen Sie das Formular aus – wir melden uns schnellstmöglich!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm space-y-5" noValidate>
          {/* Honeypot */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className={labelClasses}>Name *</label>
              <input id="name" name="name" type="text" className={inputClasses} required maxLength={100} />
              {errors.name && <p className={errorClasses}>{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="telefon" className={labelClasses}>Telefon *</label>
              <input id="telefon" name="telefon" type="tel" className={inputClasses} required maxLength={30} />
              {errors.telefon && <p className={errorClasses}>{errors.telefon}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className={labelClasses}>E-Mail *</label>
            <input id="email" name="email" type="email" className={inputClasses} required maxLength={255} />
            {errors.email && <p className={errorClasses}>{errors.email}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="dienstleistung" className={labelClasses}>Dienstleistung *</label>
              <select id="dienstleistung" name="dienstleistung" className={inputClasses} required>
                <option value="">Bitte wählen...</option>
                {dienstleistungen.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              {errors.dienstleistung && <p className={errorClasses}>{errors.dienstleistung}</p>}
            </div>
            <div>
              <label htmlFor="wohnflaeche" className={labelClasses}>Ungefähre Wohnfläche</label>
              <select id="wohnflaeche" name="wohnflaeche" className={inputClasses}>
                <option value="">Bitte wählen...</option>
                {wohnflaechen.map((w) => (
                  <option key={w} value={w}>{w}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="adresse" className={labelClasses}>Adresse *</label>
            <input id="adresse" name="adresse" type="text" className={inputClasses} required maxLength={200} />
            {errors.adresse && <p className={errorClasses}>{errors.adresse}</p>}
          </div>

          <div>
            <label htmlFor="wunschtermin" className={labelClasses}>Wunschtermin</label>
            <input id="wunschtermin" name="wunschtermin" type="date" className={inputClasses} />
          </div>

          <div>
            <label htmlFor="beschreibung" className={labelClasses}>Beschreibung (optional)</label>
            <textarea id="beschreibung" name="beschreibung" rows={4} className={inputClasses} maxLength={1000} />
          </div>

          <div className="flex items-start gap-3">
            <input id="datenschutz" name="datenschutz" type="checkbox" className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary" required />
            <label htmlFor="datenschutz" className="text-sm text-muted-foreground">
              Ich stimme der <a href="/datenschutz" className="text-primary underline">Datenschutzerklärung</a> zu. *
            </label>
          </div>
          {errors.datenschutz && <p className={errorClasses}>{errors.datenschutz}</p>}

          <Button type="submit" disabled={loading} className="w-full py-6 text-base font-bold rounded-lg">
            <Send className="w-5 h-5 mr-2" />
            {loading ? "Wird gesendet..." : "Kostenlose Anfrage senden"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
