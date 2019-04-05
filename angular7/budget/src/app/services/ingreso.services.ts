import { Ingreso } from '../models/ingreso.model';

export class IngresoService {
    ingresos: Ingreso[] = [ new Ingreso('Pago por carro', 1200), new Ingreso('Pago depa', 700)];
}
