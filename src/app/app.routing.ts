import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

// import { HeroesComponent } from './heroes/heroes.component';
// import { HeroListComponent } from './shared/heroes';
// import { HeroDetailComponent } from './shared/heroes';

import { heroesRoutes } from './heroes/heroes.routes';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  ...heroesRoutes
  // {
  //   path: 'heroes',
  //   component: HeroesComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: HeroListComponent
  //     },
  //     {
  //       path: ':id',
  //       component: HeroDetailComponent
  //     }
  //   ]
  // }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
