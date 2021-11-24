import { createContext, useState } from 'react'

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

export const ProductsContext = createContext({
  products: [],
  toggleFavoriteProduct: () => {}
})

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState(INITIAL_STATE)

  const toggleFavoriteProduct = (productId) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    })
  }

  return (
    <ProductsContext.Provider value={{ products, toggleFavoriteProduct }}>
      {props.children}
    </ProductsContext.Provider>
  )
}
