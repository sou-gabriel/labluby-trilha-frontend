import { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'
import { MeetupList } from '../components/MeetupList/MeetupList'

export const Favorites = () => {
  const { favorites } = useContext(FavoritesContext)

  const content =
    favorites.length === 0 ? (
      <p>You got no favorites yet! Start adding some?</p>
    ) : (
      <MeetupList meetups={favorites} />
    )

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  )
}
