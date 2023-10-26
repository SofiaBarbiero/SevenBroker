import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private http: HttpClient) { }

  url : string = "http://localhost:5124/"

  post(objeto : any): Observable<any>{
    return this.http.post(this.url + "api/Compra", objeto);
  }

  get(id? : number): Observable<any>{
    if(id !== undefined){

      return this.http.get(this.url + `api/Compra/${id}`);

    } else {

      return this.http.get(this.url + "api/Compra")

    }
  }
}