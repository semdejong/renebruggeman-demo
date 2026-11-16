/**
 * Alle zichtbare gegevens van deze demo.
 * Niets verzinnen: teksten volgen de site van René Bruggeman, licht geredigeerd.
 * slug blijft "renebruggeman-demo" (data-demo van de analytics-tracker).
 */

export const content = {
  slug: "renebruggeman-demo",

  company: {
    name: "René Bruggeman Schilderwerken",
    shortName: "René Bruggeman",
    slogan: "Als u kwaliteit wenst en verwacht!",
    logo: "/logo.png",
    logoWidth: 475,
    logoHeight: 112,
  },

  colors: {
    inkt: "#111111",
    papier: "#F5F2E8",
    vlak: "#EBE6D8",
    wit: "#FFFFFF",
    geel: "#FFFF00",
    oker: "#5C4D00",
  },

  seo: {
    title: "René Bruggeman Schilderwerken · Nijverdal",
    description:
      "Schilderwerk binnen en buiten, deelvervanging bij houtrot, glas en het vernieuwen van houtwerk. René Bruggeman, Nijverdal. Vrijblijvend en kosteloos een offerte.",
    lang: "nl",
  },

  contact: {
    street: "H.A. Hartholtstraat 15",
    postcode: "7441 DV",
    city: "Nijverdal",
    phoneDisplay: "06-23479372",
    phoneTel: "tel:+31623479372",
    email: "renebruggeman@live.nl",
    emailHref: "mailto:renebruggeman@live.nl",
  },

  nav: [
    { label: "Schilderwerk", href: "/schilderwerk" },
    { label: "Deelvervanging", href: "/deelvervanging" },
    { label: "Glaswerk", href: "/glaswerk" },
    { label: "Vernieuwen", href: "/vernieuwen" },
    { label: "Projecten", href: "/projecten" },
    { label: "Activiteiten", href: "/activiteiten" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
  ],

  overview:
    "Voor schilderwerk binnen en buiten, timmerwerk, houtrot- en kozijnreparaties, isolatieglas plaatsen, carport, enzovoort.",

  quote:
    "Bel of mail me dan gerust. Ik maak vrijblijvend en kosteloos een offerte voor u.",

  intro: {
    greet:
      "Graag stel ik mij aan u voor. Mijn naam is René Bruggeman en sinds 1978 ben ik werkzaam als schilder. Eerst bij een schildersbedrijf en in 2007 heb ik de sprong gemaakt naar ZZP'er.",
    painter: "Op de eerste plaats ben ik een schilder met vele jaren ervaring.",
    rot: "Vaak blijkt dat er naast het schilderwerk, door houtrot, deelvervanging van een kozijn nodig is. Dit wil zeggen dat maar een deel van een raam of deurkozijn verrot is en er een nieuw gedeelte in kan worden geplaatst. Het betreffende kozijn is daarna weer als nieuw.",
    self: "Deze werkzaamheden worden allemaal door mij gedaan, waardoor er geen extra timmerman nodig is. Dit betekent een flinke kostenbesparing.",
    glass:
      "Ook het plaatsen van glas, van een eenvoudige ruit tot allerlei soorten en maten, is een deel van mijn werk.",
    maintenance:
      "Onderhoudswerkzaamheden, zowel binnen als buiten, behoren tot mijn dagelijkse werkzaamheden.",
    winter:
      "Voor binnenwerk in de periode november tot en met maart spreek ik een kostendekkend uurloon af.",
  },

  services: [
    {
      title: "Schilderwerk",
      text: "Onderhoud binnen en buiten hoort bij mijn dagelijkse werk.",
      href: "/schilderwerk",
      flex: 1.35,
    },
    {
      title: "Deelvervanging",
      text: "Alleen het verrotte deel van het kozijn wordt vervangen.",
      href: "/deelvervanging",
      flex: 1.2,
    },
    {
      title: "Glaswerk",
      text: "Van een eenvoudige ruit tot hoog rendement glas.",
      href: "/glaswerk",
      flex: 0.86,
    },
    {
      title: "Vernieuwen",
      text: "Houtwerk, windveren en boeien.",
      href: "/vernieuwen",
      flex: 1.05,
    },
    {
      title: "Carport",
      text: "Ook genoemd, naast timmerwerk en isolatieglas.",
      flex: 0.72,
    },
  ],

  steps: [
    {
      code: "01",
      label: "BEOORDELEN",
      text: "Eerst kijk ik of een houtrot-reparatiemiddel nog volstaat.",
    },
    {
      code: "02",
      label: "UITHAKKEN",
      text: "Zo niet, dan gaat alleen het verrotte deel uit het kozijn.",
    },
    {
      code: "03",
      label: "INZETTEN",
      text: "In dat gat komt een nieuw gedeelte hout.",
    },
    {
      code: "04",
      label: "AFWERKEN",
      text: "Het kozijn is daarna weer als nieuw en kan jaren mee.",
    },
  ],

  deelvervanging: {
    lead: "Valt houtrot niet meer te maken met een houtrot-reparatiemiddel? Dan kan deelvervanging uitkomst bieden.",
    body: "Vaak blijkt dat er naast het schilderwerk, door houtrot, deelvervanging van een kozijn nodig is. Dit wil zeggen dat maar een deel van een raam of deurkozijn verrot is en er een nieuw gedeelte in kan worden geplaatst. Het betreffende kozijn is na deze restauratie als nieuw en kan weer jaren mee.",
    benefits: [
      "U hoeft geen extra timmerman in te huren.",
      "Kostenbesparing, omdat niet het hele kozijn wordt vervangen.",
    ],
  },

  vernieuwen: {
    lines: [
      "Verbetering of restauratie van houtwerk.",
      "Enkelglas vervangen door hoog rendement glas.",
      "Het vernieuwen van windveren en boeien.",
    ],
    close: "Bel of mail voor meer informatie.",
  },

  activiteiten: {
    line: "Wij zijn ieder jaar hoofdsponsor van het Krent Slemdamesdubbel tennistoernooi in oktober.",
  },

  projecten: {
    line: "Projecten foto galerij.",
    note: "De foto's hebben geen bijschrift, plaats of jaartal. Ze staan op nummer, zoals ze zijn aangeleverd.",
  },

  offerte: {
    subject: "Goedendag, offerteaanvraag",
    note: "Dit formulier stuurt niets naar een server. Na verzenden opent uw e-mailprogramma een bericht aan renebruggeman@live.nl. Het bericht vertrekt pas als u het zelf verstuurt.",
  },

  contactForm: {
    subject: "Goedendag, bericht",
    note: "Ook dit formulier stuurt niets naar een server. Het opent uw e-mailprogramma, met als aanhef Goedendag.",
  },

  werkOptions: [
    "Schilderwerk binnen of buiten",
    "Deelvervanging",
    "Glaswerk",
    "Vernieuwen van houtwerk",
    "Anders, licht ik toe in het bericht",
  ],

  photos: {
    rene: {
      src: "/img/rene-aan-het-werk.gif",
      w: 470,
      h: 321,
      alt: "Collage van René Bruggeman die een raam schildert. Zijn gezicht is te zien in de weerspiegeling van het glas.",
    },
    kozijn: {
      src: "/img/kozijn.jpg",
      w: 286,
      h: 370,
      alt: "Houten model van een kozijndeel, met een ingezet stuk hout.",
    },
    kwast: {
      src: "/img/kwast.gif",
      w: 228,
      h: 296,
      alt: "Twee kwasten, close-up.",
    },
  },
} as const;

export type Photo = { src: string; w: number; h: number; alt: string };

export type PhotoGroup = { label: string; photos: Photo[] };

function photo(src: string, w: number, h: number, alt: string): Photo {
  return { src, w, h, alt };
}

function projectSize(n: number): [number, number] {
  if (n <= 5) return [850, 565];
  if (n <= 25) return [850, 638];
  if (n <= 33) return [850, 565];
  if (n === 36) return [600, 800];
  if (n === 37 || n === 38) return [479, 850];
  if (n <= 46) return [481, 850];
  if (n <= 49) return [850, 481];
  if (n <= 53) return [481, 850];
  if (n <= 68) return [1200, 1600];
  if (n === 69) return [1448, 1448];
  if (n === 70) return [576, 1024];
  if (n <= 72) return [768, 1024];
  return [1024, 768];
}

function projectPhoto(n: number): Photo {
  const [w, h] = projectSize(n);
  const nn = String(n).padStart(2, "0");
  return photo(
    `/img/projecten/${nn}gr.jpg`,
    w,
    h,
    `Werkfoto ${nn} uit de projectgalerij.`,
  );
}

function range(from: number, to: number): number[] {
  return Array.from({ length: to - from + 1 }, (_, i) => from + i);
}

const projectSpans: [string, number, number][] = [
  ["01–05", 1, 5],
  ["06–25", 6, 25],
  ["29–33", 29, 33],
  ["36–46", 36, 46],
  ["47–53", 47, 53],
  ["54–68", 54, 68],
  ["69–73", 69, 73],
];

export const projectGroups: PhotoGroup[] = projectSpans.map(([label, from, to]) => ({
  label,
  photos: range(from, to).map(projectPhoto),
}));

export const deelGroups: PhotoGroup[] = [
  {
    label: "Deel 01, 02, 03 en 05",
    photos: [
      photo(
        "/img/deelvervanging/deel01.jpg",
        850,
        556,
        "Onderdorpel van een pui, vastgezet met lijmklemmen tijdens deelvervanging.",
      ),
      photo(
        "/img/deelvervanging/deel02.jpg",
        850,
        556,
        "Nieuw stuk hout ingezet in de onderzijde van een kozijnstijl.",
      ),
      photo(
        "/img/deelvervanging/deel03.jpg",
        850,
        556,
        "Kozijnstijl naast metselwerk, met een zichtbare naad in het hout.",
      ),
      photo(
        "/img/deelvervanging/deel05.jpg",
        850,
        556,
        "Ingezet stuk hout onderaan een kozijn, naast een blauwe gevelplaat.",
      ),
    ],
  },
  {
    label: "51–59",
    photos: range(51, 59).map((n) => {
      const shot = projectPhoto(n);
      return { ...shot, alt: `Foto bij deelvervanging, nummer ${String(n).padStart(2, "0")}.` };
    }),
  },
];

export const vernieuwenPhotos: Photo[] = [
  photo(
    "/img/vernieuwen/res01.jpg",
    569,
    850,
    "René Bruggeman werkt met een tacker aan een raamkozijn, binnen naast een kast.",
  ),
  photo(
    "/img/vernieuwen/res02.jpg",
    569,
    850,
    "René Bruggeman schaaft een deur of kozijn bij, met een elektrische schaaf.",
  ),
  photo(
    "/img/vernieuwen/res03.jpg",
    569,
    850,
    "Boei of dakrand op metselwerk, deels opengewerkt.",
  ),
  photo(
    "/img/vernieuwen/res04.jpg",
    569,
    850,
    "Nieuw hout langs een dakrand, boven het bestaande werk.",
  ),
  photo(
    "/img/vernieuwen/res05.jpg",
    569,
    850,
    "Aangetast hout bij een boei of windveer, op de hoek van een muur.",
  ),
];

export const activiteitStamp: Photo = photo(
  "/img/activiteiten/activ00.jpg",
  145,
  100,
  "Kleine, onscherpe foto bij het tennistoernooi.",
);

export const activiteitPhotos: Photo[] = range(1, 10).map((n) => {
  const nn = String(n).padStart(2, "0");
  return photo(
    `/img/activiteiten/activ${nn}gr.jpg`,
    640,
    480,
    `Foto van het Krent Slemdamesdubbel tennistoernooi, nummer ${nn}. Zonder namen van speelsters.`,
  );
});
