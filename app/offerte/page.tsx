import type { Metadata } from "next";
import { content } from "@/content";
import { PageHeader } from "@/components/Blocks";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Vrijblijvende offerte",
  description:
    "René Bruggeman maakt vrijblijvend en kosteloos een offerte. Het formulier opent uw e-mailprogramma en stuurt niets naar een server.",
};

export default function OffertePage() {
  return (
    <>
      <PageHeader title="Vrijblijvende offerte" lede={content.quote} />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-6 pb-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)]">
        <div className="grid gap-4">
          <p>{content.intro.winter}</p>
          <p>Een belletje mag ook, naar het nummer hieronder.</p>
          <p>
            <a href={content.contact.phoneTel} data-cta="bellen" className="font-mono text-oker">
              {content.contact.phoneDisplay}
            </a>
          </p>
        </div>
        <QuoteForm intent="offerte" />
      </div>
    </>
  );
}
