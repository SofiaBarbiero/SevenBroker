import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

  title: string="Cotización de Acciones Argentinas";
  
    acciones:any = {
      titulos: [
        {
          simbolo: "AGRO",
          puntas: {
            cantidadCompra: 1.000,
            precioCompra: 134.000,
            precioVenta: 127.000,
            cantidadVenta: 9.000
          },
          ultimoPrecio: 132.175,
          variacionPorcentual: 0.00,
          apertura: 131.500,
          maximo: 137.000,
          minimo: 128.000,
          ultimoCierre: 132.750,
          volumen: 0.000,
          cantidadOperaciones: 0.0,
          fecha: "2023-06-26T03:00:02.913",
          tipoOpcion: null,
          precioEjercicio: null,
          fechaVencimiento: null,
          mercado: 1,
          moneda: 1,
          descripcion: "Agrometal",
          plazo: "T2",
          laminaMinima: 1,
          lote: 1
        },
        {
          simbolo: "ALUA",
          puntas: {
            cantidadCompra: 13.000,
            precioCompra: 380.000,
            precioVenta: 358.000,
            cantidadVenta: 47.000
          },
          ultimoPrecio: 369.500,
          variacionPorcentual: 0.00,
          apertura: 378.000,
          maximo: 380.000,
          minimo: 365.000,
          ultimoCierre: 369.500,
          volumen: 0.000,
          cantidadOperaciones: 0.0,
          fecha: "2023-06-26T03:00:03.003",
          tipoOpcion: null,
          precioEjercicio: null,
          fechaVencimiento: null,
          mercado: 1,
          moneda: 1,
          descripcion: "Aluar",
          plazo: "T2",
          laminaMinima: 1,
          lote: 1
        },
        {
          simbolo: "AUSO",
          puntas: {
            cantidadCompra: 50.000,
            precioCompra: 563.000,
            precioVenta: 624.000,
            cantidadVenta: 100.000
          },
          ultimoPrecio: 624.500,
          variacionPorcentual: 0.00,
          apertura: 625.500,
          maximo: 625.500,
          minimo: 611.000,
          ultimoCierre: 624.500,
          volumen: 0.000,
          cantidadOperaciones: 0.0,
          fecha: "2023-06-26T03:00:02.767",
          tipoOpcion: null,
          precioEjercicio: null,
          fechaVencimiento: null,
          mercado: 1,
          moneda: 1,
          descripcion: "Autopistas del Sol",
          plazo: "T2",
          laminaMinima: 1,
          lote: 1
        },
        {
          simbolo: "BBAR",
          puntas: {
            cantidadCompra: 10.000,
            precioCompra: 1051.000,
            precioVenta: 1043.000,
            cantidadVenta: 1.000
          },
          ultimoPrecio: 1010.600,
          variacionPorcentual: 0.00,
          apertura: 999.000,
          maximo: 1038.000,
          minimo: 992.000,
          ultimoCierre: 1010.600,
          volumen: 0.000,
          cantidadOperaciones: 0.0,
          fecha: "2023-06-26T03:00:01.257",
          tipoOpcion: null,
          precioEjercicio: null,
          fechaVencimiento: null,
          mercado: 1,
          moneda: 1,
          descripcion: "Bbva",
          plazo: "T2",
          laminaMinima: 1,
          lote: 1
        }
      ]
  }
}
