import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/login/auth.service';
import { Register } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit{

  hide = true;

  registerForm = this.formBuilder.group({
    email:['eve.holt@reqres.in', [Validators.required, Validators.email ]],
    // repeated_email:['', [Validators.required, Validators.email ]],
    password:['pistol', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]],
    // repeated_password:['', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]]
  })

  constructor(private formBuilder: FormBuilder, private authService:AuthService, private route:Router){

  }

  ngOnInit(): void {

  }


  get email (){
    return this.registerForm.controls.email;
  }
  // get repeated_email (){
  //   return this.registerForm.controls.repeated_email;
  // }

  get password(){
    return this.registerForm.controls.password;
  }

  // get repeated_password(){
  //   return this.registerForm.controls.repeated_password;
  // }


  register() {
    const formValue = this.registerForm.value as any;
    this.authService.register(formValue).subscribe({
      next: (data) => {
        console.log(data);
        this.route.navigate(['/ingreso']);
      },
      error: (error: any) => {
        console.error(error);

        if (error.status === 400) {
          console.error('Error: Credenciales incorrectas.');

        } else {
          console.error('Error desconocido. Por favor, inténtelo nuevamente.');

        }
      },
      complete: () => {
        console.log('complete');
      }
    });
  }
}
