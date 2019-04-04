import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

///Language in Spanish
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { HeroesService } from './services/heroes.service';

// Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SeekerComponent } from './components/seeker/seeker.component';
import { HeroeTarjetsComponent } from './components/heroe-tarjets/heroe-tarjets.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { DomsecurityPipe } from './components/pipes/domsecurity.pipe';
import { PasswordPipe } from './components/pipes/pwd/password.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SeekerComponent,
    HeroeTarjetsComponent,
    PipesComponent,
    DomsecurityPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
    HttpModule
  ],
  providers: [
    HeroesService,
  {  provide :LOCALE_ID,
    useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
