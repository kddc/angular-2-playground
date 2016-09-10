import { Component, OnInit } from '@angular/core';

import { Hero } from '../shared/hero.model';
import { HeroService } from '../shared/hero.service';
// import { HeroListListComponent } from './hero-list-list/hero-list-list.component';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  heroService: HeroService;

  constructor(heroService: HeroService) {
    this.heroService = heroService;
  }

  onSelectHero(hero: Hero) {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}
