import { Component } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {

  constructor() { }

  names = [{
    name: 'Leonard',
    status: true
  },
  {
    name: 'Penny',
    status: false
  },
  {
    name: 'Sheldo',
    status: false
  }
];

  hola = 'on the People';
  people = 'Daniel';
  private Age = 24;

  getAge = () => {
    return this.Age;
  }

}
