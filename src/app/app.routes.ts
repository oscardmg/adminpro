import {RouterModule, Routes} from "@angular/router";

import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./login/register.component";
import {NopagefoundComponent} from "./shared/nopagefound/nopagefound.component";




const appRoutes: Routes =  [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent}, // cualquier otra ruta que no este definida redireccione al componente notpagefound
];

// para poderlas importar tengo que definir el modulo

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true}); // usar hash me da menos problemas
