import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {
  transform(price: number, discount?: number): string {
    let formattedPrice = `${price} грн`;
    
    if (discount && discount > 0) {
      formattedPrice += ` (-${discount}%)`;
    }

    return formattedPrice;
  }
}
