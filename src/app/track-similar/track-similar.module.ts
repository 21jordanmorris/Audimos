import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackSimilarPageRoutingModule } from './track-similar-routing.module';

import { TrackSimilarPage } from './track-similar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackSimilarPageRoutingModule
  ],
  declarations: [TrackSimilarPage]
})
export class TrackSimilarPageModule {}
