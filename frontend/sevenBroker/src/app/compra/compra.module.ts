import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCompraComponent } from './dashboard-compra/dashboard-compra.component';
import { FormCompraComponent } from './form-compra/form-compra.component';
import { BodyCompraComponent } from './body-compra/body-compra.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardCompraComponent,
    FormCompraComponent,
    BodyCompraComponent
  ],
  exports: [
    DashboardCompraComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CompraModule { }
