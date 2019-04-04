import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Routes
import { ROUTES } from './app.routes';
import { SpotifyService } from './service/spotify.service';

// PIPES
import { NoimagesPipe } from './pipes/noimages.pipe';
import { TarjetsComponent } from './components/tarjets/tarjets.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagesPipe,
    TarjetsComponent,
    LoadingComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
