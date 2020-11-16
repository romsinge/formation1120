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
  intervalId: any

  constructor() {}

  ngOnInit() {
    this.run()
  }
  
  run() {
    this.poneyData.distance = 0
    
    this.intervalId = setInterval(() => {
      
      this.poneyData.distance += Math.floor(Math.random() * 10) + 1
      
      if (this.poneyData.distance >= 90) {
        this.poneyData.distance = 90
        this.win.emit(this.poneyData)
      }

    }, 1000)

  }

  stopRunning() {
    clearInterval(this.intervalId)
  }

}
