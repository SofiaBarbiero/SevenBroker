import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css'],
})
export class CabeceraComponent {
  usuario: any = {
    nombre: '',
    apellido: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario') as string);
  }
}
