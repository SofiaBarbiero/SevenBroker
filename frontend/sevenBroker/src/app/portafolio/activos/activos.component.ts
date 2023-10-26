import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { JsonService } from 'src/app/services/json/json.service';
import { CuentaService } from 'src/app/services/cuenta/cuenta.service';
import { CompraService } from 'src/app/services/compra/compra.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-activos',
  templateUrl: './activos.component.html',
  styleUrls: ['./activos.component.css'],
})
export class ActivosComponent {
  listaTitulos: any = {};

  movimientosDelMes: any[] = [];

  listaCompras: any = {};

  listaComprasUsuario: any = {};

  activosDelUsuario: any = {};

  listaNombresAcciones: string[] = [];

  ultimosMovimientosDelMes: any[] = [];

  activos: any[] = [];

  cuentaActiva: any = {};

  stringUsuario: string = '';

  Usuario: any = {};

  totalDelMes: number = 0;

  cantidadDelMes: number = 0;

  fechaActual: Date = new Date();

  constructor(
    private json: JsonService,
    private cuenta: CuentaService,
    private compra: CompraService,
    private cookieService: CookieService,
    private cdRef: ChangeDetectorRef
  ) {}

  totalEsteMes() {
    let total = 0;

    this.movimientosDelMes.forEach((movimiento: any) => {
      total += movimiento.precio;
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

        //Guardamos las compras realizadas en este mes unicamente
        this.movimientosDelMes = this.listaComprasUsuario.filter(
          (compraUnica: any) => {
            if (
              new Date(compraUnica.fecha).getMonth() ===
              this.fechaActual.getMonth()
            ) {
              return compraUnica;
            }
          }
        );

        //Separamos las ultimas diez compras para no saturar la pantalla
        this.ultimosMovimientosDelMes = this.movimientosDelMes.filter(
          (compraUnica: any) => {
            if (this.movimientosDelMes.indexOf(compraUnica) < 10) {
              return compraUnica;
            }
          }
        );

        //Cantidad de movimientos este mes
        this.cantidadDelMes = this.movimientosDelMes.length;

        //Calculamos el total gastado este mes
        this.movimientosDelMes.forEach((movimiento: any) => {
          this.totalDelMes += movimiento.precioCompra;
        });

        this.json.obtenerTitulos().subscribe({
          next: (titulosObtenidos) => {
            //Recibo lista de todas las acciones
            this.listaTitulos = titulosObtenidos;

            //Filtro activos en base a los activos comprados
            this.listaNombresAcciones.forEach((accion: any) => {
              this.listaTitulos.forEach((titulo: any) => {
                if (titulo.puntas) {
                  titulo.puntas.cantidadCompra = 0;
                } else {
                  titulo.puntas = {
                    cantidadCompra: 0,
                    cantidadVenta: 0,
                    precioCompra: 0,
                    precioVenta: 0,
                  };
                }

                this.listaCompras.forEach((compra: any) => {
                  if (titulo.simbolo === compra.simbolo) {
                    titulo.puntas.cantidadCompra += compra.cantidadCompra;
                  }
                });
                if (titulo.simbolo === accion) {
                  this.activos.push(titulo);
                }
              });
            });
          },
          error: (error) => {
            console.error(error);
          },
        });

        this.cdRef.markForCheck();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
