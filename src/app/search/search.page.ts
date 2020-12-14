import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LastfmService } from '../services/lastfm.service';
import { TrackSimilarPage } from '../track-similar/track-similar.page';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public lastfmResults = [];

  constructor(private lastfmService: LastfmService,
              private modalController: ModalController) { }
  
  ngOnInit() {}

  search(track: string) {
    this.lastfmResults = [];
    this.lastfmService.searchForTrack(track).subscribe(res => {
      if (res.results != null)
      {
        console.log(res.results.trackmatches.track);
        this.lastfmResults = res.results.trackmatches.track;
      }
    });
  }

  async findSimilarModal(track: string, artist: string) 
  {
    const modal = await this.modalController.create({
      component: TrackSimilarPage,
      componentProps: {
        track: track,
        artist: artist
      }
    });
    return await modal.present();
  }

}
