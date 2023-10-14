import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/login/auth.service';
import { User } from 'src/app/shared/interfaces/user.interface';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passwordVisible = false;
  loginForm = this.formBuilder.group({
    email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
    password: ['cityslicka', Validators.required]
  })
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,

    ) {

  }

  ngOnInit(): void {

  }

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }


  login() {
    const formValue = this.loginForm.value as User;
    this.authService.login(formValue).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error(error);
        if (error.status === 400) {
          alert('Credenciales incorrectas. Verifique su correo y contraseña.');
        }
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  // Método para mostrar u ocultar la contraseña
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }



}
