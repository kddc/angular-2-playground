import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// simulating backeng
import { XHRBackend } from '@angular/http';
// import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';

import { MdGridListModule } from '@angular2-material/grid-list/grid-list'
import { MdToolbarModule } from '@angular2-material/toolbar/toolbar';
import { MdButtonModule } from '@angular2-material/button/button';
import { MdCardModule } from '@angular2-material/card/card';
import { MdSidenavModule } from '@angular2-material/sidenav/sidenav';
import { MdListModule } from '@angular2-material/list/list';
import { MdIconModule } from '@angular2-material/icon/icon';
import { MdInputModule } from '@angular2-material/input/input';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroService, HeroesComponent, HeroListComponent, HeroListListComponent, HeroDetailComponent } from './heroes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,

    MdGridListModule.forRoot(),
    MdSidenavModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdCardModule.forRoot(),
    MdListModule.forRoot(),
    MdInputModule.forRoot(),
    MdButtonModule.forRoot(),
    MdIconModule.forRoot()
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeroListListComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [
    AppComponent
    // { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    // { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data
  ]
})
export class AppModule { }
