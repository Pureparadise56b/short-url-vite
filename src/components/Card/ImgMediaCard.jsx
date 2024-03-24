import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deepOrange } from '@mui/material/colors';
import AlertDialog from '../AlertDialog/AlertDialog';
import axios from 'axios';
import { baseUrl } from '../../baseUrl';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthProvider';

export default function ImgMediaCard({ user }) {
  const [open, setOpen] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false)
  const { setIsLoggedIn, setToken, setUser } = useAuth()
  const navigate = useNavigate()

  const handleClickOpen = () => {
    setOpen(true);
  }

  useEffect(() => {
    if (!isConfirm) return
    const token = localStorage.getItem('access_token')
    if (!token) return
    axios.delete(`${baseUrl}/user/delete`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      localStorage.removeItem('access_token')
      setToken(null)
      setUser(null)
      setIsLoggedIn(false)
      navigate('/')
    }).catch((error) => {
      console.log(error)
    })
  }, [isConfirm])

  return (
    <Card sx={{ width: 345 }}>
      <div className='flex flex-col items-center mt-2'>
        <Avatar sx={{ bgcolor: deepOrange[500], textTransform: "uppercase" }}>{user?.userName.split("")[0]}</Avatar>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div" className='capitalize'>
            {user?.userName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user?.email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small" sx={{ color: "red" }} startIcon={<DeleteOutlineIcon />} onClick={handleClickOpen}>Delete account</Button>
        </CardActions>
        <AlertDialog open={open} setOpen={setOpen} isConfirm={isConfirm} setIsConfirm={setIsConfirm} />
      </div >
    </Card>
  );
}