import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/login/auth.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;

  constructor(
    private NavigationService: NavigationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.isLogged.subscribe({
      next: (response) => {
        this.isLogged = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  navigateHome(e: any) {
    e.preventDefault();
    this.NavigationService.navigateToHome();
  }
  navigateCotizaciones(e: any) {
    e.preventDefault();
    this.NavigationService.navigateToCotizaciones();
  }
  navigatePortafolio(e: any) {
    e.preventDefault();
    console.log(this.isLogged);

    if (this.isLogged) {
      this.NavigationService.navigateToPortafolio();
    } else {
      alert('Necesitas iniciar sesion para acceder al portafolio');
      return;
    }
  }
  navigateRegister(e: any) {
    e.preventDefault();
    this.NavigationService.navigateToRegister();
  }
  navigateIngreso(e: any) {
    e.preventDefault();
    this.NavigationService.navigateToIngreso();
  }

  onLogout(e: any): void {
    e.preventDefault();
    this.authService.logout();
  }
}
