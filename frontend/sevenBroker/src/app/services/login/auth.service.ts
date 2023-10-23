import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Register, RegisterResponse, User, UserResponse } from '../../shared/interfaces/user.interface';
// import { url } from 'inspector';
import Swal from 'sweetalert2'


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private readonly JWT_TOKEN = 'token';



  constructor(private http:HttpClient, private router: Router) {}



  urlLogin:string="https://reqres.in/api/login"
  urlRegister:string="https://reqres.in/api/register"

   // marca al usuario como autenticado
   setAuthenticated(isAuthenticated: boolean) {
    this.loggedIn.next(isAuthenticated);
  }

  // comprueba si el usuario está autenticado
  isAuthenticated(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }


  // get isLogged(): Observable<boolean> {
  //   return this.loggedIn.asObservable();
  // }

  login(authData: any): Observable<any | void> {
    return this.http
      .post<any>(this.urlLogin, authData)
      .pipe(
        map((res: any) => {
           const userResponse = {} as any;
          userResponse.token = res.token;
          if (res.token) {
            this.setAuthenticated(true); // Marca al usuario como autenticado

          }
          // if(userResponse.token){
          //   this.saveToken(res);
          //   this.loggedIn.next(true)

          // }
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
          }
          return this.handleError(error);
        })
      );
  }

  register(registerRequest: any): Observable<any | void> {
    return this.http.post<any>(this.urlRegister, registerRequest).pipe(
      map((res: any) => {
        // if (res.id && res.token) {
        //   this.showSuccessMessage('Registro exitoso', 'Ahora puede iniciar sesión.');
        // }
        this.showSuccessMessage('Registro exitoso', 'Ahora puede iniciar sesión.');
        return res;
      }),
      catchError((error) => {
        if (error.status === 400) {
          this.showErrorMessage('Error en el registro', 'Por favor, verifique los datos.');
        }
        return this.handleError(error);
      })
    );
  }

  logout() {
    this.loggedIn.next(false);
    this.cleanAuthInformation();
    this.router.navigate(['/ingreso']);
    this.setAuthenticated(false);

  }

  cleanAuthInformation() {
    this.clearAuthData();
  }

  private clearAuthData() {
    localStorage.removeItem(this.JWT_TOKEN);

  }

  saveToken(userResponse: UserResponse) {
    localStorage.setItem(this.JWT_TOKEN, userResponse.token);
  }


  private showSuccessMessage(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  }


  private showErrorMessage(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'error',
      confirmButtonText: 'Aceptar',
    });
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
