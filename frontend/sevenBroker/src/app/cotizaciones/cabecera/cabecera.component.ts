import { Component } from '@angular/core';
import { JsonService } from 'src/app/services/json/json.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

  title: string="Cotización de Acciones Argentinas";
  listaCabecera: any;
  itemMostrar: any;

  constructor(private json:JsonService){

  }

  ngOnInit(): void{
    this.cargar_cabecera();
  }

  cargar_cabecera(){
    this.json.obtenerTitulos().subscribe({
      next: (listaCabecera) => (
        this.itemMostrar=listaCabecera.filter((accion: any)=>{
          if(listaCabecera.indexOf(accion)<4){
            return accion
          }
          
        }) 
      ),
      error: (error) => (
        console.error(error)
      ),
      complete: () =>(
        console.info("cargo la cabecera correctamente")
      )
    })
  }
}
