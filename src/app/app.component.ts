import { OnInit, Component } from '@angular/core';

import { Hero, HeroService, HeroListComponent, HeroDetailComponent } from './heroes';

@Component({
    selector   : 'app',
    templateUrl: './app.component.html',
    styles     : [ require('./app.component.scss').toString() ],
    directives : [ HeroListComponent, HeroDetailComponent ],
    providers  : [ HeroService ]
})

export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
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
