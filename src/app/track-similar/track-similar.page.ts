import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LastfmService } from '../services/lastfm.service';

@Component({
  selector: 'app-track-similar',
  templateUrl: './track-similar.page.html',
  styleUrls: ['./track-similar.page.scss'],
})
export class TrackSimilarPage implements OnInit {

  public hasSimilar: number = -1;
  @Input("") artist;
  @Input("") track;

  public similarTracks = [];

  constructor(private modalController: ModalController,
              private lastfmService: LastfmService) { }

  ngOnInit() {
    console.log(this.artist);
    console.log(this.track);
  }

  ionViewWillEnter()
  {
    this.hasSimilar = 1;
    this.getSimilar();
    if (this.hasSimilar == -1) this.hasSimilar = 0;
  }

  dismiss() {
    this.modalController.dismiss();
  }

  getSimilar() {
    this.lastfmService.getSimilarTrack(this.artist, this.track).subscribe(res => {
      console.log(res.similartracks.track.length)
      if (res.similartracks != null && res.similartracks.track.length > 0)
      {
        console.log(res.similartracks);
        this.hasSimilar = 1;
        this.similarTracks = res.similartracks.track;
      }
    });
  }

}
