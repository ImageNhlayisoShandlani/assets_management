import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetViewPage } from './asset-view.page';

const routes: Routes = [
  {
    path: '',
    component: AssetViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetViewPageRoutingModule {}
