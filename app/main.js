"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require("@angular/core"); // to remove the message 'Angular 2 is running in the development mode. Call enableProdMode() to enable the production mode.'
var app_module_1 = require('./app.module');
core_1.enableProdMode(); // to remove the message 'Angular 2 is running in the development mode. Call enableProdMode() to enable the production mode.'
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map