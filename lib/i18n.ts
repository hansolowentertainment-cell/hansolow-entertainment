export type Lang = "de" | "en";

export const LANGS: Lang[] = ["de", "en"];

export interface NavItem {
  label: string;
  href: string;
}

export interface Dictionary {
  lang: Lang;
  meta: {
    titleHome: string;
    descriptionHome: string;
    titleAbout: string;
    descriptionAbout: string;
    titleServices: string;
    descriptionServices: string;
    titleExperience: string;
    descriptionExperience: string;
    titleGallery: string;
    descriptionGallery: string;
    titleContact: string;
    descriptionContact: string;
    titleImprint: string;
    titlePrivacy: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    experience: string;
    gallery: string;
    contact: string;
    items: NavItem[];
    ctaPrimary: string;
    ctaPrimaryHref: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tagline: string;
    ctaPrimary: string;
    ctaPrimaryHref: string;
    ctaSecondary: string;
    ctaSecondaryHref: string;
    trustItems: string[];
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    factsHeading: string;
    facts: { label: string; value: string }[];
    approachHeading: string;
    approachItems: string[];
    ctaLabel: string;
    ctaHref: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: { title: string; description: string }[];
    note: string;
  };
  experience: {
    eyebrow: string;
    heading: string;
    intro: string;
    roleTitle: string;
    since: string;
    roleDescription: string;
    tasksHeading: string;
    tasks: string[];
  };
  references: {
    eyebrow: string;
    heading: string;
    intro: string;
    touringHeading: string;
    tvHeading: string;
    tradeShowHeading: string;
    tasksLabel: string;
    onRequest: string;
  };
  skills: {
    eyebrow: string;
    heading: string;
    items: string[];
    certificatesHeading: string;
    certificates: string[];
  };
  gallery: {
    eyebrow: string;
    heading: string;
    intro: string;
    categories: Record<string, string>;
    all: string;
    empty: string;
  };
  contactPage: {
    eyebrow: string;
    heading: string;
    intro: string;
    directHeading: string;
    formHeading: string;
    availabilityLabel: string;
  };
  form: {
    name: string;
    company: string;
    email: string;
    phone: string;
    phoneOptional: string;
    projectType: string;
    projectTypeOptions: string[];
    location: string;
    country: string;
    period: string;
    duration: string;
    scope: string;
    message: string;
    consent: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successBody: string;
    errorTitle: string;
    errorBody: string;
    requiredError: string;
    emailError: string;
    consentError: string;
    fallbackNote: string;
  };
  cta: {
    heading: string;
    body: string;
    primary: string;
    primaryHref: string;
    secondary: string;
    secondaryHref: string;
  };
  footer: {
    tagline: string;
    navHeading: string;
    contactHeading: string;
    legalHeading: string;
    imprint: string;
    privacy: string;
    rights: string;
  };
  legal: {
    imprintHeading: string;
    imprintIntro: string;
    imprintDraftNotice: string;
    privacyHeading: string;
    privacyDraftNotice: string;
  };
  common: {
    skipToContent: string;
    languageSwitchLabel: string;
    menuOpen: string;
    menuClose: string;
    callUs: string;
    emailUs: string;
    instagram: string;
    backHome: string;
  };
}
