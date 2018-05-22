import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PageComponent } from './page.component';
import { ProgressComponent } from './progress/progress.component';

// Routes child
import { PAGES_ROUTES } from './pages.routing';
// Shareds Modules
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';

// componentes personalizados
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
// Gráficas
import { ChartsModule } from 'ng2-charts';
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';

@NgModule({
  declarations: [DashboardComponent, Graficas1Component, PageComponent, ProgressComponent, IncrementadorComponent, GraficaDonaComponent],
  imports: [CommonModule, SharedModule, PAGES_ROUTES, FormsModule, ChartsModule],
  exports: [DashboardComponent, Graficas1Component, PageComponent, IncrementadorComponent, GraficaDonaComponent],
  providers: []
})
export class PagesModule {}
