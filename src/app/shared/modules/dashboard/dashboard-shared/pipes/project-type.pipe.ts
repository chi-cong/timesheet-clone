import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectType',
})
export class ProjectTypePipe implements PipeTransform {
  transform(value: number): string {
    if (value === 0) return 'T&M';
    if (value === 1) return 'FF';
    if (value === 2) return 'NB';
    if (value === 3) return 'ODC';
    if (value === 4) return 'P';
    if (value === 5) return 'T';
    return '';
  }
}
