import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() presupuestoTotal: number;
  @Input() ingreso: number;
  @Input() egreso: number;
  @Input() porcentaje: number;

  constructor() { }

  ngOnInit() {
  }

}
