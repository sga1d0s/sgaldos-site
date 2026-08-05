export type ExperienceEntry = {
  period: string;
  company: string;
  role: string;
  description: string;
  highlights?: string[];
  technical?: boolean;
};

export type EducationEntry = {
  year: string;
  title: string;
  subject: string;
  school: string;
};

export type ExperienceCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  introduction: string;
  profileLabel: string;
  profileTitle: string;
  profileText: string;
  profilePoints: string[];
  timelineTitle: string;
  previousTitle: string;
  present: string;
  experience: ExperienceEntry[];
  previousExperience: ExperienceEntry[];
  skillsTitle: string;
  skillsIntro: string;
  skillGroups: Array<{ title: string; skills: string[] }>;
  educationTitle: string;
  education: EducationEntry[];
  languagesTitle: string;
  languages: Array<{ name: string; level: string }>;
  cvLabel: string;
  cvText: string;
  downloadCv: string;
  cvUrl: string;
  contactLabel: string;
  contactTitle: string;
  contactText: string;
  contactButton: string;
};

export const experienceCopy: Record<"es" | "en", ExperienceCopy> = {
  es: {
    metaTitle: "Experiencia | Sergio Galdos",
    metaDescription:
      "Experiencia profesional, formación y capacidades técnicas de Sergio Galdos, desarrollador Full-Stack.",
    eyebrow: "Experiencia / perfil profesional",
    title: "Desarrollo, sistemas y una visión completa del negocio.",
    introduction:
      "Mi trayectoria combina desarrollo Full-Stack, administración de sistemas y experiencia liderando relaciones con clientes y equipos.",
    profileLabel: "Perfil",
    profileTitle: "Del problema al producto en producción.",
    profileText:
      "Desarrollo aplicaciones web y móviles, APIs REST y servicios desplegados con Docker. Trabajo con bases de datos relacionales y aplico criterios de seguridad, rendimiento y escalabilidad durante todo el ciclo de desarrollo.",
    profilePoints: [
      "Frontend, backend y móvil",
      "APIs e integración de servicios",
      "CI/CD, Docker y DevOps",
      "Orientación a producto y cliente",
    ],
    timelineTitle: "Experiencia profesional",
    previousTitle: "Experiencia anterior",
    present: "Presente",
    experience: [
      {
        period: "2025 — Presente",
        company: "Stechome",
        role: "Desarrollador Full-Stack",
        description:
          "Desarrollo y mantenimiento de aplicaciones web y móviles con Laravel, integrando servicios y administrando la capa de datos.",
        highlights: [
          "Diseño y desarrollo de APIs REST",
          "Despliegues de servicios con Docker",
          "Administración de bases de datos relacionales",
        ],
        technical: true,
      },
      {
        period: "2024 — 2025",
        company: "Demain Informática",
        role: "Técnico de sistemas",
        description:
          "Mantenimiento presencial y remoto de redes, equipos y sistemas informáticos para particulares y empresas.",
        technical: true,
      },
      {
        period: "2024",
        company: "OROI",
        role: "Prácticas de desarrollo",
        description:
          "Mantenimiento y evolución de una API REST con Laravel y JavaScript, trabajando en backend, modelado de datos y consultas MySQL.",
        highlights: [
          "Laravel y JavaScript",
          "Modelado de datos",
          "Optimización de consultas MySQL",
        ],
        technical: true,
      },
    ],
    previousExperience: [
      {
        period: "2016 — 2024",
        company: "Siquijor Language Academy",
        role: "Director comercial",
        description:
          "Gestión de clientes, seguimiento de objetivos y coordinación de personal.",
      },
      {
        period: "2006 — 2016",
        company: "Promociones y Cursos UK, S.L.",
        role: "Técnico comercial",
        description:
          "Relación con clientes, elaboración de ofertas de servicio y seguimiento comercial.",
      },
      {
        period: "2004 — 2005",
        company: "Promociones y Cursos UK, S.L.",
        role: "Técnico informático",
        description:
          "Mantenimiento y administración de equipos y sistemas informáticos.",
      },
    ],
    skillsTitle: "Capacidades técnicas",
    skillsIntro:
      "Un stack orientado a construir, integrar y desplegar aplicaciones completas.",
    skillGroups: [
      {
        title: "Backend",
        skills: [
          "Laravel",
          "PHP",
          "Node.js",
          "Express",
          "Java",
          "APIs REST",
          "OCPP",
        ],
      },
      {
        title: "Frontend y móvil",
        skills: [
          "React",
          "JavaScript",
          "TypeScript",
          "React Native",
          "HTML",
          "CSS",
        ],
      },
      {
        title: "Datos",
        skills: [
          "MariaDB",
          "MySQL",
          "PostgreSQL",
          "MongoDB",
          "Modelado relacional",
        ],
      },
      {
        title: "Infraestructura",
        skills: ["Docker", "Docker Compose", "Git", "Linux", "CI/CD", "NAS"],
      },
    ],
    educationTitle: "Formación",
    education: [
      {
        year: "2025",
        title: "Grado Superior",
        subject: "Desarrollo de Aplicaciones Web",
        school: "IES AEG · Donostia",
      },
      {
        year: "2001",
        title: "Formación técnica",
        subject:
          "Mantenimiento y administración de redes y sistemas informáticos",
        school: "Escuela MasterD · Donostia",
      },
      {
        year: "2000",
        title: "Grado Superior",
        subject: "Técnico especialista en Electricidad y Electrónica",
        school: "Escuela San José Obrero · Urnieta",
      },
    ],
    languagesTitle: "Idiomas",
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "B2" },
      { name: "Euskera", level: "B1" },
    ],
    cvLabel: "Currículum",
    cvText: "La versión completa, preparada para descargar o compartir.",
    downloadCv: "Descargar currículum",
    cvUrl: "/documents/cv-sergio-galdos-es.pdf",
    contactLabel: "Contacto",
    contactTitle: "¿Trabajamos juntos?",
    contactText:
      "Estoy abierto a proyectos y oportunidades donde aportar una visión técnica y de producto.",
    contactButton: "Contactar",
  },
  en: {
    metaTitle: "Experience | Sergio Galdos",
    metaDescription:
      "Professional experience, education and technical capabilities of Full-Stack Developer Sergio Galdos.",
    eyebrow: "Experience / professional profile",
    title: "Development, systems and a complete view of the business.",
    introduction:
      "My background combines Full-Stack development, systems administration and experience leading client relationships and teams.",
    profileLabel: "Profile",
    profileTitle: "From problem to production-ready product.",
    profileText:
      "I develop web and mobile applications, REST APIs and Dockerized services. I work with relational databases and apply security, performance and scalability principles throughout the development lifecycle.",
    profilePoints: [
      "Frontend, backend and mobile",
      "APIs and service integration",
      "CI/CD, Docker and DevOps",
      "Product and client focus",
    ],
    timelineTitle: "Work experience",
    previousTitle: "Previous experience",
    present: "Present",
    experience: [
      {
        period: "2025 — Present",
        company: "Stechome",
        role: "Full-Stack Developer",
        description:
          "Development and maintenance of web and mobile applications using Laravel, integrating services and managing the data layer.",
        highlights: [
          "REST API design and development",
          "Docker-based service deployments",
          "Relational database administration",
        ],
        technical: true,
      },
      {
        period: "2024 — 2025",
        company: "Demain Informática",
        role: "Systems Technician",
        description:
          "On-site and remote maintenance of computer networks, hardware and IT systems for individuals and businesses.",
        technical: true,
      },
      {
        period: "2024",
        company: "OROI",
        role: "Development internship",
        description:
          "Maintenance and enhancement of a REST API using Laravel and JavaScript, covering backend development, data modelling and MySQL queries.",
        highlights: [
          "Laravel and JavaScript",
          "Data modelling",
          "MySQL query optimisation",
        ],
        technical: true,
      },
    ],
    previousExperience: [
      {
        period: "2016 — 2024",
        company: "Siquijor Language Academy",
        role: "Sales Manager",
        description:
          "Client relationship management, target monitoring and staff coordination.",
      },
      {
        period: "2006 — 2016",
        company: "Promociones y Cursos UK, S.L.",
        role: "Sales Representative",
        description:
          "Client communication, service proposal preparation and sales follow-up.",
      },
      {
        period: "2004 — 2005",
        company: "Promociones y Cursos UK, S.L.",
        role: "IT Technician",
        description:
          "Maintenance and administration of computer systems and hardware.",
      },
    ],
    skillsTitle: "Technical capabilities",
    skillsIntro:
      "A stack focused on building, integrating and deploying complete applications.",
    skillGroups: [
      {
        title: "Backend",
        skills: [
          "Laravel",
          "PHP",
          "Node.js",
          "Express",
          "Java",
          "REST APIs",
          "OCPP",
        ],
      },
      {
        title: "Frontend and mobile",
        skills: [
          "React",
          "JavaScript",
          "TypeScript",
          "React Native",
          "HTML",
          "CSS",
        ],
      },
      {
        title: "Data",
        skills: [
          "MariaDB",
          "MySQL",
          "PostgreSQL",
          "MongoDB",
          "Relational modelling",
        ],
      },
      {
        title: "Infrastructure",
        skills: ["Docker", "Docker Compose", "Git", "Linux", "CI/CD", "NAS"],
      },
    ],
    educationTitle: "Education",
    education: [
      {
        year: "2025",
        title: "Higher Technician Diploma (EQF Level 5)",
        subject: "Web Application Development",
        school: "IES AEG · Donostia",
      },
      {
        year: "2001",
        title: "Technical Training",
        subject: "Computer Network and Systems Administration and Maintenance",
        school: "MasterD School · Donostia",
      },
      {
        year: "2000",
        title: "Higher Technician Diploma (EQF Level 5)",
        subject: "Electrical and Electronics Engineering",
        school: "San José Obrero School · Urnieta",
      },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "B2 (CEFR)" },
      { name: "Basque", level: "B1" },
    ],
    cvLabel: "Resume",
    cvText: "The complete version, ready to download or share.",
    downloadCv: "Download resume",
    cvUrl: "/documents/cv-sergio-galdos-en.pdf",
    contactLabel: "Contact",
    contactTitle: "Shall we work together?",
    contactText:
      "I am open to projects and opportunities where I can bring both a technical and product perspective.",
    contactButton: "Get in touch",
  },
};
