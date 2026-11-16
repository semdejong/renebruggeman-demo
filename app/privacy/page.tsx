import type { Metadata } from "next";
import { content } from "@/content";
import { PageHeader } from "@/components/Blocks";
import { Scarf } from "@/components/Joints";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Korte toelichting bij deze conceptsite: geen cookies, cookieloze statistiek, en een formulier dat alleen uw e-mailprogramma opent.",
};

export default function PrivacyPage() {
  const { contact } = content;
  const plates = [
    {
      title: "Geen cookies",
      text: "De site plaatst geen cookies. Wel laadt elke pagina een cookieloos statistiekscript van Sleads. Dat kan een paginabezoek vastleggen, en een klik op bellen, mailen of offerte. Er is geen account en geen profiel.",
    },
    {
      title: "Het formulier",
      text: "Het formulier op Contact en Offerte stuurt niets naar een server van deze site. Het opent uw eigen e-mailprogramma. De tekst vertrekt pas wanneer u dat bericht zelf verstuurt.",
    },
    {
      title: "Een vraag",
      text: "Voor een vraag over uw gegevens belt of mailt u René Bruggeman. Deze tekst is een toelichting bij het concept, geen algemene voorwaarden.",
    },
  ];
  return (
    <>
      <PageHeader
        title="Privacy"
        lede="Dit is een conceptsite van Sleads voor René Bruggeman Schilderwerken."
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-0 px-5 pb-8 lg:flex-row lg:items-stretch lg:px-0">
        {plates.map((plate, index) => (
          <div key={plate.title} className="contents">
            {index > 0 ? <Scarf /> : null}
            <article className={`min-w-0 flex-1 px-6 py-8 ${index === 1 ? "bg-wit" : "bg-vlak"}`}>
              <h2 className="font-display text-3xl leading-none">{plate.title}</h2>
              <p className="mt-4">{plate.text}</p>
            </article>
          </div>
        ))}
      </div>
      <p className="mx-auto max-w-6xl px-5 pb-16">
        <a href={contact.phoneTel} data-cta="bellen" className="font-mono text-oker">
          {contact.phoneDisplay}
        </a>
        {" · "}
        <a href={contact.emailHref} data-cta="mailen" className="text-oker">
          {contact.email}
        </a>
      </p>
    </>
  );
}
