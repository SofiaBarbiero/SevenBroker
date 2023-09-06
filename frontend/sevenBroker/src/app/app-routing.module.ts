import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Home
import { DashboardHomeComponent } from './home/dashboard-home/dashboard-home.component';

//Login y Register
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

//Portafolio
import { DashboardPortafolioComponent } from './portafolio/dashboard-portafolio/dashboard-portafolio.component';

//Cotizaciones
import { DashboardCotizacionesComponent } from './cotizaciones/dashboard-cotizaciones/dashboard-cotizaciones.component';

//Compra
import { DashboardCompraComponent } from './compra/dashboard-compra/dashboard-compra.component';



const routes: Routes = [
  //Redireccion default al "Home"
  { path: "", redirectTo: "/home", pathMatch: "full" },

  //Redirecciones de componentes
  { path: "home", component: DashboardHomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "portafolio", component: DashboardPortafolioComponent},
  { path: "cotizaciones", component: DashboardCotizacionesComponent},
  { path: "compra", component: DashboardCompraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
