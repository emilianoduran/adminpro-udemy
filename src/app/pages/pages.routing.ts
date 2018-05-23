import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      { path: 'account-setting', component: AccountSettingComponent },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
    ]
  }
];
// Al ser rutas hijas se utiliza forChild()
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
