import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-portafolio',
  templateUrl: './dashboard-portafolio.component.html',
  styleUrls: ['./dashboard-portafolio.component.css']
})
export class DashboardPortafolioComponent {

  private _showContent:boolean = false;

  set showContent(show: boolean){
    this._showContent = show;
  }

  get showContent(){
    return this._showContent;
  }

  toggleContent(){
    this.showContent = !this.showContent
  }
}