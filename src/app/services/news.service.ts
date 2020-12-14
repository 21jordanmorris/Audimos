import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public newsReports = [];
  public jsonObject: any;

  public newsSources = [
    "billboard.com", 
    "pitchfork.com", 
    "nme.com", 
    "rollingstone.com", 
    "loudwrite.com",
    "cmt.com", 
    "musicrow.com",
    "loudersound.com",
    "ultimateclassicrock.com",
    "stereogum.com",
    "spin.com",
  ];

  public chosenNewsSources = [];

  constructor(public http: HttpClient,
              private storage: Storage) { }

  fetchNews()
  {
    console.log("fetching news");

    let url = "https://newsapi.org/v2/everything?" +
              "domains=" + this.chosenNewsSources.join() + "&" +
              "apiKey=e1ebc834021a4d1b9b6e7995323a2f10";

    //url = "https://newsapi.org/v2/top-headlines?q=music&apiKey=e1ebc834021a4d1b9b6e7995323a2f10"

    console.log(url);
              
    return this.http.get(url).pipe(tap(
      response => {
        console.log("NEWS API RESPONSE: " + response);
        this.newsReports = response['articles'];
      },
      error => {
        this.jsonObject = JSON.parse(error);
        console.log("Error: " + this.jsonObject);
      }
    ))
  }

  setChosenNewsSources(chosenNewsSources)
  {
    this.storage.set('chosenNewsSources', chosenNewsSources);
    this.chosenNewsSources = chosenNewsSources;
  }
}
