import { Component } from '@angular/core';

@Component({
  selector: 'app-traking',
  templateUrl: './traking.component.html',
  styleUrls: ['./traking.component.css']
})
export class TrakingComponent {

  test1 :BodyMaintence;

  constructor() {
    this.test1 = {
      typeM: "Rápido",
      title: "Cambio de Aceite",
      description: "El auto movil tiene mucho tiempo sin cambio de aceite, se requiere cambio de aceite",
      fechaEntrega: "12-12-2018",
      ope: "Vertiendo nuevo aceite",
      opetec: "Jose Antonio Gonzalez",
      process: "En proceso",
      location: "Sucursal #3, Ave. Costa Norte, al Frente del Rey."
    };
    //this.typeMaintenance = "Cambio de Aceite";
  }
}

interface BodyMaintence {
  typeM: string;
  title: string;
  description: string;
  fechaEntrega: string;
  ope: string;
  opetec: string;
  process: string;
  location: string;
}
