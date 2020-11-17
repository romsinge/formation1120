import { Injectable } from '@angular/core';
import { PoneyData } from '../models/poney-data.model';
import { RaceData } from '../models/race-data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  get poneyTable() {
    return this._poneyTable
  }

  get raceTable() {
    return this._raceTable
  }

  private _poneyTable: PoneyData[] = [
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

  private _raceTable: RaceData[] = [
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
