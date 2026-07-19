export type GalleryCategory =
  | "touring"
  | "festivals"
  | "tv"
  | "stage"
  | "tradeshow"
  | "backstage";

export interface GalleryImage {
  id: string;
  src: string;
  altDE: string;
  altEN: string;
  captionDE: string;
  captionEN: string;
  category: GalleryCategory;
}

/**
 * Echte Produktionsfotos, vom Websitebetreiber bereitgestellt.
 * Bildunterschriften sind bewusst neutral-beschreibend gehalten (keine
 * Bandnamen/Auftraggeber), um keine ungeprüften Engagements zu suggerieren.
 * Zwei ursprünglich hochgeladene Bilder wurden nicht übernommen, da es sich
 * um Instagram-App-Screenshots handelte (fremde UI bzw. Repost eines
 * anderen Accounts), keine eigene Produktionsfotografie.
 * Messebau hat aktuell keine eigenen Fotos - siehe README.
 */
export const galleryImages: GalleryImage[] = [
  {
    id: "photo-01",
    src: "/images/gallery/view-from-stage-crowd.jpg",
    altDE: "Blick von der Bühne ins Publikum",
    altEN: "View from the stage into the crowd",
    captionDE: "Blick von der Bühne ins Publikum",
    captionEN: "View from the stage into the crowd",
    category: "festivals",
  },
  {
    id: "photo-02",
    src: "/images/gallery/lighting-prep-backstage.jpg",
    altDE: "Vorbereitung der Lichtelemente backstage",
    altEN: "Preparing lighting elements backstage",
    captionDE: "Vorbereitung der Lichtelemente backstage",
    captionEN: "Preparing lighting elements backstage",
    category: "backstage",
  },
  {
    id: "photo-03",
    src: "/images/gallery/tour-stage-show.jpg",
    altDE: "Bühnenshow im Tour-Setup",
    altEN: "Stage show in touring setup",
    captionDE: "Bühnenshow im Tour-Setup",
    captionEN: "Stage show in touring setup",
    category: "touring",
  },
  {
    id: "photo-04",
    src: "/images/gallery/stage-build-aerial.jpg",
    altDE: "Bühnenaufbau aus der Vogelperspektive",
    altEN: "Stage build, aerial view",
    captionDE: "Bühnenaufbau aus der Vogelperspektive",
    captionEN: "Stage build, aerial view",
    category: "stage",
  },
  {
    id: "photo-05",
    src: "/images/gallery/crowd-sunset.jpg",
    altDE: "Publikum bei Sonnenuntergang",
    altEN: "Crowd at sunset",
    captionDE: "Publikum bei Sonnenuntergang",
    captionEN: "Crowd at sunset",
    category: "festivals",
  },
  {
    id: "photo-07",
    src: "/images/gallery/cable-management.jpg",
    altDE: "Kabelmanagement backstage",
    altEN: "Cable management backstage",
    captionDE: "Kabelmanagement backstage",
    captionEN: "Cable management backstage",
    category: "backstage",
  },
  {
    id: "photo-08",
    src: "/images/gallery/break-during-setup.jpg",
    altDE: "Kurze Pause während des Aufbaus",
    altEN: "Short break during setup",
    captionDE: "Kurze Pause während des Aufbaus",
    captionEN: "Short break during setup",
    category: "backstage",
  },
  {
    id: "photo-10",
    src: "/images/gallery/lighting-rig-above-stage.jpg",
    altDE: "Lichtrigging über der Bühne",
    altEN: "Lighting rig above the stage",
    captionDE: "Lichtrigging über der Bühne",
    captionEN: "Lighting rig above the stage",
    category: "stage",
  },
  {
    id: "photo-11",
    src: "/images/gallery/central-stage-major-event.jpg",
    altDE: "Zentrale Bühne bei einer Großveranstaltung",
    altEN: "Central stage at a major event",
    captionDE: "Zentrale Bühne bei einer Großveranstaltung",
    captionEN: "Central stage at a major event",
    category: "tv",
  },
  {
    id: "photo-12",
    src: "/images/gallery/open-air-stage-rain.jpg",
    altDE: "Open-Air-Bühne im Regen",
    altEN: "Open-air stage in the rain",
    captionDE: "Open-Air-Bühne im Regen",
    captionEN: "Open-air stage in the rain",
    category: "festivals",
  },
  {
    id: "photo-13",
    src: "/images/gallery/roadcases-load-out.jpg",
    altDE: "Roadcases vor dem Load-out",
    altEN: "Road cases before load-out",
    captionDE: "Roadcases vor dem Load-out",
    captionEN: "Road cases before load-out",
    category: "backstage",
  },
  {
    id: "photo-14",
    src: "/images/gallery/tv-stage-set-build.jpg",
    altDE: "Aufbau eines TV-Bühnenbilds",
    altEN: "Building a TV stage set",
    captionDE: "Aufbau eines TV-Bühnenbilds",
    captionEN: "Building a TV stage set",
    category: "tv",
  },
  {
    id: "photo-15",
    src: "/images/gallery/crew-member-on-site.jpg",
    altDE: "Crew-Mitglied vor Ort",
    altEN: "Crew member on site",
    captionDE: "Crew-Mitglied vor Ort",
    captionEN: "Crew member on site",
    category: "backstage",
  },
  {
    id: "photo-16",
    src: "/images/gallery/stage-show-lighting-effects.jpg",
    altDE: "Bühnenshow mit Lichteffekten",
    altEN: "Stage show with lighting effects",
    captionDE: "Bühnenshow mit Lichteffekten",
    captionEN: "Stage show with lighting effects",
    category: "tv",
  },
  {
    id: "photo-17",
    src: "/images/gallery/stage-mirrored-rig.jpg",
    altDE: "Bühnenaufbau mit Spiegel-Rig",
    altEN: "Stage setup with a mirrored rig",
    captionDE: "Bühnenaufbau mit Spiegel-Rig",
    captionEN: "Stage setup with a mirrored rig",
    category: "tv",
  },
  {
    id: "photo-18",
    src: "/images/gallery/historic-event-venue.jpg",
    altDE: "Im Innenraum einer historischen Veranstaltungshalle",
    altEN: "Inside a historic event venue",
    captionDE: "Im Innenraum einer historischen Veranstaltungshalle",
    captionEN: "Inside a historic event venue",
    category: "backstage",
  },
  {
    id: "photo-19",
    src: "/images/gallery/workshop-stage-elements.jpg",
    altDE: "Werkstattaufbau für Bühnenelemente",
    altEN: "Workshop assembly of stage elements",
    captionDE: "Werkstattaufbau für Bühnenelemente",
    captionEN: "Workshop assembly of stage elements",
    category: "stage",
  },
  {
    id: "photo-20",
    src: "/images/gallery/stage-show-fan-beam-lighting.jpg",
    altDE: "Bühnenshow mit Lichtfächer",
    altEN: "Stage show with fan-beam lighting",
    captionDE: "Bühnenshow mit Lichtfächer",
    captionEN: "Stage show with fan-beam lighting",
    category: "tv",
  },
];
