import type { Site } from './types';

const courseName = 'Posquirúrgicos con Propósito';

export const site: Site = {
  name: courseName,
  title: `${courseName} | Curso para esteticistas y terapeutas`,
  description:
    'Aprende a valorar, acompañar y tratar usuarios posquirúrgicos con criterio, propósito y seguridad. Formación para esteticistas, cosmetólogas y terapeutas.',
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
