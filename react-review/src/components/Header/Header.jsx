import { useContext } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext'
import { Link } from 'react-router-dom'

import classes from './Header.module.css'

export const Header = () => {
  const { totalFavorites } = useContext(FavoritesContext)

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>React Meetups</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Add New Meetup</Link>
          </li>
          <li>
            <Link to='/favorites'>
              My avorites 
              <span className={classes.badge}>{totalFavorites}</span>
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
