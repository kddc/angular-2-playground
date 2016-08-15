require('assets/styles/global.scss');
require('assets/styles/overlay.scss');

import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styles: [ require('./app.component.scss').toString() ]
})

export class AppComponent { }
