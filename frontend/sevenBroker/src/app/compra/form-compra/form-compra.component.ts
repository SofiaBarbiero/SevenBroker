import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatosCompraService } from 'src/app/services/compra/datos-compra.service';
import { CantidadCompra } from 'src/app/shared/interfaces/compra.interface';
import { CuentaService } from 'src/app/services/cuenta/cuenta.service';
import { CompraService } from 'src/app/services/compra/compra.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-form-compra',
  templateUrl: './form-compra.component.html',
  styleUrls: ['./form-compra.component.css'],
})
export class FormCompraComponent implements OnInit {
  objetoAccion: any = {};
  objetoCompra: any = {
    fecha: new Date(),
    precioCompra: 0,
    cantidadCompra: 0,
    simbolo: '',
    cuentaId: 0,
  };
  datosUsuario: any = {};
  datosCuenta: any = {};
  valor: any;

  constructor(
    private datosCompra: DatosCompraService,
    private cuentaService: CuentaService,
    private compraService: CompraService,
    private navigation: NavigationService,
    private cdRef: ChangeDetectorRef
  ) {}

  formCompra = new FormGroup({
    cantidad: new FormControl(0, [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
  });

  get nombre() {
    return this.formCompra.controls.cantidad;
  }

  ngOnInit(): void {
    this.datosCompra.objetoDatos.subscribe({
      next: (response) => {
        this.objetoAccion = response;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.datosUsuario = JSON.parse(localStorage.getItem('usuario') as string);

    this.cuentaService.get().subscribe({
      next: (response) => {
        const res = response;
        this.datosCuenta = res.find(
          (result: any) => result.usuarioId === this.datosUsuario.id
        );

        console.log(this.datosCuenta);

        this.cdRef.markForCheck();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  limpiarCampo(e: any) {}

  saveData() {
    const formValue = this.formCompra.value as CantidadCompra;

    console.log(formValue.cantidad);
    if (formValue.cantidad <= 0) {
      alert('La cantidad a comprar debe ser mayor a 0');
      return;
    }

    this.objetoCompra.cantidadCompra = formValue.cantidad;
    this.objetoCompra.precioCompra =
      formValue.cantidad * this.objetoAccion.precioCompra * 1.015;
    this.objetoCompra.simbolo = this.objetoAccion.simbolo;
    this.objetoCompra.cuentaId = this.datosCuenta.id;

    if (this.objetoCompra.precioCompra <= this.datosCuenta.saldo) {
      this.compraService.post(this.objetoCompra).subscribe({
        next: (res) => {
          console.log(res);
          alert('Compra realizada');

          this.datosCuenta.saldo -= this.objetoCompra.precioCompra;

          //Actualizamos la cuenta
          this.cuentaService
            .put(this.datosCuenta.id, this.datosCuenta)
            .subscribe({
              next: (response) => {
                console.log(response);
              },
              error: (error) => {
                console.error(error);
              },
            });
          this.navigation.navigateToPortafolio();
        },
        error: (err) => {
          console.log(err);
          alert('Cantidad no valida');
          return;
        },
      });
    } else {
      alert('No tienes saldo disponible para realizar esta compra');
    }
  }

  enviarCantidad(e: any) {
    this.datosCompra.enviarCantidad(e.target.value);
  }
}
