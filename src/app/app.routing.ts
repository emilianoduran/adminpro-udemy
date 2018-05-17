import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './pages/page.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: LoginComponent },
  { path: '**', component: NopagefoundComponent }
];
// Se exporta la constante que se utilizará en el archivo app.module.ts dentro de imports @ngModules[]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
