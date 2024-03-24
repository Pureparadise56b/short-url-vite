import React, { useState } from 'react'
import { Button } from '@mui/material'
import { Login, HowToReg } from '@mui/icons-material'
import { useNavigate, Link } from 'react-router-dom'
import ProfileMenu from '../Menu/ProfileMenu'
import { useAuth } from '../../AuthProvider'
import MobileDrawer from '../Drawer/MobileDrawer'

function Navbar() {
  const navigate = useNavigate()
  const [activePage, setActivepage] = useState('/')
  const { isLoggedIn } = useAuth()

  const handleAcivePage = (page) => {
    setActivepage(page)
  }

  return (
    <div className='w-full py-5 px-5 sm:px-10 flex items-center justify-between backdrop-blur-sm shadow-md fixed top-0 z-40'>
      <div className='logo'>
        <h1 className='text-3xl font-bold text-blue-600'>Short Url.</h1>
      </div>
      <div className='hidden sm:flex links items-center gap-5'>

        <Link to={"/"} className={`${activePage === "/" ? "text-blue-500" : "text-white"} hover:underline`} onClick={() => handleAcivePage('/')}>Home</Link>

        <Link to={"/services"} className={`${activePage === "/services" ? "text-blue-500" : "text-white"} hover:underline`} onClick={() => handleAcivePage('/services')}>Services</Link>

        <Link to={"/about-us"} className={`${activePage === "/about-us" ? "text-blue-500" : "text-white"} hover:underline`} onClick={() => handleAcivePage('/about-us')}>About Us</Link>

        {
          isLoggedIn ? <ProfileMenu /> : <div className='buttons flex items-center justify-center gap-4'>
            <Button variant="contained" endIcon={<Login />} onClick={() => navigate('/login')}>Login</Button>
            <Button variant="outlined" startIcon={<HowToReg />} onClick={() => navigate('/register')}>Signup</Button>
          </div>
        }
      </div>
      <MobileDrawer className={"block sm:hidden"} />
    </div>
  )
}

export default Navbar