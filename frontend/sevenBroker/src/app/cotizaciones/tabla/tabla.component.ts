import { Component } from '@angular/core';
import { JsonService } from 'src/app/services/json/json.service';
import { DatosCompraService } from 'src/app/services/compra/datos-compra.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent {
  subtitle: string = 'Acciones - Argentina';

  listaCotizaciones: any;

  objetoAccion: any = {};

  constructor(
    private json: JsonService,
    private datosCompra: DatosCompraService,
    private navigation: NavigationService
  ) {}

  ngOnInit(): void {
    this.cargar_cotizaciones();
  }

  cargar_cotizaciones() {
    this.json.obtenerTitulos().subscribe({
      next: (listaCotizaciones) => {
        this.listaCotizaciones = listaCotizaciones;

        this.listaCotizaciones.forEach((cotizacion: any) => {
          if (!cotizacion.puntas) {
            cotizacion.puntas = {
              cantidadCompra: 0,
              cantidadVenta: 0,
              precioCompra: 0,
              precioVenta: 0,
            };
          }
        });
      },
      error: (error) => console.error(error),
      complete: () => console.info('cargó las cotizaciones correctamente'),
    });
  }

  comprarAccion(simboloAccion: any, precioAccion: any) {
    if (precioAccion === 0) {
      alert('Esta accion no se encuentra disponible');
      return;
    }

    this.objetoAccion = {
      simbolo: simboloAccion,
      precioCompra: precioAccion,
    };

    //Aca pondrías el llamado al servicio para mandar el objeto this.objetoAccion al observable

    this.datosCompra.enviarDatosCompra(this.objetoAccion);

    //Y aca pones la navegacion al form de compra

    this.navigation.navigateToCompra();

    //
  }
}
