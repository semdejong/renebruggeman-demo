"use client";

import { useState, type FormEvent } from "react";
import { content } from "@/content";

export default function QuoteForm({ intent }: { intent: "offerte" | "contact" }) {
  const [status, setStatus] = useState("");
  const copy = intent === "offerte" ? content.offerte : content.contactForm;
  const { contact, werkOptions } = content;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const naam = String(data.get("naam") ?? "").trim();
    const telefoon = String(data.get("telefoon") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const werk = String(data.get("werk") ?? "").trim();
    const bericht = String(data.get("bericht") ?? "").trim();

    const lines = ["Goedendag,", "", `Mijn naam is ${naam}.`];
    if (telefoon) lines.push(`Telefoon: ${telefoon}.`);
    if (email) lines.push(`E-mail: ${email}.`);
    if (werk) lines.push(`Het gaat om: ${werk}.`);
    lines.push("", bericht);

    const href = `mailto:${contact.email}?subject=${encodeURIComponent(copy.subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setStatus("Uw e-mailprogramma wordt geopend. Het bericht gaat pas weg als u het zelf verstuurt.");
    window.location.href = href;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <p className="max-w-xl">{copy.note}</p>
      <p>
        Liever direct mailen:{" "}
        <a href={contact.emailHref} data-cta="mailen" className="text-oker">
          {contact.email}
        </a>
      </p>

      <div>
        <label htmlFor={`${intent}-naam`} className="font-medium">
          Naam
        </label>
        <input id={`${intent}-naam`} name="naam" required autoComplete="name" className="field mt-2" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${intent}-telefoon`} className="font-medium">
            Telefoon
          </label>
          <input id={`${intent}-telefoon`} name="telefoon" type="tel" autoComplete="tel" className="field mt-2" />
        </div>
        <div>
          <label htmlFor={`${intent}-email`} className="font-medium">
            E-mail
          </label>
          <input id={`${intent}-email`} name="email" type="email" autoComplete="email" className="field mt-2" />
        </div>
      </div>
      <div>
        <label htmlFor={`${intent}-werk`} className="font-medium">
          Het gaat om
        </label>
        <select id={`${intent}-werk`} name="werk" className="field mt-2" defaultValue="">
          <option value="">Geen keuze</option>
          {werkOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={`${intent}-bericht`} className="font-medium">
          Bericht
        </label>
        <textarea id={`${intent}-bericht`} name="bericht" required rows={6} className="field mt-2" />
      </div>
      <div>
        <button type="submit" data-cta={intent === "offerte" ? "offerte" : "mailen"} className="btn btn-geel">
          {intent === "offerte" ? "Open de offerte-mail" : "Open de e-mail"}
        </button>
      </div>
      <p aria-live="polite" className="min-h-6">
        {status}
      </p>
    </form>
  );
}
