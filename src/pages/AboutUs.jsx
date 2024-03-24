import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AboutUs() {
  const navigate = useNavigate()
  return (
    <div className='w-full min-h-screen flex items-center justify-center mt-10 sm:mt-2 px-1 sm:px-0'>
      <div className='sm:w-1/3 p-5 sm:p-10 border-[1px] border-zinc-500 text-slate-200 rounded-md'>
        <div id='heading' className='flex items-center gap-3'>
          <h1 className='text-3xl font-bold'>About Us.</h1>
          <div className='w-16 h-10 border-[1px] rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-100 hover:border-none hover:text-zinc-800 transition-all ease-in-out duration-500'>
            <ArrowOutwardIcon />
          </div>
        </div>
        <div id='paragraph' className='mt-8'>
          Welcome to Short Url, where innovation meets excellence. Founded on the principles of integrity, creativity, and customer satisfaction, we strive to provide top-notch solutions tailored to meet your needs. With a team of dedicated professionals committed to pushing boundaries and delivering unparalleled results, we embark on a journey to redefine industry standards. Our passion for innovation drives us to constantly explore new avenues, ensuring that we remain at the forefront of technological advancements. At Short Url, we are not just about products or services; we are about building lasting relationships and creating value for our clients. Join us as we shape the future together.
        </div>
        <div className='ml-6 mt-10'>
          <Button variant="outlined" sx={{ color: "white", borderColor: "white", ":hover": { borderColor: "white", background: "white", color: "black", outline: "none" } }} endIcon={<SupportAgentIcon />} onClick={() => navigate('/services')}>Services</Button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs