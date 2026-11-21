export type IconName =
  | 'whatsapp'
  | 'check'
  | 'x'
  | 'plus'
  | 'arrow-down'
  | 'calendar'
  | 'clock'
  | 'monitor'
  | 'wallet'
  | 'sparkle'
  | 'info'
  | 'gift'
  | 'award'
  | 'instagram'
  | 'facebook';

export type WhatsAppIntent = 'info' | 'enroll' | 'details' | 'question';

export interface Site {
  name: string;
  title: string;
  description: string;
  tagline: string;
  locale: string;
  themeColor: string;
  logo: string;
  ogImage: string;
  whatsapp: {
    phone: string | null;
    messages: Record<WhatsAppIntent, string>;
  };
  social: {
    instagram: string | null;
    facebook: string | null;
  };
  metaPixelId: string | null;
  legal: {
    owner: string | null;
    email: string | null;
    updatedAt: string;
  };
}

export interface SectionCopy {
  eyebrow: string;
  title: string;
  intro?: string;
}

export interface Hero {
  eyebrow: string;
  title: string;
  lead: string;
  cta: string;
  secondaryCta: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  quote: string;
}

export interface ChecklistCard {
  title: string;
  items: string[];
}

export interface MethodStep {
  letter: string;
  label: string;
}

export interface CourseModule {
  title: string;
  topics: string[];
  result: string;
}

export interface Instructor {
  name: string | null;
  role: string | null;
  highlights: string[];
  bio: string[];
  quote: string | null;
  photo: string;
}

export interface DetailItem {
  icon: IconName;
  label: string;
  value: string | null;
  fallback: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Course {
  hero: Hero;
  pains: SectionCopy & { items: string[]; closing: string };
  transformation: SectionCopy & { before: ChecklistCard; after: ChecklistCard };
  method: SectionCopy & { steps: MethodStep[]; quote: string; cta: string };
  modules: SectionCopy & { items: CourseModule[]; cta: string };
  audience: SectionCopy & { for: ChecklistCard; notFor: ChecklistCard; patientNote: string };
  instructors: SectionCopy & { people: Instructor[] };
  details: SectionCopy & { items: DetailItem[]; cta: string };
  bonuses: { confirmed: boolean; title: string; items: string[] };
  certification: { title: string; description: string } | null;
  testimonials: SectionCopy & { items: Testimonial[] };
  faq: SectionCopy & { items: FaqItem[] };
  finalCta: { title: string; text: string; cta: string };
}
