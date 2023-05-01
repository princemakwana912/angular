import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, filterString: string, fieldName:string): any[] {
    if (!value) { return []; }

    // return the original array if search text is empty
    if (!filterString) { return value; }

    // convert the searchText to lower case
    filterString = filterString.toLowerCase();

    // retrun the filtered array
    return value.filter((values: { [x: string]: string; }) => {
      if (values && values[fieldName]) {
        return values[fieldName].toLowerCase().includes(filterString);
      }
      return false;
    });
  }

}
