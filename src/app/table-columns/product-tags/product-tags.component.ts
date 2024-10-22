import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-tags',
  templateUrl: './product-tags.component.html',
  styleUrls: ['./product-tags.component.scss']
})
export class ProductTagsComponent {
@Input() tags!: string[];
}
