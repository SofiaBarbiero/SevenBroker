import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor(private http: HttpClient) { }

  url : string = "https://localhost:7124/"

  post(objeto : any): Observable<any>{
    return this.http.post(this.url + "api/Cuenta", objeto);
  }

  get(id? : number): Observable<any>{
    if(id !== undefined){

      return this.http.get(this.url + `api/Cuenta/${id}`);

    } else {

      return this.http.get(this.url + "api/Cuenta")

    }
  }
}