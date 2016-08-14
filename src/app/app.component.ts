require('public/global.css');
require('public/overlay.css');

import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styles: [ require('./app.component.css')]
})
export class AppComponent { }
