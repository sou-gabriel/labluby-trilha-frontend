import { Navigation } from './Navigation'

import classes from '../styles/Layout.module.css'

export const Layout = (props) => {
  return (
    <div>
      <Navigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  )
}
