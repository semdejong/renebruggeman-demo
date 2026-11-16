import Link from "next/link";
import { Fragment } from "react";
import { content, type Photo as PhotoData } from "@/content";
import { ctaType } from "@/lib/cta";
import { Scarf } from "@/components/Joints";
import { Photo } from "@/components/Photo";

export function PageHeader({ title, lede }: { title: string; lede?: string }) {
  return (
    <header className="mx-auto max-w-6xl px-5 pt-12 pb-4 md:pt-16">
      <h1 className="font-display max-w-4xl text-[clamp(2.5rem,5.4vw,4.4rem)] leading-[1.05]">{title}</h1>
      {lede ? <p className="mt-6 max-w-2xl">{lede}</p> : null}
    </header>
  );
}

export function CallBand() {
  const { company, quote, contact } = content;
  return (
    <aside data-section="contact" className="bg-inkt text-wit">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.08]">
            Vrijblijvend en kosteloos een offerte
          </h2>
          <p className="mt-4 text-white/90">{company.slogan} {quote}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={contact.phoneTel} data-cta={ctaType(contact.phoneTel)} className="btn btn-geel font-mono">
            {contact.phoneDisplay}
          </a>
          <Link href="/offerte" data-cta="offerte" className="btn btn-wit">
            Offerte
          </Link>
        </div>
      </div>
    </aside>
  );
}

export function ServiceJoint() {
  return (
    <section aria-labelledby="werk-titel" data-section="diensten">
      <div className="mx-auto max-w-6xl px-5 pt-4 pb-6">
        <h2 id="werk-titel" className="font-display max-w-3xl text-3xl leading-tight md:text-4xl">
          Het werk
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {content.services.map((item, index) => {
          const href = "href" in item ? item.href : undefined;
          const tone = href ? (index % 2 === 0 ? "bg-vlak text-inkt" : "bg-wit text-inkt") : "bg-inkt text-wit";
          const body = (
            <>
              <h3 className="font-display text-[1.85rem] leading-none md:text-4xl">{item.title}</h3>
              <p className="mt-4 max-w-[18rem] text-[1.0625rem] leading-relaxed">{item.text}</p>
            </>
          );
          return (
            <Fragment key={item.title}>
              {index > 0 ? <Scarf /> : null}
              {href ? (
                <Link
                  href={href}
                  className={`member-link block min-h-44 min-w-0 px-6 py-8 no-underline lg:min-h-72 lg:px-7 lg:py-10 ${tone}`}
                  style={{ flexGrow: item.flex, flexBasis: 0, flexShrink: 1 }}
                >
                  {body}
                </Link>
              ) : (
                <div
                  className={`min-h-44 min-w-0 px-6 py-8 lg:min-h-72 lg:px-7 lg:py-10 ${tone}`}
                  style={{ flexGrow: item.flex, flexBasis: 0, flexShrink: 1 }}
                >
                  {body}
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 px-5 py-6">
        <a href={content.contact.phoneTel} data-cta={ctaType(content.contact.phoneTel)} className="font-mono text-oker">
          {content.contact.phoneDisplay}
        </a>
        <Link href="/offerte" data-cta="offerte" className="text-oker">
          Vrijblijvende offerte
        </Link>
      </div>
    </section>
  );
}

export function PhotoRibbon({
  photos,
  title,
  note,
}: {
  photos: PhotoData[];
  title: string;
  note: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <h2 className="font-display text-3xl leading-tight md:text-4xl">{title}</h2>
      <p className="mt-3 max-w-xl">{note}</p>
      <ul className="mt-8 flex flex-wrap items-end gap-3">
        {photos.map((item) => (
          <li key={item.src}>
            <Link href="/projecten" className="block bg-vlak p-2 no-underline">
              <Photo photo={item} displayWidth={item.w >= item.h ? 340 : 210} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ContactFacts({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { contact } = content;
  const link = tone === "dark" ? "text-wit" : "text-oker";
  return (
    <dl className="grid gap-5">
      <div>
        <dt className="font-medium">Adres</dt>
        <dd className="mt-1">
          {contact.street}
          <br />
          {contact.postcode} {contact.city}
        </dd>
      </div>
      <div>
        <dt className="font-medium">Telefoon</dt>
        <dd className="mt-1">
          <a href={contact.phoneTel} data-cta={ctaType(contact.phoneTel)} className={`font-mono ${link}`}>
            {contact.phoneDisplay}
          </a>
        </dd>
      </div>
      <div>
        <dt className="font-medium">E-mail</dt>
        <dd className="mt-1">
          <a href={contact.emailHref} data-cta="mailen" className={`break-all ${link}`}>
            {contact.email}
          </a>
        </dd>
      </div>
    </dl>
  );
}
