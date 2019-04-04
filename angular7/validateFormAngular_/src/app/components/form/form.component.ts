import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  usuario: Object = {
    firstName: null,
    lastName: null,
    email: null,
    pais: null,
    sex: ''
  };

  countries: Object = [
    {
      code: 'CRI',
      name: 'Costa Rica'
    },
    {
      code: 'ESP',
      name: 'España'
    },
    {
      code: 'MEX',
      name: 'México'
    }
  ];

  radioButton: Object = [
    {
      id: 'man',
      sex: 'hombre'
    },
    {
      id: 'woman',
      sex: 'mujer'
    }
  ];

  constructor() { }

  guardar(forma: NgForm) {
    console.log('formulario');
    console.log(forma);
  }

}
