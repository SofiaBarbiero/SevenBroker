import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';



@NgModule({
  declarations: [
    DashboardHomeComponent
  ],
  exports: [
    DashboardHomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
