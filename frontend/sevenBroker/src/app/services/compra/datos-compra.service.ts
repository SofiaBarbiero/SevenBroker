import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatosCompraService {
  constructor() {}

  private objetoSubject = new BehaviorSubject<any>(null);
  private objetoCantidad = new BehaviorSubject<any>(null);

  enviarDatosCompra(datos: any) {
    this.objetoSubject.next(datos);
  }

  get objetoDatos(): Observable<any> {
    return this.objetoSubject.asObservable();
  }

  enviarCantidad(cantidad: number) {
    this.objetoCantidad.next(cantidad);
  }

  get objetoDatosCantidad(): Observable<any> {
    return this.objetoCantidad.asObservable();
  }


}
