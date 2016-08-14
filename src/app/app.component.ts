require('public/global.scss');
require('public/overlay.scss');

import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styles: [ require('./app.component.scss')]
})
export class AppComponent { }
