import { Component, OnInit } from '@angular/core';

import { Hero, HeroService, HeroListComponent, HeroDetailComponent } from '../shared/heroes';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styles: [ require('./dashboard.component.scss').toString() ],
  directives: [ HeroListComponent ]
})
export class DashboardComponent implements OnInit {
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
