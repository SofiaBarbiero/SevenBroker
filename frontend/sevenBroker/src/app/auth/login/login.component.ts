import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/login/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginSuccess = false;
  hide = true;
  datosUsuario: any = {};
  stringUsuario: string = '';

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      if (email && password) {
        this.authService.login(email, password).subscribe({
          next: (success) => {
            this.loginSuccess = success;

            this.authService.usuarioData(email).subscribe({
              next: (response) => {
                this.datosUsuario = response;
                this.stringUsuario = JSON.stringify(this.datosUsuario);
                localStorage.setItem('usuario', this.stringUsuario);
              },
              error: (error) => {
                console.log(error);
              },
            });

            this.router.navigate(['/cotizaciones']);
          },

          error: (error) => {
            console.log(error);
          },
        });
      } else {
        console.error(
          'El correo electrónico y la contraseña deben estar definidos'
        );
      }
    }
  }
}
