import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'amb-poney-create',
  templateUrl: './poney-create.component.html',
  styleUrls: ['./poney-create.component.css']
})
export class PoneyCreateComponent implements OnInit {

  poneyForm: FormGroup

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.poneyForm = new FormGroup({
      name: new FormControl('', [ Validators.required ], [ this.nameAvailable.bind(this) ]),
      image: new FormControl('', [ Validators.required, this.gif ])
    })
  }

  nameAvailable(control: FormControl): Observable<undefined | ValidationErrors> {
    return this.dataService.isPoneyNameAvailable(control.value).pipe(map(isAvailable => {
      if (isAvailable) {
        return undefined
      } else {
        return {
          nameNotAvailable: true
        }
      }
    }))
  }

  handleSubmit() {
    console.log(this.poneyForm)
  }

  gif(control: FormControl): undefined | ValidationErrors {
    let gifRegExp = new RegExp(/.+\.gif$/i)

    if (gifRegExp.test(control.value)) {
      return undefined
    } else {
      return {
        gif: true
      }
    }
  }
}
