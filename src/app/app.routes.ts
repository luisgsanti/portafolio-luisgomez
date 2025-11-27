import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
// import { PortafolioComponent } from './pages/portafolio/portafolio.component';

export const routes: Routes = [
  { path: '', component: LayoutComponent, pathMatch: 'full' },
  // { path: 'portafolio', component: PortafolioComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' },

];