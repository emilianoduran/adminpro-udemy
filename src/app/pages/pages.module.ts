import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PageComponent } from './page.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesasComponent } from './promesas/promesas.component';

// Routes child
import { PAGES_ROUTES } from './pages.routing';
<<<<<<< HEAD
import { SharedModule } from './shared/shared.module';
import { DataEmpresaComponent } from './data-empresa/data-empresa.component';
=======
>>>>>>> c1c531e7e616d49e9aea6ede06340c004c7cc1cc
// Shareds Modules
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';

// componentes personalizados
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
// Gráficas
import { ChartsModule } from 'ng2-charts';
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
<<<<<<< HEAD
  declarations: [DashboardComponent, Graficas1Component, ProgressComponent, PageComponent, DataEmpresaComponent],
  imports: [CommonModule, SharedModule, PAGES_ROUTES],
  exports: [DashboardComponent, Graficas1Component, ProgressComponent, PageComponent, DataEmpresaComponent],
=======
  declarations: [
    DashboardComponent,
    Graficas1Component,
    PageComponent,
    ProgressComponent,
    IncrementadorComponent,
    GraficaDonaComponent,
    AccountSettingComponent,
    PromesasComponent,
    RxjsComponent
  ],
  imports: [CommonModule, SharedModule, PAGES_ROUTES, FormsModule, ChartsModule],
  exports: [DashboardComponent, Graficas1Component, PageComponent, IncrementadorComponent, GraficaDonaComponent, AccountSettingComponent],
>>>>>>> c1c531e7e616d49e9aea6ede06340c004c7cc1cc
  providers: []
})
export class PagesModule {}
