import { Component } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {

  constructor() {
    setTimeout(() => {
      this.buttonDisabled = false;
    }, 3000);
  }

  peopleName = 'Hi Daniel';
  peopleLastName = 'Irlandes';

  firstName = null;
  secondName = null;

  listNames: string[];

  addedNameOther = false;

  private city = 'New iceland';

  buttonDisabled = false;

  citiesVisited = [
    {
      id: '16478757',
      city: 'Sydney',
      numberTop: '1',
      cointLive: '97.6',
      cointStudy: '91.6'
    },
    {
      id: '79651234',
      city: 'New york',
      numberTop: '2',
      cointLive: '91.3',
      cointStudy: '86.9'
    }
  ];

  getCity = () => this.city;

  addedNames = () => {
    this.addedNameOther = true;
  }
}
