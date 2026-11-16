import type { Metadata } from "next";
import { content } from "@/content";
import { ContactFacts, PageHeader } from "@/components/Blocks";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "René Bruggeman Schilderwerken, H.A. Hartholtstraat 15, 7441 DV Nijverdal. Bel 06-23479372 of mail renebruggeman@live.nl.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" lede={`${content.company.slogan} ${content.quote}`} />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-8 pb-16 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]">
        <ContactFacts />
        <QuoteForm intent="contact" />
      </div>
    </>
  );
}
