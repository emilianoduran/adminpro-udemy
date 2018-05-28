import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

import { PageComponent } from './page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DataEmpresaComponent } from './data-empresa/data-empresa.component';
=======
import { PageComponent, DashboardComponent, ProgressComponent, Graficas1Component, AccountSettingComponent, PromesasComponent, RxjsComponent } from './pages.index';
>>>>>>> c1c531e7e616d49e9aea6ede06340c004c7cc1cc

const pagesRoutes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
<<<<<<< HEAD
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      { path: 'data-empresa', component: DataEmpresaComponent },
=======
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
      { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
      { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
      { path: 'account-setting', component: AccountSettingComponent, data: { titulo: 'Ajustes de Cuenta' } },
      { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Rxjs -Promesas y obserbadores' } },
>>>>>>> c1c531e7e616d49e9aea6ede06340c004c7cc1cc
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
    ]
  }
];
// Al ser rutas hijas se utiliza forChild()
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
