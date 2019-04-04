import { Component } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  newReleases: any[] = [];
  loading = false;
  constructor(private spotiService: SpotifyService) {
        this.loading = true;
        this.spotiService.getNewRealeses().subscribe((data: any) => {
         this.newReleases = data;
         this.loading = false;
        });
    }


}
