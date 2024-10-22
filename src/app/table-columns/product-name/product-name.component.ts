import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-name',
  templateUrl: './product-name.component.html',
  styleUrls: ['./product-name.component.scss']
})
export class ProductNameComponent {
  @Input () name!: string;
  @Input () img!: string;
}
