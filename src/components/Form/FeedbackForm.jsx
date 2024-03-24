import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { Send } from '@mui/icons-material'

function FeedbackForm({ content, setContent, onSubmit }) {

  return (
    <form onSubmit={onSubmit}>
      <div className='bg-slate-200 flex flex-col px-5 sm:px-8 py-8 gap-5 rounded-lg'>
        <h1 className='text-xl text-zinc-800'>Enter your feedback</h1>
        <TextField
          id="filled-multiline-static"
          label="Feedback"
          multiline
          rows={4}
          variant="outlined"
          className='sm:w-[400px] w-[80vw]'
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <div className='pl-4'>
          <Button variant="contained" type='submit' endIcon={<Send />}>
            Submit
          </Button>
        </div>
      </div>
    </form>
  )
}

export default FeedbackForm