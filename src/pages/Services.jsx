import React from 'react'
import WarningIcon from '@mui/icons-material/Warning';

function Services() {
  return (
    <div className='w-full h-screen flex items-center justify-center text-white'>
      <div id='container' className='sm:w-1/2 px-5 sm:px-0'>
        <div id='heading' className='flex items-center gap-4'>
          <WarningIcon className='scale-125 text-yellow-400' />
          <h1 className='text-3xl font-bold leading-wide'>This Page is Currently Under Construction.</h1>
        </div>
        <div id='paragraph' className='mt-10 text-zinc-400'>
          <p>We're sorry, but the webpage you're trying to access is currently being worked on. We're making improvements to ensure it provides the best experience possible. Please bear with us while we finalize these changes. If you need assistance or have any questions, don't hesitate to contact us. Thank you for your understanding, and we look forward to unveiling the updated page soon!</p>
        </div>
      </div>
    </div>
  )
}

export default Services