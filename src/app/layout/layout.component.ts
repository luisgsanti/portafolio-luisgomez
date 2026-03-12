import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { ExperienciaComponent } from "../components/experiencia/experiencia.component";
import { ProyectosComponent } from "../components/proyectos/proyectos.component";
import { ContactoComponent } from "../components/contacto/contacto.component";
import { FooterComponent } from "../components/footer/footer.component";
import { NavbarComponent } from "../components/navbar/navbar.component";

interface Particle {
  top: number;
  left: number;
  size: number;
  delay: number;
}

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HomeComponent, CommonModule, PerfilComponent, ExperienciaComponent, ProyectosComponent, ContactoComponent, FooterComponent, NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements AfterViewInit, OnDestroy {

  particles: Particle[] = [];
  private sectionObserver: IntersectionObserver | null = null;

  ngOnInit() {
    this.generateParticles(300); // 💫 puedes cambiar el número aquí
  }

  ngAfterViewInit(): void {
    this.initSectionReveal();
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
  }

  generateParticles(count: number) {

    this.particles = Array.from({ length: count }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 10,
    }));
  }

  private initSectionReveal(): void {
    const sectionIds = ['inicio', 'sobre-mi', 'experiencia', 'proyectos', 'contacto'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return;
    }

    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.sectionObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    sections.forEach((section) => {
      section.classList.add('section-reveal');
      this.sectionObserver?.observe(section);
    });
  }

}
