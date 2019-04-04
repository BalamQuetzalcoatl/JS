import { Component } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { People } from './../../models/people.model';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [LoginService]
})
export class PeopleComponent {

  constructor(private servicio: LoginService) {
    setTimeout(() => {
      this.buttonDisabled = false;
    }, 3000);
  }
  people: People[] = [];

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
    this.people.push(new People(this.firstName, this.secondName));
    setTimeout(() => { this.resetInfo(); }, 2000);
  }

  resetInfo = () => {
    this.firstName = '';
    this.secondName = '';
    this.addedNameOther = false;
  }
}
