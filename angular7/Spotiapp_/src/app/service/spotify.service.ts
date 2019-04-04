import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Service');
  }

  getQuery (query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB6V6vVoKd93629ZUiScseXJV0FZ-9YzCu91VOjnHwryCGXk0JwygssPty3w5sojqXyjsMar_9V92kAOuI'
    });
    return this.http.get(url, {headers});
  }

  getNewRealeses() {
    return this.getQuery('browse/new-releases').pipe(
      map(data => data['albums'].items )
    );
  }

  getArtist(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`).pipe(
      map(data => data['artists'].items)
    );
  }

  getArtisAlbum(type: string, id: string) {
    console.log(id, type);
    return this.getQuery(`${type}/${id}`).pipe(
      map(data => data)
    );
  }
}
