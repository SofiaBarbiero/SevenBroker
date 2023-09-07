import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email: ['eve.holt@reqres.in', [Validators.required, Validators.email ]],
    password: ['cityslicka', Validators.required]
  })
  constructor(private formBuilder: FormBuilder, private authService:AuthService, private route:Router){

  }

  ngOnInit(): void {

  }

  get email (){
    return this.loginForm.controls.email;
  }

  get password (){
    return this.loginForm.controls.password;
  }

  login(){
    this.authService.login(this.loginForm.value).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.route.navigate(['/home'])
      },
      error: (error) => {
        console.error(error)
        this.route.navigate(['/register'])
      },
      complete: () =>{
        console.log("complete")
      }
    }
    )
  }

}
