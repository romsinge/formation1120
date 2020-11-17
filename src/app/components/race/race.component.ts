import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { PoneyData } from 'src/app/models/poney-data.model';
import { RaceData } from 'src/app/models/race-data.model';
import { PoneyComponent } from '../poney/poney.component';

@Component({
  selector: 'amb-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent {

  @ViewChildren('poneyComponents') poneyComponentList: QueryList<PoneyComponent>
  @Input() raceData: RaceData 

  handleWin(poneyData: PoneyData) {
    console.log('WINNER : ', poneyData.name)
    this.poneyComponentList.forEach((poneyComponent) => {
      poneyComponent.stopRunning()
    })
  }

  poneyTable: PoneyData[] = [
    {
      id: '0',
      name: "Romain",
      image: "https://ng-ponyracer.ninja-squad.com/assets/images/pony-yellow-running.gif"
    },
    {
      id: '1',
      name: "Antoine",
      image: "https://ng-ponyracer.ninja-squad.com/assets/images/pony-purple-running.gif"
    },
    {
      id: '2',
      name: "Xavier",
      image: "https://ng-ponyracer.ninja-squad.com/assets/images/pony-orange-running.gif"
    },
    {
      id: '3',
      name: "Valerie",
      image: "https://ng-ponyracer.ninja-squad.com/assets/images/pony-green-running.gif"
    }
  ]

}
