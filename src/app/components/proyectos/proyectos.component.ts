import { Component, OnDestroy, OnInit } from '@angular/core';
import { projectsData, Project } from '../../data/proyectos.data';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  templateUrl: './proyectos.component.html'
})
export class ProyectosComponent implements OnInit, OnDestroy {

  projects: Project[] = projectsData;

  currentIndex = 0;
  readonly autoplayDelay = 4000;
  readonly progressTickMs = 50;
  progress = 0;

  private autoplayId: number | null = null;
  private progressId: number | null = null;

  get totalProjects(): number {
    return this.projects.length;
  }

  get progressWidth(): string {
    return `${this.progress}%`;
  }

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay(true);
  }

  previousProject(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.totalProjects) % this.totalProjects;

    this.restartAutoplay();
  }

  nextProject(): void {
    this.currentIndex =
      (this.currentIndex + 1) % this.totalProjects;

    this.restartAutoplay();
  }

  pauseAutoplay(): void {
    this.stopAutoplay(false);
  }

  resumeAutoplay(): void {
    this.startAutoplay();
  }

  formatCounter(value: number): string {
    return String(value).padStart(2, '0');
  }

  private startAutoplay(resetProgress = false): void {

    if (this.autoplayId !== null) return;
    if (resetProgress) this.progress = 0;

    this.autoplayId = window.setInterval(() => {

      this.currentIndex =
        (this.currentIndex + 1) % this.totalProjects;
      this.progress = 0;

    }, this.autoplayDelay);
    this.startProgress();

  }

  private stopAutoplay(resetProgress = false): void {
    if (this.autoplayId !== null) {
      clearInterval(this.autoplayId);
      this.autoplayId = null;
    }
    this.stopProgress(resetProgress);

  }

  private restartAutoplay(resetProgress = true): void {

    this.stopAutoplay(resetProgress);
    this.startAutoplay(resetProgress);

  }

  private startProgress(): void {
    if (this.progressId !== null) return;

    const step = (this.progressTickMs / this.autoplayDelay) * 100;

    this.progressId = window.setInterval(() => {
      this.progress = Math.min(100, this.progress + step);
    }, this.progressTickMs);
  }

  private stopProgress(resetProgress: boolean): void {
    if (this.progressId !== null) {
      clearInterval(this.progressId);
      this.progressId = null;
    }
    if (resetProgress) {
      this.progress = 0;
    }
  }

}