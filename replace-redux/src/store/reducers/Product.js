import { TOGGLE_FAV } from '../actions/Product'

const INITIAL_STATE = {
  products: [
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavorite: false
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavorite: false
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavorite: false
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false
    }
  ]
}

export const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      const productIndex = state.products.findIndex(product => product.id === action.productId)
      const newFavoriteStatus = !state.products[productIndex].isFavorite
      const updatedProducts = [...state.products]

      updatedProducts[productIndex] = {
        ...state.products[productIndex],
        isFavorite: newFavoriteStatus
      }

      return {
        ...state,
        products: updatedProducts
      }
    default: 
      return state
  }
}