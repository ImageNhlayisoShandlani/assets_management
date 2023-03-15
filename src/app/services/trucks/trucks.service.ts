import { Injectable } from '@angular/core';
import { Asset } from 'src/app/models/assets';

@Injectable({
  providedIn: 'root',
})
export class TrucksService {
  constructor() {}

  getNum(id: number): Asset {
    let mine = this.getTrucks();
    let ass: Asset = {
      image: '',
      id: 0,
      category: '',
      measure: '',
      measureVal: '',
      status: '',
    };

    for (var num = 0; num < mine.length; num++) {
      if (id === mine[num].id) {
        ass = mine[num];
        break;
      }
    }

    return ass;
  }
  getTrucks(): Asset[] {
    return [
      {
        image: 'assets/truck_1.jpg',
        id: 6,
        category: 'Trucks',
        measure: 'Stop (Must be less than 2 hours)',
        measureVal: '5 hours',
        status: 'Too long',
      },
      {
        image: 'assets/truck_2.jpg',
        id: 5,
        category: 'Trucks',
        measure: 'Stop (Must be less than 2 hours)',
        measureVal: '1 hours',
        status: 'On Time',
      },
      {
        image: 'assets/truck_1.jpg',
        id: 4,
        category: 'Trucks',
        measure: 'Stop (Must be less than 2 hours)',
        measureVal: '4 hours',
        status: 'Too long',
      },
    ];
  }
}
