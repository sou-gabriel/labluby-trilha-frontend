import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

import classes from './AuthForm.module.css'

const apiKey = 'AIzaSyCKxbvUf7gLxwf0vjfzkZqr0rIy4_Q4d6s'

const signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`
const signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  const authContext = useContext(AuthContext)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const enteredEmail = event.target.email.value
    const enteredPassword = event.target.password.value

    setIsLoading(true)

    const handleSendingUserData = async (url) => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (!response.ok) {
          throw new Error('Authentication failed!')
        }

        setIsLoading(false)
        return response.json()
      } catch (error) {
        setIsLoading(false)
        alert(error.message)
      }
    }

    if (isLogin) {
      handleSendingUserData(signInUrl).then((data) => {
        const expirationTime = new Date((new Date()).getTime() + (Number(data.expiresIn) * 1000))
        authContext.login(data.idToken, expirationTime.toISOString())
      })      
      history.replace('/')
      return
    }

    handleSendingUserData(signUpUrl).then((data) => console.log(data))
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default AuthForm
