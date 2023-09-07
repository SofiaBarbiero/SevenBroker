import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPortafolioComponent } from './dashboard-portafolio/dashboard-portafolio.component';
import { ResumenComponent } from './resumen/resumen.component';
import { ActivosComponent } from './activos/activos.component';
import { CabeceraComponent } from './cabecera/cabecera.component';


@NgModule({
  declarations: [
    DashboardPortafolioComponent,
    ResumenComponent,
    ActivosComponent,
    CabeceraComponent,
  ],
  exports: [
    DashboardPortafolioComponent,
    ResumenComponent,
    ActivosComponent,
    CabeceraComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PortafolioModule { }
