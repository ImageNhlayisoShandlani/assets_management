import { Injectable } from '@angular/core';
import { Asset } from 'src/app/models/assets';

@Injectable({
  providedIn: 'root',
})
export class GeneratorsService {
  constructor() {}

  getGens(): Asset[] {
    return [
      {
        image: 'assets/gen_1.jpg',
        id: 1,
        category: 'Generators',
        measure: 'Powered On or Off',
        measureVal: 'Off',
        status: 'No load shedding',
      },
    ];
  }
}
