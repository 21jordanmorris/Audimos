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
    const modal = await this.modalController.create({
      component: AddSourcesPage,
    });
    modal.onDidDismiss().then(() => {
      this.ngOnInit();
      this.newsService.fetchNews().subscribe();
    });
    return await modal.present();
  }
}
