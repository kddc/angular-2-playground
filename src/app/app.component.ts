import { Component } from '@angular/core';

import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button/button';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar/toolbar';

import { Hero, HeroListComponent, HeroDetailComponent } from './heroes/index';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
    selector   : 'app',
    templateUrl: './app.component.html',
    styles     : [ require('./app.component.scss').toString() ],
    directives : [ HeroListComponent, HeroDetailComponent ]
})

export class AppComponent {
  title  = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  public onSelect: Function;

  public selectHero(hero: Hero) {
    this.selectedHero = hero;
  }

  public ngOnInit() {
    this.onSelect = this.selectHero.bind(this);
  }
}
