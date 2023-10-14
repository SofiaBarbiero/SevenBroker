import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { User, UserResponse } from '../shared/interfaces/user.interface';
// import { url } from 'inspector';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  urlLogin:string="https://reqres.in/api/login"
  urlRegister:string="https://reqres.in/api/register"
  private loggedIn = new BehaviorSubject<boolean>(false);
  private readonly JWT_TOKEN = 'token';

  constructor(private http:HttpClient, private router: Router) {}

  // login(loginRequest: any): Observable<any>
  // {
  //   return this.http.post(this.urlLogin, loginRequest);
  // }
  register(registerRequest: any): Observable<any>
  {
    return this.http.post(this.urlRegister, registerRequest);
  }

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(authData: User): Observable<UserResponse | void> {
    return this.http
      .post<UserResponse>(this.urlLogin, authData)
      .pipe(
        map((res: UserResponse) => {
          const userResponse = {} as UserResponse;
          userResponse.access_token = res.access_token;
          userResponse.expires_in = res.expires_in;
          userResponse.refresh_token = res.refresh_token;
          userResponse.activation_Date = res.activation_Date;
          if(userResponse.access_token){
            this.saveToken(res);
            this.loggedIn.next(true)

          }
          return res;
        }),
        catchError((error) => {
          if (error.status === 400) {
            Swal.fire({
              title: 'Credenciales incorrectas!',
              text: 'Verifique su correo y contraseña.',
              icon: 'warning',
              confirmButtonText: 'Aceptar'
            })
            // alert('Credenciales incorrectas. Verifique su correo y contraseña.');
          }
          return this.handleError(error);
        })
      );
  }



  cleanAuthInformation() {
    this.clearAuthData();
  }

  private clearAuthData() {
    localStorage.removeItem(this.JWT_TOKEN);

  }

  saveToken(userResponse: UserResponse) {
    localStorage.setItem(this.JWT_TOKEN, userResponse.access_token);
  }

  logout() {
    //  localStorage.removeItem(this.JWT_TOKEN);
    this.loggedIn.next(false);
    this.cleanAuthInformation();
    this.router.navigate(['/ingreso']);

  }



  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producio un error ', error.error);
    } else {
      console.error(
        'Backend retornó el código de estado ',
        error.status,
        error.error
      );
    }
    return throwError(
      () => new Error('Algo falló. Por favor intente nuevamente.')
    );
  }
}
