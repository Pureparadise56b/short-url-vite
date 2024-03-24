import React, { useEffect, useState } from 'react'
import { useAuth } from '../AuthProvider'
import { useNavigate } from 'react-router-dom'
import ImgMediaCard from '../components/Card/ImgMediaCard'
import UrlInputForm from '../components/UrlInputForm/UrlInputForm'
import UrlList from '../components/List/UrlList'

function Profile() {
  const [isGenerated, setIsGenerated] = useState({ state: false })
  const { isLoggedIn, user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate('/login')
    }
  }, [isLoggedIn])

  return (
    <div className='w-full min-h-screen'>
      <div className='w-full h-1/2 flex items-center justify-center pt-10 border-b-[1px] border-zinc-500 mt-4'>
        <div className='m-10 px-5'>
          <ImgMediaCard user={user} />
        </div>
      </div>
      <div className='w-full h-1/2 grid sm:grid-cols-10'>
        <div id='bottom-left' className='w-full h-full sm:col-span-4 flex items-center justify-center mt-10'>
          <UrlInputForm setIsGenerated={setIsGenerated} />
        </div>
        <div id='bottom-right' className='sm:col-span-6 row-span-2 sm:row-auto flex items-center justify-center mt-12 px-3'>
          <UrlList isGenerated={isGenerated} />
        </div>
      </div>
    </div>
  )
}

export default Profile