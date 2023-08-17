import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCotizacionesComponent } from './dashboard-cotizaciones/dashboard-cotizaciones.component';



@NgModule({
  declarations: [
    DashboardCotizacionesComponent
  ],
  exports: [
    DashboardCotizacionesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CotizacionesModule { }
