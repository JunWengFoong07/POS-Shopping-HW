import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShoppingItem } from '../../model/shopping-item.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../../service/data.service';
import { ReviewAccordianComponent } from '../review-accordian/review-accordian.component';

@Component({
  selector: 'shared-ui-shopping-item-dialog',
  standalone: true,
  imports: [ CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule, ReviewAccordianComponent ],
  templateUrl: './shopping-item-dialog.component.html',
  styleUrls: ['./shopping-item-dialog.component.scss']
})
export class ShoppingItemDialogComponent implements OnInit {

  quantity = 1

  constructor(
    public dialogRef: MatDialogRef<ShoppingItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ShoppingItem,
    private toastrService: ToastrService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  // add item to cart and dislay success toast
  addToCart() {
    this.dataService.addItemToCart(this.data, this.quantity)
    this.toastrService.success('Added to cart!', 'Success')
  }

}
