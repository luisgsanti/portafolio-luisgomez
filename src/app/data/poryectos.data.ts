
export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink?: string;
  demoLink?: string; 
}

export const projectsData: Project[] = [
  {
    title: 'Kingdom Grace Foundation',
    description: 'Plataforma integral para gestión administrativa y académica. Automatización de reportes, roles de usuario y despliegue en VPS.',
    image: 'assets/images/proyectoKGF.png', 
    techStack: ['Angular',  'Tailwind CSS', 'Responsive','Node.js', 'Express.js','MySQL', 'JWT Auth', 'Git / GitHub', 'Hostgator VPS'],
    githubLink: '',
    demoLink: 'https://kingdomgracefoundation.org'
  },
  {
    title: 'Gestión Deportiva UPC',
    description: 'Sistema web para la automatización de procesos deportivos universitarios, eliminando el uso de papel.',
    image: 'assets/images/proyectoSecdesoft.png',
    techStack: ['Angular', 'CSS 3', 'Bootstrap', 'Responsive','.NET Core', 'MySQL', 'Git / GitHub'],
    githubLink: '',
    demoLink: 'https://deportes.unicesar.edu.co'
  },
  {
    title: 'Hotel y Resort Sugeydigch',
    description: 'Sistema web para la automatización de procesos deportivos universitarios, eliminando el uso de papel.',
    image: 'assets/images/proyectoHyR.png',
    techStack: ['Angular', 'ASP.NET Core', 'C#', 'Entity Framework', 'TypeScript', 'SQL Server', 'Git / GitHub'],
    githubLink: 'https://github.com/luisgsanti/HyR_Sugeydigch',
    demoLink: ''
  },
  {
    title: 'Wayuu Craft',
    description: 'Sitio web para la exhibición, promoción y compra de artesanías Wayuu, destacando productos hechos a mano mediante una interfaz moderna, visual y totalmente responsiva.',
    image: 'assets/images/proyectoWayuuCraft.png',
    techStack: ['Angular', 'Tailwind CSS','Responsive', 'Firebase', 'Api WhatsApp', 'Api Paypal', 'Git / GitHub'],
    githubLink: 'https://github.com/luisgsanti/wayuu-craft',
    demoLink: 'https://wayuu-craft.web.app/home'
  },
];