import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPortafolioComponent } from './dashboard-portafolio/dashboard-portafolio.component';



@NgModule({
  declarations: [
    DashboardPortafolioComponent
  ],
  exports: [
    DashboardPortafolioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortafolioModule { }
