import { Component, OnInit } from '@angular/core';

import { Hero, HeroService } from '../heroes';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styles: [ require('./dashboard.component.scss').toString() ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  heroService: HeroService;

  constructor(heroService: HeroService) {
    this.heroService = heroService;
  }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}
