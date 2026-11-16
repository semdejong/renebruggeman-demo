import type { Metadata } from "next";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";
import { PageHeader } from "@/components/Blocks";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "René Bruggeman Schilderwerken, H.A. Hartholtstraat 15, 7441 DV Nijverdal. Bel 06-23479372 of mail renebruggeman@live.nl.",
};

export default function ContactPage() {
  const { contact, company, quote } = content;
  return (
    <>
      <PageHeader title="Contact" lede={`${company.slogan} ${quote}`} />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-6 pb-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.1fr)]">
        <div>
          <p className="font-mono text-[clamp(1.8rem,4vw,2.6rem)] leading-none text-inkt">
            <a href={contact.phoneTel} data-cta={ctaType(contact.phoneTel)} className="text-inkt no-underline">
              {contact.phoneDisplay}
            </a>
          </p>
          <p className="mt-3">
            <a href={contact.emailHref} data-cta="mailen" className="break-all text-oker">
              {contact.email}
            </a>
          </p>
          <address className="mt-8 bg-vlak px-6 py-8 not-italic">
            <p className="font-display text-3xl leading-tight">{company.name}</p>
            <p className="mt-4">
              {contact.street}
              <br />
              {contact.postcode} {contact.city}
            </p>
          </address>
          <p className="mt-6 max-w-sm">{content.intro.winter}</p>
        </div>
        <QuoteForm intent="contact" />
      </div>
    </>
  );
}
