import { Component, OnInit, ElementRef, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

import { Ng2AutoScrollerService } from './ng2-auto-scroller/ng2-auto-scroller.service';

require('./app.component.scss')

@Component({
    // moduleId   : module.id,
    selector   : 'app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
    // styles     : [ require('./app.component.scss') ]
})

export class AppComponent implements OnInit,AfterViewInit {
  ng2AutoScrollerService: Ng2AutoScrollerService;
  public title = 'Tour of Heroes';
  private document:any;

  constructor(myElement: ElementRef, @Inject(DOCUMENT) document:any, private router: Router, ng2AutoScrollerService: Ng2AutoScrollerService){
    console.log(myElement);
    this.document = document;
    this.ng2AutoScrollerService = ng2AutoScrollerService;
  }

  ngOnInit() {
    this.ng2AutoScrollerService.addScroller(".md-sidenav-content")
    // this.router.events
    // .filter(event => event instanceof NavigationStart)
    // .subscribe((event) => {
    //   this.document.body.scrollTop = 0;
    // });
  }

  public ngAfterViewInit():any {
    this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd) {
        this.document.body.scrollTop = 0;
      }
    });
  }
}
