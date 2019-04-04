import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { log } from 'util';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'validateFormAngular';
  name = new FormControl('');

  updateName() {
    console.log('update data');
    this.name.setValue('Nancy');
  }
}
