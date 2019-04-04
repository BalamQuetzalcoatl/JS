import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjets',
  templateUrl: './heroe-tarjets.component.html',
  styleUrls: ['./heroe-tarjets.component.css']
})
export class HeroeTarjetsComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index:number;

  @Output() selectHeroe: EventEmitter<number>;

  constructor() {
    this.selectHeroe = new EventEmitter();
   }

  ngOnInit() {
  }

  showHeroes() {
    this.selectHeroe.emit(this.index);
  }

}
