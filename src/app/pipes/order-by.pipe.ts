import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(items: any[], property: string): any[] {
    return items && items.length ? items.sort((a, b) => {
      return a[property].localeCompare(b[property])
    }) : []
  }

}