import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricePipe } from '../../pipes/price.pipe';
import { MainTableComponent } from './product-table/main-table.component';
import { ProductActionsComponent } from './product-table/table-columns/product-actions/product-actions.component';
import { ProductCountryComponent } from './product-table/table-columns/product-country/product-country.component';
import { ProductNameComponent } from './product-table/table-columns/product-name/product-name.component';
import { ProductPriceComponent } from './product-table/table-columns/product-price/product-price.component';
import { ProductSkuComponent } from './product-table/table-columns/product-sku/product-sku.component';
import { ProductTagsComponent } from './product-table/table-columns/product-tags/product-tags.component';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditProductDlgComponent } from './product-table/edit-product-dlg/edit-product-dlg.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainTableComponent,
    ProductNameComponent,
    ProductSkuComponent,
    ProductPriceComponent,
    ProductCountryComponent,
    ProductTagsComponent,
    ProductActionsComponent,
    PricePipe,
    EditProductDlgComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  exports: [MainTableComponent]
})
export class MainSectionModule { }
