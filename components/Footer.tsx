import Link from "next/link";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";
import { EdgeJoint } from "@/components/Joints";

export default function Footer() {
  const { company, contact, nav } = content;
  return (
    <footer data-section="footer" className="mt-auto text-wit">
      <EdgeJoint flip />
      <div className="bg-inkt">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl leading-tight">{company.name}</p>
            <p className="mt-3 max-w-sm text-white/90">{company.slogan}</p>
          </div>
          <div>
            <p className="font-medium">Adres</p>
            <p className="mt-2">
              {contact.street}
              <br />
              {contact.postcode} {contact.city}
            </p>
            <p className="mt-4">
              <a href={contact.phoneTel} data-cta={ctaType(contact.phoneTel)} className="font-mono text-wit no-underline">
                {contact.phoneDisplay}
              </a>
            </p>
            <p className="mt-2">
              <a href={contact.emailHref} data-cta="mailen" className="break-all text-wit">
                {contact.email}
              </a>
            </p>
          </div>
          <nav aria-label="Voettekst">
            <ul className="grid gap-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-wit no-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/offerte" data-cta="offerte" className="text-wit no-underline">
                  Offerte
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-wit no-underline">
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 pb-8 text-sm text-white/80 md:flex-row md:justify-between md:pr-44 md:pb-20">
          <p>{company.name} · {contact.city}</p>
          <a href="https://sleads.nl" target="_blank" rel="noopener" className="text-white/80">
            Concept door Sleads
          </a>
        </div>
      </div>
    </footer>
  );
}
