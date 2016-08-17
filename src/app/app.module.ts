import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { MdToolbarModule } from '@angular2-material/toolbar/toolbar';
import { MdButtonModule } from '@angular2-material/button/button';
import { MdCardModule } from '@angular2-material/card/card';
import { MdSidenavModule } from '@angular2-material/sidenav/sidenav';
import { MdListModule } from '@angular2-material/list/list';
import { MdIconModule } from '@angular2-material/icon/icon';
import { MdInputModule } from '@angular2-material/input/input';

import { AppComponent }  from './app.component';

import { HeroesComponent, HeroService } from './heroes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,

    MdSidenavModule,
    MdToolbarModule,
    MdCardModule,
    MdListModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
