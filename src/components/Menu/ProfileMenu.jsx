import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useAuth } from '../../AuthProvider'
import { useNavigate } from 'react-router-dom'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [isClicked, setIsClicked] = useState(false)
  const menuOpen = Boolean(anchorEl)
  const [open, setOpen] = useState(false)
  const { setIsLoggedIn, setUser, setToken, user } = useAuth()
  const navigate = useNavigate()

  const handleClick = (event) => {
    setIsClicked(true)
    setAnchorEl(event.currentTarget)
  }
  const handleLogout = () => {
    setOpen(true)
    setAnchorEl(null)
    localStorage.removeItem('access_token')
    setToken(null)
    setUser(null)
    setIsLoggedIn(false)
    setOpen(false)
    navigate('/')
  }

  const handleProfile = () => {
    setAnchorEl(null)
    navigate('/dashboard')
  }
  const handleFeedback = () => {
    setAnchorEl(null)
    navigate('/feedback')
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
    setIsClicked(false)
  }

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={menuOpen ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={menuOpen ? 'true' : undefined}
        onClick={handleClick}
        endIcon={isClicked ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}>
        {user?.userName}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleProfile}><PersonOutlineOutlinedIcon /> Profile</MenuItem>
        <MenuItem onClick={handleFeedback}><FeedbackOutlinedIcon /> Feedback</MenuItem>
        <MenuItem onClick={handleLogout} sx={{ color: "tomato" }}>Logout</MenuItem>
      </Menu>
    </div>
  );
}