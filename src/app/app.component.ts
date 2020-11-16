import { PoneyData } from './models/poney-data.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AMBIENT-IT !';

  handleWin(poneyData: PoneyData) {
    console.log('WINNER : ', poneyData.name)
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
