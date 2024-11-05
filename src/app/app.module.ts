import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainSectionModule } from './main-section/main-section.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MainSectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
