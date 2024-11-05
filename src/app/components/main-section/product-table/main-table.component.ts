import { Component, OnInit } from '@angular/core';
import { Product } from '../../../data';
import { ProductService } from '../../../services/product-service.service';

@Component({
  selector: 'main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = [
    'name',
    'sku',
    'price',
    'countryCode',
    'tags',
    'actions'
  ]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
