import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsTestService {

  public newsReports = [];
  public jsonObject: any;

  constructor( public http: HttpClient ) { }

  fetchNews() {
    console.log('fetching news');
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=e1ebc834021a4d1b9b6e7995323a2f10"
    return this.http.get(url).pipe(tap(response => {
        console.log("NEWS API RESPONSE: " + response);
        this.newsReports = response['articles'];
    },
      error => {
        this.jsonObject = JSON.parse(error);
        console.log(error);
      }));
  }
}
