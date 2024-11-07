import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProductDlgComponent } from '../../edit-product-dlg/edit-product-dlg.component';
import { Product } from 'src/app/data';

@Component({
  selector: 'product-actions',
  templateUrl: './product-actions.component.html',
  styleUrls: ['./product-actions.component.scss']
})
export class ProductActionsComponent {
  @Input() product!: Product;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(EditProductDlgComponent, {
      data: this.product,
    });

    console.log(this.product);

    dialogRef.afterClosed().subscribe(result => {
      //this.product = result;
    });
  }
}
