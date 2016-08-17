import { Component } from '@angular/core';

import { HeroesComponent } from './heroes';

@Component({
    selector   : 'app',
    templateUrl: './app.component.html',
    styles     : [ require('./app.component.scss').toString() ],
    directives : [ HeroesComponent ]
})

export class AppComponent {
  title = 'Tour of Heroes';
}
