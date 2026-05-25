import { CoverData, ObjectiveData, Pillar, EcosystemActor, Tension, Finding, BriefData, StrategicMapData } from '../types';

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

export const strategicMapData: StrategicMapData = {
  title: "Mapa de actores y oportunidades",
  subtitle: "Estrategias y tácticas para establecer alianzas de confianza a largo plazo",
  columns: [
    { id: "gubernamentales", label: "Gubernamentales", color: "blue" },
    { id: "ong", label: "ONG (Social)", color: "green" },
    { id: "medicas", label: "Inf. Médicas", color: "orange" },
    { id: "ux-ia", label: "UX/Interfaz de IA", color: "purple" },
    { id: "sistema-ia", label: "SISTEMA DE IA", color: "cyan" },
    { id: "financiero", label: "Financiero Legal", color: "pink" }
  ],
  rows: [
    {
      id: "familias",
      label: "FAMILIAS",
      color: "green",
      cells: [
        { id: "f1", title: "Información verificada", description: "sobre tratamientos y especialistas", icon: "FileCheck" },
        { id: "f2", title: "Empoderamiento", description: "para tomar decisiones médicas informadas", icon: "Users" },
        { id: "f3", title: "Conexión con comunidad", description: "de familias con casos similares", icon: "Heart" },
        { id: "f4", title: "Interface adaptativa", description: "que reduce estrés cognitivo", icon: "Sparkles" },
        { id: "f5", title: "Tutoriales guiados", description: "y asistencia inteligente", icon: "Bot" },
        { id: "f6", title: "Orientación legal", description: "y acceso a recursos sociales", icon: "Scale" }
      ]
    },
    {
      id: "donantes",
      label: "DONANTES",
      color: "amber",
      cells: [
        { id: "d1", title: "Validación oficial", description: "de campañas por autoridades", icon: "Shield" },
        { id: "d2", title: "Respaldo colectivo", description: "y credibilidad comunitaria", icon: "Users" },
        { id: "d3", title: "Certificación médica", description: "de diagnósticos y tratamientos", icon: "FileHeart" },
        { id: "d4", title: "Dashboards claros", description: "de impacto y progreso", icon: "BarChart" },
        { id: "d5", title: "Reportes automatizados", description: "y alertas de fraude", icon: "BellRing" },
        { id: "d6", title: "Trazabilidad financiera", description: "completa y auditable", icon: "Receipt" }
      ]
    },
    {
      id: "plataforma",
      label: "PLATAFORMA ONG",
      color: "violet",
      cells: [
        { id: "p1", title: "Alianzas estratégicas", description: "con entidades gubernamentales", icon: "Handshake" },
        { id: "p2", title: "Colaboración sectorial", description: "con otras ONGs", icon: "Network" },
        { id: "p3", title: "Convenios médicos", description: "para validación profesional", icon: "Building2" },
        { id: "p4", title: "Estándares de diseño", description: "centrado en el usuario", icon: "Palette" },
        { id: "p5", title: "Infraestructura ética", description: "de IA y algoritmos transparentes", icon: "Cpu" },
        { id: "p6", title: "Compliance regulatorio", description: "y auditorías externas", icon: "CheckCircle" }
      ]
    },
    {
      id: "uxui",
      label: "UX UI",
      color: "rose",
      cells: [
        { id: "u1", title: "Simplicidad regulada", description: "que cumple estándares oficiales", icon: "Zap" },
        { id: "u2", title: "Accesibilidad universal", description: "para todos los usuarios", icon: "Eye" },
        { id: "u3", title: "Lenguaje claro", description: "validado por profesionales", icon: "MessageCircle" },
        { id: "u4", title: "Componentes reutilizables", description: "y sistema de diseño robusto", icon: "Box" },
        { id: "u5", title: "Interfaces predictivas", description: "que anticipan necesidades", icon: "Sparkles" },
        { id: "u6", title: "Flujos seguros", description: "sin fricción innecesaria", icon: "Lock" }
      ]
    }
  ]
};

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
