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
      next: (listaCotizaciones) => (this.listaCotizaciones = listaCotizaciones),
      error: (error) => console.error(error),
      complete: () => console.info('cargó las cotizaciones correctamente'),
    });
  }

  comprarAccion(simboloAccion: any, precioAccion: any) {
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
