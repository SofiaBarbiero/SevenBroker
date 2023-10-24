import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private loggedIn = new BehaviorSubject<boolean>(false);
  private apiUrl = 'https://localhost:7124/api/usuario';

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data) => {
        console.log(data)
        const user = data.find((u) => u.email === email && u.password === password);
        // this.loggedIn.next(true);
        return !!user;
      }),
      catchError((error) => this.handleError(error))
    );
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

  logout() {
    // this.loggedIn.next(false);
    this.router.navigate(['/ingreso']);
  }

  private showSuccessMessage(title: string, message: string) {

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
