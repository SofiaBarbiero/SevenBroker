import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/login/auth.service';
import {NavigationService} from 'src/app/services/navigation/navigation.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

constructor(private NavigationService : NavigationService,  private authService: AuthService, private router: Router){}
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


  logout() {
    this.authService.isLogged = false;
    this.router.navigate(['/ingreso']);
  }
}
