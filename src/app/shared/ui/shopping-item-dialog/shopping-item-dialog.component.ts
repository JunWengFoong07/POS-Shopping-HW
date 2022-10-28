import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShoppingItem } from '../../model/shopping-item.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'shared-ui-shopping-item-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './shopping-item-dialog.component.html',
  styleUrls: ['./shopping-item-dialog.component.scss']
})
export class ShoppingItemDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ShoppingItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ShoppingItem,
  ) { }

  ngOnInit(): void {
  }



}
