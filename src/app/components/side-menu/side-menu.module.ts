import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [SideMenuComponent]
})
export class SideMenuModule { }
