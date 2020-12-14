import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from '../services/news.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonContent } from "@ionic/angular/";
import { ModalController } from '@ionic/angular';
import { AddSourcesPage } from '../add-sources/add-sources.page';
import { Storage } from '@ionic/storage';
import { NewsTestService } from '../services/news-test.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  public hasSources = false;

  constructor(public newsService: NewsService,
              public modalController: ModalController,
              private iab: InAppBrowser,
              private storage: Storage) { }

  ngOnInit() {}

  ionViewWillEnter()
  {
    this.storage.get('chosenNewsSources').then(val => {
      if (val != null)
      {
        this.newsService.chosenNewsSources = val;
        console.log("this.newsService.chosenNewsSources = " + this.newsService.chosenNewsSources);
        this.hasSources = (this.newsService.chosenNewsSources.length == 0) ? false : true;
        if (this.hasSources)
        {
          this.newsService.fetchNews().subscribe();
        }
      }
    });
    this.newsService.fetchNews().subscribe();
  }

  scrollToTop()
  {
    this.content.scrollToTop(1000);
  }

  cardClicked(item)
  {
    const browser = this.iab.create(item.url);
    browser.show();
  }

  async addSourcesModal() 
  {
    var oldChosen = this.newsService.chosenNewsSources;
    console.log(oldChosen);
    const modal = await this.modalController.create({
      component: AddSourcesPage,
    });
    modal.onDidDismiss().then(() => {
      this.hasSources = (this.newsService.chosenNewsSources.length == 0) ? false : true;
      if (this.hasSources)
      {
        if (JSON.stringify(this.newsService.chosenNewsSources) != JSON.stringify(oldChosen))
          this.newsService.fetchNews().subscribe();
      }
    });
    return await modal.present();
  }
}
