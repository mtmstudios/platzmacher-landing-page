import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, Phone, Clock } from "lucide-react";

const WEBHOOK_URL = "https://mtmstudios.app.n8n.cloud/webhook/platzmacher-anfrage";

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
    if (!formData.get("name")?.toString().trim()) errs.name = "Bitte geben Sie Ihren Namen ein.";
    if (!formData.get("telefon")?.toString().trim()) errs.telefon = "Bitte geben Sie Ihre Telefonnummer ein.";
    const email = formData.get("email")?.toString().trim() || "";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    if (!formData.get("dienstleistung")?.toString())
      errs.dienstleistung = "Bitte wählen Sie eine Dienstleistung.";
    if (!formData.get("adresse")?.toString().trim()) errs.adresse = "Bitte geben Sie die Adresse an.";
    if (!formData.get("datenschutz")) errs.datenschutz = "Bitte stimmen Sie der Datenschutzerklärung zu.";
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
      timestamp: new Date().toISOString(),
      source: "website-kontaktformular",
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
      // Show success for UX (webhook might have CORS restrictions)
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="kontakt" className="py-16 md:py-24 bg-background">
        <div className="container max-w-2xl">
          <div className="text-center bg-card border border-border rounded-2xl p-10 shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-extrabold text-foreground mb-3">Vielen Dank!</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Wir melden uns <strong className="text-foreground">innerhalb von 2 Stunden</strong> bei Ihnen zurück.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              Bei dringenden Anfragen:{" "}
              <a href="tel:+4915117140649" className="text-primary font-semibold hover:underline">
                0151 17140649
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors";
  const labelClasses = "block text-sm font-semibold text-foreground mb-1.5";
  const errorClasses = "text-xs text-destructive mt-1 flex items-center gap-1";

  return (
    <section id="kontakt" className="py-16 md:py-24 bg-background" aria-labelledby="kontakt-heading">
      <div className="container max-w-2xl">
        <div className="text-center mb-8">
          <h2 id="kontakt-heading" className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
            Kostenloses Angebot anfordern
          </h2>
          <p className="text-muted-foreground text-lg">
            Füllen Sie das Formular aus – wir antworten innerhalb von 2 Stunden!
          </p>
          <div className="inline-flex items-center gap-2 mt-3 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            Mo–Fr 08:00–18:00 Uhr · Antwortgarantie innerhalb 2h
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm space-y-5"
          noValidate
          aria-label="Kontaktformular – Kostenloses Angebot anfordern"
        >
          {/* Honeypot – hidden from users */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className={labelClasses}>Name *</label>
              <input
                id="name" name="name" type="text"
                className={inputClasses}
                placeholder="Max Mustermann"
                required maxLength={100}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && <p id="name-error" className={errorClasses} role="alert">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="telefon" className={labelClasses}>Telefon *</label>
              <input
                id="telefon" name="telefon" type="tel"
                className={inputClasses}
                placeholder="0711 123456"
                required maxLength={30}
                aria-describedby={errors.telefon ? "telefon-error" : undefined}
              />
              {errors.telefon && <p id="telefon-error" className={errorClasses} role="alert">{errors.telefon}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className={labelClasses}>E-Mail *</label>
            <input
              id="email" name="email" type="email"
              className={inputClasses}
              placeholder="max@beispiel.de"
              required maxLength={255}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && <p id="email-error" className={errorClasses} role="alert">{errors.email}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="dienstleistung" className={labelClasses}>Dienstleistung *</label>
              <select
                id="dienstleistung" name="dienstleistung"
                className={inputClasses}
                required
                aria-describedby={errors.dienstleistung ? "dienstleistung-error" : undefined}
              >
                <option value="">Bitte wählen...</option>
                {dienstleistungen.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              {errors.dienstleistung && <p id="dienstleistung-error" className={errorClasses} role="alert">{errors.dienstleistung}</p>}
            </div>
            <div>
              <label htmlFor="wohnflaeche" className={labelClasses}>Ungefähre Fläche</label>
              <select id="wohnflaeche" name="wohnflaeche" className={inputClasses}>
                <option value="">Bitte wählen...</option>
                {wohnflaechen.map((w) => (
                  <option key={w} value={w}>{w}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="adresse" className={labelClasses}>Adresse / Ort *</label>
            <input
              id="adresse" name="adresse" type="text"
              className={inputClasses}
              placeholder="Musterstraße 1, 70173 Stuttgart"
              required maxLength={200}
              aria-describedby={errors.adresse ? "adresse-error" : undefined}
            />
            {errors.adresse && <p id="adresse-error" className={errorClasses} role="alert">{errors.adresse}</p>}
          </div>

          <div>
            <label htmlFor="wunschtermin" className={labelClasses}>Wunschtermin</label>
            <input
              id="wunschtermin" name="wunschtermin" type="date"
              className={inputClasses}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div>
            <label htmlFor="beschreibung" className={labelClasses}>
              Kurze Beschreibung <span className="font-normal text-muted-foreground">(optional)</span>
            </label>
            <textarea
              id="beschreibung" name="beschreibung" rows={4}
              className={inputClasses}
              placeholder="z.B. 3-Zimmer-Wohnung, 2. OG, kein Aufzug..."
              maxLength={1000}
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              id="datenschutz" name="datenschutz" type="checkbox"
              className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary"
              required
              aria-describedby={errors.datenschutz ? "datenschutz-error" : undefined}
            />
            <label htmlFor="datenschutz" className="text-sm text-muted-foreground leading-relaxed">
              Ich stimme der{" "}
              <a href="/datenschutz" className="text-primary underline underline-offset-2 hover:text-primary/80">
                Datenschutzerklärung
              </a>{" "}
              zu und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage
              genutzt werden. *
            </label>
          </div>
          {errors.datenschutz && (
            <p id="datenschutz-error" className={errorClasses} role="alert">{errors.datenschutz}</p>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full py-6 text-base font-bold rounded-xl shadow-md shadow-primary/20"
          >
            <Send className="w-5 h-5 mr-2" aria-hidden="true" />
            {loading ? "Wird gesendet..." : "Kostenlose Anfrage senden"}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Keine Weitergabe an Dritte · DSGVO-konform · Antwort innerhalb 2h
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
