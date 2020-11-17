import { PoneyComponent } from './components/poney/poney.component';
import { PoneyData } from './models/poney-data.model';
import { Component, ViewChildren, QueryList } from '@angular/core';
import { RaceData } from './models/race-data.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AMBIENT-IT !';
  raceTable: RaceData[] = []

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.raceTable = this.dataService.raceTable
  }
}
