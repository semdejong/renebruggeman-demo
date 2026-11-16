"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";
import { EdgeJoint } from "@/components/Joints";

export default function Header() {
  const path = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === path;
  const { company, nav, contact } = content;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenPath(null);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header data-section="header" className="sticky top-0 z-50">
      <div className="bg-inkt text-wit">
        <div className="flex h-16 items-center gap-3 px-4 min-[1180px]:h-[4.5rem] min-[1180px]:gap-5 min-[1180px]:px-5">
          <Link href="/" className="shrink-0" aria-label={`${company.name}, naar de beginpagina`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={company.logo}
              alt="Bruggeman Schilderwerken"
              width={company.logoWidth}
              height={company.logoHeight}
              className="h-10 w-auto min-[1180px]:h-11"
            />
          </Link>

          <nav aria-label="Hoofdmenu" className="hidden min-w-0 flex-nowrap items-center gap-x-3.5 min-[1180px]:flex">
            {nav.map((item) => {
              const active = path === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative inline-flex min-h-11 items-center whitespace-nowrap text-[13.5px] font-medium leading-none text-wit no-underline ${
                    active ? "after:absolute after:inset-x-0 after:-bottom-1.5 after:h-[2px] after:bg-geel" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <a
              href={contact.phoneTel}
              data-cta={ctaType(contact.phoneTel)}
              className="btn btn-geel hidden font-mono text-[0.95rem] sm:inline-flex"
            >
              {contact.phoneDisplay}
            </a>
            <a
              href={contact.phoneTel}
              data-cta={ctaType(contact.phoneTel)}
              className="btn btn-geel px-3 sm:hidden"
            >
              Bellen
            </a>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center px-3 text-base font-medium text-wit min-[1180px]:hidden"
              aria-expanded={open}
              aria-controls="mobiel-menu"
              onClick={() => setOpenPath(open ? null : path)}
            >
              {open ? "Sluit" : "Menu"}
            </button>
          </div>
        </div>
      </div>
      <EdgeJoint />

      {open && (
        <nav
          id="mobiel-menu"
          aria-label="Mobiel menu"
          className="fixed inset-x-0 bottom-0 z-50 overflow-y-auto bg-papier text-inkt min-[1180px]:hidden"
          style={{ top: "5.25rem" }}
        >
          <ul className="px-4 py-4">
            {nav.map((item) => {
              const active = path === item.href;
              return (
                <li key={item.href} className="border-b border-inkt/15">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="flex min-h-12 items-center font-display text-3xl text-inkt no-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="border-b border-inkt/15">
              <Link href="/offerte" className="flex min-h-12 items-center font-display text-3xl text-inkt no-underline">
                Offerte
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
