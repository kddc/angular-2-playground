import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

require('./app.component.scss')

@Component({
    // moduleId   : module.id,
    selector   : 'app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
    // styles     : [ require('./app.component.scss') ]
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
