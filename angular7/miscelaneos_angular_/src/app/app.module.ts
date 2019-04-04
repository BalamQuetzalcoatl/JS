import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * Fontawesome
 */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { ResaltartDirective } from './directives/resaltart.directive';


@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ResaltartDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
