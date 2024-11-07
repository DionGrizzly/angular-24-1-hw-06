import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { MainSectionModule } from './components/main-section/main-section.module';
import { SideMenuModule } from './components/side-menu/side-menu.module';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EditProductDlgComponent } from './components/main-section/product-table/edit-product-dlg/edit-product-dlg.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MainSectionModule,
    SideMenuModule,
    HeaderComponent,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
