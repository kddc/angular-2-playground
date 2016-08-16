import { Component } from '@angular/core';

import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar/toolbar';

export class Hero {
  id: number;
  name: string;
}

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styles: [ require('./app.component.scss').toString() ],
    directives: [ MD_CARD_DIRECTIVES, MD_TOOLBAR_DIRECTIVES ]
})

export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
