import { ProductItem } from '../ProductItem/ProductItem'
import { useStore } from '../../hooks/store/store'

import './Products.css'

export const Products = () => {
  const [{ products }] = useStore()

  return (
    <ul className='products-list'>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          isFav={product.isFavorite}
        />
      ))}
    </ul>
  )
}
