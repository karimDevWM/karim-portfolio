import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as AOS from 'aos';

import { AppModule } from './app/app.module';

AOS.init();

platformBrowserDynamic().bootstrapModule(AppModule, 
// {
//   ngZoneEventCoalescing: true
// }
)
  .catch(err => console.error(err));
