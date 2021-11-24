import { memo } from 'react'
import { Card } from '../Card/Card'
import { useStore } from '../../hooks/store/store'

import './ProductItem.css'

export const ProductItem = memo((props) => {
  console.log('RENDERING!')
  const [, dispatch] = useStore(false)

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className='product-item'>
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={() => dispatch('TOGGLE_FAV', props.id)}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  )
})
