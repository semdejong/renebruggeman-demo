import { content } from "@/content";
import { ctaType } from "@/lib/cta";
import { EdgeJoint, Scarf } from "@/components/Joints";

export default function MobileBar() {
  const { contact } = content;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden print:hidden">
      <EdgeJoint flip />
      <div className="flex bg-inkt pb-[env(safe-area-inset-bottom)]">
        <a
          href={contact.phoneTel}
          data-cta={ctaType(contact.phoneTel)}
          className="btn btn-geel min-h-12 flex-1 rounded-none"
        >
          Bellen
        </a>
        <Scarf axis="x" />
        <LinkOfferte />
      </div>
    </div>
  );
}

function LinkOfferte() {
  return (
    <a href="/offerte" data-cta="offerte" className="inline-flex min-h-12 flex-1 items-center justify-center font-semibold text-wit no-underline">
      Offerte
    </a>
  );
}
