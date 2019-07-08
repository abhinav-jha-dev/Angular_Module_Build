import { enableProdMode, NgModule, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { Module1Module } from './app/modules/module1/module1.module';
import { Module2Module } from './app/modules/module2/module2.module';

if (environment.production) {
  enableProdMode();
}
console.log(value())
platformBrowserDynamic().bootstrapModule(Module1Module)
      .catch(err => console.error(err));


function value(){
  switch (environment.moduleId) {
    case 123:
      return Module1Module;
    case 456:
      return Module2Module;
    default:
      return Module2Module;
  }
}


