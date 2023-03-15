import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asset } from 'src/app/models/assets';

@Component({
  selector: 'app-asset-view',
  templateUrl: './asset-view.page.html',
  styleUrls: ['./asset-view.page.scss'],
})
export class AssetViewPage implements OnInit {
  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit() {}
}
