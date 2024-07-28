import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userLevel'
})
export class UserLevelPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
