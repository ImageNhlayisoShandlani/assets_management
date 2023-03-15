import { Injectable } from '@angular/core';
import { Asset } from 'src/app/models/assets';

@Injectable({
  providedIn: 'root',
})
export class FridgesService {
  constructor() {}

  getFridges(): Asset[] {
    return [
      {
        image: 'assets/fridge_1.jpg',
        id: 10,
        category: 'Fridges & Appliances',
        measure: 'Should not exceed 1o deg Celcius',
        measureVal: '9deg',
        status: 'Good',
      },
      {
        image: 'assets/fridge_2.jpg',
        id: 50,
        category: 'Fridges & Appliances',
        measure: 'Should not exceed 1o deg Celcius',
        measureVal: '15deg',
        status: 'Overheating',
      },
      {
        image: 'assets/fridge_3.jpg',
        id: 21,
        category: 'Fridges & Appliances',
        measure: 'Should not exceed 1o deg Celcius',
        measureVal: '10deg',
        status: 'Okay',
      },
    ];
  }
}
