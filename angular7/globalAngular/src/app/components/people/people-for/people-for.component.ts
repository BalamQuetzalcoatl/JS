import { Component, OnInit, Input } from '@angular/core';
import { PeopleComponent } from '../people.component';

@Component({
  selector: 'app-people-for',
  templateUrl: './people-for.component.html',
  styleUrls: ['./people-for.component.css']
})
export class PeopleForComponent implements OnInit {

  @Input() people: PeopleComponent;

  constructor() { }

  ngOnInit() {
  }

}
