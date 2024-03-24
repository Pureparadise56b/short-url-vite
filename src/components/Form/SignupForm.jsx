import React, { useState } from 'react'
import { TextField, Button, Alert, InputAdornment, IconButton } from '@mui/material'
import Google from '@mui/icons-material/Google'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

function SignupForm({ onSubmit, Error }) {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ userName, email, password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='bg-slate-200 flex flex-col px-5 sm:px-8 py-12 gap-6 rounded-lg'>

        {
          Error ? <Alert variant="outlined" severity="error">
            {Error}
          </Alert> : ''
        }

        <TextField id="standard-basic" label="Username" variant="standard" sx={{ width: "300px" }} type='text' value={userName} onChange={(e) => setUserName(e.target.value)} />

        <TextField id="standard-basic" label="Email" variant="standard" sx={{ width: "300px" }} type='email' value={email} onChange={(e) => setEmail(e.target.value)} />

        <TextField id="standard-basic" label="Password" variant="standard" sx={{ width: "300px" }} type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }} />

        <div className='flex flex-col gap-3 justify-center'>
          <Button variant="contained" type='submit'>
            Signup
          </Button>
          <p className='text-center'>or</p>
          <Button variant='outlined' onClick={() => alert("unavailable!! 🥲")} startIcon={<Google />}>Continue with Google</Button>
        </div>
      </div>
    </form>
  )
}

export default SignupForm