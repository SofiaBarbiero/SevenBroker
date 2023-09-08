import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent {

  constructor(private NavigationService : NavigationService){}

  navigateIngreso(){
    this.NavigationService.navigateToIngreso()
  }

  navigateRegister(){
    this.NavigationService.navigateToRegister()
  }
}
