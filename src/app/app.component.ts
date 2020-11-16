import { PoneyComponent } from './components/poney/poney.component';
import { PoneyData } from './models/poney-data.model';
import { Component, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AMBIENT-IT !';
  @ViewChildren('poneyComponents') poneyComponentList: QueryList<PoneyComponent>

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
    }
  ]
}
