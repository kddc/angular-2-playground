import { Component } from '@angular/core';

import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button/button';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar/toolbar';

import { Hero, HeroService, HeroListComponent, HeroDetailComponent } from './heroes';

@Component({
    selector   : 'app',
    templateUrl: './app.component.html',
    styles     : [ require('./app.component.scss').toString() ],
    directives : [ HeroListComponent, HeroDetailComponent ],
    providers  : [ HeroService ]
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }

  onSelect: Function;

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.onSelect = this.selectHero.bind(this);
  }
}
