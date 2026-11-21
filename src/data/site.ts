import type { Site } from './types';

const courseName = 'Posquirúrgicos con Propósito';

export const site: Site = {
  name: courseName,
  title: `${courseName} | Curso para esteticistas y auxiliares de enfermería`,
  description:
    'Aprende a acompañar usuarios posquirúrgicos con criterio y seguridad. Curso para esteticistas y auxiliares de enfermería, con o sin experiencia previa.',
  tagline: 'Formación para esteticistas, cosmetólogas y auxiliares de enfermería.',
  locale: 'es_LA',
  themeColor: '#0b3f3a',
  logo: 'brand/logo.png',
  ogImage: '/og-image.png',
  whatsapp: {
    phone: null,
    messages: {
      info: `Hola, quiero más información sobre el curso ${courseName}.`,
      enroll: `Hola, quiero inscribirme en el curso ${courseName}.`,
      details: `Hola, quiero conocer la modalidad, las fechas y la inversión del curso ${courseName}.`,
      question: `Hola, tengo una pregunta sobre el curso ${courseName}.`,
    },
  },
  social: {
    instagram: null,
    facebook: null,
  },
  metaPixelId: null,
  legal: {
    owner: null,
    email: null,
    updatedAt: '18 de noviembre de 2026',
  },
};
