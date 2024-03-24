import React, { useEffect, useState } from 'react'
import FeedbackForm from '../components/Form/FeedbackForm'
import { useAuth } from '../AuthProvider'
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios'
import { baseUrl } from '../baseUrl';
import { Link, useNavigate } from 'react-router-dom';

function FeedbackPage() {
  const [content, setContent] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)
  const { isLoggedIn, user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate('/login')
    }
  }, [isLoggedIn])

  const handleSubmit = (e) => {
    const token = localStorage.getItem('access_token')
    e.preventDefault()
    axios.post(`${baseUrl}/user/feedback`, {
      email: user?.email,
      userName: user.userName,
      content
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setSuccess(true)
      setError(null)
    }).catch((error) => {
      console.log(error)
      if (error.response.data) {
        const errorMessage = error.response?.data
        setError(errorMessage.split(' :: ')[1])
        setSuccess(false)
      } else {
        setError(error.message)
        setSuccess(false)
      }
    })
  }

  return (
    <div className='w-full h-screen flex items-center justify-center flex-col gap-6'>
      {
        success ? <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          Feedback successfully sent.
        </Alert> : ''
      }
      {
        error ? <Alert severity="error">{error}</Alert> : ''
      }
      <div id='heading'>
        <h1 className='text-white text-2xl px-5'>Improvement Suggestions: Let's Grow Together</h1>
      </div>
      <FeedbackForm content={content} setContent={setContent} onSubmit={handleSubmit} />
      <p className='text-slate-300'>Back to <Link className='text-orange-500' to={"/"}>Home</Link></p>
    </div>
  )
}

export default FeedbackPage