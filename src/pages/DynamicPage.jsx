import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { baseUrl } from '../baseUrl'

function DynamicPage() {
  const { shortId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${baseUrl}/url?shortId=${shortId}`).then((response) => {
      const redirectData = response.data?.data
      window.location.href = redirectData.actualUrl
    }).catch((error) => {
      navigate('/404')
    })
  }, [])

  return (
    <div></div>
  )
}

export default DynamicPage