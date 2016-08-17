import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription }  from 'rxjs/Rx';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  param: String;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.param = params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
