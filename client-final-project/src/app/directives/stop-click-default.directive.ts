import { Directive } from '@angular/core';

@Directive({
  selector: '[appStopClickDefault]',
})
export class StopClickDefaultDirective {

  stopClick(event:Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  constructor() { }

}
