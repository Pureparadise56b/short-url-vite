import React from 'react'
import { Button } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';

function HomePage() {

  const navigate = useNavigate()

  return (
    <>
      <div id='home-section' className='w-full h-screen grid sm:grid-cols-2 text-slate-200'>
        <div className='sm:col-span-1'>
          <div id='text-section' className='h-full flex items-start justify-center flex-col mt-10 sm:mt-0'>
            <div id='text-container' className='w-5/6 ml-6 sm:ml-14' >
              <div id='heading'>
                <h1 className='text-3xl sm:text-5xl font-bold'>Welcome to <span className='home-page-span bg-gradient-to-r from-cyan-500 to-blue-500'>Short Url.</span></h1>
                <h1 className='text-2xl sm:text-4xl font-bold mt-2'>Simplify Your Links</h1>
              </div>
              <p className='mt-5 text-xl text-zinc-400'>At Short Url, we make link management easy. Shorten your URLs with us and track their performance effortlessly. Say goodbye to long, messy links and hello to concise, branded ones. Sign up today and start simplifying your links with URL Short.</p>
            </div>
            <div className='w-full mx-auto flex justify-center mt-6 sm:ml-20 sm:block'>
              <Button variant='contained' endIcon={<KeyboardArrowRightIcon />} onClick={() => navigate('/login')}>Explore Now</Button>
            </div>
          </div>
        </div>
        <div id='image-section' className='sm:col-span-1'>

        </div>
      </div >
    </>
  )
}

export default HomePage