import { Injectable } from '@angular/core';

import { Hero } from './hero.model';
import { HEROES } from '../mock-heroes';

@Injectable()
export class HeroService {
  public list: Hero[];

  getHeroes() {
    this.list = HEROES;
    return this.list;
  }
}
