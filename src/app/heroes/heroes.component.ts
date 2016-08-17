import { Component, OnInit } from '@angular/core';

import { Hero, HeroListComponent, HeroDetailComponent, HeroService } from './index';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  directives: [ HeroListComponent, HeroDetailComponent ],
  providers: [ HeroService ]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  onSelect: Function;
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
