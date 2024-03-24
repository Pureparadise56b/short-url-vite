import React, { useState } from 'react'
import { TextField, Link, Button, Alert, InputAdornment, IconButton } from '@mui/material'
import Google from '@mui/icons-material/Google'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

function LoginForm({ onSubmit, Error, setError }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email, password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='bg-slate-200 flex flex-col px-5 sm:px-8 py-12 gap-6 rounded-lg'>

        {
          Error ? <Alert variant="outlined" severity="error">
            {Error}
          </Alert> : ''
        }

        <TextField id="standard-basic" label="Email" variant="standard" sx={{ width: "300px" }} type='email' value={email} onChange={(e) => setEmail(e.target.value)} />

        <TextField id="standard-basic" label="Password" variant="standard" type={showPassword ? 'text' : 'password'} sx={{ width: "300px" }} value={password} onChange={(e) => setPassword(e.target.value)} InputProps={{
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

        <Link href="/password-reset">Forgot password?</Link>

        <div className='flex flex-col gap-3 justify-center'>
          <Button variant="contained" type='submit'>
            Login
          </Button>

          <p className='text-center'>or</p>

          <Button variant='outlined' onClick={() => alert("unavailable!! 🥲")} startIcon={<Google />} >Sign in with Google</Button>
        </div>
      </div>
    </form>
  )
}

export default LoginForm