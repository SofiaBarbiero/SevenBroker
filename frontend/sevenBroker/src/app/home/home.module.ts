import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';



@NgModule({
  declarations: [
    DashboardHomeComponent,
    CarrouselComponent,
    QuienesSomosComponent,
    TarjetaComponent
  ],
  exports: [
    DashboardHomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
