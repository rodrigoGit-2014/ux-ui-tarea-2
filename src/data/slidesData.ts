import { CoverData, ObjectiveData, Pillar, EcosystemActor, Tension, Finding, BriefData } from '../types';

export const coverData: CoverData = {
  title: "Plataforma de confianza digital para enfermedades poco frecuentes",
  subtitle: "Crowdfunding confiable para campañas médicas verificadas"
};

export const objectiveData: ObjectiveData = {
  text: "Construir un ecosistema donde cada donación genere impacto real y verificable en familias que enfrentan enfermedades poco frecuentes"
};

export const pillarsData: Pillar[] = [
  {
    id: "confianza",
    title: "Confianza",
    description: "Validación rigurosa de cada campaña médica",
    icon: "Shield"
  },
  {
    id: "transparencia",
    title: "Transparencia",
    description: "Trazabilidad total del uso de fondos",
    icon: "Eye"
  },
  {
    id: "validacion",
    title: "Validación médica",
    description: "Certificación de diagnósticos y tratamientos",
    icon: "FileCheck"
  },
  {
    id: "ia",
    title: "IA",
    description: "Detección de fraude y automatización ética",
    icon: "Cpu"
  },
  {
    id: "trazabilidad",
    title: "Trazabilidad",
    description: "Seguimiento en tiempo real de fondos y progreso",
    icon: "Package"
  },
  {
    id: "crowdfunding-humano",
    title: "Crowdfunding humano",
    description: "Empatía y conexión real con las familias",
    icon: "Heart"
  }
];

export const ecosystemData: EcosystemActor[] = [
  {
    id: "plataforma",
    label: "Plataforma ONG",
    position: { x: 50, y: 50 },
    connections: ["familias", "donantes", "finanzas", "ux", "ia"],
    isCenter: true
  },
  {
    id: "familias",
    label: "Familias",
    position: { x: 50, y: 15 },
    connections: ["plataforma"]
  },
  {
    id: "donantes",
    label: "Donantes",
    position: { x: 85, y: 35 },
    connections: ["plataforma"]
  },
  {
    id: "finanzas",
    label: "Finanzas/Compliance",
    position: { x: 85, y: 65 },
    connections: ["plataforma"]
  },
  {
    id: "ux",
    label: "UX/UI",
    position: { x: 50, y: 85 },
    connections: ["plataforma"]
  },
  {
    id: "ia",
    label: "Plataforma IA",
    position: { x: 15, y: 65 },
    connections: ["plataforma"]
  }
];

export const tensionsData: Tension[] = [
  {
    id: "emocion-transparencia",
    title: "Emoción vs Transparencia",
    side1: {
      label: "Emoción",
      description: "Las historias humanas mueven a la acción y generan empatía inmediata"
    },
    side2: {
      label: "Transparencia",
      description: "Los datos duros construyen confianza y credibilidad sostenible"
    },
    question: "¿Cómo diseñar una experiencia que active la emoción sin perder rigor técnico?"
  },
  {
    id: "rapidez-validacion",
    title: "Rapidez vs Validación",
    side1: {
      label: "Rapidez",
      description: "Las familias necesitan fondos urgentemente para tratamientos críticos"
    },
    side2: {
      label: "Validación",
      description: "La verificación médica y financiera toma tiempo pero es esencial"
    },
    question: "¿Cómo acelerar los procesos sin comprometer la calidad de la validación?"
  },
  {
    id: "simplicidad-seguridad",
    title: "UX Simple vs Seguridad",
    side1: {
      label: "UX Simple",
      description: "Interfaces intuitivas para familias y donantes no técnicos"
    },
    side2: {
      label: "Seguridad",
      description: "Verificaciones múltiples y compliance regulatorio complejo"
    },
    question: "¿Cómo ocultar la complejidad sin reducir las garantías de seguridad?"
  }
];

export const findingsData: Finding[] = [
  {
    id: "finding-1",
    text: "Las familias temen que las plataformas tradicionales sean insensibles o burocráticas",
    emphasis: "temen que las plataformas tradicionales"
  },
  {
    id: "finding-2",
    text: "Los donantes desconfían de campañas improvisadas sin validación externa",
    emphasis: "desconfían de campañas improvisadas"
  },
  {
    id: "finding-3",
    text: "La tecnología debe ser invisible: las familias quieren ayuda, no software",
    emphasis: "tecnología debe ser invisible"
  },
  {
    id: "finding-4",
    text: "La transparencia radical genera más donaciones que las historias emocionales solas",
    emphasis: "transparencia radical genera más donaciones"
  },
  {
    id: "finding-5",
    text: "El ecosistema necesita una ONG central que garantice imparcialidad y confianza",
    emphasis: "ONG central que garantice imparcialidad"
  }
];

export const briefData: BriefData = {
  statement: "Transformar campañas médicas improvisadas en un ecosistema digital confiable",
  subtitle: "Donde la tecnología sirve a la humanidad",
  closing: "Plataforma de Confianza Digital - Enfermedades Poco Frecuentes"
};
