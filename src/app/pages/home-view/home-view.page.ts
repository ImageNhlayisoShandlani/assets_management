import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Asset } from 'src/app/models/assets';
import { CarsService } from 'src/app/services/cars/cars.service';
import { FridgesService } from 'src/app/services/fridges/fridges.service';
import { GeneratorsService } from 'src/app/services/generators/generators.service';
import { TrucksService } from 'src/app/services/trucks/trucks.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.page.html',
  styleUrls: ['./home-view.page.scss'],
})
export class HomeViewPage implements OnInit {
  cars: Asset[] = [];
  trucks: Asset[] = [];
  gens: Asset[] = [];
  fridges: Asset[] = [];
  constructor(
    private carsServ: CarsService,
    private trucksServ: TrucksService,
    private gensServ: GeneratorsService,
    private fSer: FridgesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cars = this.carsServ.getCars();
    this.trucks = this.trucksServ.getTrucks();
    this.gens = this.gensServ.getGens();
    this.fridges = this.fSer.getFridges();
  }

  view(i: number) {
    this.router.navigate(['asset-view', i]);
  }
  openCars() {
    var c = document.getElementById('cars') as HTMLElement;
    var t = document.getElementById('trucks') as HTMLElement;
    var g = document.getElementById('gens') as HTMLElement;
    var r = document.getElementById('refs') as HTMLElement;
    c?.classList.add('active');
    t.classList.remove('active');
    g.classList.remove('active');
    r.classList.remove('active');
  }

  openTrucks() {
    var c = document.getElementById('cars') as HTMLElement;
    var t = document.getElementById('trucks') as HTMLElement;
    var g = document.getElementById('gens') as HTMLElement;
    var r = document.getElementById('refs') as HTMLElement;
    c?.classList.remove('active');
    t.classList.add('active');
    g.classList.remove('active');
    r.classList.remove('active');
  }

  openRefs() {
    var c = document.getElementById('cars') as HTMLElement;
    var t = document.getElementById('trucks') as HTMLElement;
    var g = document.getElementById('gens') as HTMLElement;
    var r = document.getElementById('refs') as HTMLElement;
    c?.classList.remove('active');
    t.classList.remove('active');
    g.classList.remove('active');
    r.classList.add('active');
  }

  openGens() {
    var c = document.getElementById('cars') as HTMLElement;
    var t = document.getElementById('trucks') as HTMLElement;
    var g = document.getElementById('gens') as HTMLElement;
    var r = document.getElementById('refs') as HTMLElement;
    c?.classList.remove('active');
    t.classList.remove('active');
    g.classList.add('active');
    r.classList.remove('active');
  }
}
