import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.scss']
})
export class ProductPriceComponent {
  @Input () price!: number;
  @Input () discount!: number;
}
