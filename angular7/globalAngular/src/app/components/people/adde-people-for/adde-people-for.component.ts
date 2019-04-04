import { Component, OnInit, Input } from '@angular/core';
import { PeopleComponent } from './../people.component';
@Component({
  selector: 'app-adde-people-for',
  templateUrl: './adde-people-for.component.html'
})
export class AddePeopleForComponent implements OnInit {

  @Input() person: PeopleComponent;
  constructor() { }

  ngOnInit() {
  }

}
