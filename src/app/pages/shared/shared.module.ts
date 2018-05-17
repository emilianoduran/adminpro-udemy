import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { BredcrumbsComponent } from './bredcrumbs/bredcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [BredcrumbsComponent, SidebarComponent, HeaderComponent, NopagefoundComponent],
  imports: [CommonModule],
  exports: [BredcrumbsComponent, SidebarComponent, HeaderComponent, NopagefoundComponent],
  providers: []
})
export class SharedModule {}
