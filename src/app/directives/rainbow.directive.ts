import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { PoneyData } from '../models/poney-data.model';

@Directive({
  selector: '[ambRainbow]'
})
export class RainbowDirective {

  @Input() color: string = 'silver'
  @Input('ambRainbow') isColored: boolean = false
  @Input() poneyData: PoneyData

  constructor(private element: ElementRef) {}

  ngOnInit() {
    if (this.isColored) {
      this.element.nativeElement.style.backgroundColor = this.color
    }
  }

  @HostListener('dblclick', ['$event'])
  handleDblclick(event: MouseEvent) {
    this.poneyData.distance += 10
  }

}

