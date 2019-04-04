import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../service/spotify.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {
  artist: any = {};
  loading: boolean;
  constructor(private router: ActivatedRoute, private spotiService: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(data => {
      console.log(data);
        this.getArtisAlbum(data['type'], data['id']);
      //this.spotiService.getArtisAlbum(data['id'], data['type']).subscribe()
    });
   }

   getArtisAlbum(type: string , id: string){
     this.spotiService.getArtisAlbum(type, id).subscribe(response => {
       console.log(response, "jrhr");
       this.artist = response;
       this.loading = false;
     });
   }

}
