import { Route, Switch } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { AllMeetups } from './pages/AllMeetups'
import { NewMeetup } from './pages/NewMeetup'
import { Favorites } from './pages/Favorites'

export const App = () => {
  // localhost:3000/allMeetups

  return (
    <>
      <Header />
      <Switch>
        <Route path='/' component={AllMeetups} exact />
        <Route path='/new-meetup' component={NewMeetup} exact />
        <Route path='/favorites' component={Favorites} exact />
      </Switch>
    </>
  )
}
