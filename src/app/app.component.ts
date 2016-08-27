import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
    selector   : 'app',
    templateUrl: './app.component.html',
    styles     : [ require('./app.component.scss').toString() ]
})

export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor(myElement: ElementRef, private router: Router){
    console.log(myElement);
  }

  ngOnInit() {
    this.router.events
    .filter(event => event instanceof NavigationStart)
    .subscribe((event) => {
      window.scrollTo(0,0)
    });
  }
}
