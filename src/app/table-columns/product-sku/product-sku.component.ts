import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-sku',
  templateUrl: './product-sku.component.html',
  styleUrls: ['./product-sku.component.scss']
})
export class ProductSkuComponent {
  @Input () sku!: string;
}
