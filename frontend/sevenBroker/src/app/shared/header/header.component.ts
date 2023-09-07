import { Component } from '@angular/core';
import {NavigationService} from 'src/app/navigation.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(private NavigationService : NavigationService){}
  navigateHome(){
this.NavigationService.navigateToHome()
}
navigateCotizaciones(){
  this.NavigationService.navigateToCotizaciones()
}
navigatePortafolio(){
  this.NavigationService.navigateToPortafolio()
}
navigateRegister(){
  this.NavigationService.navigateToRegister()
}
navigateIngreso(){
  this.NavigationService.navigateToIngreso()
}
}