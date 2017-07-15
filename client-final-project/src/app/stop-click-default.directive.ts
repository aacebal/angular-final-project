import { Directive } from '@angular/core';

@Directive({
  selector: '[appStopClickDefault]',
  events: stopClick($event)
})
export class StopClickDefaultDirective {

  stopClick(event:Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  constructor() { }


}
