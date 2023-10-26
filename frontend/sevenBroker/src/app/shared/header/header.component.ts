import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/login/auth.service';
import {NavigationService} from 'src/app/services/navigation/navigation.service'
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = false;
  cookieService: any;


constructor(private NavigationService : NavigationService,  private authService: AuthService, private router: Router, private cookie: CookieService){}

ngOnInit() {
  
  if(JSON.parse(this.cookie.get("isLogged"))){
    this.isLogged=true;
  }
  console.log(this.isLogged);
  
}


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


onLogout(): void {
  this.authService.logout();
}
}
