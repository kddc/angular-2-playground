import { Inject, Injectable, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
// import { Map } from 'immutable';

@Injectable()
export class Ng2AutoScrollerService {
	private router: Router;
	private elements: any[];
	private scrollPositions: Object;
	private browserHistoryStateChange: boolean;

	constructor(
		router: Router,
		@Inject(DOCUMENT) document:any
	) {
		this.router = router;
		this.elements = [document.body];
		this.scrollPositions = {}
		this.browserHistoryStateChange = false;

		this.init();
	}

	private init() {
		window.onpopstate = (event) => {
    	this.browserHistoryStateChange = true
		}

		this.router.events.subscribe((event:any) => {
			if (event instanceof NavigationStart) {
				this.onNavigationStart();
			}
			if (event instanceof NavigationEnd) {
				this.onNavigationEnd();
			}
		});
	}

	private onNavigationStart() {
		console.log("navigation start")
		let state = this.router.url;
		this.scrollPositions[state] = {}
		for (var element of this.elements) {
			this.scrollPositions[state][element] = element.scrollTop
		}
		// this.scrollPositions;
		// debugger
	}

	private onNavigationEnd() {
		console.log("navigation end");
		let state = this.router.url;
		setTimeout(() => {
			// this.scrollPositions;
			// debugger
			if(this.browserHistoryStateChange == true && this.scrollPositions[state]) {
				for (var element of this.elements) {
					element.scrollTop = this.scrollPositions[state][element]
				}
			}
			// console.log("history", this.browserHistoryStateChange);
			this.browserHistoryStateChange = false
		});
	}

	public addScroller(className: string) {
		className = className.replace(".", "");
		let elem:any = document.getElementsByClassName(className)
		this.elements.push(elem[0])
		console.log(this.elements)
	}

}
