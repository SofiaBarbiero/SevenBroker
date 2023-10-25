import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',

})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }


  private apiUrl = 'https://localhost:7124/api/usuario';
  private apiUrlLogin = 'https://localhost:7124/api/usuario/login'

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    const loginData = {email: email, password: password}
    this.loggedIn.next(true)
    return this.http.post<any[]>(this.apiUrlLogin, loginData)

  }

  register(registerRequest: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, registerRequest).pipe(
      map((res) => {
        this.showSuccessMessage('Registro exitoso', 'Ahora puede iniciar sesión.');
        return res;
      }),
      catchError((error) => this.handleError(error))
    );
  }

  private showSuccessMessage(title: string, message: string) {

  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/ingreso']);

  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      console.error('Se ha producido un error ', error.error);
    } else {
      console.error('Backend retornó el código de estado ', error.status, error.error);
    }
    return throwError(() => new Error('Algo falló. Por favor, inténtelo nuevamente.'));
  }
}
