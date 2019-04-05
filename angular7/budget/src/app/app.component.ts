import { Component } from '@angular/core';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { EgresoComponent } from './components/egreso/egreso.component';
import { IngresoService } from './services/ingreso.services';
import { EgresoService } from './services/egreso.services';
import { Egreso } from './models/egreso.model';
import { Ingreso } from './models/ingreso.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ingreso: Ingreso[] = [];
  egreso: Egreso[] = [];
  ingresoTotal = 0;
  egresoTotal = 0;

  constructor(private ingresoServices: IngresoService, private egresoServices: EgresoService) {
    this.ingreso = ingresoServices.ingresos;
  }

  getIngresoTotal = () => {
    this.ingreso.forEach(ingreso => {
      this.ingresoTotal += ingreso.valor;
    });
    return this.ingresoTotal;
  }


  getEgresoTotal = () => {
    this.egreso.forEach(egresos => {
      this.egresoTotal += egresos.valor;
    });
    return this.egresoTotal;
  }

  getPercentageTotal = () => {
    console.log('heee');

    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal = () => {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }

}
