import { Injectable } from '@angular/core';
import { Asset } from 'src/app/models/assets';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor() {}

  getCars(): Asset[] {
    return [
      {
        image: 'assets/car_2.jpg',
        id: 11,
        category: 'Cars',
        measure: 'Speed (Must be 120 k/m or less)',
        measureVal: '118 k/m',
        status: 'Good',
      },
      {
        image: 'assets/car_1.jpg',
        id: 9,
        category: 'Cars',
        measure: 'Speed (Must be 120 k/m or less)',
        measureVal: '180 k/m',
        status: 'Overspeeding Car',
      },
    ];
  }
}
