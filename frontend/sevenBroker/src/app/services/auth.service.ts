import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  urlLogin:string="https://reqres.in/api/login"
  urlRegister:string="https://reqres.in/api/register"

  constructor(private http:HttpClient) {}

  login(loginRequest: any): Observable<any>
  {
    return this.http.post(this.urlLogin, loginRequest);
  }
  register(registerRequest: any): Observable<any>
  {
    return this.http.post(this.urlRegister, registerRequest);
  }
}
