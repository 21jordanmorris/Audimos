import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from '../services/news.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonContent } from "@ionic/angular/";
import { ModalController } from '@ionic/angular';
import { AddSourcesPage } from '../add-sources/add-sources.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  private hasSources = true;

  constructor(private newsService: NewsService,
              public modalController: ModalController,
              private iab: InAppBrowser,
              private storage: Storage) { }

  async ngOnInit() 
  {
    await this.storage.get('chosenNewsSources').then(val => {
      if (val != null)
      {
        this.newsService.chosenNewsSources = val;
      }
    });
    this.hasSources = (this.newsService.chosenNewsSources.length == 0) ? false : true;
    if (this.hasSources)
    {
      this.newsService.fetchNews().subscribe();
    }
  }

  scrollToTop()
  {
    this.content.scrollToTop(1000);
  }

  cardClicked(item)
  {
    const browser = this.iab.create(item.url);
  }

  async addSourcesModal() 
  {
    var oldChosen = this.newsService.chosenNewsSources;
    console.log(oldChosen);
    const modal = await this.modalController.create({
      component: AddSourcesPage,
    });
    modal.onDidDismiss().then(() => {
      if (JSON.stringify(oldChosen) != JSON.stringify(this.newsService.chosenNewsSources))
      {
        this.ngOnInit();
      }
    });
    return await modal.present();
  }
}
