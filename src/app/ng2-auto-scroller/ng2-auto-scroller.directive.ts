import { Directive, Injectable, AfterViewInit, ElementRef, AfterContentInit } from '@angular/core';
import { Ng2AutoScrollerService } from './ng2-auto-scroller.service';

@Injectable()
@Directive({
  selector: '[autoScroller]'
  // ,
  // host: {
  //   '(window:scroll)': 'onScroll($event)'
  // }
})
export class Ng2AutoScrollerDirective implements AfterViewInit,AfterContentInit {
  // private scrollStream$: ReplaySubject<any> = new ReplaySubject(1);
  private element:any;

  constructor(
    // private scrollSpy: ScrollSpyService
    element: ElementRef
  ) {
    this.element = element;
  }
  ngAfterContentInit() {
  }
  ngAfterViewInit() {
    console.log(this.element)
    // if (!!this.scrollSpy.getObservable('window')) {
    //   console.warn('ScrollSpy: duplicate id "window". Instance will be skipped!');
    // } else {
    //   this.scrollSpy.setObservable('window', this.scrollStream$);
    // }
  }

  onScroll($event: any) {
    // this.scrollStream$.next($event);
  }
}
