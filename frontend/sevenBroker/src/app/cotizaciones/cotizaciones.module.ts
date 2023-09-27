import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCotizacionesComponent } from './dashboard-cotizaciones/dashboard-cotizaciones.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { TablaComponent } from './tabla/tabla.component';





@NgModule({
  declarations: [
    DashboardCotizacionesComponent,
    CabeceraComponent,
    TablaComponent,
  ],
  exports: [
    DashboardCotizacionesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CotizacionesModule { }
