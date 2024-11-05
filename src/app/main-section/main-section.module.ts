import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricePipe } from '../pipes/price.pipe';
import { MainTableComponent } from './main-table/main-table.component';
import { ProductActionsComponent } from './table-columns/product-actions/product-actions.component';
import { ProductCountryComponent } from './table-columns/product-country/product-country.component';
import { ProductNameComponent } from './table-columns/product-name/product-name.component';
import { ProductPriceComponent } from './table-columns/product-price/product-price.component';
import { ProductSkuComponent } from './table-columns/product-sku/product-sku.component';
import { ProductTagsComponent } from './table-columns/product-tags/product-tags.component';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    MainTableComponent,
    ProductNameComponent,
    ProductSkuComponent,
    ProductPriceComponent,
    ProductCountryComponent,
    ProductTagsComponent,
    ProductActionsComponent,
    PricePipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule
  ],
  exports: [MainTableComponent]
})
export class MainSectionModule { }
