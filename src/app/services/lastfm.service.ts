import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LastfmService {

  baseUrl = "http://ws.audioscrobbler.com/2.0/";
  apiKey = "2e9ecd65d0775731c53b1b21e518b444";

  tracksFromSearch = [];

  constructor(public http: HttpClient) { }

  getSimilarTrack(artist: string, track: string) {
    artist = artist.split(' ').join('+');
    track = track.split(' ').join('+');
    const url = this.baseUrl + 
                "?method=track.getsimilar&" +
                "artist=" + artist +"&" + 
                "track=" + track + "&" +
                "api_key=" + this.apiKey + "&" +
                "format=json";
    return this.http.get(url).pipe(tap((response:any) => {
      return response;
    }))
  }

  searchForTrack(track: string) {
    track = track.split(' ').join('+');
    const url = this.baseUrl + 
                "?method=track.search&" +
                "track=" + track + "&" +
                "api_key=" + this.apiKey + "&" +
                "format=json";
    return this.http.get(url).pipe(tap((response:any) => {
      //console.log(response.results.trackmatches.track);
      return response;
    }))
  }
}
