import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCompraComponent } from './dashboard-compra/dashboard-compra.component';



@NgModule({
  declarations: [
    DashboardCompraComponent
  ],
  exports: [
    DashboardCompraComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CompraModule { }
