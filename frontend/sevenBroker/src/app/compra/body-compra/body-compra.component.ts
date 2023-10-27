import { Component } from '@angular/core';
import { DatosCompraService } from 'src/app/services/compra/datos-compra.service';

@Component({
  selector: 'app-body-compra',
  templateUrl: './body-compra.component.html',
  styleUrls: ['./body-compra.component.css'],
})
export class BodyCompraComponent {
  objetoAccion: any = {
    simbolo: '',
    precioCompra: 0,
    cantidadCompra: 0,
  };

  totalCompra: number = 0;

  constructor(private datosCompra: DatosCompraService) {}

  ngOnInit() {
    this.datosCompra.objetoDatos.subscribe({
      next: (response) => {
        this.objetoAccion.simbolo = response.simbolo;
        this.objetoAccion.precioCompra = response.precioCompra;
        this.datosCompra.objetoDatosCantidad.subscribe({
          next: (response) => {
            this.objetoAccion.cantidadCompra = response;

            this.totalCompra =
              this.objetoAccion.cantidadCompra *
              this.objetoAccion.precioCompra *
              1.015;
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
