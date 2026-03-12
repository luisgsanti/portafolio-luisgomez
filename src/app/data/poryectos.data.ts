export interface Project {
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  highlights: string[];
  techStack: string[];
  githubLink?: string;
  demoLink?: string;
}

export const projectsData: Project[] = [
  {
    category: 'Sistema Web',
    title: 'Kingdom Grace Foundation',
    description:
      'Plataforma integral para gestión administrativa y seguimiento de proyectos sociales.',
    image: 'assets/images/proyectoKGF.png',
    alt: 'Sistema Kingdom Grace Foundation',
    highlights: [
      'Panel administrativo',
      'Gestión de usuarios',
      'Reportes automatizados'
    ],
    techStack: [
      'Angular',
      'Node.js',
      'Express.js',
      'MySQL',
      'Tailwind CSS',
      'JWT Auth'
    ],
    githubLink: '',
    demoLink: 'https://kingdomgracefoundation.org'
  },

  {
    category: 'E-commerce',
    title: 'Wayuu Craft',
    description:
      'Sitio web para promoción y compra de artesanías Wayuu con experiencia visual moderna.',
    image: 'assets/images/proyectoWayuuCraft.png',
    alt: 'Wayuu Craft',
    highlights: [
      'Catálogo visual',
      'Pago online',
      'Diseño responsive'
    ],
    techStack: [
      'Angular',
      'Firebase',
      'Tailwind CSS',
      'Api Paypal',
      'Api WhatsApp'
    ],
    githubLink: 'https://github.com/luisgsanti/wayuu-craft',
    demoLink: 'https://wayuu-craft.web.app'
  },

  {
    category: 'Sistema Web',
    title: 'Gestión Deportiva UPC',
    description:
      'Sistema web para la automatización de procesos deportivos universitarios, eliminando el uso de papel.',
    image: 'assets/images/proyectoSecdesoft.png',
    alt: 'Gestión Deportiva UPC',
    highlights: [
      'Automatización de procesos',
      'Eliminación del uso de papel',
      'Diseño responsive'
    ],
    techStack: ['Angular', 'ASP.NET Core', 'C#', 'Entity Framework', 'Bootstrap', 'Responsive','TypeScript', 'MySQL', 'Git / GitHub'],
    githubLink: '',
    demoLink: 'https://deportes.unicesar.edu.co'
  },

  {
    category: 'Sistema Web',
    title: 'Hotel y Resort Sugeydigch',
    description:
      'Sistema web para la gestión de reservas y servicios de un hotel y resort, con diseño responsive y facilidad de uso.',
    image: 'assets/images/proyectoHyR.png',
    alt: 'Hotel y Resort Sugeydigch',
    highlights: [
      'Gestión de reservas',
      'Gestión de servicios',
      'Diseño responsive'
    ],
    techStack: ['Angular', 'ASP.NET Core', 'C#', 'Entity Framework', 'TypeScript', 'SQL Server', 'Git / GitHub'],
    githubLink: 'https://github.com/luisgsanti/HyR_Sugeydigch',
    demoLink: ''
  }
];
