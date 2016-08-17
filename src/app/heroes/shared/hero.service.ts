import { Injectable } from '@angular/core';

import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  list: Hero[];

  getHero(id: number) {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroes() {
    let _this = this;
    return new Promise<Hero[]>(function(resolve) {
      if (_this.list) {
        resolve(_this.list);
      } else {
        setTimeout(function() {
          _this.list = HEROES;
          resolve(HEROES);
        }, 1000);
      }
    });
  }
}
