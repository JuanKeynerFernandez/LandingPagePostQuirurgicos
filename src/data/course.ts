import type { Course } from './types';

export const course: Course = {
  hero: {
    eyebrow: 'Curso para esteticistas, cosmetólogas y terapeutas',
    title: 'Trabaja tus posquirúrgicos con *criterio*, no con miedo',
    lead: 'Aprende a valorar, acompañar y tratar usuarios posquirúrgicos con un protocolo claro: qué hacer, cuándo hacerlo y por qué hacerlo.',
    cta: 'Quiero más información',
    secondaryCta: 'Ver los módulos',
    highlights: ['Más de 15 años de experiencia', '10 módulos', 'Método P.R.O.P.Ó.S.I.T.O'],
    image: 'images/hero.jpg',
    imageAlt: 'Flor Milena Hincapié, instructora del curso Posquirúrgicos con Propósito',
    quote: 'No todo tejido duro es fibrosis.',
  },

  pains: {
    eyebrow: '¿Te ha pasado?',
    title: 'Si alguna vez pensaste esto, este curso es para ti',
    items: [
      'El usuario se endureció y no supe qué hacer.',
      'Tengo miedo de estar empeorando una fibrosis.',
      'No sé si estoy trabajando bien desde el inicio.',
      'Con unos usuarios me va súper bien y con otros no.',
    ],
    closing: 'No es falta de talento: es falta de *criterio*.',
  },

  transformation: {
    eyebrow: 'Tu transformación',
    title: 'De improvisar a trabajar con *propósito*',
    before: {
      title: 'Hoy',
      items: [
        'Tienes miedo de empeorar a un usuario.',
        'No sabes si estás drenando bien.',
        'Trabajas igual con todos los usuarios.',
        'Te angustias cuando aparecen bolitas o endurecimientos.',
        'Haces maniobras por repetición.',
      ],
    },
    after: {
      title: 'Al terminar el curso',
      items: [
        'Valoras correctamente a cada usuario posquirúrgico.',
        'Sabes qué hacer según la etapa del postoperatorio.',
        'Previenes la fibrosis desde el inicio.',
        'Diferencias edema, inflamación y fibrosis.',
        'Detectas señales de alarma y sabes cuándo remitir.',
        'Explicas con seguridad lo que haces.',
      ],
    },
  },

  method: {
    eyebrow: 'El método',
    title: 'Método *P.R.O.P.Ó.S.I.T.O*',
    intro:
      'Aquí no aprenderás maniobras memorizadas. Aprenderás a entender qué está pasando en el cuerpo de tu usuario.',
    steps: [
      { letter: 'P', label: 'Preparar y valorar' },
      { letter: 'R', label: 'Reconocer el tejido' },
      { letter: 'O', label: 'Observar señales' },
      { letter: 'P', label: 'Prevenir fibrosis' },
      { letter: 'Ó', label: 'Orientar al usuario' },
      { letter: 'S', label: 'Seguridad terapéutica' },
      { letter: 'I', label: 'Intervenir con criterio' },
      { letter: 'T', label: 'Tratar según evolución' },
      { letter: 'O', label: 'Obtener mejores resultados' },
    ],
    quote: 'Hacer lo correcto, para el usuario correcto, en el momento correcto.',
    cta: 'Quiero aprender el método',
  },

  modules: {
    eyebrow: 'Contenido del curso',
    title: '10 módulos para dejar de *improvisar*',
    intro:
      'Un recorrido completo: desde lo que pasa en un cuerpo recién operado hasta construir tu propio protocolo.',
    cta: 'Quiero inscribirme',
    items: [
      {
        title: 'Deja de improvisar: entiende lo que realmente pasa en un cuerpo recién operado',
        topics: [
          'Qué pasa dentro del cuerpo después de la cirugía',
          'Fases reales del postoperatorio',
          'Inflamación normal vs. anormal',
          'Cómo cicatriza el tejido',
          'Por qué no todos los usuarios evolucionan igual',
          'El error de trabajar igual a todas',
        ],
        result: 'Entiendes el proceso del cuerpo y dejas de trabajar a ciegas.',
      },
      {
        title: 'Antes de tocar: aprende a valorar a un usuario posquirúrgico con criterio',
        topics: [
          'Cómo hacer una valoración profesional',
          'Qué preguntas hacer',
          'Qué observar',
          'Qué tocar y cómo palpar',
          'Signos normales y señales de alerta',
          'Cuándo NO trabajar',
        ],
        result: 'Valoras con seguridad y dejas de improvisar.',
      },
      {
        title: '¿Tu usuario se endurece? Aprende a prevenir fibrosis desde la primera sesión',
        topics: [
          'Qué es realmente la fibrosis',
          'Endurecimiento normal vs. fibrosis',
          'Factores de riesgo',
          'Qué hacer desde el día 1',
          'Errores que empeoran la fibrosis',
          'Estrategias preventivas',
        ],
        result: 'Intervienes antes de que aparezca un problema mayor.',
      },
      {
        title: 'Protocolo según la etapa del postoperatorio',
        topics: [
          'Usuario de 1 a 3 días de operado',
          'Usuario de 7 días de operado',
          'Usuario de 15 días de operado',
          'Usuario de 1 mes de operado',
          'Qué sí hacer y qué no hacer',
          'Intensidad correcta',
        ],
        result: 'Sabes qué hacer en cada momento de la recuperación.',
      },
      {
        title: 'Drena sin lastimar: posquirúrgicos sin dolor y con mejores resultados',
        topics: [
          'Presión correcta',
          'Cómo trabajar sin generar trauma',
          'Mitos del masaje fuerte',
          'Cómo disminuir el dolor',
          'Secuencia inteligente del drenaje',
          'Cómo generar confianza',
        ],
        result: 'Trabajas con más seguridad y mejores resultados.',
      },
      {
        title: '¿Eso es normal o una alerta? Identifica complicaciones tempranas',
        topics: [
          'Seroma',
          'Fibrosis problemática',
          'Inflamación anormal',
          'Signos de infección',
          'Dolor de alarma',
          'Cuándo remitir',
        ],
        result: 'Proteges a tu usuario y actúas con criterio.',
      },
      {
        title: 'Aprende a leer el tejido: lo que tus manos deben sentir',
        topics: [
          'Cómo palpar correctamente',
          'Qué se siente normal y qué no',
          'Texturas del tejido',
          'Cómo cambia el tejido',
          'Interpretación clínica',
        ],
        result: 'Dejas de depender solo de la vista.',
      },
      {
        title: 'No solo es drenar: acompaña a tu usuario con propósito',
        topics: [
          'Comunicación terapéutica',
          'Cómo educar al usuario',
          'Cómo transmitir seguridad',
          'Manejo emocional del postoperatorio',
          'Empatía sin perder profesionalismo',
          'Seguimiento',
        ],
        result: 'Te diferencias profesionalmente.',
      },
      {
        title: 'Casos reales: ¿qué harías tú aquí?',
        topics: [
          'Casos clínicos reales',
          'Errores frecuentes',
          'Qué harías diferente',
          'Resolución de casos',
          'Toma de decisiones',
        ],
        result: 'Ganas seguridad real.',
      },
      {
        title: 'Construye tu protocolo posquirúrgico con propósito',
        topics: [
          'Cómo organizar las sesiones',
          'Protocolos por tipo de cirugía',
          'Seguimiento y registro',
          'Plan de tratamiento',
          'Tu sello profesional',
        ],
        result: 'Terminas con una estructura clara y confianza.',
      },
    ],
  },

  audience: {
    eyebrow: 'Para quién es',
    title: '¿Este curso es para ti?',
    for: {
      title: 'Es para ti si…',
      items: [
        'Eres esteticista, cosmetóloga, auxiliar o terapeuta.',
        'Ya realizas drenajes, pero sientes inseguridad.',
        'Has tenido usuarios con endurecimientos.',
        'Quieres dejar de improvisar y actualizarte.',
        'Buscas diferenciarte profesionalmente.',
      ],
    },
    notFor: {
      title: 'No es para ti si…',
      items: [
        'Buscas memorizar maniobras sin entender el porqué.',
        'Crees que «si duele, sirve».',
        'Quieres un mismo protocolo para todos los usuarios.',
      ],
    },
    patientNote:
      '¿Eres paciente y buscas un drenaje posquirúrgico? Este curso es una formación para profesionales. Sigue siempre las indicaciones de tu cirujano.',
  },

  instructors: {
    eyebrow: 'Conoce a tu instructora',
    title: 'Aprende de la *experiencia*',
    intro: 'Comprende cada proceso y transforma tu manera de trabajar los posquirúrgicos.',
    people: [
      {
        name: 'Flor Milena Hincapié',
        role: 'Profesional de la salud y especialista en acompañamiento posquirúrgico estético',
        highlights: [
          'Más de 15 años de experiencia en drenajes y acompañamiento posquirúrgico',
          'Formación en enfermería, servicio farmacéutico y cosmetología',
          'Experiencia en casas de recuperación (Recovery) de Medellín',
          'Usuarios de distintas regiones de Colombia y de otros países',
        ],
        bio: [
          'Soy una profesional apasionada por la salud, la estética y el acompañamiento humano. Mi trayectoria se basa en el conocimiento, la práctica y el aprendizaje constante.',
          'Estos años me han enseñado que cada cirugía, cada cuerpo y cada proceso de recuperación son diferentes. Por eso, el abordaje posquirúrgico no debe basarse en protocolos generalizados, sino en el conocimiento, la observación y el criterio profesional.',
          'Hoy quiero compartir contigo lo que he aprendido en este camino, para ayudarte a fortalecer tu seguridad profesional y a diseñar protocolos posquirúrgicos con propósito, de manera consciente, individualizada y responsable.',
          'Porque detrás de cada procedimiento hay una persona que merece conocimiento, respeto y un acompañamiento profesional.',
        ],
        quote:
          'Más de 15 años acompañando procesos de recuperación. Hoy transformo mi experiencia en conocimiento para formar profesionales que trabajan con propósito.',
        photo: 'images/instructora.jpg',
      },
    ],
  },

  details: {
    eyebrow: 'Modalidad e inversión',
    title: 'Fechas, modalidad e *inversión*',
    intro:
      'Estamos definiendo la modalidad y el calendario del próximo grupo. Escríbenos por WhatsApp y te enviamos toda la información.',
    cta: 'Pedir fechas e inversión',
    items: [
      {
        icon: 'monitor',
        label: 'Modalidad',
        value: null,
        fallback: 'Virtual o presencial. Te contamos los detalles por WhatsApp.',
      },
      {
        icon: 'calendar',
        label: 'Fechas y horarios',
        value: null,
        fallback: 'Te enviamos el calendario del próximo grupo.',
      },
      {
        icon: 'clock',
        label: 'Duración',
        value: null,
        fallback: '10 módulos. Te compartimos la intensidad horaria.',
      },
      {
        icon: 'wallet',
        label: 'Inversión',
        value: null,
        fallback: 'Te enviamos el valor y las formas de pago.',
      },
    ],
  },

  bonuses: {
    confirmed: false,
    title: 'Bonos incluidos',
    items: [
      'Checklist de valoración posquirúrgica',
      'Guía rápida de señales de alarma',
      'Mapa de prevención de fibrosis por etapas',
      'Frases para educar a tus usuarios y generar confianza',
    ],
  },

  certification: null,

  testimonials: {
    eyebrow: 'Testimonios',
    title: 'Lo que dicen nuestras *alumnas*',
    items: [],
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Resolvemos tus *dudas*',
    items: [
      {
        question: '¿A quién está dirigido el curso?',
        answer:
          'A esteticistas, cosmetólogas, auxiliares y terapeutas que trabajan con usuarios posquirúrgicos y quieren hacerlo con criterio, seguridad y propósito.',
      },
      {
        question: '¿Es otro curso de drenaje?',
        answer:
          'No. Aquí no memorizas maniobras: aprendes a valorar al usuario, leer el tejido y decidir qué hacer según la etapa del postoperatorio.',
      },
      {
        question: '¿Aprenderé a «romper» la fibrosis?',
        answer:
          'La fibrosis no se trabaja desde la fuerza. Aprenderás a prevenirla desde la primera sesión y a acompañar la reorganización del tejido respetando los tiempos biológicos.',
      },
      {
        question: '¿El curso es virtual o presencial?',
        answer:
          'Estamos definiendo la modalidad del próximo grupo. Escríbenos por WhatsApp y te enviamos los detalles.',
      },
      {
        question: '¿Cuánto cuesta y cuáles son las fechas?',
        answer: 'Te enviamos la inversión, las formas de pago y el calendario por WhatsApp.',
      },
      {
        question: '¿Necesito experiencia previa?',
        answer:
          'El curso está pensado para profesionales que ya trabajan con drenajes y quieren más criterio. Si estás empezando, escríbenos y te orientamos.',
      },
      {
        question: 'Soy paciente, ¿este curso es para mí?',
        answer:
          'No. Es una formación para profesionales. Si estás en recuperación, sigue siempre las indicaciones de tu cirujano.',
      },
    ],
  },

  finalCta: {
    title: 'Deja de improvisar. Empieza a trabajar con *criterio*.',
    text: 'Escríbenos por WhatsApp y te enviamos la modalidad, las fechas y la inversión del curso.',
    cta: 'Quiero inscribirme',
  },
};
