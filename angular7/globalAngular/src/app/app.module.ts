import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './components/people/people.component';

import { FormsModule } from '@angular/forms';
import { PeopleForComponent } from './components/people/people-for/people-for.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PeopleForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
