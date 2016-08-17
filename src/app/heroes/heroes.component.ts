import { Component, OnInit } from '@angular/core';

import { Hero } from './shared/hero.model';
import { HeroService } from './shared/hero.service';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  directives: [ HeroListComponent, HeroDetailComponent ]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  heroService: HeroService;

  constructor(heroService: HeroService) {
    this.heroService = heroService;
  }

  onSelectHero(hero: Hero) {
    this.selectedHero = hero;
  }

  // selectHero(hero: Hero) {
  //   this.selectedHero = hero;
  // }

  ngOnInit() {
    // this.onSelect = this.selectHero.bind(this);
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
}
