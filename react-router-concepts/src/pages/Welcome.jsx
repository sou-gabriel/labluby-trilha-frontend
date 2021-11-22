import { Route } from 'react-router-dom'

export const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Route path="/products/new-user">
        <p>Welcome, new user!</p>
      </Route>
    </section>
  )
}