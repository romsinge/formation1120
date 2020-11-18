import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PoneyData } from 'src/app/models/poney-data.model';
import { RaceData } from 'src/app/models/race-data.model';
import { DataService } from 'src/app/services/data.service';

type PoneyTable = PoneyData[]

@Component({
  selector: 'amb-race-create',
  templateUrl: './race-create.component.html',
  styleUrls: ['./race-create.component.css']
})
export class RaceCreateComponent implements OnInit {

  poneyTable$: Observable<PoneyTable>
  raceData: RaceData = {
    name: '',
    poneyIds: []
  }

  constructor(
    private dataService: DataService,
    private router: Router  
  ) { }

  ngOnInit() {
    this.poneyTable$ = this.dataService.poneyTable$
  }

  handleSubmit() {
    this.dataService.saveRace(this.raceData).subscribe({
      next: raceData => {
        this.router.navigateByUrl('/race-list')
      }
    })
  }

}
