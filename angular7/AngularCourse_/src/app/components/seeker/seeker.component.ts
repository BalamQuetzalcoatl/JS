import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.css']
})
export class SeekerComponent implements OnInit {

  heroes:any[] = [];
  search:string;

  constructor(private _activatedRouter: ActivatedRoute, private _heroeService: HeroesService, private router:Router) { }

  ngOnInit() {
    this._activatedRouter.params.subscribe(params=>{
      this.heroes = this._heroeService.searchHeroe(params['search']);
      this.search = params['search'];
      console.log(this.heroes);
    });
  }

  showHeroes(id:number){
    this.router.navigate(['/heroes', id]);
  }
}
