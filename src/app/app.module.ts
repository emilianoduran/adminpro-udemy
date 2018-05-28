import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
// Services

// Routes
import { APP_ROUTING } from './app.routing';
// Pages Components
import { PagesModule } from './pages/pages.module';
import { ServiceModule } from './services/service.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, APP_ROUTING, PagesModule, ServiceModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
