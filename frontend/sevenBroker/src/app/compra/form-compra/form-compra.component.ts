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

  constructor(
    private datosCompra: DatosCompraService,
    private cuentaService: CuentaService,
    private compraService: CompraService,
    private navigation: NavigationService,
    private cdRef: ChangeDetectorRef
  ) {}

  formCompra = new FormGroup({
    cantidad: new FormControl(0, Validators.required),
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

  saveData() {
    const formValue = this.formCompra.value as CantidadCompra;

    this.objetoCompra.cantidadCompra = formValue.cantidad;
    this.objetoCompra.precioCompra =
      formValue.cantidad * this.objetoAccion.precioCompra;
    this.objetoCompra.simbolo = this.objetoAccion.simbolo;
    this.objetoCompra.cuentaId = this.datosCuenta.id;

    if (this.objetoCompra.precioCompra <= this.datosCuenta.saldo) {
      this.compraService.post(this.objetoCompra).subscribe({
        next: (res) => {},
        error: (err) => console.log(err),
      });

      this.datosCuenta.saldo -= this.objetoCompra.precioCompra;

      //Actualizamos la cuenta
      this.cuentaService.put(this.datosCuenta.id, this.datosCuenta).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.error(error);
        },
      });

      alert('Compra realizada!');
      this.navigation.navigateToPortafolio();
    } else {
      alert('No tienes saldo disponible para realizar esta compra');
    }
  }

  enviarCantidad(evento: any) {
    this.datosCompra.enviarCantidad(evento.target.value);
  }
}
