import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/data';

@Component({
  selector: 'edit-product-dlg',
  templateUrl: './edit-product-dlg.component.html',
  styleUrls: ['./edit-product-dlg.component.scss']
})
export class EditProductDlgComponent {
  TITLE: string = 'Редагувати продукт'

  constructor(
    public dialogRef: MatDialogRef<EditProductDlgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}