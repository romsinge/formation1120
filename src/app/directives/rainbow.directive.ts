import { Directive } from '@angular/core';

@Directive({
  selector: '[ambRainbow]'
})
export class RainbowDirective {

  constructor() {
    console.log('DIRECTIVE CONSTRUCTOR')
  }

}
