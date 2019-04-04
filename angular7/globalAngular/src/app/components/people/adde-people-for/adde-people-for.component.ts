import { Component, OnInit, Input } from '@angular/core';
import { PeopleComponent } from './../people.component';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-adde-people-for',
  templateUrl: './adde-people-for.component.html'
})
export class AddePeopleForComponent implements OnInit {

  @Input() person: PeopleComponent;
  constructor(private people: LoginService) { }

  hi = () => {
  }

  ngOnInit() {
  }

}
