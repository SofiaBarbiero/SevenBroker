import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json/json.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

  
  usuario: string = "";

  constructor(private json: JsonService){

  }

  ngOnInit(): void {

    this.json.obtenerDatosUsuario().subscribe({
      next: (datosObtenidos) => {
        this.usuario = datosObtenidos.nombre;
      },
      error: (error) => {
        console.error(error);
      }
    })
    
  }
  



}
