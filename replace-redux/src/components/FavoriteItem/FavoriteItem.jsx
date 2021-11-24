import { Card } from '../Card/Card'

import './FavoriteItem.css'

export const FavoriteItem = (props) => {
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className='favorite-item'>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </Card>
  )
}