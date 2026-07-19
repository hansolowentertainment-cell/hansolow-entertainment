export interface Reference {
  id: string;
  client: string;
  titleDE: string;
  titleEN: string;
  dateDE: string;
  dateEN: string;
  scopeDE: string;
  scopeEN: string;
}

/**
 * Touring & Festival-Referenzen.
 * Reihenfolge = chronologisch, dient der Nachvollziehbarkeit, nicht der Wertung.
 */
export const touringReferences: Reference[] = [
  {
    id: "imminence-eu-uk-2024",
    client: "IMMINENCE",
    titleDE: "EU/UK Tour",
    titleEN: "EU/UK Tour",
    dateDE: "Oktober 2024",
    dateEN: "October 2024",
    scopeDE: "Tour Support und Bühnenaufbau",
    scopeEN: "Tour support and stage construction",
  },
  {
    id: "imminence-scandinavia-2025",
    client: "IMMINENCE",
    titleDE: "Scandinavia Tour",
    titleEN: "Scandinavia Tour",
    dateDE: "Februar 2025",
    dateEN: "February 2025",
    scopeDE: "Tour Support, Bühnenaufbau und Preproduction Support",
    scopeEN: "Tour support, stage construction and preproduction support",
  },
  {
    id: "imminence-festival-2025",
    client: "IMMINENCE",
    titleDE: "Festival Tour",
    titleEN: "Festival Tour",
    dateDE: "2025",
    dateEN: "2025",
    scopeDE: "Tour Support und Bühnenaufbau",
    scopeEN: "Tour support and stage construction",
  },
  {
    id: "imminence-eu-arena-2025",
    client: "IMMINENCE",
    titleDE: "EU Arena Tour",
    titleEN: "EU Arena Tour",
    dateDE: "Dezember 2025",
    dateEN: "December 2025",
    scopeDE: "Tour Support mit erweiterter Verantwortung innerhalb der Bühnenabläufe",
    scopeEN: "Tour support with extended responsibility within stage operations",
  },
  {
    id: "imminence-summer-2026",
    client: "IMMINENCE",
    titleDE: "Festivalsommer 2026",
    titleEN: "2026 Festival Summer",
    dateDE: "2026",
    dateEN: "2026",
    scopeDE: "Tour Support, Bühnenaufbau und Produktionsunterstützung",
    scopeEN: "Tour support, stage construction and production support",
  },
  {
    id: "festival-summer-2026-eminem",
    client: "Festivalsommer 2026",
    titleDE: "Einsatz im Produktionsumfeld eines Festivalsommers 2026 mit Eminem im Line-up",
    titleEN: "Production support within a 2026 festival environment featuring Eminem in the line-up",
    dateDE: "2026",
    dateEN: "2026",
    scopeDE: "Bühnenaufbau und Produktionsunterstützung im Festivalumfeld",
    scopeEN: "Stage construction and production support within the festival environment",
  },
];

