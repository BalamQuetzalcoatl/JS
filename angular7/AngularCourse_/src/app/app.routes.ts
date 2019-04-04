import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent }  from './components/heroes/heroes.component';
import { HeroeComponent} from './components/heroe/heroe.component';
import { SeekerComponent } from './components/seeker/seeker.component';
import { PipesComponent } from './components/pipes/pipes.component';

const APP_ROUTES: Routes = [
  {  path: 'about', component: AboutComponent  },
  {  path: 'pipes', component: PipesComponent  },
  {  path: 'home', component: HomeComponent  },
  {  path: 'heroes', component: HeroesComponent  },
  {  path: 'heroes/:id', component: HeroeComponent  },
  {  path: 'seeker/:search', component: SeekerComponent  },
  {  path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
