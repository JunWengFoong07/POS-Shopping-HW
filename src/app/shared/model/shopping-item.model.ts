export interface ShoppingItem {
  id: number
  imagePath: string
  name: string
  description: string
  stock: number
  price: number
  star: number
  addedToCart: boolean
  reviews: ShoppingItemReview[]
}

export interface ShoppingItemReview {
  buyerName: string
  star: number
  comment: string
}
