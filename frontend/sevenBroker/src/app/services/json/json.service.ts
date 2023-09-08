import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http:HttpClient) { }

  url: string = "http://localhost:3000/"

  obtenerTitulos(): Observable <any>{
    return this.http.get(this.url + "titulos")
  }
  
  obtenerMovimientosDelMes(): Observable <any>{
    return this.http.get(this.url + "movimientos")
  }
  
  obtenerIndexActivos(): Observable <any>{
    return this.http.get(this.url + "indexActivos")
  }
  
  obtenerDatosUsuario(): Observable <any>{
    return this.http.get(this.url + "datosUsuario")
  }
}
