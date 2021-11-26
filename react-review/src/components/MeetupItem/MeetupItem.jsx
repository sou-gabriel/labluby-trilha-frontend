import { useContext } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext'
import { Wrapper } from '../Wrapper/Wrapper'

import classes from './MeetupItem.module.css'

export const MeetupItem = (props) => {
  const { itemIsFavorite, removeFavorite, addFavorite } =
    useContext(FavoritesContext)

  const toggleFavoriteStatus = () => {
    const meetupId = props.meetup.id

    console.log(meetupId)

    if (itemIsFavorite(meetupId)) {
      removeFavorite(meetupId)
      return
    }

    addFavorite({
      id: props.meetup.id,
      title: props.meetup.title,
      description: props.meetup.description,
      address: props.meetup.address
    })
  }

  return (
    <li className={classes.item}>
      <Wrapper>
        <div className={classes.image}>
          <img src={props.meetup.image} alt={props.meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
          <p>{props.meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatus}>
            {itemIsFavorite(props.meetup.id)
              ? 'Remove from Favorites'
              : 'To Favorites'}
          </button>
        </div>
      </Wrapper>
    </li>
  )
}
