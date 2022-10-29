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

  // get cart behavior subject
  getShoppingCartBehaviorItem() {
    return this.cart$
  }

  // add item to cart, if item exist in cart before it will update the total and quantity
  // else it will push the cart item into cart list and set the item to added to cart
  addItemToCart(item: ShoppingItem, quantity: number) {
    const shoppingItems = this.shoppingItem$.value
    const shoppingItemIndex = shoppingItems.indexOf(item)

    const cartItems = this.cart$.value.cartItems
    let total = this.cart$.value.total

    const cartItem = cartItems.find(cartItem => cartItem.id === item.id)

    if (cartItem) {
      const index = cartItems.indexOf(cartItem)

      cartItem.quantity += quantity
      total += cartItem.price * cartItem.quantity

      cartItems[index] = cartItem

      this.cart$.next({ total: total, cartItems: cartItems })
    } else {
      const newCartItem: ShoppingCartItem = {
        id: item.id,
        deliveryFee: 5,
        name: item.name,
        imagePath: item.imagePath,
        price: item.price,
        quantity: quantity
      }

      total += newCartItem.quantity * newCartItem.price

      this.cart$.next({total: total, cartItems: [... cartItems, newCartItem]})
    }

    shoppingItems[shoppingItemIndex].addedToCart = true

    this.shoppingItem$.next(shoppingItems)
  }


}
