import { RouterModule, Routes } from '@angular/router';
import { PageComponent, DashboardComponent, ProgressComponent, Graficas1Component, AccountSettingComponent, PromesasComponent, RxjsComponent } from './pages.index';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
      { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
      { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
      { path: 'account-setting', component: AccountSettingComponent, data: { titulo: 'Ajustes de Cuenta' } },
      { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Rxjs -Promesas y obserbadores' } },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
    ]
  }
];
// Al ser rutas hijas se utiliza forChild()
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
