import { FavoriteItem } from '../FavoriteItem/FavoriteItem'
import { useStore } from '../../hooks/store/store'

import './Favorites.css'

export const Favorites = () => {
  const [{ products }] = useStore()
  const favoriteProducts = products.filter((product) => product.isFavorite)

  return favoriteProducts.length > 0 ? (
    <ul className='products-list'>
      {favoriteProducts.map((product) => (
        <FavoriteItem
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
        />
      ))}
    </ul>
  ) : (
    <p className='placeholder'>Got no favorites yet!</p>
  )
}
