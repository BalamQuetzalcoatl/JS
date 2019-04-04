import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

   arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 10];
   pi = Math.PI;
   porcent_a = 0.324;
   money_a = 1249.50;
   json = {
     "name":"John",
     "age":30,
     "cars":[ "Ford", "BMW", "Fiat" ]
   };
   promesa = new Promise((resolve, reject) => {
     setTimeout(()=>resolve('Data asing'), 3500);
   });
   videoUrl = "N1f-i-n0fnM";
   dateTimer = new Date();
   activated: boolean = true;
   name: string = "daniel";
  constructor() { }

  ngOnInit() {
  }

}
