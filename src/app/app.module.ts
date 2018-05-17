import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// Routes
import { APP_ROUTING } from './app.routing';
// Pages Components
import { PagesModule } from './pages/pages.module';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, APP_ROUTING, PagesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
