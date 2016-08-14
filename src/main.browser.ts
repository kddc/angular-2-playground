import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';

// require('/src/public/overlay.css');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
