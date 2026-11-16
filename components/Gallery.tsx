"use client";

import { useEffect, useId, useRef, useState } from "react";
import { reeksId, type Photo, type PhotoGroup } from "@/content";
import { Photo as Frame } from "@/components/Photo";

export default function Gallery({
  groups,
  layout = "wrap",
}: {
  groups: PhotoGroup[];
  layout?: "wrap" | "stack" | "portraits";
}) {
  const photos = groups.flatMap((group) => group.photos);
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null) {
      if (!dialog.open) {
        dialog.showModal();
        closeRef.current?.focus();
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((current) => (current === null ? current : (current - 1 + photos.length) % photos.length));
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setIndex((current) => (current === null ? current : (current + 1) % photos.length));
      }
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [index, photos.length]);

  const current = index !== null ? photos[index] : null;
  const sections = sectionsWithStart(groups);

  return (
    <div>
      {sections.map(({ group, start }) => {
        return (
          <section key={group.label} id={reeksId(group.label)} className="mt-10 scroll-mt-24">
            <h2 className="font-mono text-[0.95rem] font-medium tracking-wide text-oker">{group.label}</h2>
            <ul className={listClass(layout)}>
              {group.photos.map((photo, photoIndex) => (
                <li key={photo.src} className="max-w-full">
                  <button
                    type="button"
                    onClick={() => setIndex(start + photoIndex)}
                    className="block max-w-full bg-vlak text-left"
                    aria-label={`Vergroot: ${photo.alt}`}
                  >
                    <Frame photo={photo} displayWidth={displayCap(photo, layout)} />
                  </button>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-labelledby={titleId}
        onCancel={(event) => {
          event.preventDefault();
          setIndex(null);
        }}
        onClose={() => setIndex((currentIndex) => (currentIndex === null ? currentIndex : null))}
      >
        {current && index !== null ? (
          <div className="flex h-full max-w-[100vw] flex-col overflow-hidden">
            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <p id={titleId} className="font-mono text-sm">
                {index + 1} van {photos.length}
              </p>
              <button ref={closeRef} type="button" className="btn btn-wit" onClick={() => setIndex(null)}>
                Sluiten
              </button>
            </div>
            <div className="flex min-h-0 flex-1 items-center justify-center px-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.src}
                alt={current.alt}
                width={current.w}
                height={current.h}
                className="h-auto w-auto max-w-full"
                style={{
                  maxWidth: `min(92vw, ${current.w}px)`,
                  maxHeight: "calc(100dvh - 9.5rem)",
                }}
              />
            </div>
            <div className="grid grid-cols-2 gap-px bg-geel">
              <button type="button" className="btn btn-inkt min-h-12 rounded-none" onClick={() => setIndex((index - 1 + photos.length) % photos.length)}>
                Vorige
              </button>
              <button type="button" className="btn btn-geel min-h-12 rounded-none" onClick={() => setIndex((index + 1) % photos.length)}>
                Volgende
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}

function sectionsWithStart(groups: PhotoGroup[]) {
  const sections: { group: PhotoGroup; start: number }[] = [];
  let start = 0;
  for (const group of groups) {
    sections.push({ group, start });
    start += group.photos.length;
  }
  return sections;
}

function listClass(layout: "wrap" | "stack" | "portraits") {
  if (layout === "stack") return "mt-4 flex flex-col items-start gap-6";
  if (layout === "portraits") return "mt-4 flex flex-wrap items-start gap-4";
  return "mt-4 flex flex-wrap items-start gap-3";
}

function displayCap(photo: Photo, layout: "wrap" | "stack" | "portraits") {
  if (layout === "stack") return photo.w;
  if (layout === "portraits") return Math.min(photo.w, 400);
  return Math.min(photo.w, photo.w >= photo.h ? 420 : 280);
}
