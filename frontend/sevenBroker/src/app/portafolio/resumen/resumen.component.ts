import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { JsonService } from 'src/app/services/json/json.service';
import { CuentaService } from 'src/app/services/cuenta/cuenta.service';
import { CompraService } from 'src/app/services/compra/compra.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css'],
})
export class ResumenComponent {
  listaCompras: any[] = [];

  listaNombresAcciones: string[] = [];

  listaComprasUsuario: any = {};

  movimientosDelMes: any = {};

  activos: any[] = [];

  activosIndividuales: any[] = [];

  cuentaActiva: any = {};

  stringUsuario: string = '';

  Usuario: any = {};

  totalValorizado: number = 0;

  constructor(
    private json: JsonService,
    private cuenta: CuentaService,
    private compra: CompraService,
    private cookieService: CookieService,
    private cdRef: ChangeDetectorRef
  ) {}

  totalEnCompras(compras: any) {
    let total: number = 0;

    compras.forEach((compraUnica: any) => {
      total += compraUnica.precioCompra;
    });

    return total;
  }

  ngOnInit(): void {
    this.stringUsuario = this.cookieService.get('usuario');

    if (this.stringUsuario !== '') {
      this.Usuario = JSON.parse(this.stringUsuario);
    } else {
      this.Usuario = null;
    }

    //Obtenemos la cuenta activa
    this.cuenta.get().subscribe({
      next: (result) => {
        this.cuentaActiva = result.find(
          (cuentaUnica: any) => cuentaUnica.usuarioId === this.Usuario.id
        );
      },
      error: (error) => {
        console.error(error);
      },
    });

    //Obtenemos la lista de compras del usuario especifico
    this.compra.get().subscribe({
      next: (result) => {
        this.listaCompras = result;

        //Separamos las compras del usuario actual
        this.listaComprasUsuario = this.listaCompras.filter(
          (compraUnica: any) => {
            if (compraUnica.cuentaId === this.cuentaActiva.id) {
              return compraUnica;
            }
          }
        );

        //Guardamos los nombres de las acciones compradas
        this.listaComprasUsuario.forEach((compraUnica: any) => {
          if (!this.listaNombresAcciones.includes(compraUnica.simbolo)) {
            this.listaNombresAcciones.push(compraUnica.simbolo);
          }
        });

        //Creo la lista de activosIndividuales y le doy formato al objeto
        this.listaNombresAcciones.forEach((nombre: any) => {
          1;
          this.activosIndividuales.push({
            simbolo: nombre,
            precio: 0,
          });
        });

        //Calculamos el total de gato segun la accion
        this.activosIndividuales.forEach((activo: any) => {
          this.listaComprasUsuario.forEach((compraUnica: any) => {
            if (activo.simbolo === compraUnica.simbolo) {
              activo.precio += compraUnica.precioCompra;
            }
          });
        });

        //Aprovechamos a calcular el total valorizado gracias a las compras
        this.totalValorizado = this.totalEnCompras(this.listaComprasUsuario);

        this.cdRef.markForCheck();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
