import { Component } from '@angular/core';
import { JsonService } from 'src/app/services/json/json.service';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  subtitle: string="Acciones - Argentina";

  listaCotizaciones: any;

  constructor(private json:JsonService){

  }

  ngOnInit(): void{
    this.cargar_cotizaciones();
  }

  cargar_cotizaciones(){
    this.json.obtenerTitulos().subscribe({
      next: (listaCotizaciones) => (
        this.listaCotizaciones=listaCotizaciones
      ),
      error: (error) => (
        console.error(error)
      ),
      complete: () =>(
        console.info("cargó las cotizaciones correctamente")
      )
    })
  }
      
}
