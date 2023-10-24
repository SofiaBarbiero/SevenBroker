import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatosCompraService {
  constructor() {}

  private objetoSubject = new BehaviorSubject<any>(null);

  enviarDatosCompra(datos: any) {
    this.objetoSubject.next(datos);
  }

  get objetoDatos(): Observable<any> {
    return this.objetoSubject.asObservable();
  }
}
