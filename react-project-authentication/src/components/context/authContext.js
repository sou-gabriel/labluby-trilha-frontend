import { useState, createContext, useEffect, useCallback } from 'react'

let logoutTimer = null

export const AuthContext = createContext({
  token: null,
  isLoggedIn: null,
  login() {},
  logout() {}
})

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token')
  const storedExpirationDate = localStorage.getItem('expirationTime')

  const remainingTime = calculateRemainingTime(storedExpirationDate)

  if (remainingTime <= 3600) {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationTime')
    return null
  }

  return {
    token: storedToken,
    duration: remainingTime
  }
}

const calculateRemainingTime = expirationTime => {
  const currentTime = (new Date()).getTime()
  const adjExpirationTime = (new Date(expirationTime)).getTime()

  return adjExpirationTime - currentTime
}

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken()



  let initialToken = null
  
  if (tokenData) {
    initialToken = tokenData.token
  }

  const [token, setToken] = useState(initialToken)
  const userIsLoggedIn = Boolean(token)

  const logoutHandler = useCallback(() => {
    setToken(null)
    localStorage.removeItem('token')
    localStorage.removeItem('expirationTime')

    if (logoutTimer) {
      clearTimeout(logoutTimer)
    }
  }, [])

  const loginHandler = (userToken, expirationTime) => {
    setToken(userToken)
    localStorage.setItem('token', userToken)
    localStorage.setItem('expirationTime', expirationTime)

    const remainingTime = calculateRemainingTime(expirationTime)

    logoutTimer = setTimeout(logoutHandler, remainingTime)
  }

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration)
    }
  }, [tokenData, logoutHandler])

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}
