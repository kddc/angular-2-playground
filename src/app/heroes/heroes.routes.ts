import { Routes } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

export const heroesRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent,
    children: [
      {
        path: '',
        component: HeroListComponent
      },
      {
        path: ':id',
        component: HeroDetailComponent
      }
    ]
  }
];

// export const heroesRoutesConfig = RouterModule.forChild(heroesRoutes);
