import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackSimilarPage } from './track-similar.page';

const routes: Routes = [
  {
    path: '',
    component: TrackSimilarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackSimilarPageRoutingModule {}
