import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EgresoComponent } from './components/egreso/egreso.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { FormularioComponent } from './components/formulario/formulario.component';

import { FormsModule } from '@angular/forms';

import { EgresoService } from './services/egreso.services';
import { IngresoService } from './services/ingreso.services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EgresoComponent,
    IngresoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EgresoService, IngresoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
