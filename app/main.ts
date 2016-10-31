import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from "@angular/core"; // to remove the message 'Angular 2 is running in the development mode. Call enableProdMode() to enable the production mode.'

import { AppModule } from './app.module';


enableProdMode(); // to remove the message 'Angular 2 is running in the development mode. Call enableProdMode() to enable the production mode.'
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
