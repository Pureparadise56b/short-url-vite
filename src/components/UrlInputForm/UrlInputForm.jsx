import React, { useState } from 'react'
import { TextField, Button, Alert } from '@mui/material'
import axios from 'axios'
import { baseUrl } from '../../baseUrl'

function UrlInputForm({ setIsGenerated }) {
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')

  const handleUrlSubmit = (e) => {
    e.preventDefault()
    const token = localStorage.getItem('access_token')
    axios.post(`${baseUrl}/user/generate-url`, { userUrl: url }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setUrl('')
      setIsGenerated((state) => !state)
    }).catch((error) => {
      if (error.response.data) {
        const errorMessage = error.response?.data
        setError(errorMessage.split(" :: ")[1])
      } else {
        setError(error.message)
      }
      setIsGenerated((state) => !state)
    })
  }

  return (
    <form onSubmit={handleUrlSubmit}>
      <div className='p-4 bg-slate-200 flex flex-col gap-5 rounded-md'>
        <h1>Paste a long URL</h1>
        {
          error ? <Alert variant="outlined" severity="error">
            {error}
          </Alert> : ''
        }
        <TextField label="Paste Url" variant="outlined" sx={{ width: '300px' }} onChange={(e) => setUrl(e.target.value)} value={url} />
        <Button variant='contained' type='submit'>Generate</Button>
      </div>
    </form>
  )
}

export default UrlInputForm