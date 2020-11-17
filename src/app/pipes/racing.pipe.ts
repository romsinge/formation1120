import { Pipe, PipeTransform } from '@angular/core';
import { PoneyData } from '../models/poney-data.model';

@Pipe({
  name: 'racing'
})
export class RacingPipe implements PipeTransform {

  transform(poneyTable: PoneyData[], poneyIds: string[]): PoneyData[] {
    return poneyTable && poneyTable.length ? poneyTable.filter(poneyData => {
      return poneyIds.includes(poneyData.id)
    }) : []
  }

}
