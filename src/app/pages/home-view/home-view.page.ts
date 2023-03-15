import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.page.html',
  styleUrls: ['./home-view.page.scss'],
})
export class HomeViewPage implements OnInit {
  constructor() {}

  ngOnInit() {}

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
