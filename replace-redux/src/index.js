import ReactDOM from 'react-dom'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
// import { ProductsProvider } from './context/ProductsContext'
import { configureStore } from './hooks/store/products'

import './index.css'

configureStore()

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
)
