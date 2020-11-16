import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PoneyData } from './../../models/poney-data.model';

@Component({
  selector: 'amb-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.css']
})
export class PoneyComponent implements OnInit {

  @Input() poneyData: PoneyData
  @Output() win: EventEmitter<PoneyData> = new EventEmitter()

  constructor() {}

  ngOnInit() {
    this.win.emit(this.poneyData)
  }

}
