import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json/json.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent {

  titulosDelUsuario: any = {};

  movimientosDelMes: any = {};

  activosDelUsuario: any = {};

  efectivoDisponible: number = 0;

  activos: any[] = [];

  activosIndividuales: any[] = []

  totalValorizadoEnActivos: number = 0;


  constructor(private json:JsonService){

  }


  montoActivoUnico(activo: any){
    const punta = activo.puntas;
    const total = (punta.cantidadVenta - punta.cantidadCompra ) * punta.precioCompra
    return total;
  }

  totalActivos(activosIndividuales: any){

    let total: number = 0;

    activosIndividuales.forEach((activo: any) => {
      total += activo.montoTotal; 
    })

    return total;
  }
  

  ngOnInit(): void {

    this.json.obtenerDatosUsuario().subscribe({
      next: (datosObtenidos) => {
        this.efectivoDisponible = datosObtenidos.saldoDisponible;
      },
      error: (error) => {
        console.error(error);
      }
    })
    

    this.json.obtenerIndexActivos().subscribe({
      next: (indexObtenidos) => {
        //Recibo activos que tiene el usuario
        this.activosDelUsuario.indexActivos = indexObtenidos;
      },
      error: (error) => {
        console.error(error);
      }
    });

    this.json.obtenerTitulos().subscribe({
      next: (titulosObtenidos) => {

        //Recibo lista de todas las acciones
        this.titulosDelUsuario.titulos = titulosObtenidos;

        //Filtro activos en base al indice de que acciones tiene el usuario
        this.activos = this.titulosDelUsuario.titulos.filter((accion: any) => {
          if(this.activosDelUsuario.indexActivos.includes(this.titulosDelUsuario.titulos.indexOf(accion))){
            return accion;
          }
        });

        //Hago calculos necesarios para calculos individuales
        this.activosIndividuales = this.activos.map((activo) => {
          let activoIndividual = {
            simbolo: activo.simbolo,
            montoTotal: this.montoActivoUnico(activo)
          }
          return activoIndividual
        });

        this.totalValorizadoEnActivos = this.totalActivos(this.activosIndividuales);
      },
      error: (error) => {
        console.error(error);
      }
    });



    this.json.obtenerMovimientosDelMes().subscribe({
      next: (movimientosObtenidos) => {
        //Recibo los activos movidos este mes
        this.movimientosDelMes.movimientos = movimientosObtenidos;
        // //Calculo el total de dinero este mes
        // this.totalDelMes = this.totalEsteMes();
        // //Guardo la cantidad de movimientos en este mes
        // this.cantidadDelMes = this.movimientosDelMes.movimientos.length;
      },
      error: (error) => {
        console.error(error);
      }
    });
    
  }

  
}
