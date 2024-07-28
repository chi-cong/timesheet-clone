import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userType',
})
export class UserTypePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    if (value === 0) return 'Staff';
    if (value === 1) return 'Internship';
    if (value === 2) return 'Collaborator';
    return '';
  }
}
