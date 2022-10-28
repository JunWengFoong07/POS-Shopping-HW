import { ShoppingCartItem } from "./shopping-cart-item.model";

export interface ShoppingCart {
  cartItems: ShoppingCartItem[]
  total: number
}
