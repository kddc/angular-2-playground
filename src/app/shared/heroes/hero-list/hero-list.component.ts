import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Hero } from '../shared/hero.model';

@Component({
  selector   : 'hero-list',
  templateUrl: './hero-list.component.html',
  styles: [ require('./hero-list.component.scss').toString() ]
})
export class HeroListComponent {
  @Input() heroes: Hero[];
  @Output() onSelect = new EventEmitter<Hero>();
  selectedHero: Hero;

  selectHero(hero: Hero) {
    this.selectedHero = hero;
    this.onSelect.emit(hero);
  }
}
