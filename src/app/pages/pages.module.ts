import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PageComponent } from './page.component';
// Routes child
import { PAGES_ROUTES } from './pages.routing';
import { SharedModule } from './shared/shared.module';
// Shareds Modules

@NgModule({
  declarations: [DashboardComponent, Graficas1Component, ProgressComponent, PageComponent],
  imports: [CommonModule, SharedModule, PAGES_ROUTES],
  exports: [DashboardComponent, Graficas1Component, ProgressComponent, PageComponent],
  providers: []
})
export class PagesModule {}
