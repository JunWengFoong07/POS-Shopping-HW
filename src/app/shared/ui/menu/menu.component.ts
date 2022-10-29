import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { MatBadgeModule } from '@angular/material/badge'
import { BehaviorSubject } from 'rxjs';
import { ShoppingCart } from '../../model/shopping-cart.model';
import { DataService } from '../../service/data.service';
import { MatCardModule } from '@angular/material/card';
import { CartItemCardComponent } from '../cart-item-card/cart-item-card.component';

@Component({
  selector: 'shared-ui-menu',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatBadgeModule, MatCardModule, CartItemCardComponent ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  cartList$?: BehaviorSubject<ShoppingCart>

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.cartList$ = this.dataService.getShoppingCartBehaviorItem()
  }

}
