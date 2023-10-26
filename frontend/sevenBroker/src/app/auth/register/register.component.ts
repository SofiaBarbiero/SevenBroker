import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/login/auth.service';
import { Register } from 'src/app/shared/interfaces/user.interface';
import { CuentaService } from 'src/app/services/cuenta/cuenta.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide = true;

  registerForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', Validators.required],
    dni: ['', [Validators.required, Validators.maxLength(8)]],
    userName: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private cuentaService: CuentaService
  ) {}

  ngOnInit(): void {}

  get nombre() {
    return this.registerForm.controls.nombre;
  }
  get apellido() {
    return this.registerForm.controls.apellido;
  }
  get email() {
    return this.registerForm.controls.email;
  }
  get telefono() {
    return this.registerForm.controls.telefono;
  }
  get dni() {
    return this.registerForm.controls.dni;
  }
  get userName() {
    return this.registerForm.controls.userName;
  }

  get password() {
    return this.registerForm.controls.password;
  }

  register() {
    const formValue = this.registerForm.value as Register;
    this.authService.register(formValue).subscribe({
      next: (data: any) => {
        //Recibimos los datos del usuario creado
        this.authService.usuarioData(formValue.email).subscribe({
          next: (result) => {
            //Creamos el objeto para crear la cuenta
            const cuentaObjeto = {
              saldo: 20000,
              usuarioId: result.id,
            };

            //Enviamos el objeto al servicio para que cree la cuenta
            this.cuentaService.post(cuentaObjeto).subscribe({
              next: (result) => {
                //Mostramos la respuesta si es correcto
                console.log(result);
              },
              error: (error) => {
                //Mostramos la respuesta si es hay error al crear la cuenta
                console.log(error);
              },
            });
          },
          error: (error) => {
            //Mostramos la respuesta si es hay error al crear el usuario
            console.log(error);
          },
        });
        this.route.navigate(['/ingreso']);
      },
      error: (error: any) => {
        console.error(error);

        if (error.status === 400) {
          console.error('Error: No se pudo completar el registro.');
        } else {
          console.error('Error desconocido. Por favor, inténtelo nuevamente.');
        }
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
