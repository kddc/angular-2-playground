import { Component, Input } from '@angular/core';

import { Hero } from '../shared/hero.model';

@Component({
  selector   : 'hero-list',
  templateUrl: './hero-list.component.html',
  styles: [ require('./hero-list.component.scss').toString() ]
})
export class HeroListComponent {
  @Input() heroes: Hero[];
  @Input() selectedHero: Hero;
  @Input() onSelect: Function;
}
