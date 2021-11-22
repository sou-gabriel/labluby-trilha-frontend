import { Route, Switch, Redirect } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Welcome } from './pages/Welcome'
import { Products } from './pages/Products'
import { ProductDetail } from './pages/ProductDetail'

export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products/:productId'>
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  )
}
