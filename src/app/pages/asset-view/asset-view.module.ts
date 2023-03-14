import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssetViewPageRoutingModule } from './asset-view-routing.module';

import { AssetViewPage } from './asset-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssetViewPageRoutingModule
  ],
  declarations: [AssetViewPage]
})
export class AssetViewPageModule {}
