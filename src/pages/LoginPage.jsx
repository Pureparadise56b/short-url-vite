import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthProvider'
import LoginForm from '../components/Form/LoginForm'
import { baseUrl } from '../baseUrl'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import axios from 'axios'

function LoginPage() {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [open, setOpen] = useState(false)
  const { isLoggedIn, setIsLoggedIn, setToken } = useAuth()

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard')
      return
    }
  }, [isLoggedIn])

  const handleFormSubmit = async (data) => {
    try {
      setOpen(true)
      const response = await axios.post(`${baseUrl}/user/login`, data)
      const token = response.data?.data.accessToken
      localStorage.setItem('access_token', token)
      setIsLoggedIn(true)
      setToken(token)
      setOpen(false)
      navigate('/dashboard')
    } catch (error) {
      if (error.response?.data) {
        const errorMessage = error.response?.data
        setError(errorMessage.split(' :: ')[1])
      } else {
        const errorMessage = error.message
        setError(errorMessage)
      }
      setOpen(false)
    }
  }

  return (
    <div className='w-full h-[calc(100vh-9rem)] flex items-center justify-center flex-col pt-12'>
      <LoginForm onSubmit={handleFormSubmit} Error={error} setError={setError} />
      <p className='text-white mt-5'>Don't have an account? <Link to={"/register"} className='ml-1 text-orange-500'>click here</Link> </p>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export default LoginPage