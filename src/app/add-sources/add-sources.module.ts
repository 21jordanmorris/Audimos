import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSourcesPageRoutingModule } from './add-sources-routing.module';

import { AddSourcesPage } from './add-sources.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSourcesPageRoutingModule
  ],
  declarations: [AddSourcesPage]
})
export class AddSourcesPageModule {}
