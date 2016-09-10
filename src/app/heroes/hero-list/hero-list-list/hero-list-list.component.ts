import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../shared/hero.model';

@Component({
  selector   : 'hero-list-list',
  templateUrl: './hero-list-list.component.html',
  // styles: [ require('./hero-list-list.component.scss').toString() ]
})
export class HeroListListComponent {
  @Input() heroes: Hero[];
  @Output() onSelect = new EventEmitter<Hero>();
  selectedHero: Hero;

  constructor(
    private router: Router) {
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
    this.onSelect.emit(hero);
  }

  gotoDetail(hero: Hero) {
    let link = ['/heroes', hero.id];
    this.router.navigate(link);
  }
}
