import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
  isMenuOpen = false;
  activeSection = 'inicio';
  private readonly sectionIds = ['inicio', 'sobre-mi', 'experiencia', 'proyectos', 'contacto'];

  ngAfterViewInit(): void {
    this.updateActiveSection();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateActiveSection();
  }

  isActive(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }

  private updateActiveSection(): void {
    const scrollY = window.scrollY + 140;

    for (const id of this.sectionIds) {
      const section = document.getElementById(id);
      if (!section) continue;

      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollY >= top && scrollY < bottom) {
        this.activeSection = id;
      }
    }
  }
}
