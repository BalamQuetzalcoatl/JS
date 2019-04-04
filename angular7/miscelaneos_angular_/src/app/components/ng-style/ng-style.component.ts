import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{'font-size': tamano+'px'}">
      heee       ng-style works!
    </p>
    <p [style.fontSize]="tamano2+'px'">
    heee       ng-style works!
  </p>
    <p [style.fontSize.px]="tamano3">
    heee       ng-style works!
  </p>

  <button class="btn btn-primary" (click)="tamano = tamano + 5; tamano2 = tamano2 +5; tamano3 = tamano3 + 5;">+</button>
  <button class="btn btn-primary" (click)="tamano = tamano - 5; tamano2 = tamano2 -5; tamano3 = tamano3 - 5;">-</button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  tamano: number = 5;
  // tslint:disable-next-line:no-inferrable-types
  tamano2: number = 10;
  // tslint:disable-next-line:no-inferrable-types
  tamano3: number = 15;

  constructor() { }

  ngOnInit() {
  }

}
