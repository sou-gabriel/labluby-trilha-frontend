import { Route } from 'react-router-dom'

import { Navigation } from './components/Navigation/Navigation'
import { Products } from './components/Products/Products'
import { Favorites } from './components/Favorites/Favorites'

export const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <Route path='/' component={Products} exact />
        <Route path='/favorites' component={Favorites} />
      </main>
    </>
  )
}