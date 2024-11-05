import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-country',
  templateUrl: './product-country.component.html',
  styleUrls: ['./product-country.component.scss']
})
export class ProductCountryComponent {
  @Input () countryCode!: string;
}
