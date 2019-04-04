import { Component } from '@angular/core';
import {SpotifyService} from '../../service/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent{

  artist: any[] = [];
  loading: boolean = false;
  constructor(private spotify: SpotifyService) { }

  buscar (termino: string){
    this.loading = true;
    this.spotify.getArtist(termino).subscribe((data: any) => {
      this.artist =  data;
      this.loading = false;
    });
  }

}
