import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public newsReports = [];

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
              "apiKey=a1fb48da04b34c8b8ee38cdeeced4af8";
              
    return this.http.get(url).pipe(tap(response => {
      console.log(response);
      this.newsReports = response['articles'];
    }))
  }

  getToday()
  {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2,'0');
    var yyyy = today.getFullYear();

    return yyyy + "-" + mm + "-" + dd; 
  }

  setChosenNewsSources(chosenNewsSources)
  {
    this.storage.set('chosenNewsSources', chosenNewsSources);
    this.chosenNewsSources = chosenNewsSources;
  }
}
