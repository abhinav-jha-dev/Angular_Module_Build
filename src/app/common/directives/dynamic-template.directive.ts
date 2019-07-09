import { Directive } from '@angular/core';

@Directive({
  selector: '[appTemplateProvider]'
})
export class DynamicTemplateProvider {
  constructor() { }
}