import { Injectable } from '@angular/core';

import { Hero } from './hero.model';
import { HEROES } from '../mock-heroes';

@Injectable()
export class HeroService {
  list: Hero[];

  getHeroes() {
    this.list = HEROES;
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 2000)
    );
  }
}
