import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoneyData } from 'src/app/models/poney-data.model';
import { RaceData } from 'src/app/models/race-data.model';
import { DataService } from 'src/app/services/data.service';
import { PoneyComponent } from '../poney/poney.component';

@Component({
  selector: 'amb-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent {

  @ViewChildren('poneyComponents') poneyComponentList: QueryList<PoneyComponent>
  raceData: RaceData 

  handleWin(poneyData: PoneyData) {
    console.log('WINNER : ', poneyData.name)
    this.poneyComponentList.forEach((poneyComponent) => {
      poneyComponent.stopRunning()
    })
  }

  constructor(private dataService: DataService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.poneyTable = this.dataService.poneyTable

    this.route.paramMap.subscribe({
      next: (paramMap) => {
        this.raceData = this.dataService.getRaceById(paramMap.get('id'))
      }
    })
  }

  poneyTable: PoneyData[] = []

}
