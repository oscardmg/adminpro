import {RouterModule, Routes} from "@angular/router";

import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./login/register.component";

import {PagesComponent} from "./pages/pages.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ProgressComponent} from "./pages/progress/progress.component";
import {Graficas1Component} from "./pages/graficas1/graficas1.component";
import {NopagefoundComponent} from "./shared/nopagefound/nopagefound.component";




const appRoutes: Routes =  [
  {
    path: '' ,
    component: PagesComponent ,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // cualquier ruta va a direccionar al dashboard
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '**', component: NopagefoundComponent}, // cualquier otra ruta que no este definida redireccione al componente notpagefound

];

// para poderlas importar tengo que definir el modulo

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true}); // usar hash me da menos problemas