/** TV-Produktionen und Großveranstaltungen. */
export const tvReferences: Reference[] = [
  {
    id: "mdr-productions",
    client: "MDR",
    titleDE: "MDR Produktionen",
    titleEN: "MDR Productions",
    dateDE: "",
    dateEN: "",
    scopeDE: "Bühnenaufbau, Umbauten und Produktionsunterstützung",
    scopeEN: "Stage construction, changeovers and production support",
  },
  {
    id: "schlagerboom-dortmund-2025",
    client: "Schlagerboom",
    titleDE: "Schlagerboom Dortmund",
    titleEN: "Schlagerboom Dortmund",
    dateDE: "2025",
    dateEN: "2025",
    scopeDE: "Bühnenaufbau und Produktionsunterstützung",
    scopeEN: "Stage construction and production support",
  },
  {
    id: "fest-der-1000-lichter-suhl",
    client: "Fest der 1000 Lichter",
    titleDE: "Fest der 1000 Lichter, Suhl",
    titleEN: "Fest der 1000 Lichter, Suhl",
    dateDE: "",
    dateEN: "",
    scopeDE: "Bühnenaufbau und Unterstützung technischer Abläufe während der Veranstaltung",
    scopeEN: "Stage construction and support of technical workflows during the event",
  },
  {
    id: "schlagerboom-silvester-muenchen",
    client: "Schlagerboom",
    titleDE: "Schlagerboom Silvester, München",
    titleEN: "Schlagerboom New Year's Eve, Munich",
    dateDE: "",
    dateEN: "",
    scopeDE: "Bühnenaufbau, Load-in und Load-out",
    scopeEN: "Stage construction, load-in and load-out",
  },
  {
    id: "schlagerchampions-velodrom-berlin-2026",
    client: "Schlagerchampions",
    titleDE: "Schlagerchampions, Velodrom Berlin",
    titleEN: "Schlagerchampions, Velodrom Berlin",
    dateDE: "2026",
    dateEN: "2026",
    scopeDE: "Bühnenaufbau und Produktionsunterstützung",
    scopeEN: "Stage construction and production support",
  },
  {
    id: "schlagerboom-kitzbuehel-2026",
    client: "Schlagerboom",
    titleDE: "Schlagerboom Kitzbühel",
    titleEN: "Schlagerboom Kitzbühel",
    dateDE: "2026",
    dateEN: "2026",
    scopeDE: "Bühnenaufbau und Produktionsunterstützung",
    scopeEN: "Stage construction and production support",
  },
  {
    id: "litpop-leipzig-mdr",
    client: "MDR",
    titleDE: "LitPop Leipzig",
    titleEN: "LitPop Leipzig",
    dateDE: "",
    dateEN: "",
    scopeDE: "Produktionsunterstützung für den MDR",
    scopeEN: "Production support for MDR",
  },
  {
    id: "leipziger-buchmesse-mdr",
    client: "MDR",
    titleDE: "Leipziger Buchmesse",
    titleEN: "Leipzig Book Fair",
    dateDE: "",
    dateEN: "",
    scopeDE: "Einsatz für den MDR: Bühnenaufbau und Produktionsunterstützung",
    scopeEN: "Assignment for MDR: stage construction and production support",
  },
];

/** Messebau und Sonderprojekte. */
export const tradeShowReferences: Reference[] = [
  {
    id: "handwerksmesse-leipzig",
    client: "Handwerksmesse Leipzig",
    titleDE: "Handwerksmesse Leipzig",
    titleEN: "Handwerksmesse Leipzig (Trade Fair)",
    dateDE: "",
    dateEN: "",
    scopeDE: "Messestandbau im Auftrag von Pfennigbau / Balativ",
    scopeEN: "Trade show booth construction on behalf of Pfennigbau / Balativ",
  },
  {
    id: "haus-garten-freizeit-leipzig",
    client: "Haus-Garten-Freizeit Leipzig",
    titleDE: "Haus-Garten-Freizeit Leipzig",
    titleEN: "Haus-Garten-Freizeit Leipzig (Trade Fair)",
    dateDE: "",
    dateEN: "",
    scopeDE: "Messestandbau im Auftrag von Pfennigbau / Balativ",
    scopeEN: "Trade show booth construction on behalf of Pfennigbau / Balativ",
  },
  {
    id: "leipziger-buchmesse-messebau",
    client: "MDR",
    titleDE: "Leipziger Buchmesse",
    titleEN: "Leipzig Book Fair",
    dateDE: "",
    dateEN: "",
    scopeDE: "Standbau, Einsatz für den MDR",
    scopeEN: "Booth construction, assignment for MDR",
  },
  {
    id: "dornbirn-messestand",
    client: "Internationaler Messestandbau",
    titleDE: "Messestandbau in Dornbirn, Österreich",
    titleEN: "Trade show construction in Dornbirn, Austria",
    dateDE: "",
    dateEN: "",
    scopeDE: "Internationaler Messestandbau inklusive Montage eines vollständigen Küchenbereichs",
    scopeEN: "International trade show construction including installation of a complete kitchen area",
  },
  {
    id: "chemnitz-leipzig-messebau",
    client: "Messestandbau",
    titleDE: "Messestandbau in Chemnitz und Leipzig",
    titleEN: "Trade show construction in Chemnitz and Leipzig",
    dateDE: "",
    dateEN: "",
    scopeDE: "Auf- und Abbau von Messeständen",
    scopeEN: "Build and strike of trade show booths",
  },
  {
    id: "balativ-lager-2026",
    client: "Balativ",
    titleDE: "Lagerumstrukturierung Balativ",
    titleEN: "Warehouse reorganisation, Balativ",
    dateDE: "2026",
    dateEN: "2026",
    scopeDE: "Unterstützung bei der Lagerumstrukturierung",
    scopeEN: "Support with warehouse reorganisation",
  },
];
