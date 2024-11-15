import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDToEGP',
  standalone: true
})
export class USDToEGPPipe implements PipeTransform {

  transform(value: number , rate :number =49): number {
    return value *rate;
  }

}
