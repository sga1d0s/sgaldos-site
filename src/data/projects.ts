export type ProjectLink = {
  label: string;
  url?: string;
  kind?: "primary" | "secondary";
};

export type Project = {
  id: "erp" | "demain" | "rentalmoto" | "react-native";
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  note?: string;
  stack: string[];
  links: ProjectLink[];
  presentation: "featured" | "ecosystem" | "mobile" | "native";
};

export type ProjectsCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  introduction: string;
  capabilities: string[];
  selectedWork: string;
  privateLabel: string;
  videoSoon: string;
  mobileExperience: string;
  browserExperience: string;
  closeTitle: string;
  closeText: string;
  closeLink: string;
  projects: Project[];
};

export const projectsCopy: Record<"es" | "en", ProjectsCopy> = {
  es: {
    metaTitle: "Proyectos | Sergio Galdos",
    metaDescription:
      "Selección de proyectos web, aplicaciones de gestión y desarrollos móviles de Sergio Galdos.",
    eyebrow: "Portfolio / proyectos seleccionados",
    title: "Productos digitales, soluciones reales.",
    introduction:
      "Una selección de webs y aplicaciones que he diseñado y desarrollado, desde la interfaz hasta la lógica de negocio.",
    capabilities: [
      "Full-Stack",
      "Laravel / PHP",
      "Mobile-first",
      "React Native",
      // "TypeScript"
    ],
    selectedWork: "Trabajo seleccionado",
    privateLabel: "Proyecto privado",
    videoSoon: "Vídeo próximamente",
    mobileExperience: "Experiencia móvil",
    browserExperience: "Experiencia web",
    closeTitle: "¿Tienes un proyecto en mente?",
    closeText:
      "Hablemos del problema, del producto y de la mejor manera de construirlo.",
    closeLink: "Contactar",
    projects: [
      {
        id: "erp",
        number: "01",
        eyebrow: "Aplicación de gestión · Proyecto destacado",
        title: "ERP a medida",
        description:
          "Plataforma integral desarrollada con Laravel y PHP para centralizar procesos, datos y operaciones en una única herramienta.",
        note: "La demostración se publicará anonimizada para proteger la información real del proyecto.",
        stack: ["Laravel", "PHP", "MySQL", "JavaScript"],
        links: [{ label: "Vídeo próximamente", kind: "primary" }],
        presentation: "featured",
      },
      {
        id: "demain",
        number: "02",
        eyebrow: "Web corporativa + aplicación operativa",
        title: "Ecosistema Demain",
        description:
          "Una presencia digital para comunicar sus servicios y una demo mobile-first para gestionar órdenes de trabajo, prioridades y estados.",
        stack: [
          "Web corporativa",
          "UI responsive",
          "UX de producto",
          "Demo interactiva",
        ],
        links: [
          {
            label: "Visitar la web",
            url: "https://demainweb.dnsalias.com",
            kind: "primary",
          },
          {
            label: "Probar la demo",
            url: "https://demainapp.dnsalias.com/demo/login",
            kind: "secondary",
          },
        ],
        presentation: "ecosystem",
      },
      {
        id: "rentalmoto",
        number: "03",
        eyebrow: "Web app · Mobile-first · Proyecto privado",
        title: "RentalMoto",
        description:
          "Una experiencia concebida para trabajar desde el móvil, con los flujos principales al alcance de una mano.",
        note: "La demostración utilizará contenido anonimizado.",
        stack: ["Mobile-first", "Web app", "Responsive", "UX"],
        links: [{ label: "Vídeo próximamente", kind: "primary" }],
        presentation: "mobile",
      },
      {
        id: "react-native",
        number: "04",
        eyebrow: "Aplicación móvil · Android / iOS",
        title: "React Native App",
        description:
          "Desarrollo móvil centrado en navegación, estado, consumo de API y una experiencia consistente en dispositivos reales.",
        stack: ["React Native", "TypeScript", "API", "Android / iOS"],
        links: [{ label: "Proyecto próximamente", kind: "primary" }],
        presentation: "native",
      },
    ],
  },
  en: {
    metaTitle: "Projects | Sergio Galdos",
    metaDescription:
      "A selection of web projects, management applications and mobile development by Sergio Galdos.",
    eyebrow: "Portfolio / selected projects",
    title: "Digital products built around real problems.",
    introduction:
      "A selection of websites and applications I have designed and developed, from the interface to the business logic.",
    capabilities: [
      "Full-Stack",
      "Laravel / PHP",
      "Mobile-first",
      "React Native",
      // "TypeScript"
    ],
    selectedWork: "Selected work",
    privateLabel: "Private project",
    videoSoon: "Video coming soon",
    mobileExperience: "Mobile experience",
    browserExperience: "Web experience",
    closeTitle: "Have a project in mind?",
    closeText:
      "Let's talk about the problem, the product and the best way to build it.",
    closeLink: "Get in touch",
    projects: [
      {
        id: "erp",
        number: "01",
        eyebrow: "Management application · Featured project",
        title: "Custom ERP",
        description:
          "A business application built with Laravel and PHP to bring processes, data and operations into a single tool.",
        note: "The demo will be anonymised to protect real project information.",
        stack: ["Laravel", "PHP", "MySQL", "JavaScript"],
        links: [{ label: "Video coming soon", kind: "primary" }],
        presentation: "featured",
      },
      {
        id: "demain",
        number: "02",
        eyebrow: "Corporate website + operations app",
        title: "Demain ecosystem",
        description:
          "A digital presence for its services and a mobile-first demo for managing work orders, priorities and statuses.",
        stack: [
          "Corporate website",
          "Responsive UI",
          "Product UX",
          "Interactive demo",
        ],
        links: [
          {
            label: "Visit website",
            url: "https://demainweb.dnsalias.com",
            kind: "primary",
          },
          {
            label: "Try the demo",
            url: "https://demainapp.dnsalias.com/demo/login",
            kind: "secondary",
          },
        ],
        presentation: "ecosystem",
      },
      {
        id: "rentalmoto",
        number: "03",
        eyebrow: "Web app · Mobile-first · Private project",
        title: "RentalMoto",
        description:
          "An experience designed to work from a phone, with its main flows always within easy reach.",
        note: "The demo will use anonymised content.",
        stack: ["Mobile-first", "Web app", "Responsive", "UX"],
        links: [{ label: "Video coming soon", kind: "primary" }],
        presentation: "mobile",
      },
      {
        id: "react-native",
        number: "04",
        eyebrow: "Mobile application · Android / iOS",
        title: "React Native App",
        description:
          "Mobile development focused on navigation, state, API consumption and a consistent experience on real devices.",
        stack: ["React Native", "TypeScript", "API", "Android / iOS"],
        links: [{ label: "Project coming soon", kind: "primary" }],
        presentation: "native",
      },
    ],
  },
};
