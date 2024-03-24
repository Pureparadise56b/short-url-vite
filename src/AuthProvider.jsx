import axios from 'axios'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { baseUrl } from './baseUrl'
const authContext = createContext()

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [open, setOpen] = useState(false)

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('access_token')

      if (!token) {
        setIsLoggedIn(false)
        setUser(null)
        return
      }

      const response = await axios.get(`${baseUrl}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setUser(response.data?.data)
      setIsLoggedIn(true)
    } catch (error) {
      setUser(null)
      setIsLoggedIn(false)
    }
  }


  useEffect(() => {
    fetchData()
  }, [token, isLoggedIn])

  return (
    <authContext.Provider value={{
      isLoggedIn, setIsLoggedIn, user, setUser, token, setToken
    }}>
      {children}
    </authContext.Provider>
  )
}


export function useAuth() {
  const authConsumer = useContext(authContext)
  if (authConsumer === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  } else {
    return authConsumer
  }
}

export default AuthProvider