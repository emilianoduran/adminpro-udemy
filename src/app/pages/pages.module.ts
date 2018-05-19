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

@NgModule({
  declarations: [DashboardComponent, Graficas1Component, PageComponent, ProgressComponent, IncrementadorComponent],
  imports: [CommonModule, SharedModule, PAGES_ROUTES, FormsModule],
  exports: [DashboardComponent, Graficas1Component, PageComponent, IncrementadorComponent],
  providers: []
})
export class PagesModule {}
