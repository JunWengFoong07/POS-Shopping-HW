import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartItem } from '../../model/shopping-cart-item.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from '../../service/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'shared-ui-cart-item-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule ],
  templateUrl: './cart-item-card.component.html',
  styleUrls: ['./cart-item-card.component.scss']
})
export class CartItemCardComponent {

  @Input() cartItems?: ShoppingCartItem[]

  constructor(
    private dataService: DataService,
    private toastrService: ToastrService
  ) { }

  // remove item from cart
  removeItemFromCart(item: ShoppingCartItem, index: number) {
    this.dataService.removeItemFromCart(item, index)
    this.toastrService.warning('Item Removed From Cart.', 'Notification')
  }

}
