import React, { useEffect, useState } from 'react'
import SignupForm from '../components/Form/SignupForm'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../baseUrl'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { useAuth } from '../AuthProvider'

function SignupPage() {

  const [error, setError] = useState('')
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const { isLoggedIn } = useAuth()

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard')
      return
    }
  }, [isLoggedIn])

  const handleSubmit = async (data) => {
    try {
      setOpen(true)
      const response = await axios.post(`${baseUrl}/user/register`, data)
      if (response.status === 201) {
        setOpen(false)
        navigate('/login')
      }
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
    <div className='w-full h-[calc(100vh-9rem)] flex items-center justify-center flex-col pt-16'>
      <SignupForm onSubmit={handleSubmit} Error={error} />
      <p className='text-white mt-5'>Already have an account? <Link to={"/login"} className='ml-1 text-orange-500'>click here</Link> </p>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>

  )
}

export default SignupPage