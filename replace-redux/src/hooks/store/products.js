import { initStore } from './store'

const INITIAL_STATE = [
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

export const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (currentState, productId) => {
      const productIndex = currentState.products.findIndex(product => product.id === productId)
      const newFavoriteStatus = !currentState.products[productIndex].isFavorite
      const updatedProducts = [...currentState.products]

      updatedProducts[productIndex] = {
        ...currentState.products[productIndex],
        isFavorite: newFavoriteStatus
      }
      return { products: updatedProducts }
    }
  }

  initStore(actions, { products: INITIAL_STATE })
}