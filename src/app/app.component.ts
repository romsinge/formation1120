import { PoneyComponent } from './components/poney/poney.component';
import { PoneyData } from './models/poney-data.model';
import { Component, ViewChildren, QueryList } from '@angular/core';
import { RaceData } from './models/race-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AMBIENT-IT !';
  raceTable: RaceData[] = [
    {
      id: '0',
      name: 'Le Mans',
      poneyIds: ['0', '1']
    },
    {
      id: '1',
      name: 'Paris',
      poneyIds: ['2', '3']
    }
  ]
}
