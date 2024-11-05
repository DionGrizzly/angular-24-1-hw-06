import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainSectionModule } from './components/main-section/main-section.module';
import { SideMenuModule } from './components/side-menu/side-menu.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MainSectionModule,
    SideMenuModule,
    HeaderComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
