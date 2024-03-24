import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import Divider from '@mui/material/Divider'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from "@mui/material/CircularProgress"
import PersonIcon from '@mui/icons-material/Person'
import FeedbackIcon from '@mui/icons-material/Feedback'
import LogoutIcon from '@mui/icons-material/Logout'
import LoginIcon from '@mui/icons-material/Login'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import { useAuth } from '../../AuthProvider'
import { useNavigate } from 'react-router-dom'

export default function MobileDrawer({ className }) {
  const [open, setOpen] = React.useState(false)
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()
  const [openLoader, setOpenLoader] = useState(false)
  const { setIsLoggedIn, setUser, setToken } = useAuth()

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }

  const handleOnclick = (page) => {
    if (page === 'About Us') {
      navigate('/about-us')
    } else if (page === 'Home') {
      navigate('/')
    } else {
      navigate(page.toLowerCase())
    }
  }

  const handleLogout = () => {
    setOpenLoader(true)
    localStorage.removeItem('access_token')
    setToken(null)
    setUser(null)
    setIsLoggedIn(false)
    setOpenLoader(false)
    navigate('/')
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Home', 'Services', 'About Us'].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => handleOnclick(text)}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {
        isLoggedIn ? <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/dashboard')}>
              <ListItemIcon><PersonIcon /></ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/feedback')}>
              <ListItemIcon><FeedbackIcon /></ListItemIcon>
              <ListItemText>Feedback</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon><LogoutIcon sx={{ color: 'tomato' }} /></ListItemIcon>
              <ListItemText sx={{ color: "tomato" }}>Logout</ListItemText>
            </ListItemButton>
          </ListItem>
        </List> : <div className='w-full flex flex-col items-center mt-5 gap-5'>
          <Button variant='outlined' startIcon={<LoginIcon />} onClick={() => navigate('/login')}>Login</Button>
          <Button variant='contained' startIcon={<HowToRegIcon />} onClick={() => navigate('/register')}>Signup</Button>
        </div>
      }
    </Box>
  );

  return (
    <div className={className}>
      <Button onClick={toggleDrawer(true)} variant='outlined'><MenuOutlinedIcon /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}