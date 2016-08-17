import { Injectable } from '@angular/core';

import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  list: Hero[];

  getHeroes() {
    this.list = HEROES;
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly() {
    let _this = this;
    return new Promise<Hero[]>(function(resolve) {
      if (_this.list) {
        resolve(_this.list);
      } else {
        setTimeout(function() {
          _this.list = HEROES;
          resolve(HEROES);
        }, 2000);
      }
    });
  }
}
