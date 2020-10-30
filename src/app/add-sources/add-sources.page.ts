import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-add-sources',
  templateUrl: './add-sources.page.html',
  styleUrls: ['./add-sources.page.scss'],
})
export class AddSourcesPage implements OnInit {

  constructor(private newsService: NewsService,
              public modalController: ModalController) { }

  ngOnInit() 
  {
  }

  isChosenAlready(item)
  {
    return this.newsService.chosenNewsSources.includes(item);
  }

  dismiss()
  {
    this.modalController.dismiss();
  }

  sourceClicked(item)
  {
    if (!this.newsService.chosenNewsSources.includes(item))
      this.newsService.chosenNewsSources.push(item);
    else
      this.newsService.chosenNewsSources = this.newsService.chosenNewsSources.filter(x => x != item);
    console.log(this.newsService.chosenNewsSources);
    this.newsService.setChosenNewsSources(this.newsService.chosenNewsSources);
  }
}
