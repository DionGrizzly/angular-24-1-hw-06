import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainTableComponent } from './main-table/main-table.component';
import { ProductNameComponent } from './table-columns/product-name/product-name.component';
import { ProductSkuComponent } from './table-columns/product-sku/product-sku.component';
import { ProductPriceComponent } from './table-columns/product-price/product-price.component';
import { ProductCountryComponent } from './table-columns/product-country/product-country.component';
import { ProductTagsComponent } from './table-columns/product-tags/product-tags.component';
import { ProductActionsComponent } from './table-columns/product-actions/product-actions.component';
import { PricePipe } from './pipes/price.pipe';

@NgModule({
  declarations: [
    AppComponent,
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
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
