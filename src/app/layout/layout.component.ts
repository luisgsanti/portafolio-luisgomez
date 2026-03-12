import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { ExperienciaComponent } from "../components/experiencia/experiencia.component";
import { ProyectosComponent } from "../components/proyectos/proyectos.component";
import { ContactoComponent } from "../components/contacto/contacto.component";
import { FooterComponent } from "../components/footer/footer.component";

interface Particle {
  top: number;
  left: number;
  size: number;
  delay: number;
}

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HomeComponent, CommonModule, PerfilComponent, ExperienciaComponent, ProyectosComponent, ContactoComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  particles: Particle[] = [];

  ngOnInit() {
    this.generateParticles(300); // 💫 puedes cambiar el número aquí
  }

  generateParticles(count: number) {

    this.particles = Array.from({ length: count }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 10,
    }));
  }

}
