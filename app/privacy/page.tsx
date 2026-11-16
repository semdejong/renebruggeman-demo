import type { Metadata } from "next";
import { content } from "@/content";
import { PageHeader } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Korte toelichting bij deze conceptsite: geen cookies, cookieloze statistiek, en een formulier dat alleen uw e-mailprogramma opent.",
};

export default function PrivacyPage() {
  const { contact } = content;
  return (
    <>
      <PageHeader
        title="Privacy"
        lede="Dit is een conceptsite van Sleads voor René Bruggeman Schilderwerken. De tekst hieronder is een toelichting, geen algemene voorwaarden."
      />
      <div className="mx-auto grid max-w-2xl gap-4 px-5 py-6 pb-20">
        <p>
          De site plaatst geen cookies. Wel laadt elke pagina een cookieloos statistiekscript van Sleads. Dat kan een
          paginabezoek vastleggen, en een klik op bellen, mailen of offerte. Er is geen account en geen profiel.
        </p>
        <p>
          Het formulier op Contact en Offerte stuurt niets naar een server van deze site. Het opent uw eigen
          e-mailprogramma met een bericht aan{" "}
          <a href={contact.emailHref} data-cta="mailen" className="text-oker">
            {contact.email}
          </a>
          . De tekst vertrekt pas wanneer u dat bericht zelf verstuurt.
        </p>
        <p>
          Voor een vraag over uw gegevens belt of mailt u René Bruggeman,{" "}
          <a href={contact.phoneTel} data-cta="bellen" className="font-mono text-oker">
            {contact.phoneDisplay}
          </a>
          .
        </p>
      </div>
    </>
  );
}
