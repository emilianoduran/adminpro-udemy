import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './pages/shared/nopagefound/nopagefound.component';

// tslint:disable-next-line:max-line-length
const APP_ROUTES: Routes = [{ path: 'login', component: LoginComponent }, { path: 'register', component: LoginComponent }, { path: '**', component: NopagefoundComponent }];
// Se exporta la constante que se utilizará en el archivo app.module.ts dentro de imports @ngModules[]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
