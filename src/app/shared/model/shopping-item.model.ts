export interface ShoppingItem {
  id: number
  imagePath: string
  name: string
  category: CategoryEnum
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

export enum CategoryEnum {
  'Decoration' = 1,
  'Self Care',
  'House Cleaning',
  'Cooking',
  'Bake',
  'Beverage'
}
