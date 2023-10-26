import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css'],
})
export class CabeceraComponent {
  usuario: any = {};

  constructor(private cookie: CookieService) {}

  ngOnInit(): void {
    this.usuario = JSON.parse(this.cookie.get('usuario'));
  }
}
