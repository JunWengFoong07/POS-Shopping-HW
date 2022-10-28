import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { SHOPPING_ITEM } from '../data/shopping-item.data'
import { ShoppingCartItem } from '../model/shopping-cart-item.model'
import { ShoppingCart } from '../model/shopping-cart.model'
import { ShoppingItem } from '../model/shopping-item.model'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private cart$ = new BehaviorSubject<ShoppingCart>({
    cartItems: [],
    total: 0.0,
  })

  private shoppingItem$ = new BehaviorSubject<ShoppingItem[]>([])

  constructor() {}

  // initialize shopping item from constant to the behaviour subject
  shoppingItemInit() {
    this.shoppingItem$.next(SHOPPING_ITEM)
  }

  // getting the shopping item as a behaviour subject / observable for real time data update
  getShoppingBehaviorItem() {
    return this.shoppingItem$
  }

  // find item in te list and update the object
  updateShoppingItem(item: ShoppingItem) {
    return new Observable<boolean>((subscribe) => {
      const itemToUpdate = this.shoppingItem$.value.find(
        (shoppingItem) => shoppingItem.id === item.id
      )

      if (itemToUpdate) {
        const index = this.shoppingItem$.value.indexOf(itemToUpdate)
        const list = this.shoppingItem$.value

        list[index] = item
        this.shoppingItem$.next(list)
        subscribe.next(true)
      }
      subscribe.next(false)
    })
  }

  getShoppingCartBehaviorItem() {
    this.push()
    return this.cart$
  }

  push() {
    const item: ShoppingCartItem = {
      id: 1,
      deliveryFee: 2,
      imagePath: '',
      name: 'asd',
      price:2,
      quantity: 2
    }

    this.cart$.next({... this.cart$.value, cartItems: [... this.cart$.value.cartItems, item]})
  }

}
