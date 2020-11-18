import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { PoneyData } from '../models/poney-data.model';
import { RaceData } from '../models/race-data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  get poneyTable$(): Observable<PoneyData[]> {
    return this.http.get<PoneyData[]>('http://localhost:3000/poneys')
  }

  get raceTable$(): Observable<RaceData[]> {
    return this.http.get<RaceData[]>(`http://localhost:3000/races`)
  }

  getRaceById(id: string): Observable<RaceData> {
    return this.raceTable$.pipe(map(raceTable => {
      return raceTable.find(raceData => raceData.id === id)
    }))
  }

  constructor(private http: HttpClient) {}

  private _poneyTable: PoneyData[] = []

  private _raceTable: RaceData[] = []
}
