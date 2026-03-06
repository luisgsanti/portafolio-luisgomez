import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para *ngFor o @for
import { projectsData, Project } from '../../data/poryectos.data'; // Importa tu archivo de datos


@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  // 1. Cargamos la lista de proyectos
  projects: Project[] = projectsData;

  // 2. Mapa de Colores "Full Melo"
  // Esto asigna estilos automáticamente según el nombre de la tecnología
  techColors: { [key: string]: string } = {
    'Angular': 'text-red-400 bg-red-900/20 border-red-500/30',
    'Node.js': 'text-green-400 bg-green-900/20 border-green-500/30',
    'MySQL': 'text-blue-400 bg-blue-900/20 border-blue-500/30',
    'Hostgator VPS': 'text-gray-300 bg-gray-700/30 border-gray-500/30',
    '.NET Core': 'text-purple-400 bg-purple-900/20 border-purple-500/30',
    'SQL Server': 'text-blue-300 bg-blue-800/20 border-blue-400/30',
    'Tailwind CSS': 'text-cyan-400 bg-cyan-900/20 border-cyan-500/30',
    'Responsive': 'text-pink-500 bg-pink-500/10 border-pink-500/50',
    'Express.js': 'text-gray-200 bg-gray-800/20 border-gray-500/30',
    'JWT Auth': 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30',
    'Git / GitHub': 'text-orange-300 bg-orange-700/30 border-orange-500/50',
    'Bootstrap': 'text-violet-400 bg-violet-900/20 border-violet-500/30',
    'CSS 3': 'text-blue-500 bg-blue-900/20 border-blue-500/30',
    'C#': 'text-purple-300 bg-purple-900/20 border-purple-500/40',
    'ASP.NET Core': 'text-purple-400 bg-purple-900/20 border-purple-500/30',
    'Entity Framework': 'text-indigo-300 bg-indigo-900/20 border-indigo-500/30',
    'TypeScript': 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30',
    'Firebase': 'text-yellow-300 bg-yellow-800/20 border-yellow-500/30',
    'Api WhatsApp': 'text-green-300 bg-green-800/20 border-green-500/30',
    'Api Paypal': 'text-blue-300 bg-blue-800/20 border-blue-500/30',
  };

  // Función para obtener la clase, si no existe usa un gris por defecto
  getTechClass(tech: string): string {
    return this.techColors[tech] || 'text-slate-300 bg-slate-800/50 border-slate-600/30';
  }
}
