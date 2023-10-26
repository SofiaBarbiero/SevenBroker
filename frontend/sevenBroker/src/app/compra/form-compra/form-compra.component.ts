import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-compra',
  templateUrl: './form-compra.component.html',
  styleUrls: ['./form-compra.component.css']
})

export class FormCompraComponent implements OnInit{  
  constructor() {}

  formCompra = new FormGroup({
    name: new FormControl('', Validators.required),
    cantidad: new FormControl('', Validators.required),
    metodoPago: new FormControl('', Validators.required),
  }); 

  ngOnInit(): void {
    
  }

  saveData(){
    console.log(this.formCompra.value);
  }
}
